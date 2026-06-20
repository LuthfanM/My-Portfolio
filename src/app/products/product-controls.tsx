"use client";

import { FiSearch } from "react-icons/fi";
import { categories } from "./product-data";
import { ProductCategoryFilter } from "./product-types";

export function ProductFilters({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: ProductCategoryFilter;
  onCategoryChange: (category: ProductCategoryFilter) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`shrink-0 rounded-md border px-4 py-2 text-sm font-semibold transition ${
            activeCategory === category
              ? "border-cyan-200 bg-cyan-200 text-black"
              : "border-white/10 bg-white/[0.035] text-secondary backdrop-blur-xl hover:border-cyan-200/60 hover:text-cyan-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export function SearchField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">Search project</span>
      <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search project..."
        className="h-12 w-full rounded-md border border-white/10 bg-white/[0.035] pl-11 pr-4 text-sm text-secondary outline-none backdrop-blur-xl transition placeholder:text-primary/60 focus:border-cyan-200/60"
      />
    </label>
  );
}
