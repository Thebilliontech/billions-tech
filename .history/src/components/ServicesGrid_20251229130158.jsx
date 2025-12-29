import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ServicesGrid() {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

const services = [
"UI/UX & Product Design",
"Web & Mobile Development",
"AI & Automation Systems",
"Data Analysis & Insights",
"Digital Strategy",
"Brand Experience Design",
];


return (
<div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
{services.map((service, index) => (
<Motion.div
key={service}
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
whileHover={{ scale: 1.05, y: -5 }}
className="glass-effect rounded-2xl p-6 hover:glow-gold-hover transition-all duration-300 group cursor-pointer"
>
<h3 className="font-semibold text-lg text-white mb-2 group-hover:text-gold transition-colors">{service}</h3>
<p className="text-sm text-gray-400 mt-2">
Tailored solutions designed to scale with your business.
</p>
<div className="mt-4 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-300"></div>
</Motion.div>
))}
</div>
);
}
