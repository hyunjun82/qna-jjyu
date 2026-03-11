"use client";

interface BracketTableProps {
  title: string;
  headers: string[];
  rows: { range: string; values: string[] }[];
}

export function BracketTable({ title, headers, rows }: BracketTableProps) {
  return (
    <div className="rounded-lg border border-gray-200 shadow-sm">
      <h4 className="px-4 py-3 font-semibold text-gov-800">{title}</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gov-700 text-white">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2.5 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gov-50"}>
                <td className="px-4 py-2.5 font-medium text-gray-900">{row.range}</td>
                {row.values.map((v, j) => (
                  <td key={j} className="px-4 py-2.5 text-gray-700">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
