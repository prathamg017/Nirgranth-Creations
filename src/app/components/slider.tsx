"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Top Jain Products",
    images: ["/bg5.JPG", "/bg13.jpeg", "/bg6.JPG", "/bg12.JPG"],
  },
  {
    title: "Top Custom Products",
    images: ["/bg1.JPG", "/bg3.JPG", "/bg2.JPG", "/bg4.JPG"],
  },
  {
    title: "Top Resin Art",
    images: ["/bg5.JPG", "/bg13.jpeg", "/bg6.JPG", "/bg12.JPG"],
  },
  {
    title: "Featured Highlights",
    images: ["/bg1.JPG", "/bg3.JPG", "/bg2.JPG", "/bg4.JPG"],
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 px-6 bg-white text-center">
      <div className="relative bg-pink-50 py-16 px-6 rounded-2xl shadow-md overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} // important for AnimatePresence
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Heading */}
            <h3 className="text-2xl md:text-4xl font-bold text-pink-600 mb-8">
              {slides[currentIndex].title}
            </h3>

            {/* Grid of 4 images */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {slides[currentIndex].images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-100 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <Image
                    src={img}
                    alt={`Slide ${currentIndex + 1} - Image ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
