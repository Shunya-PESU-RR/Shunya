import { Link } from "react-router-dom";
import { motion } from "motion/react";
import DecryptedText from "../components/DecryptedText";
import VoidScene from "../visuals/VoidScene";
import PageLayout from "../components/PageLayout";
import GlassCard from "../components/GlassCard";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center">
        <VoidScene />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 inline-block px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-blue-600 dark:text-blue-400 animate-float"
          >
            Arithemania 2026 is coming soon.
          </motion.div>

          <Logo />

          <div className="h-16 mb-12 flex items-center justify-center">
            <DecryptedText
              text="Mathematics • Logic • Exploration"
              animateOn="view"
              speed={80}
              maxIterations={15}
              className="text-xl md:text-3xl text-muted font-light tracking-wide"
              parentClassName="block"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/events" className="px-8 py-4 rounded-full btn-primary font-semibold text-lg w-full sm:w-auto">
              Explore Events
            </Link>

            <Link to="/about" className="px-8 py-4 rounded-full btn-outline font-semibold text-lg w-full sm:w-auto">
              Our Mission
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="text-center py-12">
              <div className="text-4xl mb-4">∑</div>
              <h3 className="text-2xl font-bold mb-4">Mathematics</h3>
              <p className="text-muted">Beyond formulas. We explore the beauty and patterns that govern our universe.</p>
            </GlassCard>
            <GlassCard className="text-center py-12">
              <div className="text-4xl mb-4">∞</div>
              <h3 className="text-2xl font-bold mb-4">Logic</h3>
              <p className="text-muted">Critical thinking and structured reasoning to solve complex problems.</p>
            </GlassCard>
            <GlassCard className="text-center py-12">
              <div className="text-4xl mb-4">∆</div>
              <h3 className="text-2xl font-bold mb-4">Exploration</h3>
              <p className="text-muted">A platform to research, discuss, and discover new mathematical frontiers.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Recent Events</h2>
            <Link to="/events" className="text-blue-500 hover:text-blue-400 transition-colors font-medium">View all →</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard className="group cursor-pointer">
              <div className="h-48 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6 group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="text-sm text-blue-500 font-medium mb-2">Upcoming • March 29, 2025</div>
              <h3 className="text-xl font-bold mb-2">Arithemania 2025</h3>
              <p className="text-muted text-sm">Our flagship math hackathon is back. Bigger, better, and more challenging.</p>
            </GlassCard>

            <GlassCard className="group cursor-pointer">
              <div className="h-48 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-6 group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="text-sm text-emerald-500 font-medium mb-2">Workshop • Feb 10, 2025</div>
              <h3 className="text-xl font-bold mb-2">Graph Theory 101</h3>
              <p className="text-muted text-sm">Understanding the foundations of network analysis and its applications.</p>
            </GlassCard>

            <GlassCard className="group cursor-pointer">
              <div className="h-48 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-6 group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="text-sm text-amber-500 font-medium mb-2">Talk • Jan 15, 2025</div>
              <h3 className="text-xl font-bold mb-2">The Infinite Void</h3>
              <p className="text-muted text-sm">A deep dive into the concept of zero and infinity in modern mathematics.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center py-32 px-6 relative z-10">
        <GlassCard className="p-12 border-blue-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"Everything is nothing, and nothing is everything."</h2>
          <p className="text-xl text-muted leading-relaxed mb-8">
            Shunya is the official, research-oriented mathematics club at PES University.
            We break down the myth of mathematics being mundane by discovering its practicality through workshops,
            research groups, and competitive events.
          </p>
          <Link to="/people" className="inline-block px-8 py-3 rounded-full btn-outline font-semibold">
            Meet the Team
          </Link>
        </GlassCard>
      </section>
    </PageLayout>
  );
}
