import { motion as Motion } from "framer-motion";
export default function ServicesGrid() {
const services = [
"UI/UX & Product Design",
"Web & Mobile Development",
"AI & Automation Systems",
"Data Analysis & Insights",
"Digital Strategy",
"Brand Experience Design",
];


return (
<div className="grid md:grid-cols-3 gap-6 mt-12">
{services.map((service) => (
<Motion.div
key={service}
whileHover={{ scale: 1.05 }}
className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
>
<h3 className="font-semibold text-lg text-gray-800">{service}</h3>
<p className="text-sm text-gray-600 mt-2">
Tailored solutions designed to scale with your business.
</p>
</Motion.div>
))}
</div>
);
}
