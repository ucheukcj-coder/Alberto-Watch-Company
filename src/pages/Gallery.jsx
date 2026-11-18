
import { useCallback, useState } from "react";
import GalleryLightbox from "../components/GalleryLightbox.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import detailImages from "../data/detailImages.json";
import galleryImages from "../data/galleryImages.json";
import watches from "../data/watches.json";

const images = [
  ...watches.map((watch) => ({
    src: watch.image,
    alt: watch.alt,
    caption: `${watch.brand} ${watch.model}`,
  })),
  ...detailImages,
  ...galleryImages,
];

// Create at least 10 rows and distribute images evenly.
const rowCount = Math.max(10, Math.ceil(images.length / 3));

const galleryRows = Array.from(
  { length: rowCount },
  (_, rowIndex) =>
    images.filter((_, imageIndex) => imageIndex % rowCount === rowIndex)
);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
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
          {images.length} images.
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
              {rowImages.map((image, index) => (
                <button
                  className="gallery-image"
                  key={`${rowIndex}-${image.src}`}
                  type="button"
                  aria-label={`Enlarge image: ${image.caption}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />

                  <span className="gallery-zoom-label">
                    View larger
                  </span>

                  <span className="visually-hidden">
                    Gallery image {index + 1}
                  </span>
                </button>
              ))}
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
