"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { Lang, t } from "./translations";

export default function BiographyClient() {
  const [lang, setLang] = useState<Lang>("en");
  const [ttsState, setTtsState] = useState<"idle" | "playing" | "paused">("idle");
  const [ttsProgress, setTtsProgress] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tx = t[lang];

  // Collect all readable text from the content area
  const getFullText = useCallback(() => {
    if (!contentRef.current) return "";
    return contentRef.current.innerText;
  }, []);

  const stopTTS = useCallback(() => {
    window.speechSynthesis.cancel();
    setTtsState("idle");
    setTtsProgress(0);
  }, []);

  const startTTS = useCallback(() => {
    stopTTS();
    const text = getFullText();
    if (!text) return;
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang === "hi" ? "hi-IN" : "en-IN";
    utt.rate = 0.92;
    utt.pitch = 1;

    // Try to pick a matching voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) =>
      lang === "hi" ? v.lang.startsWith("hi") : v.lang.startsWith("en-IN") || v.lang.startsWith("en-GB")
    );
    if (preferred) utt.voice = preferred;

    utt.onstart = () => setTtsState("playing");
    utt.onend = () => { setTtsState("idle"); setTtsProgress(0); };
    utt.onerror = () => setTtsState("idle");
    utt.onboundary = (e) => {
      if (e.name === "word") {
        setTtsProgress(Math.round((e.charIndex / text.length) * 100));
      }
    };
    utteranceRef.current = utt;
    window.speechSynthesis.speak(utt);
  }, [lang, getFullText, stopTTS]);

  const togglePause = useCallback(() => {
    if (ttsState === "playing") {
      window.speechSynthesis.pause();
      setTtsState("paused");
    } else if (ttsState === "paused") {
      window.speechSynthesis.resume();
      setTtsState("playing");
    }
  }, [ttsState]);

  // Stop TTS on language switch
  useEffect(() => { stopTTS(); }, [lang, stopTTS]);
  useEffect(() => () => { window.speechSynthesis.cancel(); }, []);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* ── FLOATING CONTROL BAR ── */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-3 bg-gray-900/95 backdrop-blur-xl text-white px-3 py-2 md:px-5 md:py-3 rounded-full shadow-2xl border border-white/10 w-[95%] max-w-max">
        {/* Language Toggle */}
        <div className="flex items-center bg-white/10 rounded-full p-1 gap-1">
          <button
            onClick={() => setLang("en")}
            className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold transition-all ${lang === "en" ? "bg-[#FF5851] text-white shadow" : "text-gray-300 hover:text-white"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("hi")}
            className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold transition-all flex items-center gap-1.5 ${lang === "hi" ? "bg-[#FF5851] text-white shadow" : "text-gray-300 hover:text-white"}`}
          >
            <span className="hidden xs:inline">🇮🇳</span> हिन्दी
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-5 md:h-6 bg-white/20" />

        {/* TTS Controls */}
        {ttsState === "idle" ? (
          <button
            onClick={startTTS}
            title="Read aloud"
            className="flex items-center gap-1.5 md:gap-2 bg-[#FF5851] hover:bg-[#e04843] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0013 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              <path d="M14 3.23v2.06A7.5 7.5 0 0119.5 12a7.5 7.5 0 01-5.5 7.21v2.06C17.56 20.72 22 16.78 22 12c0-4.78-4.44-8.72-8-8.77z"/>
            </svg>
            <span className="hidden sm:inline">सुनें / Listen</span>
            <span className="sm:hidden">Listen</span>
          </button>
        ) : (
          <div className="flex items-center gap-1.5 md:gap-2">
            <button onClick={togglePause} className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white/15 hover:bg-white/25 rounded-full transition-all">
              {ttsState === "playing" ? (
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
            <button onClick={stopTTS} className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white/15 hover:bg-white/25 rounded-full transition-all">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg>
            </button>
            {/* Progress bar (hidden on very small screens to save space) */}
            <div className="hidden xs:block w-16 md:w-24 h-1 md:h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-[#FF5851] rounded-full transition-all duration-300" style={{ width: `${ttsProgress}%` }} />
            </div>
          </div>
        )}

        {/* Reading indicator */}
        {ttsState === "playing" && (
          <div className="flex items-center gap-0.5 md:gap-1">
            {[0, 150, 300].map((d) => (
              <span key={d} className="w-0.5 md:w-1 bg-[#FF5851] rounded-full animate-bounce" style={{ height: "10px", animationDelay: `${d}ms` }} />
            ))}
          </div>
        )}
      </div>

      {/* ── READABLE CONTENT ── */}
      <div ref={contentRef}>

        {/* HERO */}
        <section className="relative pt-28 md:pt-36 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 -z-10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5851]/5 rounded-full blur-3xl -z-10" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6 order-2 md:order-1">
              <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <Link href="/" className="hover:text-[#FF5851] transition-colors">{tx.breadcrumb}</Link>
                <span>/</span>
                <span className="text-[#FF5851]">Sky King Akash Jain</span>
              </nav>
              <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05]" itemProp="name">
                {tx.h1a} <span className="text-[#FF5851]">{tx.h1b}</span>
              </h1>
              <p className="text-lg md:text-xl font-semibold text-gray-500 tracking-wide">{tx.subtitle}</p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">{tx.heroPara}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {tx.badges.map((b) => (
                  <span key={b} className="bg-[#FF5851]/10 text-[#FF5851] text-sm font-bold px-4 py-1.5 rounded-full border border-[#FF5851]/20">{b}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                <a
                  href="https://www.instagram.com/nirgranth_creation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF5851] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-lg shadow-[#FF5851]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm md:text-base"
                >
                  {tx.ctaPrimary}
                </a>
              </div>
            </div>
            <div className="flex-1 relative group order-1 md:order-2 max-w-md md:max-w-none">
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#FF5851] to-amber-400 rounded-[3rem] opacity-15 blur-3xl group-hover:opacity-25 transition-opacity duration-500" />
              <div className="relative rounded-[3rem] overflow-hidden border-[6px] border-white shadow-2xl shadow-gray-300">
                <Image src="/akashjain.jpeg" alt="Sky King Akash Jain — Founder of Nirgranth Creation and Ratnatraya, Jain Entrepreneur" width={600} height={750} priority className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" itemProp="image" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full font-black text-sm whitespace-nowrap shadow-xl">{tx.floatingTag}</div>
            </div>
          </div>
        </section>

        {/* WHO IS */}
        <section className="py-24 bg-gray-50 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 border-l-8 border-[#FF5851] pl-6">{tx.whoTitle}</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{tx.who1}</p><p>{tx.who2}</p><p>{tx.who3}</p>
            </div>
          </div>
        </section>

        {/* EARLY LIFE */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <div className="relative bg-gray-900 text-white p-10 rounded-[3rem] shadow-2xl">
                <div className="text-7xl text-[#FF5851] font-black leading-none mb-4">&ldquo;</div>
                <blockquote className="text-xl font-semibold leading-relaxed">{tx.earlyQuote}</blockquote>
                <p className="mt-6 text-[#FF5851] font-black uppercase tracking-[0.2em] text-sm">— Sky King Akash Jain</p>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-black text-gray-900 border-l-8 border-blue-500 pl-6">{tx.earlyTitle}</h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>{tx.early1}</p><p>{tx.early2}</p><p>{tx.early3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ENTREPRENEURIAL JOURNEY */}
        <section className="py-24 bg-gray-900 text-white px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black">{tx.journeyTitle}</h2>
              <p className="text-xl text-gray-400">{tx.journeySubtitle}</p>
            </div>
            {/* Nirgranth */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-5">
                <div className="inline-flex bg-[#FF5851]/20 px-5 py-2 rounded-full"><span className="text-[#FF5851] font-black tracking-widest text-xs uppercase">{tx.venture1Label}</span></div>
                <h3 className="text-4xl font-black">{tx.nirgranth}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{tx.nirgranthPara1}</p>
                <p className="text-gray-400 leading-relaxed">{tx.nirgranthPara2}</p>
              </div>
              <div className="bg-gray-800 p-10 rounded-[3rem] border border-gray-700 space-y-4">
                <h4 className="text-lg font-bold text-[#FF5851] uppercase tracking-widest">{tx.whatNirgranth}</h4>
                {tx.nirgranthServices.map((s) => (
                  <div key={s} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-[#FF5851] rounded-full flex-shrink-0" /><span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Ratnatraya */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-800 p-3 rounded-[3rem] overflow-hidden order-2 md:order-1">
                <Image src="/ratimage.JPG" alt="Ratnatraya — Grand Jain Cultural Show by Sky King Akash Jain" width={800} height={600} className="w-full h-auto rounded-[2.5rem] object-cover" />
              </div>
              <div className="space-y-5 order-1 md:order-2">
                <div className="inline-flex bg-amber-500/20 px-5 py-2 rounded-full"><span className="text-amber-400 font-black tracking-widest text-xs uppercase">{tx.venture2Label}</span></div>
                <h3 className="text-4xl font-black">{tx.ratnatraya}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{tx.ratnatraya1}</p>
                <p className="text-gray-400 leading-relaxed">{tx.ratnatraya2}</p>
              </div>
            </div>
            {/* Upcoming */}
            <div className="space-y-10">
              <h3 className="text-3xl font-black text-center">{tx.upcomingTitle}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 border border-gray-700 hover:border-[#FF5851] rounded-[2.5rem] p-6 md:p-10 transition-all group">
                  <div className="text-3xl mb-4">👘</div>
                  <h4 className="text-2xl font-black mb-3 group-hover:text-[#FF5851] transition-colors">{tx.maryadaTitle}</h4>
                  <p className="text-gray-400 leading-relaxed">{tx.maryadaDesc}</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 hover:border-amber-400 rounded-[2.5rem] p-6 md:p-10 transition-all group">
                  <div className="text-3xl mb-4">🕌</div>
                  <h4 className="text-2xl font-black mb-3 group-hover:text-amber-400 transition-colors">{tx.jainvidhiTitle}</h4>
                  <p className="text-gray-400 leading-relaxed">{tx.jainvidhiDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">{tx.impactTitle}</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{tx.impact1}</p><p>{tx.impact2}</p><p>{tx.impact3}</p><p>{tx.impact4}</p>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-20 bg-gray-50 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto space-y-14">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-gray-900">{tx.expertiseTitle}</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">{tx.expertiseSubtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tx.expertiseItems.map((item) => (
                <div key={item.title} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-[#FF5851]/30 space-y-3">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="font-black text-gray-900 text-base">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FF5851] text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black">{tx.visionTitle}</h2>
              <p className="text-2xl font-bold leading-snug opacity-90">{tx.visionQuote}</p>
              <p className="text-white/70">{tx.visionAuthor}</p>
            </div>
            <div className="space-y-8">
              {tx.visionItems.map((item) => (
                <div key={item.title} className="border-l-4 border-white/40 pl-6 space-y-1">
                  <h3 className="text-lg font-black uppercase tracking-widest">{item.title}</h3>
                  <p className="text-white/75 text-base leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECOGNITION */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto space-y-10">
            <h2 className="text-4xl font-black text-gray-900">{tx.recogTitle}</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{tx.recog1}</p><p>{tx.recog2}</p><p>{tx.recog3}</p>
            </div>
          </div>
        </section>

        {/* QUICK REF */}
        <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-gray-800 mb-6">{tx.refTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              {tx.refItems.map((item) => (
                <div key={item.k} className="bg-white p-6 rounded-2xl border border-gray-100 space-y-2">
                  <p className="font-black text-gray-900 text-base">{item.k}</p>
                  <p>{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              {tx.conclusionTitle}<br /><span className="text-[#FF5851]">{tx.conclusionSub}</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">{tx.conclusionPara}</p>
            <div className="pt-6 flex flex-wrap justify-center gap-3 md:gap-4">
              <Link href="/contact" className="bg-[#FF5851] text-white px-7 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg hover:-translate-y-1 transition-all shadow-lg shadow-[#FF5851]/40">{tx.ctaWork}</Link>
              <Link href="/" className="border-2 border-gray-600 text-gray-300 px-7 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg hover:border-white hover:text-white transition-all">{tx.ctaExplore}</Link>
            </div>
            <p className="pt-8 text-gray-600 text-sm">
              © Nirgranth Creations · <Link href="/sky-king-akash-jain" className="hover:text-gray-400 underline">{tx.footerLink}</Link>
            </p>
          </div>
        </section>

      </div>
      {/* Bottom padding so floating bar doesn't cover content */}
      <div className="h-24" />
    </main>
  );
}
