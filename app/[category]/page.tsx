import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { categories } from "@/data/categories";
import { getHubArticle } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { AuthorBio } from "@/components/AuthorBio";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const slug = decodeURIComponent(category);
  const cat = categories.find((c) => c.slug === slug);
  const hub = getHubArticle(slug);

  if (!cat) return {};

  const title = hub?.title || `${cat.name} Q&A`;
  const description = hub?.metaDescription || cat.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://qna.jjyu.co.kr/${slug}`,
      siteName: "생활Q&A",
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: { canonical: `https://qna.jjyu.co.kr/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const slug = decodeURIComponent(category);
  const cat = categories.find((c) => c.slug === slug);

  if (!cat) notFound();

  const hub = getHubArticle(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://qna.jjyu.co.kr" },
      { "@type": "ListItem", position: 2, name: cat.name, item: `https://qna.jjyu.co.kr/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ItemList Schema */}
      {hub && hub.spokes.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: `${cat.name} Q&A`,
              description: hub.description,
              numberOfItems: hub.spokes.length,
              itemListElement: hub.spokes.map((spoke, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: spoke.title,
                url: `https://qna.jjyu.co.kr/${slug}/${spoke.slug}`,
              })),
            }),
          }}
        />
      )}

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 pt-6">
        <ol className="flex items-center gap-1.5 text-sm text-gray-400">
          <li>
            <Link href="/" className="hover:text-gray-600">홈</Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5" />
          <li className="font-medium text-gray-900">{cat.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gov-50 text-3xl">
            {cat.icon}
          </div>
          <div>
            <Badge variant="secondary" className="mb-2">
              {cat.name}
            </Badge>
            <h1 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              {hub?.h1 || `${cat.name} Q&A`}
            </h1>
            <p className="mt-2 text-gray-600">
              {hub?.heroDescription || cat.description}
            </p>
          </div>
        </div>
      </section>

      <AuthorBio
        categoryName={cat.name}
        datePublished={hub?.datePublished}
        dateModified={hub?.dateModified}
      />

      {/* Spoke Articles List */}
      {hub && hub.spokes.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            {cat.name} 관련 Q&A
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hub.spokes.map((spoke) => (
              <Link
                key={spoke.slug}
                href={`/${slug}/${spoke.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:border-gov-200"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-gov-600 transition-colors">
                  {spoke.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                  {spoke.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gov-600">
                  자세히 보기
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {(!hub || hub.spokes.length === 0) && (
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <p className="text-gray-500">콘텐츠 준비 중입니다.</p>
            <p className="mt-1 text-sm text-gray-400">
              곧 {cat.name} 관련 Q&A가 추가될 예정이에요.
            </p>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gov-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          전체 카테고리로 돌아가기
        </Link>
      </div>
    </>
  );
}
