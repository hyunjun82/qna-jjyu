import { ExternalLink } from "lucide-react";

interface ApplyButtonProps {
  url: string;
  label?: string;
}

export function ApplyButton({ url, label = "온라인 신청하기" }: ApplyButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
    >
      <ExternalLink className="h-4 w-4" />
      {label}
    </a>
  );
}
