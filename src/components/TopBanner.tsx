import { Instagram, Youtube } from "lucide-react";

const GlobeIcon = () => (
  <svg
    className="w-5 h-5 text-azure icon-glow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TopBanner = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[hsl(var(--cobalt)/0.6)] backdrop-blur-xl border-b border-[hsl(var(--azure)/0.25)]">
    {/* Left Side - Placeholder for balance */}
    <div className="w-24" />

    {/* Center - Brand Name */}
    <div className="flex items-center gap-2">
      <GlobeIcon />
      <span className="font-display text-base sm:text-lg font-semibold text-foreground text-glow">
        Remote Job Blueprint
      </span>
    </div>

    {/* Right Side - Social Links */}
    <div className="flex flex-col items-center gap-3">
      
      <div className="flex items-center gap-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border-glow bg-card/40 backdrop-blur-sm hover:bg-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/30"
        >
          <Instagram className="w-5 h-5 text-muted-foreground hover:text-pink-500 transition-colors" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe on YouTube"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border-glow bg-card/40 backdrop-blur-sm hover:bg-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/30"
        >
          <Youtube className="w-5 h-5 text-muted-foreground hover:text-red-500 transition-colors" />
        </a>
      </div>
    </div>
  </header>
);

export default TopBanner;
