import { Link } from "react-router-dom";
import { motion } from "motion/react";
import PageLayout from "../components/PageLayout";
import GlassCard from "../components/GlassCard";
import EventSection from "../components/events/arithemania/EventSection";
import { usePageMeta } from "../hooks/usePageMeta";

const pillars = [
  {
    title: "Mathematical Ingenuity",
    description:
      "Tackle challenging problems that test analytical depth, logical reasoning, and mathematical intuition."
  },
  {
    title: "Strategic Thinking",
    description:
      "Formulate effective approaches and make calculated decisions under evolving competitive scenarios."
  },
  {
    title: "Agility & Accuracy",
    description:
      "Test speed, precision, and adaptability while solving under strict time constraints."
  }
];

const eventDetails = [
  {
    title: "Date",
    description: "30 September 2026"
  },
  {
    title: "Venue",
    description: "BE Block Seminar Hall 7"
  },
  {
    title: "Organized by",
    description: "Shunya — The Official Mathematics Club of PES University"
  },
  {
    title: "Event Type",
    description: "Competitive Mathematics & Problem Solving"
  }
];

const highlights = [
  "Open to all passionate mathematics and problem-solving enthusiasts at PES University.",
  "Designed to test logical depth, mathematical accuracy, and strategic decision-making.",
  "Participants are encouraged to bring their sharpest analytical skills and adaptability under pressure.",
  "Register online using the official registration link to secure your participation."
];

export default function Pinnacle() {
  usePageMeta({
    title: "Pinnacle 3.0 — SHUNYA | PES University Mathematics Club",
    description:
      "Pinnacle 3.0 is an engaging mathematics-based competitive event by Shunya, focused on problem-solving, strategic thinking, and mathematical skills.",
    path: "/events/pinnacle3.0"
  });

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="relative py-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-3xl px-6 md:px-10 py-10 md:py-14 border border-white/10"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-[#0070f3]/10 text-[#0070f3]">
                Mathematics Competition
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-[#7928ca]/10 text-[#7928ca]">
                Registrations Open
              </span>
            </div>

            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10">
                <img
                  src="/events/Pinnacle%203.0.jpeg"
                  alt="Pinnacle 3.0 poster"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <h1 className="sr-only">Pinnacle 3.0</h1>

            <p className="text-lg md:text-2xl text-muted max-w-2xl">
              Pinnacle 3.0 is an engaging mathematics-based competitive event designed to challenge participants&apos; problem-solving, strategic thinking, mathematical skills, and ability to perform under pressure.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/events"
                className="px-6 py-3 rounded-full btn-outline font-semibold text-base text-center"
              >
                Back to Events
              </Link>
              <a
                href="https://forms.gle/fTKy9ZQkJHQtkUH39"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full btn-primary font-semibold text-base text-center inline-block"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <EventSection
          id="about"
          eyebrow="About"
          title="Why Pinnacle 3.0"
          subtitle="Pinnacle 3.0 is crafted for students who thrive on mathematical challenges, analytical reasoning, and competitive strategy under time constraints."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <GlassCard key={item.title} className="h-full">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </EventSection>

        {/* Details */}
        <EventSection
          id="details"
          eyebrow="Details"
          title="Event Information"
          subtitle="Key information regarding the date, venue, and organization of Pinnacle 3.0."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventDetails.map((item) => (
              <GlassCard key={item.title} className="h-full">
                <div className="text-xs font-bold text-[#0070f3] mb-2 uppercase tracking-widest">
                  {item.title}
                </div>
                <div className="text-base md:text-lg font-bold">
                  {item.description}
                </div>
              </GlassCard>
            ))}
          </div>
        </EventSection>

        {/* Highlights / Overview */}
        <EventSection
          id="overview"
          eyebrow="Overview"
          title="What to Expect"
          subtitle="Prepare yourself for an exhilarating mathematics competition designed to challenge every dimension of problem solving."
        >
          <div className="grid gap-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#0070f3] shadow-[0_0_8px_rgba(0,112,243,0.6)] flex-shrink-0" />
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </EventSection>

        {/* Registration CTA */}
        <EventSection
          id="register"
          eyebrow="Registration"
          title="Register for Pinnacle 3.0"
          subtitle="Registrations for Pinnacle 3.0 are now open. Fill out the official form to participate."
        >
          <GlassCard className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Secure Your Spot</h3>
              <p className="text-muted text-sm md:text-base">
                Click below to register for Pinnacle 3.0 via the official Google Form.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://forms.gle/fTKy9ZQkJHQtkUH39"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full btn-primary font-semibold text-sm inline-block"
              >
                Register via Google Form
              </a>
              <a
                href="https://www.instagram.com/shunya_pes/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full btn-outline font-medium text-sm"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/shunya-pes/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full btn-outline font-medium text-sm"
              >
                LinkedIn
              </a>
            </div>
          </GlassCard>
        </EventSection>
      </div>
    </PageLayout>
  );
}
