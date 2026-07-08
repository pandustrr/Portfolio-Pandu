"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon as X, ArrowRightIcon as ArrowRight, ChevronLeftIcon as ChevronLeft, ChevronRightIcon as ChevronRight } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { UI_TEXT } from "@/constants";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: any;
  description: any;
  gallery: string[];
  period: string;
  status: any;
  tags: string[];
  github: string;
  demo: string;
}

const ProjectModal = ({ isOpen, onClose, title, description, gallery, period, status, tags, github, demo }: ProjectModalProps) => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    setActiveIndex(0);
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  const images = gallery && gallery.length > 0 ? gallery : [];

  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label={t(UI_TEXT).close}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-primary text-background rounded-full hover:bg-accent transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gallery */}
            {images.length > 0 && (
              <div className="relative h-64 md:h-96 bg-primary/5 overflow-hidden">
                <img
                  src={images[activeIndex]}
                  alt={`${t(title)} - ${activeIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-background/80 backdrop-blur-md rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-primary" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-background/80 backdrop-blur-md rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          aria-label={`Go to image ${i + 1}`}
                          className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-accent" : "bg-background/70"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {images.length > 1 && (
              <div className="flex gap-3 p-4 overflow-x-auto border-b border-primary/5">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`shrink-0 w-20 h-14 overflow-hidden rounded border-2 transition-colors ${i === activeIndex ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/10">
                  {t(status)}
                </span>
                <span className="text-xs text-foreground/40 font-medium uppercase tracking-wide">{period}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-heading">{t(title)}</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold text-accent uppercase tracking-wide">
                    #{tag}
                  </span>
                ))}
              </div>

              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50 mb-2">{t(UI_TEXT).aboutProject}</h4>
              <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                {t(description)}
              </p>

              <div className="flex items-center gap-6 pt-6 border-t border-primary/5">
                <Link href={demo} className="flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors group/link">
                  {t(UI_TEXT).liveDemo}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <Link href={github} className="flex items-center gap-2 text-xs font-bold text-primary/60 hover:text-primary transition-colors">
                  {t(UI_TEXT).viewProjects}
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
