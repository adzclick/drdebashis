import { use, useState } from "react";
import {
  Menu,
  X,
  CalendarDays,
  Home,
  Info,
  HeartPulse,
  Stethoscope,
  Phone,
  LayoutDashboard,
  LogOut,
  Album,
  ChevronDown,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router";
import { FaUserDoctor } from "react-icons/fa6";
import { AuthContext } from "../Context/AuthContext";
import logo2 from "../../src/assets/doctor.jpg";
import Swal from "sweetalert2";

const pistaGradient =
  "linear-gradient(to right,#6A9E4F,#93C572)";

const treatmentLinks = [
  { name: "Joint Replacement Surgery", path: "/treatments/joint-replacement" },
  { name: "Knee Pain Treatment", path: "/treatments/knee-pain" },
  { name: "Hip Replacement", path: "/treatments/hip-replacement" },
  { name: "Arthritis Treatment", path: "/treatments/arthritis" },
  { name: "Sports Injury Treatment", path: "/treatments/sports-injury" },
  { name: "Fracture Management", path: "/treatments/fracture" },
  { name: "Spine & Back Pain", path: "/treatments/spine" },
  { name: "Orthopedic Consultation", path: "/treatments/consultation" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  const navigate = useNavigate();

  const { user, userlogout } = use(AuthContext);

  const handleLogout = () => {
    userlogout()
      .then(() => {
        Swal.fire({
          title: "Logout Successful",
          text: "You have logged out successfully",
          icon: "success",
          confirmButtonColor: "#6A9E4F",
        });

        navigate("/");
        setOpen(false);
      })
      .catch(console.log);
  };

  const navLinks = [
    {
      path: "/",
      name: "Home",
      icon: Home,
    },
    {
      path: "/about",
      name: "About",
      icon: Info,
    },
    {
      path: "/treatments",
      name: "Treatments",
      icon: HeartPulse,
    },
    {
      path: "/services",
      name: "Services",
      icon: Stethoscope,
    },
    {
      path: "/Blogs",
      name: "Blog",
      icon: Album,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: Phone,
    },
  ];

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
      isActive
        ? "text-white shadow-lg"
        : "text-slate-700 hover:text-[#6A9E4F]"
    }`;

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? { background: pistaGradient }
      : undefined;

  return (
    <header className="sticky top-0 z-50 w-full py-4 bg-transparent">

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        <div
          className="bg-white/95 backdrop-blur-xl rounded-[32px] px-6 lg:px-8"
          style={{
            border: "1px solid #C5E1AE",
            boxShadow:
              "0 10px 40px rgba(106,158,79,.20)",
          }}
        >

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center h-24 gap-4">

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 min-w-0">
              <div
                className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg shrink-0"
                style={{ border: "1px solid #C5E1AE" }}
              >
                <img src={logo2} alt="Doctor" className="w-full h-full object-cover" />
              </div>

              <div className="min-w-0">
                <h2 className="text-xl xl:text-2xl font-bold text-slate-900 truncate">
                  Dr. Debashis Adhikary
                </h2>
                <p
                  className="text-xs xl:text-sm font-medium truncate"
                  style={{ color: "#6A9E4F" }}
                >
                  Orthopedic & Joint Replacement Surgeon
                </p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="flex items-center justify-center gap-0.5 xl:gap-2">
              {navLinks.map((link) => {
                if (link.name === "Treatments") {
                  return (
                    <div key={link.path} className="relative group">
                      <button className="flex items-center gap-1.5 px-2.5 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-medium text-slate-700 hover:text-[#6A9E4F] transition-all duration-300 whitespace-nowrap">
                        <HeartPulse size={16} />
                        Treatments
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      </button>

                      {/*
                        Mega Dropdown wrapper.
                        This outer wrapper sits flush against the trigger
                        (top-full, no margin) and uses `pt-5` (padding) instead of `mt-5`
                        (margin) to create the visual gap. Padding is still "inside" the
                        element, so the hoverable/group area is continuous all the way
                        from the button down to the visible card below — there's no dead
                        zone for the mouse to cross.
                      */}
                      <div
                        className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        top-full
                        pt-5
                        w-[560px]
                        max-w-[90vw]
                        opacity-0
                        invisible
                        pointer-events-none
                        group-hover:visible
                        group-hover:opacity-100
                        group-hover:pointer-events-auto
                        transition-all
                        duration-300
                        z-[60]
                        "
                      >
                        <div
                          className="
                          max-h-[75vh]
                          bg-white
                          rounded-3xl
                          shadow-2xl
                          border
                          border-[#C5E1AE]
                          overflow-hidden
                          flex
                          flex-col
                          "
                        >
                          <div
                            className="px-6 py-5 text-white shrink-0"
                            style={{ background: "linear-gradient(to right,#6A9E4F,#93C572)" }}
                          >
                            <h3 className="text-xl font-bold">Orthopedic Treatments</h3>
                            <p className="text-sm text-white/90 mt-1">
                              Choose a treatment to know more.
                            </p>
                          </div>

                          <div className="p-3 overflow-y-auto grid grid-cols-2 gap-2">
                            {treatmentLinks.map((item, index) => (
                              <NavLink
                                key={item.path}
                                to={item.path}
                                className="flex items-center gap-3 rounded-2xl p-3 hover:bg-[#EAF4E1] transition-all duration-300"
                              >
                                <div
                                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow shrink-0"
                                  style={{ background: "linear-gradient(to right,#6A9E4F,#93C572)" }}
                                >
                                  {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-slate-800 text-sm leading-snug truncate">
                                    {item.name}
                                  </h4>
                                  <p className="text-xs text-slate-500 mt-0.5">Click to view</p>
                                </div>
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={navLinkClass}
                    style={navLinkStyle}
                  >
                    <Icon size={16} />
                    <span className="hidden xl:inline">{link.name}</span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="justify-self-end flex items-center gap-2 xl:gap-4">
              {user ? (
                <>
                  <NavLink to="/DashBoardLayout/appointments">
                    <button
                      className="flex items-center gap-2 px-3 xl:px-5 py-2.5 xl:py-3 rounded-2xl text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                      style={{ background: pistaGradient }}
                    >
                      <LayoutDashboard size={18} />
                      <span className="hidden xl:inline">Dashboard</span>
                    </button>
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 xl:px-5 py-2.5 xl:py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all duration-300 whitespace-nowrap"
                  >
                    <LogOut size={18} />
                    <span className="hidden xl:inline">Logout</span>
                  </button>
                </>
              ) : (
                <NavLink to="/appointment">
                  <button
                    className="flex items-center gap-2 px-4 xl:px-6 py-2.5 xl:py-3 rounded-2xl text-white text-sm font-semibold shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                    style={{ background: pistaGradient }}
                  >
                    <CalendarDays size={18} />
                    <span className="hidden xl:inline">Book Appointment</span>
                  </button>
                </NavLink>
              )}
            </div>
          </div>
          {/* ---------- Mobile Header Starts ---------- */}

          <div className="lg:hidden flex items-center justify-between h-20">

            <NavLink
              to="/"
              className="flex items-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-xl overflow-hidden"
                style={{
                  border: "1px solid #C5E1AE",
                }}
              >
                <img
                  src={logo2}
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-bold text-lg text-slate-900">
                  Dr. Debashis
                </h2>

                <p
                  className="text-xs"
                  style={{ color: "#6A9E4F" }}
                >
                  Orthopedic Surgeon
                </p>
              </div>
            </NavLink>

            <button
              onClick={() => setOpen(!open)}
              className="p-3 rounded-xl text-white shadow-lg"
              style={{ background: pistaGradient }}
            >
              {open ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>
          {/* ================= Mobile Menu ================= */}

          {open && (
            <div className="lg:hidden pb-5">

              <div
                className="bg-white rounded-3xl p-4 shadow-2xl mt-4"
                style={{
                  border: "1px solid #C5E1AE",
                }}
              >

                {/* Normal Links */}

                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 hover:bg-[#EAF4E1]"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? { background: pistaGradient }
                      : undefined
                  }
                >
                  <Home size={18} />
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 hover:bg-[#EAF4E1]"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? { background: pistaGradient }
                      : undefined
                  }
                >
                  <Info size={18} />
                  About
                </NavLink>

                {/* ================= Treatments (collapsible accordion) ================= */}

                <div className="mt-2 rounded-2xl border border-[#C5E1AE] overflow-hidden">

                  {/*
                    Accordion header — toggles `mobileTreatmentsOpen`.
                    Was previously a static div that always showed the full
                    8-item list, taking up a lot of vertical space on small
                    screens. Now it's a button that expands/collapses the list,
                    with the chevron rotating to indicate state.
                  */}
                  <button
                    type="button"
                    onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
                    aria-expanded={mobileTreatmentsOpen}
                    className="w-full px-4 py-3 text-white flex items-center justify-between gap-2"
                    style={{
                      background:
                        "linear-gradient(to right,#6A9E4F,#93C572)",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <HeartPulse size={18} />
                      <span className="font-semibold">Treatments</span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileTreatmentsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileTreatmentsOpen && (
                    <div className="bg-white">

                      {treatmentLinks.map((item, index) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                            setOpen(false);
                            setMobileTreatmentsOpen(false);
                          }}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-[#EAF4E1] transition"
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0"
                            style={{
                              background:
                                "linear-gradient(to right,#6A9E4F,#93C572)",
                            }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <span className="text-sm font-medium text-slate-700">
                            {item.name}
                          </span>
                        </NavLink>
                      ))}

                    </div>
                  )}

                </div>

                {/* Services */}

                <NavLink
                  to="/services"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `mt-3 flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 hover:bg-[#EAF4E1]"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? { background: pistaGradient }
                      : undefined
                  }
                >
                  <Stethoscope size={18} />
                  Services
                </NavLink>

                {/* Blog */}

                <NavLink
                  to="/Blogs"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 hover:bg-[#EAF4E1]"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? { background: pistaGradient }
                      : undefined
                  }
                >
                  <Album size={18} />
                  Blog
                </NavLink>

                {/* Contact */}

                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "text-white"
                        : "text-slate-700 hover:bg-[#EAF4E1]"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? { background: pistaGradient }
                      : undefined
                  }
                >
                  <Phone size={18} />
                  Contact
                </NavLink>
                {/* ================= Bottom Action Buttons ================= */}

                <div className="mt-5 border-t border-[#C5E1AE] pt-5">

                  {user ? (
                    <>
                      <NavLink
                        to="/DashBoardLayout/appointments"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold shadow-lg mb-3"
                        style={{
                          background:
                            "linear-gradient(to right,#6A9E4F,#93C572)",
                        }}
                      >
                        <LayoutDashboard size={18} />
                        Dashboard
                      </NavLink>

                      <button
                        onClick={() => {
                          handleLogout();
                          setOpen(false);
                        }}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/login"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#C5E1AE] text-slate-700 hover:bg-[#EAF4E1] transition mb-3"
                      >
                        <FaUserDoctor />
                        Doctor Login
                      </NavLink>

                      <NavLink
                        to="/appointment"
                        onClick={() => setOpen(false)}
                      >
                        <button
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold shadow-lg hover:scale-[1.02] transition-all"
                          style={{
                            background:
                              "linear-gradient(to right,#6A9E4F,#93C572)",
                          }}
                        >
                          <CalendarDays size={18} />
                          Book Appointment
                        </button>
                      </NavLink>
                    </>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navbar;