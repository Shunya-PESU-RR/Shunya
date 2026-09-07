import PageLayout from "../components/PageLayout";
import EventCard from "../components/EventCard";
import GlassCard from "../components/GlassCard";
import { motion } from "motion/react";
import { usePageMeta } from "../hooks/usePageMeta";
import { Instagram, Linkedin } from "lucide-react";

export default function Events() {
  usePageMeta({
    title: "Events — SHUNYA | PES University Mathematics Club",
    description: "Arithemania 2026, Kalari, Code of Honour and more. Hackathons, workshops and math competitions from SHUNYA, the official maths club of PES University Bengaluru.",
    path: "/events"
  });

  const upcomingEvents: Array<{
    title: string;
    date: string;
    description: string;
    type: "hackathon" | "workshop" | "talk" | "math event";
    image: string;
    link?: string;
  }> = [];

  const pastEvents = [
    {
      title: "Arithemania 2026",
      date: "April 6-11, 2026",
      description: "Our flagship mathematics hackathon. 1 full week of intense problem solving, algorithm design, and mathematical modeling.",
      type: "hackathon" as const,
      image: "/events/arithemania_2026.png",
      link: "/events/arithemania"
    },
    {
      title: "Kalari 4.0",
      date: "February 11, 2026",
      description: "A challenge to foster heuristic thinking and problem-solving skills among students",
      type: "math event" as const,
      image: "/events/kalari-4.0.jpg"
    },
    {
      title: "Code of Honour 2.0 - Shunya x Team Samarpana",
      date: "October 11-12, 2025",
      description: "The coding and mathematics hackathon where logic meets defense",
      type: "hackathon" as const,
      image: "/events/coh2.0.jpg"
    },
    {
      title: "π-naccle2.0",
      date: "September 10, 2025",
      description: "The Ultimate Crown of Logic, challenging participants with relays, ciphers, and a strategic auction to test their mathematical prowess and quick thinking.",
      type: "math event" as const,  
      image: "/events/pinnacle.jpg"
    },
    {
      title: "Arithemania 4.0",
      date: "March 29-30, 2025",
      description: "Our flagship mathematics hackathon. 24 hours of intense problem solving, algorithm design, and mathematical modeling.",
      type: "hackathon" as const,
      image: "/events/arithemania4.0.jpg",
      // link: "#"
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="text-gradient">Events</span></h1>
          <p className="text-xl text-muted max-w-2xl">
            Join us for workshops, hackathons, and talks that push the boundaries of your mathematical understanding.
          </p>
        </motion.div>

        {/* Upcoming */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-muted">Upcoming</h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          ) : (
            <GlassCard className="p-8 md:p-12 border-[#0070f3]/20 text-center">
              <div className="flex justify-center mb-5">
                <img
                  src="/assets/shunya_logo.jpg"
                  alt="SHUNYA"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-lg border border-white/10"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Something exciting is brewing!</h3>
              <p className="text-muted text-base md:text-lg max-w-xl mx-auto mb-6">
                We're currently planning our next set of events, workshops, and competitions. Follow us on Instagram &amp; LinkedIn and keep an eye on this website for upcoming announcements!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/shunya_pes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-outline font-medium text-sm hover:text-[#E1306C] hover:border-[#E1306C]/50 transition-colors"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/shunya-pes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-outline font-medium text-sm hover:text-[#0077B5] hover:border-[#0077B5]/50 transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </GlassCard>
          )}
        </section>

        {/* Past */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-muted">Past Archives</h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} isPast />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}