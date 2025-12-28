import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechStart Inc.",
    text: "Billions Tech transformed our digital presence. Their attention to detail and professional approach exceeded our expectations. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    role: "Founder, Design Studio",
    text: "Working with Billions Tech was seamless. They delivered a beautiful, functional website on time and within budget. The team is responsive and professional.",
  },
  {
    name: "Michael Chen",
    role: "Director, Innovation Labs",
    text: "The custom solution Billions Tech built for us has significantly improved our operations. Their technical expertise and customer service are outstanding.",
  },
];

export default function Testimonials() {
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
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      </Motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <Motion.div
            key={index}
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
            className="border rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
            <div className="border-t pt-4">
              <div className="font-semibold text-gray-800">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

