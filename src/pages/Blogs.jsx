import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router";

// ── Pista palette ──────────────────────────────────────────
// Main:    #93C572
// Dark:    #6A9E4F
// Deeper:  #3D6B2C
// Tint:    #EAF4E1
// Border:  #C5E1AE
// ──────────────────────────────────────────────────────────

const DOCTOR_NAME = "Dr. Debashis Adhikary";
const DOCTOR_ROLE = "Orthopedic & Joint Replacement Surgeon";

export const blogs = [
  {
    slug: "knee-osteoarthritis-early-signs",
    image:
      "https://images.unsplash.com/photo-1746842419697-03234f5ff03e?auto=format&fit=crop&w=1200&q=80",
    category: "Knee Care",
    date: "July 2, 2026",
    readTime: "5 min read",
    author: DOCTOR_NAME,
    role: DOCTOR_ROLE,
    title: "5 Early Signs of Knee Osteoarthritis You Shouldn't Ignore",
    excerpt:
      "Learn how to recognize the early warning signs of knee arthritis and when it's time to see a specialist.",
    tags: ["Osteoarthritis", "Knee Pain", "Prevention"],
    content: `Knee osteoarthritis develops gradually, and most people brush off the first symptoms as ordinary aches from a long day. But catching the condition early can make a real difference in how well it responds to treatment — and how long you can delay or avoid surgery.

Here are five signs worth paying attention to.

Morning stiffness that eases with movement
If your knee feels stiff and tight for the first 15 to 30 minutes after waking up, and then gradually loosens as you move around, that's a classic early sign of cartilage wear. Stiffness that lasts much longer than 30 minutes can point to inflammatory causes and is worth discussing with a doctor.

A grinding or clicking sensation
Doctors call this crepitus — a grating, popping, or clicking feeling when you bend or straighten the knee. It happens when roughened cartilage surfaces rub against each other. Occasional clicking with no pain isn't usually a concern, but grinding accompanied by discomfort is worth having checked.

Pain that worsens with activity, then improves with rest
Early osteoarthritis pain tends to follow a pattern: it flares up during or after activities like climbing stairs, squatting, or long walks, and settles down with rest. As the condition progresses, this pattern often changes, with pain occurring even at rest or during the night.

Mild swelling after activity
A little puffiness around the joint after a long day, or after exercise, can indicate low-grade inflammation from cartilage breakdown. Ice, elevation, and rest usually help in the early stages.

A feeling of the knee "giving way"
Weakness in the muscles supporting the knee, combined with joint instability, can create a sensation that your knee might buckle, especially on stairs or uneven ground. This is a good reason to start targeted strengthening exercises.

When to see a specialist
If you're noticing two or more of these signs consistently over several weeks, it's a good time to get an evaluation. Early-stage knee osteoarthritis responds well to physiotherapy, weight management, activity modification, and in some cases, injections — options that become more limited once the joint has degenerated further. Early action is almost always the best strategy for protecting your mobility long-term.`,
  },

  {
    slug: "hip-replacement-before-after",
    image:
      "https://media.istockphoto.com/id/157425370/photo/x-ray-of-total-hip-arthroplasty.webp?a=1&b=1&s=612x612&w=0&k=20&c=4qWZUIWbs4o-Uu1NUAo4aFjLdY83TvRhRBdWwab9URU=",
    category: "Hip Replacement",
    date: "June 24, 2026",
    readTime: "6 min read",
    author: DOCTOR_NAME,
    role: DOCTOR_ROLE,
    title: "What to Expect Before and After Hip Replacement Surgery",
    excerpt:
      "A complete guide to preparing for hip replacement surgery and recovery.",
    tags: ["Hip Replacement", "Surgery", "Recovery"],
    content: `Hip replacement is one of the most successful and reliable procedures in orthopedics, but knowing what actually happens before and after surgery makes the entire journey far less intimidating.

Before surgery: getting ready
In the weeks leading up to your surgery, your surgical team will typically run standard pre-operative tests — blood work, imaging, and a general health assessment — to make sure you're fit for the procedure. This is also the time to:

Strengthen the muscles around your hip through light, guided exercises called "prehabilitation," which is strongly linked to faster post-surgical recovery.

Prepare your home for the first few weeks — think raised toilet seats, removing loose rugs, and placing frequently used items within easy reach.

Arrange for help around the house, since you'll need support with daily tasks for the first one to two weeks.

Discuss medications with your doctor, particularly blood thinners or anti-inflammatories that may need to be paused beforehand.

The day of surgery
Most hip replacements take one to two hours and are performed under spinal or general anesthesia. Many hospitals now follow "enhanced recovery" protocols, which means you may be encouraged to sit up and even take a few assisted steps within hours of the operation.

The first six weeks after surgery
This is the most active recovery phase. You'll typically work with a physiotherapist starting the day after surgery, using a walker or crutches initially and progressing to a cane. Pain is managed with medication and gradually decreases each week. Most patients can resume light daily activities within two to three weeks, though full muscle strength takes longer.

Three to six months out
By this stage, most people are walking without support, have returned to driving, and are back to most normal activities. Low-impact exercises like swimming, cycling, and walking are usually encouraged to keep the new joint mobile and strong.

Long-term outlook
Modern hip implants are built to last 20 years or more for the majority of patients. Staying active, maintaining a healthy weight, and attending follow-up appointments all play a role in how long your new joint continues to serve you well.`,
  },

  {
    slug: "posture-fixes-back-pain",
    image:
      "https://media.istockphoto.com/id/686774058/photo/doctor-reading-the-x-ray-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Efkui7sn-nQv_HlZWtE5SzTI0f_ZueC0Aeovj-NNdhY=",
    category: "Spine Care",
    date: "June 15, 2026",
    readTime: "4 min read",
    author: DOCTOR_NAME,
    role: DOCTOR_ROLE,
    title: "Simple Posture Fixes to Prevent Chronic Back Pain",
    excerpt: "Small daily habits that protect your spine.",
    tags: ["Back Pain", "Posture", "Ergonomics"],
    content: `Chronic back pain is rarely caused by a single dramatic injury. Far more often, it builds up gradually from small postural habits repeated hundreds of times a day — the way you sit, stand, and move without thinking about it.

The good news is that most of these habits are easy to correct once you're aware of them.

Fix your screen height
If you spend hours at a desk, your monitor should sit at eye level, roughly an arm's length away. Looking down at a laptop for extended periods pulls your head forward and strains the muscles supporting your neck and upper spine — a pattern often called "tech neck."

Support your lower back while sitting
The natural curve of your lower spine needs support, especially during long periods of sitting. A small cushion or a chair with built-in lumbar support helps maintain this curve and reduces pressure on spinal discs.

Stand and move every 30 minutes
Staying in any single position, even a good one, puts sustained load on the same muscles and joints. Standing up, stretching, or simply walking for a minute or two every half hour resets that load and keeps circulation moving.

Mind how you lift
Bending from the waist to pick something up puts enormous strain on the lower back. Instead, bend at the knees and hips, keep the object close to your body, and let your legs do the lifting.

Strengthen your core
Your abdominal and back muscles work together to support your spine. Simple exercises like planks, bridges, and bird-dogs, done consistently a few times a week, build the stability that takes pressure off your spine during everyday movement.

Sleep in a spine-friendly position
Sleeping on your back with a pillow under your knees, or on your side with a pillow between your knees, helps keep your spine in a neutral position through the night.

None of these changes require special equipment or a big time commitment — just consistency. Small daily corrections, kept up over months, are what actually prevent chronic pain from developing in the first place.`,
  },

  {
    slug: "sports-injury-ligament",
    image:
      "https://media.istockphoto.com/id/1497548487/photo/shoulder-muscle-pain-and-injury.webp?a=1&b=1&s=612x612&w=0&k=20&c=gCcxfhJ6E6S3uNRCR2Gf6sk-m5SexkRcjvyTcAlmO54=",
    category: "Sports Injury",
    date: "June 5, 2026",
    readTime: "5 min read",
    author: DOCTOR_NAME,
    role: DOCTOR_ROLE,
    title: "Ligament Injuries in Athletes: Prevention & Recovery",
    excerpt: "Understanding sports injuries and faster recovery.",
    tags: ["Sports Injury", "ACL", "Recovery"],
    content: `Ligament injuries — particularly to the ACL, MCL, and ankle ligaments — are among the most common reasons athletes end up sidelined. Understanding how they happen, and how to recover from them properly, can significantly shorten the road back to full performance.

How ligament injuries typically happen
Most ligament injuries occur during sudden changes in direction, awkward landings, or direct impact to a joint. Sports involving quick pivots and jumps — football, basketball, and skiing among them — carry a higher risk. Fatigue also plays a major role: tired muscles react more slowly, leaving joints less protected during high-load movements.

Recognizing the injury
A ligament injury often announces itself clearly — a popping sensation at the moment of injury, immediate swelling, instability when bearing weight, and a noticeable loss of range of motion. Any of these signs, especially the "pop" sensation, warrants prompt medical evaluation rather than waiting it out.

Prevention strategies that actually work
Research consistently points to a few specific interventions that meaningfully reduce ligament injury risk:

Neuromuscular training programs that combine strength, balance, and landing mechanics have been shown to cut ACL injury rates significantly in athletes who train them regularly.

Proper warm-up routines that gradually raise muscle temperature and activate stabilizing muscles before high-intensity activity.

Strength balance between opposing muscle groups, particularly the hamstrings and quadriceps, which helps protect the knee during deceleration.

Sport-specific footwear appropriate to the playing surface, reducing excess strain on ankle and knee ligaments.

The recovery process
Recovery timelines vary widely depending on which ligament is involved and the severity of the tear. Partial tears may heal with a structured physiotherapy program over six to eight weeks, while a complete ACL tear often requires surgical reconstruction followed by six to nine months of progressive rehabilitation before returning to competitive sport.

The rehab process typically moves through stages: reducing swelling and restoring range of motion, rebuilding strength, retraining balance and proprioception, and finally sport-specific movement drills before a full return to play. Skipping stages to return faster is one of the most common causes of re-injury, so following a structured, professionally guided timeline matters more than the calendar date on your return.`,
  },
];

