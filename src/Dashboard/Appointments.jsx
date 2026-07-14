import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  CheckCircle,
  XCircle,
  Clock3,
  Phone,
  Mail,
} from "lucide-react";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const Appointments = () => {
  const {
    data: appointments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointments"],

    queryFn: async () => {
      const res = await axios.get(
        "https://drdebasish-server.onrender.com/appointment"
      );

      return res.data;
    },
  });

  const handleStatus = async (id, status) => {
    try {
      const res = await axios.patch(
        `https://drdebasish-server.onrender.com/appointment/${id}`,
        { status }
      );

      if (res.data.success) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span
          className="loading loading-spinner loading-lg"
          style={{ color: "#6A9E4F" }}
        ></span>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen rounded-3xl p-6"
      style={{ background: "linear-gradient(to bottom right, #EAF4E1, #f8fafc, #EAF4E1)" }}
    >

      {/* HEADER */}
      <div className="mb-8">
        <h2
          className="text-3xl font-bold bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(to right, #3D6B2C, #6A9E4F, #93C572)" }}
        >
          Appointment Requests
        </h2>

        <p className="mt-2 text-slate-500">
          Manage all patient appointment requests
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-5 mb-8 md:grid-cols-3">
        <StatCard
          title="Total Appointments"
          value={appointments.length}
          color="purple"
        />

        <StatCard
          title="Confirmed"
          value={
            appointments.filter(
              (item) => item.status === "confirmed"
            ).length
          }
          color="green"
        />

        <StatCard
          title="Pending"
          value={
            appointments.filter(
              (item) =>
                item.status === "pending" || !item.status
            ).length
          }
          color="yellow"
        />
      </div>

      {/* TABLE */}
      <div
        className="overflow-x-auto rounded-3xl bg-white shadow-2xl"
        style={{ border: "1px solid #C5E1AE" }}
      >
        <table className="w-full">
          <thead>
            <tr
              className="text-white"
              style={{ background: "linear-gradient(to right, #3D6B2C, #6A9E4F, #93C572)" }}
            >
              <th className="px-5 py-4 text-left">
                Patient
              </th>

              <th className="px-5 py-4 text-left">
                Contact
              </th>

              <th className="px-5 py-4 text-left">
                Date
              </th>

              <th className="px-5 py-4 text-left">
                Concern
              </th>

              <th className="px-5 py-4 text-left">
                Status
              </th>

              <th className="px-5 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment._id}
                className="border-b transition-all duration-300"
                onMouseEnter={(e) => (e.currentTarget.style.background = "#EAF4E1")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              >
                {/* PATIENT */}
                <td className="px-5 py-5">
                  <h3 className="font-semibold text-slate-800">
                    {appointment.name}
                  </h3>
                </td>

                {/* CONTACT */}
                <td className="px-5 py-5">
                  <div className="space-y-1">
                    <p className="flex items-center gap-2 text-sm text-slate-600">
                      <Mail size={14} />
                      {appointment.email}
                    </p>

                    <p className="flex items-center gap-2 text-sm text-slate-600">
                      <Phone size={14} />
                      {appointment.mobile}
                    </p>
                  </div>
                </td>

                {/* DATE */}
                <td className="px-5 py-5">
                  {appointment.date}
                </td>

                {/* CONCERN */}
                <td className="px-5 py-5">
                  {appointment.concern}
                </td>

                {/* STATUS */}
                <td className="px-5 py-5">
                  {appointment.status === "confirmed" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                      <CheckCircle size={16} />
                      Confirmed
                    </span>
                  ) : appointment.status === "rejected" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
                      <XCircle size={16} />
                      Rejected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                      <Clock3 size={16} />
                      Pending
                    </span>
                  )}
                </td>

                {/* ACTION */}
                <td className="px-5 py-5">
                  {(appointment.status === "pending" ||
                    !appointment.status) ? (
                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          handleStatus(
                            appointment._id,
                            "confirmed"
                          )
                        }
                        className="px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-all"
                        style={{ background: "linear-gradient(to right, #3D6B2C, #6A9E4F, #93C572)" }}
                      >
                        Confirm
                      </button>

                      <button
                        onClick={() =>
                          handleStatus(
                            appointment._id,
                            "rejected"
                          )
                        }
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-medium hover:opacity-90 transition-all"
                      >
                        Reject
                      </button>

                    </div>
                  ) : appointment.status ===
                    "confirmed" ? (
                    <div className="flex justify-center">

                      <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
                        <CheckCircle size={16} />
                        Confirmed
                      </span>

                    </div>
                  ) : (
                    <div className="flex justify-center">

                      <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 font-medium text-red-700">
                        <XCircle size={16} />
                        Rejected
                      </span>

                    </div>
                  )}
                </td>
              </tr>
            ))}

            {appointments.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-slate-500"
                >
                  No Appointments Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ================= STAT CARD ================= */

const StatCard = ({
  title,
  value,
  color,
}) => {

  const colors = {
    purple: "linear-gradient(to right, #3D6B2C, #6A9E4F, #93C572)",
    green: "linear-gradient(to right, #2f5421, #6A9E4F, #93C572)",
    yellow: "linear-gradient(to right, #4a7a36, #7CAE5C, #A8D483)",
  };

  return (
    <div
      className="text-white rounded-3xl p-6 shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
      style={{ background: colors[color] }}
    >
      <p className="text-sm opacity-80">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-black">
        {value}
      </h2>
    </div>
  );
};

export default Appointments;