"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const SUPPORTS = [
  { slug: "기본형-공익직불제-신청자격-금액", label: "기본형 공익직불제" },
  { slug: "장애수당-지급대상-금액-신청방법", label: "장애수당" },
  { slug: "장애인연금-수급자격-금액-신청", label: "장애인연금" },
  { slug: "저소득-지역가입자-건강보험료-지원", label: "저소득 국민연금 보험료 지원" },
  { slug: "독거노인-장애인-응급안전안심서비스", label: "독거노인·장애인 응급안전안심서비스" },
  { slug: "여성청소년-생리용품-지원-신청방법", label: "여성청소년 생리용품 지원" },
  { slug: "퇴소청소년-자립지원수당-지급액-신청", label: "퇴소청소년 자립지원수당" },
  { slug: "장애아동수당-지급대상-금액-신청", label: "장애아동수당" },
  { slug: "위기청소년-특별지원-대상-신청방법", label: "위기청소년 특별지원" },
  { slug: "고용촉진장려금-지원대상-금액-신청", label: "고용촉진장려금" },
  { slug: "임신-사전건강관리-지원사업-신청", label: "임신 사전건강관리 지원" },
  { slug: "농업인-건강보험료-연금보험료-지원", label: "농업인 건강·연금보험료 지원" },
  { slug: "영농도우미-지원-신청자격-방법", label: "영농도우미 지원" },
  { slug: "청소년한부모-아동양육비-자립지원", label: "청소년한부모 아동양육비·자립지원" },
  { slug: "저소득-청소년부모-아동양육비-지원", label: "저소득 청소년부모 아동양육비" },
  { slug: "다문화가족-자녀-기초학습-진로-교육활동비", label: "다문화가족 자녀 교육활동비" },
  { slug: "예술인-국민연금-보험료-지원", label: "예술인 국민연금 보험료 지원" },
];

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
            확인하기
          </button>
        </div>
      </div>

      {/* 내부 목록 모달 */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-white">
          {/* 모달 헤더 */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#e8594a] text-white flex-shrink-0">
            <span className="font-bold text-sm">숨은 정부지원금 17가지</span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="닫기"
            >
              <X size={20} />
            </button>
          </div>
          {/* 목록 */}
          <div className="flex-1 overflow-y-auto">
            <p className="px-4 pt-4 pb-2 text-sm text-gray-500">항목을 눌러 자세한 내용과 신청 방법을 확인하세요.</p>
            <ul className="divide-y divide-gray-100">
              {SUPPORTS.map((item, i) => (
                <li key={item.slug}>
                  <Link
                    href={`/지원금/${item.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e8594a] text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                    <span className="ml-auto text-gray-300 text-xs">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
