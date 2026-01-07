import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
          "url(https://images.unsplash.com/photo-1483985988355-763728e1935b)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Create Account
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Join us and start shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Your full name"
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

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-green-600 cursor-pointer font-medium"
          >
            Sign In
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
