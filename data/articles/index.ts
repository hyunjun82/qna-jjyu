import { HubArticle, QnAArticle } from "@/lib/types";
import {
  hubArticle as 법률Hub,
  spokeArticles as 법률Spokes,
} from "./법률";
import {
  hubArticle as 지원금Hub,
  spokeArticles as 지원금Spokes,
} from "./지원금";

export const hubArticles: Record<string, HubArticle> = {
  법률: 법률Hub,
  지원금: 지원금Hub,
};

export const spokeArticles: Record<string, Record<string, QnAArticle>> = {
  법률: 법률Spokes,
  지원금: 지원금Spokes,
};

export function getHubArticle(categorySlug: string): HubArticle | undefined {
  return hubArticles[categorySlug];
}

export function getSpokeArticle(
  categorySlug: string,
  spokeSlug: string
): QnAArticle | undefined {
  return spokeArticles[categorySlug]?.[spokeSlug];
}
