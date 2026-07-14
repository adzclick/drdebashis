import { use, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUserMd,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { userLogin } = use(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back Doctor",
          icon: "success",
          confirmButtonText: "Continue",
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);

        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-[32px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div
          className="hidden lg:flex flex-col justify-center p-12 relative overflow-hidden"
          style={{ background: "linear-gradient(to bottom right, #3D6B2C, #1a2e12, #000000)" }}
        >

          <div
            className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl"
            style={{ background: "rgba(147,197,114,0.2)" }}
          ></div>

          <div
            className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl"
            style={{ background: "rgba(106,158,79,0.2)" }}
          ></div>

          <div className="relative z-10">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10"
              style={{ color: "#C5E1AE" }}
            >
              <FaShieldAlt />
              Secure Medical Portal
            </span>

            <h1 className="mt-8 text-5xl font-bold text-white leading-tight">
              Welcome Back,
              <br />
              <span style={{ color: "#93C572" }}>Doctor</span>
            </h1>

            <p className="mt-6 text-slate-200 text-lg leading-relaxed">
              Access appointments, patient records, reports,
              prescriptions and your complete healthcare
              dashboard securely.
            </p>

            <div className="mt-12 space-y-5">
              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5"
                style={{ border: "1px solid rgba(147,197,114,0.2)" }}
              >
                <h3 className="text-white font-semibold text-lg">
                  Patient Management
                </h3>

                <p className="text-slate-300 mt-2 text-sm">
                  View and manage patient records efficiently.
                </p>
              </div>

              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5"
                style={{ border: "1px solid rgba(147,197,114,0.2)" }}
              >
                <h3 className="text-white font-semibold text-lg">
                  Appointment Scheduling
                </h3>

                <p className="text-slate-300 mt-2 text-sm">
                  Track and manage all appointments in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-8 md:p-14">
          <div className="w-full max-w-md">

            {/* LOGO */}
            <div className="flex justify-center">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(to right, #6A9E4F, #93C572)" }}
              >
                <FaUserMd className="text-white text-4xl" />
              </div>
            </div>

            <h2 className="mt-8 text-center text-4xl font-bold text-slate-800">
              Doctor Login
            </h2>

            <p className="mt-3 text-center text-slate-500">
              Login to access your secure dashboard
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-5"
            >
              {/* EMAIL */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type="email"
                    placeholder="doctor@example.com"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 outline-none transition"
                    onFocus={(e) => {
                      e.target.style.borderColor = "#6A9E4F";
                      e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "";
                      e.target.style.boxShadow = "";
                    }}
                  />
                </div>

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message:
                          "Password must be at least 6 characters",
                      },
                    })}
                    className="w-full pl-12 pr-12 py-4 rounded-2xl border border-slate-200 outline-none transition"
                    onFocus={(e) => {
                      e.target.style.borderColor = "#6A9E4F";
                      e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "";
                      e.target.style.boxShadow = "";
                    }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* REMEMBER */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    style={{ accentColor: "#6A9E4F" }}
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm font-medium"
                  style={{ color: "#6A9E4F" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3D6B2C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6A9E4F")}
                >
                  Forgot Password?
                </button>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl text-white font-semibold text-lg hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #3D6B2C, #6A9E4F, #93C572)",
                  boxShadow: "0 10px 40px rgba(106,158,79,0.35)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 15px 50px rgba(106,158,79,0.45)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 10px 40px rgba(106,158,79,0.35)")}
              >
                {isSubmitting ? "Signing In..." : "Login"}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              Protected Medical Administration Portal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;