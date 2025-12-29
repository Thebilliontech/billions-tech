import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  "Discovery & Planning",
  "Design & Prototyping",
  "Development",
  "Testing & Review",
  "Deployment & Support",
];

export default function OurProcess() {
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
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Process</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          At Billions Tech, we follow a structured and transparent process to
          ensure every project is delivered efficiently, strategically, and to
          the highest standard.
        </p>
      </Motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
        {steps.map((step, index) => (
          <Motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="glass-effect rounded-2xl p-6 hover:glow-gold-hover transition-all duration-300 text-center group"
          >
            <div className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
              {index + 1}
            </div>
            <h3 className="font-semibold text-lg text-white group-hover:text-gold transition-colors">{step}</h3>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

