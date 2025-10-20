import React from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm flex items-center justify-between px-10 py-4 z-50">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
        MyBrand
      </h1>

      <div className="space-x-10 text-gray-600 font-medium hidden md:flex">
        <button onClick={() => scrollTo("features")} className="hover:text-purple-600 transition">
          Features
        </button>
        <button onClick={() => scrollTo("about")} className="hover:text-purple-600 transition">
          About
        </button>
        <button onClick={() => scrollTo("contact")} className="hover:text-purple-600 transition">
          Contact
        </button>
      </div>

      <button
        onClick={() => scrollTo("contact")}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-transform transform hover:scale-105 shadow-md"
      >
        Get Started
      </button>
    </nav>
  );
}
