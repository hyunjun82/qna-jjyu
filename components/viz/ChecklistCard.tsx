"use client";

interface ChecklistCardProps {
  title: string;
  items: string[];
  note?: string;
}

export function ChecklistCard({ title, items, note }: ChecklistCardProps) {
  return (
    <div className="rounded-lg border border-gov-200 bg-white p-5 shadow-sm">
      <h4 className="mb-3 font-semibold text-gov-800">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-gov-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-3 rounded bg-gov-50 px-3 py-2 text-xs text-gov-700">{note}</p>
      )}
    </div>
  );
}
