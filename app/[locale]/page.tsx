import HeroFeature from "./components/heroFeature";
import Introduction from "./components/introduction";
import Background from "@/components/background";
import WhyNow from "./components/whyNow";
import BuildEcosystem from "./components/buildEcosystem";
import Partners from "./components/partners";

function LandingPage() {
  return (
    <div className="bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 relative">
      <div
        className="absolute top-0 left-0 w-full h-[50px] pointer-events-none bg-transparent z-0"
        aria-hidden="true"
      />
      <Background />
      <HeroFeature />
      <Introduction />
      <WhyNow />
      <BuildEcosystem />
      <Partners />
    </div>
  );
}

export default LandingPage;
