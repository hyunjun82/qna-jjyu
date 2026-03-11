import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Database,
  ShieldCheck,
  FileText,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "소개",
  description:
    "생활Q&A 에디터 소개. 공식 기관 자료 기반으로 지원금, 세금, 연금, 건강 등 생활 정보를 정확하게 전달합니다.",
};

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <nav className="flex items-center gap-1 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              홈
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium">소개</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <HelpCircle className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">
                생활정보 에디터
              </h1>
              <p className="mt-1 text-base text-gray-500">
                생활 정보 전문 에디터
              </p>
              <Badge className="mt-2 bg-blue-600 text-white hover:bg-blue-600">
                공식 기관 자료 기반
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 py-10 space-y-10">
        <section>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-blue-500">
              <BookOpen className="h-4.5 w-4.5" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">소개</h2>
          </div>
          <div className="text-[15px] text-gray-600 leading-[1.85] pl-[42px] space-y-3">
            <p>
              생활Q&A는 지원금, 세금, 연금, 건강, 부동산, 법률 등 생활 속 궁금한
              질문에 대해 공식 기관 자료를 기반으로 정확하고 이해하기 쉬운 답변을
              제공합니다.
            </p>
            <p>
              어려운 제도와 복잡한 절차를 누구나 이해할 수 있도록 쉬운 말로 풀어서
              전달하는 것을 목표로 합니다.
            </p>
          </div>
        </section>

        <Separator />

        <section>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-violet-500">
              <FileText className="h-4.5 w-4.5" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">콘텐츠 작성 원칙</h2>
          </div>
          <div className="text-[15px] text-gray-600 leading-[1.85] pl-[42px] space-y-3">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>공식 자료 기반</strong> — 국세청, 복지로, 국민연금공단 등
                공식 기관 자료를 기반으로 작성합니다.
              </li>
              <li>
                <strong>쉬운 설명</strong> — 전문 용어를 일반인이 이해할 수 있는
                쉬운 표현으로 변환합니다.
              </li>
              <li>
                <strong>최신 정보 유지</strong> — 제도 변경 시 콘텐츠를 즉시
                업데이트합니다.
              </li>
              <li>
                <strong>구조화된 답변</strong> — 정의, 조건, 신청 방법, 주의사항
                순서로 체계적으로 정리합니다.
              </li>
            </ol>
          </div>
        </section>

        <Separator />

        <section>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-emerald-500">
              <Database className="h-4.5 w-4.5" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">주요 참고 출처</h2>
          </div>
          <div className="text-[15px] text-gray-600 leading-[1.85] pl-[42px] space-y-3">
            <ul className="space-y-2">
              <li>국세청 홈택스 (hometax.go.kr)</li>
              <li>복지로 (bokjiro.go.kr)</li>
              <li>국민연금공단 (nps.or.kr)</li>
              <li>국민건강보험공단 (nhis.or.kr)</li>
              <li>대한법률구조공단 (klac.or.kr)</li>
              <li>국토교통부 실거래가 공개시스템</li>
            </ul>
          </div>
        </section>

        <Separator />

        <section>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-orange-500">
              <ShieldCheck className="h-4.5 w-4.5" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">이용 안내</h2>
          </div>
          <div className="text-[15px] text-gray-600 leading-[1.85] pl-[42px] space-y-3">
            <p>
              생활Q&A의 모든 콘텐츠는 정보 제공 목적으로 작성되며, 전문적인 상담을
              대체하지 않습니다. 개인의 상황에 따라 다를 수 있으므로, 정확한 확인은
              관할 기관 또는 전문가에게 문의하시기 바랍니다.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="rounded-xl border border-gray-200 bg-gray-50/50 p-5">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            다루는 카테고리
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}`}>
                <Badge
                  variant="outline"
                  className="hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
                >
                  {cat.icon} {cat.name}
                </Badge>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <div className="mx-auto max-w-3xl px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          홈으로 돌아가기
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "생활정보 에디터",
              url: "https://qna.jjyu.co.kr/about",
              jobTitle: "생활 정보 전문 에디터",
              description:
                "공식 기관 자료 기반으로 지원금, 세금, 연금, 건강 등 생활 정보를 정확하게 전달하는 에디터입니다.",
              worksFor: {
                "@type": "Organization",
                name: "생활Q&A",
                url: "https://qna.jjyu.co.kr",
              },
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "홈", item: "https://qna.jjyu.co.kr" },
              { "@type": "ListItem", position: 2, name: "소개", item: "https://qna.jjyu.co.kr/about" },
            ],
          }),
        }}
      />
    </>
  );
}
