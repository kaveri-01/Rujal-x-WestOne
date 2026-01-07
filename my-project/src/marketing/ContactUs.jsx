import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "918424901673"; // your WhatsApp number

    const whatsappMessage = `
Hello 👋

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADING */}
        <h1 className="text-lg font-semibold mb-10">CONTACT US</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT : CONTACT DETAILS */}
          <div className="space-y-6 text-sm text-gray-800">
            <p className="leading-7">
              We’d love to hear from you. Fill out the form and we’ll connect
              with you directly on WhatsApp.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  403 Swastik Corporate Park, LBS Marg, Opp Shreyas Talkies,
                  <br />
                  Ghatkopar West, Mumbai – 400086,
                  <br />
                  Maharashtra, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+91 84249 01673</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>parchfashion65@gmail.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT : WHATSAPP FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 text-sm focus:outline-none focus:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 text-sm focus:outline-none focus:border-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 text-sm focus:outline-none focus:border-gray-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 border text-sm hover:bg-gray-100"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
