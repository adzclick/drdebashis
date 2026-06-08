import { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import {
  CalendarDays,
  Heart,
  ShieldCheck,
  Stethoscope,
  Award,
  ArrowRight,
} from "lucide-react";

import doctor from "./../../src/assets/doctor.jpg";
import { NavLink } from "react-router";

/* ================= COUNT UP FIXED ================= */
const CountUp = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ================= STATS DATA ================= */
const stats = [
  { value: 15, suffix: "+", title: "Years Experience" },
  { value: 500, suffix: "+", title: "Successful Surgeries" },
  { value: 1000, suffix: "+", title: "Happy Patients" },
  { value: 1, suffix: "", title: "Modern Surgical Expertise" },
];

/* ================= COMPONENT ================= */
const About = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-32">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100 rounded-full blur-[120px] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl sm:rounded-[40px] shadow-2xl border border-slate-100">

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={doctor}
                alt="Doctor"
                className="w-full h-[380px] sm:h-[500px] lg:h-[650px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="
                absolute bottom-4 sm:bottom-8 -right-3 sm:-right-5
                bg-gradient-to-br from-blue-600 to-blue-700
                text-white rounded-2xl sm:rounded-3xl
                px-4 sm:px-8 py-4 sm:py-6
                shadow-2xl
              "
            >
              <h3 className="text-2xl sm:text-4xl font-black">
                15+
              </h3>
              <p className="text-xs sm:text-sm font-medium">
                Years Experience
              </p>
            </motion.div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-bold tracking-widest">
              ABOUT THE DOCTOR
            </span>

            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Dr. Debashis Adhikary
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed">
              Orthopedic & Joint Replacement Surgeon specializing in knee, hip,
              shoulder surgeries and sports injuries with modern techniques.
            </p>

            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed">
              Trusted by thousands of patients with safe, advanced surgical care.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">

              {[
                { icon: Stethoscope, text: "Knee, Hip & Shoulder Specialist" },
                { icon: ShieldCheck, text: "Minimally Invasive Surgery Expert" },
                { icon: Award, text: "Trusted Across West Bengal" },
                { icon: Heart, text: "Patient-Centered Care" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center">
                      <Icon size={18} className="text-blue-600" />
                    </div>

                    <span className="text-sm sm:text-base text-slate-700 font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* BUTTON */}
            <NavLink to="/appointment">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  mt-8 sm:mt-10
                  px-6 sm:px-8 py-3 sm:py-4
                  rounded-2xl
                  bg-gradient-to-r from-blue-600 to-blue-700
                  text-white font-semibold
                  flex items-center gap-2
                  shadow-xl
                "
              >
                <CalendarDays size={18} />
                Book a Consultation
                <ArrowRight size={18} />
              </motion.button>
            </NavLink>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}
        <div className="
          grid grid-cols-2 lg:grid-cols-4
          gap-3 sm:gap-6
          mt-12 sm:mt-24
        ">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                bg-white
                rounded-2xl sm:rounded-3xl
                border border-slate-100
                p-4 sm:p-8
                text-center
                shadow-md hover:shadow-xl
              "
            >
              <h3 className="text-2xl sm:text-4xl font-black text-blue-700">
                <CountUp value={item.value} suffix={item.suffix} />
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;