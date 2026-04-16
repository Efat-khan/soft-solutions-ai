"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles, Terminal, Cpu, Shield, Globe } from "lucide-react";

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsPulsing(!isOpen);
    if (isOpen && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [isOpen]);

  const quickActions = [
    { label: "SOLUTIONS_QUERY", icon: Cpu },
    { label: "SYSTEM_STACK", icon: Terminal },
    { label: "SECURITY_PROTOCOL", icon: Shield },
    { label: "GLOBAL_INFRA", icon: Globe },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center overflow-hidden group shadow-2xl transition-all duration-300 hover:glow-blue"
          >
            {/* Morphing Pulsing Core */}
            <motion.div
              animate={isPulsing ? {
                scale: [1, 1.15, 1],
                borderRadius: ["40%", "50%", "40%"],
                rotate: [0, 90, 0],
              } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-intelligence-blue/30 via-soft-lavender/20 to-intelligence-blue/10 blur-xl"
            />

            <Bot size={28} className="text-white/80 z-10 group-hover:text-white transition-colors duration-300" />

            {/* Spinning Ring */}
            <div className="absolute inset-0 border border-white/5 rounded-full group-hover:border-intelligence-blue/20 transition-colors duration-500" />
            <div className="absolute inset-2 border border-white/5 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[90vw] md:w-[480px] h-[640px] glass-deep border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col backdrop-blur-3xl"
          >
            {/* Terminal Header */}
            <div className="px-8 py-5 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-intelligence-blue animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-intelligence-blue blur-[6px] animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                    Concierge_Terminal
                  </h3>
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Status: Operational_v5.0.2</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-white/5 transition-colors text-white/30 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Terminal View */}
            <div ref={chatRef} className="flex-1 p-8 overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/[0.05] [&::-webkit-scrollbar-thumb]:rounded-full">
              <div className="space-y-8">
                {/* AI Intro Message */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0 text-intelligence-blue/60 mt-1">
                    <Sparkles size={20} />
                  </div>
                  <div className="space-y-4 max-w-[85%]">
                    <div className="p-5 rounded-2xl rounded-tl-none glass border border-white/5 space-y-3">
                      <p className="text-sm text-white/80 leading-relaxed font-light">
                        Greetings. I am the <span className="text-intelligence-blue font-bold">Soft SolutionsAI Core Concierge</span>.
                        I have synthesized your environment and am ready to facilitate your architectural requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      className="group p-4 rounded-2xl glass border border-white/5 hover:border-intelligence-blue/20 transition-all text-left flex flex-col gap-3"
                    >
                      <action.icon size={16} className="text-white/20 group-hover:text-intelligence-blue transition-colors" />
                      <span className="text-[9px] font-mono tracking-widest text-white/30 group-hover:text-white transition-colors">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </motion.div>

                {/* System Message */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] font-mono text-[9px] text-white/20 leading-relaxed">
                  <p className="text-white/40 mb-1 tracking-widest uppercase mb-2">// DIAGNOSTIC_LOG</p>
                  <p>SYS_STABILITY: 99.98%</p>
                  <p>ACTIVE_NODES: 12_OPERATIONAL</p>
                  <p>REGION: GLOBAL_DISTRIBUTION</p>
                </div>
              </div>
            </div>

            {/* Terminal Input */}
            <div className="p-8 pt-0 mt-auto">
              <div className="relative group">
                <div className="absolute inset-x-0 -top-full h-8 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter command or inquiry..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-light focus:outline-none focus:border-intelligence-blue/40 transition-all placeholder:text-white/20"
                    />
                    <div className="absolute left-6 bottom-0 h-0.5 w-0 bg-intelligence-blue group-focus-within:w-1/4 transition-all duration-500" />
                  </div>
                  <button className="p-4 bg-intelligence-blue/10 text-intelligence-blue rounded-2xl hover:bg-intelligence-blue hover:text-white transition-all shadow-lg glow-blue-subtle">
                    <Send size={20} />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between px-2">
                  <span className="text-[8px] font-mono text-white/10 tracking-[0.2em] uppercase">Ready_For_Input</span>
                  <span className="text-[8px] font-mono text-white/10 tracking-[0.2em] uppercase flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-soft-lavender animate-pulse" /> Encrypted
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
