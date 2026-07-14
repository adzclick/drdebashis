import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

export default function ContactSection() {

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm();

  const onSubmit = async (data) => {

    try {

      const res = await axios.post(
        "https://drdebasish-server.onrender.com/contacts",
        data
      );

      if (res.data.insertedId) {

        Swal.fire({
          title: "Message Sent Successfully",
          text: "We will contact you shortly.",
          icon: "success",
          timer: 2500,
          showConfirmButton: false,
        });

      }

      reset();

    } catch (error) {

      console.log(error);

      Swal.fire({
        title: "Something went wrong",
        text: "Please try again later",
        icon: "error",
      });

    }

  };

  return (

    <section className="relative overflow-hidden py-24 bg-slate-50">

      {/* Background glows — pista tones */}
      <div
        className="absolute left-0 top-0 h-96 w-96 rounded-full"
        style={{ background: "rgba(147,197,114,0.13)", filter: "blur(120px)" }}
      />
      <div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full"
        style={{ background: "rgba(106,158,79,0.13)", filter: "blur(120px)" }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">

          <span
            className="px-5 py-2 rounded-full text-xs tracking-[3px] uppercase font-semibold"
            style={{ background: "#EAF4E1", color: "#6A9E4F" }}
          >
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Get In Touch
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Reach out for appointments, consultations,
            reports, or any orthopedic assistance.
          </p>

          <div
            className="w-20 h-1 mx-auto mt-5 rounded-full"
            style={{ background: "linear-gradient(to right, #6A9E4F, #93C572)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Clinic Information
            </h3>

            <p className="text-slate-600 leading-8 mb-10">
              We are committed to providing expert orthopedic
              care and personalized treatment plans for every patient.
            </p>

            {/* CHAMBER SCHEDULE */}
            <div className="space-y-5">

              <div className="flex items-center gap-3 mb-4">
                <Clock style={{ color: "#6A9E4F" }} size={20} />
                <h4 className="font-semibold text-slate-900">
                  Chamber Schedule
                </h4>
              </div>

              {/* Drs Ghosh & Adhikary */}
              <div
                className="bg-white rounded-2xl p-5 shadow-sm"
                style={{ border: "1px solid #C5E1AE" }}
              >
                <h5 className="font-bold" style={{ color: "#3D6B2C" }}>
                  Drs Ghosh & Adhikary Diagnostics
                </h5>
                <p className="text-sm text-slate-600 mt-1">
                  Monday, Wednesday, Thursday & Sunday
                </p>
                <p className="text-sm font-medium mt-2">
                  12:30 PM – 3:30 PM
                </p>
                <p className="text-sm font-medium">
                  7:00 PM – 8:30 PM
                </p>
                <p className="text-xs mt-1" style={{ color: "#6A9E4F" }}>
                  Sunday: No Evening OPD
                </p>
              </div>

              {/* Medithics */}
              <div
                className="bg-white rounded-2xl p-5 shadow-sm"
                style={{ border: "1px solid #C5E1AE" }}
              >
                <h5 className="font-bold" style={{ color: "#3D6B2C" }}>
                  Medithics
                </h5>
                <p className="text-sm text-slate-600 mt-1">
                  Monday, Wednesday, Thursday & Friday
                </p>
                <p className="text-sm font-medium mt-2">
                  10:30 AM – 12:00 PM
                </p>
              </div>

              {/* Manipal */}
              <div
                className="bg-white rounded-2xl p-5 shadow-sm"
                style={{ border: "1px solid #C5E1AE" }}
              >
                <h5 className="font-bold" style={{ color: "#3D6B2C" }}>
                  Manipal Hospital EM Bypass
                </h5>
                <p className="text-sm text-slate-600 mt-1">
                  Wednesday
                </p>
                <p className="text-sm font-medium mt-2">
                  5:00 PM – 7:30 PM
                </p>
              </div>

              {/* Apollo */}
              <div
                className="bg-white rounded-2xl p-5 shadow-sm"
                style={{ border: "1px solid #C5E1AE" }}
              >
                <h5 className="font-bold" style={{ color: "#3D6B2C" }}>
                  Apollo Clinic Bansdroni
                </h5>
                <p className="text-sm text-slate-600 mt-1">
                  Sunday
                </p>
                <p className="text-sm font-medium mt-2">
                  4:00 PM – 7:30 PM
                </p>
              </div>

            </div>

            {/* PHONE */}
            <div className="flex gap-4 mt-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "#EAF4E1", color: "#6A9E4F" }}
              >
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">
                  Phone Number
                </h4>
                <p className="text-slate-600">
                  9147395588
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 mt-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "#EAF4E1", color: "#6A9E4F" }}
              >
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">
                  Email Address
                </h4>
                <p className="text-slate-600">
                  dr.debashis.ortho@gmail.com
                </p>
              </div>
            </div>

            {/* WHATSAPP — kept its own green brand identity */}
            <div
              className="mt-10 p-6 rounded-3xl border border-green-200 bg-green-50 shadow-md"
            >
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                  <FaWhatsapp className="text-green-600 text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">
                    WhatsApp Consultation
                  </h4>
                  <p className="text-green-700 text-sm leading-7 mb-4">
                    Share your reports,
                    prescriptions and X-rays
                    on WhatsApp before visiting
                    the clinic.
                  </p>
                  <a
                    href="https://wa.me/9147395588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-medium"
                  >
                    <FaWhatsapp size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 h-fit sticky top-24"
            style={{ border: "1px solid #C5E1AE" }}
          >

            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* NAME + PHONE */}
              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none"
                    onFocus={(e) => {
                      e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                      e.target.style.borderColor = "#6A9E4F";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "";
                      e.target.style.borderColor = "";
                    }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    placeholder="9876543210"
                    {...register("mobile", { required: "Phone number is required" })}
                    className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none"
                    onFocus={(e) => {
                      e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                      e.target.style.borderColor = "#6A9E4F";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "";
                      e.target.style.borderColor = "";
                    }}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                  )}
                </div>

              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", { required: "Email is required" })}
                  className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none"
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                    e.target.style.borderColor = "#6A9E4F";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "";
                    e.target.style.borderColor = "";
                  }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Subject *
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none"
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                    e.target.style.borderColor = "#6A9E4F";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "";
                    e.target.style.borderColor = "";
                  }}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your concern..."
                  {...register("message", { required: "Message is required" })}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                    e.target.style.borderColor = "#6A9E4F";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "";
                    e.target.style.borderColor = "";
                  }}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-full text-white font-semibold shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(to right, #3D6B2C, #6A9E4F, #93C572)" }}
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}