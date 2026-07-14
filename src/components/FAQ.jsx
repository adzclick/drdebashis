"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What orthopedic treatments are available?",
    answer: "Dr. Adhikary offers a full range including joint replacement (knee, hip, shoulder), arthroscopy, sports injury management, fracture care, spine treatment, arthritis management, pediatric orthopedics, and general consultations.",
  },
  {
    question: "Do you perform joint replacement surgery?",
    answer: "Yes. Dr. Adhikary specializes in total and partial knee replacement, total hip replacement, and shoulder replacement using advanced minimally invasive techniques.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book through the appointment page, call directly, WhatsApp, or email. Our team confirms appointments promptly.",
  },
  {
    question: "What conditions do you treat?",
    answer: "We treat arthritis, fractures, sports injuries, ligament tears, spinal disorders, osteoporosis, and a wide range of musculoskeletal conditions.",
  },
  {
    question: "Do you provide post-surgery care?",
    answer: "Absolutely. Follow-up care includes physiotherapy guidance, rehabilitation planning, pain management, and long-term recovery monitoring.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(135deg, #f8fdf4 0%, #EAF4E1 50%, #f0fae8 100%)" }}
    >
      {/* Background glows */}
      <div
        className="absolute left-0 top-0 h-96 w-96 rounded-full"
        style={{ background: "rgba(147,197,114,0.13)", filter: "blur(120px)" }}
      />
      <div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full"
        style={{ background: "rgba(106,158,79,0.13)", filter: "blur(120px)" }}
      />

      <div className="relative mx-auto max-w-4xl px-4">

        {/* Header */}
        <div className="mb-14 text-center">
          <span
            className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ background: "#EAF4E1", color: "#6A9E4F" }}
          >
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Common questions about orthopedic treatments, consultations and recovery care.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl backdrop-blur-xl"
                style={{
                  background: "#fff",
                  border: isOpen ? "1px solid #93C572" : "1px solid #e2e8f0",
                  boxShadow: isOpen
                    ? "0 20px 60px rgba(147,197,114,0.18)"
                    : "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div
                    className="absolute -left-10 top-0 h-32 w-32 rounded-full blur-3xl"
                    style={{ background: "rgba(147,197,114,0.15)" }}
                  />
                  <div
                    className="absolute right-0 bottom-0 h-32 w-32 rounded-full blur-3xl"
                    style={{ background: "rgba(106,158,79,0.15)" }}
                  />
                </div>

                {/* Question button */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="relative flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-4 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full shrink-0"
                    style={
                      isOpen
                        ? { background: "linear-gradient(to right, #6A9E4F, #93C572)", color: "#fff" }
                        : { background: "#EAF4E1", color: "#6A9E4F" }
                    }
                  >
                    <Plus size={22} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="px-6 pb-6">
                        <div
                          className="mb-5 h-px"
                          style={{ background: "linear-gradient(to right, rgba(106,158,79,0.35), rgba(147,197,114,0.35), transparent)" }}
                        />
                        <p className="leading-7 text-slate-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active border ring */}
                {isOpen && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute inset-0 rounded-3xl"
                    style={{ border: "2px solid rgba(147,197,114,0.30)" }}
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