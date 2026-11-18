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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  return (
    <section className="page-section gallery-section">
      <div className="content-width">
        <SectionIntro eyebrow="05 / Through our lens" title="Details worth a second look." />
        <p className="gallery-scroll-hint">Swipe or scroll to explore all {images.length} images.</p>
        <div
          className="gallery-grid"
          role="region"
          aria-label="Watch photography gallery"
          tabIndex={0}
        >
          {images.map((image, index) => (
            <button
              className="gallery-image"
              key={image.src}
              type="button"
              aria-label={`Enlarge image: ${image.caption}`}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span className="gallery-zoom-label">View larger</span>
              <span className="visually-hidden">Gallery image {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
      <GalleryLightbox image={selectedImage} onClose={closeLightbox} />
    </section>
  );
}
