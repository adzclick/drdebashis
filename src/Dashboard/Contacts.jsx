import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const Contacts = () => {
  const [search, setSearch] = useState("");

  const { data: contacts = [], isLoading } = useQuery({
    queryKey: ["contacts_ok"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/contacts");
      return res.data;
    },
  });

  const filteredContacts = contacts.filter(
    (contact) =>
      contact?.name?.toLowerCase().includes(search.toLowerCase()) ||
      contact?.email?.toLowerCase().includes(search.toLowerCase())
  );

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
      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Contact Messages
          </h2>

          <p className="text-slate-500 mt-1">
            Total Messages: {filteredContacts.length}
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-80">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-2xl bg-white shadow-sm outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-3xl shadow-xl border border-slate-200">
        <table className="table">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {filteredContacts.map((contact, index) => (
              <tr
                key={contact._id}
                className="hover:bg-slate-50 transition duration-300"
              >
                <td>
                  <span className="font-semibold">
                    {index + 1}
                  </span>
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                      <FaUser className="text-cyan-600" />
                    </div>

                    <span className="font-semibold text-slate-700">
                      {contact.name}
                    </span>
                  </div>
                </td>

                <td>
                  <div className="flex items-center gap-2 text-slate-600">
                    <FaEnvelope className="text-cyan-600" />
                    {contact.email}
                  </div>
                </td>

                <td>
                  <div className="flex items-center gap-2 text-slate-600">
                    <FaPhoneAlt className="text-green-600" />
                    {contact.mobile}
                  </div>
                </td>

                <td>
                  <span className="font-medium text-slate-700">
                    {contact.subject}
                  </span>
                </td>

                <td>
                  <div className="max-w-xs truncate text-slate-500">
                    {contact.message}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredContacts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-slate-600">
              No Contact Messages Found
            </h3>

            <p className="text-slate-400 mt-2">
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;