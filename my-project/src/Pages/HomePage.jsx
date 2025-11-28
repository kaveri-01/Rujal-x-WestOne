// src/pages/Home.jsx
import { FaMale, FaFemale, FaChild } from "react-icons/fa";
import Slider from "react-slick"; // ✅ added slider
import "slick-carousel/slick/slick.css"; // ✅ slick styles
import "slick-carousel/slick/slick-theme.css";

import kids from "../assets/kidsWear.jpg";
import mens from "../assets/mensWear.jpg";
import women from "../assets/womenWear.webp";
import aboutImage from "../assets/AboutUs.jpg"; // replace with your image

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <div className="bg-white text-gray-800">
      {/* ✅ Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-white">
        {/* ✅ Background Slider */}
        <div className="absolute inset-0">
          <Slider {...sliderSettings} className="h-full">
            {[mens, women, kids].map((img, index) => (
              <div key={index} className="h-[90vh] relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-3xl md:text-6xl text-red-500   font-bold leading-tight">
            Where Craftsmanship Meets Innovation
          </h1>
          <p className="mt-4 text-lg text-[#A3BFD9] md:text-xl text-gray-200">
            Empowering fashion brands with premium textiles rooted in tradition
            and built for the future.
          </p>
          <button className="mt-6 bg-[#7a6c5d] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#5c5045] transition">
            LEARN MORE
          </button>
        </div>

        {/* Cards */}
        <div className="absolute bottom-[-80px] w-full px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white text-gray-800 shadow-md rounded-lg p-6 text-center">
              <FaMale size={36} className="mx-auto mb-3 text-gray-700" />
              <h3 className="font-bold text-lg mb-2">Men’s Wear</h3>
              <p className="text-sm text-gray-600">
                From casual t-shirts to formal attire, tailored for style and comfort.
              </p>
            </div>
            <div className="bg-white text-gray-800 shadow-md rounded-lg p-6 text-center">
              <FaFemale size={36} className="mx-auto mb-3 text-gray-700" />
              <h3 className="font-bold text-lg mb-2">Women’s Wear</h3>
              <p className="text-sm text-gray-600">
                Supplying classic and contemporary fabrics for casual & formal fashion.
              </p>
            </div>
            <div className="bg-white text-gray-800 shadow-md rounded-lg p-6 text-center">
              <FaChild size={36} className="mx-auto mb-3 text-gray-700" />
              <h3 className="font-bold text-lg mb-2">Kids’ Wear</h3>
              <p className="text-sm text-gray-600">
                Skin-friendly, durable fabrics designed for comfort and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="max-w-6xl mx-auto py-28 px-6 mt-16 grid md:grid-cols-2 gap-10 items-center">
        <img src={aboutImage} alt="About us" className="rounded-lg shadow-md" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About <span className="text-[#7a6c5d] text-bold">FABRICOO?</span> </h2>
          <p className="text-gray-600 mb-6">
            We specialize in manufacturing premium fabrics and garments, combining
            tradition with innovation to deliver excellence for every client.
          </p>
          <button className="bg-[#7a6c5d] text-white px-6 py-2 rounded-md hover:bg-[#5c5045]">
            Read More
          </button>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="bg-[#C7D5BB] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose   <span className="text-[#7a6c5d] text-bold">FABRICOO?</span> </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-sm text-gray-700">We never compromise on quality.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-700">Blending tradition with modern technology.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-sm text-gray-700">Eco-friendly processes for a better future.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Customization</h3>
              <p className="text-sm text-gray-700">Tailored solutions for every brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Testimonials */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="italic">
              "FABRICOO has transformed our supply chain with their premium
              textiles and reliable delivery."
            </p>
            <h4 className="mt-4 font-semibold">– Client A</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="italic">
              "We trust FABRICOO for their unmatched quality and attention to detail."
            </p>
            <h4 className="mt-4 font-semibold">– Client B</h4>
          </div>
        </div>
      </section>

      {/* ✅ Contact CTA */}
      <section className="bg-[#7a6c5d] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to collaborate with     <span className="text-black text-bold">FABRICOO?</span> 
        </h2>
        <p className="mb-6">Get in touch with us today to start your journey.</p>
        <button className="bg-white text-[#7a6c5d] px-6 py-2 rounded-md font-semibold hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
