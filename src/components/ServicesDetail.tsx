"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Brain, Layout, GraduationCap, CheckCircle2 } from "lucide-react";
import { useLang } from "./LanguageProvider";

const icons = [ShoppingCart, Brain, Layout, GraduationCap];
const styles = [
  { accent: "text-intelligence-blue", borderAccent: "border-intelligence-blue/30", glowColor: "bg-intelligence-blue/10", barColor: "bg-intelligence-blue" },
  { accent: "text-soft-lavender",     borderAccent: "border-soft-lavender/30",     glowColor: "bg-soft-lavender/10",     barColor: "bg-soft-lavender" },
  { accent: "text-white",             borderAccent: "border-white/20",             glowColor: "bg-white/5",              barColor: "bg-white" },
  { accent: "text-intelligence-blue", borderAccent: "border-intelligence-blue/30", glowColor: "bg-intelligence-blue/10", barColor: "bg-intelligence-blue" },
];

export default function ServicesDetail() {
  const { t } = useLang();
  const sd = t.servicesDetail;

  return (
    <section id="services" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-intelligence-blue mb-6">
            {sd.label}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }} className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {sd.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.25 }} className="text-white/30 font-light leading-relaxed text-lg">
            {sd.subtext}
          </motion.p>
        </div>

        {/* Service Blocks */}
        <div className="space-y-32">
          {sd.services.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = icons[index];
            const s = styles[index];

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="glass-deep border border-white/5 rounded-[2rem] p-10 md:p-14"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-white/15">{service.number}</span>
                  <div className="h-px flex-1 bg-white/5" />
                  <span className={`text-[10px] font-mono uppercase tracking-[0.3em] ${s.accent}`}>{service.sub}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-12 w-12 rounded-xl glass border border-white/5 flex items-center justify-center ${s.accent}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-4xl font-bold tracking-tight ${s.accent}`}>{service.title}</h3>
                </div>

                <p className="text-white/40 font-light leading-relaxed mb-10 text-base max-w-3xl">{service.description}</p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${s.accent} opacity-70`} strokeWidth={1.5} />
                      <span className="text-white/50 text-sm font-light">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Stripe", "Redis", "PostgreSQL", "Python", "LangChain", "Vector DB", "Vercel", "Docker", "React", "Node.js", "MongoDB"]
                    .slice(index * 3, index * 3 + 4)
                    .map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-[9px] font-mono tracking-wider glass border border-white/5 text-white/20 uppercase">
                        {tag}
                      </span>
                    ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
