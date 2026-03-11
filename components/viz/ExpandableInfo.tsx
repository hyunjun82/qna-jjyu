"use client";

import { useState } from "react";

interface ExpandableInfoProps {
  groups: { title: string; content: string }[];
}

export function ExpandableInfo({ groups }: ExpandableInfoProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
      {groups.map((group, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gov-50"
          >
            <span>{group.title}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-gov-500 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-gray-600">{group.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
