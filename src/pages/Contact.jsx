import { motion as Motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
const [formData, setFormData] = useState({ name: "", email: "", message: "" });

const handleSubmit = (e) => {
e.preventDefault();
// Redirect to WhatsApp with pre-filled message
const message = `Hello! My name is ${formData.name}. ${formData.message}`;
const whatsappUrl = `https://wa.me/2348088199560?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, '_blank');
};

return (
<main className="pt-28 pb-20 min-h-screen max-w-4xl mx-auto px-4">
<Motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-center mb-12"
>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
<span className="gradient-text">Contact</span> Us
</h1>
<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
Get in touch with us to discuss your project and how we can help.
</p>
</Motion.div>

<Motion.form
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
onSubmit={handleSubmit}
className="glass-effect rounded-2xl p-6 md:p-8 grid gap-6"
>
<div>
<label className="block text-white font-semibold mb-2">Name</label>
<input
className="w-full bg-dark-secondary border border-gold/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:glow-gold transition"
placeholder="Your Name"
value={formData.name}
onChange={(e) => setFormData({ ...formData, name: e.target.value })}
required
/>
</div>
<div>
<label className="block text-white font-semibold mb-2">Email</label>
<input
type="email"
className="w-full bg-dark-secondary border border-gold/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:glow-gold transition"
placeholder="your.email@example.com"
value={formData.email}
onChange={(e) => setFormData({ ...formData, email: e.target.value })}
required
/>
</div>
<div>
<label className="block text-white font-semibold mb-2">Message</label>
<textarea
className="w-full bg-dark-secondary border border-gold/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:glow-gold transition resize-none"
rows="6"
placeholder="Tell us about your project..."
value={formData.message}
onChange={(e) => setFormData({ ...formData, message: e.target.value })}
required
/>
</div>
<button
type="submit"
className="bg-gold text-white py-4 rounded-xl font-semibold hover:shadow-2xl glow-gold-hover transition text-lg"
>
Send Message via WhatsApp
</button>
</Motion.form>

<div className="mt-12 text-center">
<p className="text-gray-400 mb-4">Or reach us directly:</p>
<a
href="https://wa.me/2348088199560"
target="_blank"
rel="noopener noreferrer"
className="inline-block bg-gold text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl glow-gold-hover transition font-semibold"
>
Chat on WhatsApp
</a>
</div>
</main>
);
}