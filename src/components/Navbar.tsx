"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLang } from "./LanguageProvider";

// navLinks are built dynamically from translations inside the component

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { t, toggle: toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  const navLinks = [
    { label: t.nav.process, id: "process" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.contact, id: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isLight = theme === "light";

  /* Navbar background — always opaque in light mode for readability */
  const headerBg = isLight
    ? scrolled
      ? "bg-white/95 backdrop-blur-xl shadow-sm"
      : "bg-white/80 backdrop-blur-md"
    : scrolled
    ? "bg-obsidian/85 backdrop-blur-xl border-b border-white/10"
    : "bg-transparent";

  /* Reusable token: border that always renders on valid opacity */
  const dividerLight = "rgba(0,0,0,0.09)";
  const dividerDark  = "rgba(255,255,255,0.07)";

  return (
    <>
      <header
        style={isLight ? { borderBottom: `1px solid ${dividerLight}` } : undefined}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm font-light rounded-lg transition-colors duration-200 ${
                  active === id
                    ? isLight
                      ? "text-intelligence-blue font-medium"
                      : "text-white font-medium"
                    : isLight
                    ? "text-black/60 hover:text-black"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    style={{ background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)" }}
                    className="absolute inset-0 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                border: `1px solid ${isLight ? dividerLight : dividerDark}`,
                color: isLight ? "rgba(17,17,18,0.55)" : "rgba(255,255,255,0.50)",
              }}
              className="h-9 w-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isLight ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              aria-label="Switch language"
              style={{
                border: `1px solid ${isLight ? dividerLight : dividerDark}`,
                color: isLight ? "rgba(17,17,18,0.60)" : "rgba(255,255,255,0.55)",
              }}
              className="h-9 px-3 rounded-xl flex items-center justify-center text-[11px] font-mono tracking-wider transition-all duration-200 hover:scale-105"
            >
              {t.nav.langLabel}
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-intelligence-blue text-sm font-medium glow-blue-subtle hover:glow-blue transition-all duration-300 group"
              style={{ color: "white" }}
            >
              <span>{t.nav.cta}</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{
                border: `1px solid ${isLight ? dividerLight : dividerDark}`,
                color: isLight ? "rgba(17,17,18,0.55)" : "rgba(255,255,255,0.55)",
              }}
              className="md:hidden h-9 w-9 rounded-xl flex items-center justify-center transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={16} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={16} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: isLight ? "rgba(255,255,255,0.97)" : "rgba(10,10,11,0.97)",
              borderBottom: `1px solid ${isLight ? dividerLight : dividerDark}`,
            }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden backdrop-blur-xl"
          >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map(({ label, id }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setMobileOpen(false);
                    setTimeout(() => scrollTo(id), 100);
                  }}
                  style={
                    active === id
                      ? { background: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)" }
                      : undefined
                  }
                  className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-left text-base font-light transition-colors duration-150 ${
                    active === id
                      ? isLight ? "text-intelligence-blue" : "text-white"
                      : isLight ? "text-black/60 hover:text-black" : "text-white/50 hover:text-white"
                  }`}
                >
                  <span>{label}</span>
                  {active === id && (
                    <span
                      className={`text-[9px] font-mono tracking-widest uppercase ${
                        isLight ? "text-intelligence-blue" : "text-white/30"
                      }`}
                      style={isLight ? { opacity: 0.6 } : undefined}
                    >
                      active
                    </span>
                  )}
                </motion.button>
              ))}

              <div
                style={{ background: isLight ? dividerLight : dividerDark }}
                className="my-2 h-px"
              />

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(() => scrollTo("contact"), 100);
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-intelligence-blue font-medium text-base glow-blue-subtle"
                style={{ color: "white" }}
              >
                <span>{t.nav.cta}</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>

              <button
                onClick={toggle}
                style={{ color: isLight ? "rgba(17,17,18,0.55)" : "rgba(255,255,255,0.45)" }}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-light transition-colors hover:opacity-100"
              >
                {isLight ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
                <span>{isLight ? t.nav.switchToDark : t.nav.switchToLight}</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
