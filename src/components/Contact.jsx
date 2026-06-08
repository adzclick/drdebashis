import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

 // API Call Here
    axios.post('https://drdebasish-server.onrender.com/contacts',data)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
       Swal.fire({
      title: "Message Sent Successfully",
      text: "We will contact you shortly.",
      icon: "success",
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
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="px-5 py-2 rounded-full text-xs tracking-[3px] uppercase bg-blue-100 text-blue-700">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Get In Touch
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Reach out for appointments, consultations, reports, or any
            orthopedic assistance.
          </p>

          <div className="w-16 h-1 bg-blue-600 mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Clinic Information
            </h3>

            <p className="text-slate-600 leading-8 mb-10">
              We are committed to providing expert orthopedic care and
              personalized treatment plans for every patient.
            </p>

            <div className="space-y-7">
              <InfoCard
                icon={<MapPin size={20} />}
                title="Clinic Address"
                text="Medithics Clinic, 456 EM Bypass, Kolkata – 700099"
              />

              <InfoCard
                icon={<Phone size={20} />}
                title="Phone Number"
                text="+91 98360 12345"
              />

              <InfoCard
                icon={<Mail size={20} />}
                title="Email Address"
                text="dr.debashis.ortho@gmail.com"
              />

              <InfoCard
                icon={<Clock size={20} />}
                title="Consultation Hours"
                text="Mon – Sat : 10:00 AM – 7:00 PM"
              />
            </div>

            {/* WhatsApp Card */}
<div className="mt-10 p-6 rounded-2xl border border-green-200 bg-green-50 shadow-sm hover:shadow-md transition-all duration-300">
  <div className="flex gap-4">
    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
      <FaWhatsapp className="text-green-600 text-3xl" />
    </div>

    <div>
      <h4 className="font-semibold text-green-700 mb-2">
        WhatsApp Consultation
      </h4>

      <p className="text-green-700 text-sm leading-7 mb-4">
        Share your reports, prescriptions and X-rays on WhatsApp before
        visiting the clinic for a quicker assessment.
      </p>

      <a
        href="https://wa.me/919903870713"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300"
      >
        <FaWhatsapp size={20} />
        Chat on WhatsApp
      </a>
    </div>
  </div>
</div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
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
                    required: "Phone number is required",
                  })}
                />
              </div>

              <InputField
                label="Email Address *"
                placeholder="you@example.com"
                type="email"
                error={errors.email?.message}
                register={register("email", {
                  required: "Email is required",
                })}
              />

              <InputField
                label="Subject *"
                placeholder="Subject"
                error={errors.subject?.message}
                register={register("subject", {
                  required: "Subject is required",
                })}
              />

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Message *
                </label>

                <textarea
                  rows={5}
                  placeholder="Describe your concern..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
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
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Send size={18} />

                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
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