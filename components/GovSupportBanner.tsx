"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function GovSupportBanner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 스티키 하단 배너 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#e8594a] text-white shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-lg">🎁</span>
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight">숨은 정부지원금 찾기</p>
              <p className="text-xs text-white/80 leading-tight">내가 받을 수 있는 지원금 17가지 확인</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex-shrink-0 bg-white text-[#e8594a] font-bold text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            신청하기
          </button>
        </div>
      </div>

      {/* iframe 모달 */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-white">
          {/* 모달 헤더 */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#e8594a] text-white flex-shrink-0">
            <span className="font-bold text-sm">숨은 정부지원금 찾기</span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="닫기"
            >
              <X size={20} />
            </button>
          </div>
          {/* iframe */}
          <iframe
            src="https://gonggam.korea.kr/pubSpecial.es?v=1&pWise=main&pWiseMain=TOP1"
            className="flex-1 w-full border-0"
            title="숨은 정부지원금 찾기"
          />
        </div>
      )}
    </>
  );
}
