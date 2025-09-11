"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Voice Over",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Service: ${formData.service}\nDetails: ${formData.message}`,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", service: "Voice Over", message: "" });
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 bg-white/10 rounded-lg text-center text-white">
        ✅ Thank you! We received your request and will get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-lg">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-pink-500"
          placeholder="Your Name"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-pink-500"
          placeholder="Email / Phone"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-white text-gray-800 md:col-span-2 focus:ring-2 focus:ring-pink-500"
        >
          <option>Voice Over</option>
          <option>Podcast</option>
          <option>Song Recording</option>
          <option>Mixing/Mastering</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-white text-gray-800 md:col-span-2 focus:ring-2 focus:ring-pink-500"
          placeholder="Tell us about your project..."
          rows={4}
          required
        />
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full px-6 py-3 rounded-lg bg-white text-pink-700 font-semibold hover:bg-pink-50 transition"
      >
        {loading ? "Sending..." : "Request Quote"}
      </button>
    </form>
  );
}
