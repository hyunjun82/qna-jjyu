import Link from "next/link";
import { ArrowRight, Calendar, Database, HelpCircle } from "lucide-react";

interface AuthorBioProps {
  categoryName?: string;
  datePublished?: string;
  dateModified?: string;
}

function formatKoreanDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
}

export function AuthorBio({ categoryName, datePublished, dateModified }: AuthorBioProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <HelpCircle className="h-6 w-6" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-gray-900">
                생활정보 에디터
              </span>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                공식 기관 자료 기반
              </span>
              {categoryName && (
                <span className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[10px] font-medium text-gray-500">
                  {categoryName}
                </span>
              )}
            </div>
            <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
              국세청, 복지로, 정부24 등 공식 자료 활용하여 생활 속 궁금한 정보를 쉽게 풀어드려요.
              정확한 정보 전달을 위해 공식 데이터를 활용합니다.
            </p>

            {(datePublished || dateModified) && (
              <div className="mt-2 flex items-center gap-3 flex-wrap text-[11px] text-gray-400">
                {datePublished && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    작성 {formatKoreanDate(datePublished)}
                  </span>
                )}
                {dateModified && dateModified !== datePublished && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    수정 {formatKoreanDate(dateModified)}
                  </span>
                )}
              </div>
            )}

            <div className="mt-2 flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
                <Database className="h-2.5 w-2.5" />
                공식 기관 자료 기반
              </span>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                작성자 소개
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
