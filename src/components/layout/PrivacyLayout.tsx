import Link from "next/link";
import type { ReactNode } from "react";

type SidebarSection = {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
};

type PrivacyLayoutProps = {
  children: ReactNode;
  sections: SidebarSection[];
  activeLabel: string;
};

export function PrivacyLayout({
  children,
  sections,
  activeLabel,
}: PrivacyLayoutProps) {
  return (
    <div className="h-[calc(100vh-6rem)] w-full overflow-hidden text-primary">
      <div className="flex h-full">
        {/* LEFT SIDEBAR */}
        <aside className="h-full w-[280px] shrink-0 border-r border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="flex h-full flex-col">
            <nav className="flex-1 overflow-y-auto px-3 py-5">
              {sections.map((section) => (
                <div key={section.title} className="mb-7">
                  <p className="mb-3 px-2 text-[11px] font-bold tracking-[0.2em] text-cyan-200">
                    {section.title}
                  </p>

                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const isActive = item.label === activeLabel;

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={[
                            "block w-full rounded-md px-3 py-2 text-left text-sm transition",
                            isActive
                              ? "bg-cyan-200/[0.08] text-cyan-100 ring-1 ring-cyan-200/40"
                              : "text-primary hover:bg-cyan-200/[0.06] hover:text-secondary",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="h-full flex-1 overflow-y-auto bg-transparent text-white">
          <div className="mx-auto max-w-[760px] px-8 py-16">{children}</div>
        </main>
      </div>
    </div>
  );
}
