import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/womenWear.webp";
// 👆 put your banner image here (or change path)
<div className="absolute inset-0 bg-black/45" />;

export default function HeroSlider() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-semibold mb-4">
          Crafted Heritage, Contemporary Comfort
        </h1>

        <p className="text-white text-sm md:text-base mb-8">
          Outstanding Service | Exclusive Pricing | Signature Craftsmanship
        </p>

        <button
          onClick={() => navigate("/products")}
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-full font-medium tracking-wide transition"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
}
