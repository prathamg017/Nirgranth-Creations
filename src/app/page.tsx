"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Gallery from "@/app/components/slider";



export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="font-sans text-gray-900">
     
    
<section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
 
<div className="absolute inset-0 flex">
  {["/bg8.JPG","/bg4.JPG",  "/bg11.JPG", "/bg10.JPG","/bg9.JPG"].map((src, i) => (
    <div key={i} className="relative w-1/4 h-full">
      <Image
        src={src}
        alt={`Background ${i + 1}`}
        fill
        className="object-cover blur-sm opacity-80"
        priority
      />
    </div>
  ))}
</div>


  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Hero Content */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-200 to-white bg-clip-text text-transparent drop-shadow-lg"
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
<section
  id="products"
  className="py-20 px-6 bg-pink-50 text-center"
>
  <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-12">
    Our Products & Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition cursor-pointer h-full flex flex-col"
        >
          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            {card.title}
          </h3>
          <p className="text-gray-600 flex-grow">{card.desc}</p>
        </motion.div>
      </Link>
    ))}
  </div>
</section>



<Gallery/>



      {/* ✅ Lightbox Modal */}
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
            />
          </div>
        </div>
      )}

      {/* ✅ Footer */}
<footer className="bg-pri text-white py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Left Section: Logo + About + Address */}
    <div>
      <Image
        src="/nirgranth.PNG"
        alt="Nirgranth Creations Logo"
        width={160}
        height={50}
        priority
        className="object-contain"
      />
      <p className="text-white/80 max-w-sm mb-6">
        A creative hub blending art, technology, and culture. From gifts
        to apps – we build ideas that last.
      </p>

      {/* Social Links */}
      <div className="flex gap-4 mt-6">
        <motion.a
          href="https://twitter.com/"
          target="_blank"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl hover:text-yellow-300 transition"
        >
          🐦
        </motion.a>
        <motion.a
          href="https://instagram.com/"
          target="_blank"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl hover:text-yellow-300 transition"
        >
          📸
        </motion.a>
        <motion.a
          href="https://youtube.com/"
          target="_blank"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl hover:text-yellow-300 transition"
        >
          ▶️
        </motion.a>
      </div>
    </div>

    {/* Right Section: Links */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-white/80">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Policies</h4>
        <ul className="space-y-2 text-white/80">
          <li><a href="/terms">📄 Terms & Conditions</a></li>
          <li><a href="/refund">💸 Refund Policy</a></li>
          <li><a href="/privacy">🔒 Privacy Policy</a></li>
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

  {/* Bottom Copyright */}
  <div className="text-center mt-8 text-white/70 text-sm">
    © {new Date().getFullYear()} Nirgranth Creations. All Rights Reserved.
  </div>
</footer>
</main>)}