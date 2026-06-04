"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductFilters, SearchField } from "./product-controls";
import { buildProducts, PAGE_SIZE } from "./product-data";
import { DesktopProductsLayout, MobileProductsLayout } from "./product-layouts";
import { ProductCategoryFilter } from "./product-types";

export default function ProductsPage() {
  const products = useMemo(() => buildProducts(), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<ProductCategoryFilter>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState(
    products[0]?.productId,
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [product.name, product.desc, product.stack, product.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, products, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pageStart =
    filteredProducts.length === 0 ? 0 : (safeCurrentPage - 1) * PAGE_SIZE + 1;
  const pageEnd = Math.min(
    safeCurrentPage * PAGE_SIZE,
    filteredProducts.length,
  );
  const paginatedProducts = filteredProducts.slice(pageStart - 1, pageEnd);
  const selectedProduct =
    filteredProducts.find(
      (product) => product.productId === selectedProductId,
    ) ??
    paginatedProducts[0] ??
    filteredProducts[0];

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (!filteredProducts.length) {
      setSelectedProductId(undefined);
      return;
    }

    const selectedExists = filteredProducts.some(
      (product) => product.productId === selectedProductId,
    );

    if (!selectedExists) {
      setSelectedProductId(filteredProducts[0].productId);
    }
  }, [filteredProducts, selectedProductId]);

  const setPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    const firstProduct = filteredProducts[(nextPage - 1) * PAGE_SIZE];

    setCurrentPage(nextPage);
    setSelectedProductId(firstProduct?.productId);
  };

  return (
    <main className="container mx-auto min-h-screen py-8 md:py-16">
      <div className="mb-6 max-w-3xl md:mb-10">
        <p className="font-mono text-xs uppercase text-accent">Products</p>
        <h1 className="mt-3 text-4xl font-semibold text-secondary md:text-6xl">
          <span className="md:hidden">Projects</span>
          <span className="hidden md:inline">All products I created</span>
        </h1>
        <p className="mt-5 hidden text-base leading-8 text-primary md:block">
          Complete project list, including featured work, private builds, web
          apps, mobile apps, dashboards, and product experiments.
        </p>
      </div>

      <div className="mb-5 grid gap-3 md:grid-cols-[minmax(280px,380px)_1fr]">
        <SearchField value={searchQuery} onChange={setSearchQuery} />
        <ProductFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      <MobileProductsLayout
        products={filteredProducts}
        selectedProduct={selectedProduct}
        onSelectProduct={setSelectedProductId}
      />
      <DesktopProductsLayout
        products={filteredProducts}
        paginatedProducts={paginatedProducts}
        selectedProduct={selectedProduct}
        pageStart={pageStart}
        pageEnd={pageEnd}
        currentPage={safeCurrentPage}
        totalPages={totalPages}
        onSelectProduct={setSelectedProductId}
        onPageChange={setPage}
      />
    </main>
  );
}
