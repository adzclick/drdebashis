import { useRef } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Ambulance, Calendar } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

export default function BookAppointment() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const today = new Date().toISOString().split("T")[0];
  const dateRef = useRef(null);

  const onSubmit = async (data) => {
    axios
      .post("https://drdebasish-server.onrender.com/appointment", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Appointment Booked Successfully",
            text: "Redirecting to Home Page",
            icon: "success",
            timer: 2500,
            showConfirmButton: false,
          });
        }
      });
    reset();
  };

  return (
    <section className="relative overflow-hidden py-24 bg-slate-50">

      {/* Background glows */}
      <div
        className="absolute left-0 top-0 h-96 w-96 rounded-full"
        style={{ background: "rgba(147,197,114,0.13)", filter: "blur(120px)" }}
      />
      <div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full"
        style={{ background: "rgba(106,158,79,0.13)", filter: "blur(120px)" }}
      />

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="px-5 py-2 rounded-full text-xs tracking-[3px] uppercase font-semibold"
            style={{ background: "#EAF4E1", color: "#6A9E4F" }}
          >
            Consultation
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Book an Appointment
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Debashis Adhikary
            for expert orthopedic evaluation and care.
          </p>

          <div
            className="w-20 h-1 mx-auto mt-5 rounded-full"
            style={{ background: "linear-gradient(to right, #6A9E4F, #93C572)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* ── LEFT SIDE ── */}
        {/* ── LEFT SIDE ── */}
<div>
  <h3 className="text-3xl font-bold text-slate-900 mb-6">
    Consultation Information
  </h3>

  <p className="text-slate-600 leading-8 mb-10">
    Dr. Adhikary offers comprehensive orthopedic consultations
    with thorough examination, imaging review and personalized
    treatment guidance.
  </p>

  {/* Chamber Addresses */}
  <div className="space-y-6 mb-10">
     <ChamberCard
      title="Office Address"
      address="Office No. 102, First Floor, Merlin Legend, 3 Harish Mukherjee Road, Bhawanipur, Kolkata – 700020 (Opposite Balwant Singh Dhaba)"
    
    />
    <ChamberCard
      title="Drs Ghosh & Adhikary Diagnostics"
      days="Monday, Wednesday, Thursday, Sunday"
      timing="12:30 PM – 3:30 PM & 7:00 PM – 8:30 PM"
      note="Sunday: no evening OPD"
    />
    <ChamberCard
      title="Medithics"
      address="456 EM Bypass, Kolkata – 700099"
      days="Monday, Wednesday, Thursday, Friday"
      timing="10:30 AM – 12:00 PM"
    />
    <ChamberCard
      title="Manipal Hospital, EM Bypass"
      days="Wednesday"
      timing="5:00 PM – 7:30 PM"
    />
    <ChamberCard
      title="Apollo Clinic Bashdroni"
      // address="Office No. 102, First Floor, Merlin Legend, 3 Harish Mukherjee Road, Bhawanipur, Kolkata – 700020 (Opposite Balwant Singh Dhaba)"
      days="Sunday"
      timing="4:00 PM – 7:30 PM"
    />
  </div>

  <div className="space-y-7">
    <InfoCard icon={<Phone size={20} />}    title="Phone / WhatsApp"      text="+919147395588" />
    <InfoCard icon={<Mail size={20} />}     title="Email"                 text="dr.debashis.ortho@gmail.com" />
    <InfoCard icon={<Clock size={20} />}    title="Consultation Hours"    text="Mon – Sat: 10:00 AM – 7:00 PM" />
  </div>

  {/* Emergency card — keep red, it's a warning */}
  <div className="mt-10 p-6 rounded-3xl border border-red-200 bg-red-50 shadow-md">
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
        <Ambulance size={24} />
      </div>
      <div>
        <h4 className="font-semibold text-red-700 mb-2">Orthopedic Emergency</h4>
        <p className="text-red-600 text-sm leading-7">
          For urgent fractures or acute injuries, please call
          immediately or visit the nearest emergency department.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* ── RIGHT FORM ── */}
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
            style={{ border: "1px solid #C5E1AE" }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Request an Appointment
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">
                <InputField
                  label="Full Name *"
                  placeholder="Your full name"
                  error={errors.name?.message}
                  register={register("name", { required: "Name is required" })}
                />
                <InputField
                  label="Phone Number *"
                  placeholder="9147395588"
                  error={errors.mobile?.message}
                  register={register("mobile", {
                    required: "Mobile number is required",
                    pattern: { value: /^[6-9]\d{9}$/, message: "Enter valid 10 digit number" },
                  })}
                  onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ""); }}
                  maxLength={10}
                />
              </div>

              <InputField
                label="Email Address"
                placeholder="you@example.com"
                type="email"
                register={register("email")}
              />

              {/* Date */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Preferred Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={today}
                    className="
                      w-full h-12 rounded-xl border border-slate-300
                      px-4 pr-12 outline-none
                      [&::-webkit-calendar-picker-indicator]:opacity-0
                      [&::-webkit-calendar-picker-indicator]:absolute
                      [&::-webkit-calendar-picker-indicator]:w-full
                      [&::-webkit-calendar-picker-indicator]:h-full
                      [&::-webkit-calendar-picker-indicator]:cursor-pointer
                    "
                    style={{ "--tw-ring-color": "#C5E1AE" }}
                    onFocus={(e) => {
                      e.target.style.outline = "none";
                      e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                      e.target.style.borderColor = "#6A9E4F";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "";
                      e.target.style.borderColor = "";
                    }}
                    {...register("date", { required: "Select date" })}
                  />
                  <Calendar
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "#6A9E4F" }}
                  />
                </div>
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
              </div>

              {/* Condition */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Condition / Concern *
                </label>
                <select
                  className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none"
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                    e.target.style.borderColor = "#6A9E4F";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "";
                    e.target.style.borderColor = "";
                  }}
                  {...register("concern", { required: "Select concern" })}
                >
                  <option value="">Select your concern</option>
                  <option>Knee Pain / Knee Replacement</option>
                  <option>Hip Pain / Hip Replacement</option>
                  <option>Shoulder Surgery</option>
                  <option>Arthritis Treatment</option>
                  <option>Sports Injury / Arthroscopy</option>
                  <option>Fracture / Trauma Care</option>
                  <option>Back Pain / Spine Disorder</option>
                  <option>Pediatric Orthopedics</option>
                  <option>General Orthopedic Consultation</option>
                </select>
                {errors.concern && <p className="text-red-500 text-sm mt-1">{errors.concern.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Describe your symptoms or questions briefly..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
                    e.target.style.borderColor = "#6A9E4F";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "";
                    e.target.style.borderColor = "";
                  }}
                  {...register("message")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-full text-white font-semibold shadow-xl hover:scale-[1.02] transition-all"
                style={{ background: "linear-gradient(to right, #3D6B2C, #6A9E4F, #93C572)" }}
              >
                {isSubmitting ? "Submitting..." : "Confirm Appointment Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


function InfoCard({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: "#EAF4E1", color: "#6A9E4F" }}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="text-slate-600 leading-7">{text}</p>
      </div>
    </div>
  );
}
function ChamberCard({ title, address, days, timing, note }) {
  return (
    <div className="flex gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: "#EAF4E1", color: "#6A9E4F" }}
      >
        <MapPin size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        {address && <p className="text-slate-600 text-sm leading-6 mt-0.5">{address}</p>}
        <p className="text-slate-600 text-sm mt-1">{days}</p>
        <p className="text-sm font-medium mt-0.5" style={{ color: "#6A9E4F" }}>{timing}</p>
        {note && <p className="text-xs text-slate-400 italic mt-1">{note}</p>}
      </div>
    </div>
  );
}

function InputField({ label, register, error, type = "text", ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-slate-700">{label}</label>
      <input
        type={type}
        className="w-full h-12 rounded-xl border border-slate-300 px-4 outline-none"
        onFocus={(e) => {
          e.target.style.boxShadow = "0 0 0 4px rgba(147,197,114,0.25)";
          e.target.style.borderColor = "#6A9E4F";
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "";
          e.target.style.borderColor = "";
        }}
        {...register}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
    
  );
}