import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const whatsappLink = "https://wa.me/2348088199560";

const pricingPlans = [
  {
    name: "Basic",
    price: "₦150,000",
    features: [
      "3–5 pages",
      "Mobile responsive design",
      "Basic UI/UX design",
      "Contact form integration",
      "Basic SEO setup",
      "Delivery: 5–9 days",
    ],
  },
  {
    name: "Premium",
    price: "₦300,000",
    features: [
      "6–10 pages",
      "Custom UI/UX design",
      "Mobile & tablet optimization",
      "CMS or dynamic content",
      "Advanced SEO setup",
      "Performance optimization",
      "Delivery: 10–25 days",
    ],
  },
  {
    name: "custom",
    price: "₦400,000 - ∞",
    features: [
      "Unlimited pages",
      "Custom design & branding",
      "Advanced animations",
      "Admin dashboard / CMS",
      "API integrations",
      "Full SEO & analytics setup",
      "Priority support",
      "Delivery: 10–14 days",
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 py-20">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Website Pricing</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Transparent pricing and exceptional value. Choose the plan that fits
          your business needs.
        </p>
      </Motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {pricingPlans.map((plan, index) => (
          <Motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.05 }}
            className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
          >
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {plan.name}
            </h3>
            <div className="text-3xl font-bold text-gold mb-6">
              {plan.price}
            </div>
            <ul className="space-y-3 mb-8 text-sm text-gray-600">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gold text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition text-center font-semibold"
            >
              Order Now
            </a>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

