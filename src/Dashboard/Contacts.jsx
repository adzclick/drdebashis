import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const Contacts = () => {
  const [search, setSearch] = useState("");

  const {
    data: contacts = [],
    isLoading,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axios.get(
        "https://drdebasish-server.onrender.com/contacts"
      );
      return res.data;
    },
  });

  const filteredContacts = contacts.filter(
    (contact) =>
      contact?.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      contact?.email
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row justify-between gap-5">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Contact Messages
          </h2>

          <p className="text-slate-500 mt-2">
            Manage all patient contact inquiries
          </p>
        </div>

        {/* SEARCH */}

        <div className="relative w-full lg:w-96">

          <FaSearch
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-purple-500
          "
          />

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-2xl
            border
            border-purple-100
            bg-white
            shadow-md
            outline-none
            focus:ring-4
            focus:ring-purple-100
            focus:border-purple-500
          "
          />

        </div>

      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-5">

        <div
          className="
          bg-gradient-to-r
          from-purple-700
          via-purple-600
          to-indigo-600
          rounded-3xl
          p-6
          text-white
          shadow-xl
        "
        >
          <p className="opacity-80">
            Total Messages
          </p>

          <h3 className="text-4xl font-bold mt-2">
            {contacts.length}
          </h3>
        </div>

        <div
          className="
          bg-gradient-to-r
          from-indigo-600
          to-purple-700
          rounded-3xl
          p-6
          text-white
          shadow-xl
        "
        >
          <p className="opacity-80">
            Search Results
          </p>

          <h3 className="text-4xl font-bold mt-2">
            {filteredContacts.length}
          </h3>
        </div>

        <div
          className="
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-600
          rounded-3xl
          p-6
          text-white
          shadow-xl
        "
        >
          <p className="opacity-80">
            New Inquiries
          </p>

          <h3 className="text-4xl font-bold mt-2">
            {contacts.length}
          </h3>
        </div>

      </div>
            {/* TABLE */}

      <div
        className="
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-purple-100
        shadow-xl
      "
      >
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr
                className="
                bg-gradient-to-r
                from-purple-700
                via-purple-600
                to-indigo-600
                text-white
              "
              >
                <th className="px-5 py-4 text-left">#</th>
                <th className="px-5 py-4 text-left">Patient</th>
                <th className="px-5 py-4 text-left">Email</th>
                <th className="px-5 py-4 text-left">Phone</th>
                <th className="px-5 py-4 text-left">Subject</th>
                <th className="px-5 py-4 text-left">Message</th>
              </tr>

            </thead>

            <tbody>

              {filteredContacts.map((contact, index) => (

                <tr
                  key={contact._id}
                  className="
                  border-b
                  border-purple-50
                  hover:bg-purple-50
                  transition-all
                "
                >

                  <td className="px-5 py-5 font-semibold text-slate-700">
                    {index + 1}
                  </td>

                  <td className="px-5 py-5">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                        w-11
                        h-11
                        rounded-full
                        bg-purple-100
                        flex
                        items-center
                        justify-center
                      "
                      >
                        <FaUser className="text-purple-600" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          {contact.name}
                        </h4>
                      </div>

                    </div>

                  </td>

                  <td className="px-5 py-5">

                    <div className="flex items-center gap-2 text-slate-600">
                      <FaEnvelope className="text-purple-600" />
                      {contact.email}
                    </div>

                  </td>

                  <td className="px-5 py-5">

                    <div className="flex items-center gap-2 text-slate-600">
                      <FaPhoneAlt className="text-green-600" />
                      {contact.mobile}
                    </div>

                  </td>

                  <td className="px-5 py-5">

                    <span
                      className="
                      inline-flex
                      items-center
                      px-3
                      py-1
                      rounded-full
                      bg-purple-100
                      text-purple-700
                      text-sm
                      font-medium
                    "
                    >
                      {contact.subject}
                    </span>

                  </td>

                  <td className="px-5 py-5 max-w-xs">

                    <p className="text-slate-600 line-clamp-2">
                      {contact.message}
                    </p>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {filteredContacts.length === 0 && (

          <div className="py-20 text-center">

            <div
              className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-purple-100
              flex
              items-center
              justify-center
              mb-5
            "
            >
              <FaEnvelope className="text-3xl text-purple-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-700">
              No Contact Messages Found
            </h3>

            <p className="text-slate-500 mt-2">
              Try searching with another name or email.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default Contacts;