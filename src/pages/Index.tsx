import { Search, FileCheck, Rocket, Globe } from "lucide-react";
import GlowingParticles from "@/components/GlowingParticles";
import VouchNotifications from "@/components/VouchNotifications";
import StepCard from "@/components/StepCard";
import JobCard from "@/components/JobCard";
import TopBanner from "@/components/TopBanner";

const jobs = [
  { company: "Lululemon", abbr: "LU", tag: "Clothing", url: "https://glctrk.org/aff_c?offer_id=1078&aff_id=163527" },
  { company: "Spotify", abbr: "SP", tag: "Audio Streaming", url: "https://gloffers.org/aff_c?offer_id=1970&aff_id=163527" },
  { company: "ESPN", abbr: "ESPN", tag: "Media", url: "https://trkfy.org/aff_c?offer_id=1963&aff_id=163527" },
  { company: "Sephora", abbr: "SE", tag: "Beauty", url: "https://trkio.org/aff_c?offer_id=1074&aff_id=163527" },
  { company: "Netflix", abbr: "NF", tag: "Streaming", url: "https://gloffers.org/aff_c?offer_id=973&aff_id=163527" },
  { company: "Louis Vuitton", abbr: "LV", tag: "Luxury Fashion", url: "https://trkio.org/aff_c?offer_id=1965&aff_id=163527" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen gradient-bg overflow-hidden">
      <TopBanner />
      <GlowingParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Hero / Hook */}
        <section className="flex flex-col items-center text-center pt-24 pb-12 sm:pt-32 sm:pb-16 max-w-3xl mx-auto">
          

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground text-glow animate-fade-in">
            Your Next{" "}
            <span className="text-gold text-glow-gold">Remote Career</span>
            <br />
            Starts Here
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Access exclusive remote positions at top companies around the world. 
            Curated roles matched to your skills and ambitions.
          </p>
        </section>

        {/* Featured Job Listings */}
        <section className="w-full max-w-4xl mx-auto pb-16 sm:pb-24">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center text-foreground text-glow mb-14">
            Featured Remote Roles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.company} {...job} />
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="w-full max-w-4xl mx-auto py-16 sm:py-24">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center text-foreground text-glow mb-14">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StepCard
              number={1}
              icon={Search}
              title="Browse Roles"
              description="Explore curated remote positions from premium employers across multiple industries."
            />
            <StepCard
              number={2}
              icon={FileCheck}
              title="Submit Your Profile"
              description="Create a standout profile highlighting your skills, experience, and remote work preferences."
            />
            <StepCard
              number={3}
              icon={Rocket}
              title="Get Matched"
              description="Receive personalized role recommendations and connect directly with hiring teams."
            />
          </div>
        </section>

        {/* Availability Notice */}
        <section className="w-full max-w-2xl mx-auto pb-32 sm:pb-40">
          <div className="text-center p-8 sm:p-10 rounded-2xl border-glow bg-card/40 backdrop-blur-sm">
            <Globe className="w-8 h-8 text-azure icon-glow mx-auto mb-4" />
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground text-glow mb-3">
              Currently Available In
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {["United Kingdom", "United States", "Canada", "Australia"].map((country) => (
                <span
                  key={country}
                  className="px-5 py-2 rounded-full text-sm font-medium border-glow-gold text-gold bg-accent/10"
                >
                  {country}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              This opportunity is exclusively available to residents of the above countries.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-4xl mx-auto pb-16 sm:pb-24 border-t border-border/40 pt-16">
          <div className="text-center">
            <p className="mt-8 text-sm text-muted-foreground">
              © 2026 Remote Job Blueprint. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Vouch Notifications */}
      <VouchNotifications featuredCompanies={jobs.map((job) => job.company)} />
    </div>
  );
};

export default Index;
