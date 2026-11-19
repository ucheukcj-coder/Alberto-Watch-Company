import { useEffect } from "react";

const revealTargets = [
  ".hero-content",
  ".hero-image",
  ".section-intro",
  ".category-card",
  ".product-card",
  ".feature-card",
  ".gallery-image",
  ".faq-item",
  ".contact-layout > *",
  ".store-layout > *",
  ".editorial-layout > *",
  ".checkout-layout > *",
  ".cart-layout > *",
  ".cart-empty",
  ".checkout-success",
].join(",");

export function useScrollReveal(pathname) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll(revealTargets);
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const groupIndexes = new Map();
    targets.forEach((target) => {
      const groupIndex = groupIndexes.get(target.parentElement) ?? 0;
      groupIndexes.set(target.parentElement, groupIndex + 1);

      const direction = target.matches(".hero-content, .section-intro")
        ? "left"
        : target.matches(".hero-image")
          ? "right"
          : target.matches(".gallery-image, .product-card, .category-card")
            ? "zoom"
            : "up";

      target.dataset.scrollReveal = direction;
      target.style.setProperty("--reveal-delay", `${(groupIndex % 6) * 70}ms`);
      target.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);
}
