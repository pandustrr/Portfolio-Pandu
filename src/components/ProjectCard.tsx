"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon as ArrowRight } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { UI_TEXT } from "@/constants";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  title: any;
  description: any;
  category?: string;
  image?: string;
  gallery?: string[];
  period: string;
  status: any;
  tags: string[];
  github: string;
  demo: string;
  index: number;
}

const ProjectCard = ({ title, description, image, gallery, period, status, tags, github, demo, index }: ProjectCardProps) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group glass-card overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-56 overflow-hidden bg-primary/5">
          {image ? (
            <img
              src={image}
              alt={t(title)}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/5" />
          )}

          <div className="absolute top-4 right-4 z-20">
               <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/10">
                  {t(status)}
                </span>
          </div>

          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-5 py-2 bg-background text-primary text-xs font-bold uppercase tracking-wider">
              {t(UI_TEXT).viewDetail}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold text-accent uppercase tracking-wide">
                #{tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300 font-heading">{t(title)}</h3>
          <p className="text-xs text-foreground/40 mb-6 font-medium uppercase tracking-wide">{period}</p>

          <p className="text-foreground/60 text-sm mb-10 leading-relaxed h-12 line-clamp-2">
            {t(description)}
          </p>

          <div className="flex items-center gap-6 pt-6 border-t border-primary/5">
            <Link href={demo} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors group/link">
              {t(UI_TEXT).liveDemo}
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        gallery={gallery || (image ? [image] : [])}
        period={period}
        status={status}
        tags={tags}
        github={github}
        demo={demo}
      />
    </>
  );
};

export default ProjectCard;
