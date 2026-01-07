import { useNavigate } from "react-router-dom";
import dummyProducts from "../data/productData";

export default function BrowseLatestGrid() {
  const navigate = useNavigate();

  // take first 3 products for grid
  const [mainProduct, secondProduct, thirdProduct] = dummyProducts;

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          BROWSE OUR LATEST PRODUCT
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT BIG IMAGE */}
          <div
            onClick={() => navigate(`/products?search=${mainProduct.name}`)}
            className="relative h-[420px] cursor-pointer overflow-hidden group"
          >
            <img
              src={mainProduct.image}
              alt={mainProduct.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 h-full flex items-end p-6">
              <div className="text-white">
                <h3 className="text-lg font-semibold">
                  {mainProduct.name}
                </h3>
                <p className="text-sm">₹{mainProduct.price}</p>
              </div>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="grid grid-rows-2 gap-6">

            {[secondProduct, thirdProduct].map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/products?search=${product.name}`)}
                className="relative h-[198px] cursor-pointer overflow-hidden group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative z-10 h-full flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-sm font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-xs">₹{product.price}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
