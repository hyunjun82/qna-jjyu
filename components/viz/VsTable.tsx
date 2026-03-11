"use client";

interface VsTableProps {
  headers: string[];
  rows: { label: string; values: string[] }[];
}

export function VsTable({ headers, rows }: VsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gov-700 text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gov-50"}>
              <td className="px-4 py-3 font-medium text-gray-900">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className="px-4 py-3 text-gray-700">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
