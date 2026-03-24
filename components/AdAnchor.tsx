"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

// qna4 — 모바일 하단 고정 앵커 광고
// GovSupportBanner(z-50) 바로 위에 쌓임 (z-40, bottom-[56px])
export function AdAnchor() {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle 아직 로드 안 됨
    }
  }, []);

  return (
    <div className="fixed bottom-[56px] left-0 right-0 z-40 bg-white overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2442517902625121"
        data-ad-slot="8033065191"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