export const Blogs = () => (
  <section className="relative overflow-hidden py-16 sm:py-24 bg-slate-50">
    {/* Background glows */}
    <div
      className="absolute top-0 right-0 w-96 h-96 rounded-full"
      style={{ background: "rgba(147,197,114,0.12)", filter: "blur(120px)" }}
    />
    <div
      className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
      style={{ background: "rgba(106,158,79,0.12)", filter: "blur(120px)" }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span
          className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide"
          style={{ background: "#EAF4E1", color: "#6A9E4F" }}
        >
          HEALTH INSIGHTS
        </span>

        <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
          Latest Articles & Tips
        </h2>

        <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
          Expert orthopedic advice, treatment updates, and tips
          for a healthier, pain-free life.
        </p>
      </div>

      {/* Cards — explicit, mobile-first grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {blogs.map((blog, index) => (
          <motion.article
            key={blog.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group flex flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 w-full"
            style={{ border: "1px solid #C5E1AE" }}
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span
                className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-md"
                style={{ background: "linear-gradient(to right, #3D6B2C, #6A9E4F)" }}
              >
                {blog.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {blog.readTime}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#3D6B2C] transition-colors">
                {blog.title}
              </h3>

              <p className="text-sm text-slate-600 leading-6 flex-1">
                {blog.excerpt}
              </p>

              <Link
                to={`/blogs/${blog.slug}`}
                className="flex items-center gap-2 mt-5 text-sm font-semibold w-fit"
                style={{ color: "#6A9E4F" }}
              >
                Read More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;