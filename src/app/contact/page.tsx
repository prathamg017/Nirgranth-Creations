// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-red-800 to-red-600 overflow-hidden font-sans text-white">

      {/* Floating Background Shapes */}
      <motion.div 
        className="absolute w-96 h-96 bg-red-700/30 rounded-full top-[-10%] left-[-10%] blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-72 h-72 bg-red-600/40 rounded-full bottom-[-10%] right-[-10%] blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* HERO / HEADLINE */}
      <section className="relative flex flex-col items-center justify-center text-center h-[60vh] px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl"
        >
          Let's Build the Impossible
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl"
        >
          Have a project, idea, or collaboration? Our team turns visions into mindblowing reality.
        </motion.p>
      </section>

      {/* GLASSMORPHISM CONTACT FORM */}
      <section className="relative z-10 px-6 -mt-20 max-w-4xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Get in Touch
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/70 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/70 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className="w-full p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/70 focus:ring-2 focus:ring-red-400 focus:outline-none transition"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-red-700 to-red-500 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* INFO BLOCKS: floating cards */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
        {[
          {
            title: "Lightning Fast Response",
            desc: "We reply to every inquiry within hours, ensuring your project moves fast.",
          },
          {
            title: "Collaborations Without Limits",
            desc: "Global, creative, and bold. We love working on audacious ideas.",
          },
          {
            title: "Luxury Meets Precision",
            desc: "Every detail is meticulously crafted, every project is a masterpiece.",
          },
        ].map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center shadow-2xl hover:shadow-4xl transition cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-2">{block.title}</h3>
            <p className="text-white/80">{block.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* SOCIAL FOOTER */}
      <section className="py-12 text-center relative z-10">
        <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
        <div className="flex justify-center gap-6 text-white/90">
          <a href="#" className="hover:text-red-300 transition">Instagram</a>
          <a href="#" className="hover:text-red-300 transition">LinkedIn</a>
          <a href="#" className="hover:text-red-300 transition">Twitter</a>
          <a href="#" className="hover:text-red-300 transition">Dribbble</a>
        </div>
      </section>
    </main>
  );
}
