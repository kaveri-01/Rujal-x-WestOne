import React, { useState, useContext, useEffect } from "react";
import dummyProducts from "../data/productData";
import { CartContext } from "../context/CartContext";  // ✅ import context

const ProductsPage = ({ defaultCategory }) => {
  const { addToCart } = useContext(CartContext); // ✅ get addToCart from context

  const [filters, setFilters] = useState({
    category: defaultCategory || "",
    price: 2000,
    color: "",
    size: "",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: defaultCategory || "",
    }));
  }, [defaultCategory]);

  // Filter products
  const filteredProducts = dummyProducts.filter((p) => {
    return (
      (filters.category ? p.category === filters.category : true) &&
      p.price <= filters.price &&
      (filters.color ? p.color === filters.color : true) &&
      (filters.size ? p.size === filters.size : true)
    );
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Category */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Category</h3>
          {["men", "women", "kids"].map((cat) => (
            <label key={cat} className="block">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat}
                onChange={() => setFilters({ ...filters, category: cat })}
              />{" "}
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
        </div>

        {/* Price */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Price (Up to ₹{filters.price})</h3>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: Number(e.target.value) })
            }
            className="w-full"
          />
        </div>

        {/* Color */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Color</h3>
          {["black", "white", "red", "blue", "green", "yellow"].map((c) => (
            <label key={c} className="block">
              <input
                type="radio"
                name="color"
                checked={filters.color === c}
                onChange={() => setFilters({ ...filters, color: c })}
              />{" "}
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </label>
          ))}
          <button
            className="text-sm text-blue-600 mt-1"
            onClick={() => setFilters({ ...filters, color: "" })}
          >
            Clear
          </button>
        </div>

        {/* Size */}
        <div>
          <h3 className="font-medium mb-2">Size</h3>
          {["XS", "S", "M", "L", "XL"].map((s) => (
            <label key={s} className="block">
              <input
                type="radio"
                name="size"
                checked={filters.size === s}
                onChange={() => setFilters({ ...filters, size: s })}
              />{" "}
              {s}
            </label>
          ))}
          <button
            className="text-sm text-blue-600 mt-1"
            onClick={() => setFilters({ ...filters, size: "" })}
          >
            Clear
          </button>
        </div>
      </aside>

      {/* Products */}
      <main className="w-5/6 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col items-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
                <p className="text-sm text-gray-500 capitalize mb-3">
                  {product.color} | {product.size}
                </p>
                <button
                  onClick={() => addToCart(product)} // ✅ FIXED
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
      </main>
    </div>
  );
};

export default ProductsPage;
