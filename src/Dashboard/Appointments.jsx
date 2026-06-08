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
        <span className="loading loading-spinner loading-lg text-cyan-600"></span>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Appointment Requests
        </h2>

        <p className="text-slate-500 mt-2">
          Manage all patient appointment requests
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <StatCard
          title="Total Appointments"
          value={appointments.length}
          color="blue"
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
                item.status === "pending" ||
                !item.status
            ).length
          }
          color="yellow"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-3xl bg-white shadow-xl border border-slate-100">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white">
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
                className="border-b hover:bg-slate-50 transition"
              >
                {/* Patient */}
                <td className="px-5 py-5">
                  <h3 className="font-semibold text-slate-800">
                    {appointment.name}
                  </h3>
                </td>

                {/* Contact */}
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

                {/* Date */}
                <td className="px-5 py-5">
                  {appointment.date}
                </td>

                {/* Concern */}
                <td className="px-5 py-5">
                  {appointment.concern}
                </td>

                {/* Status */}
                <td className="px-5 py-5">
                  {appointment.status ===
                  "confirmed" ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      <CheckCircle size={16} />
                      Confirmed
                    </span>
                  ) : appointment.status ===
                    "rejected" ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                      <XCircle size={16} />
                      Rejected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                      <Clock3 size={16} />
                      Pending
                    </span>
                  )}
                </td>

                {/* Action */}
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
                        className="px-4 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
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
                        className="px-4 py-2 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition"
                      >
                        Reject
                      </button>
                    </div>
                  ) : appointment.status ===
                    "confirmed" ? (
                    <div className="flex justify-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
                        <CheckCircle size={16} />
                        Confirmed
                      </span>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium">
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
                  className="text-center py-10 text-slate-500"
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

const StatCard = ({
  title,
  value,
  color,
}) => {
  const colors = {
    blue: "from-cyan-600 to-blue-700",
    green: "from-green-500 to-green-700",
    yellow: "from-yellow-500 to-orange-500",
  };

  return (
    <div
      className={`bg-gradient-to-r ${colors[color]} text-white rounded-3xl p-6 shadow-lg`}
    >
      <p className="text-sm opacity-80">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
};

export default Appointments;