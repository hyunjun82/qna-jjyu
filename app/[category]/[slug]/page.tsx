import { Fragment } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";
import { RelatedSpokes } from "@/components/RelatedSpokes";
import { CategorySidebar } from "@/components/CategorySidebar";
import { ShareButtons } from "@/components/ShareButtons";
import { AuthorBio } from "@/components/AuthorBio";
import { AdSlot } from "@/components/AdSlot";
import { getSpokeArticle } from "@/data/articles";
import { spokeArticles } from "@/data/articles";
import { categories } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArticleViz } from "@/components/ArticleViz";
import {
  ChevronRight,
  ArrowLeft,
  FileText,
  Sparkles,
  ClipboardList,
  AlertTriangle,
  ShieldAlert,
  HelpCircle,
  CheckCircle,
  MessageCircle,
  BookOpen,
  Calculator,
} from "lucide-react";

function formatKoreanDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
}

// 섹션 제목 키워드 → 아이콘 + 색상 매핑
const SECTION_ICONS: Record<string, { icon: React.ElementType; color: string }> = {
  정의: { icon: BookOpen, color: "text-blue-500" },
  개요: { icon: BookOpen, color: "text-blue-500" },
  서류: { icon: FileText, color: "text-blue-500" },
  신청: { icon: FileText, color: "text-violet-500" },
  준비: { icon: FileText, color: "text-blue-500" },
  절차: { icon: ClipboardList, color: "text-emerald-500" },
  방법: { icon: ClipboardList, color: "text-emerald-500" },
  확인: { icon: CheckCircle, color: "text-emerald-500" },
  기간: { icon: Sparkles, color: "text-amber-500" },
  기한: { icon: Sparkles, color: "text-amber-500" },
  요건: { icon: CheckCircle, color: "text-emerald-500" },
  조건: { icon: CheckCircle, color: "text-emerald-500" },
  자격: { icon: CheckCircle, color: "text-emerald-500" },
  대상: { icon: CheckCircle, color: "text-emerald-500" },
  계산: { icon: Calculator, color: "text-amber-500" },
  금액: { icon: Calculator, color: "text-amber-500" },
  지급: { icon: Calculator, color: "text-amber-500" },
  주의사항: { icon: ShieldAlert, color: "text-orange-500" },
  주의: { icon: ShieldAlert, color: "text-orange-500" },
  유의: { icon: AlertTriangle, color: "text-red-500" },
  불이익: { icon: AlertTriangle, color: "text-red-500" },
  신고: { icon: FileText, color: "text-blue-500" },
};

function getSectionIcon(title: string) {
  for (const [keyword, config] of Object.entries(SECTION_ICONS)) {
    if (title.includes(keyword)) return config;
  }
  return { icon: HelpCircle, color: "text-gray-400" };
}

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const allParams: { category: string; slug: string }[] = [];
  for (const [categorySlug, spokes] of Object.entries(spokeArticles)) {
    for (const spokeSlug of Object.keys(spokes)) {
      allParams.push({ category: categorySlug, slug: spokeSlug });
    }
  }
  return allParams;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const catSlug = decodeURIComponent(category);
  const spokeSlug = decodeURIComponent(slug);
  const article = getSpokeArticle(catSlug, spokeSlug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    authors: [{ name: "생활Q&A 에디터", url: "https://qna.jjyu.co.kr/about" }],
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://qna.jjyu.co.kr/${catSlug}/${spokeSlug}`,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ["https://qna.jjyu.co.kr/about"],
      siteName: "생활Q&A",
      locale: "ko_KR",
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.metaDescription,
    },
    alternates: {
      canonical: `https://qna.jjyu.co.kr/${catSlug}/${spokeSlug}`,
    },
  };
}

