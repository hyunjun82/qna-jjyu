export interface Category {
  name: string;
  slug: string;
  icon: string;
  description: string;
  count: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface QnAArticle {
  slug: string;
  categorySlug: string;
  question: string;
  title: string;
  h1: string;
  metaDescription: string;
  description: string;
  heroDescription: string;
  quickAnswer: string;
  sections: ArticleSection[];
  faq: FAQItem[];
  tags: string[];
  source?: string;
  datePublished: string;
  dateModified: string;
}

export interface HubArticle {
  categorySlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  description: string;
  heroDescription: string;
  spokes: { slug: string; title: string; description: string }[];
  datePublished?: string;
  dateModified?: string;
}
