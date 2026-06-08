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
  const navLinkStyle = ({ isActive }) =>
    `group relative inline-block transition-all duration-300 ${
      isActive
        ? "text-blue-400 font-medium"
        : "text-gray-300 hover:text-blue-400"
    }`;

  return (
    <footer className="bg-[#041B38] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Doctor Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">
              Dr. Debashis{" "}
              <span className="text-blue-400">Adhikary</span>
            </h2>

            <p className="text-gray-400 leading-8 text-sm">
              Orthopedic & Joint Replacement Surgeon in Kolkata.
              Dedicated to restoring mobility and providing
              pain-free living through surgical excellence and
              compassionate care at Medithics Clinic.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#102A4D] flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#102A4D] flex items-center justify-center transition-all duration-300 hover:bg-pink-500 hover:-translate-y-1 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#102A4D] flex items-center justify-center transition-all duration-300 hover:bg-sky-600 hover:-translate-y-1 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#102A4D] flex items-center justify-center transition-all duration-300 hover:bg-green-500 hover:-translate-y-1 hover:scale-110"
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
              <li>
                <NavLink to="/" className={navLinkStyle}>
                  Home
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLinkStyle}>
                  About Doctor
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/treatments" className={navLinkStyle}>
                  Treatments
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/services" className={navLinkStyle}>
                  Why Choose Us
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/reviews" className={navLinkStyle}>
                  Patient Reviews
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/testimonials" className={navLinkStyle}>
                  FAQ
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkStyle}>
                  Contact
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 uppercase">
              Treatments
            </h3>

            <ul className="space-y-4 text-gray-300">
              {[
                "Joint Replacement",
                "Knee Surgery",
                "Hip Replacement",
                "Arthritis Care",
                "Sports Injuries",
                "Fracture Management",
                "Spine Care",
              ].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:text-blue-400 hover:translate-x-2"
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
                <FaMapMarkerAlt className="text-blue-400 mt-1 text-lg" />
                <span className="leading-7">
                  Medithics Clinic, 456 EM Bypass,
                  Near Mukundapur, Kolkata – 700099
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <a
                  href="tel:+919836012345"
                  className="hover:text-blue-400 transition"
                >
                  +91 98360 12345
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:dr.debashis.ortho@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  dr.debashis.ortho@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaClock className="text-blue-400" />
                <span>Mon–Sat: 10 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} Dr.
          Debashis Adhikary | All Rights Reserved |
          Powered by JAY CHANDRA DAS
        </div>
      </div>
    </footer>
  );
};

export default Footer;