import { HubArticle, QnAArticle } from "@/lib/types";
import {
  hubArticle as 법률Hub,
  spokeArticles as 법률Spokes,
} from "./법률";
import {
  hubArticle as 지원금Hub,
  spokeArticles as 지원금Spokes,
} from "./지원금";
import {
  hubArticle as 취업Hub,
  spokeArticles as 취업Spokes,
} from "./취업";
import {
  hubArticle as 생활정보Hub,
  spokeArticles as 생활정보Spokes,
} from "./생활정보";
import { 숨은지원금Spokes } from "./숨은지원금";
import {
  hubArticle as 금융Hub,
  spokeArticles as 금융Spokes,
} from "./금융";

export const hubArticles: Record<string, HubArticle> = {
  법률: 법률Hub,
  지원금: 지원금Hub,
  취업: 취업Hub,
  생활정보: 생활정보Hub,
  금융: 금융Hub,
};

export const spokeArticles: Record<string, Record<string, QnAArticle>> = {
  법률: 법률Spokes,
  지원금: { ...지원금Spokes, ...숨은지원금Spokes },
  취업: 취업Spokes,
  생활정보: 생활정보Spokes,
  금융: 금융Spokes,
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
