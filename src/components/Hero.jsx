import { motion as Motion } from "framer-motion";
import heroBackground from "../assets/hero-background.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 px-4">
      {/* Hero background image */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden mx-4">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-pulse-slow"></div>
      </div>

      <Motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl w-full"
      >
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Building <span className="gradient-text neon-glow">Smart Tech</span>
          <br className="hidden md:block" />{" "}
          <span className="text-white">For Modern Businesses</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Billions Tech builds scalable digital products, AI-powered systems, and
          data-driven solutions.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/2348088199560"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl glow-gold-hover transition font-semibold text-base md:text-lg w-full sm:w-auto"
          >
            Work With Us
          </a>
          <a
            href="/services"
            className="border-2 border-gold/50 text-white px-8 py-4 rounded-xl hover:bg-gold/10 hover:border-gold transition font-semibold text-base md:text-lg w-full sm:w-auto backdrop-blur-sm"
          >
            Our Services
          </a>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
