import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import LoadingSpinner from "../loading/loading-spinner";
import "./CardProject.css";
import { MIDDLE } from "../../helpers/constants";

export default function CardMobileProject(props) {
  const [hover, setHover] = useState(false);
  const { loading, setLoading } = props;

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div
      className={`card preseve relative grid max-h-fit w-full rounded-sm border-2 border-white bg-accent/10 px-7 py-5 text-secondary transition-all hover:text-accent lg:w-[350px]`}
      style={{ width: "auto" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-wide">{props.name}</h3>
        <div className="float-right flex cursor-pointer items-end gap-2 text-primary">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              title="View github repository"
              className="transition-all hover:text-accent"
            >
              <FiGithub size={16} />
            </a>
          )}
          {props.web && (
            <a
              href={props.web}
              target="_blank"
              rel="noreferrer"
              title="View finished project"
              className="transition-all hover:text-accent"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="font-mono text-xs text-primary">{props.stack}</div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="front relative mt-4 flex flex-row gap-4 items-start justify-between"
      >
        {props.image && (
          <div className="flex h-[300px] w-1/2 items-center justify-center rounded-md bg-transparent">
            <Image
              src={props.image}
              alt={props.name}
              className="h-full w-auto object-contain"
            />
            {loading && (
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-base_col_darker/60">
                <LoadingSpinner />
              </div>
            )}
          </div>
        )}

        {/* Right side: description */}
        <div className="w-1/2 h-[300px] overflow-auto text-sm text-[#ffd3d3] text-right">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
