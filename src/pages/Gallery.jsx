
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

// Divide images into two rows
const firstRowImages = images.filter((_, index) => index % 2 === 0);
const secondRowImages = images.filter((_, index) => index % 2 !== 0);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const renderGalleryRow = (rowImages, rowNumber) => (
    <div
      className="gallery-grid"
      role="region"
      aria-label={`Watch photography gallery row ${rowNumber}`}
      tabIndex={0}
    >
      {rowImages.map((image, index) => (
        <button
          className="gallery-image"
          key={`${rowNumber}-${image.src}`}
          type="button"
          aria-label={`Enlarge image: ${image.caption}`}
          onClick={() => setSelectedImage(image)}
        >
          <img src={image.src} alt={image.alt} loading="lazy" />

          <span className="gallery-zoom-label">
            View larger
          </span>

          <span className="visually-hidden">
            Gallery image {index + 1}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <section className="page-section gallery-section">
      <div className="content-width">
        <SectionIntro
          eyebrow="05 / Through our lens"
          title="Details worth a second look."
        />

        <p className="gallery-scroll-hint">
          Swipe or scroll to explore all {images.length} images.
        </p>

        {renderGalleryRow(firstRowImages, 1)}
        {renderGalleryRow(secondRowImages, 2)}
      </div>

      <GalleryLightbox
        image={selectedImage}
        onClose={closeLightbox}
      />
    </section>
  );
}