export default async function SpokePage({ params }: PageProps) {
  const { category, slug } = await params;
  const catSlug = decodeURIComponent(category);
  const spokeSlug = decodeURIComponent(slug);
  const article = getSpokeArticle(catSlug, spokeSlug);
  const catInfo = categories.find((c) => c.slug === catSlug);

  if (!article || !catInfo) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <nav className="flex items-center gap-1 text-sm text-gray-500">
            <Link href="/" className="hover:text-gov-600">
              홈
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/${catSlug}`} className="hover:text-gov-600">
              {catInfo.name}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{article.h1}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <Badge className="bg-gov-600 text-white hover:bg-gov-600 mb-4">
            {catInfo.icon} {catInfo.name}
          </Badge>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {article.h1}
          </h1>
          <p className="mt-3 text-base text-gray-500 leading-relaxed sm:text-lg">
            {article.heroDescription}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <Link
              href="/about"
              className="font-medium text-gray-500 hover:text-gov-600 transition-colors"
            >
              생활Q&A 에디터
            </Link>
            {article.datePublished && (
              <>
                <span>|</span>
                <time dateTime={article.datePublished}>
                  {formatKoreanDate(article.datePublished)} 작성
                </time>
              </>
            )}
            {article.dateModified && article.dateModified !== article.datePublished && (
              <>
                <span>|</span>
                <time dateTime={article.dateModified}>
                  {formatKoreanDate(article.dateModified)} 수정
                </time>
              </>
            )}
          </div>
          <div className="mt-4">
            <ShareButtons title={article.title} />
          </div>
        </div>
      </section>

      {/* 2-column layout wrapper: main + sidebar */}
      <div className="mx-auto max-w-5xl px-4 lg:flex lg:gap-8">
        {/* Main Column */}
        <div className="flex-1 max-w-3xl">

      {/* Quick Answer Box (qna-specific) */}
      <section className="py-6">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            <h2 className="font-bold text-blue-900">핵심 답변</h2>
          </div>
          <p className="text-[15px] text-blue-800 leading-[1.85]">
            {article.quickAnswer}
          </p>
        </div>
      </section>

      {/* 광고 1 */}
      <div className="py-6">
        <AdSlot />
      </div>

      {/* top 위치 시각화 (본문 시작 전) */}
      <ArticleViz slug={spokeSlug} position="top" />

      {/* Article Sections */}
      <article className="daum-wm-content">
        {article.sections.map((section, i) => {
          const { icon: Icon, color } = getSectionIcon(section.title);
          return (
            <Fragment key={i}>
              <section className="mb-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 ${color}`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                {/* 시각화: 소제목 뒤, 본문 앞 */}
                <ArticleViz slug={spokeSlug} position={`after-${i}`} />

                <div
                  className="article-content text-[15px] text-gray-600 leading-[1.85] sm:text-[16px] pl-[42px] space-y-3"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />

                {i < article.sections.length - 1 && <Separator className="mt-8" />}
              </section>

              {/* 관련 Q&A: 2번째 섹션(i=1) 이후 본문 중간 배치 */}
              {i === 1 && <RelatedSpokes categorySlug={catSlug} currentSlug={spokeSlug} />}

              {/* 광고: 3번째 섹션(i=2) 이후 */}
              {i === 2 && <AdSlot />}
            </Fragment>
          );
        })}
      </article>

      {/* Tags */}
      {article.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Source Attribution */}
      {article.source && (
        <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
          <p className="text-xs text-gray-500">
            <strong>출처:</strong> {article.source}
          </p>
        </div>
      )}

      {/* FAQ */}
      {article.faq.length > 0 && (
        <div className="pb-4">
          <FAQSection items={article.faq} />
        </div>
      )}

      {/* 광고 2 */}
      <AdSlot />

      {/* 작성자 */}
      <AuthorBio
        categoryName={catInfo.name}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
      />

      {/* Back Links */}
      <div className="py-8 flex gap-4">
        <Link
          href={`/${catSlug}`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gov-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {catInfo.name} Q&A 더 보기
        </Link>
      </div>

        </div>{/* end Main Column */}

        {/* PC Sidebar */}
        <CategorySidebar categorySlug={catSlug} currentSlug={spokeSlug} />

      </div>{/* end 2-column wrapper */}

      {/* #1 QAPage + Article 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            author: {
              "@type": "Person",
              name: "생활Q&A 에디터",
              url: "https://qna.jjyu.co.kr/about",
              jobTitle: "생활정보 전문 에디터",
              worksFor: {
                "@type": "Organization",
                name: "생활Q&A",
              },
            },
            publisher: {
              "@type": "Organization",
              name: "생활Q&A",
              url: "https://qna.jjyu.co.kr",
              logo: {
                "@type": "ImageObject",
                url: "https://qna.jjyu.co.kr/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://qna.jjyu.co.kr/${catSlug}/${spokeSlug}`,
            },
            inLanguage: "ko",
          }),
        }}
      />

      {/* #2 QAPage 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "QAPage",
            mainEntity: {
              "@type": "Question",
              name: article.question,
              text: article.heroDescription,
              dateCreated: article.datePublished,
              answerCount: 1,
              acceptedAnswer: {
                "@type": "Answer",
                text: article.quickAnswer,
                dateCreated: article.datePublished,
                author: {
                  "@type": "Person",
                  name: "생활Q&A 에디터",
                  url: "https://qna.jjyu.co.kr/about",
                },
              },
            },
          }),
        }}
      />

      {/* #3 FAQPage 스키마 */}
      {article.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* #4 BreadcrumbList 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "홈",
                item: "https://qna.jjyu.co.kr",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: catInfo.name,
                item: `https://qna.jjyu.co.kr/${catSlug}`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.h1,
                item: `https://qna.jjyu.co.kr/${catSlug}/${spokeSlug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
