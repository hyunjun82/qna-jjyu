import Link from "next/link";
import {
  HelpCircle, ChevronRight, TrendingUp,
  FileSearch, BookOpen, MessageCircleQuestion, ClipboardList,
} from "lucide-react";
import { categories } from "@/data/categories";
import { spokeArticles } from "@/data/articles";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  지원금: <span className="text-2xl">💰</span>,
  연금보험: <span className="text-2xl">🏥</span>,
  세금: <span className="text-2xl">🧾</span>,
  건강: <span className="text-2xl">🩺</span>,
  부동산: <span className="text-2xl">🏠</span>,
  금융: <span className="text-2xl">🏦</span>,
  취업: <span className="text-2xl">💼</span>,
  법률: <span className="text-2xl">⚖️</span>,
};

export default function HomePage() {
  return (
    <>
      {/* Hero - 정부사이트 스타일 진한 녹색 */}
      <section className="bg-[#1a4731] text-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-green-300 text-sm mb-3">공식 기관 자료 기반 생활 정보</p>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl leading-tight">
            궁금한 <span className="text-yellow-200">생활 정보</span>,<br />
            한눈에 해결하세요
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-green-100/80 md:text-lg">
            지원금, 세금, 연금, 부동산, 건강까지<br className="sm:hidden" />
            어려운 정보를 쉽고 정확하게 안내해 드립니다.
          </p>

          {/* 검색 바 */}
          <div className="mx-auto mt-8 max-w-lg">
            <div className="flex items-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 p-1">
              <input
                type="text"
                placeholder="궁금한 생활 정보를 검색하세요"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 outline-none"
              />
              <button className="rounded-lg bg-white text-gov-700 px-5 py-2.5 text-sm font-bold hover:bg-gov-50 transition-colors">
                검색
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 주요메뉴 바로가기 */}
      <section className="mx-auto max-w-6xl px-4 -mt-8 relative z-10">
        <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <ClipboardList className="h-5 w-5 text-gov-600" />
            <h2 className="text-lg font-bold text-gray-900">
              주요메뉴 <span className="text-gov-600">바로가기</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat) => {
              const articleCount = Object.keys(spokeArticles[cat.slug] ?? {}).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-5 text-center transition-all hover:border-gov-200 hover:bg-gov-50 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 transition-colors group-hover:bg-gov-600 group-hover:text-white group-hover:border-gov-600">
                    {CATEGORY_ICONS[cat.slug]}
                  </div>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-gov-700">
                    {cat.name}
                  </span>
                  {articleCount > 0 && (
                    <span className="text-xs text-gray-400">{articleCount}개</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 많이 찾는 생활 정보 */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {/* 인기 생활정보 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-4">
              <TrendingUp className="h-5 w-5 text-gov-600" />
              인기 생활정보
            </h3>
            <div className="space-y-2.5">
              {[
                { href: "/지원금", text: "2026 근로장려금 신청 자격과 방법" },
                { href: "/세금", text: "연말정산 환급 많이 받는 방법" },
                { href: "/연금보험", text: "국민연금 수령 나이와 예상 수령액" },
                { href: "/취업", text: "실업급여 신청 조건과 수급 기간" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3.5 transition-all hover:border-gov-200 hover:bg-gov-50"
                >
                  <ChevronRight className="h-4 w-4 text-gov-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gov-700">
                    {item.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 자주 찾는 서비스 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-4">
              <FileSearch className="h-5 w-5 text-gov-600" />
              자주 찾는 서비스
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: "/지원금", text: "청년월세 지원금" },
                { href: "/세금", text: "종합소득세 신고" },
                { href: "/부동산", text: "전세보증금 반환" },
                { href: "/건강", text: "건강검진 대상 확인" },
                { href: "/금융", text: "대출 금리 비교" },
                { href: "/법률", text: "내용증명 작성법" },
                { href: "/연금보험", text: "건강보험료 계산" },
                { href: "/취업", text: "퇴직금 계산 방법" },
              ].map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="group flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3.5 transition-all hover:border-gov-200 hover:bg-gov-50"
                >
                  <FileSearch className="h-4 w-4 text-gov-500 shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gov-700">
                    {item.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 카테고리별 안내 */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            카테고리별 안내
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group flex items-start gap-4 rounded-2xl bg-white border border-gray-200 p-5 transition-all hover:shadow-lg hover:border-gov-200 hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gov-50 text-gov-600 transition-colors group-hover:bg-gov-600 group-hover:text-white">
                  {CATEGORY_ICONS[cat.slug]}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 group-hover:text-gov-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-gov-600">
                    자세히 보기
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 안내 배너 */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-gov-100 bg-gov-50/50 p-5">
            <BookOpen className="h-8 w-8 text-gov-600 shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 text-sm">쉬운 설명</h3>
              <p className="mt-1 text-xs text-gray-500">
                어려운 제도를 누구나 이해할 수 있게 쉽게 풀어서 설명해요
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-gov-100 bg-gov-50/50 p-5">
            <HelpCircle className="h-8 w-8 text-gov-600 shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 text-sm">정확한 정보</h3>
              <p className="mt-1 text-xs text-gray-500">
                국세청, 복지로 등 공식 기관 데이터를 기반으로 최신 정보를 반영해요
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-gov-100 bg-gov-50/50 p-5">
            <MessageCircleQuestion className="h-8 w-8 text-gov-600 shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 text-sm">실생활 밀착</h3>
              <p className="mt-1 text-xs text-gray-500">
                실제 생활에서 마주치는 궁금증 중심으로 안내해요
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
