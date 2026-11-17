import { useEffect, useRef } from "react";

export default function GalleryLightbox({ image, onClose }) {
  const closeButton = useRef(null);

  useEffect(() => {
    if (!image) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    closeButton.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="modal-backdrop gallery-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-lightbox-caption"
      >
        <button
          className="modal-close"
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close enlarged image"
        >
          ×
        </button>
        <img src={image.src} alt={image.alt} />
        <p className="gallery-lightbox-caption" id="gallery-lightbox-caption">
          {image.caption}
        </p>
      </section>
    </div>
  );
}
