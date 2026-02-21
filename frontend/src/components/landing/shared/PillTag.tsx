import type { ReactNode } from "react";

interface PillTagProps {
  children: ReactNode;
  tone?: "primary" | "neutral";
}

export function PillTag({ children, tone = "primary" }: PillTagProps) {
  const toneClass =
    tone === "primary"
      ? "bg-sky-100 text-sky-700 border-sky-200"
      : "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase ${toneClass}`}>
      {children}
    </span>
  );
}
