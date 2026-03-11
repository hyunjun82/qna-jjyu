"use client";

interface ConditionFilterProps {
  title: string;
  conditions: { label: string; description: string }[];
}

export function ConditionFilter({ title, conditions }: ConditionFilterProps) {
  return (
    <div className="rounded-lg border border-gov-200 bg-white p-5 shadow-sm">
      <h4 className="mb-4 font-semibold text-gov-800">{title}</h4>
      <div className="space-y-3">
        {conditions.map((c, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gov-500" />
            <div>
              <p className="font-medium text-gray-900">{c.label}</p>
              <p className="mt-0.5 text-sm text-gray-600">{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
