import { Link } from "react-router-dom";
import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <nav className="fixed top-0 left-0 w-full glass-effect border-b border-gold/20 z-50 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex justify-between items-center">
    {/* Logo with animation */}
      <Link to="/">
      <Motion.img
        src={logo}
        alt="Billions Tech Logo"
        className="w-12 h-12 md:w-20 md:h-20 rounded-xl object-contain glow-gold"
        whileHover={{ scale: 1.05, rotate: 3 }}
        transition={{ type: "spring", stiffness: 180 }}
      />
    </Link>

        <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-semibold">
          <Link to="/about" className="text-gray-300 hover:text-gold transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-gold transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-gold transition-colors relative group">
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 rounded-lg hover:bg-gold/10 text-gold transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {open && (
        <Motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect border-t border-gold/20 py-4 flex flex-col items-center gap-4"
        >
          <Link to="/about" onClick={() => setOpen(false)} className="text-gray-300 hover:text-gold transition text-lg font-semibold">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="text-gray-300 hover:text-gold transition text-lg font-semibold">Services</Link>
          <Link to="/portfolio" onClick={() => setOpen(false)} className="text-gray-300 hover:text-gold transition text-lg font-semibold">Portfolio</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="text-gray-300 hover:text-gold transition text-lg font-semibold">Contact</Link>
        </Motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
