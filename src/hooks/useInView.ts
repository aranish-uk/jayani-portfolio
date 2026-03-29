"use client";

import { useState, useEffect, type RefObject } from "react";

/**
 * Simple intersection-observer hook for scroll-reveal animations.
 * Returns true once the element enters the viewport.
 */
export function useInView(
  ref: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);

  return visible;
}
