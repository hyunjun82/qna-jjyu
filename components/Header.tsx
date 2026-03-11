import Link from "next/link";
import { HelpCircle, Search, Menu } from "lucide-react";

const categories = [
  { name: "지원금", href: "/지원금" },
  { name: "연금보험", href: "/연금보험" },
  { name: "세금", href: "/세금" },
  { name: "건강", href: "/건강" },
  { name: "부동산", href: "/부동산" },
  { name: "금융", href: "/금융" },
  { name: "취업", href: "/취업" },
  { name: "법률", href: "/법률" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 정부 식별 바 */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex items-center gap-2">
          <span className="text-[11px] text-gray-500">
            공식 기관 자료 기반 생활정보
          </span>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gov-700 text-white">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">생활Q&A</span>
              <span className="text-[10px] text-gray-400 leading-tight">쉽고 정확한 생활 정보</span>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gov-50 hover:text-gov-700"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* 검색 + 메뉴 */}
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
