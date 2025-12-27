import { motion as Motion } from 'framer-motion';

export default function Hero() {
return (
<section className="relative min-h-screen flex items-center justify-center pt-32">
{/* Hero background image placeholder */}
<div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden">
<img src="/hero-background.jpg" alt="Hero Background" className="w-full h-full object-cover" />
</div>


<Motion.div
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="relative z-10 text-center px-4 max-w-3xl"
>
<h1 className="text-4xl md:text-6xl font-bold text-white">
Building <span className="text-gold">Smart Tech</span><br />For Modern Businesses
</h1>
<p className="mt-6 text-white text-lg">
Billions Tech builds scalable digital products, AI-powered systems, and data-driven solutions.
</p>
<div className="mt-8 flex gap-4 justify-center">
<a href="/contact" className="bg-gold text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition">Work With Us</a>
<a href="/services" className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-800 transition">Our Services</a>
</div>
</Motion.div>
</section>
);
}