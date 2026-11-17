import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/ProductModal.jsx";
import SectionIntro from "../components/SectionIntro.jsx";
import watches from "../data/watches.json";

const categories = [
  {
    id: "luxury",
    name: "Luxury Watches",
    description: "Icons of enduring distinction.",
    image: "https://framerusercontent.com/images/qJjIEwmj7Z3Cew7m8uaMWB0m5I.jpg?scale-down-to=1024&width=1600&height=2400",
    alt: "Luxury watch collection",
  },
  {
    id: "vintage",
    name: "Vintage Watches",
    description: "Character, collected over time.",
    image: "https://framerusercontent.com/images/NoidKJPMaZkpfhTUj2cI2f1cZIY.jpg?scale-down-to=1024&width=1600&height=2000",
    alt: "Heritage-inspired watch collection",
  },
  {
    id: "smart",
    name: "Smart Watches",
    description: "A connected perspective.",
    image: "https://framerusercontent.com/images/4lUXPlAjVZR5kqVLCj1IxHoJhVk.jpg?scale-down-to=1024&width=1600&height=2399",
    alt: "Smart watch collection",
  },
  {
    id: "classic",
    name: "Classic Watches",
    description: "Quietly assured. Always relevant.",
    image: "https://framerusercontent.com/images/dyLoAVVKlYIIqDK90Z05yL2huU.jpg?scale-down-to=1024&width=1600&height=2400",
    alt: "Classic watch collection",
  },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryCategory = searchParams.get("category");
  const activeCategory = categories.some(({ id }) => id === queryCategory)
    ? queryCategory
    : "all";
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (activeCategory !== "all") {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeCategory]);

  const filteredProducts = useMemo(
    () =>
      activeCategory === "all"
        ? watches
        : watches.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  const closeProductModal = useCallback(() => setSelectedProduct(null), []);

  function chooseCategory(categoryId) {
    const nextCategory = activeCategory === categoryId ? "all" : categoryId;
    setSearchParams(nextCategory === "all" ? {} : { category: nextCategory });
  }

  return (
    <>
      <section className="page-section collection-categories">
        <div className="content-width">
          <SectionIntro
            eyebrow="01 / Curated with intention"
            title="A timepiece for every chapter."
            description="Distinct expressions of time. One uncompromising standard."
          />
          <div className="category-grid">
            {categories.map((category) => (
              <article
                className={`category-card${activeCategory === category.id ? " is-selected" : ""}`}
                key={category.id}
              >
                <button
                  type="button"
                  className="category-image-button"
                  onClick={() => chooseCategory(category.id)}
                  aria-label={`Show ${category.name}`}
                  aria-pressed={activeCategory === category.id}
                >
                  <img src={category.image} alt={category.alt} loading="lazy" />
                </button>
                <div className="category-content">
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <button
                    className="text-button"
                    type="button"
                    onClick={() => chooseCategory(category.id)}
                  >
                    Explore Collection
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section product-section" id="products">
        <div className="content-width">
          <SectionIntro
            eyebrow="02 / The Alberto selection"
            title="Exceptional by design."
            description="A considered selection for collectors and everyday connoisseurs."
          />
          <p className="catalogue-note">
            Sample catalogue · USD prices are illustrative · Photography is representative
          </p>
          {activeCategory !== "all" && (
            <div className="filter-status">
              <p>Showing {categories.find(({ id }) => id === activeCategory)?.name}</p>
              <button className="text-button" type="button" onClick={() => setSearchParams({})}>
                View all watches
              </button>
            </div>
          )}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={setSelectedProduct}
                />
              ))}
            </div>
          ) : (
            <p className="empty-category">
              This category is being curated. Please contact us for current availability.
            </p>
          )}
        </div>
      </section>
      <ProductModal product={selectedProduct} onClose={closeProductModal} />
    </>
  );
}