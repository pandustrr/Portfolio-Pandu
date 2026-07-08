"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_CONTENT } from "@/constants";
import { ArrowRightIcon as ArrowRight, ChevronDownIcon as ChevronDown, ArrowDownTrayIcon as Download } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();
  const content = HERO_CONTENT[language];

  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-0 overflow-hidden">
      {/* Huge Outlined Background Letters */}
      <div className="absolute inset-0 flex items-center justify-start pl-[5%] pointer-events-none select-none overflow-hidden">
        <h1 className="text-[35vw] font-black font-heading leading-none text-transparent border-text stroke-primary opacity-[0.02]" style={{ WebkitTextStroke: '2px var(--color-primary)' }}>
          PNDU
        </h1>
      </div>

      {/* Far Left Technical Bar Decor */}
      <div className="absolute top-0 left-0 h-full w-24 hidden xl:flex flex-col items-center justify-center gap-12 opacity-10">
        <div className="h-32 w-px bg-primary" />
        <div className="rotate-90 text-[10px] font-bold tracking-[1em] uppercase whitespace-nowrap text-primary">CREATIVE_ENGINEER</div>
        <div className="h-32 w-px bg-primary" />
      </div>


      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto relative">
          {/* Left Content - Balanced & Clear */}
          <div className="lg:col-span-5 flex flex-col items-start text-left relative">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-primary font-heading uppercase">
                {content.name.split(' ')[0]}<br />
                <span className="text-transparent border-text stroke-primary opacity-80" style={{ WebkitTextStroke: '2px var(--color-primary)' }}>{content.name.split(' ')[1]}</span>
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-accent/40" />
                <h2 className="text-sm md:text-base font-bold text-accent tracking-[0.4em] uppercase font-heading">
                   {content.role}
                </h2>
              </div>

              <p className="text-xl md:text-2xl font-medium text-primary/70 mb-10 italic max-w-xl font-heading leading-tight border-l-4 border-accent/10 pl-8">
                "{content.motto}"
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mt-4"
            >
              <Link href="#projects" className="btn-primary group px-12 py-5 w-full sm:w-auto shadow-xl shadow-primary/5">
                {content.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="#contact" className="btn-secondary px-12 py-5 w-full sm:w-auto">
                {content.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          {/* Integrated Vertical Divider (Better visibility & Positioning) */}
          <div className="hidden lg:flex absolute left-[41.66%] -translate-x-1/2 top-1/2 -translate-y-1/2 h-[400px] flex-col items-center opacity-40 pointer-events-none">
             <div className="w-2 h-2 rounded-full bg-primary" />
             <div className="flex-1 w-px bg-primary" />
             <div className="w-1.5 h-1.5 rounded-full border border-primary my-4" />
             <div className="flex-1 w-px bg-primary" />
             <div className="w-2 h-2 rounded-full bg-primary" />
          </div>

          {/* Right Content - Enormous Floating Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="lg:col-span-7 relative flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center lg:translate-y-10 lg:translate-x-12">
              {/* Decorative Background for Depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[90%] bg-accent/[0.03] -rotate-12 rounded-none pointer-events-none" />

              {/* Big Name Watermark Behind Photo */}
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-[10vw] lg:text-[6vw] font-black font-heading uppercase leading-none whitespace-nowrap text-transparent border-text stroke-primary opacity-[0.06] pointer-events-none select-none" style={{ WebkitTextStroke: '2px var(--color-primary)' }}>
                PANDU SATRIA
              </h2>

              {/* Photo */}
              <div className="relative h-full w-auto z-10">
                 <Image
                   src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photo-pandu.png`}
                   alt="Pandu Satria"
                   width={500}
                   height={600}
                   className="h-full w-auto object-contain drop-shadow-2xl -scale-x-100"
                   priority
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
