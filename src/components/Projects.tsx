"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLang } from "./LanguageProvider";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product management, cart, and checkout.",
    image: "/image/ecom.png",
    category: "E-commerce",
    stack: ["Next.js", "Stripe", "PostgreSQL"],
    url: "",
  },
  {
    title: "E-Commerce Store v2",
    description: "Advanced e-commerce store with multi-vendor support and analytics dashboard.",
    image: "/image/ecom-2-web.png",
    category: "E-commerce",
    stack: ["React", "Node.js", "MongoDB"],
    url: "",
  },
  {
    title: "LeefordBD Website",
    description: "Full-featured e-commerce website for LeefordBD with product listings, cart, and order management.",
    image: "/image/leefordBd.png",
    category: "E-commerce",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JS"],
    url: "http://leefordbd.com/",
  },
  {
    title: "Blog Platform",
    description: "Full-featured blog platform with rich text editing and SEO optimization.",
    image: "/image/blog-web.png",
    category: "Web",
    stack: ["PHP", "Laravel", "Livewire", "MySQL", "JS"],
    url: "https://bbiq.ca/",
  },
  {
    title: "Health & Wellness Site",
    description: "Health-focused web application with appointment booking and doctor profiles.",
    image: "/image/helth-web.png",
    category: "Web",
    stack: ["React", "Node.js", "Firebase"],
    url: "",
  },
  {
    title: "Job Portal",
    description: "Job listing and application platform connecting employers and candidates.",
    image: "/image/Job-Portal.png",
    category: "Web",
    stack: ["Next.js", "MongoDB", "AWS"],
    url: "",
  },
  {
    title: "Society Management",
    description: "Community management system for residential societies with member portals.",
    image: "/image/Society-web.png",
    category: "Web",
    stack: ["React", "Node.js", "MySQL"],
    url: "",
  },
  {
    title: "HexagonBD Platform",
    description: "Digital platform for HexagonBD with custom features and integrations.",
    image: "/image/screencapture-hexagonbd-2026-05-10-11_53_57.png",
    category: "Web",
    stack: ["Next.js", "Tailwind", "REST API"],
    url: "https://hexagonbd.com/",
  },
  {
    title: "MotherTrade BD",
    description: "Automation, industry and institute website for MotherTrade BD with modern design and full management system.",
    image: "/image/screencapture-127-0-0-1-8000-2026-05-10-10_20_56.png",
    category: "Web",
    stack: ["PHP", "Laravel", "MySQL", "React", "JS"],
    url: "https://www.mothertradebd.com/",
  },
  {
    title: "Portfolio Project",
    description: "Custom portfolio project showcasing unique design and development patterns.",
    image: "/image/project-3.jpg",
    category: "Web",
    stack: ["React", "CSS", "JavaScript"],
    url: "",
  },
  {
    title: "Point of Sale System",
    description: "Full-featured POS system with billing, inventory tracking, and sales reporting.",
    image: "/image/Screenshot 2026-05-10 115938.png",
    category: "Dashboard",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JS"],
    url: "https://erp.velabd.com/",
  },
  {
    title: "English Language Club",
    description: "Membership and event management website for an English Language Club community.",
    image: "/image/english language club wesite.png",
    category: "Web",
    stack: ["PHP", "Laravel", "MySQL", "React", "JS"],
    url: "https://elc.duetbd.org/",
  },
];

const categoryColors: Record<string, string> = {
  "E-commerce": "text-intelligence-blue",
  "Web": "text-soft-lavender",
  "Dashboard": "text-white",
};

const categoryBorders: Record<string, string> = {
  "E-commerce": "group-hover:border-intelligence-blue/20",
  "Web": "group-hover:border-soft-lavender/20",
  "Dashboard": "group-hover:border-white/15",
};

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

  return (
    <>
    {/* Lightbox */}
    <AnimatePresence>
      {lightbox && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold tracking-tight">{lightbox.title}</p>
            </div>
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                fill
                className="object-contain bg-black"
                sizes="90vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    <section id="projects" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-12">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono uppercase tracking-[0.4em] text-intelligence-blue mb-6"
            >
              {p.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-5xl md:text-6xl font-bold tracking-tight"
            >
              {p.heading}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="max-w-sm"
          >
            <p className="text-white/30 text-lg font-light leading-relaxed mb-6">{p.subtext}</p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-widest text-white/15 uppercase">
                {projects.length} Projects
              </span>
              <div className="h-px flex-1 bg-white/5" />
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-intelligence-blue animate-pulse-slow" />
                <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">{p.updated}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const catColor = categoryColors[project.category] ?? "text-white/40";
            const borderHover = categoryBorders[project.category] ?? "group-hover:border-white/10";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => setLightbox({ image: project.image, title: project.title })}
                className={`group relative glass-deep border border-white/5 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 cursor-pointer ${borderHover}`}
              >
                {/* Screenshot */}
                <div className="relative h-52 overflow-hidden bg-white/3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-[9px] font-mono uppercase tracking-[0.25em] px-3 py-1 rounded-full glass border border-white/10 ${catColor}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow icon — links to live site if URL exists */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
                    >
                      <div className="h-8 w-8 rounded-full bg-intelligence-blue border border-intelligence-blue/40 flex items-center justify-center text-white">
                        <ArrowUpRight size={14} />
                      </div>
                    </a>
                  ) : (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
                      <div className="h-8 w-8 rounded-full glass border border-white/10 flex items-center justify-center text-white/60">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2">{project.title}</h3>
                  <p className="text-white/35 text-sm font-light leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[9px] font-mono tracking-wider glass border border-white/5 text-white/20 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-auto flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-intelligence-blue hover:text-intelligence-blue/80 transition-colors duration-200"
                    >
                      <span>{p.visitLive}</span>
                      <ArrowUpRight size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/15">{p.moreNote}</p>
        </motion.div>
      </div>
    </section>
    </>
  );
}
