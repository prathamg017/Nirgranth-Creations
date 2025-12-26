"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section - Fixed Banner with Proper Spacing */}
      <section className="relative w-full">
        {/* Add top padding to prevent navbar overlap */}
        <div className="h-16 md:h-20"></div>
        
        <div className="relative w-full h-[320px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
          <Image
            src="/banner.png"
            alt="Nirgranth Creations Banner"
            fill
            priority
            className="object-cover object-center"
            quality={85}
            sizes="100vw"
          />
          
          {/* Professional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
          
          {/* Text Overlay - Perfect Positioning */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl">
                  TURNING ART, TECH, & STORIES
                  <br />
                  <span className="block mt-1 sm:mt-2">INTO MEANINGFUL CREATIONS</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 mb-4 sm:mb-6 md:mb-8 max-w-xl drop-shadow-lg leading-relaxed">
                  A multidisciplinary creative studio delivering customized gifts, spiritual
                  artifacts, audio production, and complete video & web solutions.
                </p>
                <Link href="/contact">
                  <button className="text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl" style={{ backgroundColor: '#FF5851' }}>
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Ideas With Purpose Section */}
      <section 
        className="py-16 md:py-24 lg:py-28 px-4 md:px-6 relative bg-white"
        style={{
          backgroundImage: 'url(/bg.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/70"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
              Crafting Ideas With <span style={{ color: '#FF5851' }}>Purpose</span>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 leading-relaxed">
              Nirgranth Creations is a creative workspace dedicated to producing high-quality handcrafted products, spiritual items, audio-visual content, and digital solutions.
              We combine traditional craftsmanship, modern technology, and thoughtful storytelling to create work that resonates with emotion and meaning.
            </p>
          </motion.div>

          {/* Get a Quote CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-16 md:mb-20 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: 'url(/bg.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 88, 81, 0.95)' }}></div>
            
            {/* Content */}
            <div className="relative z-10 text-center py-12 md:py-16 lg:py-20 px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                Ready to Bring Your Vision to Life?
              </h3>
              <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
                Whether it's a spiritual project, creative design, or digital solution – we're here to help you create something extraordinary.
              </p>
              <Link href="/contact">
                <button className="bg-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl" style={{ color: '#FF5851' }}>
                  Get a Quote
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Service Cards Grid - All White, Hover to Theme Color */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            
            {/* Card 1: Recording Studio */}
            <Link href="/recording">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-[320px]"
              >
                <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative h-48 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/recording.jpg"
                    alt="Recording Studio"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - FIXED with isolation */}
                <div className="relative isolate p-4 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                      RECORDING STUDIO<br />&amp; VOICE OVER
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/95 mb-2 text-xs md:text-sm leading-relaxed transition-colors duration-500">
                      Professional audio production for narration, music, and voice-based projects.
                    </p>
                    <ul className="space-y-1 text-gray-500 group-hover:text-white/90 text-xs md:text-sm transition-colors duration-500">
                      <li>• Voice recording</li>
                      <li>• Voiceovers</li>
                      <li>• Audio editing</li>
                      <li>• Mixing &amp; mastering</li>
                      <li>• Studio-quality sound</li>
                    </ul>
                  </div>
                </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 2: Graphics & Video Editing */}
            <Link href="/graphic">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-[320px]"
              >
                <div className="flex flex-col md:flex-row-reverse h-full">
                {/* Image Section */}
                <div className="relative h-48 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/vigraphic.png"
                    alt="Graphics & Video Editing"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - FIXED with isolation */}
                <div className="relative isolate p-4 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                      GRAPHICS<br />&amp; VIDEO EDITING
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/95 mb-2 text-xs md:text-sm leading-relaxed transition-colors duration-500">
                      Creative visual design and polished video post-production.
                    </p>
                    <ul className="space-y-1 text-gray-500 group-hover:text-white/90 text-xs md:text-sm transition-colors duration-500">
                      <li>• Graphic design</li>
                      <li>• Social media creatives</li>
                      <li>• Video editing</li>
                      <li>• Color correction</li>
                      <li>• Motion graphics</li>
                    </ul>
                  </div>
                </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 3: App & Web Development */}
            <Link href="/development">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-[320px]"
              >
                <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative h-48 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/development.png"
                    alt="App & Web Development"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - FIXED with isolation */}
                <div className="relative isolate p-4 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                      APP &amp; WEB<br />DEVELOPMENT
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/95 mb-2 text-xs md:text-sm leading-relaxed transition-colors duration-500">
                      Modern digital solutions for brands and businesses.
                    </p>
                    <ul className="space-y-1 text-gray-500 group-hover:text-white/90 text-xs md:text-sm transition-colors duration-500">
                      <li>• Website design</li>
                      <li>• Website development</li>
                      <li>• App development</li>
                      <li>• UI implementation</li>
                    </ul>
                  </div>
                </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 4: Jain Focused Gifts */}
            <Link href="/jainproducts">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-[320px]"
              >
                <div className="flex flex-col md:flex-row-reverse h-full">
                {/* Image Section */}
                <div className="relative h-48 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/bg10.JPG"
                    alt="Jain Focused Gifts"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - FIXED with isolation */}
                <div className="relative isolate p-4 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                      JAIN FOCUSED<br />GIFTS
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/95 mb-2 text-xs md:text-sm leading-relaxed transition-colors duration-500">
                      Spiritual and cultural gifting inspired by Jain tradition.
                    </p>
                    <ul className="space-y-1 text-gray-500 group-hover:text-white/90 text-xs md:text-sm transition-colors duration-500">
                      <li>• Temple-themed gifts</li>
                      <li>• Spiritual decor</li>
                      <li>• Miniature structures</li>
                      <li>• Custom spiritual keepsakes</li>
                    </ul>
                  </div>
                </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 5: Event Management - NEW */}
            <Link href="/event">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-[320px]"
              >
                <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative h-48 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/bg12.JPG"
                    alt="Event Management"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - FIXED with isolation */}
                <div className="relative isolate p-4 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                      EVENT<br />MANAGEMENT
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/95 mb-2 text-xs md:text-sm leading-relaxed transition-colors duration-500">
                      Unforgettable celebrations crafted with precision and care.
                    </p>
                    <ul className="space-y-1 text-gray-500 group-hover:text-white/90 text-xs md:text-sm transition-colors duration-500">
                      <li>• Corporate events</li>
                      <li>• Wedding planning</li>
                      <li>• Cultural celebrations</li>
                      <li>• Complete coordination</li>
                    </ul>
                  </div>
                </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 6: Ratnatray - NEW */}
            <a href="https://www.theratnatrayashow.com" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-[320px]"
              >
                <div className="flex flex-col md:flex-row-reverse h-full">
                {/* Image Section */}
                <div className="relative h-48 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/ratnatray.jpeg"
                    alt="Ratnatray"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - FIXED with isolation */}
                <div className="relative isolate p-4 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                      RATNATRAY
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/95 mb-2 text-xs md:text-sm leading-relaxed transition-colors duration-500">
                      Sacred Jain ceremonial items and spiritual accessories.
                    </p>
                    <ul className="space-y-1 text-gray-500 group-hover:text-white/90 text-xs md:text-sm transition-colors duration-500">
                      <li>• Ceremonial trays</li>
                      <li>• Pooja accessories</li>
                      <li>• Traditional designs</li>
                      <li>• Custom arrangements</li>
                    </ul>
                  </div>
                </div>
                </div>
              </motion.div>
            </a>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 lg:py-28 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 md:mb-20 leading-tight"
          >
            Why <span style={{ color: '#FF5851' }}>Choose Us</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center items-start gap-6 md:gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Icon 1 - Art/Creativity (Theme Color) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center w-32 sm:w-36 md:w-40"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300 relative" style={{ backgroundColor: '#FF5851' }}>
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight px-2">
                Unique blend of art, culture, and creativity
              </p>
            </motion.div>

            {/* Icon 2 - Production/Box (Black) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center w-32 sm:w-36 md:w-40"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight px-2">
                Expertise in handcrafted and digital production
              </p>
            </motion.div>

            {/* Icon 3 - Quality/Lotus (White with Theme Border) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center w-32 sm:w-36 md:w-40"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300" style={{ border: '4px solid #FF5851' }}>
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" style={{ color: '#FF5851' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight px-2">
                Attention to detail and high-quality output
              </p>
            </motion.div>

            {/* Icon 4 - Services/Building (Black) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center w-32 sm:w-36 md:w-40"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight px-2">
                End-to-end services under one roof
              </p>
            </motion.div>

            {/* Icon 5 - Culture/Hand (Theme Color) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center w-32 sm:w-36 md:w-40"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#FF5851' }}>
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight px-2">
                Strong understanding of Jain culture and aesthetics
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Glimpse of Our Work Section - 6 Cards with More Width */}
      <section className="py-16 md:py-24 lg:py-28 px-4 md:px-6" style={{ backgroundColor: '#FF5851' }}>
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-10 md:mb-16 leading-tight"
          >
            A Glimpse of Our Work
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { src: "/bg8.JPG", alt: "Handcrafted wooden art" },
              { src: "/bg9.JPG", alt: "Custom business cards" },
              { src: "/bg10.JPG", alt: "Spiritual packaging" },
              { src: "/bg11.JPG", alt: "Brand identity materials" },
              { src: "/bg12.JPG", alt: "Event decoration" },
              { src: "/bg4.JPG", alt: "Creative designs" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 cursor-pointer border-4 border-white group"
              >
                <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Say Section */}
      <section id="testimonials" className="py-16 md:py-24 lg:py-28 px-4 md:px-6 bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 md:mb-16 leading-tight"
          >
            What <span style={{ color: '#FF5851' }}>Clients Say</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Mehta",
                location: "Mumbai, Maharashtra",
                testimonial: "Nirgranth Creations transformed our vision into reality. Their attention to detail and creative approach made our spiritual project truly special. Highly recommended!"
              },
              {
                name: "Priya Sharma",
                location: "Jaipur, Rajasthan",
                testimonial: "Outstanding work on our wedding video! The team captured every precious moment beautifully. Their professionalism and creativity exceeded our expectations."
              },
              {
                name: "Amit Patel",
                location: "Ahmedabad, Gujarat",
                testimonial: "We needed a complete digital solution for our business. The website they developed is stunning and functional. Great team to work with!"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 hover:-translate-y-2"
                style={{ borderColor: '#FFB3B3' }}
              >
                <div className="flex flex-col text-center">
                  <h4 className="text-base md:text-lg font-bold mb-2" style={{ color: '#FF5851' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mb-4">{testimonial.location}</p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 md:py-16 lg:py-20 px-4 md:px-6" style={{ backgroundColor: '#FF5851' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
            {/* Logo Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 inline-block mb-4 shadow-lg">
                <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  src="/logo.svg"
                  alt="Nirgranth Creations Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/90 text-sm md:text-base">
                <li><Link href="/about" className="hover:text-white hover:underline transition">About</Link></li>
                <li><Link href="/recording" className="hover:text-white hover:underline transition">Services</Link></li>
                <li><Link href="/gallery" className="hover:text-white hover:underline transition">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-white hover:underline transition">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Services</h4>
              <ul className="space-y-2 text-white/90 text-sm md:text-base">
                <li><Link href="/recording" className="hover:text-white hover:underline transition">Recording Studio</Link></li>
                <li><Link href="/graphic" className="hover:text-white hover:underline transition">Graphics & Video</Link></li>
                <li><Link href="/development" className="hover:text-white hover:underline transition">Development</Link></li>
                <li><Link href="/jainproducts" className="hover:text-white hover:underline transition">Jain Gifts</Link></li>
                <li><Link href="/event" className="hover:text-white hover:underline transition">Event Planning</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Links</h4>
              <ul className="space-y-2 text-white/90 text-sm md:text-base">
                <li><Link href="/terms" className="hover:text-white hover:underline transition">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white hover:underline transition">Privacy</Link></li>
                <li><Link href="/refund" className="hover:text-white hover:underline transition">Refund</Link></li>
              </ul>
            </div>

            {/* Location */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Location</h4>
              <div className="space-y-3 text-white/90 text-sm md:text-base">
                <p className="font-semibold text-white">Nirgranth Creations</p>
                <p className="text-xs md:text-sm leading-relaxed">
                  3rd Floor, Dhari Bazar, Tilak Mandi, Moti-Indore, M.P
                </p>
                <p className="text-xs md:text-sm">Gujarat, India</p>
                <a href="tel:9826046833">
                  <button className="mt-3 md:mt-4 bg-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-sm md:text-base hover:bg-orange-50 hover:scale-105 transition-all shadow-lg" style={{ color: '#FF5851' }}>
                    9826046833
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/20 text-white/80 text-xs md:text-sm">
            <p>© {new Date().getFullYear()} Nirgranth Creations. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
