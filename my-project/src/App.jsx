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
import WhatsAppRedirect from "./Pages/WhatsAppRedirect";
import WhatsAppFloating from "./Components/FloatingWhatsApp";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* ✅ wrap everything */}
      <div>
        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="products" element={<ProductsPage />} />
            <Route
              path="/men"
              element={<ProductsPage defaultCategory="men" />}
            />
            <Route
              path="/women"
              element={<ProductsPage defaultCategory="women" />}
            />
            <Route
              path="/kids"
              element={<ProductsPage defaultCategory="kids" />}
            />
            <Route path="/whatsapp" element={<WhatsAppRedirect />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  {" "}
                  <Profile />{" "}
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>

        <Footer />
        <WhatsAppFloating />
        <RujalMedia />
      </div>
    </CartProvider>
  );
}

export default App;
