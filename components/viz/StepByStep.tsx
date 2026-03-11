"use client";

interface StepByStepProps {
  steps: { number: number; title: string; description: string }[];
}

export function StepByStep({ steps }: StepByStepProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={step.number} className="relative flex gap-4 pb-8 last:pb-0">
          {i < steps.length - 1 && (
            <div className="absolute left-5 top-10 h-full w-0.5 bg-gray-200" />
          )}
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gov-600 text-sm font-bold text-white">
            {step.number}
          </div>
          <div className="pt-1">
            <h4 className="font-semibold text-gray-900">{step.title}</h4>
            <p className="mt-1 text-sm text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
