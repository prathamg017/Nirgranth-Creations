"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Intro */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-600 mb-4">
          Nirgranth Creation
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          <span className="font-semibold">Where Ideas Take Voice. And Vision Takes Shape.</span>
          <br />
          Nirgranth Creation is a dynamic content production studio built with passion,
          precision, and purpose. We bring stories, concepts, and cultures to life through
          sound, visuals, and technology that leave a lasting impact.
        </p>

        {/* What We Do */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-bold text-pink-600">What We Do Best</h3>
            <ul className="space-y-3 text-gray-700">
              <li>🎙️ Professional voice-overs (documentaries, ads, audiobooks, characters)</li>
              <li>🎧 High-quality audio recording & editing</li>
              <li>🎥 Video production – from scripting to final edits</li>
              <li>🎨 Graphic design & branding</li>
              <li>📜 Digitization & preservation of rare texts and archival material</li>
              <li>💻 Website & App Development</li>
              <li>📈 SEO Optimization & Meta Ads Campaigns</li>
              <li>🌐 End-to-end content solutions for creators, institutions & organizations</li>
            </ul>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/bg1.JPG"
              alt="Nirgranth Studio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "100+", label: "Audiobooks Recorded" },
            { value: "1000+", label: "Videos Produced" },
            { value: "200+", label: "Creative Projects Delivered" },
            { value: "500+", label: "Happy Clients" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-3xl font-bold text-pink-600">{item.value}</h4>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Why Nirgranth */}
        <div className="bg-pink-100 py-12 px-6 rounded-2xl shadow-lg mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6">
            Why Nirgranth?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left text-gray-700 max-w-4xl mx-auto">
            <p>🎚️ Studio-grade production quality</p>
            <p>💡 Creative minds + technical experts</p>
            <p>⏱ On-time delivery & consistent output</p>
            <p>🤝 Trusted by creators, educators, and cultural institutions</p>
          </div>
        </div>

        {/* Closing */}
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
          We don’t just create content — <span className="font-semibold text-pink-600">we craft experiences.</span>
          <br />
          Welcome to <span className="font-bold">Nirgranth Creation</span> — where every word matters,
          and every frame speaks.
        </p>
      </div>
    </section>
  );
}
