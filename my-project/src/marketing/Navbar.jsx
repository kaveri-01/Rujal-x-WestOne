// src/components/Navbar.jsx
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold text-gray-800 cursor-pointer">
          <Link to="/">Westone</Link>
        </div>

        {/* Center Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-1 focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/aboutus" className="hover:text-blue-600">About Us</Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-blue-600">Products ▼</button>
            {isDropdownOpen && (
              <div className="absolute left-0 bg-white shadow-lg rounded-md w-40">
                <Link to="/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                <Link to="/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
                <Link to="/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
              </div>
            )}
          </div>

          <Link to="/contactus" className="hover:text-blue-600">Contact Us</Link>

          {/* Cart with dynamic badge */}
          <Link to="/cart" className="relative hover:text-blue-600">
            <FaShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          {/* Search in mobile */}
          <div className="my-3 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-1 focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>

          <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link to="/aboutus" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>

          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Products {isDropdownOpen ? "▲" : "▼"}
          </button>
          {isDropdownOpen && (
            <div className="pl-6">
              <Link to="/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
              <Link to="/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
              <Link to="/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
            </div>
          )}

          <Link to="/contactus" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>

          {/* Cart with dynamic badge in mobile */}
          <Link to="/cart" className="relative block px-4 py-2 hover:bg-gray-100">
            <FaShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute top-1 left-8 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
