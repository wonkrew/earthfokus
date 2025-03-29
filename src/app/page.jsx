import Hero from "./components/Hero";
import Clients from "./components/Clients";
import ContentSection from "./components/ContentSection";
import ContentSection2 from "./components/ContentSection2";
import SmartWaterDashboard from "./components/SmartWaterDashboard";
import ProblemSection from "./components/ProblemSection";
import TabSection from "./components/TabSection";
import Certification from "./components/Certification";
import Solution from "./components/Solution";
import SolutionCards from "./components/SolutionCards";
import OptimizationHero from "./components/OptimizationHero";
import PeopleTalk from "./components/PeopleTalk";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <ContentSection />
      <Clients />
      <SmartWaterDashboard />
      <ProblemSection />
      <TabSection />
      <Certification />
      <Solution />
      <SolutionCards />
      <OptimizationHero />
      <PeopleTalk />
      <CTA />
      <FAQ />
    </main>
  );
}
 