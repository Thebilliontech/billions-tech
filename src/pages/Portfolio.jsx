import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern, scalable e-commerce solution with advanced analytics and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI & Data",
    description:
      "Real-time business intelligence platform with machine learning insights and predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Python", "TensorFlow", "React"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Secure, user-friendly mobile banking application with biometric authentication and real-time transactions.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Stripe"],
  },
  {
    title: "Enterprise CRM System",
    category: "Enterprise Solutions",
    description:
      "Comprehensive customer relationship management system with automation and advanced reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Laravel", "PostgreSQL"],
  },
  {
    title: "IoT Smart Home Platform",
    category: "IoT & Automation",
    description:
      "Integrated smart home ecosystem with voice control, automation, and energy management features.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["IoT", "React", "AWS"],
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-28 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge technology projects
            that drive business success.
          </p>
        </Motion.div>

        {/* Portfolio Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item, index) => (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:glow-gold-hover transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-gold/20 text-gold rounded-full backdrop-blur-sm border border-gold/30">
                    {item.category}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-dark-secondary text-gold rounded border border-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Let's bring your vision to life with cutting-edge technology and
              innovative solutions.
            </p>
            <a
              href="https://wa.me/2348088199560"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl glow-gold-hover transition font-semibold"
            >
              Get Started
            </a>
          </div>
        </Motion.div>
      </div>
    </main>
  );
}
