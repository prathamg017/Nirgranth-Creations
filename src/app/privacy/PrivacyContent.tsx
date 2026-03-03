"use client";

import { motion } from "framer-motion";

export default function PrivacyContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-12">
            Privacy <span className="text-[#FF5851]">Policy</span>
          </h1>

          <div className="space-y-12 text-lg text-gray-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us through our contact forms, including your name, email address, and any project details you share. We also automatically collect certain information when you visit our website, such as your IP address and browsing behavior through cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">2. How We Use Your Information</h2>
              <p>
                Your information is used purely to provide and improve our services, including responding to your inquiries, processing transactions, and sending you relevant updates about our creative studio. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">4. Third-Party Services</h2>
              <p>
                We may use third-party tools (like Loom or Google Drive) to facilitate project delivery. These services have their own privacy policies, and we recommend reviewing them separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please reach out to us at <span className="text-[#FF5851]">nirgranthcreations.co@gmail.com</span>.
              </p>
            </section>
          </div>
          
          <p className="mt-20 text-sm text-gray-400 font-bold uppercase tracking-widest">
            Last Updated: March 2024 • Nirgranth Creations
          </p>
        </motion.div>
      </div>
    </main>
  );
}
