"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-[0.2em] text-primary font-heading uppercase">{title}</h2>
        {subtitle && <p className="text-foreground/30 max-w-xl mx-auto text-[10px] md:text-xs leading-relaxed font-mono uppercase tracking-[0.2em] mb-6">{subtitle}</p>}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-1 bg-primary mx-auto rounded-none" 
        />
      </motion.div>
    </div>
  );
};

export default SectionTitle;
