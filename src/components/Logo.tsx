export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative flex items-center justify-center">
        <svg fill="none" width="180" height="100" viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          {/* Top Red Swoosh */}
          <path d="M 20 45 C 50 -10, 150 0, 160 30 C 120 0, 60 10, 30 50 Z" fill="#D92027" />
          
          {/* Main Blue Box */}
          <path d="M 30 25 L 140 25 C 145 25, 150 30, 150 35 L 150 60 C 150 70, 140 75, 130 75 L 20 75 C 15 75, 10 70, 10 65 L 10 40 C 10 30, 20 25, 30 25 Z" fill="#154271" />
          
          {/* Bottom Swooshes */}
          <path d="M 10 65 C 10 90, 80 100, 130 75 C 90 95, 40 90, 15 70 Z" fill="#D92027" />
          <path d="M 10 65 C 15 95, 90 105, 140 70 C 100 100, 45 95, 15 75 Z" fill="#151515" />
          
          {/* Text SSA */}
          <text x="80" y="58" fontFamily="sans-serif" fontSize="34" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="1">SSA</text>
        </svg>
      </div>
      
      <div className="-mt-2 text-[#154271] font-extrabold text-3xl tracking-wide uppercase">
        Soft
      </div>
      <div className="mt-1 text-[#D92027] font-bold text-[10.5px] tracking-[0.35em] uppercase pl-[0.35em]">
        SolutionsAI
      </div>
    </div>
  );
}
