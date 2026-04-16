"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Brain, Layout, GraduationCap, ArrowUpRight, Zap, Database, Shield } from "lucide-react";

const services = [
  {
    title: "Commerce",
    sub: "POS & E-commerce engines",
    description: "High-frequency engines built for global scale, secure transactions, and fluid fulfillment.",
    icon: ShoppingCart,
    accent: "text-intelligence-blue",
    glow: "group-hover:bg-intelligence-blue/20",
    border: "group-hover:border-intelligence-blue/30",
    tags: ["Real-time Sync", "Multi-currency"]
  },
  {
    title: "Intelligence",
    sub: "Custom AI Chatbots",
    description: "Automated virtual assistants with neural memory and sophisticated natural language capabilities.",
    icon: Brain,
    accent: "text-soft-lavender",
    glow: "group-hover:bg-soft-lavender/20",
    border: "group-hover:border-soft-lavender/30",
    tags: ["Neural Memory", "Custom LLM"]
  },
  {
    title: "Scale",
    sub: "System Automation",
    description: "Tailored infrastructure and custom-built high-conversion landing pages engineered for growth.",
    icon: Layout,
    accent: "text-white",
    glow: "group-hover:bg-white/10",
    border: "group-hover:border-white/30",
    tags: ["Auto-scaling", "Modern UX"]
  },
  {
    title: "Knowledge",
    sub: "Educational Software",
    description: "Comprehensive software solutions designed for modern, interactive learning environments.",
    icon: GraduationCap,
    accent: "text-intelligence-blue",
    glow: "group-hover:bg-intelligence-blue/20",
    border: "group-hover:border-intelligence-blue/30",
    tags: ["LMS Sync", "Interactive"]
  },
];

export default function ServiceCards() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-12">
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-intelligence-blue mb-6"
          >
            // SOLUTIONS_MATRIX_V4
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
          >
            Engineered for <br /> Industrial Growth.
          </motion.h3>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-md"
        >
          <p className="text-white/40 text-lg font-light leading-relaxed mb-6">
            We architect integrated infrastructures that bridge the gap between 
            unrefined data and elegant user interaction. 
          </p>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[Zap, Database, Shield].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/40 backdrop-blur-md">
                  <Icon size={16} />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">Core Protocols: Locked</span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-[2rem] glass-deep transition-all duration-500 flex flex-col h-full border border-white/5 hover:border-transparent overflow-hidden"
          >
            {/* Animated Glow Backdrop */}
            <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 blur-[80px] -z-10 ${service.glow}`} />
            <div className={`absolute inset-0 border border-white/0 rounded-[2rem] transition-colors duration-500 -z-10 ${service.border}`} />
            
            <div className="mb-10 flex items-start justify-between">
              <div className="h-16 w-16 rounded-2xl glass border border-white/5 flex items-center justify-center text-white/40 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <ArrowUpRight size={20} className="text-white/10 group-hover:text-white/60 transition-all duration-300 -translate-y-1 translate-x-1" />
            </div>

            <div className="mb-4">
              <h4 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${service.accent}`}>
                {service.title}
              </h4>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mt-1">
                {service.sub}
              </p>
            </div>
            
            <p className="text-white/30 leading-relaxed text-sm mb-12 group-hover:text-white/50 transition-colors">
              {service.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-[9px] font-mono tracking-wider glass border border-white/5 text-white/20 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
