"use client";

import React from "react";

interface TipAlertProps {
  type: "tip" | "warning" | "info";
  title: string;
  children: React.ReactNode;
}

const STYLES = {
  tip: { bg: "bg-gov-50 border-gov-400", icon: "text-gov-600", title: "text-gov-800" },
  warning: { bg: "bg-amber-50 border-amber-400", icon: "text-amber-600", title: "text-amber-800" },
  info: { bg: "bg-gray-50 border-gray-400", icon: "text-gray-600", title: "text-gray-800" },
};

const ICONS: Record<string, string> = {
  tip: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  warning: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  info: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
};

export function TipAlert({ type, title, children }: TipAlertProps) {
  const s = STYLES[type];
  return (
    <div className={`rounded-lg border-l-4 ${s.bg} p-4`}>
      <div className="flex items-center gap-2">
        <svg className={`h-5 w-5 ${s.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[type]} />
        </svg>
        <h4 className={`font-semibold ${s.title}`}>{title}</h4>
      </div>
      <div className="mt-2 text-sm text-gray-700">{children}</div>
    </div>
  );
}
