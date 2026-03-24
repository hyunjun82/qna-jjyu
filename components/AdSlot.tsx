"use client";

import { useEffect, useRef } from "react";
import { AdClickGuard } from "./AdClickGuard";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

// AdSense 슬롯 ID 맵 (qna1~qna4)
const AD_SLOT_IDS: Record<string, string> = {
  top: "6692764063",    // qna1 — 핵심 답변 아래
  mid: "8919739053",    // qna2 — 본문 중간 (관련글 섹션 위)
  bottom: "5379682395", // qna3 — FAQ 아래
};

export type AdPosition = "top" | "mid" | "bottom";

interface AdSlotProps {
  position?: AdPosition;
}

export function AdSlot({ position = "top" }: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle 아직 로드 안 됨 — lazyOnload 이후 자동 처리됨
    }
  }, []);

  return (
    <AdClickGuard>
      <div className="my-4 overflow-hidden">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2442517902625121"
          data-ad-slot={AD_SLOT_IDS[position]}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </AdClickGuard>
  );
}
