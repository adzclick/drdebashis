import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  CheckCircle,
  XCircle,
  Clock3,
  Phone,
  Mail,
} from "lucide-react";

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
        <span className="loading loading-spinner loading-lg text-pink-600"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
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
        className="
        overflow-x-auto
        rounded-3xl
        bg-white
        shadow-2xl
        border
        border-pink-100
      "
      >
        <table className="w-full">
          <thead>
            <tr
              className="
              bg-gradient-to-r
              from-purple-900
              via-fuchsia-800
              to-pink-700
              text-white
            "
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
                className="
                border-b
                hover:bg-pink-50
                transition-all
                duration-300
              "
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
                        className="
                        px-4
                        py-2
                        rounded-xl
                        bg-gradient-to-r
                        from-purple-700
                        via-fuchsia-600
                        to-pink-600
                        text-white
                        font-medium
                        hover:opacity-90
                        transition-all
                      "
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
                        className="
                        px-4
                        py-2
                        rounded-xl
                        bg-gradient-to-r
                        from-pink-600
                        to-rose-600
                        text-white
                        font-medium
                        hover:opacity-90
                        transition-all
                      "
                      >
                        Reject
                      </button>

                    </div>
                  ) : appointment.status ===
                    "confirmed" ? (
                    <div className="flex justify-center">

                      <span
                        className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-green-100
                        px-4
                        py-2
                        font-medium
                        text-green-700
                      "
                      >
                        <CheckCircle size={16} />
                        Confirmed
                      </span>

                    </div>
                  ) : (
                    <div className="flex justify-center">

                      <span
                        className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-red-100
                        px-4
                        py-2
                        font-medium
                        text-red-700
                      "
                      >
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
                  className="
                  py-10
                  text-center
                  text-slate-500
                "
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

    purple:
      "from-purple-900 via-fuchsia-800 to-pink-700",

    green:
      "from-purple-800 via-fuchsia-700 to-pink-600",

    yellow:
      "from-purple-700 via-fuchsia-600 to-pink-500",

  };

  return (
    <div
      className={`
      bg-gradient-to-r
      ${colors[color]}
      text-white
      rounded-3xl
      p-6
      shadow-2xl
      hover:-translate-y-1
      hover:scale-[1.02]
      transition-all
      duration-300
    `}
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