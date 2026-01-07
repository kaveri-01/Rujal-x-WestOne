import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser({
      name: formData.name,
      email: formData.email,
    });

    navigate("/");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1521334884684-d80222895322)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Sign in to continue shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 cursor-pointer font-medium"
          >
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
