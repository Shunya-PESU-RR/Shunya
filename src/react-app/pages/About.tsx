import PageLayout from "../components/PageLayout";
import GlassCard from "../components/GlassCard";
import { motion } from "motion/react";

export default function About() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="text-gradient">Our Story</span></h1>
        </motion.div>

        {/* History & Mission */}
        <div className="space-y-12">
          <GlassCard className="p-8 md:p-12">
            <div className="text-sm font-bold text-blue-500 mb-4 uppercase tracking-widest">The Beginning</div>
            <h2 className="text-3xl font-bold mb-6">Founded on December 14, 2021</h2>
            <div className="text-lg text-muted space-y-6 leading-relaxed">
              <p>
                Shunya started with a simple idea: Mathematics is not just about numbers on a page;
                it's a language that describes the universe.
              </p>
              <p>
                What began as a small group of enthusiasts has grown into the official mathematics club of PES University,
                spanning all three campuses. We are dedicated to breaking the myth that math is mundane or purely academic.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12 border-emerald-500/30">
            <div className="text-sm font-bold text-emerald-500 mb-4 uppercase tracking-widest">Our Mission</div>
            <h2 className="text-3xl font-bold mb-6">To Explore, Analyze, and Create.</h2>
            <div className="text-lg text-muted space-y-6 leading-relaxed">
              <p>
                We aim to promote mathematical literacy and analytical thinking through practical application.
                Whether it's game theory in poker, the geometry of black holes, or the algorithms behind AI,
                we explore it all.
              </p>
            </div>
          </GlassCard>

          {/* Stats / Trivia */}
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="text-center py-8">
              <div className="text-4xl font-bold text-blue-500 mb-2">3+</div>
              <div className="text-muted">Campuses</div>
            </GlassCard>
            <GlassCard className="text-center py-8">
              <div className="text-4xl font-bold text-purple-500 mb-2">500+</div>
              <div className="text-muted">Community Members</div>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}