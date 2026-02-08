import PageLayout from "../components/PageLayout";
import EventCard from "../components/EventCard";
import { motion } from "motion/react";

export default function Events() {
  const upcomingEvents = [
    {
      title: "Arithemania 2026",
      date: "March 29-30, 2026",
      description: "Our flagship mathematics hackathon. 24 hours of intense problem solving, algorithm design, and mathematical modeling.",
      type: "hackathon" as const,
      imageGradient: "from-blue-600 to-purple-600",
      link: "#"
    }
  ];

  const pastEvents = [
    {
      title: "Graph Theory 101",
      date: "February 10, 2025",
      description: "An interactive workshop covering the basics of graph theory, from Eulerian paths to network flow optimization.",
      type: "workshop" as const,
      imageGradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "The Infinite Void",
      date: "January 15, 2025",
      description: "A talk by Dr. S. Ramanujan on the philosophical and mathematical implications of zero and infinity.",
      type: "talk" as const,
      imageGradient: "from-amber-500 to-orange-600"
    },
    {
      title: "Integration Bee 2024",
      date: "November 12, 2024",
      description: "A rapid-fire tournament to find the fastest integrator on campus. Patterned after the MIT Integration Bee.",
      type: "hackathon" as const,
      imageGradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="text-gradient">Events</span></h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Join us for workshops, hackathons, and talks that push the boundaries of your mathematical understanding.
          </p>
        </motion.div>

        {/* Upcoming */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-muted">Upcoming</h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>

        {/* Past */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
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