import { HubArticle, QnAArticle } from "@/lib/types";

export const hubArticle: HubArticle = {
  categorySlug: "금융",
  title: "금융/저축 Q&A 모음",
  h1: "금융/저축 Q&A 모음",
  metaDescription:
    "대출 갈아타기, 적금 금리 비교, 신용점수 관리 등 금융 관련 궁금증을 공식 자료 기반으로 정리합니다.",
  description:
    "대출 금리가 너무 높은데 갈아타도 되는지, 신용점수는 어떻게 올리는지 헷갈리죠? 금융위원회·금융감독원 공식 안내를 바탕으로 한눈에 정리했어요.",
  heroDescription:
    "금융 제도는 조건이 복잡해서 검색해도 헷갈리죠? 금융위원회·금융감독원 공식 안내만 골라서 쉽게 풀어드려요.",
  spokes: [
    {
      slug: "개인사업자-대출-갈아타기-플랫폼-은행",
      title: "개인사업자 대출 갈아타기 — 플랫폼·은행 앱 완전 정리",
      description:
        "2026년 3월 18일부터 토스·카카오페이 등 5개 앱으로 18개 은행 사업자 대출을 비교하고 더 낮은 금리로 갈아탈 수 있습니다. 조건·절차·은행 목록을 정리했어요.",
    },
  ],
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
};

