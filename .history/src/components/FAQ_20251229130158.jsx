import { motion as Motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on complexity. Basic websites typically take 5–7 days, Premium projects 7–10 days, and Professional projects 10–14 days. We'll provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Do you offer maintenance?",
    answer:
      "Yes, we offer ongoing maintenance and support packages. This includes updates, security patches, content updates, and technical support. Contact us to discuss a maintenance plan tailored to your needs.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade your plan at any time. We'll work with you to seamlessly transition to a higher tier, adding new features and capabilities as your business grows.",
  },
  {
    question: "Do you build custom solutions?",
    answer:
      "Yes, we specialize in custom solutions tailored to your specific business needs. Whether it's a unique feature, integration, or entirely custom application, we can build it to your specifications.",
  },
  {
    question: "How do payments work?",
    answer:
      "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. Payment plans can be arranged for larger projects. All payments are secure and we accept various payment methods.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="max-w-4xl mx-auto px-4 py-20">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
      </Motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="glass-effect rounded-2xl overflow-hidden hover:glow-gold-hover transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gold/10 transition"
            >
              <span className="font-semibold text-white">{faq.question}</span>
              <Motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gold text-xl"
              >
                ▼
              </Motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <Motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-300">{faq.answer}</div>
                </Motion.div>
              )}
            </AnimatePresence>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

