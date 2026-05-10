"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitBranch, ExternalLink, ArrowRight, Lock } from "lucide-react";
import { useLang } from "./LanguageProvider";

const detailIcons = [Mail, Phone, MapPin];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-intelligence-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-intelligence-blue mb-6">
            {c.label}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }} className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {c.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.25 }} className="text-white/30 font-light text-lg max-w-xl mx-auto leading-relaxed">
            {c.subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-10">
            <div>
              <p className="text-white/40 font-light leading-relaxed text-lg mb-10">{c.body}</p>
              <div className="space-y-6">
                {c.details.map((item, i) => {
                  const Icon = detailIcons[i];
                  const accentClass = i === 0 ? "text-intelligence-blue" : i === 1 ? "text-soft-lavender" : "text-white";
                  return (
                    <div key={item.label} className="flex items-center gap-5">
                      <div className={`h-10 w-10 rounded-xl glass border border-white/5 flex items-center justify-center ${accentClass} opacity-70 shrink-0`}>
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-0.5">{item.label}</p>
                        <p className="text-white/60 text-sm font-light">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-[9px] font-mono uppercase tracking-widest text-white/15 mb-4">{c.findUsOn}</p>
              <div className="flex items-center gap-3">
                <a href="#" className="h-10 w-10 rounded-xl glass border border-white/5 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-300">
                  <GitBranch size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="h-10 w-10 rounded-xl glass border border-white/5 flex items-center justify-center text-white/30 hover:text-intelligence-blue hover:border-intelligence-blue/30 transition-all duration-300">
                  <ExternalLink size={18} strokeWidth={1.5} />
                </a>
                <div className="ml-2 h-px flex-1 bg-white/5" />
                <span className="text-[9px] font-mono text-white/15 tracking-widest uppercase">{c.professionalOnly}</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Brief Card */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="absolute inset-0 bg-intelligence-blue/5 blur-[60px] rounded-[2rem] -z-10" />
            <div className="glass-deep border border-intelligence-blue/15 rounded-[2rem] p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-intelligence-blue">{c.briefTitle}</p>
                <div className="flex items-center gap-1.5">
                  <Lock size={10} className="text-white/20" />
                  <span className="text-[9px] font-mono text-white/15 tracking-widest uppercase">{c.encrypted}</span>
                </div>
              </div>

              <div className="space-y-4">
                {c.fields.map((field) => (
                  <div key={field.label}>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-2">{field.label}</p>
                    <div className="glass border border-white/5 rounded-xl px-4 py-3">
                      <p className="text-white/15 text-sm font-light font-mono">{field.placeholder}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/5" />

              <button className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-intelligence-blue font-medium tracking-wide text-sm glow-blue hover:bg-intelligence-blue/90 transition-all duration-300 group"
                style={{ color: "white" }}>
                <span>{c.sendBtn}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-center text-[9px] font-mono text-white/15 tracking-[0.2em] uppercase">{c.encryptedNote}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
