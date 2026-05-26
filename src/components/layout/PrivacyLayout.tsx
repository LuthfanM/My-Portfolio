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
    <div className="h-[calc(100vh-6rem)] w-full overflow-hidden bg-base_col text-primary">
      <div className="flex h-full">
        {/* LEFT SIDEBAR */}
        <aside className="h-full w-[280px] shrink-0 border-r border-accent/20 bg-base_col">
          <div className="flex h-full flex-col">
            <nav className="flex-1 overflow-y-auto px-3 py-5">
              {sections.map((section) => (
                <div key={section.title} className="mb-7">
                  <p className="mb-3 px-2 text-[11px] font-bold tracking-[0.2em] text-accent">
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
                              ? "bg-accent/10 text-accent ring-1 ring-accent/40"
                              : "text-primary hover:bg-accent/10 hover:text-secondary",
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
        <main className="h-full flex-1 overflow-y-auto bg-base_col text-white">
          <div className="mx-auto max-w-[760px] px-8 py-16">{children}</div>
        </main>
      </div>
    </div>
  );
}
