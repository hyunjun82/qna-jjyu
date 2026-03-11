"use client";

import { useState } from "react";

interface Field {
  id: string;
  label: string;
  type: "number" | "select";
  options?: { label: string; value: string }[];
  suffix?: string;
}

interface SimCalculatorProps {
  title: string;
  description: string;
  fields: Field[];
  formula: string;
  resultLabel: string;
  resultSuffix?: string;
}

export function SimCalculator({ title, description, fields, formula, resultLabel, resultSuffix }: SimCalculatorProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (id: string, val: string) => {
    setValues((prev) => ({ ...prev, [id]: val }));
  };

  const calculate = () => {
    try {
      const fn = new Function(...fields.map((f) => f.id), `return ${formula}`);
      const args = fields.map((f) => Number(values[f.id]) || 0);
      setResult(Math.round(fn(...args)).toLocaleString());
    } catch {
      setResult("계산 오류");
    }
  };

  return (
    <div className="rounded-lg border border-gov-200 bg-white p-5 shadow-sm">
      <h4 className="font-semibold text-gov-800">{title}</h4>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <div className="mt-4 space-y-3">
        {fields.map((f) => (
          <div key={f.id}>
            <label className="mb-1 block text-sm font-medium text-gray-700">{f.label}</label>
            {f.type === "select" && f.options ? (
              <select
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                value={values[f.id] || ""}
                onChange={(e) => handleChange(f.id, e.target.value)}
              >
                <option value="">선택</option>
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                  value={values[f.id] || ""}
                  onChange={(e) => handleChange(f.id, e.target.value)}
                />
                {f.suffix && <span className="text-sm text-gray-500">{f.suffix}</span>}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={calculate}
        className="mt-4 rounded-lg bg-gov-600 px-5 py-2 text-sm font-semibold text-white hover:bg-gov-700"
      >
        계산하기
      </button>
      {result !== null && (
        <div className="mt-4 rounded-lg bg-gov-50 p-4 text-center">
          <span className="text-sm text-gray-600">{resultLabel}</span>
          <p className="text-2xl font-bold text-gov-800">{result}{resultSuffix}</p>
        </div>
      )}
    </div>
  );
}
