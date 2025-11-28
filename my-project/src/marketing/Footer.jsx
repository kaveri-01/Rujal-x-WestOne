// src/components/Footer.jsx
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#B5C7A5]  text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Brand + Social Icons in same row */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-6 mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold tracking-wide">
              FABRICOO PVT. LTD
            </h2>
            <span className="w-12 h-[2px] bg-gray-600"></span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-600">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center space-x-2">
              <span>Our Services</span>
            </h3>
            <span className="block w-10 h-[2px] bg-gray-600 mb-3"></span>
            <ul className="space-y-1 text-sm">
              <li>Fabric Manufacturing</li>
              <li>Cutting</li>
              <li>Sewing</li>
              <li>Digital & DTF Printing</li>
              <li>Checking</li>
              <li>Ironing</li>
              <li>Packaging</li>
              <li>Delivering</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center space-x-2">
              <span>Our Products</span>
            </h3>
            <span className="block w-10 h-[2px] bg-gray-600 mb-3"></span>
            <ul className="space-y-1 text-sm">
              <p onClick={() => navigate("/men")}
                className="cursor-pointer hover:text-blue-600">
                Men’s Wear
                </p> 
              <p onClick={() => navigate("/women")} 
                 className="cursor-pointer hover:text-blue-600">
                  women wear
                 </p>
              <p onClick={() => navigate("/kids")}
                 className="cursor-pointer hover:text-blue-600" >
                  kids wear
              </p>     
             
               
            
             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center space-x-2">
              <span>Contact Us</span>
            </h3>
            <span className="block w-10 h-[2px] bg-gray-600 mb-3"></span>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  403 Swastik Coporate Park, Lbs Marg, Opp Shreyas takies,
                  <br />
                  Ghatkopar west, Mumbai-400086, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt />
                <a href="tel:+918424901673" className="hover:underline">
                  +91 84249 01673
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <a
                  href="mailto:parchfashion65@gmail.com"
                  className="hover:underline"
                >
                  parchfashion65@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
