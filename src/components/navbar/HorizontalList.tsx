"use client";

import React from "react";
import Link from "next/link";
import { dataMenus } from "../../app/data/menuList";

type HorizontalListProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

const HorizontalList = ({ mobile = false, onNavigate }: HorizontalListProps) => {
  const handleScroll = (target) => {
    const id = target.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      window.history.pushState(null, "", `#${id}`);
      onNavigate?.();
      return;
    }

    window.location.href = `/#${id}`;
  };

  return (
    <div
      className={
        mobile
          ? "flex flex-col gap-3 pt-5 text-sm text-primary"
          : "hidden items-center gap-6 text-sm text-primary md:flex"
      }
    >
      {dataMenus?.map((datamenu, idx) => {
        if (datamenu.type === "page") {
          return (
            <Link
              key={`data-menu-${idx}`}
              href={datamenu.link}
              className="transition hover:text-accent"
              onClick={onNavigate}
            >
              {datamenu.name}
            </Link>
          );
        }

        return (
          <button
            key={`data-menu-${idx}`}
            type="button"
            onClick={() => handleScroll(datamenu.link)}
            className="text-left transition hover:text-accent"
          >
            {datamenu.name}
          </button>
        );
      })}
    </div>
  );
};

export default HorizontalList;
