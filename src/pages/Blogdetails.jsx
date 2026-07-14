import { useParams, Link } from "react-router";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { blogs } from "./Blogs";
import doctorPhoto from "../../src/assets/doctor.jpg"; // adjust path to match your project structure

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Article not found</h2>
        <p className="mt-2 text-slate-500">
          The article you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/blogs"
          className="mt-6 inline-block font-semibold"
          style={{ color: "#6A9E4F" }}
        >
          ← Back to Articles
        </Link>
      </div>
    );
  }

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  // Split content into paragraphs; treat short lines (no trailing period)
  // as subheadings.
  const blocks = blog.content.split("\n\n").filter(Boolean);
  const midpoint = Math.floor(blocks.length / 2);

  return (
    <article className="bg-slate-50">
      {/* ── Hero header ───────────────────────────────── */}
      <div
        className="relative pt-14 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #EAF4E1 0%, #F8FAF6 100%)" }}
      >
        <div
          className="absolute top-10 right-10 w-72 h-72 rounded-full"
          style={{ background: "rgba(106,158,79,0.15)", filter: "blur(100px)" }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8"
            style={{ color: "#3D6B2C" }}
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>

          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white mb-5 shadow-sm"
            style={{ background: "linear-gradient(to right, #3D6B2C, #6A9E4F)" }}
          >
            {blog.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
            <span className="flex items-center gap-2 font-semibold text-slate-800">
              <img
                src={doctorPhoto}
                alt={blog.author}
                className="w-8 h-8 rounded-full object-cover"
                style={{ border: "1.5px solid #6A9E4F" }}
              />
              {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-12 relative">
        {/* Hero image — always shown, on every screen size */}
        <div
          className="rounded-3xl overflow-hidden mb-12 shadow-xl"
          style={{ border: "1px solid #C5E1AE" }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-[1fr_180px] gap-10">
          {/* Article content */}
          <div className="prose prose-slate max-w-none">
            {blocks.map((block, i) => {
              const isHeading = block.split(" ").length <= 8 && !block.endsWith(".");
              return (
                <div key={i}>
                  {isHeading ? (
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3">
                      {block}
                    </h3>
                  ) : (
                    <p className="text-slate-700 leading-8 mb-5">{block}</p>
                  )}

                  {/* Mid-article supporting image — hidden on mobile, shown from sm up */}
                  {i === midpoint && (
                    <div
                      className="hidden sm:block rounded-2xl overflow-hidden my-8 shadow-md"
                      style={{ border: "1px solid #C5E1AE" }}
                    >
                      <img
                        src={blog.image}
                        alt={`${blog.category} illustration`}
                        className="w-full h-56 object-cover"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Tags */}
            {blog.tags && (
              <div
                className="flex flex-wrap gap-2 mt-10 pt-8 border-t"
                style={{ borderColor: "#E2E8F0" }}
              >
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "#EAF4E1", color: "#3D6B2C" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar: author card + a compact "more articles" list below it */}
          <aside className="md:sticky md:top-28 self-start">
            <div
              className="rounded-2xl p-5 bg-white shadow-sm text-center"
              style={{ border: "1px solid #C5E1AE" }}
            >
              <img
                src={doctorPhoto}
                alt={blog.author}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                style={{ border: "2px solid #6A9E4F" }}
              />
              <p className="font-bold text-slate-900 text-sm flex items-center justify-center gap-1">
                {blog.author}
                <BadgeCheck size={14} style={{ color: "#3D6B2C" }} />
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{blog.role}</p>
            </div>

            {/* More Articles — compact list, sits right under the doctor card */}
            {related.length > 0 && (
              <div
                className="rounded-2xl p-4 bg-white shadow-sm mt-5"
                style={{ border: "1px solid #C5E1AE" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-3 px-1"
                  style={{ color: "#6A9E4F" }}
                >
                  More Articles
                </p>

                <div className="flex flex-col gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/blogs/${r.slug}`}
                      className="group flex items-center gap-3 rounded-xl p-2 hover:bg-[#EAF4E1] transition-colors duration-300"
                    >
                      <div
                        className="w-12 h-12 rounded-lg overflow-hidden shrink-0"
                        style={{ border: "1px solid #C5E1AE" }}
                      >
                        <img
                          src={r.image}
                          alt={r.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#3D6B2C] transition-colors">
                          {r.title}
                        </h5>
                        <span className="text-[11px] text-slate-500">{r.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* ── Related articles ─────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t" style={{ borderColor: "#E2E8F0" }}>
            <h3 className="text-2xl font-black text-slate-900 mb-8">
              More Articles You May Like
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blogs/${r.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ border: "1px solid #C5E1AE" }}
                >
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold" style={{ color: "#6A9E4F" }}>
                      {r.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1.5 leading-snug group-hover:text-[#3D6B2C] transition-colors">
                      {r.title}
                    </h4>
                    <span
                      className="flex items-center gap-1 text-xs font-semibold mt-3"
                      style={{ color: "#3D6B2C" }}
                    >
                      Read More
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
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

export default BlogDetail; 