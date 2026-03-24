"use client";

import { motion } from "framer-motion";

export default function TermsContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic mb-8 md:mb-12">
            Terms of <span className="text-[#FF5851]">Service</span>
          </h1>

          <div className="space-y-12 text-lg text-gray-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using Nirgranth Creations’ services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">2. Services & Execution</h2>
              <p>
                Nirgranth Creations provides creative services including Social Media Management, Video Editing, Recording, and Development. Project timelines and specific deliverables are outlined in individual project proposals and are subject to timely client feedback.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">3. Intellectual Property</h2>
              <p>
                Upon final payment, the rights to the creative work produced are transferred to the client. Nirgranth Creations retains the right to display the work in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) says otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">4. Payment Terms</h2>
              <p>
                Payments are due as per the schedule defined in your project invoice. Late payments may result in a temporary suspension of work. All prices are in INR unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">5. Governing Law</h2>
              <p>
                These terms are governed by the laws of India, specifically within the jurisdiction of Indore, Madhya Pradesh.
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
