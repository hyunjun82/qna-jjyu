"use client";

interface ExampleBoxProps {
  title: string;
  scenario: string;
  result: string;
  source?: string;
}

export function ExampleBox({ title, scenario, result, source }: ExampleBoxProps) {
  return (
    <div className="rounded-lg border-l-4 border-gov-500 bg-white p-5 shadow-sm">
      <h4 className="font-semibold text-gov-800">{title}</h4>
      <div className="mt-3 space-y-3">
        <div>
          <span className="text-xs font-semibold uppercase text-gray-400">상황</span>
          <p className="mt-1 text-sm text-gray-700">{scenario}</p>
        </div>
        <div className="rounded-lg bg-gov-50 p-3">
          <span className="text-xs font-semibold uppercase text-gov-600">결과</span>
          <p className="mt-1 text-sm font-medium text-gov-900">{result}</p>
        </div>
      </div>
      {source && (
        <p className="mt-3 text-xs text-gray-400">출처: {source}</p>
      )}
    </div>
  );
}
