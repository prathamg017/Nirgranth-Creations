// app/event-management/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featuredEvents = [
  {
    title: "Jain Icon Awards",
    desc: "Red carpet vibes, legendary leaders, unforgettable moments.",
    img: "https://i.pinimg.com/1200x/01/90/1b/01901b20240bec78bbbedb4149bf3ccf.jpg",
  },
  {
    title: "Vidyoday Seminar",
    desc: "Inspiring minds, workshops, and spiritual growth for the community.",
    img: "https://i.pinimg.com/736x/5c/19/9d/5c199d12464a02801fb6250267fce7c0.jpg",
  },
  {
    title: "Annual Gala Night",
    desc: "Luxury celebrations with music, laughter, and top-tier clients.",
    img: "https://i.pinimg.com/1200x/13/b7/1c/13b71c173cee50b3b8d6bea94fe2a421.jpg",
  },
];

const stats = [
  { value: 500, label: "Events Managed" },
  { value: 98, label: "Client Satisfaction (%)" },
  { value: 50, label: "High-Profile Clients" },
  { value: 20, label: "Years of Experience" },
];

const testimonials = [
  {
    name: "Rakesh Jain",
    quote: "Every award ceremony felt like a dream come true! Incredible team.",
    img: "https://i.pinimg.com/736x/d5/25/72/d52572a07b6166ce41412dea2fe3768e.jpg",
  },
  {
    name: "Priya Shah",
    quote: "Absolutely professional. Our gala became a legendary event!",
    img: "https://i.pinimg.com/736x/ee/83/b3/ee83b3b8e83b9715c9d905cb9e53c4f0.jpg",
  },
  {
    name: "Anil Mehta",
    quote: "Flawless planning, amazing visuals, and unforgettable memories.",
    img: "https://i.pinimg.com/736x/4a/6d/63/4a6d633a1aebba9d8ca818df32c13251.jpg",
  },
];

export default function EventManagementPage() {
  return (
    <main className="text-gray-900 font-sans">

      {/* HERO: Fullscreen carousel video/images with overlay */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://i.pinimg.com/1200x/dd/da/0d/ddda0d8002b346e35ede092d7c0f3ea6.jpg"
          alt="Happy event crowd"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-wider drop-shadow-2xl"
          >
            Legendary Events, Unforgettable Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl"
          >
            Red carpet celebrations, spiritual gatherings, and luxury galas – curated with perfection.
          </motion.p>
          <Link
            href="#contact"
            className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-yellow-500 text-white text-lg font-bold shadow-xl hover:scale-105 transition-transform"
          >
            Plan Your Event
          </Link>
        </div>
      </section>

      {/* SUCCESS STATS: animated gradient cards */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-br from-pink-600 to-red-500 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform text-center"
            >
              <p className="text-5xl font-extrabold">{s.value}</p>
              <p className="mt-2 text-xl font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED EVENTS: show real moments, happy people */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-12">
          Featured Legendary Events
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {featuredEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="relative h-72">
                <Image src={event.img} alt={event.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-700">{event.title}</h3>
                <p className="mt-2 text-gray-700">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS: overlay happy clients */}
      <section className="py-24 bg-pink-50 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-12">
          Happy Clients & Legendary Moments
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-4xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <Image
                src={c.img}
                width={80}
                height={80}
                alt={c.name}
                className="rounded-full mx-auto border-4 border-pink-600"
              />
              <p className="mt-4 italic text-gray-800">"{c.quote}"</p>
              <p className="mt-4 font-bold text-pink-700">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA: Gradient hover, strong FOMO */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-pink-600 to-red-500 text-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Let’s Create Your Legendary Event
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Be part of unforgettable experiences. Work with us to craft iconic moments.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-white text-pink-700 font-bold shadow-xl hover:scale-105 transition-transform"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
