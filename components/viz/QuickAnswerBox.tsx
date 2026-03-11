"use client";

interface QuickAnswerBoxProps {
  answer: string;
  source?: string;
}

export function QuickAnswerBox({ answer, source }: QuickAnswerBoxProps) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-gov-600 to-gov-800 p-6 text-white shadow-lg">
      <p className="text-lg font-bold leading-relaxed md:text-xl">{answer}</p>
      {source && (
        <span className="mt-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
          출처: {source}
        </span>
      )}
    </div>
  );
}
