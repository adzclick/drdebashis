import { motion } from "framer-motion";
import {
  Award,
  Activity,
  ClipboardCheck,
  Building2,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15+ Years of Experience",
    desc: "Extensive expertise in orthopedic surgeries and trauma care.",
  },
  {
    icon: Activity,
    title: "Advanced Surgical Techniques",
    desc: "Minimally invasive procedures ensuring faster recovery.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized Treatment Plans",
    desc: "Customized care plans designed for every patient individually.",
  },
  {
    icon: Building2,
    title: "Modern Medical Setup",
    desc: "Equipped with advanced diagnostic and surgical systems.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    desc: "Compassionate treatment focused on long-term wellbeing.",
  },
  {
    icon: BadgeCheck,
    title: "High Success Rate",
    desc: "Trusted results with thousands of successful treatments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-cyan-400/10 to-transparent">

      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-300/20 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="px-4 py-2 text-xs uppercase tracking-[3px] bg-cyan-500/10 text-cyan-700 rounded-full">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Why Choose Dr. Debashis Adhikary
          </h2>

          <p className="mt-4 text-slate-600">
            Premium orthopedic care with trust, precision, and excellence.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-200/40" />

          <div className="space-y-16">

            {features.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >

                  {/* DOT */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                  {/* CARD */}
                  <div
                    className={`group w-[45%] p-6 rounded-3xl
                    bg-white/70 backdrop-blur-xl
                    border border-white/40
                    shadow-lg hover:shadow-cyan-200/40
                    transition-all duration-500
                    ${isLeft ? "mr-auto text-right" : "ml-auto text-left"}`}
                  >

                    {/* ICON */}
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-2xl
                      bg-gradient-to-br from-cyan-500 to-blue-600 text-white
                      mb-4 transition group-hover:rotate-6
                      ${isLeft ? "ml-auto" : "mr-auto"}`}
                    >
                      <Icon size={20} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-2 text-sm text-slate-600">
                      {item.desc}
                    </p>

                    {/* LINE */}
                    <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-20 transition-all duration-500" />
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}