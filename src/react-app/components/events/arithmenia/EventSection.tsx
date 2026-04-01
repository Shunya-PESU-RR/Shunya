import { motion } from "motion/react";
import type { ReactNode } from "react";

interface EventSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function EventSection({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: EventSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 md:mb-12"
      >
        {eyebrow && (
          <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#0070f3] mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-muted max-w-3xl">
            {subtitle}
          </p>
        )}
      </motion.div>

      {children}
    </section>
  );
}
