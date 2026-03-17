"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface ApplyButtonProps {
  url: string;
  label?: string;
}

export function ApplyButton({ url, label = "온라인 신청하기" }: ApplyButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-white">
          <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white flex-shrink-0">
            <span className="font-bold text-sm truncate max-w-[calc(100%-40px)]">{label}</span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              aria-label="닫기"
            >
              <X size={20} />
            </button>
          </div>
          <iframe
            src={url}
            className="flex-1 w-full border-0"
            title={label}
          />
        </div>
      )}
    </>
  );
}
