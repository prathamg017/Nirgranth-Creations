"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff5f5] to-[#ffe9ed] relative overflow-hidden">
      {/* Floating Stamps / Doodles */}
      <motion.div
        className="absolute top-10 left-10 text-6xl opacity-20"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        📮
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 text-7xl opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        ✨
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-2xl"
      >
        {/* Envelope Wrapper */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-[#e7546b]/20 rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-center text-[#e7546b] mb-6">
            📬 Write Us a Letter
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg border border-gray-300 bg-white text-black placeholder-black focus:ring-2 focus:ring-[#e7546b] focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg border border-gray-300 bg-white text-black placeholder-black focus:ring-2 focus:ring-[#e7546b] focus:outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-4 rounded-lg border border-gray-300 bg-white text-black placeholder-black focus:ring-2 focus:ring-[#e7546b] focus:outline-none transition"
              />

              {/* Error Message */}
              {error && <p className="text-red-500 text-center">{error}</p>}

              {/* Wax Seal / Send Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.9 }}
                className="relative mx-auto mt-4 h-16 w-16 rounded-full bg-[#e7546b] shadow-lg flex items-center justify-center text-white text-xl font-bold border-4 border-white hover:scale-105 transition"
              >
                {loading ? (
                  <motion.div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "✉️"
                )}
              </motion.button>
            </form>
          ) : (
            <AnimatePresence>
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="text-6xl mb-4"
                >
                  ✅
                </motion.div>
                <h3 className="text-2xl font-bold text-[#e7546b]">Message Sent!</h3>
                <p className="text-gray-800 mt-2">We’ll get back to you soon 💌</p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </main>
  );
}
