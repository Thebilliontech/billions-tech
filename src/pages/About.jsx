import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const aboutSections = [
  {
    title: "Our Mission",
    description:
      "We believe you shouldn't need a PhD in Computer Science just to run a successful business. Our mission is to bridge the gap between 'high-tech' and 'highly-useful.' We show up every day to build digital systems that are so intuitive, you forget how hard they were to create.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    title: "Our Vision",
    description:
      "We aren't just looking at the next quarter; we're looking at the next decade. We envision a future where technology isn't a barrier or a headache, but a silent partner in human progress. We want the 'Billions' in our name to represent the number of lives made slightly easier because of something we built.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
  {
    title: "What We Do",
    description:
      "We design, develop, and optimize digital products—ranging from websites and applications to data-driven business solutions. Every project is crafted with precision, innovation, and a focus on delivering exceptional value.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-28 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About</span>{" "}
            <span className="text-white">Billions Tech</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed">
            Most people think technology is about code and hardware. At Billions
            Tech, we believe it's actually about time and ease. We started with
            a simple observation: businesses were spending more time fighting
            with their tools than using them to grow. We decided to change that.
            We don't just build software; we build "breathing room" for your
            team so you can focus on the big ideas while we handle the digital
            heavy lifting.
          </p>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed">
            The name "Billions" isn't just about numbers—it's about impact. Our
            goal is to create work that improves the daily lives of the people
            who use it. Whether we are helping a small startup find its footing
            or helping a large enterprise streamline its workflow, we treat
            every project like it's our own.
          </p>
        </Motion.section>

        {/* Content Section with Images */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {aboutSections.map((section, index) => (
            <Motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:glow-gold-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white z-10">
                  {section.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {section.description}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <Motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "100+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <Motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 rounded-xl glass-effect"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400">
                {stat.label}
              </div>
            </Motion.div>
          ))}
        </Motion.section>
      </div>
    </main>
  );
}
