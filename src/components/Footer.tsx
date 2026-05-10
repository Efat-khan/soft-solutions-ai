"use client";

import { useLang } from "./LanguageProvider";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="py-20 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="mb-6 flex justify-start">
            <Logo className="scale-75 origin-left" />
          </div>
          <p className="text-white/30 font-light leading-relaxed mb-8">
            {f.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-intelligence-blue mb-6">
              {f.solutionsLabel}
            </h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              {f.solutions.map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-soft-lavender mb-6">
              {f.companyLabel}
            </h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              {f.company.map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 tracking-widest">
        <p>{f.copyright}</p>
        <p>{f.built}</p>
      </div>
    </footer>
  );
}
