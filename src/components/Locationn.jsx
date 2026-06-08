import React from 'react';

const locationn = () => {
  return (
    <div className="w-full bg-slate-50 py-5">
  <div className="max-w-7xl mx-auto px-4">

    {/* TITLE */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-slate-900">
        Find Us on Map
      </h2>
      <p className="text-slate-600 mt-3">
        Visit our clinic EM BYPASS, Kolkata
      </p>
    </div>

    {/* MAP CONTAINER */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">

      {/* GOOGLE MAP */}
      <iframe
        src="https://maps.google.com/maps?q=Madhyamgram%20Chowmatha%20Kolkata&z=15&output=embed"
        width="100%"
        height="520"
        style={{ border: 0 }}
        loading="lazy"
        title="Madhyamgram Chowmatha Location"
        className="w-full"
      />

      {/* FLOATING INFO CARD  */}
      <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg p-5 max-w-sm">
        <h3 className="text-lg font-bold text-slate-900">
          Madhyamgram Chowmatha
        </h3>

        <p className="text-slate-600 text-sm mt-2 leading-6">
          Madhyamgram Chowmatha, Kolkata, West Bengal
        </p>

        <div className="flex gap-3 mt-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Madhyamgram%20Chowmatha%20Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm font-medium"
          >
            Directions
          </a>

          <a
            href="https://www.google.com/maps?q=Madhyamgram%20Chowmatha%20Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 text-center py-2 rounded-lg text-sm font-medium"
          >
            View
          </a>
        </div>
      </div>

    </div>

  </div>
</div>
  );
};

export default locationn;