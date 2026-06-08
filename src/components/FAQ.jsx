"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "What orthopedic treatments are available?",
      answer:
        "Dr. Adhikary offers a full range including joint replacement (knee, hip, shoulder), arthroscopy, sports injury management, fracture care, spine treatment, arthritis management, pediatric orthopedics, and general consultations — both surgical and non-surgical.",
    },
    {
      question: "Do you perform joint replacement surgery?",
      answer:
        "Yes. Dr. Adhikary specializes in total and partial knee replacement, total hip replacement, and shoulder replacement. He uses minimally invasive techniques for faster recovery, shorter hospital stay, and excellent long-term outcomes.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book via the appointment form on this page, call +91 98360 12345, WhatsApp at wa.me/919836012345, or email dr.debashis.ortho@gmail.com. We confirm appointments promptly and share all required details.",
    },
    {
      question: "What conditions do you treat?",
      answer:
        "Dr. Adhikary treats osteoarthritis, rheumatoid arthritis, bone fractures, ligament and tendon injuries, sports trauma, spinal disorders, disc problems, osteoporosis, and all musculoskeletal conditions affecting bones, joints, muscles, and connective tissue.",
    },
    {
      question: "Do you provide post-surgery care?",
      answer:
        "Absolutely. Post-operative care is integral to Dr. Adhikary's approach — including regular follow-ups, physiotherapy guidance, pain management protocols, wound monitoring, and long-term rehabilitation support for complete recovery.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Common questions about orthopedic treatments, consultations and
            recovery care.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                whileHover={{ y: -4 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl
                ${
                  isOpen
                    ? "border-blue-200 bg-white shadow-2xl"
                    : "border-slate-200 bg-white/70 shadow-lg"
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="relative flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-4 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-12 w-12 items-center justify-center rounded-full
                    ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Plus size={22} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="px-6 pb-6">
                        <div className="mb-5 h-px bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-transparent" />

                        <p className="leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active Border Effect */}
                {isOpen && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute inset-0 rounded-3xl border-2 border-blue-500/20"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}