"use client";

import { motion } from "framer-motion";
import { Box, Headphones, Mic, Monitor, RefreshCw, VolumeX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function RecordingVoiceoverPage() {
  return (
    <main className="text-gray-800">
      {/* ===== HERO (Split Banner with Glass Overlay) ===== */}
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
  {/* Left - Hero Image on Mobile */}
  <div className="relative">
    <Image
      src="/setup.jpg"
      alt="Recording studio"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Hidden on Mobile for clean look */}
  <div className="relative hidden md:block">
    <Image
      src="/voice.jpg"
      alt="Podcast setup"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Hidden on Mobile for clean look */}
  <div className="relative hidden md:block">
    <Image
      src="/music.jpg"
      alt="Studio setup"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>
</div>


        {/* Headline */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl backdrop-blur-md bg-white/10 p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl mx-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Recording Studio & Voice Over
            </h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl leading-relaxed">
              Broadcast-quality voice, music & podcasts — written, recorded, and polished to perfection.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?service=Recording-and-Voiceover"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Inquire Rates
              </Link>
              <Link
                href="/contact?service=Recording-and-Voiceover"
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
            className="text-3xl md:text-5xl font-extrabold text-center text-gray-800"
          >
            Our Studio Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Voice Overs",
                desc: "Ads, explainers, eLearning, IVR, characters & dubbing in multiple tones and languages.",
                img: "/sing.jpg",
              },
              {
                title: "Podcast Production",
                desc: "A–Z podcast services: concept, scripting, recording, editing & distribution.",
                img: "https://i.pinimg.com/1200x/c8/eb/25/c8eb25dc4d0e78533f0d358236b3d70e.jpg",
              },
              {
                title: "Music & Post",
                desc: "Song recording, vocal comping, sound design, mixing & mastering.",
                img: "/music.jpg",
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
                  <h3 className="text-2xl font-black text-pink-800">{card.title}</h3>
                  <p className="mt-3 text-gray-800 leading-relaxed font-bold">{card.desc}</p>
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
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Studio-Grade Equipment
            </h3>
            <ul className="mt-6 space-y-4 text-gray-800 text-lg font-bold">
              <li className="flex items-center gap-3"><Mic className="text-pink-600 w-5 h-5" /> Neumann / Sennheiser / Shure microphones</li>
              <li className="flex items-center gap-3"><Headphones className="text-pink-600 w-5 h-5" /> Universal Audio & Focusrite preamps/interfaces</li>
              <li className="flex items-center gap-3"><Monitor className="text-pink-600 w-5 h-5" /> Pro Tools • Logic Pro • RX • FabFilter</li>
              <li className="flex items-center gap-3"><VolumeX className="text-pink-600 w-5 h-5" /> Treated booth for pristine sound isolation</li>
              <li className="flex items-center gap-3"><RefreshCw className="text-pink-600 w-5 h-5" /> Remote direction via Zoom/Meet/Source-Connect</li>
              <li className="flex items-center gap-3"><Box className="text-pink-600 w-5 h-5" /> Delivery in WAV/AIFF/MP3, stems & broadcast specs</li>
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
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
            Transparent Rates
          </h3>
          <p className="text-center text-gray-600 mt-3">
            Custom quotes available. Most projects delivered within 24–48 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              {
                plan: "Voice Over Recording",
                price: "₹1,500",
                items: [
                  "Done by our expert 'Voice of Nations'",
                  "Starting from ₹1500 with scripting",
                  "Professional tone & delivery",
                  "High-quality audio cleanup"
                ],
              },
              {
                plan: "Studio Hour",
                price: "₹1,500 / hr",
                items: [
                  "Professional Booth + Engineer",
                  "Excluding editing & post-prod",
                  "Studio-grade microphones & gear",
                  "Instant raw playback & transfer"
                ],
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
                <div className="mt-3 text-3xl font-extrabold text-gray-800">{card.price}</div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {card.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=Recording-and-Voiceover&plan=${card.plan}`}
                  className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOKING CTA ===== */}
      <section
        id="book"
        className="py-16 md:py-24 px-6 bg-pri text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold leading-snug mb-8">
              Ready to record something unforgettable?
            </h3>
            <p className="mt-4 text-white/90 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Tell us your project details and we&apos;ll suggest the best approach, voice, timeline, and budget.
            </p>
            <Link href="/contact?service=Recording-and-Voiceover">
              <button className="px-8 py-4 md:px-10 md:py-5 rounded-full bg-white text-pink-600 font-black text-base md:text-lg hover:scale-105 transition-transform shadow-2xl">
                START RECORDING NOW
              </button>
            </Link>
        </div>
      </section>

      {/* Spacer for footer */}
      <div className="h-8" />
    </main>
  );
}
