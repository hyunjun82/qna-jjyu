"use client";

interface FeeBreakdownProps {
  title?: string;
  items: { label: string; amount: string; note?: string }[];
  total?: { label: string; amount: string };
}

export function FeeBreakdown({ title, items, total }: FeeBreakdownProps) {
  return (
    <div className="rounded-lg border border-gov-200 bg-white shadow-sm">
      {title && <h4 className="px-5 pt-4 font-semibold text-gov-800">{title}</h4>}
      <div className="divide-y divide-gray-100 px-5 py-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-2.5">
            <div>
              <span className="text-sm text-gray-700">{item.label}</span>
              {item.note && <p className="text-xs text-gray-400">{item.note}</p>}
            </div>
            <span className="text-sm font-medium text-gray-900">{item.amount}</span>
          </div>
        ))}
      </div>
      {total && (
        <div className="flex items-center justify-between rounded-b-lg bg-gov-700 px-5 py-3 text-white">
          <span className="font-semibold">{total.label}</span>
          <span className="text-lg font-bold">{total.amount}</span>
        </div>
      )}
    </div>
  );
}
