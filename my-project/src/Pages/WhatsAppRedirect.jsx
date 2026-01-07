import { useEffect } from "react";

export default function WhatsAppRedirect() {
  useEffect(() => {
    // WhatsApp number (same as footer)
    const phoneNumber = "918424901673";
    const message = "Hello, I want to know more about your products.";

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-medium">
        Redirecting to WhatsApp…
      </p>
    </div>
  );
}
