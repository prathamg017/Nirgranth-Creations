"use client";

import { useState } from "react";

export default function GraphicRequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Brand Kit & Socials");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: `Service: ${service}\nDetails: ${message}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMsg("Request sent successfully!");
        setName("");
        setEmail("");
        setService("Brand Kit & Socials");
        setMessage("");
      } else {
        setResponseMsg(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResponseMsg("Network error, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 shadow"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your Name"
          className="px-4 py-3 rounded-lg bg-white text-gray-800"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email / Phone"
          className="px-4 py-3 rounded-lg bg-white text-gray-800"
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="px-4 py-3 rounded-lg bg-white text-gray-800 md:col-span-2"
        >
          <option>Brand Kit & Socials</option>
          <option>Video Editing (Shorts/Reels)</option>
          <option>Explainer / Product Video</option>
          <option>Motion Graphics / 3D</option>
          <option>Other</option>
        </select>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Project goals, references, links…"
          className="px-4 py-3 rounded-lg bg-white text-gray-800 md:col-span-2"
        />
      </div>

      <button
        disabled={loading}
        className="mt-4 w-full px-6 py-3 rounded-lg bg-white text-pink-700 font-semibold hover:bg-pink-50 transition"
      >
        {loading ? "Sending…" : "Get My Free Moodboard"}
      </button>

      {responseMsg && (
        <p className="mt-4 text-center text-white">{responseMsg}</p>
      )}
    </form>
  );
}
