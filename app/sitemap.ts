import type { MetadataRoute } from "next";
import { hubArticles, spokeArticles } from "@/data/articles";

const BASE_URL = "https://qna.jjyu.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const hubPages: MetadataRoute.Sitemap = Object.values(hubArticles).map(
    (hub) => ({
      url: `${BASE_URL}/${encodeURIComponent(hub.categorySlug)}`,
      lastModified: hub.dateModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  );

  const spokePages: MetadataRoute.Sitemap = Object.entries(spokeArticles).flatMap(
    ([category, articles]) =>
      Object.values(articles).map((article) => ({
        url: `${BASE_URL}/${encodeURIComponent(category)}/${encodeURIComponent(article.slug)}`,
        lastModified: article.dateModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
  );

  return [...staticPages, ...hubPages, ...spokePages];
}
