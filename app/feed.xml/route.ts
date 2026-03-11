import { hubArticles, spokeArticles } from "@/data/articles";

const BASE_URL = "https://qna.jjyu.co.kr";

export async function GET() {
  const allItems: { title: string; url: string; description: string; date: string }[] = [];

  for (const hub of Object.values(hubArticles)) {
    allItems.push({
      title: hub.title,
      url: `${BASE_URL}/${encodeURIComponent(hub.categorySlug)}`,
      description: hub.metaDescription,
      date: hub.dateModified || hub.datePublished || "2026-03-01",
    });
  }

  for (const [category, articles] of Object.entries(spokeArticles)) {
    for (const article of Object.values(articles)) {
      allItems.push({
        title: article.title,
        url: `${BASE_URL}/${encodeURIComponent(category)}/${encodeURIComponent(article.slug)}`,
        description: article.metaDescription,
        date: article.dateModified || article.datePublished || "2026-03-01",
      });
    }
  }

  allItems.sort((a, b) => b.date.localeCompare(a.date));

  const escapeXml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const rssItems = allItems
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>생활Q&amp;A - 궁금한 생활 정보, 한눈에 해결</title>
    <link>${BASE_URL}</link>
    <description>지원금, 세금, 연금, 부동산, 건강 등 생활 속 궁금한 질문에 대한 정확하고 쉬운 답변.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
