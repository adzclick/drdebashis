"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

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
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Glow */}
      <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold tracking-widest text-blue-700 uppercase">
            Patient Reviews
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            What Patients Say
          </h2>

          <p className="mt-4 text-slate-600">
            Real experiences from patients who trusted us with their care.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="group relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            animate={{
              x: paused ? undefined : ["0%", "-50%"],
            }}
            transition={{
              duration: 28, // average speed
              repeat: Infinity,
              ease: "linear",
            }}
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
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="group/card relative w-[420px] overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-8 backdrop-blur-xl"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100">
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Quote */}
      <motion.div
        animate={{
          rotate: [0, 6, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="mb-5 text-5xl text-blue-500"
      >
        "
      </motion.div>

      <p className="relative z-10 text-slate-600 leading-relaxed">
        {item.text}
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg">
          {item.name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">{item.name}</h4>
          <p className="text-sm text-slate-500">
            {item.role} • {item.location}
          </p>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover/card:border-blue-300" />
    </motion.div>
  );
}