"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { isBlocked, recordClick } from "@/lib/ad-guard";

export function AdClickGuard({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMouseOverAd = useRef(false);
  const [blocked, setBlocked] = useState(false);

  // 페이지 로드 시 차단 상태 확인
  useEffect(() => {
    if (isBlocked()) setBlocked(true);
  }, []);

  const handleAdClick = useCallback(() => {
    const nowBlocked = recordClick();
    if (nowBlocked) setBlocked(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onEnter = () => { isMouseOverAd.current = true; };
    const onLeave = () => { isMouseOverAd.current = false; };

    // 광고(iframe) 클릭 시 부모 window가 blur됨 → 클릭 감지
    const onBlur = () => {
      if (isMouseOverAd.current) {
        handleAdClick();
        // 다음 클릭도 감지하려면 포커스 복원
        setTimeout(() => window.focus(), 0);
      }
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onBlur);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onBlur);
    };
  }, [handleAdClick]);

  if (blocked) return null;

  return <div ref={containerRef}>{children}</div>;
}
