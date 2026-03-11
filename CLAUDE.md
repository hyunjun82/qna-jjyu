# qna.jjyu.co.kr

## 프로젝트 설정

- **사이트**: qna.jjyu.co.kr (생활Q&A)
- **스택**: Next.js 16.1.6 + Tailwind CSS v4 + shadcn/ui
- **배포**: Vercel (main 브랜치 자동 배포)
- **아키텍처**: Hub/Spoke

### 카테고리

| slug | 이름 |
|------|------|
| 지원금 | 지원금/장려금 |
| 연금보험 | 국민연금/건강보험 |
| 세금 | 세금/연말정산 |
| 건강 | 건강/의료 |
| 부동산 | 부동산/임대차 |
| 금융 | 금융/저축 |
| 취업 | 취업/근로 |
| 법률 | 법률/생활법 |

## 핵심 철학

> 1000개 쓰고 1000개 수정하는 악순환을 끊는다.
> 한 편을 쓰더라도 반박 불가능한 글을 만든다.
> 정보가 부족하면 사용자에게 찾아달라고 요청한다.

## 글 작성 워크플로우

키워드를 받으면 **반드시 `.claude/skills/article-writing/SKILL.md`를 읽고** 순서대로 따라간다.

```
STEP -1: 지식인 답변 먼저 작성 (즉답 → 핵심정보 → 사이트 유도)
STEP 0: source-data 수집 (source-data 없이 글 작성 금지)
STEP 1: 메타데이터 작성
STEP 2: 섹션 작성 (8대 원칙 준수)
STEP 3: FAQ 작성
STEP 4: 시각화 매핑
STEP 5: hub 엔트리 추가
STEP 6: 검증 (verify-all.js + build)
```

**절대 순서: 지식인 답변 → 사이트 글. 역순 금지.**

## 소스 규칙 (절대)

1. source-data JSON에 있는 내용만 글에 반영
2. 에이전트 자체 검색/추론 정보 금지
3. source-data에 없는 숫자/서류/기간 임의 추가 금지
4. source-data는 영구 보관 (후속 검증용 자산)

## 소스 출처 우선순위

1. **공식 API**: data.go.kr, 국세청 API 등
2. **Playwright 스크래핑**: gov.kr, nhis.or.kr, nps.or.kr, hometax.go.kr 등
3. **PDF 직접 읽기**: 공식 안내문, 리플릿
4. **사용자 제공 자료**
5. **추출 불가** → "소스를 확보할 수 없습니다" 보고 후 중단

## 검증 시스템

```
Layer 0: Structure Check  → 섹션/FAQ/문단 수, title=h1
Layer 1: Source Gate       → source-data 존재, 스키마, 신선도
Layer 2: Fact Gate         → 숫자/팩트 ↔ source JSON 대조
Layer 3: Style Gate        → AI냄새, 문체, 중복, 어미
Layer 4: Self-Check Gate   → 글 내부 모순/부정 쌍 검사
Layer 5: 8-Rule Gate       → 8대 원칙 통합 채점 (7점+, 평균 8점+)
```

실행: `node scripts/verify-all.js --slug <slug>`

## Agent Teams 규칙

- 1 에이전트 = 1 카테고리
- 공통 파일 (`lib/types.ts`, `components/`, `app/`) 수정 금지
- 커밋 메시지: `{카테고리} 카테고리 {N}개 spoke 글 추가`