export const spokeArticles: Record<string, QnAArticle> = {
  "개인사업자-대출-갈아타기-플랫폼-은행": {
    slug: "개인사업자-대출-갈아타기-플랫폼-은행",
    categorySlug: "금융",
    question: "개인사업자 대출 갈아타기 어떻게 하나요? 어떤 앱 쓰면 되나요?",
    title: "개인사업자 대출 갈아타기 — 플랫폼·은행 앱 완전 정리",
    h1: "개인사업자 대출 갈아타기 — 플랫폼·은행 앱 완전 정리",
    metaDescription:
      "2026년 3월 18일부터 개인사업자 신용대출 갈아타기 서비스가 시작됩니다. 토스·카카오페이·네이버페이 등 5개 플랫폼과 13개 은행 앱에서 18개 은행 대출을 비교하고 더 낮은 금리로 갈아탈 수 있어요.",
    description:
      "토스·카카오페이·네이버페이 등 5개 앱으로 18개 은행 사업자 대출을 한눈에 비교하고 더 낮은 금리로 갈아탈 수 있어요. 금융위원회 공식 자료 기준으로 조건·절차·참여 은행을 정리했습니다.",
    heroDescription:
      "사업자 대출 이자가 부담스러운데 어디서 갈아타는지 모르겠죠? 2026년 3월 18일부터 이미 쓰는 앱 하나로 18개 은행 대출을 비교하고 바로 갈아탈 수 있어요.",
    quickAnswer:
      "토스·카카오페이·네이버페이·뱅크샐러드·카카오뱅크 중 하나를 열어 기존 사업자 대출을 조회하면, 18개 은행 상품과 금리를 비교해서 바로 갈아탈 수 있어요. 2026년 3월 18일 개시, 영업일 09:00~16:00 이용 가능.",
    sections: [
      {
        title: "어떤 대출을 갈아탈 수 있나요?",
        content: `<p>은행에서 사업자 명의로 받은 신용대출 중 <strong>운전자금대출 10억원 이하</strong>가 대상이에요(금융위원회 기준). 사업 운영에 필요한 자금으로 받은 신용대출이라면 대부분 해당됩니다.</p>
<p>단, 아래 대출은 갈아타기 대상에서 제외돼요.</p>
<table><thead><tr><th>제외 대출 유형</th><th>이유</th></tr></thead><tbody><tr><td>부동산임대업 대출</td><td>소상공인 금리 부담 경감 취지에 맞지 않음</td></tr><tr><td>담보·보증 대출</td><td>순수 신용대출이 아님</td></tr><tr><td>연체 대출</td><td>연체 상태에서는 신규 대출 심사 불가</td></tr><tr><td>중도금 대출</td><td>순수 신용대출로 보기 어려움</td></tr><tr><td>B2B 관련 대출</td><td>순수 신용대출로 보기 어려움</td></tr><tr><td>정책금융상품</td><td>이미 금리가 낮아 역선택 방지 목적</td></tr></tbody></table>
<p>이동 가능 기간 제한이 없고, 증액 대환도 허용돼요. 만기도 제한 없이 운영하는데, 사업자 신용대출 만기가 통상 1년으로 짧다는 점을 고려한 거예요(금융위원회 기준).</p>`,
      },
      {
        title: "어떤 앱에서 조회하고 비교하나요?",
        content: `<p>토스·카카오페이처럼 <strong>이미 쓰고 있는 앱 하나</strong>로 충분해요. 별도 가입이나 새 앱 설치 없이, 공동인증서로 인증하면 기존 대출이 자동으로 불러와집니다(금융위원회 기준).</p>
<p><strong>대출비교플랫폼 5곳</strong> — 18개 은행 전체 대출 조회 가능</p>
<table><thead><tr><th>플랫폼</th><th>바로가기</th></tr></thead><tbody><tr><td>토스</td><td><a href="https://toss.im" target="_blank" rel="noopener noreferrer">toss.im</a></td></tr><tr><td>카카오페이</td><td><a href="https://finance.kakaopay.com" target="_blank" rel="noopener noreferrer">kakaopay.com</a></td></tr><tr><td>네이버페이</td><td><a href="https://loan.pay.naver.com" target="_blank" rel="noopener noreferrer">pay.naver.com</a></td></tr><tr><td>뱅크샐러드</td><td><a href="https://www.banksalad.com" target="_blank" rel="noopener noreferrer">banksalad.com</a></td></tr><tr><td>카카오뱅크</td><td><a href="https://www.kakaobank.com" target="_blank" rel="noopener noreferrer">kakaobank.com</a></td></tr></tbody></table>
<p><strong>은행 자체 앱 13곳</strong> (→ 순차적으로 16곳 확대) — 해당 은행 고객이면 기존 앱에서 바로 비교 가능</p>
<table><thead><tr><th>은행</th><th>바로가기</th><th>비고</th></tr></thead><tbody><tr><td>신한은행</td><td><a href="https://www.shinhan.com" target="_blank" rel="noopener noreferrer">shinhan.com</a></td><td>현재 이용 가능</td></tr><tr><td>KB국민은행</td><td><a href="https://www.kbstar.com" target="_blank" rel="noopener noreferrer">kbstar.com</a></td><td>현재 이용 가능</td></tr><tr><td>하나은행</td><td><a href="https://www.hanabank.com" target="_blank" rel="noopener noreferrer">hanabank.com</a></td><td>현재 이용 가능</td></tr><tr><td>우리은행</td><td><a href="https://www.wooribank.com" target="_blank" rel="noopener noreferrer">wooribank.com</a></td><td>현재 이용 가능</td></tr><tr><td>NH농협은행</td><td><a href="https://www.nonghyup.com" target="_blank" rel="noopener noreferrer">nonghyup.com</a></td><td>현재 이용 가능</td></tr><tr><td>iM뱅크</td><td><a href="https://www.imbank.co.kr" target="_blank" rel="noopener noreferrer">imbank.co.kr</a></td><td>현재 이용 가능</td></tr><tr><td>IBK기업은행</td><td><a href="https://www.ibk.co.kr" target="_blank" rel="noopener noreferrer">ibk.co.kr</a></td><td>현재 이용 가능</td></tr><tr><td>전북은행</td><td><a href="https://www.jbbank.co.kr" target="_blank" rel="noopener noreferrer">jbbank.co.kr</a></td><td>현재 이용 가능</td></tr><tr><td>광주은행</td><td><a href="https://www.kjbank.com" target="_blank" rel="noopener noreferrer">kjbank.com</a></td><td>현재 이용 가능</td></tr><tr><td>BNK부산은행</td><td><a href="https://www.busanbank.co.kr" target="_blank" rel="noopener noreferrer">busanbank.co.kr</a></td><td>현재 이용 가능</td></tr><tr><td>카카오뱅크</td><td><a href="https://www.kakaobank.com" target="_blank" rel="noopener noreferrer">kakaobank.com</a></td><td>현재 이용 가능</td></tr><tr><td>케이뱅크</td><td><a href="https://www.kbanknow.com" target="_blank" rel="noopener noreferrer">kbanknow.com</a></td><td>현재 이용 가능</td></tr><tr><td>토스뱅크</td><td><a href="https://www.tossbank.com" target="_blank" rel="noopener noreferrer">tossbank.com</a></td><td>현재 이용 가능</td></tr><tr><td>제주은행</td><td><a href="https://www.e-jeju.com" target="_blank" rel="noopener noreferrer">e-jeju.com</a></td><td>2026년 3월말 추가</td></tr><tr><td>경남은행</td><td><a href="https://www.knbank.co.kr" target="_blank" rel="noopener noreferrer">knbank.co.kr</a></td><td>2026년 4월말 추가</td></tr><tr><td>Sh수협은행</td><td><a href="https://www.suhyup-bank.com" target="_blank" rel="noopener noreferrer">suhyup-bank.com</a></td><td>2026년말 추가</td></tr></tbody></table>
<p>SC제일은행·한국씨티은행은 플랫폼에서 기존 대출 조회는 가능하지만, 자체 앱 비교 서비스는 제공하지 않아요. 이 두 은행에 대출이 있다면 <strong>토스나 카카오페이 같은 플랫폼 앱</strong>을 이용하는 게 편리해요(금융위원회 기준).</p>`,
      },
      {
        title: "갈아타기 신청은 어떻게 하나요?",
        content: `<p>앱 하나로 5단계면 끝나요. 서류 직접 제출 없이 비대면으로 처리되니까 영업시간(09:00~16:00) 안에만 진행하면 돼요(금융위원회 안내 기준).</p>
<table><thead><tr><th>단계</th><th>내용</th><th>방법</th></tr></thead><tbody><tr><td>1단계</td><td>앱 접속</td><td>토스·카카오페이 등 플랫폼 또는 거래 은행 앱</td></tr><tr><td>2단계</td><td>기존 대출 조회</td><td>공동인증서로 인증 → 자동 불러오기</td></tr><tr><td>3단계</td><td>상품 비교</td><td>다른 은행 사업자 신용대출 금리·한도 비교</td></tr><tr><td>4단계</td><td>대출 신청</td><td>원하는 상품 선택 → 비대면 서류 제출</td></tr><tr><td>5단계</td><td>자동 상환</td><td>심사 통과 시 기존 대출 자동상환 + 신규 대출 실행</td></tr></tbody></table>
<p>이용 가능 시간은 매 영업일 09:00~16:00예요. 추후 22:00까지 확대될 예정이에요. 대출 신청 후 심사가 통과되면 기존 대출이 자동으로 갚아지고 새 대출이 실행되기 때문에 별도로 기존 대출을 상환하러 갈 필요가 없어요(금융위원회 기준).</p>`,
      },
    ],
    faq: [
      {
        question: "SC제일은행·씨티은행 대출도 갈아탈 수 있나요?",
        answer:
          "네, 갈아탈 수 있어요. SC제일은행·씨티은행 대출은 18개 갈아타기 대상 은행에 포함돼 있어요. 다만 이 두 은행은 자체 앱 비교 서비스를 제공하지 않으니, 토스·카카오페이 같은 플랫폼 앱에서 조회하면 돼요.",
      },
      {
        question: "대출 금액을 늘려서 갈아탈 수 있나요?",
        answer:
          "네, 증액 대환이 허용돼요. 기존 대출 금액보다 많은 금액으로 갈아타는 것도 가능해요. 단, 신규 대출 심사에서 한도가 결정되기 때문에 증액 여부는 은행 심사 결과에 따라 달라질 수 있어요.",
      },
      {
        question: "대출받은 지 얼마 안 됐는데 바로 갈아탈 수 있나요?",
        answer:
          "네, 이동 가능 기간 제한이 없어요. 대출 취급 후 기간에 관계없이 언제든지 갈아탈 수 있어요. 만기 제한도 없어서 만기가 짧은 사업자 신용대출도 자유롭게 이용할 수 있어요.",
      },
      {
        question: "부동산 임대업도 개인사업자인데 왜 제외되나요?",
        answer:
          "이번 서비스는 소상공인의 금리 부담 경감이 목적이에요. 부동산임대업 대출은 이 취지에 맞지 않아 제외됐어요. 일반 소매업·서비스업·제조업 등 운전자금이 필요한 사업자가 주요 대상이에요.",
      },
      {
        question: "이용 시간이 16시까지인데 왜 제한이 있나요?",
        answer:
          "은행 간 실시간 데이터 연동과 자동 상환 처리에 영업시간이 필요해서예요. 금융위원회는 추후 22:00까지 이용 시간을 확대할 예정이에요. 현재는 매 영업일 09:00~16:00 이용 가능해요.",
      },
    ],
    tags: ["개인사업자대출", "대출갈아타기", "사업자신용대출", "금리비교", "토스대출", "카카오페이대출"],
    source: "금융위원회 (fsc.go.kr)",
    applyUrl: "https://toss.im",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
  },
};
