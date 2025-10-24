import { Link, useLocation } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-blue-500">Dev</span> Nest
      </div>

      {/* Menu for large screens */}
      <div className="hidden lg:flex items-center gap-12">
        <ul className="flex items-center gap-8 bg-[#0b0c23] rounded-2xl px-10 py-3 shadow-inner border border-[#1b1c36]">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                to={item.path}
                className={`font-semibold transition duration-200 ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
              {location.pathname === item.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Us button */}
      <div className="hidden lg:block">
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0b0c23] p-4 z-50 flex flex-col gap-4 shadow-lg lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`font-semibold ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
