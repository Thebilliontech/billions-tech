import { Link } from "react-router-dom";
import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import logo from '../assets/logo.png'; // <- your logo path

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b z-50 shadow-md">
  <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
    {/* Logo with animation */}
      <Link to="/">
      <Motion.img
        src={logo}
        alt="Billions Tech Logo"
        className="w-20 h-20 md:w-32 md:h-32 rounded-2xl object-contain"
        whileHover={{ scale: 1.03, rotate: 3 }}
        transition={{ type: "spring", stiffness: 180 }}
      />
    </Link>


        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <Link to="/about" className="hover:text-gold transition">About</Link>
          <Link to="/services" className="hover:text-gold transition">Services</Link>
          <Link to="/portfolio" className="hover:text-gold transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-gold transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t py-4 flex flex-col items-center gap-4">
          <Link to="/about" className="hover:text-gold transition">About</Link>
          <Link to="/services" className="hover:text-gold transition">Services</Link>
          <Link to="/portfolio" className="hover:text-gold transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-gold transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
