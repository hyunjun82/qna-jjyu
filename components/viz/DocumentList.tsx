"use client";

interface DocumentListProps {
  title?: string;
  items: { name: string; description?: string; where?: string }[];
}

export function DocumentList({ title, items }: DocumentListProps) {
  return (
    <div className="rounded-lg border border-gov-200 bg-white p-5 shadow-sm">
      {title && <h4 className="mb-3 font-semibold text-gov-800">{title}</h4>}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-gov-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <p className="font-medium text-gray-900">{item.name}</p>
              {item.description && <p className="mt-0.5 text-sm text-gray-600">{item.description}</p>}
              {item.where && <p className="mt-0.5 text-xs text-gov-600">발급: {item.where}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
