import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-white to-green-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-sm font-bold text-gray-900">생활Q&A</p>
            <p className="mt-1 text-xs text-gray-400">
              공식 기관 자료 기반 생활정보 서비스
            </p>
          </div>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-gov-600 transition-colors">
              홈
            </Link>
            <Link href="/about" className="hover:text-gov-600 transition-colors">
              작성자 소개
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-green-200 bg-green-50/50 px-4 py-3">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-700">면책조항:</strong> 본 사이트에서 제공하는 정보는
            공식 기관 자료를 기반으로 하며,
            일반적인 정보 제공 목적입니다. 개인의 상황에 따라 다를 수 있으므로, 정확한 확인은{" "}
            <strong className="text-gray-700">관할 기관 또는 전문가</strong>에게 문의하시기 바랍니다.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-4 sm:flex-row">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>출처: 공식 기관 자료</span>
          </div>
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} 생활Q&A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
