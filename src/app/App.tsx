import { useState } from 'react';
import { GateSection } from './components/GateSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhoThisIsForSection } from './components/WhoThisIsForSection';
import { InvestmentPhilosophySection } from './components/InvestmentPhilosophySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InvestorQualificationSection } from './components/InvestorQualificationSection';
import { LeadershipSection } from './components/LeadershipSection';
import { FinalCTASection } from './components/FinalCTASection';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div>
      {!isUnlocked && (
        <div className="fixed inset-0 z-50">
          <GateSection onSubmit={() => setIsUnlocked(true)} />
        </div>
      )}

      <div
        className={`transition-all duration-500 ${
          isUnlocked ? 'opacity-100' : 'opacity-30 blur-sm pointer-events-none'
        }`}
      >
        <Header />
        <HeroSection />
        <WhoThisIsForSection />
        <InvestmentPhilosophySection />
        <HowItWorksSection />
        <InvestorQualificationSection />
        <LeadershipSection />
        <FinalCTASection />
      </div>
    </div>
  );
}