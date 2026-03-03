"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

const works = [
  { 
    title: "ACE Pickleball", 
    type: "Social Media Strategy • Sports Identity", 
    src: "/portfolio-ace.jpg",
    desc: "A high-octane visual identity and social content engine. For ACE Pickleball, we engineered a vibrant, energetic digital atmosphere that captures the intensity of the court and mirrors it across all social touchpoints.",
    tags: ["Social Strategy", "3D Graphics", "Engagement Design"]
  },
  { 
    title: "Asian Heart Institute", 
    type: "Medical Identity • Info Architecture", 
    src: "/portfolio-asian.jpg",
    desc: "Trust-centric clinical branding. We built a clean, professional medical identity system that prioritizes clarity and patient trust, using a minimalist clinical aesthetic for both physical and digital platforms.",
    tags: ["Health Branding", "Clinical Design", "Trust Systems"]
  },
  { 
    title: "JIA Minimal Branding", 
    type: "Executive Identity • Print Systems", 
    src: "/portfolio-jia.jpg",
    desc: "The pinnacle of executive minimalism. This corporate brand identity for 'JIA' merges high-end tactile textures with a clean geometric symbol to establish absolute authority in a crowded market.",
    tags: ["Minimal Identity", "Silver Embossing", "Corporate Brand"]
  },
  { 
    title: "Shrut Swaranjali", 
    type: "Luxury Events • Golden-Tier Branding", 
    src: "/portfolio-shrut.jpg",
    desc: "A world-class cultural summit identity. Using a deep golden-era aesthetic, we manufactured a prestigious brand for 'Shrut Swaranjali' that mirrors the luxury and cultural depth of the event.",
    tags: ["Event Systems", "Golden Branding", "Cultural Premium"]
  },
  { 
    title: "Mavshakti Digital", 
    type: "Tech Presence • Ecosystem Design", 
    src: "/portfolio-mavshakti.jpg",
    desc: "A high-performance digital ecosystem. For Mavshakti, we designed an integrated brand presence that bridges high-end web architecture with modern mobile-first design principles.",
    tags: ["Digital Presence", "Tech Branding", "UI/UX Strategy"]
  },
  { 
    title: "Nirgranth Estate", 
    type: "Real Estate • Architectural Narrative", 
    src: "/portfolio-realestate.jpg",
    desc: "Massive-scale architectural storytelling. We crafted a high-resolution billboard and identity system for a luxury real estate project that emphasizes architectural dominance and lifestyle perfection.",
    tags: ["Billboard Design", "Luxe Real Estate", "Global Narrative"]
  },
  { 
    title: "Design Showcase", 
    type: "Multi-Disciplinary Design • Portfolio Collage", 
    src: "/portfolio-collage.jpg",
    desc: "A curated overview of our diverse design capabilities, from festive campaigns to corporate reports, demonstrating a versatile visual vocabulary that adapts to any brand's unique voice.",
    tags: ["Creative Portfolio", "Versatile Design", "Brand Collage"]
  },
  { 
    title: "Elite Sports Action", 
    type: "Motion Strategy • Athletic Visuals", 
    src: "/portfolio-sports.jpg",
    desc: "Capturing the raw energy of professional athletics through high-performance graphic design and motion-focused visual narratives that resonate with passionate sports communities.",
    tags: ["Sports Graphics", "Motion Design", "High Performance"]
  },
  { 
    title: "Social Media Ecosystem", 
    type: "Platform Strategy • Digital Assets", 
    src: "/portfolio-ace-social.jpg",
    desc: "Comprehensive social media asset creation. We design cohesive digital ecosystems that ensure brand consistency across Instagram, Facebook, and emerging digital platforms for maximum reach.",
    tags: ["Digital Ecosystem", "Social Assets", "Growth Design"]
  },
  { 
    title: "Urban Brand Mockups", 
    type: "Physical Presence • Global Positioning", 
    src: "/portfolio-billboard.jpg",
    desc: "Testing brand impact in the real world. We use high-fidelity mockups of urban billboards and street-level signage to visualize and refine how your message dominates the physical landscape.",
    tags: ["Brand Mockups", "Urban Signage", "Physical Impact"]
  }
];

export default function PortfolioContent() {
  return (
    <main className="bg-white text-gray-900 pb-20">
      {/* ===== HERO: Portfolio Exhibition ===== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FF5851] mb-6 block">Execution Exhibition 2024</span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-gray-900 tracking-tighter leading-[0.85] italic mb-10">
              OFFICIAL<br />
              <span className="text-[#FF5851]">PORTFOLIO</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-500 font-bold leading-relaxed mb-12">
              A deep-dive exhibition of our elite creations—merging strategic structural 
              clarity with cinematic visual permanence across global brand identities.
            </p>
            <div className="flex gap-4">
               <Link href="/contact?service=Portfolio-Inquiry" className="px-8 py-4 bg-gray-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#FF5851] transition-all">
                  Start Your Project
               </Link>
               <Link href="/" className="px-8 py-4 border border-gray-200 text-gray-500 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">
                  Back to Home
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== THE EXHIBITION: Full Gallery ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Showcase */}
              <div className="w-full lg:w-3/5">
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-edge bg-gray-50 group">
                  <Image
                    src={work.src}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                     <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Narrative Detail */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <span className="text-[10px] font-black text-[#FF5851] uppercase tracking-widest mb-4">{work.type}</span>
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter italic leading-[0.9]">{work.title}</h3>
                <p className="text-gray-500 font-bold leading-relaxed mb-8 text-lg">
                  {work.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {work.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/contact?service=Portfolio-Inquiry" className="inline-flex items-center gap-4 text-gray-900 font-black text-sm uppercase tracking-widest group/link hover:text-[#FF5851] transition-colors">
                  Execute Similar Identity <Sparkles size={16} className="group-hover/link:rotate-12 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CALL ===== */}
      <section className="py-32 px-6 bg-gray-50 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic leading-none">
               READY TO SHIP AN<br />
               <span className="text-[#FF5851]">ELITE IDENTITY?</span>
            </h2>
            <p className="text-xl text-gray-500 font-bold mb-12 max-w-2xl mx-auto uppercase tracking-widest">
               Our calendar fills fast. Secure your creative slot today.
            </p>
            <Link href="/contact?service=Portfolio-Inquiry" className="inline-block px-12 py-6 bg-[#FF5851] text-white rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
               Start Planning Now
            </Link>
         </div>
      </section>

      <style jsx global>{`
        .shadow-edge {
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.15);
        }
      `}</style>
    </main>
  );
}
