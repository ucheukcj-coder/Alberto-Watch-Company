
import { useCallback, useRef, useState } from "react";
import GalleryLightbox from "../components/GalleryLightbox.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import detailImages from "../data/detailImages.json";
import galleryImages from "../data/galleryImages.json";
import watches from "../data/watches.json";

const images = [
  ...watches.map((watch) => ({
    src: watch.image, // Maps "image" from watches.json to "src"
    alt: watch.alt,
    caption: `${watch.brand} ${watch.model}`,
  })),
  ...detailImages.map(img => ({ ...img, src: img.src || img.image })), 
  ...galleryImages.map(img => ({ ...img, src: img.src || img.image })),
];
// Create rows with ~6-8 images per row for better horizontal scrolling
const imagesPerRow = 7;
const rowCount = Math.ceil(images.length / imagesPerRow);

const galleryRows = Array.from(
  { length: rowCount },
  (_, rowIndex) =>
    images.slice(rowIndex * imagesPerRow, (rowIndex + 1) * imagesPerRow)
);

const HOVER_DELAY = 4000; // 4 seconds

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandingKey, setExpandingKey] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleMouseEnter = useCallback((key) => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setExpandingKey(key);
    }, HOVER_DELAY);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setExpandingKey(null);
  }, []);

  const handleClick = useCallback((image) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setExpandingKey(null);
    setSelectedImage(image);
  }, []);

  return (
    <section className="page-section gallery-section">
      <div className="content-width">
        <SectionIntro
          eyebrow="05 / Through our lens"
          title="Details worth a second look."
        />

        <p className="gallery-scroll-hint">
          Scroll horizontally through each collection to explore all{" "}
          {images.length} images. Hover an image for 4 seconds to expand.
        </p>

        <div className="gallery-rows">
          {galleryRows.map((rowImages, rowIndex) => (
            <div
              className="gallery-grid"
              key={`gallery-row-${rowIndex}`}
              role="region"
              aria-label={`Watch photography collection ${rowIndex + 1}`}
              tabIndex={0}
            >
              {rowImages.map((image, index) => {
                const key = `${rowIndex}-${image.src}`;
                const isExpanding = expandingKey === key;

                return (
                  <button
                    className={`gallery-image${isExpanding ? " is-expanding" : ""}`}
                    key={key}
                    type="button"
                    aria-label={`Enlarge image: ${image.caption}`}
                    onClick={() => handleClick(image)}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />

                    <span className="visually-hidden">
                      Gallery image {index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <GalleryLightbox
        image={selectedImage}
        onClose={closeLightbox}
      />
    </section>
  );
}
