import { Link } from "react-router-dom";
import { motion } from "motion/react";
import DecryptedText from "../components/DecryptedText";
import CubesScene from "../visuals/CubesScene";
import PageLayout from "../components/PageLayout";
import GlassCard from "../components/GlassCard";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
        <CubesScene />

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 md:mb-6 inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full glass-panel text-xs md:text-sm font-medium text-[#0070f3] dark:text-[#0070f3] animate-float"
          >
            Arithemania 2026 is coming soon.
          </motion.div>

          <Logo />

          <div className="h-12 md:h-16 mb-8 md:mb-12 flex items-center justify-center px-4">
            <DecryptedText
              text="Mathematics • Logic • Exploration"
              animateOn="view"
              speed={80}
              maxIterations={15}
              className="text-base md:text-xl lg:text-3xl text-muted font-light tracking-wide"
              parentClassName="block"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <Link to="/events" className="px-6 md:px-8 py-3 md:py-4 rounded-full btn-primary font-semibold text-base md:text-lg w-full sm:w-auto">
              Explore Events
            </Link>

            <Link to="/about" className="px-6 md:px-8 py-3 md:py-4 rounded-full btn-outline font-semibold text-base md:text-lg w-full sm:w-auto">
              Our Mission
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <GlassCard className="text-center py-8 md:py-12">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">∑</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Mathematics</h3>
              <p className="text-muted text-sm md:text-base">Beyond formulas. We explore the beauty and patterns that govern our universe.</p>
            </GlassCard>
            <GlassCard className="text-center py-8 md:py-12">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">∞</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Logic</h3>
              <p className="text-muted text-sm md:text-base">Critical thinking and structured reasoning to solve complex problems.</p>
            </GlassCard>
            <GlassCard className="text-center py-8 md:py-12 sm:col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">∆</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Exploration</h3>
              <p className="text-muted text-sm md:text-base">A platform to research, discuss, and discover new mathematical frontiers.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent Events</h2>
            <Link to="/events" className="text-[#0070f3] hover:text-[#7928ca] transition-colors font-medium text-sm md:text-base">View all →</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <GlassCard className="group cursor-pointer">
              <div className="h-40 md:h-48 rounded-xl bg-gradient-to-br from-[#0070f3]/20 to-[#7928ca]/20 mb-4 md:mb-6 group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="text-xs md:text-sm text-[#0070f3] font-medium mb-2">Upcoming • March 29, 2025</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Arithemania 2025</h3>
              <p className="text-muted text-xs md:text-sm">Our flagship math hackathon is back. Bigger, better, and more challenging.</p>
            </GlassCard>

            <GlassCard className="group cursor-pointer">
              <div className="h-40 md:h-48 rounded-xl bg-gradient-to-br from-[#7928ca]/20 to-[#0070f3]/20 mb-4 md:mb-6 group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="text-xs md:text-sm text-[#7928ca] font-medium mb-2">Workshop • Feb 10, 2025</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Graph Theory 101</h3>
              <p className="text-muted text-xs md:text-sm">Understanding the foundations of network analysis and its applications.</p>
            </GlassCard>

            <GlassCard className="group cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="h-40 md:h-48 rounded-xl bg-gradient-to-br from-[#0070f3]/20 to-[#7928ca]/20 mb-4 md:mb-6 group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="text-xs md:text-sm text-[#0070f3] font-medium mb-2">Talk • Jan 15, 2025</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">The Infinite Void</h3>
              <p className="text-muted text-xs md:text-sm">A deep dive into the concept of zero and infinity in modern mathematics.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center py-20 md:py-32 px-4 md:px-6 relative z-10">
        <GlassCard className="p-8 md:p-12 border-[#0070f3]/20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">"Everything is nothing, and nothing is everything."</h2>
          <p className="text-base md:text-xl text-muted leading-relaxed mb-6 md:mb-8">
            Shunya is the official, research-oriented mathematics club at PES University.
            We break down the myth of mathematics being mundane by discovering its practicality through workshops,
            research groups, and competitive events.
          </p>
          <Link to="/people" className="inline-block px-6 md:px-8 py-2.5 md:py-3 rounded-full btn-outline font-semibold text-sm md:text-base">
            Meet the Team
          </Link>
        </GlassCard>
      </section>
    </PageLayout>
  );
}
