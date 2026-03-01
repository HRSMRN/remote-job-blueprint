import { type LucideIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const StepCard = ({ number, icon: Icon, title, description }: StepCardProps) => {
  return (
    <div className="relative group flex flex-col items-center text-center p-8 rounded-2xl border-glow bg-card/50 backdrop-blur-sm transition-all duration-500 hover:bg-card/70">
      {/* Step number */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground box-glow">
        {number}
      </div>

      {/* Icon */}
      <div className="mt-4 mb-5 w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
        <Icon className="w-7 h-7 text-azure icon-glow" />
      </div>

      {/* Text */}
      <h3 className="font-display text-lg font-semibold text-foreground mb-2 text-glow">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px]">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
