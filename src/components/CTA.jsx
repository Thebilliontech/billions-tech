import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

return (
<Motion.section
ref={ref}
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
transition={{ duration: 0.8 }}
className="mt-24 py-16 md:py-20 glass-effect text-center rounded-2xl mx-4 md:mx-8 lg:mx-20"
>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to build with <span className="gradient-text">Billions Tech</span>?</h2>
<p className="mt-4 text-gray-300 text-base md:text-lg px-4">Let's turn your ideas into scalable technology.</p>
<a href="https://wa.me/2348088199560" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-gold text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl glow-gold-hover transition font-semibold">Get in Touch</a>
</Motion.section>
);
}