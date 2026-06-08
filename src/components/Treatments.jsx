import { motion } from "framer-motion";
import {
  Bone,
  Activity,
  HeartPulse,
  Dumbbell,
  ShieldPlus,
  Stethoscope,
  UserRound,
  Accessibility,
} from "lucide-react";

const services = [
  {
    title: "Joint Replacement Surgery",
    description: "Advanced knee, hip and shoulder replacement procedures.",
    icon: Bone,
  },
  {
    title: "Knee Pain Treatment",
    description: "Complete diagnosis and treatment for knee conditions.",
    icon: Activity,
  },
  {
    title: "Hip Replacement",
    description: "Modern hip replacement with faster recovery.",
    icon: Accessibility,
  },
  {
    title: "Arthritis Treatment",
    description: "Personalized arthritis management solutions.",
    icon: HeartPulse,
  },
  {
    title: "Sports Injury Treatment",
    description: "Treatment for ligament and tendon injuries.",
    icon: Dumbbell,
  },
  {
    title: "Fracture Management",
    description: "Advanced fracture fixation and healing care.",
    icon: ShieldPlus,
  },
  {
    title: "Spine & Back Pain Care",
    description: "Comprehensive spine and back pain treatment.",
    icon: Stethoscope,
  },
  {
    title: "Orthopedic Consultation",
    description: "Expert orthopedic assessment and guidance.",
    icon: UserRound,
  },
];

const Treatments = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            SPECIALIZATIONS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Treatments & Procedures
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Comprehensive orthopedic care using advanced technology and
            minimally invasive treatment techniques.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:border-blue-200 hover:shadow-blue-100"
              >
                {/* Glow Effect */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Bottom Line Animation */}
                <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-16" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treatments;