import { ArrowRight } from "lucide-react";

const CTAButton = () => {
  // ✅ CUSTOMIZE YOUR LINK HERE
  const redirectUrl = "https://your-link-here.com";

  return (
    <a
      href={redirectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl font-display font-semibold text-lg 
        bg-accent text-accent-foreground 
        border-glow-gold box-glow-gold
        transition-all duration-500 
        hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(var(--gold)/0.4)]
        active:scale-[0.98]"
    >
      <span>Get Started Now</span>
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
};

export default CTAButton;
