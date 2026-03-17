import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { hubArticles } from "@/data/articles";

interface CategorySidebarProps {
  categorySlug: string;
  currentSlug: string;
}

export function CategorySidebar({ categorySlug, currentSlug }: CategorySidebarProps) {
  const hub = hubArticles[categorySlug];
  if (!hub) return null;

  // 현재 글의 group 확인
  const currentSpoke = hub.spokes.find((s) => s.slug === currentSlug);
  const currentGroup = currentSpoke?.group;

  // 같은 그룹 글만 표시 (그룹 없으면 그룹 없는 글끼리)
  const visibleSpokes = hub.spokes.filter((s) =>
    currentGroup ? s.group === currentGroup : !s.group
  );

  const isHiddenSupport = currentGroup === "숨은지원금";
  const sidebarTitle = isHiddenSupport ? "🎁 숨은 정부지원금 17가지" : "관련 Q&A";
  const allLinkText = isHiddenSupport ? "전체 지원금 보기" : "전체 Q&A 보기";

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24">
        <nav className="rounded-xl border border-gray-200 bg-white p-4">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            {sidebarTitle}
          </h3>
          <ul className="space-y-1">
            {visibleSpokes.map((spoke) => {
              const isCurrent = spoke.slug === currentSlug;
              return (
                <li key={spoke.slug}>
                  <Link
                    href={`/${categorySlug}/${spoke.slug}`}
                    className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isCurrent
                        ? "bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    <ChevronRight
                      className={`h-3.5 w-3.5 shrink-0 ${
                        isCurrent ? "text-blue-500" : "text-gray-300 group-hover:text-blue-400"
                      }`}
                    />
                    <span className="truncate">{spoke.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <Link
              href={`/${categorySlug}`}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-300" />
              {allLinkText}
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
