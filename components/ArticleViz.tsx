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
  "소상공인-확인서-발급-절차-서류-신청방법": {
    top: (
      <StepByStep
        steps={[
          { number: 1, title: "회원가입 및 로그인", description: "sminfo.mss.go.kr 사업자등록번호로 가입" },
          { number: 2, title: "온라인 자료제출", description: "국세청 자료(재무제표·원천세) 연동 제출" },
          { number: 3, title: "제출자료 조회", description: "자료제출 완료 여부 확인 (필수!)" },
          { number: 4, title: "신청서 작성", description: "기업정보·업종·매출액 입력 후 제출" },
          { number: 5, title: "진행상황 확인", description: "소상공인 유예 검토 시 추가 절차" },
          { number: 6, title: "확인서 출력", description: "PDF 출력 (진본확인 프로그램 필요)" },
        ]}
      />
    ),
    "after-0": (
      <GovernmentLink
        links={[
          { name: "중소기업현황정보시스템", description: "소상공인 확인서 온라인 발급", url: "https://sminfo.mss.go.kr", urlLabel: "sminfo 바로가기" },
          { name: "소상공인24", description: "지원사업 조회·증명서 발급", url: "https://www.sbiz24.kr", urlLabel: "소상공인24 바로가기" },
          { name: "중소기업 통합콜센터", description: "발급 관련 일반 상담", phone: "1357" },
          { name: "시스템 문의", description: "온라인 자료제출·시스템 오류", phone: "1811-6508" },
        ]}
      />
    ),
    "after-2": (
      <ChecklistCard
        title="소상공인 확인서 기본 제출서류"
        items={[
          "사업자등록증",
          "재무제표 (간편장부 포함)",
          "원천세 신고내역 (해당 시)",
          "4대보험 가입자 명부",
        ]}
        note="기업 유형(7가지)에 따라 추가 서류가 다를 수 있음"
      />
    ),
    "after-3": (
      <TipAlert type="warning" title="발급 시 꼭 기억할 점">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>반드시 자료제출 → 신청서 순서 지킬 것 (역순 시 오류)</li>
          <li>소상공인 유예 검토 대상은 과거규모 확인 추가 필요</li>
          <li>확인서 출력 시 진본확인 프로그램 설치 필수</li>
          <li>2026년 유효기간: 2026.04.01 ~ 2027.03.31</li>
        </ul>
      </TipAlert>
    ),
  },
  "실업급여-조건-자진퇴사-계약만료-수급자격": {
    top: (
      <QuickAnswerBox
        answer="18개월간 고용보험 180일 이상 + 비자발적 퇴사가 기본 조건. 자진퇴사도 임금체불·통근곤란 등 정당한 사유면 수급 가능."
      />
    ),
    "after-1": (
      <ChecklistCard
        title="자진퇴사도 실업급여 받을 수 있는 9가지 사유"
        items={[
          "임금체불·최저임금 미달 (1년 내 2개월 이상)",
          "채용 시 제시된 조건보다 실제 조건이 나빠진 경우",
          "성희롱·성폭력·직장 내 괴롭힘",
          "사업장 도산·폐업이 확실시되는 경우",
          "사업장 이전 등으로 왕복 출퇴근 3시간 이상",
          "임신·출산·만 8세 이하 자녀 육아 휴직 회사 거부",
          "본인 질병·부상으로 업무 불가 (의사 소견 필요)",
          "부모·동거 친족 질병으로 30일 이상 간호, 휴직 불허",
          "기간제 근로계약 만료",
        ]}
      />
    ),
    "after-2": (
      <BracketTable
        title="나이·피보험기간별 실업급여 지급일수"
        headers={["구분", "1년 미만", "1~3년", "3~5년", "5~10년", "10년 이상"]}
        rows={[
          { range: "50세 미만", values: ["120일", "150일", "180일", "210일", "240일"] },
          { range: "50세 이상·장애인", values: ["120일", "180일", "210일", "240일", "270일"] },
        ]}
      />
    ),
    "after-3": (
      <StepByStep
        steps={[
          { number: 1, title: "이직확인서 발급 요청", description: "사업주에게 요청 (10일 내 신고 의무)" },
          { number: 2, title: "구직신청", description: "고용24(work24.go.kr) 온라인" },
          { number: 3, title: "취업지원 설명회", description: "온라인 교육 시청" },
          { number: 4, title: "수급자격인정 신청", description: "거주지 관할 고용센터 방문" },
        ]}
      />
    ),
  },
  "근로자녀장려금-소득기준-가구유형-신청자격": {
    top: (
      <QuickAnswerBox
        answer="근로장려금: 단독 2,200만원·홑벌이 3,200만원·맞벌이 4,400만원 미만. 자녀장려금: 7,000만원 미만. 재산 2.4억원 미만."
      />
    ),
    "after-1": (
      <BracketTable
        title="맞벌이·홑벌이 구분 기준"
        headers={["가구유형", "조건"]}
        rows={[
          { range: "단독가구", values: ["배우자·부양자녀·70세 이상 직계존속 없음"] },
          { range: "홑벌이가구", values: ["배우자 총급여액 등 300만원 미만 또는 부양자녀·70세 이상 직계존속 있음"] },
          { range: "맞벌이가구", values: ["부부 각각 총급여액 등 300만원 이상"] },
        ]}
      />
    ),
    "after-2": (
      <TipAlert type="warning" title="재산 구간별 지급 차이">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>1.7억원 미만: 전액 지급</li>
          <li>1.7억~2.4억원: 산정액의 50%만 지급</li>
          <li>2.4억원 이상: 신청 불가</li>
          <li>부채는 차감하지 않음 (총액 기준)</li>
        </ul>
      </TipAlert>
    ),
    "after-3": (
      <GovernmentLink
        links={[
          { name: "국세청 장려금 신청자격", description: "소득·재산 요건 공식 안내", url: "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2452&cntntsId=7783", urlLabel: "국세청 바로가기" },
          { name: "홈택스 장려금 모의계산", description: "예상 수급액 미리 확인", url: "https://www.hometax.go.kr", urlLabel: "홈택스 바로가기" },
          { name: "국세상담센터", description: "장려금 관련 상담", phone: "126" },
        ]}
      />
    ),
  },
  "실업급여-구직활동-실업인정-증빙서류": {
    top: (
      <QuickAnswerBox
        answer="고용24(워크넷) 입사지원은 전산 확인 가능 → 별도 출력 불필요. 민간 사이트(사람인·잡코리아) 지원은 지원완료 화면 캡처 준비."
      />
    ),
    "after-1": (
      <TipAlert type="warning" title="워크넷 이메일 입사지원 횟수 제한">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>소정급여일수 120일 이하: 최대 4회까지만 인정</li>
          <li>소정급여일수 150일 이상: 최대 6회까지만 인정</li>
          <li>초과분은 구직활동으로 인정 안 됨 → 다른 활동 필요</li>
        </ul>
      </TipAlert>
    ),
    "after-2": (
      <ChecklistCard
        title="지원 방법별 준비 서류"
        items={[
          "고용24(워크넷) 지원 → 전산 확인 (별도 출력 불필요)",
          "사업장 방문 → 명함 또는 사업체명·담당자명 메모",
          "우편 지원 → 모집공고 복사본 + 입사지원서 + 등기수령증",
          "채용박람회 → 면접 참여 증명 자료",
          "민간 사이트 → 지원완료 화면 캡처 (휴대폰 저장 OK)",
        ]}
        note="1차 실업인정 때 담당자에게 필요 서류를 확인하면 가장 확실"
      />
    ),
    "after-3": (
      <TipAlert type="warning" title="이렇게 하면 불인정!">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>같은 사업장에만 반복 지원</li>
          <li>전화·인터넷으로 탐문만 하고 실제 응모 안 함</li>
          <li>채용 공고 없는 곳의 명함만 제출</li>
          <li>본인 경력과 현저히 다른 직종에만 지원</li>
        </ul>
      </TipAlert>
    ),
  },
  "상생페이백-디지털-온누리상품권-유효기간-사용처": {
    top: (
      <QuickAnswerBox
        answer="유효기간은 충전일로부터 5년(전통시장특별법 근거). 전통시장·상점가 온누리 가맹점에서 사용 가능. 편의점·대형마트·백화점은 사용 불가."
      />
    ),
    "after-0": (
      <TipAlert type="warning" title="유효기간 오해 주의">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>디지털 온누리상품권 유효기간: 충전일로부터 <strong>5년</strong></li>
          <li>법적 근거: 전통시장 및 상점가 육성을 위한 특별법 제26조의2 제2항</li>
          <li>2025년 11~12월 충전분 → 2030년 11~12월까지 사용 가능</li>
          <li>"1년"은 잘못된 정보 → 모바일 직접구매와 혼동한 것</li>
        </ul>
      </TipAlert>
    ),
    "after-2": (
      <ChecklistCard
        title="사용 불가 업종 체크리스트"
        items={[
          "편의점 (GS25, CU, 세븐일레븐, 이마트24)",
          "대형마트 (이마트, 홈플러스, 코스트코)",
          "백화점 (롯데, 현대, 신세계)",
          "기업형 슈퍼(SSM)",
          "유흥업소·프랜차이즈 직영점 일부",
        ]}
        note="전통시장·상점가 안 온누리 가맹점만 사용 가능"
      />
    ),
    "after-3": (
      <GovernmentLink
        links={[
          { name: "전통시장통통 앱", description: "가맹점 검색·위치 안내", url: "https://www.sbiz.or.kr/sijangtong/nation/onnuri/onnuriMktList.do", urlLabel: "가맹점 찾기" },
          { name: "소상공인시장진흥공단", description: "온누리상품권 공식 안내", url: "https://www.semas.or.kr/web/SUP01/SUP0112/SUP011205.kmdc", urlLabel: "공식 안내 바로가기" },
          { name: "상생페이백 공식", description: "환급 내역·잔액 확인", url: "https://상생페이백.kr/", urlLabel: "상생페이백 바로가기" },
        ]}
      />
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
