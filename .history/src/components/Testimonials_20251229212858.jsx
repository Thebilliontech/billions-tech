import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Benjamin",
    role: "CEO, Beeves Social",
    text: "When we approached Billions Tech, we were a bit worried because our brand was new, Beeves Social, is all about giving client what they want and 'vibes.' We needed a website that looked as good as our social media feeds. Honestly, I was expecting a long, stressful back-and-forth. Instead, the team at Billions just got it.",
  },
  {
    name: "Wealth",
    role: "Manager, Bling Tech",
    text: "At Bling Tech, we were generating so much sales data every day, but it was just sitting in spreadsheets—completely useless to us. We called Billions Tech to help us make sense of the mess. They didn't just give us a bunch of fancy charts; they sat down and helped us understand the story behind the numbers.",
  },
  {
    name: "Michael",
    role: "Director, OX Ride",
    text: "I had this idea for a mobile app for months, but I kept hearing horror stories about developers who take your money and disappear or deliver something that crashes every two minutes. Working with Billions Tech was the opposite of that. They talked to me like a human, explained the technical bits in plain English, and kept me updated every Friday. If you want it done right the first time, this is the team.",
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
        <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
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
            className="glass-effect rounded-2xl p-6 hover:glow-gold-hover transition-all duration-300"
          >
            <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
            <div className="border-t border-gold/20 pt-4">
              <div className="font-semibold text-white">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

