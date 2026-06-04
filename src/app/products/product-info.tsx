import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { isUrl } from "./product-data";
import { Product } from "./product-types";

export function ProductInfo({ product }: { product: Product }) {
  const stackItems = product.stack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const showHighlightImage = product.category === "Mobile" && product.image;

  return (
    <div>
      <p className="font-mono text-xs uppercase text-accent">
        Selected Project
      </p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight text-secondary md:text-4xl">
        {product.name}
      </h1>
      <p className="mt-4 text-sm leading-7 text-primary">{product.desc}</p>

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-secondary">Tech stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {stackItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-secondary">Highlights</h2>
        <div
          className={
            showHighlightImage
              ? "mt-3 grid gap-4 sm:grid-cols-[140px_1fr]"
              : "mt-3"
          }
        >
          {showHighlightImage && (
            <div className="overflow-hidden rounded-md border border-primary/15 bg-base_col">
              <Image
                src={product.image}
                alt={`${product.name} mobile preview`}
                className="h-56 w-full object-cover object-top"
                placeholder="blur"
              />
            </div>
          )}
          <ul className="grid gap-2 text-sm text-primary">
            {product.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {isUrl(product.web) && (
          <a
            href={product.web}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent/80"
          >
            <FiExternalLink />
            Live Demo
          </a>
        )}
        {isUrl(product.repo) && (
          <a
            href={product.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/20 px-4 py-2 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
          >
            <FiGithub />
            GitHub
          </a>
        )}
        {!isUrl(product.web) && !isUrl(product.repo) && (
          <span className="rounded-md border border-primary/15 px-4 py-2 text-sm text-primary">
            Private project
          </span>
        )}
      </div>
    </div>
  );
}
