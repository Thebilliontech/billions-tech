export default function Footer() {
return (
<footer className="border-t border-gold/20 mt-24 py-10 md:py-12 text-center">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
<div className="flex gap-6 text-sm text-gray-400">
<a href="/about" className="hover:text-gold transition">About</a>
<a href="/services" className="hover:text-gold transition">Services</a>
<a href="/portfolio" className="hover:text-gold transition">Portfolio</a>
<a href="/contact" className="hover:text-gold transition">Contact</a>
</div>
<div className="text-sm md:text-base text-gray-400">
© {new Date().getFullYear()} <span className="text-gold font-semibold">Billions Tech</span>. All rights reserved.
</div>
</div>
</div>
</footer>
);
}