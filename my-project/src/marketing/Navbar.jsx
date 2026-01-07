import { Search, ShoppingCart, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import logo from "../assets/logo/logo.png";
import { getUser, logoutUser } from "../utils/auth";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { cartItems } = useContext(CartContext); // ✅ cart context
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);

  // keep user synced
  useEffect(() => {
    setUser(getUser());
  }, [location.pathname]);

  const handleSearch = () => {
    if (!search.trim()) return;
    navigate(`/products?search=${search}`);
    setSearch("");
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setOpenProfile(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center"
        >
          <img src={logo} alt="Logo" className="h-10 object-contain" />
        </div>

        {/* MENU + SEARCH */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
            <span onClick={() => navigate("/products")} className="cursor-pointer">Products</span>
            <span onClick={() => navigate("/about")} className="cursor-pointer">About Us</span>
            <span onClick={() => navigate("/contact")} className="cursor-pointer">Contact</span>
          </nav>

          {/* SEARCH BAR */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="border rounded-full pl-4 pr-9 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search
              size={16}
              className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              onClick={handleSearch}
            />
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5 relative">

          {/* PROFILE */}
          <div className="relative flex items-center gap-2">
            <User
              className="cursor-pointer"
              onClick={() => setOpenProfile((prev) => !prev)}
            />

            {user && (
              <span
                onClick={() => setOpenProfile((prev) => !prev)}
                className="text-sm font-medium hidden md:inline cursor-pointer"
              >
                {user.name}
              </span>
            )}

            {openProfile && (
              <div className="absolute right-0 top-8 w-44 bg-white border shadow-md rounded-md text-sm z-50">
                {!user ? (
                  <>
                    <button
                      onClick={() => {
                        setOpenProfile(false);
                        navigate("/signin");
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        setOpenProfile(false);
                        navigate("/signup");
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    <div className="px-4 py-2 font-medium text-gray-700">
                      {user.name}
                    </div>
                    <button
                      onClick={() => {
                        setOpenProfile(false);
                        navigate("/profile");
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* CART ICON WITH COUNT */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
