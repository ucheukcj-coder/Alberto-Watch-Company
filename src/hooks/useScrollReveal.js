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
    const bendTargets = document.querySelectorAll(".hero-image, .gallery-image");

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

    let frameId = 0;
    const updateBend = () => {
      frameId = 0;
      const viewportCenter = window.innerHeight / 2;

      bendTargets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        const range = (window.innerHeight + bounds.height) / 2;
        const progress = Math.max(
          -1,
          Math.min(1, (bounds.top + bounds.height / 2 - viewportCenter) / range)
        );
        const intensity = 1 - Math.abs(progress);

        target.style.setProperty("--scroll-bend", `${progress * -5}deg`);
        target.style.setProperty("--scroll-scale", `${1 + intensity * 0.018}`);
        target.style.setProperty("--scroll-curve", `${4 + intensity * 12}px`);
      });
    };
    const scheduleBendUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateBend);
    };

    scheduleBendUpdate();
    window.addEventListener("scroll", scheduleBendUpdate, { passive: true });
    window.addEventListener("resize", scheduleBendUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleBendUpdate);
      window.removeEventListener("resize", scheduleBendUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);
}
