"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitBranch, ExternalLink, ArrowRight, Lock, CheckCircle, Loader2 } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { useState } from "react";

// ─── Google Form Configuration ────────────────────────────────────────────
// HOW TO SETUP (5 minutes):
// 1. Go to forms.google.com → create a new form
// 2. Add these 5 fields (Short answer): Name/Company, Project Type, Budget Range, Timeline, Message
// 3. Click the 3-dot menu → "Get pre-filled link" → fill dummy values → Get link
// 4. From that link, copy the entry IDs (e.g. entry.123456789) for each field
// 5. Paste your Form ID and entry IDs below
// 6. In Google Form settings → Responses → turn on email notifications

const GOOGLE_FORM_ID   = "1FAIpQLSel5BnHYruFvyge2IJel3H0OvGHoQrdBy3tGeAcq5GDyO1jtg";
const ENTRY_NAME       = "entry.325649215";
const ENTRY_PROJECT    = "entry.431123247";
const ENTRY_BUDGET     = "entry.530846659";
const ENTRY_TIMELINE   = "entry.291190088";
const ENTRY_MESSAGE    = "entry.534092904";
// ──────────────────────────────────────────────────────────────────────────

const detailIcons = [Mail, Phone, MapPin];

type Status = "idle" | "loading" | "success";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({ name: "", projectType: "", budget: "", timeline: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const body = new URLSearchParams({
      [ENTRY_NAME]:     form.name,
      [ENTRY_PROJECT]:  form.projectType,
      [ENTRY_BUDGET]:   form.budget,
      [ENTRY_TIMELINE]: form.timeline,
      [ENTRY_MESSAGE]:  form.message,
    });

    // no-cors: Google Forms doesn't allow CORS, but the data IS submitted
    await fetch(
      `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`,
      { method: "POST", mode: "no-cors", body }
    );

    setStatus("success");
    setForm({ name: "", projectType: "", budget: "", timeline: "", message: "" });
  };

  const inputClass =
    "w-full glass border border-white/5 rounded-xl px-4 py-3 text-sm font-light text-white bg-transparent outline-none focus:border-intelligence-blue/40 focus:ring-1 focus:ring-intelligence-blue/20 transition-all duration-200 placeholder:text-white/15";

  const selectClass =
    "w-full glass border border-white/5 rounded-xl px-4 py-3 text-sm font-light text-white bg-transparent outline-none focus:border-intelligence-blue/40 focus:ring-1 focus:ring-intelligence-blue/20 transition-all duration-200 appearance-none cursor-pointer";

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

          {/* Right — Form */}
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

              {/* Success state */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-10 text-center"
                >
                  <CheckCircle size={40} className="text-intelligence-blue" />
                  <p className="text-white font-semibold text-lg">Message Sent!</p>
                  <p className="text-white/40 text-sm font-light">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-[10px] font-mono uppercase tracking-widest text-intelligence-blue hover:text-intelligence-blue/70 transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Name / Company */}
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-2">{c.fields[0].label}</p>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={c.fields[0].placeholder}
                      className={inputClass}
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-2">{c.fields[1].label}</p>
                    <input
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      placeholder={c.fields[1].placeholder}
                      className={inputClass}
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-2">{c.fields[2].label}</p>
                    <input
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      required
                      placeholder={c.fields[2].placeholder}
                      className={inputClass}
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-2">{c.fields[3].label}</p>
                    <input
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      required
                      placeholder={c.fields[3].placeholder}
                      className={inputClass}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-white/20 mb-2">Message</p>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us more about your project..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="border-t border-white/5" />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-intelligence-blue font-medium tracking-wide text-sm glow-blue hover:bg-intelligence-blue/90 transition-all duration-300 group disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ color: "white" }}
                  >
                    {status === "loading" ? (
                      <><Loader2 size={16} className="animate-spin" /><span>Sending...</span></>
                    ) : (
                      <><span>{c.sendBtn}</span><ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" /></>
                    )}
                  </button>

                  <p className="text-center text-[9px] font-mono text-white/15 tracking-[0.2em] uppercase">{c.encryptedNote}</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
