import { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import {
  CalendarDays, Heart, ShieldCheck,
  Stethoscope, Award, ArrowRight,
} from "lucide-react";
import doctor from "./../../src/assets/doctor.jpg";
import { NavLink } from "react-router";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

/* ── COUNT UP ── */
const CountUp = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) { setCount(Math.floor(latest)); },
    });
    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 15,   suffix: "+", title: "Years Experience" },
  { value: 500,  suffix: "+", title: "Successful Surgeries" },
  { value: 1000, suffix: "+", title: "Happy Patients" },
  { value: 1,    suffix: "",  title: "Modern Surgical Expertise" },
];

const About = () => (
  <section className="relative overflow-hidden bg-white py-16 lg:py-32">

    {/* Background glows */}
    <div
      className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-60"
      style={{ background: "#EAF4E1", filter: "blur(120px)" }}
    />
    <div
      className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-60"
      style={{ background: "#C5E1AE", filter: "blur(120px)" }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div
            className="relative overflow-hidden rounded-[40px] shadow-2xl"
            style={{ border: "1px solid #C5E1AE" }}
          >
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
            className="absolute bottom-6 right-0 text-white rounded-3xl px-8 py-6 shadow-2xl"
            style={{ background: "linear-gradient(to right, #6A9E4F, #93C572)" }}
          >
            <h3 className="text-4xl font-black">15+</h3>
            <p className="text-sm font-medium">Years Experience</p>
          </motion.div>
        </motion.div>

        {/* ── CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-widest"
            style={{ background: "#EAF4E1", color: "#6A9E4F" }}
          >
            ABOUT THE DOCTOR
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-slate-900">
            Dr. Debashis Adhikary
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Orthopedic & Joint Replacement Surgeon specializing in knee, hip,
            shoulder surgeries and sports injuries using modern, evidence-based
            treatment techniques.
          </p>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Dedicated to delivering safe, advanced, and patient-focused orthopedic
            care trusted by thousands across West Bengal.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-5">
            {[
              { icon: Stethoscope, text: "Knee, Hip & Shoulder Specialist" },
              { icon: ShieldCheck, text: "Minimally Invasive Surgery Expert" },
              { icon: Award,       text: "Trusted Across West Bengal" },
              { icon: Heart,       text: "Patient-Centered Care" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "#EAF4E1" }}
                  >
                    <Icon size={20} style={{ color: "#6A9E4F" }} />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Button */}
          <NavLink to="/appointment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 rounded-2xl text-white font-semibold flex items-center gap-2 shadow-xl"
              style={{ background: "linear-gradient(to right, #6A9E4F, #93C572)" }}
            >
              <CalendarDays size={18} />
              Book a Consultation
              <ArrowRight size={18} />
            </motion.button>
          </NavLink>
        </motion.div>
      </div>

      {/* ── STATS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 lg:mt-24">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl"
            style={{ border: "1px solid #C5E1AE" }}
          >
            <h3
              className="text-3xl sm:text-4xl font-black bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #3D6B2C, #93C572)" }}
            >
              <CountUp value={item.value} suffix={item.suffix} />
            </h3>
            <p className="mt-2 text-sm text-slate-600 font-medium">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;