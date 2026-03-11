"use client";

interface FlowNode {
  id: string;
  text: string;
  yes?: string;
  no?: string;
  result?: string;
}

interface FlowChartProps {
  title: string;
  nodes: FlowNode[];
}

export function FlowChart({ title, nodes }: FlowChartProps) {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="rounded-lg border border-gov-200 bg-white p-5 shadow-sm">
      <h4 className="mb-4 font-semibold text-gov-800">{title}</h4>
      <div className="space-y-3">
        {nodes.map((node) => (
          <div key={node.id}>
            <div className={`rounded-lg px-4 py-3 text-sm ${node.result ? "bg-gov-100 font-semibold text-gov-800 border border-gov-300" : "bg-gov-600 text-white"}`}>
              {node.text}
            </div>
            {(node.yes || node.no) && (
              <div className="ml-4 mt-1 flex gap-4 text-xs text-gray-500">
                {node.yes && (
                  <span>Yes → {nodeMap[node.yes]?.text.slice(0, 30)}...</span>
                )}
                {node.no && (
                  <span>No → {nodeMap[node.no]?.text.slice(0, 30)}...</span>
                )}
              </div>
            )}
            {!node.result && <div className="ml-6 h-4 w-0.5 bg-gov-300" />}
          </div>
        ))}
      </div>
    </div>
  );
}
