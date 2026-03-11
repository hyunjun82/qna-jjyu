"use client";

interface DueDateAlertProps {
  title: string;
  date: string;
  description?: string;
  urgent?: boolean;
}

export function DueDateAlert({ title, date, description, urgent }: DueDateAlertProps) {
  const color = urgent
    ? "bg-red-50 border-red-500 text-red-800"
    : "bg-gov-50 border-gov-500 text-gov-800";
  const dateColor = urgent ? "text-red-600" : "text-gov-600";

  return (
    <div className={`rounded-lg border-l-4 ${color} p-4`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold">{title}</h4>
          {description && <p className="mt-1 text-sm opacity-80">{description}</p>}
        </div>
        <div className="text-right">
          <p className={`text-xl font-bold ${dateColor}`}>{date}</p>
          {urgent && <span className="text-xs font-semibold text-red-500">긴급</span>}
        </div>
      </div>
    </div>
  );
}
