import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  display: "optional",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "생활Q&A - 궁금한 생활 정보, 한눈에 해결",
    template: "%s | 생활Q&A",
  },
  description:
    "지원금, 세금, 연금, 부동산, 건강 등 생활 속 궁금한 질문에 대한 정확하고 쉬운 답변. 공식 기관 자료 기반.",
  keywords: ["생활정보", "지원금", "세금", "연말정산", "국민연금", "부동산", "Q&A"],
  openGraph: {
    title: "생활Q&A - 궁금한 생활 정보, 한눈에 해결",
    description:
      "지원금, 세금, 연금, 부동산, 건강 등 생활 속 궁금한 질문에 대한 정확하고 쉬운 답변.",
    url: "https://qna.jjyu.co.kr",
    siteName: "생활Q&A",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "생활Q&A - 궁금한 생활 정보, 한눈에 해결",
    description:
      "지원금, 세금, 연금, 부동산, 건강 등 생활 속 궁금한 질문에 대한 정확하고 쉬운 답변.",
  },
  alternates: {
    canonical: "https://qna.jjyu.co.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body
        className={`${notoSansKR.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />

        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2442517902625121"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "생활Q&A",
              url: "https://qna.jjyu.co.kr",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "생활Q&A",
              url: "https://qna.jjyu.co.kr",
              description:
                "공식 기관 자료 기반 생활 정보 플랫폼. 지원금, 세금, 연금, 부동산, 건강 등 생활 속 궁금한 질문에 정확한 답변을 제공합니다.",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
