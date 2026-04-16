import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import LiveInfrastructure from "@/components/LiveInfrastructure";
import AIConcierge from "@/components/AIConcierge";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ServiceCards />
      <LiveInfrastructure />

      {/* Footer Section */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="mb-6 flex justify-start">
              <Logo className="scale-75 origin-left" />
            </div>
            <p className="text-white/30 font-light leading-relaxed mb-8">
              Architecting the next generation of industrial intelligence.
              Elegance in every line of code, logic in every interaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-intelligence-blue mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-white/40 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">E-commerce</li>
                <li className="hover:text-white transition-colors cursor-pointer">AI Agents</li>
                <li className="hover:text-white transition-colors cursor-pointer">Automation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-soft-lavender mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/40 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">Philosophy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Infrastructure</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 tracking-widest">
          <p>© 2026 SOFT SOLUTIONSAI. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH LOGIC. DESIGNED WITH ELEGANCE.</p>
        </div>
      </footer>

      <AIConcierge />
    </main>
  );
}
