"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const service = searchParams.get("service");
    const plan = searchParams.get("plan");
    
    if (service || plan) {
      const displayService = service ? service.replace(/-/g, " ") : "your services";
      const displayPlan = plan ? `${plan} Plan` : "";
      
      const newSubject = plan 
        ? `Inquiry for ${displayPlan} (${displayService})` 
        : `Inquiry for ${displayService}`;
        
      setSubject(newSubject);
      setFormData(prev => ({
        ...prev,
        message: `Hi Nirgranth Team,\n\nI am interested in the ${displayPlan || 'services'} discussed on your website for ${displayService}. I would like to know more about the next steps.\n\nLooking forward to hearing from you!`
      }));
    }
  }, [searchParams]);

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
        body: JSON.stringify({ ...formData, subject }),
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
    <div className="relative bg-white/80 backdrop-blur-xl border border-[#e7546b]/20 rounded-3xl shadow-2xl p-10">
      <h2 className="text-3xl font-bold text-center text-[#e7546b] mb-6">
        {subject ? "Package Inquiry" : "Write Us a Letter"}
      </h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {subject && (
            <div className="p-4 rounded-lg bg-[#e7546b]/5 border border-[#e7546b]/20 text-[#e7546b] font-bold text-sm">
              <span className="opacity-60 uppercase text-[10px] tracking-widest block mb-1">Selected Focus</span>
              {subject}
            </div>
          )}
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

          {error && <p className="text-red-500 text-center">{error}</p>}

          <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.9 }}
            className="relative mx-auto mt-4 h-16 w-16 rounded-full bg-[#e7546b] shadow-lg flex items-center justify-center text-white text-xl font-bold border-4 border-white hover:scale-105 transition"
          >
            {loading ? (
              <motion.div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
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
            <h3 className="text-2xl font-bold text-[#e7546b]">Message Sent!</h3>
            <p className="text-gray-800 mt-2">We will get back to you soon.</p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff5f5] to-[#ffe9ed] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-2xl px-6"
      >
        <Suspense fallback={<div className="h-96 w-full animate-pulse bg-white/50 rounded-3xl" />}>
          <ContactForm />
        </Suspense>
      </motion.div>
    </main>
  );
}
