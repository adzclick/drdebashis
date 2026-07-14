import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { treatments } from "./treatmentsData";
// import { treatments } from "../data/treatmentsData"; // adjust path to match your project

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const Treatments = () => (
  <section
    className="relative overflow-hidden py-16 sm:py-20 md:py-24"
    style={{ background: "linear-gradient(135deg, #f8fdf4 0%, #EAF4E1 50%, #f0fae8 100%)" }}
  >
    {/* Background glows */}
    <div
      className="absolute top-0 left-0 w-96 h-96 rounded-full"
      style={{ background: "rgba(147,197,114,0.12)", filter: "blur(120px)" }}
    />
    <div
      className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
      style={{ background: "rgba(106,158,79,0.12)", filter: "blur(120px)" }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <div className="text-center mb-14 sm:mb-16 md:mb-20">
        <span
          className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide"
          style={{ background: "#EAF4E1", color: "#6A9E4F" }}
        >
          SPECIALIZATIONS
        </span>

        <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
          Treatments & Procedures
        </h2>

        <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
          Comprehensive orthopedic care with advanced technology,
          minimally invasive surgery and patient-focused treatment.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {treatments.map((treatment, index) => (
          <motion.div
            key={treatment.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[28px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            style={{ border: "1px solid #C5E1AE" }}
          >
            {/* Real image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <img
                src={treatment.image}
                alt={treatment.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {treatment.name}
              </h3>

              <p className="mt-2.5 text-slate-600 leading-6 sm:leading-7 text-sm">
                {treatment.shortDescription}
              </p>

              <Link
                to={`/treatments/${treatment.slug}`}
                className="mt-5 flex items-center gap-2 text-sm font-semibold w-fit"
                style={{ color: "#3D6B2C" }}
              >
                Learn More
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Treatments;