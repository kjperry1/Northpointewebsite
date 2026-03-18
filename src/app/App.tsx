import { useState } from 'react';
import { GateSection } from './components/GateSection';
import { HeroSection } from './components/HeroSection';
import { WhoThisIsForSection } from './components/WhoThisIsForSection';
import { InvestmentPhilosophySection } from './components/InvestmentPhilosophySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InvestorQualificationSection } from './components/InvestorQualificationSection';
import { LeadershipSection } from './components/LeadershipSection';
import { FinalCTASection } from './components/FinalCTASection';

export default function App() {
  const [hasAccess, setHasAccess] = useState(false);

  const handleGateSubmit = (name: string, email: string) => {
    // In a real application, this would send the data to a backend
    console.log('User entered:', { name, email });
    setHasAccess(true);
  };

  if (!hasAccess) {
    return <GateSection onSubmit={handleGateSubmit} />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoThisIsForSection />
      <InvestmentPhilosophySection />
      <HowItWorksSection />
      <InvestorQualificationSection />
      <LeadershipSection />
      <FinalCTASection />
    </div>
  );
}
