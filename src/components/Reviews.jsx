"use client";

import { motion, useSpring } from "framer-motion";
import { useState } from "react";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Subrata Banerjee",
    role: "Knee Replacement Patient",
    location: "Salt Lake",
    text: "Dr. Adhikary performed my total knee replacement and the results exceeded my expectations.",
  },
  {
    name: "Mala Dey",
    role: "Hip Replacement Patient",
    location: "Tollygunge",
    text: "I was struggling with severe hip arthritis and could barely walk. Walking within days.",
  },
  {
    name: "Arjun Mukherjee",
    role: "Sports Injury Patient",
    location: "New Town",
    text: "ACL reconstruction was flawless. I returned to sports faster than expected.",
  },
  {
    name: "Priya Sengupta",
    role: "Patient Family",
    location: "EM Bypass",
    text: "Compassionate, patient and highly skilled. Exceptional care throughout.",
  },
];

export default function Reviews() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(135deg, #f8fdf4 0%, #EAF4E1 50%, #f0fae8 100%)" }}
    >
      {/* Background glows */}
      <div
        className="absolute left-1/4 top-10 h-72 w-72 rounded-full"
        style={{ background: "rgba(147,197,114,0.22)", filter: "blur(120px)" }}
      />
      <div
        className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full"
        style={{ background: "rgba(106,158,79,0.20)", filter: "blur(120px)" }}
      />

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-[3px] uppercase"
            style={{ background: "#EAF4E1", color: "#6A9E4F" }}
          >
            Patient Reviews
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900">
            What Patients Say
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            Real experiences from patients who trusted us with their care.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            animate={{ x: paused ? undefined : ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}


function TestimonialCard({ item }) {
  const rotateX = useSpring(0);
  const rotateY = useSpring(0);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rotateY.set((x - rect.width / 2) / 18);
    rotateX.set(-(y - rect.height / 2) / 18);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="group/card relative w-[420px] overflow-hidden rounded-[32px] bg-white p-8 shadow-xl hover:shadow-2xl transition-all"
      style={{ rotateX, rotateY, transformPerspective: 1000, border: "1px solid #C5E1AE" }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100">
        <div
          className="absolute -left-20 top-0 h-40 w-40 rounded-full blur-3xl"
          style={{ background: "rgba(147,197,114,0.22)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-40 w-40 rounded-full blur-3xl"
          style={{ background: "rgba(106,158,79,0.20)" }}
        />
      </div>

      {/* Quote mark */}
      <motion.div
        animate={{ rotate: [0, 6, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="mb-5 text-6xl font-bold"
        style={{ color: "#93C572" }}
      >
        "
      </motion.div>

      <p className="relative z-10 text-slate-600 leading-relaxed text-base">
        {item.text}
      </p>

      <div className="mt-8 flex items-center gap-4">
        {/* Avatar */}
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg"
          style={{ background: "linear-gradient(to right, #6A9E4F, #93C572)" }}
        >
          {item.name.charAt(0)}
        </div>

        <div>
          <h4 className="font-bold text-slate-900">{item.name}</h4>
          <p className="text-sm text-slate-500">{item.role} • {item.location}</p>
        </div>
      </div>

      {/* Animated border on hover */}
      <div
        className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover/card:border-[#93C572]"
      />
    </motion.div>
  );
}