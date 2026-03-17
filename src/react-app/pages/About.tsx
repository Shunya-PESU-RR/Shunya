import PageLayout from "../components/PageLayout";
import GlassCard from "../components/GlassCard";
import { motion } from "motion/react";

export default function About() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">About Shunya</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            The official mathematics club of PES University, exploring the beauty and practicality of mathematics.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Large Left Card - Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 lg:row-span-2"
          >
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between min-h-[400px] lg:min-h-[600px]">
              <div>
                <div className="text-xs md:text-sm font-bold text-[#0070f3] mb-3 md:mb-4 uppercase tracking-widest">
                  The Beginning
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                  Founded on December 14, 2021
                </h2>
                <div className="text-sm md:text-base lg:text-lg text-muted space-y-4 leading-relaxed">
                  <p>
                    Shunya started with a simple idea: Mathematics is not just about numbers on a page;
                    it's a language that describes the universe.
                  </p>
                  <p>
                    What began as a small group of enthusiasts has grown into the official mathematics club of PES University,
                    spanning all three campuses.
                  </p>
                  <p>
                    We are dedicated to breaking the myth that math is mundane or purely academic, discovering its practicality through workshops, research groups, and competitive events.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-xs md:text-sm font-bold text-[#7928ca] mb-3 md:mb-4 uppercase tracking-widest">
                  Our Mission
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                  To Explore, Analyze, and Create
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-muted leading-relaxed">
                  We aim to promote mathematical literacy and analytical thinking through practical application.
                  Whether it's game theory in poker, the geometry of black holes, or the algorithms behind AI,
                  we explore it all.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Top Right Card - Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-0 h-full min-h-[200px] lg:min-h-[290px] border-[#7928ca]/20 overflow-hidden relative group">
              <img 
                src="/events/team_pic.jpg" 
                alt="Shunya Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8 pointer-events-none">
                <div className="text-white">
                  <div className="text-xs md:text-sm font-bold text-[#7928ca] mb-1 md:mb-2 uppercase tracking-widest drop-shadow-md">
                    The Team
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold drop-shadow-lg">Minds Behind Shunya</h3>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Bottom Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-center items-center text-center min-h-[180px] lg:min-h-[290px] bg-gradient-to-br from-[#0070f3]/5 to-transparent">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0070f3] mb-2 md:mb-3">3+</div>
              <div className="text-base md:text-lg font-medium text-muted">Campuses</div>
              <div className="text-xs md:text-sm text-muted/60 mt-2">Across PES University</div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4"
          >
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-center items-center text-center min-h-[180px] lg:min-h-[290px] bg-gradient-to-br from-[#7928ca]/5 to-transparent">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#7928ca] mb-2 md:mb-3">500+</div>
              <div className="text-base md:text-lg font-medium text-muted">Members</div>
              <div className="text-xs md:text-sm text-muted/60 mt-2">Active Community</div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <GlassCard className="p-6 md:p-10 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              "Everything is nothing, and nothing is everything."
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              The name "Shunya" (शून्य) represents zero — the void, the beginning, and infinite potential.
              It embodies our philosophy that from nothing comes everything, and in understanding the void,
              we unlock the universe.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </PageLayout>
  );
}