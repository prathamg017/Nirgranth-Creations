"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type Work = {
  name: string;
  tagline: string;
  anim: string;
};

const works: Work[] = [
  { name: "Next-Gen E-Commerce", tagline: "Boost sales with immersive stores.", anim: "ecom.json" },
  { name: "AI-Powered Finance", tagline: "Smart money apps for the future.", anim: "finance.json" },
  { name: "Travel Experiences", tagline: "Seamless booking for explorers.", anim: "travel.json" },
  { name: "Healthcare Platforms", tagline: "Digital health that cares.", anim: "health.json" },
  { name: "Food & Delivery", tagline: "Meals at your doorstep in minutes.", anim: "Food.json" },
  { name: "SaaS & Startups", tagline: "Scalable platforms for visionaries.", anim: "saas.json" },
];

function LottieLoader({ file }: { file: string }) {
  const [animData, setAnimData] = useState<any>(null);

  useEffect(() => {
    fetch(`/${file}`)
      .then((res) => res.json())
      .then((data) => setAnimData(data))
      .catch((err) => console.error("❌ Failed to load animation:", err));
  }, [file]);

  if (!animData)
    return <div className="w-40 h-40 bg-gray-100 animate-pulse rounded-xl" />;

  return <Lottie animationData={animData} loop autoplay />;
}

export default function VisionaryShowcase() {
  return (
    <section className="py-28 px-6 relative bg-gradient-to-b from-white via-pink-50 to-white">
      {/* Heading */}
      <div className="relative max-w-5xl mx-auto text-center mb-24 px-4">
  {/* Floating accent blobs */}
  <div className="absolute -top-20 -left-24 w-64 h-64 bg-[#e7546b]/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute -bottom-16 -right-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-300" />

  {/* Tagline pill */}
  <span className="relative inline-block px-5 py-2 rounded-full text-sm font-medium bg-[#e7546b]/10 text-[#e7546b] mb-6 tracking-wide">
    🚀 Future-Driven Innovation
  </span>

  {/* Main heading */}
<h2 className="relative text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight 
  text-gray-900">
  Imagine What’s{" "}
  <span className="text-[#e7546b] drop-shadow-sm">Possible ✨</span>
</h2>


  {/* Subheading */}
  <p className="relative text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
    We don’t just build <span className="font-semibold text-gray-900">products</span>.  
    We craft <span className="text-[#e7546b] font-semibold">immersive experiences</span>  
    that define the future of digital brands.
  </p>
</div>


      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {works.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl p-8 text-center bg-gradient-to-br from-white via-pink-50 to-pink-100 shadow-lg hover:shadow-2xl transition relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e7546b]/20 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Lottie */}
            <div className="w-44 h-44 mx-auto relative z-10">
              <LottieLoader file={work.anim} />
            </div>

            {/* Text */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 relative z-10">
              {work.name}
            </h3>
            <p className="text-gray-600 text-base mt-3 relative z-10">
              {work.tagline}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-28">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-[#e7546b] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-pink-400/40 transition"
        >
          Let’s Build Something Beautiful 🚀
        </motion.a>
      </div>
    </section>
  );
}
