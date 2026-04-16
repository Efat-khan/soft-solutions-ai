"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-intelligence-blue/30 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -40, 0],
            y: [0, -60, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-soft-lavender/20 rounded-full blur-[160px]"
        />
      </div>

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-6xl"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-mono tracking-[0.2em] uppercase glass-pill text-intelligence-blue rounded-full border border-intelligence-blue/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-intelligence-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-intelligence-blue"></span>
          </span>
          System v5.0 Launch Sequence
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/30"
        >
          Soft SolutionsAI: <br />
          Logic <span className="italic font-light text-white/40">Meets</span> Elegance
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-tight"
        >
          Architecting high-performance digital foundations for <span className="text-white/80">Commerce</span>,
          <span className="text-white/80"> Education</span>, and <span className="text-white/80">Automation</span>.
          Built with industrial precision and aesthetic fluidity.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 122, 255, 0.9)" }}
            whileTap={{ scale: 0.98 }}
            className="group px-10 py-5 bg-intelligence-blue text-white rounded-2xl font-bold shadow-2xl glow-blue transition-all flex items-center gap-3"
          >
            Deploy Solutions
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 glass text-white/80 hover:text-white rounded-2xl font-bold transition-all border border-white/10"
          >
            View Framework
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hero Terminal Snippet */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-12 p-6 glass rounded-2xl border border-white/5 hidden xl:block max-w-[280px]"
      >
        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
          <TerminalIcon size={12} className="text-intelligence-blue" />
          <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">Local Kernel</span>
        </div>
        <div className="font-mono text-[10px] space-y-1 text-white/40">
          <p><span className="text-soft-lavender">{">"}</span> node --version</p>
          <p className="text-white/20">v22.4.1 (Stable)</p>
          <p><span className="text-soft-lavender">{">"}</span> softsolutionsai --status</p>
          <p className="text-intelligence-blue">CORE_ENGINE: ACTIVE</p>
          <p className="text-intelligence-blue">NEURAL_INIT: COMPLETE</p>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />
    </section>
  );
}
