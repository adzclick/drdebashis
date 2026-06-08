import { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Ambulance,
  Calendar,
} from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

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
    console.log(data);

    // API Call Here
    axios.post('https://drdebasish-server.onrender.com/appointment',data)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({

          title: 'Appointment Booked Successfully',

          text: 'Redirecting to Home Page',

          icon: 'success',

          timer: 2500,

          showConfirmButton: false,

        });
      }
    })

    reset();
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-5 py-2 rounded-full text-xs tracking-[3px] uppercase bg-blue-100 text-blue-700">
            Consultation
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Book an Appointment
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Schedule your consultation with Dr. Debashis Adhikary for expert
            orthopedic evaluation and care.
          </p>

          <div className="w-16 h-1 bg-blue-600 mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Consultation Information
            </h3>

            <p className="text-slate-600 leading-8 mb-10">
              Dr. Adhikary offers comprehensive orthopedic consultations with
              thorough examination, imaging review and personalized treatment
              guidance.
            </p>

            <div className="space-y-7">
              <InfoCard
                icon={<MapPin size={20} />}
                title="Clinic Address"
                text="Medithics Clinic, 456 EM Bypass, Kolkata – 700099"
              />

              <InfoCard
                icon={<Phone size={20} />}
                title="Phone / WhatsApp"
                text="+91 98360 12345"
              />

              <InfoCard
                icon={<Mail size={20} />}
                title="Email"
                text="dr.debashis.ortho@gmail.com"
              />

              <InfoCard
                icon={<Clock size={20} />}
                title="Consultation Hours"
                text="Mon – Sat: 10:00 AM – 7:00 PM"
              />
            </div>

            {/* Emergency Card */}
            <div className="mt-10 p-6 rounded-2xl border border-red-200 bg-red-50">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                  <Ambulance size={24} />
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-2">
                    Orthopedic Emergency
                  </h4>

                  <p className="text-red-600 text-sm leading-7">
                    For urgent fractures or acute injuries, please call
                    immediately or visit the nearest emergency department.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Request an Appointment
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              {/* Name + Mobile */}
              <div className="grid md:grid-cols-2 gap-4">
                <InputField
                  label="Full Name *"
                  placeholder="Your full name"
                  error={errors.name?.message}
                  register={register("name", {
                    required: "Name is required",
                  })}
                />

                <InputField
                  label="Phone Number *"
                  placeholder="9876543210"
                  error={errors.mobile?.message}
                  register={register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter valid 10 digit number",
                    },
                  })}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  maxLength={10}
                />
              </div>

              {/* Email */}
              <InputField
                label="Email Address"
                placeholder="you@example.com"
                type="email"
                register={register("email")}
              />

             <div>
  <label className="block mb-2 font-medium text-slate-700">
    Preferred Date *
  </label>

  <div className="relative">
    <input
      type="date"
      min={today}
      className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-300
        px-4
        pr-12
        outline-none
        focus:ring-4
        focus:ring-blue-100
        focus:border-blue-500
        [&::-webkit-calendar-picker-indicator]:opacity-0
        [&::-webkit-calendar-picker-indicator]:absolute
        [&::-webkit-calendar-picker-indicator]:w-full
        [&::-webkit-calendar-picker-indicator]:h-full
        [&::-webkit-calendar-picker-indicator]:cursor-pointer
      "
      {...register("date", {
        required: "Select date",
      })}
    />

    <Calendar
      size={20}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none"
    />
  </div>

  {errors.date && (
    <p className="text-red-500 text-sm mt-1">
      {errors.date.message}
    </p>
  )}
</div>

              {/* Concern */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Condition / Concern *
                </label>

                <select
                  className="w-full h-12 rounded-xl border border-slate-300 px-4 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                  {...register("concern", {
                    required: "Select concern",
                  })}
                >
                  <option value="">
                    Select your concern
                  </option>

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

                {errors.concern && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.concern.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Describe your symptoms or questions briefly..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full
                  h-14
                  rounded-full
                  bg-gradient-to-r
                  from-blue-700
                  to-blue-500
                  text-white
                  font-semibold
                  shadow-lg
                  hover:shadow-blue-300
                  transition-all
                "
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Confirm Appointment Request"}
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
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="text-slate-600 leading-7">
          {text}
        </p>
      </div>
    </div>
  );
}

function InputField({
  label,
  register,
  error,
  type = "text",
  ...props
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        className="w-full h-12 rounded-xl border border-slate-300 px-4 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
        {...register}
        {...props}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}