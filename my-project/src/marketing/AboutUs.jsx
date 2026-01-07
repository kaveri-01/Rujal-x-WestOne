import { useState, useMemo } from "react";
import dummyProducts from "../data/productData";

const INITIAL_COUNT = 5;
const LOAD_MORE_COUNT = 5;

const About = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("best");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [viewAll, setViewAll] = useState(false);

  // 🔹 Filter + Sort products dynamically
  const filteredProducts = useMemo(() => {
    let products = [...dummyProducts];

    if (activeCategory !== "all") {
      products = products.filter(
        (p) => p.category === activeCategory
      );
    }

    if (sortBy === "low") {
      products.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "high") {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [activeCategory, sortBy]);

  // 🔹 Products to display
  const displayedProducts = viewAll
    ? filteredProducts
    : filteredProducts.slice(0, visibleCount);

  // 🔹 Reset pagination when filter changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_COUNT);
    setViewAll(false);
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ================= ABOUT US TEXT ================= */}
        <div className="mb-12">
          <h1 className="text-lg font-semibold mb-6">ABOUT US</h1>

          <p className="text-sm leading-7 max-w-3xl text-gray-800">
            At <span className="font-medium">Glam Graces</span>, fashion is an
            expression of elegance and ease.
            <br />
            Blending heritage-inspired details with modern design,
            <br />
            our Indo-Western and casualwear collections are defined by
            craftsmanship, versatility, and refined quality.
            <br />
            Every piece is created to offer comfort, confidence, and timeless
            appeal.
          </p>
        </div>

        {/* ================= PRODUCT HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t pt-8 mb-8">

          {/* Category Tabs */}
          <div className="flex gap-10 text-sm font-medium">
            <button
              onClick={() => handleCategoryChange("all")}
              className={activeCategory === "all" ? "font-semibold" : ""}
            >
              PRODUCT
            </button>
            <button
              onClick={() => handleCategoryChange("women")}
              className={activeCategory === "women" ? "font-semibold" : ""}
            >
              INDOWESTERN
            </button>
            <button
              onClick={() => handleCategoryChange("men")}
              className={activeCategory === "men" ? "font-semibold" : ""}
            >
              CASUALWEAR
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-4 mt-4 md:mt-0 text-sm">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-3 py-1 text-sm"
            >
              <option value="best">Best selling</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>

            <span className="text-gray-500">
              {filteredProducts.length} products
            </span>
          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {displayedProducts.map((product) => (
            <div key={product.id}>
              <div className="w-full h-[280px] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm mt-2">₹{product.price}</p>
              <p className="text-sm text-gray-700">{product.name}</p>
            </div>
          ))}
        </div>

        {/* ================= BUTTONS ================= */}
        {!viewAll && visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
              className="px-6 py-2 border text-sm hover:bg-gray-100"
            >
              Show More
            </button>
          </div>
        )}

        {!viewAll && visibleCount >= filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setViewAll(true)}
              className="px-6 py-2 border text-sm hover:bg-gray-100"
            >
              View All
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default About;
