import { motion as Motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import beeves1 from "../assets/beeves1.png";
import beeves2 from "../assets/beeves2.png";
import beeves3 from "../assets/beeves3.png";

const portfolioItems = [
  {
    title: "Esim Platform",
    category: "Web Development",
    description:
      "Global access in a click. Get reliable foreign numbers for SMS verification and international business, delivered instantly.",
    image: beeves3,
    tags: ["React", "Node.js", "MongoDB"],
    modalImages: [
      beeves3,
      beeves2,
      beeves1
    ],
    modalContent: `
      <p>This comprehensive e-commerce platform was built to handle high-volume transactions while providing an exceptional user experience. The platform features a modern, responsive design that works seamlessly across all devices.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Advanced product catalog with filtering and search capabilities</li>
        <li>Secure payment processing with multiple gateway integrations</li>
        <li>Real-time inventory management system</li>
        <li>Comprehensive analytics dashboard for business insights</li>
        <li>Customer review and rating system</li>
        <li>Automated email notifications and order tracking</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The platform was built using React for the frontend, providing a fast and interactive user experience. The backend utilizes Node.js with Express, ensuring scalable and efficient server-side operations. MongoDB was chosen for its flexibility in handling product data and user information.</p>
      
      <p>We implemented advanced features such as real-time inventory updates, dynamic pricing, and personalized product recommendations using machine learning algorithms. The system also includes comprehensive admin tools for managing products, orders, and customer data.</p>
      
      <h3>Results</h3>
      <p>The platform successfully launched with over 10,000 products and has processed thousands of transactions. The client reported a 40% increase in online sales within the first three months of launch.</p>
    `,
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI & Data",
    description:
      "Real-time business intelligence platform with machine learning insights and predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Python", "TensorFlow", "React"],
    modalImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
    ],
    modalContent: `
      <p>An advanced analytics platform that leverages artificial intelligence to provide actionable business insights. The dashboard processes millions of data points in real-time to deliver predictive analytics and trend analysis.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Real-time data processing and visualization</li>
        <li>Machine learning models for predictive analytics</li>
        <li>Customizable dashboards and reports</li>
        <li>Automated anomaly detection</li>
        <li>Natural language query interface</li>
        <li>Export capabilities for various formats</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>Built with Python and TensorFlow for the AI/ML components, the platform uses advanced algorithms to identify patterns and predict future trends. The React-based frontend provides an intuitive interface for exploring data and insights.</p>
      
      <p>The system integrates with multiple data sources and can process both structured and unstructured data. We implemented a robust API architecture that allows for seamless integration with existing business systems.</p>
    `,
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Secure, user-friendly mobile banking application with biometric authentication and real-time transactions.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Stripe"],
    modalImages: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    ],
    modalContent: `
      <p>A comprehensive mobile banking solution that provides secure, convenient access to banking services. The app features state-of-the-art security measures including biometric authentication and end-to-end encryption.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Biometric authentication (fingerprint and face recognition)</li>
        <li>Real-time account balance and transaction history</li>
        <li>Bill payment and money transfer capabilities</li>
        <li>Investment portfolio management</li>
        <li>Cardless ATM withdrawals</li>
        <li>24/7 customer support chat</li>
      </ul>
      
      <h3>Security Features</h3>
      <p>The app implements multiple layers of security including two-factor authentication, transaction limits, and real-time fraud detection. All data is encrypted both in transit and at rest, ensuring maximum protection for user information.</p>
      
      <h3>User Experience</h3>
      <p>We focused on creating an intuitive user interface that makes banking simple and accessible. The app features a clean, modern design with easy navigation and quick access to frequently used features.</p>
    `,
  },
  {
    title: "Enterprise CRM System",
    category: "Enterprise Solutions",
    description:
      "Comprehensive customer relationship management system with automation and advanced reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Laravel", "PostgreSQL"],
    modalImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    ],
    modalContent: `
      <p>A powerful CRM system designed for enterprise-level organizations to manage customer relationships, sales pipelines, and marketing campaigns effectively.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Comprehensive contact and lead management</li>
        <li>Sales pipeline tracking and forecasting</li>
        <li>Automated marketing campaigns</li>
        <li>Advanced reporting and analytics</li>
        <li>Integration with email and calendar systems</li>
        <li>Customizable workflows and automation</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>Built with Vue.js for a reactive frontend experience and Laravel for a robust backend API. PostgreSQL provides reliable data storage with advanced querying capabilities.</p>
      
      <p>The system supports multi-tenancy, allowing different departments or teams to have isolated workspaces while sharing common resources. We implemented role-based access control to ensure data security and proper permissions management.</p>
    `,
  },
  {
    title: "IoT Smart Home Platform",
    category: "IoT & Automation",
    description:
      "Integrated smart home ecosystem with voice control, automation, and energy management features.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["IoT", "React", "AWS"],
    modalImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    ],
    modalContent: `
      <p>An innovative IoT platform that connects and controls various smart home devices through a unified interface. The platform enables users to create custom automation scenarios and monitor their home's energy consumption.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Voice control integration with major assistants</li>
        <li>Custom automation rules and schedules</li>
        <li>Real-time energy monitoring and optimization</li>
        <li>Remote access and control from anywhere</li>
        <li>Device compatibility with 100+ smart home products</li>
        <li>Security monitoring and alerts</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The platform uses AWS IoT Core for device management and messaging, ensuring reliable communication between devices and the cloud. The React-based web interface and mobile apps provide seamless control from any device.</p>
      
      <p>We implemented advanced machine learning algorithms to learn user patterns and suggest optimal automation scenarios. The system also includes predictive maintenance features that alert users to potential device issues before they occur.</p>
    `,
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Handle body overflow and ESC key
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedItem) {
        setSelectedItem(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

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
              onClick={() => openModal(item)}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Backdrop */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <Motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-effect rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gold/20 hover:bg-gold/30 text-gold flex items-center justify-center transition text-2xl font-bold backdrop-blur-sm"
                  aria-label="Close modal"
                >
                  ×
                </button>

                {/* Modal Header */}
                {selectedItem.modalImages && selectedItem.modalImages.length > 0 && (
                  <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
                    <img
                      src={selectedItem.modalImages[0]}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="mb-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-gold/20 text-gold rounded-full backdrop-blur-sm border border-gold/30">
                          {selectedItem.category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {selectedItem.title}
                      </h2>
                    </div>
                  </div>
                )}

                {/* Modal Body */}
                <div className="p-6 md:p-8">
                  {/* Additional Images */}
                  {selectedItem.modalImages && selectedItem.modalImages.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {selectedItem.modalImages.slice(1).map((img, idx) => (
                        <Motion.img
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          src={img}
                          alt={`${selectedItem.title} - Image ${idx + 2}`}
                          className="w-full h-48 md:h-64 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div
                    className="modal-content"
                    dangerouslySetInnerHTML={{ __html: selectedItem.modalContent }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gold/20">
                    <h3 className="text-white font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-dark-secondary text-gold rounded border border-gold/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
