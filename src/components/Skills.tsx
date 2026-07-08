"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants";
import SectionTitle from "./SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <SectionTitle 
          title={t({ id: "Keahlian Saya", en: "My Skills" })} 
          subtitle={t({ 
             id: "Daftar teknologi dan alat yang saya gunakan untuk mewujudkan ide menjadi solusi digital.", 
             en: "A comprehensive list of the technologies and tools I use to bring ideas to life." 
          })} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div
              key={t(skillGroup.category)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card p-6 rounded-none border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-none flex items-center justify-center text-primary border border-primary/20">
                  <skillGroup.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono">{t(skillGroup.category)}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {(Array.isArray(skillGroup.items) ? skillGroup.items : t(skillGroup.items)).map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-foreground/[0.03] hover:bg-primary hover:text-background transition-all rounded-none text-[10px] font-bold border border-border font-mono uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
