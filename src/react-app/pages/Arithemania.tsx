import { Link } from "react-router-dom";
import { motion } from "motion/react";
import PageLayout from "../components/PageLayout";
import GlassCard from "../components/GlassCard";
import EventSection from "../components/events/arithemania/EventSection";
import TimelineItem, { TimelineItemData } from "../components/events/arithemania/TimelineItem";
import { usePageMeta } from "../hooks/usePageMeta";

const timeline: TimelineItemData[] = [
  {
    period: "Apr 1-9",
    title: "Registrations",
    description: "Teams of 2-4 register and submit their initial pitch."
  },
  {
    period: "Apr 11-12",
    title: "Development Phase",
    description: "Repository monitoring, mentor check-ins, and eliminations narrow the field to Top 9."
  },
  {
    period: "Apr 13",
    title: "Announcement of Shortlisted Teams",
    description: "Announcement of the top 9 teams selected for the finals."
  },
  {
    period: "Apr 15",
    title: "Finals and Prizes",
    description: "Final presentations, talks, and awards ceremony."
  }
];

const formatHighlights = [
  {
    title: "Hybrid Format",
    description: "Kick off online, collaborate across campuses, and present on-site for the finals."
  },
  {
    title: "Team Size",
    description: "Teams of 2-4 are encouraged to combine research, coding, and presentation skills."
  },
  {
    title: "Pitch Driven",
    description: "A clear problem statement and approach guide the shortlist and mentor feedback."
  },
  {
    title: "Repo Monitoring",
    description: "Progress is evaluated through regular repository updates and midpoint check-ins."
  }
];

const rules = [
  "Original work only. Reuse of existing public projects must be credited.",
  "All teammates must be from the same institution.",
  "Daily progress updates are required during development days.",
  "Finalists present live and answer jury questions."
];

export default function Arithemania() {
  usePageMeta({
    title: "Arithemania 5.0 — SHUNYA | PES University Mathematics Club",
    description: "Arithemania 5.0 is SHUNYA's national-level mathematics hackathon. Build in teams, pitch bold ideas, and compete for the final showcase.",
    path: "/events/arithemania"
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
                National Level Hackathon
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-[#7928ca]/10 text-[#7928ca]">
                Hybrid
              </span>
            </div>

            <div className="mb-6">
              <img
                src="/events/Arithemania%205.0.jpeg"
                alt="Arithemania 5.0 banner"
                className="w-full rounded-3xl object-cover shadow-2xl shadow-blue-900/20 border border-white/10"
                loading="lazy"
              />
            </div>
            <p className="text-lg md:text-2xl text-muted max-w-2xl">
              SHUNYA's flagship mathematics hackathon returns with deeper problems, sharper pitches, and a national stage.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/events"
                className="px-6 py-3 rounded-full btn-outline font-semibold text-base"
              >
                Back to Events
              </Link>
            </div>
          </motion.div>

        </section>

        <EventSection
          id="about"
          eyebrow="About"
          title="Why Arithemania 5.0"
          subtitle="Arithemania is built for teams that love proving ideas in public. It blends research, modeling, and product thinking into one intense sprint."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Problem First",
                description: "Choose a real mathematical challenge and show how it scales beyond the classroom."
              },
              {
                title: "Research + Build",
                description: "Back your approach with proof, data, or simulations that demonstrate rigor."
              },
              {
                title: "National Showcase",
                description: "Compete with teams across India and present to an expert jury." 
              }
            ].map((item) => (
              <GlassCard key={item.title} className="h-full">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </EventSection>

        <EventSection
          id="timeline"
          eyebrow="Timeline"
          title="Key Dates"
          subtitle="A fast-paced schedule with clear checkpoints to keep every team moving." 
        >
          <div className="relative">
            <div className="hidden md:block absolute left-[-24px] top-4 bottom-4 w-px bg-gradient-to-b from-[#0070f3]/60 via-[#7928ca]/30 to-transparent" />
            <div className="grid gap-6">
              {timeline.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </EventSection>

        <EventSection
          id="format"
          eyebrow="Rules and Format"
          title="How It Works"
          subtitle="Teams are judged on clarity, originality, and the rigor of their mathematical reasoning."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {formatHighlights.map((item) => (
              <GlassCard key={item.title} className="h-full">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-8 grid gap-3">
            {rules.map((rule) => (
              <div key={rule} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#0070f3] shadow-[0_0_8px_rgba(0,112,243,0.6)]" />
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </EventSection>

        <EventSection
          id="register"
          eyebrow="Get Involved"
          title="Ready to Pitch?"
          subtitle="Registrations open soon. Start aligning your team and preparing your idea now."
        >
          <GlassCard className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Register for Arithemania 5.0</h3>
              <p className="text-muted text-sm md:text-base">
                We will share the official registration link here as soon as entries open.
              </p>
            </div>
          </GlassCard>
        </EventSection>
      </div>
    </PageLayout>
  );
}
