import { HubArticle, QnAArticle } from "@/lib/types";

export const hubArticles: Record<string, HubArticle> = {};

export const spokeArticles: Record<string, Record<string, QnAArticle>> = {};

export function getHubArticle(categorySlug: string): HubArticle | undefined {
  return hubArticles[categorySlug];
}

export function getSpokeArticle(
  categorySlug: string,
  spokeSlug: string
): QnAArticle | undefined {
  return spokeArticles[categorySlug]?.[spokeSlug];
}
