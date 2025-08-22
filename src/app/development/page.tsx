// app/development/DevelopmentClient.tsx (Client Component)
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DevelopmentClient() {
  return (
    <main className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Futuristic Apps & Websites
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
        >
          Building fast, secure, and aesthetic digital experiences powered by
          modern technologies. From sleek websites to scalable mobile apps —
          we’ve got your back.
        </motion.p>

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-cyan-400/30 rounded-full blur-[120px] animate-pulse"></div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "🌐 Websites",
              desc: "Responsive, SEO-ready, and blazing-fast websites tailored for your brand.",
              img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "📱 Mobile Apps",
              desc: "iOS & Android apps with sleek UI and smooth user experiences.",
              img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "⚡ Tech Integrations",
              desc: "E-commerce, payment gateways, cloud, AI — we connect everything seamlessly.",
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={250}
                className="rounded-xl object-cover mb-6"
              />
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Let’s Build Your Next Big Thing 🚀
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Whether it’s a startup idea, an e-commerce store, or a business app —
          we’ll design, develop, and launch it with future-ready tech.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/30 transition"
        >
          Get a Free Quote
        </motion.a>
      </section>
    </main>
  );
}
