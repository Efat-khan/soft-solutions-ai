"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Globe, Zap } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

const featureIcons = [Activity, Cpu, Globe, Zap];

export default function LiveInfrastructure() {
  const { t } = useLang();
  const inf = t.infrastructure;
  const { theme } = useTheme();
  const isLight = theme === "light";

  const nodes = [
    { id: 1, x: "15%", y: "25%", color: "#007AFF",                       label: "NODE_ALPHA"  },
    { id: 2, x: "75%", y: "15%", color: "#A29BFE",                       label: "NODE_BETA"   },
    { id: 3, x: "50%", y: "50%", color: isLight ? "#0A0A0B" : "#FFFFFF", label: "CENTRAL_HUB" },
    { id: 4, x: "25%", y: "75%", color: "#A29BFE",                       label: "NODE_GAMMA"  },
    { id: 5, x: "85%", y: "70%", color: "#007AFF",                       label: "NODE_DELTA"  },
    { id: 6, x: "40%", y: "20%", color: "#007AFF",                       label: "EDGE_01"     },
    { id: 7, x: "60%", y: "80%", color: "#A29BFE",                       label: "EDGE_02"     },
  ];

  const connections = [
    { from: 1, to: 3 }, { from: 2, to: 3 }, { from: 4, to: 3 }, { from: 5, to: 3 },
    { from: 6, to: 1 }, { from: 6, to: 2 }, { from: 7, to: 4 }, { from: 7, to: 5 },
    { from: 1, to: 4 }, { from: 2, to: 5 },
  ];

  return (
    <section id="infrastructure" className="py-32 relative overflow-hidden bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-soft-lavender mb-6">{inf.label}</h2>
          <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            {inf.heading1} <br />
            <span className="text-white/40">{inf.heading2}</span>
          </h3>
          <p className="text-white/40 text-lg font-light leading-relaxed mb-12 max-w-lg">{inf.desc}</p>

          <div className="grid grid-cols-2 gap-8">
            {inf.features.map((item, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-intelligence-blue" />
                    <span className="text-sm font-bold tracking-tight">{item.label}</span>
                  </div>
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] glass-deep rounded-[3rem] border border-white/5 overflow-hidden flex items-center justify-center group">
          <div className={`absolute inset-0 ${isLight ? "opacity-[0.08]" : "opacity-[0.02]"}`}
            style={{ backgroundImage: `radial-gradient(${isLight ? "#000" : "#fff"} 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((conn, i) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode   = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              return (
                <g key={i}>
                  <motion.line
                    x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y}
                    stroke={isLight ? "#0A0A0B" : "white"}
                    strokeWidth="0.5"
                    strokeOpacity={isLight ? "0.18" : "0.05"}
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                  />
                  <motion.circle
                    r="1.5" fill={i % 2 === 0 ? "#007AFF" : "#A29BFE"}
                    initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    style={{ offsetPath: `path('M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}')` }}
                    className="blur-[1px]"
                  />
                </g>
              );
            })}
          </svg>

          {nodes.map((node, i) => (
            <motion.div key={node.id} style={{ left: node.x, top: node.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, delay: i * 0.1 }}
                style={{ backgroundColor: node.color }}
                className="w-2.5 h-2.5 rounded-full blur-[1px] shadow-[0_0_15px_rgba(255,255,255,0.3)] relative"
              >
                <div className="absolute inset-0 rounded-full border border-current animate-ping opacity-20" />
              </motion.div>
              <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {node.label}
              </span>
            </motion.div>
          ))}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
            <div className="glass-pill px-6 py-3 rounded-2xl border border-white/10 glow-blue-subtle">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-intelligence-blue animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/80 font-bold">CORE_ENGINE v5.0</span>
              </div>
              <div className="flex gap-1 justify-center">
                {[1, 2, 3].map(j => <div key={j} className="w-3 h-0.5 bg-white/10 rounded-full" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
