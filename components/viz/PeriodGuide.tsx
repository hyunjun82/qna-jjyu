"use client";

interface PeriodGuideProps {
  title: string;
  description: string;
  periods: { label: string; duration: string; note?: string }[];
}

export function PeriodGuide({ title, description, periods }: PeriodGuideProps) {
  return (
    <div className="rounded-lg border border-gov-200 bg-white p-5 shadow-sm">
      <h4 className="font-semibold text-gov-800">{title}</h4>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <div className="mt-4 space-y-0">
        {periods.map((p, i) => (
          <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
            {i < periods.length - 1 && (
              <div className="absolute left-[7px] top-4 h-full w-0.5 bg-gov-200" />
            )}
            <span className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-gov-500 bg-white" />
            <div>
              <p className="font-medium text-gray-900">{p.label}</p>
              <p className="text-sm font-semibold text-gov-700">{p.duration}</p>
              {p.note && <p className="mt-0.5 text-xs text-gray-500">{p.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
