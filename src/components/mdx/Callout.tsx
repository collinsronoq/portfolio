import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  variant?: "info" | "warning" | "success";
};

const variantStyles: Record<NonNullable<Props["variant"]>, string> = {
  info: 
		"border-indigo-200 bg-indigo-50 text-gray-800 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-gray-100",
  warning:
    "border-amber-200 bg-amber-50 text-gray-800 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-gray-100",
  success:
    "border-emerald-200 bg-emerald-50 text-gray-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-gray-100",
};

export function Callout({ title, children, variant = "info" }: Props) {
  return (
    <div className={`my-6 rounded-2xl border p-5 ${variantStyles[variant]}`}>
      {title ? (
        <p className="mb-2 text-sm font-semibold tracking-tight">{title}</p>
      ) : null}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
