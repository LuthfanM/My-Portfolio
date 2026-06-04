import { StaticImageData } from "next/image";

export type ProjectCategory =
  | "Mobile"
  | "Web"
  | "Dashboard"
  | "Backend"
  | "SaaS";

export type ProductSource = {
  id: number | string;
  name: string;
  desc: string;
  image?: StaticImageData;
  web?: string;
  repo?: string;
  stack: string;
  gif?: string;
  isPrivate?: boolean;
};

export type Product = ProductSource & {
  productId: string;
  category: ProjectCategory;
  highlights: string[];
};

export type ProductCategoryFilter = ProjectCategory | "All";
