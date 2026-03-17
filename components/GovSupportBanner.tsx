"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";

const SUPPORTS = [
  { slug: "기본형-공익직불제-신청자격-금액", label: "기본형 공익직불제", desc: "농업인 직불금 3~5월 신청" },
  { slug: "장애수당-지급대상-금액-신청방법", label: "장애수당", desc: "경증장애인 월 6만 원" },
  { slug: "장애인연금-수급자격-금액-신청", label: "장애인연금", desc: "중증장애인 월 342,510원" },
  { slug: "저소득-지역가입자-건강보험료-지원", label: "저소득 국민연금 지원", desc: "보험료 50% 최대 12개월" },
  { slug: "독거노인-장애인-응급안전안심서비스", label: "응급안전안심서비스", desc: "독거노인 ICT 장비 무료 설치" },
  { slug: "여성청소년-생리용품-지원-신청방법", label: "여성청소년 생리용품", desc: "9~24세 월 14,000원 바우처" },
  { slug: "퇴소청소년-자립지원수당-지급액-신청", label: "퇴소청소년 자립지원수당", desc: "월 50만 원 최장 5년" },
  { slug: "장애아동수당-지급대상-금액-신청", label: "장애아동수당", desc: "18세 미만 월 3~22만 원" },
  { slug: "위기청소년-특별지원-대상-신청방법", label: "위기청소년 특별지원", desc: "생활·건강 등 7가지 지원" },
  { slug: "고용촉진장려금-지원대상-금액-신청", label: "고용촉진장려금", desc: "취약계층 채용 사업주 월 30~60만" },
  { slug: "임신-사전건강관리-지원사업-신청", label: "임신 사전건강관리", desc: "가임력 검사비 여성 13만·남성 5만" },
  { slug: "농업인-건강보험료-연금보험료-지원", label: "농업인 보험료 지원", desc: "건강 28%·연금 50% 국고지원" },
  { slug: "영농도우미-지원-신청자격-방법", label: "영농도우미 지원", desc: "사고·질병 농업인 인건비 70%" },
  { slug: "청소년한부모-아동양육비-자립지원", label: "청소년한부모 지원", desc: "0~1세 월 40만·2세↑ 37만" },
  { slug: "저소득-청소년부모-아동양육비-지원", label: "저소득 청소년부모", desc: "자녀 1인당 월 25만 원" },
  { slug: "다문화가족-자녀-기초학습-진로-교육활동비", label: "다문화가족 자녀 교육", desc: "초 40만·중 50만·고 60만 원/년" },
  { slug: "예술인-국민연금-보험료-지원", label: "예술인 국민연금", desc: "보험료 50% 월 최대 37,950원" },
];

export function GovSupportBanner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 스티키 하단 배너 — 전체 클릭 가능 */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-lg cursor-pointer hover:bg-blue-700 transition-colors"
        onClick={() => setOpen(true)}
      >
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-lg">🎁</span>
            <div className="min-w-0">
              <p className="font-bold text-sm leading-tight">숨은 정부지원금 찾기</p>
              <p className="text-xs text-white/80 leading-tight">내가 받을 수 있는 지원금 17가지 확인</p>
            </div>
          </div>
          <span className="flex-shrink-0 bg-white text-blue-600 font-bold text-sm px-4 py-2 rounded-full">
            신청하기
          </span>
        </div>
      </div>

      {/* 내부 목록 모달 */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-gray-50">
          {/* 모달 헤더 */}
          <div className="flex-shrink-0 bg-blue-600 text-white px-4 py-4">
            <div className="max-w-2xl mx-auto flex items-center justify-between">
              <div>
                <p className="font-bold text-base leading-tight">🎁 숨은 정부지원금 17가지</p>
                <p className="text-xs text-white/80 mt-0.5">몰라서 못 받는 지원금, 지금 확인하세요</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="닫기"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* 카드 그리드 */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-2xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SUPPORTS.map((item, i) => (
                <Link
                  key={item.slug}
                  href={`/지원금/${item.slug}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-tight">{item.desc}</p>
                  </div>
                  <ChevronRight className="flex-shrink-0 h-4 w-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
