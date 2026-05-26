import React, { useRef } from "react";
import Link from "next/link";
import { Scrollchor } from "react-scrollchor";
import { dataMenus } from "../../app/data/menuList";

const HorizontalList = () => {
  return (
    <div className="hidden md:flex space-x-4 text-red-50">
      {dataMenus &&
        dataMenus.map((datamenu, idx) => {
          if (datamenu.type === "page") {
            return (
              <Link
                key={"data-menu" + idx}
                href={datamenu.link}
                className="nav-link"
              >
                {datamenu.name}
              </Link>
            );
          }

          return (
            <Scrollchor
              key={"data-menu" + idx}
              to={datamenu.link}
              className="nav-link"
            >
              <div>{datamenu.name}</div>
            </Scrollchor>
          );
        })}
    </div>
  );
};

export default HorizontalList;
