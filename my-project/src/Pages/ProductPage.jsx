import React, { useState, useContext, useEffect } from "react";
import dummyProducts from "../data/productData";
import { CartContext } from "../context/CartContext";

const ProductsPage = ({ defaultCategory }) => {
  const { addToCart } = useContext(CartContext);

  const [filters, setFilters] = useState({
    category: defaultCategory || "",
    price: 5000,
    color: "",
    size: "",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: defaultCategory || "",
    }));
  }, [defaultCategory]);

  // ✅ SAFE FILTER LOGIC (CASE-INSENSITIVE)
  const filteredProducts = dummyProducts.filter((p) => {
    return (
      (filters.category
        ? p.category?.toLowerCase() === filters.category.toLowerCase()
        : true) &&
      p.price <= filters.price &&
      (filters.color
        ? p.color?.toLowerCase() === filters.color.toLowerCase()
        : true) &&
      (filters.size
        ? p.size?.toUpperCase() === filters.size.toUpperCase()
        : true)
    );
  });

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* ================= SIDEBAR ================= */}
      <aside className="hidden lg:block w-1/5 bg-white p-6 border-r">
        <h2 className="text-xl font-semibold mb-6">Filters</h2>

        {/* CATEGORY */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Category</h3>
          {["INDOWESTERN", "CasualWear", ].map((cat) => (
            <label key={cat} className="block mb-2 capitalize">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() =>
                  setFilters({ ...filters, category: cat })
                }
                className="mr-2"
              />
              {cat}
            </label>
          ))}
          <button
            className="text-sm text-blue-600 mt-2"
            onClick={() =>
              setFilters({ ...filters, category: "" })
            }
          >
            Clear
          </button>
        </div>

        {/* PRICE */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">
            Price (Up to ₹{filters.price})
          </h3>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={filters.price}
            onChange={(e) =>
              setFilters({
                ...filters,
                price: Number(e.target.value),
              })
            }
            className="w-full"
          />
        </div>

        {/* COLOR */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Color</h3>
          {["black", "white", "red", "blue", "yellow"].map(
            (c) => (
              <label key={c} className="block mb-2 capitalize">
                <input
                  type="radio"
                  name="color"
                  checked={filters.color === c}
                  onChange={() =>
                    setFilters({ ...filters, color: c })
                  }
                  className="mr-2"
                />
                {c}
              </label>
            )
          )}
          <button
            className="text-sm text-blue-600 mt-2"
            onClick={() =>
              setFilters({ ...filters, color: "" })
            }
          >
            Clear
          </button>
        </div>

        {/* SIZE */}
        <div>
          <h3 className="font-medium mb-3">Size</h3>
          {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
            <label key={s} className="block mb-2">
              <input
                type="radio"
                name="size"
                checked={filters.size === s}
                onChange={() =>
                  setFilters({ ...filters, size: s })
                }
                className="mr-2"
              />
              {s}
            </label>
          ))}
          <button
            className="text-sm text-blue-600 mt-2"
            onClick={() =>
              setFilters({ ...filters, size: "" })
            }
          >
            Clear
          </button>
        </div>
      </aside>

      {/* ================= PRODUCTS ================= */}
      <main className="w-full lg:w-4/5 p-6">
        <h1 className="text-2xl font-semibold mb-6">
          Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="h-56 bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    ₹{product.price}
                  </p>
                  <p className="text-sm text-gray-500 capitalize mb-3">
                    {product.color} | {product.size}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-[#5c5045] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
