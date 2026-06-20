"use client";

import { useEffect, useRef, useState } from "react";

type LazySkillIconProps = {
  src?: string;
  alt: string;
  delay?: number;
};

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions,
    ) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

export default function LazySkillIcon({
  src,
  alt,
  delay = 0,
}: LazySkillIconProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!src || shouldLoad) {
      return;
    }

    const target = rootRef.current;
    if (!target) {
      return;
    }

    const scheduleLoad = () => {
      const load = () => setShouldLoad(true);
      const browserWindow = window as IdleWindow;

      if (
        typeof browserWindow.requestIdleCallback === "function" &&
        typeof browserWindow.cancelIdleCallback === "function"
      ) {
        const idleId = browserWindow.requestIdleCallback(load, {
          timeout: 900 + delay,
        });
        return () => browserWindow.cancelIdleCallback?.(idleId);
      }

      const timeoutId = browserWindow.setTimeout(load, delay);
      return () => browserWindow.clearTimeout(timeoutId);
    };

    if (!("IntersectionObserver" in window)) {
      return scheduleLoad();
    }

    let cancelScheduledLoad: (() => void) | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();
        cancelScheduledLoad = scheduleLoad();
      },
      { rootMargin: "180px" },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      cancelScheduledLoad?.();
    };
  }, [delay, shouldLoad, src]);

  return (
    <span
      ref={rootRef}
      aria-hidden={!src}
      className="grid h-7 w-7 shrink-0 place-items-center"
    >
      {src && shouldLoad ? (
        <img
          src={src}
          alt={alt}
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          className="h-7 w-7"
        />
      ) : (
        <span className="h-7 w-7 rounded-md border border-white/10 bg-white/[0.035]" />
      )}
    </span>
  );
}
