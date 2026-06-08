import { use, useContext, useState } from "react";
import {
  Menu,
  X,
  CalendarDays,
  Home,
  Info,
  HeartPulse,
  Stethoscope,
  Star,
  CircleHelp,
  Phone,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { FaUserDoctor } from "react-icons/fa6";
import { AuthContext } from "../Context/AuthContext";
import logo2 from "../../src/assets/doctor.jpg";
import Swal from "sweetalert2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
const navigate=useNavigate()
  const { user, userlogout } = use(AuthContext);

 // LOGOUT FUNCTION
  const handleLogout = () => {

    userlogout()
      .then(() => {

        Swal.fire({
          title: 'Logout Successful',
          text: 'You have logged out successfully',
          icon: 'success',
          confirmButtonColor: '#16a34a',
          confirmButtonText: 'OK',
        });
        navigate('/')

        setOpen(false);

      })
      .catch((error) => {
        console.log(error);
      });

  };

  const navLinks = [
    { path: "/", name: "Home", icon: Home },
    { path: "/about", name: "About", icon: Info },
    { path: "/treatments", name: "Treatments", icon: HeartPulse },
    { path: "/services", name: "Services", icon: Stethoscope },
    { path: "/reviews", name: "Reviews", icon: Star },
    { path: "/testimonials", name: "FAQ", icon: CircleHelp },
    { path: "/contact", name: "Contact", icon: Phone },
  ];

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
      isActive
        ? "bg-white text-blue-700 shadow-lg"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-sky-700/90 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      <div className="relative max-w-[1600px] mx-auto px-4 lg:px-10">
        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-24">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/10 border border-white/20">
              <img
                src={logo2}
                alt="Doctor Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-white font-bold text-2xl">
                Dr. Debashis Adhikary
              </h2>
              <p className="text-blue-100 text-sm">
                Orthopedic & Joint Replacement Surgeon
              </p>
            </div>
          </NavLink>

          {/* Menu */}
          <nav className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navLinkClass}
                >
                  <Icon size={16} />
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="justify-self-end flex items-center gap-4">
            {user ? (
              <>
                <NavLink to="/DashBoardLayout/appointments">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white font-semibold shadow-xl hover:bg-white/40 transition-all">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </button>
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white font-semibold shadow-xl hover:bg-white/40 transition-all"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="group flex items-center gap-2 text-white font-medium"
                >
                  <FaUserDoctor />
                  <span className="relative">
                    Doctor Login
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </NavLink>

                <NavLink to="/appointment">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white font-semibold shadow-xl hover:bg-white/20 transition-all">
                    <CalendarDays size={18} />
                    Book Appointment
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden">
              <img
                src={logo2}
                alt="Doctor"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-white font-bold text-lg">
                Dr. Debashis
              </h2>
              <p className="text-blue-100 text-xs">
                Orthopedic Surgeon
              </p>
            </div>
          </NavLink>

          <button
            onClick={() => setOpen(!open)}
            className="p-3 rounded-xl bg-white/10 border border-white/20 text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl mb-1 ${
                        isActive
                          ? "bg-white text-blue-700"
                          : "text-white hover:bg-white/10"
                      }`
                    }
                  >
                    <Icon size={18} />
                    {link.name}
                  </NavLink>
                );
              })}

              {user ? (
                <>
                  <NavLink
                    to="/DashBoardLayout"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl"
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </NavLink>

                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-200 hover:bg-white/10 rounded-xl"
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
                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl"
                  >
                    <FaUserDoctor />
                    Doctor Login
                  </NavLink>

                  <NavLink
                    to="/appointment"
                    onClick={() => setOpen(false)}
                  >
                    <button className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
                      <CalendarDays size={18} />
                      Book Appointment
                    </button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;