"use client";

import { AnimatedCounter } from "@/app/components/counter";
import QuoteForm from "@/app/components/quotationform";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const services = [
  {
    title: "Corporate Events",
    desc: "Product launches, conferences, and team celebrations executed with precision.",
    svg: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Wedding Planning",
    desc: "Dream weddings brought to life with meticulous planning and elegant execution.",
    svg: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Cultural Celebrations",
    desc: "Traditional ceremonies and spiritual gatherings curated with cultural sensitivity.",
    svg: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Award Ceremonies",
    desc: "Red carpet events that honor excellence with style and sophistication.",
    svg: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
  },
];

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
  { value: 500, label: "Events Managed", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 50, label: "High-Profile Clients", suffix: "+" },
  { value: 20, label: "Years Experience", suffix: "+" },
];

const testimonials = [
  {
    name: "Rakesh Jain",
    role: "CEO, Tech Innovations",
    quote: "Every award ceremony felt like a dream come true! Incredible team.",
    img: "https://i.pinimg.com/736x/d5/25/72/d52572a07b6166ce41412dea2fe3768e.jpg",
  },
  {
    name: "Priya Shah",
    role: "Wedding Client",
    quote: "Absolutely professional. Our gala became a legendary event!",
    img: "https://i.pinimg.com/736x/ee/83/b3/ee83b3b8e83b9715c9d905cb9e53c4f0.jpg",
  },
  {
    name: "Anil Mehta",
    role: "Community Leader",
    quote: "Flawless planning, amazing visuals, and unforgettable memories.",
    img: "https://i.pinimg.com/736x/4a/6d/63/4a6d633a1aebba9d8ca818df32c13251.jpg",
  },
];

export default function EventManagementPage() {
  return (
    <main className="text-gray-900 font-sans overflow-hidden">
      {/* HERO SECTION - Premium & Modern */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/1200x/dd/da/0d/ddda0d8002b346e35ede092d7c0f3ea6.jpg"
            alt="Elegant event celebration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            <span className="text-white/90 text-sm font-medium">Premium Event Management</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6"
          >
            Create{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Legendary
            </span>
            <br />
            Moments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            From intimate gatherings to grand celebrations, we craft unforgettable experiences
            with meticulous attention to every detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-white shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#FF5851' }}
            >
              Plan Your Event
            </Link>
            <Link
              href="#portfolio"
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-bold text-white hover:bg-white/20 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* STATS SECTION - Modern Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter value={s.value} />
                    {s.suffix}
                  </div>
                  <div className="text-gray-600 font-semibold">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Event <span style={{ color: '#FF5851' }}>Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive event solutions tailored to your vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-pink-600">
                  {service.svg}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ background: 'linear-gradient(135deg, rgba(255,88,81,0.05) 0%, rgba(168,85,247,0.05) 100%)' }}>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS - Portfolio */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Featured <span style={{ color: '#FF5851' }}>Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse of the legendary moments we&apos;ve created
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.15)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={event.img} 
                    alt={event.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-white/90 text-sm">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Modern Design */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Client <span style={{ color: '#FF5851' }}>Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from those who experienced our legendary events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.15)}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={c.img}
                    width={60}
                    height={60}
                    alt={c.name}
                    className="rounded-full border-4 border-pink-100"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{c.name}</p>
                    <p className="text-sm text-gray-500">{c.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">&quot;{c.quote}&quot;</p>
                <div className="absolute top-6 right-6 text-6xl text-pink-100">&quot;</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section
        id="contact"
        className="py-24 px-6 text-white relative overflow-hidden"
        style={{ backgroundColor: '#FF5851' }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Let&apos;s Create Your Legendary Event
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Share your vision with us and we&apos;ll craft an unforgettable experience that exceeds all expectations.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Free event consultation & planning</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Custom event packages & solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Professional coordination & execution</span>
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
