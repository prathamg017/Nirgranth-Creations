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
    <main className="min-h-screen relative bg-gradient-to-br from-[#ffe9ed] via-white to-[#ffe9ed] overflow-hidden font-sans text-gray-800">

      {/* Floating Background Shapes in Brand Tone */}
      <motion.div 
        className="absolute w-96 h-96 bg-[#e7546b]/10 rounded-full top-[-15%] left-[-15%] blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-80 h-80 bg-[#e7546b]/10 rounded-full bottom-[-15%] right-[-15%] blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center h-[50vh] px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#e7546b]"
        >
          Let’s Connect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Have a project, idea, or collaboration? We’d love to hear from you.
        </motion.p>
      </section>

      {/* CONTACT FORM */}
      <section className="relative z-10 px-6 -mt-12 max-w-3xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/60 border border-[#e7546b]/20 rounded-2xl shadow-xl p-8 flex flex-col gap-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#e7546b]">
            Send Us a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg border border-gray-300 bg-white placeholder-gray-400 focus:ring-2 focus:ring-[#e7546b] focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg border border-gray-300 bg-white placeholder-gray-400 focus:ring-2 focus:ring-[#e7546b] focus:outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className="w-full p-4 rounded-lg border border-gray-300 bg-white placeholder-gray-400 focus:ring-2 focus:ring-[#e7546b] focus:outline-none transition"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#e7546b] text-white py-4 rounded-lg font-semibold shadow-md hover:bg-[#d0435a] transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* INFO BLOCKS */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            title: "Quick Response",
            desc: "We reply to inquiries within hours to keep your project moving.",
          },
          {
            title: "Collaborative Approach",
            desc: "Work directly with our creative team, from idea to delivery.",
          },
          {
            title: "Trusted Expertise",
            desc: "Clients rely on us for precision, quality, and long-term success.",
          },
        ].map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="bg-[#ffe9ed]/60 backdrop-blur-md border border-[#e7546b]/20 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#e7546b]">{block.title}</h3>
            <p className="text-gray-600">{block.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <section className="py-10 text-center relative z-10 border-t border-[#e7546b]/20">
        <h4 className="text-lg font-medium mb-4 text-gray-700">Connect With Us</h4>
        <div className="flex justify-center gap-6 text-gray-600">
          <a href="#" className="hover:text-[#e7546b] transition">Instagram</a>
          <a href="#" className="hover:text-[#e7546b] transition">LinkedIn</a>
          <a href="#" className="hover:text-[#e7546b] transition">Twitter</a>
          <a href="#" className="hover:text-[#e7546b] transition">Dribbble</a>
        </div>
      </section>
    </main>
  );
}
