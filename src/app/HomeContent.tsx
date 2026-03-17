"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section - Mobile First Design */}
      <section className="relative w-full">
        <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
          <Image
            src="/banner.png"
            alt="Nirgranth Creations Banner"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-[center_30%] sm:object-center blur-[80px] sm:blur-none scale-150 sm:scale-100 opacity-95 sm:opacity-100 transition-all duration-700"
            quality={100}
            sizes="100vw"
          />
          
          {/* Mobile-only matching yellow ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-yellow-400/10 to-transparent sm:hidden"></div>
          
          {/* Professional Gradient Overlay - Responsive for transparency/readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80 sm:from-black/40 sm:via-transparent sm:to-black/40"></div>
          
          {/* Text Overlay - Optimized for Mobile - Added PT to avoid navbar overlap */}
          <div className="absolute inset-0 flex items-center justify-center sm:justify-start pt-24 md:pt-28">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl text-center sm:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-4 sm:mb-6 drop-shadow-2xl uppercase tracking-tighter">
                  SCALE YOUR BRAND<br />
                  TO THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5851] to-orange-400">NEXT LEVEL</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white mb-8 sm:mb-10 max-w-xl drop-shadow-lg leading-relaxed px-2 sm:px-0 font-bold">
                  We don&apos;t just post content; we manufacture authority. The ultimate execution agency for corporate scaling and elite digital presence.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/contact?service=General-Inquiry" className="w-full sm:w-auto">
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-br from-[#FF5851] to-[#ff7b75] text-white px-10 py-4 rounded-full font-black text-sm md:text-base shadow-[0_15px_30px_-5px_rgba(255,88,81,0.5)] transition-all duration-300 tracking-wider uppercase flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Start Your Project
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                      </span>
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Corporate Trust Marquee */}
        <div className="bg-white border-y border-gray-100 py-10 overflow-hidden relative">
          <div className="container mx-auto px-6 mb-6">
            <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-gray-600">Trusted By Global Brands & Creators</p>
          </div>
          <div className="flex gap-20 animate-[marquee_25s_linear_infinite] whitespace-nowrap items-center">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="flex gap-20 items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <span className="text-2xl font-black text-gray-600 tracking-tighter">CORP_IDENTITY</span>
                <span className="text-2xl font-black text-gray-600 tracking-tighter">MEDIA_HOUSE</span>
                <span className="text-2xl font-black text-gray-600 tracking-tighter">TECH_HUB</span>
                <span className="text-2xl font-black text-gray-600 tracking-tighter">CREATIVE_CO</span>
                <span className="text-2xl font-black text-gray-600 tracking-tighter">GLOBAL_STUDIO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Restored Original Style */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter">
              Crafting Ideas With <span className="text-[#FF5851]">Purpose</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-bold max-w-2xl mx-auto">
              Nirgranth Creations is more than a creative workspace. It&apos;s where your ideas find their ultimate form. We are dedicated to producing high-quality content that resonates, inspires, and delivers results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic CTA & Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Get a Quote CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 md:mb-20 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl mx-1"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5851] to-[#ff7b75]"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center py-12 md:py-20 px-6 sm:px-12">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Scale Your Brand To The <br className="hidden sm:block" /> Next Level
              </h3>
              <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
                Connect with our strategists to build a tailored roadmap for your brand&apos;s digital dominance.
              </p>
              <Link href="/contact?service=Consultation" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group relative overflow-hidden bg-white px-10 py-5 rounded-full font-black text-base md:text-lg shadow-[0_20px_40px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 tracking-tighter uppercase flex items-center justify-center gap-3"
                  style={{ color: '#FF5851' }}
                >
                  <span className="relative z-10 uppercase tracking-widest font-black">Secure Your Consultation</span>
                  <div className="bg-[#FF5851] w-2 h-2 rounded-full group-hover:w-full group-hover:h-full absolute right-0 transition-all duration-500 opacity-0 group-hover:opacity-10 opacity-0 -z-0"></div>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Service Cards Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto px-1 sm:px-0">
            
            {/* Card 1: Recording Studio */}
            <Link href="/recording">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-auto md:h-[320px]"
              >
                <div className="flex flex-col md:flex-row h-full">
                {/* Image Section - Larger on Mobile */}
                <div className="relative h-56 sm:h-64 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/recording.jpg"
                    alt="Recording Studio"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - Better Mobile Padding */}
                <div className="relative isolate p-5 sm:p-6 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-xl font-black mb-2 sm:mb-3 text-black group-hover:text-white transition-colors duration-500">
                      RECORDING STUDIO<br />&amp; VOICE OVER
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/95 mb-3 text-sm sm:text-base md:text-sm leading-relaxed transition-colors duration-500 font-bold tracking-tight">
                      Studio starting ₹1500/hr. Professional audio production & narration.
                    </p>
                    <ul className="space-y-1.5 text-gray-500 group-hover:text-white/90 text-sm sm:text-base md:text-sm transition-colors duration-500 font-bold">
                      <li>• Voice recording (₹1500 - ₹10000)</li>
                      <li>• Studio rental: ₹1500/hr</li>
                      <li>• Professional scriptwriting</li>
                      <li>• Mixing &amp; mastering</li>
                      <li>• High-end audio gear</li>
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
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-auto md:h-[320px]"
              >
                <div className="flex flex-col md:flex-row-reverse h-full">
                {/* Image Section - Larger on Mobile */}
                <div className="relative h-56 sm:h-64 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/vigraphic.png"
                    alt="Graphics & Video Editing"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - Better Mobile Padding */}
                <div className="relative isolate p-5 sm:p-6 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-xl font-black mb-2 sm:mb-3 text-black group-hover:text-white transition-colors duration-500">
                      GRAPHICS &amp; VIDEO<br />EDITING
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/95 mb-3 text-sm sm:text-base md:text-sm leading-relaxed transition-colors duration-500 font-bold tracking-tight">
                      Graphic Designing from ₹649. Video Editing from ₹1199.
                    </p>
                    <ul className="space-y-1.5 text-gray-500 group-hover:text-white/90 text-sm sm:text-base md:text-sm transition-colors duration-500 font-bold">
                      <li>• AI Video Creation (₹1499+)</li>
                      <li>• Branding & Logo (₹39999+)</li>
                      <li>• Documentary & Edit (₹24999+)</li>
                      <li>• Social Media Creatives</li>
                      <li>• Motion Graphics</li>
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
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-auto md:h-[320px]"
              >
                <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative h-56 sm:h-64 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/development.png"
                    alt="App & Web Development"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - FIXED with isolation */}
                <div className="relative isolate p-5 sm:p-6 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-xl font-black mb-2 sm:mb-3 text-black group-hover:text-white transition-colors duration-500">
                      APP &amp; WEB<br />DEVELOPMENT
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/95 mb-3 text-sm sm:text-base md:text-sm leading-relaxed transition-colors duration-500 font-bold tracking-tight">
                      Starting from ₹15k. High-performance 5-page websites.
                    </p>
                    <ul className="space-y-1.5 text-gray-500 group-hover:text-white/90 text-sm sm:text-base md:text-sm transition-colors duration-500 font-bold">
                      <li>• Custom Web Development</li>
                      <li>• iOS & Android Apps</li>
                      <li>• UI/UX Strategy</li>
                      <li>• E-commerce Solutions</li>
                    </ul>
                  </div>
                </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 4: Social Media Management - REPLACED */}
            <Link href="/smm">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-auto md:h-[320px]"
              >
                <div className="flex flex-col md:flex-row-reverse h-full">
                {/* Image Section - Larger on Mobile */}
                <div className="relative h-56 sm:h-64 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/smm.png"
                    alt="Social Media Management"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - Better Mobile Padding */}
                <div className="relative isolate p-5 sm:p-6 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-xl font-black mb-2 sm:mb-3 text-black group-hover:text-white transition-colors duration-500">
                      SOCIAL MEDIA<br />MANAGEMENT
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/95 mb-3 text-sm sm:text-base md:text-sm leading-relaxed transition-colors duration-500 font-bold tracking-tight">
                      Organic growth & management. Plans from ₹15k.
                    </p>
                    <ul className="space-y-1.5 text-gray-500 group-hover:text-white/90 text-sm sm:text-base md:text-sm transition-colors duration-500 font-bold">
                      <li>• Content Strategy</li>
                      <li>• High Success Rates</li>
                      <li>• Basic/Growth/Premium Plans</li>
                      <li>• Analytics & Reporting</li>
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
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-auto md:h-[320px]"
              >
                <div className="flex flex-col md:flex-row h-full">
                {/* Image Section - Larger on Mobile */}
                <div className="relative h-56 sm:h-64 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/event-management-premium.png"
                    alt="Event Management"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - Better Mobile Padding */}
                <div className="relative isolate p-5 sm:p-6 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-xl font-black mb-2 sm:mb-3 text-black group-hover:text-white transition-colors duration-500">
                      EVENT<br />MANAGEMENT
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/95 mb-3 text-sm sm:text-base md:text-sm leading-relaxed transition-colors duration-500 font-bold tracking-tight">
                      Unforgettable celebrations crafted with precision and care.
                    </p>
                    <ul className="space-y-1.5 text-gray-500 group-hover:text-white/90 text-sm sm:text-base md:text-sm transition-colors duration-500 font-bold">
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
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 cursor-pointer h-auto md:h-[320px]"
              >
                <div className="flex flex-col md:flex-row-reverse h-full">
                {/* Image Section - Larger on Mobile */}
                <div className="relative h-56 sm:h-64 md:h-full md:w-1/2 overflow-hidden">
                  <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/ratnatray.jpeg"
                    alt="Ratnatray"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                
                {/* Content Section - Better Mobile Padding */}
                <div className="relative isolate p-5 sm:p-6 md:p-6 md:w-1/2 h-full flex flex-col bg-white overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF5851] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="relative flex-1 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-xl font-black mb-2 sm:mb-3 text-black group-hover:text-white transition-colors duration-500">
                      RATNATRAY
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/95 mb-3 text-sm sm:text-base md:text-sm leading-relaxed transition-colors duration-500 font-bold tracking-tight">
                      Jinshasan ki Prabhavna - Modern dharmik concert event to attract Jain youth.
                    </p>
                    <ul className="space-y-1.5 text-gray-500 group-hover:text-white/90 text-sm sm:text-base md:text-sm transition-colors duration-500 font-bold">
                      <li>• Spiritual concerts</li>
                      <li>• Youth engagement</li>
                      <li>• Modern dharmik events</li>
                      <li>• Cultural celebrations</li>
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
      <section className="py-16 md:py-24 lg:py-28 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 md:mb-20 leading-tight text-gray-600"
          >
            Why <span style={{ color: '#FF5851' }}>Choose Us</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Icon 1 - Art/Creativity (Theme Color) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300 relative" style={{ backgroundColor: '#FF5851' }}>
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-600 leading-tight px-2">
                Unique blend of art, culture, and creativity
              </p>
            </motion.div>

            {/* Icon 2 - Production/Box (Black) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-600 leading-tight px-2">
                Expertise in handcrafted and digital production
              </p>
            </motion.div>

            {/* Icon 3 - Quality/Lotus (White with Theme Border) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300" style={{ border: '4px solid #FF5851' }}>
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" style={{ color: '#FF5851' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-600 leading-tight px-2">
                Attention to detail and high-quality output
              </p>
            </motion.div>

            {/* Icon 4 - Services/Building (Black) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-600 leading-tight px-2">
                End-to-end services under one roof
              </p>
            </motion.div>

            {/* Icon 5 - Culture/Hand (Theme Color) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#FF5851' }}>
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-black text-gray-600 leading-tight px-2">
                Deep understanding of secular cross-cultural aesthetics
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stage: The Exhibition - Integrated Portfolio (Enhanced Visibility) */}
      <section className="py-20 md:py-24 px-4 md:px-6 relative bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tighter text-center md:text-left">
                <span className="text-[#FF5851]">GLIMPSE:</span> SELECT PORTFOLIO
              </h2>
              <p className="text-gray-500 font-bold text-sm md:text-base mt-2 uppercase tracking-widest text-center md:text-left">Direct from our design studio - The Elite Collection</p>
            </motion.div>
            <Link href="/portfolio" className="text-sm font-black uppercase text-[#FF5851] hover:underline tracking-widest border-2 border-[#FF5851] px-6 py-2 rounded-full transition-all hover:bg-[#FF5851] hover:text-white">
              Explore Full Exhibition
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                src: "/portfolio-ace.jpg", 
                title: "ACE Pickleball", 
                tag: "Social Media Design", 
                desc: "High-octane social strategy & visual identity for modern sports." 
              },
              { 
                src: "/portfolio-asian.jpg", 
                title: "Asian Heart", 
                tag: "Medical Identity", 
                desc: "Trust-centric clinical branding and informational systems." 
              },
              { 
                src: "/portfolio-jia.jpg", 
                title: "JIA Minimalist", 
                tag: "Brand Architecture", 
                desc: "Clean, geometric corporate systems for executive presence." 
              },
              { 
                src: "/portfolio-shrut.jpg", 
                title: "Shrut Swaranjali", 
                tag: "Luxury Event Branding", 
                desc: "Premium golden-tier design for world-class cultural summits." 
              },
              { 
                src: "/portfolio-mavshakti.jpg", 
                title: "Mavshakti Digital", 
                tag: "Ecosystem Design", 
                desc: "Unified tech presence bridging web, app, and brand." 
              },
              { 
                src: "/portfolio-realestate.jpg", 
                title: "Nirgranth Estate", 
                tag: "Architectural Billboard", 
                desc: "Massive-scale outdoor narratives for luxury real estate." 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Premium Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-left translate-y-4 group-hover:translate-y-0">
                  <span className="text-[#FF5851] text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.tag}</span>
                  <h4 className="text-white font-black text-2xl uppercase tracking-tighter leading-tight mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm font-bold leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-20">
            <Link 
              href="/graphic" 
              className="inline-flex items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#FF5851" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 px-10 py-5 bg-gray-900 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl group border border-white/10"
              >
                Explore Master Collection 
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-2">
                  <ArrowLeft size={16} className="rotate-180" />
                </div>
              </motion.button>
            </Link>
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 md:mb-16 leading-tight text-gray-600"
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
                  <p className="text-xs md:text-sm text-gray-600 mb-4 font-bold">{testimonial.location}</p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-semibold">
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="text-white py-8 md:py-16 px-4 md:px-6" style={{ backgroundColor: '#FF5851' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-12">
            {/* Logo Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="bg-white rounded-xl p-3 md:p-6 inline-block mb-3 md:mb-4 shadow-lg">
                <Image
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100px, 120px"
                  src="/logo.svg"
                  alt="Nirgranth Creations Logo"
                  width={100}
                  height={33}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm md:text-lg mb-2 md:mb-4">Quick Links</h4>
              <ul className="space-y-1.5 md:space-y-2 text-white/90 text-xs md:text-base">
                <li><Link href="/about" className="hover:text-white hover:underline transition">About</Link></li>
                <li><Link href="/recording" className="hover:text-white hover:underline transition">Services</Link></li>
                <li><Link href="/contact?service=General-Inquiry" className="hover:text-white hover:underline transition">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-sm md:text-lg mb-2 md:mb-4">Services</h4>
              <ul className="space-y-1.5 md:space-y-2 text-white/90 text-xs md:text-base">
                <li><Link href="/recording" className="hover:text-white hover:underline transition">Recording</Link></li>
                <li><Link href="/graphic" className="hover:text-white hover:underline transition">Graphics</Link></li>
                <li><Link href="/development" className="hover:text-white hover:underline transition">Development</Link></li>
                <li><Link href="/smm" className="hover:text-white hover:underline transition">Social Media</Link></li>
                <li><Link href="/event" className="hover:text-white hover:underline transition">Events</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-sm md:text-lg mb-2 md:mb-4">Links</h4>
              <ul className="space-y-1.5 md:space-y-2 text-white/90 text-xs md:text-base">
                <li><Link href="/terms" className="hover:text-white hover:underline transition">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white hover:underline transition">Privacy</Link></li>
                <li><Link href="/refund" className="hover:text-white hover:underline transition">Refund</Link></li>
              </ul>
            </div>

            {/* Location */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-sm md:text-lg mb-2 md:mb-4">Location</h4>
              <div className="space-y-2 md:space-y-3 text-white/90 text-xs md:text-base">
                <p className="font-semibold text-white text-sm md:text-base">Nirgranth Creations</p>
                <p className="text-xs md:text-sm leading-relaxed">
                  3rd Floor, Dhari Bazar, Tilak Mandi, Moti-Indore, M.P
                </p>
                <a href="tel:9826046833">
                  <button className="mt-2 md:mt-4 bg-white px-4 py-1.5 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-base hover:bg-orange-50 hover:scale-105 transition-all shadow-lg" style={{ color: '#FF5851' }}>
                    9826046833
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Row */}
          <div className="flex justify-center gap-6 mt-12 md:mt-16">
            {[
              { icon: "Instagram", href: "https://www.instagram.com/nirgranth_creation/", color: "#E4405F" },
              { icon: "Twitter", href: "https://twitter.com/nirgranth_c", color: "#000000" },
              { icon: "Youtube", href: "https://youtube.com/@nirgranthcreations", color: "#FF0000" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
              >
                {social.icon === "Instagram" && <svg className="w-6 h-6 text-[#FF5851] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                {social.icon === "Linkedin" && <svg className="w-6 h-6 text-[#FF5851] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                {social.icon === "Twitter" && <svg className="w-5 h-5 text-[#FF5851] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                {social.icon === "Youtube" && <svg className="w-6 h-6 text-[#FF5851] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
              </a>
            ))}
          </div>

          <div className="text-center mt-8 pt-4 md:pt-8 border-t border-white/20 text-white/80 text-xs md:text-sm">
            <p className="font-bold opacity-60 italic mb-2 tracking-widest uppercase">Manufactured with Authority in Indore. Global Scale.</p>
            <p>© {new Date().getFullYear()} Nirgranth Creations. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

