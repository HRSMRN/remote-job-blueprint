import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";

const allVouches = [
  { name: "Michelle", company: "Louis Vuitton" },
  { name: "James", company: "Google" },
  { name: "Sarah", company: "Apple" },
  { name: "David", company: "Tesla" },
  { name: "Emily", company: "Amazon" },
  { name: "Ryan", company: "Meta" },
  { name: "Olivia", company: "Netflix" },
  { name: "Daniel", company: "Spotify" },
  { name: "Sophia", company: "Airbnb" },
  { name: "Liam", company: "Nike" },
  { name: "Michelle", company: "Stripe" },
  { name: "James", company: "Shopify" },
  { name: "Sarah", company: "Notion" },
  { name: "David", company: "Figma" },
  { name: "Emily", company: "HubSpot" },
  { name: "Ryan", company: "Automattic" },
];

const VISIBLE_DURATION = 5000;
const HIDDEN_DURATION = 8000;

interface VouchNotificationsProps {
  featuredCompanies?: string[];
}

const VouchNotifications = ({ featuredCompanies = [] }: VouchNotificationsProps) => {
  const vouches = featuredCompanies.length > 0
    ? allVouches.filter((vouch) => featuredCompanies.includes(vouch.company))
    : allVouches;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [animState, setAnimState] = useState<"in" | "out" | "hidden">("in");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (animState === "in") {
      timeout = setTimeout(() => setAnimState("out"), VISIBLE_DURATION - 500);
    } else if (animState === "out") {
      timeout = setTimeout(() => {
        setIsVisible(false);
        setAnimState("hidden");
      }, 500);
    } else if (animState === "hidden") {
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % vouches.length);
        setIsVisible(true);
        setAnimState("in");
      }, HIDDEN_DURATION);
    }

    return () => clearTimeout(timeout);
  }, [animState]);

  const vouch = vouches[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg border-glow bg-card/80 backdrop-blur-xl max-w-xs ${
          animState === "in" ? "animate-vouch-in" : "animate-vouch-out"
        }`}
      >
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center">
          <Briefcase className="w-4 h-4 text-azure icon-glow" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">
            {vouch.name} just got a job at{" "}
            <span className="text-gold font-semibold">{vouch.company}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">Just now</p>
        </div>
      </div>
    </div>
  );
};

export default VouchNotifications;
