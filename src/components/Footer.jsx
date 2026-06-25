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
} from "react-icons/fa";

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
    "Joint Replacement",
    "Knee Surgery",
    "Hip Replacement",
    "Arthritis Care",
    "Sports Injuries",
    "Fracture Management",
    "Spine Care",
  ];

  return (
<footer className="bg-gradient-to-br from-black via-slate-950 to-purple-950 text-slate-300">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Doctor Info */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-5">
          Dr. Debashis <span className="text-purple-400">Adhikary</span>
        </h2>

        <p className="text-slate-400 leading-8 text-sm">
          Orthopedic & Joint Replacement Surgeon in Kolkata.
          Dedicated to restoring mobility and providing pain-free
          living through surgical excellence and compassionate care.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#"
            className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:-translate-y-1 hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:-translate-y-1 hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:-translate-y-1 hover:scale-110"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:-translate-y-1 hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
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
                    isActive
                      ? "text-purple-400 font-medium"
                      : "text-slate-300 hover:text-purple-400"
                  }`
                }
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Treatments */}
      <div>
        <h3 className="text-white text-xl font-semibold mb-6 uppercase">
          Treatments
        </h3>

        <ul className="space-y-4">
          {treatments.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer transition-all duration-300 hover:text-purple-400 hover:translate-x-2"
            >
              {item}
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
            <FaMapMarkerAlt className="text-purple-400 mt-1 text-lg" />
            <span className="leading-7">
              Medithics Clinic, 456 EM Bypass,
              Near Mukundapur, Kolkata – 700099
            </span>
          </li>

          <li className="flex items-center gap-3">
            <FaPhoneAlt className="text-purple-400" />
            <a
              href="tel:+919836012345"
              className="hover:text-purple-400 transition"
            >
              +91 98360 12345
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FaEnvelope className="text-purple-400" />
            <a
              href="mailto:dr.debashis.ortho@gmail.com"
              className="hover:text-purple-400 transition"
            >
              dr.debashis.ortho@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3">
            <FaClock className="text-purple-400" />
            <span>Mon – Sat : 10:00 AM – 7:00 PM</span>
          </li>
        </ul>
      </div>

    </div>
  </div>

  {/* Bottom Footer */}
  <div className="border-t border-purple-900/30">
    <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Dr. Debashis Adhikary.
      All Rights Reserved.
      <span className="text-purple-400">
        {" "} | Powered by ADZ CLICK MEDIA
      </span>
    </div>
  </div>
</footer>
  );
};

export default Footer;