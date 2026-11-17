import { useCallback, useState } from "react";
import GalleryLightbox from "../components/GalleryLightbox.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import watches from "../data/watches.json";

const editorialImages = [
  {
    src: "https://framerusercontent.com/images/1Xhl8IwUI87w4IOhEXiMFzU7pG0.jpg?scale-down-to=1024&width=1200&height=675",
    alt: "Watch detail photographed in a studio",
    caption: "A closer look at the details",
  },
  {
    src: "https://framerusercontent.com/images/uHUGSONPeA9Xd00bOpJBvxvtywI.jpg?scale-down-to=1024&width=1200&height=795",
    alt: "Watch craftsmanship detail",
    caption: "Craftsmanship in focus",
  },
];

const images = [
  ...watches.map((watch) => ({
    src: watch.image,
    alt: watch.alt,
    caption: `${watch.brand} ${watch.model}`,
  })),
  ...editorialImages,
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  return (
    <section className="page-section gallery-section">
      <div className="content-width">
        <SectionIntro eyebrow="05 / Through our lens" title="Details worth a second look." />
        <div className="gallery-grid">
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
