"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { useLang } from "./LanguageProvider";

const icons = [Search, PenTool, Code2, FlaskConical, Rocket, HeartHandshake];
const colors = [
  { color: "#007AFF", glow: "rgba(0,122,255,0.15)" },
  { color: "#A29BFE", glow: "rgba(162,155,254,0.15)" },
  { color: "#007AFF", glow: "rgba(0,122,255,0.15)" },
  { color: "#A29BFE", glow: "rgba(162,155,254,0.15)" },
  { color: "#007AFF", glow: "rgba(0,122,255,0.15)" },
  { color: "#A29BFE", glow: "rgba(162,155,254,0.15)" },
];

export default function SDLC() {
  const { t } = useLang();
  const s = t.sdlc;

  return (
    <section id="process" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-10">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono uppercase tracking-[0.4em] text-intelligence-blue mb-6"
            >
              {s.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-5xl md:text-6xl font-bold tracking-tight"
            >
              {s.heading1}
              <br />
              <span className="text-white/40">{s.heading2}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="max-w-sm text-white/30 text-lg font-light leading-relaxed self-end"
          >
            {s.subtext}
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.steps.map((step, index) => {
            const Icon = icons[index];
            const { color, glow } = colors[index];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative glass-deep border border-white/5 rounded-[2rem] p-8 flex flex-col gap-6 overflow-hidden hover:border-white/10 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10 blur-[60px]"
                  style={{ background: glow }}
                />

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-[0.3em] font-bold" style={{ color }}>
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                </div>

                <div className="h-px bg-white/5 w-full" />

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-white">{step.title}</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color }}>{step.sub}</p>
                </div>

                <p className="text-white/35 text-sm font-light leading-relaxed">{step.description}</p>

                <div className="mt-auto flex gap-1.5">
                  {s.steps.map((_, i) => (
                    <div
                      key={i}
                      className="h-0.5 flex-1 rounded-full transition-all duration-300"
                      style={{
                        background: i <= index ? color : "rgba(255,255,255,0.07)",
                        opacity: i === index ? 1 : i < index ? 0.4 : 0.15,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-white/5" />
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/15">{s.bottomNote}</p>
          <div className="h-px w-16 bg-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
