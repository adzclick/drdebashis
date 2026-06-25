import React, { use, useState } from "react";
import {
  FaCalendarCheck,
  FaPhoneAlt,
  FaHome,
  FaBars,
  FaSignOutAlt,
  FaUserMd,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import logo from "./../assets/doctor.jpg";
import Swal from "sweetalert2";

const DashBoardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { userlogout } = use(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    userlogout().then(() => {
      Swal.fire({
        title: "Logout Successful",
        text: "You have logged out successfully",
        icon: "success",
        confirmButtonColor: "#ec4899",
        confirmButtonText: "OK",
      });

      navigate("/");
    });
  };

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 font-medium ${
      isActive
        ? "bg-white text-pink-600 shadow-lg"
        : "text-white hover:bg-white/10"
    }`;

return (
  <div className="min-h-screen bg-slate-100">

    {/* DESKTOP SIDEBAR */}
    <aside
      className="
      hidden lg:flex
      fixed
      left-0
      top-0
      h-screen
      w-80
      flex-col
      bg-gradient-to-b
      from-purple-900
      via-fuchsia-800
      to-pink-700
      shadow-2xl
      z-40
    "
    >
      {/* PROFILE */}
      <div className="p-6 border-b border-white/10">
        <div
          className="
          bg-white/10
          backdrop-blur-xl
          rounded-3xl
          p-5
          border
          border-white/10
        "
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className="
                w-16
                h-16
                rounded-2xl
                overflow-hidden
                border-2
                border-white/20
                shadow-lg
              "
              >
                <img
                  src={logo}
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </div>

              <span
                className="
                absolute
                -bottom-1
                -right-1
                w-4
                h-4
                bg-green-400
                rounded-full
                border-2
                border-slate-900
              "
              />
            </div>

            <div>
              <h2 className="text-white font-bold text-xl">
                Dr. Debashis Adhikary
              </h2>

              <p className="text-pink-100 text-sm flex items-center gap-2">
                <FaUserMd />
                Orthopedic Surgeon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3">
        <NavLink
          to="/DashBoardLayout/appointments"
          className={navItemClass}
        >
          <FaCalendarCheck />
          Appointment Details
        </NavLink>

        <NavLink
          to="/DashBoardLayout/contact"
          className={navItemClass}
        >
          <FaPhoneAlt />
          Contact Details
        </NavLink>

        <NavLink
          to="/"
          end
          className={navItemClass}
        >
          <FaHome />
          Back To Home
        </NavLink>
      </div>

      {/* LOGOUT */}
      <div className="mt-auto p-5 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          py-4
          rounded-2xl
          bg-red-500/20
          border
          border-red-300/20
          text-white
          font-semibold
          hover:bg-red-500/30
          transition-all
        "
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>

    {/* MOBILE SIDEBAR */}
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        sidebarOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/50 ${
          sidebarOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`absolute left-0 top-0 h-full w-72
        bg-gradient-to-b
        from-purple-900
        via-fuchsia-800
        to-pink-700
        transform transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-white/10">
          <h2 className="text-white font-bold text-xl">
            Doctor Dashboard
          </h2>
        </div>

        <div className="p-4 space-y-3">
          <NavLink
            to="/"
            end
            onClick={() => setSidebarOpen(false)}
            className={navItemClass}
          >
            <FaHome />
            Back To Home
          </NavLink>

          <NavLink
            to="/DashBoardLayout/appointments"
            onClick={() => setSidebarOpen(false)}
            className={navItemClass}
          >
            <FaCalendarCheck />
            Appointment Details
          </NavLink>

          <NavLink
            to="/DashBoardLayout/contact"
            onClick={() => setSidebarOpen(false)}
            className={navItemClass}
          >
            <FaPhoneAlt />
            Contact Details
          </NavLink>
        </div>

        <div className="p-4 mt-auto">
          <button
            onClick={handleLogout}
            className="
            w-full
            py-3
            rounded-xl
            bg-red-500/20
            text-white
            font-medium
          "
          >
            Logout
          </button>
        </div>
      </aside>
    </div>

    {/* MAIN CONTENT */}
    <main className="lg:ml-80 min-h-screen">
      {/* TOP HEADER */}
      <div
        className="
        h-20
        bg-gradient-to-r
        from-purple-900
        via-fuchsia-800
        to-pink-700
        flex
        items-center
        justify-between
        px-6
        shadow-lg
      "
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white text-xl"
          >
            <FaBars />
          </button>

          <h1 className="text-white font-bold text-xl">
            Doctor Dashboard
          </h1>
        </div>

        <div className="hidden md:block text-pink-100 text-sm">
          Medical Administration Panel
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="p-5 md:p-8">
        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          min-h-[calc(100vh-140px)]
          p-6
          md:p-8
        "
        >
          <Outlet />
        </div>
      </div>
    </main>

  </div>
);
};

export default DashBoardLayout;