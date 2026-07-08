"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO, UI_TEXT } from "@/constants";
import SectionTitle from "./SectionTitle";
import { PaperAirplaneIcon as Send } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const ui = t(UI_TEXT);

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title={ui.getInTouch} 
          subtitle={ui.contactSubtitle} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {CONTACT_INFO.map((channel, index) => (
              <motion.a
                key={index}
                href={channel.url || ""}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card p-5 rounded-none flex items-center gap-6 hover:border-primary/40 shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300 border border-primary/20">
                  <channel.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-foreground/30 uppercase tracking-[0.3em] mb-1 font-mono">{t(channel.name)}</h4>
                  <p className="text-base font-bold tracking-tight font-heading">{channel.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 rounded-none relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            
            <form className="flex flex-col gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/40 font-mono">{ui.formName}</label>
                <input 
                  type="text" 
                  placeholder="PANDU SATRIA" 
                  className="bg-foreground/[0.03] border border-border rounded-none p-4 outline-none focus:border-primary focus:bg-background transition-all duration-300 text-sm font-bold font-mono placeholder:text-foreground/10"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/40 font-mono">{ui.formEmail}</label>
                <input 
                  type="email" 
                  placeholder="PANDU@EXAMPLE.COM" 
                  className="bg-foreground/[0.03] border border-border rounded-none p-4 outline-none focus:border-primary focus:bg-background transition-all duration-300 text-sm font-bold font-mono placeholder:text-foreground/10"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/40 font-mono">{ui.formMessage}</label>
                <textarea 
                  rows={4} 
                  placeholder="..." 
                  className="bg-foreground/[0.03] border border-border rounded-none p-4 outline-none focus:border-primary focus:bg-background transition-all duration-300 text-sm font-bold font-mono resize-none placeholder:text-foreground/10"
                />
              </div>
              <button className="btn-primary py-5 text-sm font-bold uppercase tracking-[0.3em] justify-center shadow-lg shadow-primary/10">
                {ui.formSend}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
