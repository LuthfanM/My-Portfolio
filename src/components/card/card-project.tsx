import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import LoadingSpinner from "../loading/loading-spinner";
import "./CardProject.css";
import { MIDDLE } from "../../helpers/constants";

export default function CardProject(props) {
  const [hover, setHover] = useState(false);
  const { loading, setLoading } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  console.log("props", props);
  return (
    <div
      className={`card preseve relative grid max-h-fit w-1/3 rounded-sm border-2  border-white bg-accent/10 px-7 py-5 text-secondary transition-all hover:text-accent 
      lg:w-[350px] ${isFlipped ? "flipped" : ""}`}
      style={{ width: "auto" }}
      onClick={handleFlip}
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
      {!isFlipped && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="front relative my-2 flex flex-col items-center justify-center"
        >
          {props.image && (
            <Image
              src={props.image}
              alt={props.name}
              style={{ paddingRight: "inherit" }}
              className={`m-auto h-[300px] w-full rounded-md object-cover ${
                props.position == MIDDLE ? "object-center" : "object-left"
              }`}
            />
          )}
          {loading && (
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-base_col_darker/60">
              <LoadingSpinner />
            </div>
          )}
        </div>
      )}
      <div
        className={`${
          props.image ? (!isFlipped ? "hidden" : "back") : ""
        } mt-4`}
      >
        <p
          className={`relative ${
            props.image ? "h-[300px] min-h-[130px]" : ""
          } overflow-auto text-sm text-[#ffd3d3]`}
        >
          {props.desc}
        </p>
      </div>
      {props.isPrivate && (
        <div className="absolute bottom-3 right-3 rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow">
          Private Repository
        </div>
      )}
    </div>
  );
}
