import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  children,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-secondary drop-shadow-[0_0_18px_rgba(255,255,255,0.1)] md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary/75 md:text-base">
          {children}
        </p>
      )}
    </div>
  );
}
