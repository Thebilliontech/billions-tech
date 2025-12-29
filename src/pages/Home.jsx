import { motion as Motion } from "framer-motion";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Pricing from "../components/Pricing";
import OurProcess from "../components/OurProcess";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";


export default function Home() {
return (
<main>
<Hero />
<section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
<Motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
>
What We <span className="gradient-text">Do</span>
</Motion.h2>
<ServicesGrid />
</section>
<Pricing />
<OurProcess />
<FAQ />
<Testimonials />
<CTA />
</main>
);
}