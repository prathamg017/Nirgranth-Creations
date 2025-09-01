"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="font-sans text-gray-900">
      {/* ✅ Hero Section with Motion */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 flex">
          {["/bg8.JPG", "/bg4.JPG", "/bg11.JPG", "/bg10.JPG", "/bg9.JPG"].map(
            (src, i) => (
              <div key={i} className="relative w-1/4 h-full">
                <Image
                  src={src}
                  alt={`Background ${i + 1}`}
                  fill
                  className="object-cover blur-sm opacity-80"
                  priority={i === 0} // only first loads eagerly
                />
              </div>
            )
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-200 to-white bg-clip-text text-transparent drop-shadow-lg"
        >
          Nirgranth Creations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-6 max-w-2xl text-lg md:text-xl text-white/90"
        >
          Turning <span className="text-yellow-300 font-semibold">art</span>,{" "}
          <span className="text-pink-200 font-semibold">tech</span>, and{" "}
          <span className="text-blue-200 font-semibold">stories</span> into
          unforgettable experiences.
        </motion.p>
      </section>

      {/* ✅ Products Section */}
      <section id="products" className="py-16 px-6 bg-pink-50 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-12">
          Our Products & Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "🎙 Recording Studio & Voice Over",
              desc: "Professional audio production.",
              href: "/recording",
            },
            {
              title: "🎬 Graphics & Video Editing",
              desc: "Creative visuals that inspire.",
              href: "/graphic",
            },
            {
              title: "💻 App & Web Development",
              desc: "Building modern tech solutions.",
              href: "/development",
            },
            {
              title: "🛕 Jain Focused Gifts",
              desc: "Special spiritual and cultural gifting ideas.",
              href: "/jainproducts",
            },
            {
              title: "🎁 Customised & Handmade Gifts",
              desc: "Personalised creations and unique resin art, crafted for every occasion.",
              href: "/customgifts",
            },
            {
              title: "🎉 Event Planning & Management",
              desc: "From intimate gatherings to grand celebrations, we plan and manage events that leave lasting impressions.",
              href: "/event",
            },
          ].map((card, i) => (
            <Link key={i} href={card.href}>
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer h-full flex flex-col">
                <h3 className="text-xl font-semibold text-pink-600 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 flex-grow">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

        {/* ✅ Highlights Section (simplified slideshow, no heavy animations) */}
        <section id="gallery" className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12">
            Highlights
          </h2>

          <div className="max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              loop
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="rounded-xl overflow-hidden"
            >
              {[
                { src: "/bg8.JPG", alt: "Product 1" },
                { src: "/bg9.JPG", alt: "Product 2" },
                { src: "/bg10.JPG", alt: "Product 3" },
                { src: "/bg11.JPG", alt: "Product 4" },
              ].map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer"
                    onClick={() => setLightbox(item.src)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      className="object-cover hover:scale-105 transition"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ✅ Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
            onClick={() => setLightbox(null)}
          >
            <div className="relative w-[90%] md:w-[70%] h-[70%]">
              <Image
                src={lightbox}
                alt="Full Image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}

      {/* ✅ Footer (mobile trimmed) */}
      <footer className="bg-pri text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left */}
          <div>
            <Image
              src="/nirgranth.PNG"
              alt="Nirgranth Creations Logo"
              width={140}
              height={45}
              priority
              className="object-contain"
            />
            <p className="text-white/80 max-w-sm mt-4 mb-6 text-sm md:text-base">
              A creative hub blending art, technology, and culture. From gifts
              to apps – we build ideas that last.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm md:text-base">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Policies</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/terms">📄 Terms</a></li>
                <li><a href="/refund">💸 Refund</a></li>
                <li><a href="/privacy">🔒 Privacy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Address</h4>
              <ul className="space-y-2 text-white/80">
                <li>📍 Indore, India</li>
                <li>📧 info@nirgranth.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-white/70 text-xs md:text-sm">
          © {new Date().getFullYear()} Nirgranth Creations. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
