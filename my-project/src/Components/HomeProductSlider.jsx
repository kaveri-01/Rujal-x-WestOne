import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import dummyProducts from "../data/productData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeProductSlider() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const homeProducts = dummyProducts.slice(0, 8);
  const cardWidth = 240; // card width + gap

  /* 📱 AUTO SLIDE (MOBILE ONLY) */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += cardWidth;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* 🖥 DESKTOP ARROW CONTROLS */
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-green-700 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-xl md:text-2xl font-semibold">
            Latest Products
          </h2>

          {/* DESKTOP ARROWS */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollLeft}
              className="bg-white/90 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white/90 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        >
          {homeProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products?search=${product.name}`)}
              className="min-w-[220px] bg-white rounded-lg overflow-hidden cursor-pointer snap-start hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-3">
                <h3 className="text-sm font-medium truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/products")}
            className="bg-yellow-400 hover:bg-yellow-500 px-10 py-2 rounded-full font-medium transition"
          >
            VIEW ALL
          </button>
        </div>

      </div>
    </section>
  );
}
