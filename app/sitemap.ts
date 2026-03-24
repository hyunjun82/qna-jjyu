import { MetadataRoute } from "next";
import { hubArticles, spokeArticles } from "@/data/articles";

const BASE = "https://qna.jjyu.co.kr";
const NOW = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
  ];

  for (const cat of Object.keys(hubArticles)) {
    entries.push({
      url: `${BASE}/${cat}`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  for (const [cat, spokes] of Object.entries(spokeArticles)) {
    for (const slug of Object.keys(spokes)) {
      entries.push({
        url: `${BASE}/${cat}/${slug}`,
        lastModified: NOW,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
