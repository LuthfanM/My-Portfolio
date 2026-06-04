"use client";

import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ProductInfo } from "./product-info";
import { ProductPreview } from "./product-preview";
import { Product } from "./product-types";

export function MobileProductsLayout({
  products,
  selectedProduct,
  onSelectProduct,
}: {
  products: Product[];
  selectedProduct?: Product;
  onSelectProduct: (productId: string) => void;
}) {
  return (
    <div className="lg:hidden">
      <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-4">
        {products.map((product) => {
          const isSelected = product.productId === selectedProduct?.productId;

          return (
            <button
              key={product.productId}
              type="button"
              onClick={() => onSelectProduct(product.productId)}
              className={`w-[190px] shrink-0 overflow-hidden rounded-md border text-left transition ${
                isSelected
                  ? "border-accent bg-accent/15"
                  : "border-primary/10 bg-secondary/[0.03]"
              }`}
            >
              <div className="relative h-28 bg-base_col_darker">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={`${product.name} card preview`}
                    className="h-full w-full object-cover object-top"
                    placeholder="blur"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-primary">
                    No image
                  </div>
                )}
              </div>
              <div className="p-3">
                <span className="block truncate text-sm font-semibold text-secondary">
                  {product.name}
                </span>
                <span className="mt-2 block text-xs text-primary">
                  {product.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedProduct ? (
        <section className="mt-3 rounded-lg border border-primary/15 bg-base_col_darker/80 p-4">
          {selectedProduct.category !== "Mobile" && (
            <ProductPreview product={selectedProduct} phoneMockup />
          )}
          <div className={selectedProduct.category === "Mobile" ? "" : "mt-7"}>
            <ProductInfo product={selectedProduct} />
          </div>
        </section>
      ) : (
        <div className="rounded-lg border border-primary/15 p-6 text-sm text-primary">
          No projects found.
        </div>
      )}
    </div>
  );
}

export function DesktopProductsLayout({
  products,
  paginatedProducts,
  selectedProduct,
  pageStart,
  pageEnd,
  currentPage,
  totalPages,
  onSelectProduct,
  onPageChange,
}: {
  products: Product[];
  paginatedProducts: Product[];
  selectedProduct?: Product;
  pageStart: number;
  pageEnd: number;
  currentPage: number;
  totalPages: number;
  onSelectProduct: (productId: string) => void;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="hidden gap-6 lg:grid lg:grid-cols-[360px_1fr] xl:grid-cols-[420px_1fr]">
      <aside className="rounded-lg border border-primary/15 bg-secondary/[0.03] p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-secondary">Project List</h2>
          <span className="text-xs text-primary">
            Showing {pageStart}&ndash;{pageEnd} of {products.length} projects
          </span>
        </div>

        <div className="space-y-2">
          {paginatedProducts.map((product) => {
            const isSelected = product.productId === selectedProduct?.productId;

            return (
              <button
                key={product.productId}
                type="button"
                onClick={() => onSelectProduct(product.productId)}
                className={`w-full rounded-md border p-4 text-left transition ${
                  isSelected
                    ? "border-accent bg-accent/15 text-secondary"
                    : "border-primary/10 bg-base_col/60 text-primary hover:border-accent/50 hover:text-secondary"
                }`}
              >
                <span className="block text-sm font-semibold">
                  {product.name}
                </span>
                <span className="mt-2 block text-xs text-primary">
                  {product.category} project
                </span>
              </button>
            );
          })}

          {paginatedProducts.length === 0 && (
            <div className="rounded-md border border-primary/10 p-4 text-sm text-primary">
              No projects found.
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-primary/10 pt-4">
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-primary/15 px-4 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FiArrowLeft />
            Previous
          </button>
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-primary/15 px-4 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <FiArrowRight />
          </button>
        </div>
      </aside>

      {selectedProduct ? (
        <section className="sticky top-28 rounded-lg border border-primary/15 bg-base_col_darker/80 p-4 shadow-2xl shadow-black/20 backdrop-blur md:p-6">
          {selectedProduct.category !== "Mobile" && (
            <ProductPreview product={selectedProduct} />
          )}
          <div className={selectedProduct.category === "Mobile" ? "" : "mt-7"}>
            <ProductInfo product={selectedProduct} />
          </div>
        </section>
      ) : (
        <div className="rounded-lg border border-primary/15 p-8 text-primary">
          No projects found.
        </div>
      )}
    </div>
  );
}
