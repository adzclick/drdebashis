import React from "react";
import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaHospital,
} from "react-icons/fa";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Doctor", path: "/about" },
    { name: "Treatments", path: "/treatments" },
    { name: "Why Choose Us", path: "/services" },
    { name: "Patient Reviews", path: "/reviews" },
    { name: "FAQ", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

const treatments = [
  {
    name: "Joint Replacement Surgery",
    slug: "joint-replacement",
  },
  {
    name: "Knee Pain Treatment",
    slug: "knee-pain",
  },
  {
    name: "Hip Replacement",
    slug: "hip-replacement",
  },
  {
    name: "Arthritis Treatment",
    slug: "arthritis",
  },
  {
    name: "Sports Injury Treatment",
    slug: "sports-injury",
  },
  {
    name: "Fracture Management",
    slug: "fracture",
  },
  {
    name: "Spine & Back Pain Care",
    slug: "spine",
  },
];
  const chambers = [
    {
      name: "Drs Ghosh & Adhikary Diagnostics",
      days: "Monday, Wednesday, Thursday, Sunday",
      timing: "12:30 PM – 3:30 PM & 7:00 PM – 8:30 PM",
      note: "Sunday: no evening OPD",
    },
    {
      name: "Medithics",
      days: "Monday, Wednesday, Thursday, Friday",
      timing: "10:30 AM – 12:00 PM",
    },
    {
      name: "Manipal EM Bypass",
      days: "Wednesday",
      timing: "5:00 PM – 7:30 PM",
    },
    {
      name: "Apollo Clinic Bashdroni",
      days: "Sunday",
      timing: "4:00 PM – 7:30 PM",
      
    },
  ];

  return (
    <footer
      className="text-slate-300"
      style={{ background: "linear-gradient(to bottom right, #000000, #0f172a, #1a2e12)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Doctor Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">
              Dr. Debashis <span style={{ color: "#93C572" }}>Adhikary</span>
            </h2>

            <p className="text-slate-400 leading-8 text-sm">
              Orthopedic & Joint Replacement Surgeon in Kolkata.
              Dedicated to restoring mobility and providing pain-free
              living through surgical excellence and compassionate care.
            </p>

          
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 uppercase">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `group relative inline-block transition-all duration-300 ${
                        isActive ? "font-medium" : "text-slate-300"
                      }`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? "#93C572" : undefined,
                    })}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#93C572")}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.classList.contains("active")) {
                        e.currentTarget.style.color = "";
                      }
                    }}
                  >
                    {item.name}
                    <span
                      className="absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                      style={{ background: "#93C572" }}
                    ></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          {/* Treatments */}
<div>
  <h3 className="text-white text-xl font-semibold mb-6 uppercase">
    Treatments
  </h3>

  <ul className="space-y-4">
    {treatments.map((item, index) => (
      <li key={index}>
        <NavLink
  to={`/treatments/${item.slug}`}
  className="inline-block cursor-pointer transition-all duration-300 hover:translate-x-2 text-slate-300"
  onMouseEnter={(e) => (e.currentTarget.style.color = "#93C572")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
>
  {item.name}
</NavLink>
      </li>
    ))}
  </ul>
</div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 uppercase">
              Contact
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={49} className="mt-1 mr-3 text-lg" style={{ color: "#93C572" }} />
                <span className="leading-7">
                  Office No. 102, First Floor, Merlin Legend, 3 Harish Mukherjee Road, Bhawanipur, Kolkata – 700020 (Opposite Balwant Singh Dhaba)
                </span>
              </li>

              <li className="flex items-center gap-3">
  <FaPhoneAlt style={{ color: "#93C572" }} />

  <a
    href="tel:+9147395588"
    className="transition hover:text-[#93C572]"
  >
    +919147395588
  </a>
</li>
<li className="flex items-center gap-3">
  <FaEnvelope style={{ color: "#93C572" }} />

  <a
    href="mailto:dr.debashis.ortho@gmail.com"
    className="transition hover:text-[#93C572]"
  >
    dr.debashis.ortho@gmail.com
  </a>
</li>

              <li className="flex items-center gap-3">
                <FaClock style={{ color: "#93C572" }} />
                <span>Mon – Sat : 10:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Chamber Timings */}
        <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(106,158,79,0.3)" }}>
          <h3 className="text-white text-xl font-semibold mb-8 uppercase text-center">
            Chamber Timings
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chambers.map((chamber, index) => (
              <div
                key={index}
                className="rounded-2xl p-5 bg-white/5 border transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "rgba(197,225,174,0.25)" }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <FaHospital className="mt-1 flex-shrink-0" style={{ color: "#93C572" }} />
                  <h4 className="text-white font-semibold leading-snug">
                    {chamber.name}
                  </h4>
                </div>

                <p className="text-sm text-slate-400 mb-1">{chamber.days}</p>
                <p className="text-sm mb-1" style={{ color: "#93C572" }}>
                  {chamber.timing}
                </p>

                {chamber.note && (
                  <p className="text-xs text-slate-500 italic mt-2">{chamber.note}</p>
                )}

                {chamber.address && (
                  <p className="text-xs text-slate-400 mt-3 leading-6 border-t pt-3" style={{ borderColor: "rgba(197,225,174,0.15)" }}>
                    {chamber.address}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ borderTop: "1px solid rgba(106,158,79,0.3)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Dr. Debashis Adhikary.
          All Rights Reserved.
          <span style={{ color: "#93C572" }}>
            {" "} | Powered by ADZ CLICK MEDIA
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  