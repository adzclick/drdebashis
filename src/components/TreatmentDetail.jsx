import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { treatments } from "./treatmentsData";

const pistaGradient = "linear-gradient(to right,#6A9E4F,#93C572)";

const TreatmentDetail = () => {
  const { slug } = useParams();
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Treatment not found</h2>
        <Link to="/treatments" className="mt-4 inline-block font-semibold" style={{ color: "#6A9E4F" }}>
          ← Back to Treatments
        </Link>
      </div>
    );
  }

  const related = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 3);
  const blocks = treatment.details.split("\n\n").filter(Boolean);

  return (
    <article className="bg-slate-50">
      {/* Hero header */}
      <div
        className="relative pt-14 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #EAF4E1 0%, #F8FAF6 100%)" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8"
            style={{ color: "#3D6B2C" }}
          >
            <ArrowLeft size={16} />
            Back to Treatments
          </Link>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            {treatment.name}
          </h1>

          <p className="text-slate-600 text-lg max-w-xl">{treatment.shortDescription}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-10 relative">
        <div className="rounded-3xl overflow-hidden mb-10 shadow-xl" style={{ border: "1px solid #C5E1AE" }}>
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>

        <p className="text-lg text-slate-700 leading-8 mb-8 font-medium">
          {treatment.overview}
        </p>

        <div className="prose prose-slate max-w-none">
          {blocks.map((block, i) => {
            const isHeading = block.split(" ").length <= 8 && !block.endsWith(".");
            return isHeading ? (
              <h3 key={i} className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3">
                {block}
              </h3>
            ) : (
              <p key={i} className="text-slate-700 leading-8 mb-5">
                {block}
              </p>
            );
          })}
        </div>

        <Link to="/appointment">
          <button
            className="mt-8 flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            style={{ background: pistaGradient }}
          >
            <CalendarDays size={18} />
            Book a Consultation
          </button>
        </Link>

        {/* Related treatments */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t" style={{ borderColor: "#E2E8F0" }}>
            <h3 className="text-2xl font-black text-slate-900 mb-8">Related Treatments</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/treatments/${r.slug}`}
                  className="group flex items-center gap-4 rounded-2xl p-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ border: "1px solid #C5E1AE" }}
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-800 text-sm group-hover:text-[#3D6B2C] transition-colors truncate">
                      {r.name}
                    </h4>
                    <span className="flex items-center gap-1 text-xs font-semibold mt-1" style={{ color: "#3D6B2C" }}>
                      View details
                      <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="h-24" />
    </article>
  );
};

export default TreatmentDetail;