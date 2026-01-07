import { useNavigate } from "react-router-dom";
import dummyProducts from "../data/productData";

export default function CategorySection() {
  const navigate = useNavigate();

  // 🔹 derive categories from product data
  const categories = [
    {
      title: "MEN",
      value: "men",
      image: dummyProducts.find(p => p.category === "men")?.image,
    },
    {
      title: "WOMEN",
      value: "women",
      image: dummyProducts.find(p => p.category === "women")?.image,
    },
    {
      title: "KIDS",
      value: "kids",
      image: dummyProducts.find(p => p.category === "kids")?.image,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-8">
        SHOP BY CATEGORY
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.value}
            onClick={() => navigate(`/products?category=${cat.value}`)}
            className="relative h-[380px] cursor-pointer overflow-hidden group"
          >
            {/* IMAGE */}
            <img
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* TEXT */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <h3 className="text-white text-2xl md:text-3xl font-semibold">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
