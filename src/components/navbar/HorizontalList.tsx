"use client";

import React from "react";
import Link from "next/link";
import { dataMenus } from "../../app/data/menuList";

const HorizontalList = () => {
  const handleScroll = (target) => {
    const id = target.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="hidden md:flex space-x-4 text-red-50">
      {dataMenus?.map((datamenu, idx) => {
        if (datamenu.type === "page") {
          return (
            <Link
              key={`data-menu-${idx}`}
              href={datamenu.link}
              className="nav-link"
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
            className="nav-link"
          >
            {datamenu.name}
          </button>
        );
      })}
    </div>
  );
};

export default HorizontalList;