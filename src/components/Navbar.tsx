"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Bars3Icon as Menu, 
  LanguageIcon as Languages, 
  ChevronRightIcon as ChevronRight, 
  ChevronLeftIcon as ChevronLeft 
} from "@heroicons/react/24/outline";
import { NAV_LINKS } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-8 right-8 z-50 flex items-center justify-end pointer-events-none">
      <motion.nav
        initial={false}
        animate={{ 
          paddingLeft: scrolled ? "12px" : "24px",
          paddingRight: scrolled ? "12px" : "24px",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative glass-card h-14 rounded-none flex items-center border-primary/10 shadow-2xl pointer-events-auto overflow-hidden"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <Link key={t(link.name)} href={link.href} className="group relative">
                <div className="px-3 py-2 rounded-none transition-all duration-300 hover:bg-primary/[0.03] flex items-center justify-center min-w-[40px]">
                  {scrolled ? (
                    <motion.div
                      key="icon"
                      initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <link.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.span 
                      key="text"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 group-hover:text-primary transition-colors font-heading whitespace-nowrap"
                    >
                      {t(link.name)}
                    </motion.span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="w-px h-6 bg-primary/10" />

          {/* Language Switcher */}
          <button 
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="p-2.5 hover:bg-primary/[0.03] rounded-none transition-all flex items-center gap-3 group shrink-0"
            title="Switch Language"
          >
            <Languages className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            {!scrolled && (
              <motion.span 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                className="text-[10px] font-bold uppercase text-foreground/40 font-heading"
              >
                {language}
              </motion.span>
            )}
          </button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
