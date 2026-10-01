import { Link } from "react-router-dom";
import { motion } from "motion/react";
import PageLayout from "../components/PageLayout";
import GlassCard from "../components/GlassCard";
import EventSection from "../components/events/arithemania/EventSection";
import { usePageMeta } from "../hooks/usePageMeta";
import { Trophy, Sparkles } from "lucide-react";

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
  "Participants brought their sharpest analytical skills and adaptability under pressure.",
  "Congratulations to all the winners and participants for an outstanding competition!"
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
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-emerald-500/10 text-emerald-500">
                Event Concluded
              </span>
            </div>

            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10">
                <img
                  src="/events/Pinnacle%203.0/Pinnacle%203.0.jpeg"
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
                href="#winners"
                className="px-6 py-3 rounded-full btn-primary font-semibold text-base text-center inline-flex items-center justify-center gap-2"
              >
                <Trophy size={18} />
                View Winners
              </a>
            </div>
          </motion.div>
        </section>

        {/* Winners & Congratulations */}
        <EventSection
          id="winners"
          eyebrow="Hall of Fame"
          title="Congratulations to Our Winners!"
          subtitle="A huge congratulations to the brilliant minds who took on the challenge and emerged victorious at Pinnacle 3.0!"
        >
          <GlassCard className="p-6 md:p-8 border-amber-500/30 shadow-2xl shadow-amber-500/5 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gradient">Pinnacle 3.0 Champions</h3>
                <p className="text-sm text-muted">Felicitation at BE Block Seminar Hall 7, PES University</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl mb-6 bg-black/40">
              <img
                src="/events/Pinnacle%203.0/Pinnacle%203.0%20Winners.jpeg"
                alt="Pinnacle 3.0 Winners and Felicitation"
                className="w-full h-auto object-cover max-h-[600px] mx-auto rounded-2xl"
                loading="lazy"
              />
            </div>

            <div className="p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="text-amber-400 shrink-0" size={24} />
                <p className="text-sm md:text-base text-muted">
                  Kudos to all participating teams for displaying extraordinary mathematical intuition, speed, and analytical rigor throughout the competition!
                </p>
              </div>
            </div>
          </GlassCard>
        </EventSection>

        {/* About */}
        <EventSection
          id="about"
          eyebrow="About"
          title="Why Pinnacle 3.0"
          subtitle="Pinnacle 3.0 was crafted for students who thrive on mathematical challenges, analytical reasoning, and competitive strategy under time constraints."
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
          title="Highlights"
          subtitle="An exhilarating mathematics competition designed to challenge every dimension of problem solving."
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

        {/* Event Conclusion & Socials */}
        <EventSection
          id="register"
          eyebrow="Registration"
          title="Registrations Closed"
          subtitle="Registrations for Pinnacle 3.0 are officially closed as the event has concluded. Thank you to everyone who participated!"
        >
          <GlassCard className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Tuned for Future Events</h3>
              <p className="text-muted text-sm md:text-base">
                Follow Shunya on LinkedIn and Instagram to get notified about our upcoming hackathons, competitions, and workshops.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-muted font-medium text-sm">
                Registrations Closed
              </span>
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
