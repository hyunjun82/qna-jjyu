/**
 * Layer 3: Style Gate — AI냄새/문체/중복 검사
 *
 * 사용법:
 *   node scripts/verify-style.js
 *   node scripts/verify-style.js --slug 코스피200-야간선물-지수-확인
 */

const fs = require("fs");
const path = require("path");

const ARTICLES_DIR = path.resolve(__dirname, "..", "data", "articles");
const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, "quality-config.json"), "utf8"));

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
}

function splitSentences(text) {
  return stripHtml(text).split(/(?<=[.!?。])\s+/).map(s => s.trim()).filter(s => s.length > 3);
}

function getEnding(sentence) {
  const clean = sentence.replace(/[.!?。"')\]]/g, "").trim();
  const endings = ["합니다", "입니다", "됩니다", "었습니다", "있습니다", "없습니다",
    "해요", "이에요", "예요", "거예요", "세요", "어요", "아요", "네요", "데요", "래요",
    "나요", "가요", "죠"];
  for (const e of endings) {
    if (clean.endsWith(e)) return e;
  }
  return clean.slice(-2);
}

function getAllArticles() {
  const articles = [];
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith(".ts") && f !== "index.ts");
  for (const f of files) {
    const content = fs.readFileSync(path.join(ARTICLES_DIR, f), "utf8");
    const slugMatches = [...content.matchAll(/slug:\s*"([^"]+)"/g)];
    for (const m of slugMatches) {
      const slug = m[1];
      const start = m.index;
      const nextSlug = content.indexOf('slug: "', start + m[0].length);
      const block = nextSlug > 0 ? content.substring(start, nextSlug) : content.substring(start);
      if (!block.includes("content:")) continue;

      const get = (field) => {
        const fm = block.match(new RegExp(`${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
        return fm ? fm[1] : "";
      };

      const sectionContents = [...block.matchAll(/content:\s*`([\s\S]*?)`/g)].map(m => m[1]);
      const faqAnswers = [...block.matchAll(/answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
      const allHtml = sectionContents.join("\n");
      const allText = stripHtml(allHtml) + "\n" + faqAnswers.join("\n");

      articles.push({ slug, file: f, metaDescription: get("metaDescription"), allHtml, allText, sectionContents });
    }
  }
  return articles;
}

function checkStyle(article) {
  const errors = [];
  const plain = article.allText;
  const sentences = splitSentences(plain);
  const style = CONFIG.style;

  // 문어체 어미
  for (const ending of style.forbiddenEndings) {
    const re = new RegExp(`[가-힣]+${ending}`, "g");
    const metaBlock = article.metaDescription || "";
    const nonMeta = plain.replace(metaBlock, "");
    const matches = nonMeta.match(re) || [];
    if (matches.length > 0) {
      errors.push(`문어체 "${ending}" ${matches.length}건`);
    }
  }

  // AI냄새 단어
  for (const word of style.forbiddenWords) {
    if (plain.includes(word)) errors.push(`AI냄새: "${word}"`);
  }

  // filler 패턴
  for (const filler of style.fillerPatterns) {
    if (plain.includes(filler)) errors.push(`filler: "${filler}"`);
  }

  // 같은 어미 3연속
  let maxConsec = 1, curr = 1;
  for (let i = 1; i < sentences.length; i++) {
    if (getEnding(sentences[i]) === getEnding(sentences[i - 1])) {
      curr++;
      if (curr > maxConsec) maxConsec = curr;
    } else { curr = 1; }
  }
  if (maxConsec > style.maxConsecutiveSameEnding) {
    errors.push(`어미 ${maxConsec}연속 (${style.maxConsecutiveSameEnding} 이하 필수)`);
  }

  // 같은 시작 3연속
  let maxStart = 1, currStart = 1;
  for (let i = 1; i < sentences.length; i++) {
    const prev = sentences[i - 1].substring(0, 4);
    const cur = sentences[i].substring(0, 4);
    if (prev === cur && prev.length >= 2) {
      currStart++;
      if (currStart > maxStart) maxStart = currStart;
    } else { currStart = 1; }
  }
  if (maxStart > style.maxConsecutiveSameStart) {
    errors.push(`문장시작 ${maxStart}연속 (${style.maxConsecutiveSameStart} 이하 필수)`);
  }

  // 금지 HTML
  for (const tag of style.forbiddenHtml) {
    if (article.allHtml.toLowerCase().includes(tag.toLowerCase())) {
      errors.push(`금지 태그: ${tag}`);
    }
  }

  // 3문단 체크
  for (let i = 0; i < article.sectionContents.length; i++) {
    const pCount = (article.sectionContents[i].match(/<p>/gi) || []).length;
    if (pCount < style.requiredParagraphCount && article.sectionContents[i].length > 30) {
      errors.push(`섹션 ${i + 1}: ${pCount}문단 (${style.requiredParagraphCount} 이상 필수)`);
    }
  }

  // 출처 표기 중복 체크 — 동일 패턴 3회 초과 시 FAIL
  const sourceMatches = article.allText.match(/\([^)]*(?:기준|안내|공식)[^)]*\)/g) || [];
  const sourceCount = {};
  for (const s of sourceMatches) {
    sourceCount[s] = (sourceCount[s] || 0) + 1;
  }
  for (const [src, cnt] of Object.entries(sourceCount)) {
    if (cnt > 2) {
      errors.push(`출처 중복: "${src}" ${cnt}회 반복 (2회 이하 필수, heroDescription 1회 + 본문 최대 1회)`);
    }
  }

  // 링크 앵커 텍스트 = URL 체크
  const linkMatches = [...article.allHtml.matchAll(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/gi)];
  for (const [, href, text] of linkMatches) {
    const cleanText = text.trim();
    // 앵커 텍스트가 URL 형태이거나 href의 도메인/경로를 포함하면 FAIL
    if (/^https?:\/\//.test(cleanText) || /^[a-zA-Z0-9.-]+\.[a-z]{2,}\//.test(cleanText)) {
      errors.push(`링크 텍스트 금지: "${cleanText}" (URL 직접 노출 금지 — "신청 페이지" 등 의미있는 텍스트 사용)`);
    }
  }

  return errors;
}

function main() {
  const args = process.argv.slice(2);
  const singleSlug = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null;

  console.log("=== Layer 3: Style Gate ===\n");

  const allArticles = getAllArticles();
  const articles = singleSlug ? allArticles.filter(a => a.slug === singleSlug) : allArticles;

  if (articles.length === 0) {
    console.log("글 0개 — 검사 대상 없음");
    console.log("\nLayer 3 Style Gate PASS");
    return;
  }

  let pass = 0, fail = 0;
  const allErrors = [];

  for (const article of articles) {
    const errors = checkStyle(article);
    if (errors.length > 0) {
      fail++;
      allErrors.push({ slug: article.slug, errors });
    } else { pass++; }
  }

  if (allErrors.length > 0) {
    for (const e of allErrors) {
      for (const err of e.errors) {
        console.log(`  [${e.slug}] ${err}`);
      }
    }
  }

  console.log(`\n=== Style Gate 결과 ===`);
  console.log(`총 검사: ${articles.length}개  PASS: ${pass}개  FAIL: ${fail}개`);

  if (fail === 0) {
    console.log("\nLayer 3 Style Gate PASS");
  } else {
    console.log("\nLayer 3 Style Gate FAIL");
    process.exit(1);
  }
}

main();
