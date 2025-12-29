import { motion as Motion } from "framer-motion";
import ServicesGrid from "../components/ServicesGrid";


export default function Services() {
return (
<main className="pt-28 pb-20 min-h-screen max-w-7xl mx-auto px-4">
<Motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-center mb-12"
>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
Our <span className="gradient-text">Services</span>
</h1>
<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
Comprehensive digital solutions tailored to your business needs.
</p>
</Motion.div>
<ServicesGrid />
</main>
);
}