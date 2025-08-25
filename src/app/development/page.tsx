// app/development/DevelopmentClient.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DevelopmentClient() {
  return (
    <main className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
  {/* Background image (crisp, no blur/dim) */}
  <Image
    src="https://i.pinimg.com/736x/16/a9/17/16a91717984d7812f7b11194c0179f7d.jpg"
    alt="Tech background"
    fill
    priority
    quality={100}
    sizes="100vw"
    className="object-cover pointer-events-none select-none"
  />

  {/* If text ever needs more contrast, uncomment this very light bottom gradient */}
  {/*
  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
  */}

  {/* Foreground content */}
  <div className="relative z-10 px-6">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
    >
      Futuristic Apps & Websites
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
    >
      Building fast, secure, and aesthetic digital experiences powered by modern
      technologies. From sleek websites to scalable mobile apps — we’ve got your back.
    </motion.p>

    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/30 transition"
    >
      Get Started 🚀
    </motion.a>
  </div>
</section>


      {/* 2. SERVICES */}
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

            {/* 3. VISIONARY SHOWCASE */}
      <section className="py-20 px-6 bg-black/40">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Imagine What’s Possible ✨
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          We craft futuristic digital experiences for startups and enterprises. 
          Here’s a glimpse of the possibilities we can create for your brand.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { 
              name: "Next-Gen E-Commerce", 
              tagline: "Boost sales with lightning-fast, immersive online stores.", 
              img: "https://i.pinimg.com/736x/ca/3a/d7/ca3ad7219481e859ee22bb4dd9e5a2ff.jpg" 
            },
            { 
              name: "AI-Powered Finance", 
              tagline: "Smart apps that simplify money management & investments.", 
              img: "https://i.pinimg.com/1200x/e8/df/67/e8df6737aca30c91fc0901a8e2381ef4.jpg" 
            },
            { 
              name: "Travel Experiences", 
              tagline: "Seamless booking platforms for modern explorers.", 
              img: "https://i.pinimg.com/1200x/c6/6e/f8/c66ef805b5ffe16cad93ad516f5b2437.jpg" 
            },
            { 
              name: "Healthcare Platforms", 
              tagline: "Digital health solutions that put patients first.", 
              img: "https://i.pinimg.com/1200x/f1/0c/36/f10c36aa6781965393c2415d91e30bed.jpg" 
            },
            { 
              name: "Food & Delivery", 
              tagline: "Apps that bring your favorite meals in minutes.", 
              img: "https://i.pinimg.com/736x/de/00/44/de0044f39c7e1c817cffa826ebe5eb39.jpg" 
            },
            { 
              name: "SaaS & Startups", 
              tagline: "Scalable platforms to turn ideas into global products.", 
              img: "https://i.pinimg.com/1200x/99/96/7b/99967bd0af6c6f5c53c2b1aa278ee6b2.jpg" 
            },
          ].map((work, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image 
                src={work.img} 
                alt={work.name} 
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-end p-6">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">{work.name}</h3>
                <p className="text-gray-200 text-sm text-center">{work.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini CTA inside showcase */}
        <div className="text-center mt-16">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/30 transition"
          >
            Your Brand Could Be Next 🚀
          </motion.a>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Process</h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {["Discovery 🔍", "Design 🎨", "Development ⚙️", "Launch 🚀", "Support 🤝"].map((step, i)=>(
            <motion.div 
              key={i}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.5, delay:i*0.2 }}
              className="bg-white/5 p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-semibold text-pink-400">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. TRUSTED BY */}
      <section className="py-16 px-6 bg-black/30">
        <h2 className="text-center text-gray-400 mb-8">Trusted by startups & brands</h2>
        <div className="flex flex-wrap justify-center gap-10 opacity-80">
          {["google","netflix","meta","shopify"].map((logo,i)=>(
            <div key={i} className="w-32 h-12 bg-white/10 flex items-center justify-center rounded">
              {logo.toUpperCase()}
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {name: "Ananya Sharma", role: "Startup Founder", text: "They built my app faster than expected and the design blew me away."},
            {name: "Rohan Mehta", role: "E-commerce Owner", text: "Sales doubled after moving to their new website."},
            {name: "Sarah Khan", role: "Tech Consultant", text: "Seamless, futuristic, and professional. Highly recommend!"}
          ].map((t,i)=>(
            <motion.div 
              key={i} 
              whileHover={{scale:1.05}}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-lg"
            >
              <p className="text-gray-300 mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-pink-400">{t.name}</h4>
              <span className="text-gray-400 text-sm">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. BLOG / INSIGHTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Insights & Trends</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {title:"Top 5 Tech Trends in 2025", img:"https://i.pinimg.com/736x/90/f1/85/90f18507c913423081b12899624df151.jpg"},
            {title:"How AI is Changing Business", img:"https://i.pinimg.com/736x/ec/59/4d/ec594d5b9cd8e8cbc939a8744370d661.jpg"},
            {title:"Why Design Matters for Startups", img:"https://i.pinimg.com/1200x/41/e4/8f/41e48f226597daf5235a91aabd887093.jpg"},
          ].map((b,i)=>(
            <motion.div key={i} whileHover={{scale:1.05}} className="bg-white/5 rounded-xl overflow-hidden shadow-lg">
              <Image src={b.img} alt={b.title} width={600} height={400} className="object-cover"/>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <a href="#" className="text-pink-400 hover:underline">Read More →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. FINAL BIG CTA */}
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
