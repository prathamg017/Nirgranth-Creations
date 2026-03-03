"use client";

import { motion } from "framer-motion";

export default function RefundContent() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-12">
            Refund <span className="text-[#FF5851]">& Cancellation</span>
          </h1>

          <div className="space-y-12 text-lg text-gray-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">1. Project Cancellation</h2>
              <p>
                Clients may cancel a project at any time. However, any work completed up to the point of cancellation will be billed, and the initial deposit (retainer fee) is non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">2. Refund Eligibility</h2>
              <p>
                Due to the customized nature of creative services (Design, SMM, Recording, Development), refunds are generally not provided once work has commenced. If you are dissatisfied with the direction, we offer revisions as specified in your service package.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">3. Subscription Services</h2>
              <p>
                For recurring services (like monthly SMM plans), cancellation must be requested at least 15 days before the next billing cycle. No refunds are provided for partially used months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">4. Dispute Resolution</h2>
              <p>
                We believe in extreme transparency. If there is a dispute regarding quality or delivery, we will work with you to find a creative solution or professional adjustment before any formal escalation.
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
