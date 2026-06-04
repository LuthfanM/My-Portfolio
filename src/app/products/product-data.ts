import { StaticImageData } from "next/image";
import { mobileProjects, projects } from "@/utils/datas";
import {
  Product,
  ProductCategoryFilter,
  ProjectCategory,
  ProductSource,
} from "./product-types";

export const PAGE_SIZE = 6;
export const categories: ProductCategoryFilter[] = [
  "All",
  "Mobile",
  "Web",
  "Dashboard",
  "Backend",
  "SaaS",
];

export function isUrl(value?: string) {
  return Boolean(value && /^https?:\/\//i.test(value));
}

function getCategory(
  project: ProductSource,
  fallback: ProjectCategory,
): ProjectCategory {
  const name = project.name.toLowerCase();
  const stack = project.stack.toLowerCase();
  const desc = project.desc.toLowerCase();

  if (fallback === "Mobile") return "Mobile";
  if (name.includes("dashboard") || desc.includes("dashboard")) {
    return "Dashboard";
  }
  if (
    name.includes("pos") ||
    name.includes("workflow") ||
    name.includes("boost credit") ||
    desc.includes("application")
  ) {
    return "SaaS";
  }
  if (
    stack.includes("node") ||
    stack.includes("postgres") ||
    stack.includes("duckdb") ||
    stack.includes("knex")
  ) {
    return "Backend";
  }

  return fallback;
}

function getHighlights(project: ProductSource, category: ProjectCategory) {
  const stackItems = project.stack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return [
    `${category} product implementation`,
    project.web
      ? "Live product or public preview available"
      : "Private or internal delivery",
    project.repo && isUrl(project.repo)
      ? "Source repository available"
      : "Built around product requirements",
    `${stackItems.slice(0, 3).join(", ")} stack`,
  ].slice(0, 4);
}

function byName(a: Product, b: Product) {
  return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
}

export function buildProducts(): Product[] {
  const webProducts = projects.map((project) => {
    const category = getCategory(project, "Web");

    return {
      ...project,
      productId: `web-${project.id}`,
      category,
      highlights: getHighlights(project, category),
    };
  });

  const mobileProductsList = mobileProjects.map((project) => {
    const category = getCategory(project, "Mobile");

    return {
      ...project,
      productId: `mobile-${project.id}`,
      category,
      highlights: getHighlights(project, category),
    };
  });

  return [...webProducts, ...mobileProductsList].sort(byName);
}

export function getPreviewImages(product: Product) {
  return [product.image].filter(Boolean).slice(0, 3) as StaticImageData[];
}
