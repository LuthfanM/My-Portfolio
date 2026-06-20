"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { getPreviewImages } from "./product-data";
import { Product } from "./product-types";

export function ProductPreview({
  product,
  phoneMockup = false,
}: {
  product: Product;
  phoneMockup?: boolean;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const previewImages = getPreviewImages(product);
  const hasMultipleImages = previewImages.length > 1;

  useEffect(() => {
    setActiveImage(0);
  }, [product.productId]);

  const goToPreviousImage = () => {
    if (!hasMultipleImages) return;
    setActiveImage((current) =>
      current === 0 ? previewImages.length - 1 : current - 1,
    );
  };

  const goToNextImage = () => {
    if (!hasMultipleImages) return;
    setActiveImage((current) =>
      current === previewImages.length - 1 ? 0 : current + 1,
    );
  };

  if (phoneMockup) {
    return (
      <div className="mx-auto w-full max-w-[270px] rounded-[2rem] border border-white/15 bg-black/80 p-3 shadow-2xl shadow-black/30">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-primary/30" />
        <div className="relative overflow-hidden rounded-[1.5rem] bg-black/40">
          {previewImages.length > 0 ? (
            <Image
              src={previewImages[activeImage]}
              alt={`${product.name} phone preview`}
              className="h-[460px] w-full object-cover object-top"
              placeholder="blur"
              priority
            />
          ) : (
            <div className="flex h-[460px] items-center justify-center text-sm text-primary">
              No preview image
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-md border border-white/10 bg-black/35">
      {previewImages.length > 0 ? (
        <Image
          src={previewImages[activeImage]}
          alt={`${product.name} preview ${activeImage + 1}`}
          className="h-[260px] w-full object-cover object-top sm:h-[340px] lg:h-[430px]"
          placeholder="blur"
          priority
        />
      ) : (
        <div className="flex h-[260px] items-center justify-center bg-white/[0.035] text-sm text-primary sm:h-[340px] lg:h-[430px]">
          No preview image
        </div>
      )}

      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {product.category}
      </div>

      {hasMultipleImages && (
        <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
          <button
            type="button"
            aria-label="Previous preview image"
            onClick={goToPreviousImage}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition hover:border-cyan-200 hover:text-cyan-100"
          >
            <FiArrowLeft />
          </button>
          <button
            type="button"
            aria-label="Next preview image"
            onClick={goToNextImage}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition hover:border-cyan-200 hover:text-cyan-100"
          >
            <FiArrowRight />
          </button>
        </div>
      )}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {previewImages.map((image, index) => (
          <button
            key={`${product.productId}-${image.src}-${index}`}
            type="button"
            aria-label={`Show preview image ${index + 1}`}
            onClick={() => setActiveImage(index)}
            className={`h-2.5 rounded-full transition ${
              activeImage === index ? "w-8 bg-cyan-200" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
