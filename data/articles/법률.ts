import { HubArticle, QnAArticle } from "@/lib/types";

export const hubArticle: HubArticle = {
  categorySlug: "법률",
  title: "법률/생활법 Q&A 모음",
  h1: "법률/생활법 Q&A 모음",
  metaDescription:
    "이혼 절차, 상속 순위, 내용증명 작성법 등 생활 속 법률 궁금증을 정부 공식 자료 기반으로 정리합니다.",
  description:
    "법률 문제, 어디서부터 시작해야 할지 막막하죠? 정부 공식 안내를 바탕으로 한눈에 정리했어요.",
  heroDescription:
    "생활 속 법률 문제, 검색해도 제각각이라 헷갈리죠? 찾기쉬운 생활법령 등 공식 기관 안내만 골라서 쉽게 풀어드려요.",
  spokes: [],
  datePublished: "2026-03-11",
  dateModified: "2026-03-11",
};

export const spokeArticles: Record<string, QnAArticle> = {};
