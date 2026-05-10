"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Lang, Translations, translations } from "@/lib/translations";

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    const resolved: Lang = stored === "bn" ? "bn" : "en";
    setLang(resolved);
    document.documentElement.setAttribute("lang", resolved === "bn" ? "bn" : "en");
  }, []);

  const toggle = () => {
    const next: Lang = lang === "en" ? "bn" : "en";
    setLang(next);
    document.documentElement.setAttribute("lang", next === "bn" ? "bn" : "en");
    localStorage.setItem("lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}
