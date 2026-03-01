import { ArrowRight } from "lucide-react";

interface JobCardProps {
  company: string;
  abbr: string;
  tag: string;
  url: string;
}

const JobCard = ({ company, abbr, tag, url }: JobCardProps) => {
  return (
    <div className="relative group flex flex-col justify-between gap-5 p-6 rounded-2xl border border-secondary/20 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-secondary/50 hover:bg-card/70 hover:-translate-y-0.5 hover:shadow-[0_0_20px_hsl(var(--azure)/0.15)]">
      {/* Top */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center font-display font-bold text-base text-azure icon-glow flex-shrink-0">
          {abbr}
        </div>
        <div>
          <p className="font-display font-semibold text-foreground">{company}</p>
          <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full text-[0.65rem] font-semibold uppercase tracking-wide bg-secondary/10 text-azure border border-secondary/20">
            {tag}
          </span>
        </div>
      </div>

      {/* Apply button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl font-display font-semibold text-sm text-accent-foreground bg-accent border-glow-gold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_24px_hsl(var(--gold)/0.4)]"
      >
        Apply Now
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </a>
    </div>
  );
};

export default JobCard;
