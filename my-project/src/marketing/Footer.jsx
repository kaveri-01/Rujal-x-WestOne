import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-pink-800 text-white pt-14">
        <div className="max-w-7xl mx-auto px-6">
          {/* ================= TOP GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/30">
            {/* CONTACT INFO */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex gap-2">
                  <FaEnvelope className="mt-1" />
                  <span>westone179@gmail.com</span>
                </li>
                <li className="flex gap-2">
                  <FaPhoneAlt className="mt-1" />
                  <span>+91 9510992890</span>
                </li>
                <li className="flex gap-2">
                  <FaMapMarkerAlt className="mt-1" />
                  <span>
                    {" "}
                    Golden Plaza 415, opp. Amar Jawan Circle<br /> 
                    Near Sardar Patel Ring Road,
                    
                     <br /> nikol ahenedabad dujrat 380049
                  </span>
                </li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => navigate("/about")}
                >
                  About Us
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => navigate("/products")}
                >
                  Product
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </li>
              </ul>
            </div>

            {/* SUBSCRIBE */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Subscribe to our email
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-800 rounded-l-md outline-none"
                />
                <button className="bg-yellow-400 text-black px-4 rounded-r-md font-semibold hover:bg-yellow-300">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ROW ================= */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 text-sm text-white/90">
            {/* POLICIES */}
            <div className="flex flex-wrap gap-4">
              <span className="cursor-pointer hover:underline">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:underline">
                Refund Policy
              </span>
              <span className="cursor-pointer hover:underline">
                Terms of Service
              </span>
              <span className="cursor-pointer hover:underline">
                Shipping Policy
              </span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-gray-200" />
              <FaInstagram className="cursor-pointer hover:text-gray-200" />
              <FaYoutube className="cursor-pointer hover:text-gray-200" />
            </div>
          </div>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/918424901673"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
};

export default Footer;
