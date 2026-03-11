"use client";

import { QuickAnswerBox } from "@/components/viz/QuickAnswerBox";
import { StepByStep } from "@/components/viz/StepByStep";
import { ChecklistCard } from "@/components/viz/ChecklistCard";
import { ConditionFilter } from "@/components/viz/ConditionFilter";
import { ExpandableInfo } from "@/components/viz/ExpandableInfo";
import { VsTable } from "@/components/viz/VsTable";
import { TipAlert } from "@/components/viz/TipAlert";
import { SimCalculator } from "@/components/viz/SimCalculator";
import { PeriodGuide } from "@/components/viz/PeriodGuide";
import { FlowChart } from "@/components/viz/FlowChart";
import { BracketTable } from "@/components/viz/BracketTable";
import { GovernmentLink } from "@/components/viz/GovernmentLink";
import { DocumentList } from "@/components/viz/DocumentList";
import { ExampleBox } from "@/components/viz/ExampleBox";
import { FeeBreakdown } from "@/components/viz/FeeBreakdown";
import { DueDateAlert } from "@/components/viz/DueDateAlert";

type VizPosition = "top" | `after-${number}`;

interface VizMap {
  [slug: string]: Partial<Record<VizPosition, React.ReactNode>>;
}

const VIZ_MAP: VizMap = {
  "여권-재발급-절차-준비물-수수료": {
    top: (
      <StepByStep
        steps={[
          { number: 1, title: "온라인 or 방문 선택", description: "정부24·KB스타뱅킹(온라인) 또는 여권사무 대행기관(방문)" },
          { number: 2, title: "서류 준비", description: "신청서, 사진 1매, 신분증, 기존 여권" },
          { number: 3, title: "신청 및 수수료 납부", description: "10년 58면 52,000원 / 26면 49,000원" },
          { number: 4, title: "여권 수령", description: "선택한 대행기관 방문, 본인 직접 수령" },
        ]}
      />
    ),
    "after-0": (
      <GovernmentLink
        links={[
          { name: "정부24 여권 재발급", description: "온라인 여권 재발급 신청", url: "https://www.gov.kr", urlLabel: "정부24 바로가기" },
          { name: "외교부 여권안내", description: "재발급 안내·접수처 검색", url: "https://www.passport.go.kr", urlLabel: "여권안내 바로가기" },
          { name: "영사안전콜센터", description: "여권 민원 상담", phone: "02-3210-0404" },
        ]}
      />
    ),
    "after-1": (
      <ChecklistCard
        title="여권 재발급 준비물 체크리스트"
        items={[
          "여권발급신청서 작성",
          "여권용 사진 1매 (6개월 이내 촬영)",
          "신분증 (주민등록증·운전면허증 등)",
          "기존 여권 (유효기간 남은 경우)",
        ]}
        note="미성년자는 법정대리인 동의서·인감증명서 추가 필요"
      />
    ),
    "after-2": (
      <FeeBreakdown
        title="여권 재발급 수수료 (2026.3.1~ 기준)"
        items={[
          { label: "여권발급수수료 (58면)", amount: "40,000원" },
          { label: "국제교류기여금", amount: "12,000원" },
        ]}
        total={{ label: "복수여권 10년 58면 합계", amount: "52,000원" }}
      />
    ),
    "after-3": (
      <TipAlert type="warning" title="온라인 신청 시 주의사항">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>만 18세 미만·최초 발급자는 온라인 불가</li>
          <li>여권 사진 규격 미달 시 반려 가능</li>
          <li>5년 내 2회 이상 분실자는 온라인 불가</li>
          <li>수령 기관은 신청 시 선택, 변경 불가</li>
        </ul>
      </TipAlert>
    ),
  },
};

export function ArticleViz({
  slug,
  position,
}: {
  slug: string;
  position: string;
}) {
  const vizForSlug = VIZ_MAP[slug];
  if (!vizForSlug) return null;
  const component = vizForSlug[position as VizPosition];
  if (!component) return null;
  return <div className="my-6">{component}</div>;
}
