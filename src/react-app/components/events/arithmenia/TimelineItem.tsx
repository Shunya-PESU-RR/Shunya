import { motion } from "motion/react";
import GlassCard from "../../GlassCard";

export interface TimelineItemData {
  period: string;
  title: string;
  description: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      <div className="hidden md:block absolute left-[-29px] top-10 h-3 w-3 rounded-full bg-[#0070f3] shadow-[0_0_12px_rgba(0,112,243,0.6)]" />
      <GlassCard className="hover:shadow-xl hover:shadow-blue-500/10 transition-shadow">
        <div className="text-xs md:text-sm font-semibold text-[#0070f3] mb-2">
          {item.period}
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2">
          {item.title}
        </h3>
        <p className="text-sm md:text-base text-muted leading-relaxed">
          {item.description}
        </p>
      </GlassCard>
    </motion.div>
  );
}
