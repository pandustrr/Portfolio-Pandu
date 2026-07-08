"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bars3Icon as Menu, 
  XMarkIcon as Close,
  LanguageIcon as Languages
} from "@heroicons/react/24/outline";
import { NAV_LINKS } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex items-center justify-end pointer-events-none">
        {/* Desktop Navbar */}
        <motion.nav
          initial={false}
          animate={{ 
            paddingLeft: scrolled ? "12px" : "24px",
            paddingRight: scrolled ? "12px" : "24px",
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="hidden md:flex relative glass-card h-14 rounded-none items-center border-primary/10 shadow-2xl pointer-events-auto overflow-hidden"
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

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden pointer-events-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 flex items-center justify-center glass-card border border-primary/10 text-primary shadow-xl rounded-none hover:bg-primary/[0.03] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <Close className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[49] md:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-[320px] bg-background border-l border-primary/10 px-8 py-16 flex flex-col justify-between shadow-2xl"
            >
              <div className="flex flex-col gap-12 mt-8">
                {/* Brand Logo in Menu */}
                <div>
                  <h3 className="text-2xl font-black tracking-tighter text-primary font-heading uppercase leading-none">
                    PANDU<br />
                    <span className="text-transparent border-text stroke-primary opacity-80" style={{ WebkitTextStroke: '1px var(--color-primary)' }}>SATRIA</span>
                  </h3>
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-accent mt-2 block font-mono">Portfolio v4.0</span>
                </div>

                {/* Vertical Links */}
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={t(link.name)}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 py-2 border-b border-primary/5 hover:border-primary/20 transition-all group"
                    >
                      <div className="w-8 h-8 bg-primary/5 rounded-none flex items-center justify-center text-primary border border-primary/10">
                        <link.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50 group-hover:text-primary transition-colors font-heading">
                        {t(link.name)}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Languages / Settings at bottom */}
              <div className="flex flex-col gap-6 pt-6 border-t border-primary/5">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/30 font-mono">Language / Bahasa</span>
                  <button
                    onClick={() => {
                      setLanguage(language === "id" ? "en" : "id");
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest font-mono text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Languages className="w-3.5 h-3.5" />
                    {language === "id" ? "English" : "Indonesia"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
