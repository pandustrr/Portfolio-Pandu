"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { PROJECTS, ABOUT_CONTENT, EDUCATION, CERTIFICATIONS, UI_TEXT } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();
  const about = t(ABOUT_CONTENT);
  const ui = t(UI_TEXT);

  return (
    <main className="min-h-screen selection:bg-accent/30 max-w-[1600px] mx-auto">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section - Split Layout */}
      <section id="about" className="section-padding relative overflow-hidden">
        <div className="container mx-auto relative z-10 max-w-5xl">
          <SectionTitle title={about.title} />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 md:p-10 lg:p-12 border border-primary/5 flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch"
          >
             {/* Left Side: Short Philosophy */}
             <div className="lg:w-[45%] flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3 block font-mono">Fokus & Dedikasi</span>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary leading-snug tracking-tight font-heading">
                  {about.description1}
                </h3>
             </div>

             {/* Decorative Divider */}
             <div className="hidden lg:block w-px bg-primary/10 self-stretch my-2 shrink-0" />

             {/* Right Side: Detailed Biography */}
             <div className="lg:w-[55%] flex flex-col justify-between">
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed font-normal mb-8">
                  {about.description2}
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-xs">
                  <div className="border border-primary/10 p-4 relative group hover:border-accent/40 transition-colors">
                    <span className="block text-xl md:text-2xl font-black text-primary font-heading">3.82</span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-accent mt-1">GPA / IPK</span>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent/20" />
                  </div>
                  <div className="border border-primary/10 p-4 relative group hover:border-accent/40 transition-colors">
                    <span className="block text-xl md:text-2xl font-black text-primary font-heading">S1</span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-accent mt-1">Informatika</span>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent/20" />
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-foreground/[0.01] relative overflow-hidden">
        {/* Background Code Snippet - Technical Decor */}
        <div className="absolute top-20 right-[-5%] font-mono text-[14px] text-primary/5 select-none leading-relaxed hidden lg:block rotate-1">
          {`const system = { \n  status: "active",\n  mode: "production",\n  secure: true\n};`}
        </div>

        <div className="container mx-auto relative z-10">
          <SectionTitle 
            title={t({ id: "Proyek Terpilih", en: "Selected Projects" })} 
            subtitle={t({ id: "Integrasi antara kode, desain, dan solusi fungsional.", en: "The integration of code, design, and functional solutions." })} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 max-w-7xl mx-auto">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={index % 2 === 1 ? "lg:mt-24" : ""}
              >
                <ProjectCard 
                  {...project} 
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Education & Experience Section */}
      <section id="education" className="section-padding">
        <div className="container mx-auto">
          <SectionTitle title={ui.experience} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Education */}
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-5 mb-4">
                 <div className="w-2 h-10 bg-primary rounded-none" />
                 <h3 className="text-3xl font-bold tracking-tight font-heading">{ui.education}</h3>
              </div>
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-none relative border-l-4 border-l-primary overflow-hidden border-border"
                >
                  <div className="absolute top-0 right-0 p-8 text-foreground/[0.02] -mr-4 -mt-4">
                    <edu.icon className="w-32 h-32" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-none mb-6 border border-primary/20 font-mono">
                    {edu.year}
                  </span>
                  <h4 className="text-xl font-bold mb-1 tracking-tight font-heading">{edu.institution}</h4>
                  <p className="text-sm font-bold text-foreground/70 mb-4 font-mono uppercase tracking-wide">{t(edu.degree)}</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-8 bg-primary/5 inline-block px-3 py-1 rounded-none border border-primary/10 font-mono">{edu.score}</p>
                  <div className="h-px w-full bg-foreground/5 mb-8" />
                  <p className="text-sm text-foreground/50 leading-relaxed font-medium">{t(edu.details)}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications & Lomba */}
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-5 mb-4">
                 <div className="w-2 h-10 bg-primary rounded-none" />
                 <h3 className="text-3xl font-bold tracking-tight font-heading">{ui.certs}</h3>
              </div>
              <div className="flex flex-col gap-8">
                {CERTIFICATIONS.map((cert, certIndex) => (
                  <motion.div 
                    key={certIndex}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-none relative group border border-border"
                  >
                    <div className="flex justify-between items-center mb-8 pb-6 border-b border-border">
                      <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase font-mono">{cert.year}</span>
                      {cert.category && <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/30 font-mono">{t(cert.category)}</span>}
                    </div>
                    <ul className="flex flex-col gap-4">
                      {t(cert.items).map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="text-[11px] text-foreground/70 flex gap-4 font-medium group/item">
                          <div className="w-1 h-1 bg-primary rounded-none mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </main>
  );
}
