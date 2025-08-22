"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RecordingVoiceoverPage() {
  return (
    <main className="text-gray-900">
      {/* ===== HERO (Split Banner with Glass Overlay) ===== */}
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 grid grid-cols-2">
          {/* Left */}
          <div className="relative clip-left">
            <Image
              src="https://i.pinimg.com/736x/60/3f/e6/603fe69b513d8f86d42dc3a669a8668d.jpg"
              alt="Recording studio"
              fill
              priority
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
          {/* Right */}
          <div className="relative clip-right">
            <Image
              src="https://i.pinimg.com/1200x/d4/4f/79/d44f79ede005e73cc4ffc098b153f24e.jpg"
              alt="Podcast setup"
              fill
              priority
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
          </div>
        </div>

        {/* Headline */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Recording Studio & Voice Over
            </h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl leading-relaxed">
              Broadcast-quality voice, music & podcasts — written, recorded, and polished to perfection.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#rates"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                View Rates
              </Link>
              <Link
                href="#book"
                className="px-6 py-3 rounded-full bg-white text-pink-700 font-semibold shadow-lg hover:bg-pink-50 hover:scale-105 transition-transform"
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold text-center text-gray-900"
          >
            Our Studio Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Voice Overs",
                desc: "Ads, explainers, eLearning, IVR, characters & dubbing in multiple tones and languages.",
                img: "https://i.pinimg.com/1200x/c6/60/52/c660525fbe345e7597117f625aa7b0b4.jpg",
              },
              {
                title: "Podcast Production",
                desc: "A–Z podcast services: concept, scripting, recording, editing & distribution.",
                img: "https://i.pinimg.com/1200x/c8/eb/25/c8eb25dc4d0e78533f0d358236b3d70e.jpg",
              },
              {
                title: "Music & Post",
                desc: "Song recording, vocal comping, sound design, mixing & mastering.",
                img: "https://i.pinimg.com/1200x/ca/8c/c1/ca8cc1d3cf4cf95d6460f3150f0cab8a.jpg",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-pink-700">{card.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GEAR ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Studio-Grade Equipment
            </h3>
            <ul className="mt-6 space-y-4 text-gray-700 text-lg">
              <li>🎙️ Neumann / Sennheiser / Shure microphones</li>
              <li>🎛️ Universal Audio & Focusrite preamps/interfaces</li>
              <li>🖥️ Pro Tools • Logic Pro • RX • FabFilter</li>
              <li>🔇 Treated booth for pristine sound isolation</li>
              <li>🔁 Remote direction via Zoom/Meet/Source-Connect</li>
              <li>📦 Delivery in WAV/AIFF/MP3, stems & broadcast specs</li>
            </ul>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://i.pinimg.com/1200x/35/c0/5a/35c05aa54c4cd462501bbba4e11ef64a.jpg"
              alt="Studio Booth"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== RATES ===== */}
      <section id="rates" className="py-24 px-6 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
            Transparent Rates
          </h3>
          <p className="text-center text-gray-600 mt-3">
            Custom quotes available. Most projects delivered within 24–48 hours.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                plan: "Voice Over – Ads",
                price: "₹4,999",
                items: ["Up to 60 sec", "1 voice, 2 takes", "Basic cleanup"],
              },
              {
                plan: "Podcast – Editing",
                price: "₹3,499 / episode",
                items: ["Up to 45 min", "Noise cleanup & leveling", "Intro/Outro & music"],
              },
              {
                plan: "Studio Hour",
                price: "₹2,499 / hr",
                items: ["Booth + Engineer", "Vocal comping", "Rough mix"],
              },
            ].map((card, i) => (
              <motion.div
                key={card.plan}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-pink-100 bg-white p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-bold text-pink-700">{card.plan}</h4>
                <div className="mt-3 text-3xl font-extrabold text-gray-900">{card.price}</div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {card.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOKING CTA ===== */}
      <section
        id="book"
        className="py-24 px-6 bg-gradient-to-r from-pink-600 to-red-500 text-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-snug">
              Ready to record something unforgettable?
            </h3>
            <p className="mt-4 text-white/90 text-lg">
              Tell us your project details and we’ll suggest the best approach, voice, timeline, and budget.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-pink-500"
                placeholder="Your Name"
                required
              />
              <input
                className="px-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-pink-500"
                placeholder="Email / Phone"
                required
              />
              <select className="px-4 py-3 rounded-lg bg-white text-gray-800 md:col-span-2 focus:ring-2 focus:ring-pink-500">
                <option>Voice Over</option>
                <option>Podcast</option>
                <option>Song Recording</option>
                <option>Mixing/Mastering</option>
              </select>
              <textarea
                className="px-4 py-3 rounded-lg bg-white text-gray-800 md:col-span-2 focus:ring-2 focus:ring-pink-500"
                placeholder="Tell us about your project..."
                rows={4}
              />
            </div>
            <button className="mt-6 w-full px-6 py-3 rounded-lg bg-white text-pink-700 font-semibold hover:bg-pink-50 transition">
              Request Quote
            </button>
          </form>
        </div>
      </section>

      {/* Spacer for footer */}
      <div className="h-8" />
    </main>
  );
}
