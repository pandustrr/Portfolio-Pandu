"use client";

import Link from "next/link";
import { RocketLaunchIcon as Rocket } from "@heroicons/react/24/outline";
import { UI_TEXT } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const ui = t(UI_TEXT);

  return (
    <footer className="py-20 border-t border-foreground/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded-none flex items-center justify-center border border-primary/20 group">
              <Rocket className="text-background w-5 h-5 group-hover:rotate-90 transition-transform" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] font-mono uppercase">PANDU<span className="text-primary">.SYS</span></span>
          </div>

          <p className="text-[10px] text-foreground/30 font-bold font-mono uppercase tracking-[0.2em]">
            &copy; {currentYear} // {ui.footerCopyright}
          </p>

          <div className="flex gap-10">
            <Link href="https://github.com/pandu" target="_blank" className="text-[10px] font-bold text-foreground/30 hover:text-primary transition-colors uppercase tracking-[0.3em] font-mono">
              [ GITHUB ]
            </Link>
            <Link href="https://linkedin.com/in/pandu" target="_blank" className="text-[10px] font-bold text-foreground/30 hover:text-primary transition-colors uppercase tracking-[0.3em] font-mono">
              [ LINKEDIN ]
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
