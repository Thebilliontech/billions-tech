import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import CTA from "../components/CTA";


export default function Home() {
return (
<main>
<Hero />
<section className="max-w-7xl mx-auto px-4 py-20">
<h2 className="text-3xl font-bold text-center">What We Do</h2>
<ServicesGrid />
</section>
<CTA />
</main>
);
}