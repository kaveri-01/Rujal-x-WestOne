import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919510992890"; // same number as footer
    const message = "Hello, I want to know more about your products.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-[9999] cursor-pointer"
    >
      {/* Pulse / Blink Effect */}
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-ping"></span>

        {/* WhatsApp Button */}
        <div className="relative bg-green-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition">
          <FaWhatsapp size={36} />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloating;
