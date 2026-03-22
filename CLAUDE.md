# qna.jjyu.co.kr

생활Q&A 사이트. Next.js + Tailwind CSS v4 + shadcn/ui. Vercel 배포 (main 브랜치).

## 핵심 철학

> 한 편을 쓰더라도 반박 불가능한 글을 만든다.
> 정보가 부족하면 사용자에게 찾아달라고 요청한다.
> source-data JSON에 있는 내용만 글에 반영. 자체 추론 금지.

## 글 작성

키워드를 받으면 `.claude/skills/article-writing/SKILL.md`를 읽고 따라간다.
절대 순서: 지식인 답변 → 사이트 글. 역순 금지.

## 검증

`node scripts/verify-all.js --slug <slug>` — 6층 통합 검증 (구조→소스→팩트→문체→모순→8대원칙)

## Agent Teams 규칙

- 1 에이전트 = 1 카테고리
- 공통 파일 (`lib/types.ts`, `components/`, `app/`) 수정 금지
