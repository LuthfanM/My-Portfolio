import { ReactNode } from "react";

export default function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.04] px-3 py-1 text-xs font-medium text-cyan-50/80">
      {children}
    </span>
  );
}
