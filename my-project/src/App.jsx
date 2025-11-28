import { Routes, Route } from "react-router-dom";
import Navbar from "./marketing/Navbar";
import Footer from "./marketing/Footer";
import Home from "./Pages/HomePage";
import AboutUs from "./marketing/AboutUs";
import ContactUs from "./marketing/ContactUs";
import ProductsPage from "./Pages/ProductPage";
import { CartProvider } from "./context/CartContext";
import CartPage from "./Pages/CartPage";
import RujalMedia from "./marketing/RujalMedia";

function App() {
  return (
    <CartProvider> {/* ✅ wrap everything */}
      <div>
        <Navbar />

        <div className="pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="/men" element={<ProductsPage defaultCategory="men" />} />
            <Route path="/women" element={<ProductsPage defaultCategory="women" />} />
            <Route path="/kids" element={<ProductsPage defaultCategory="kids" />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>

        <Footer />
        <RujalMedia />
      </div>
    </CartProvider>
  );
}

export default App;
