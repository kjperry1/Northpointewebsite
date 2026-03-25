import { useState, useEffect } from 'react';
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
  const [showGate, setShowGate] = useState(false);

  useEffect(() => {
    // Show the gate after 5 seconds if not already unlocked
    const timer = setTimeout(() => {
      if (!isUnlocked) {
        setShowGate(true);
      }
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [isUnlocked]);

  return (
    <div>
      {showGate && !isUnlocked && (
        <div className="fixed inset-0 z-50 animate-fade-in">
          <GateSection onSubmit={() => setIsUnlocked(true)} />
        </div>
      )}

      <div
        className={`transition-all duration-500 ${
          showGate && !isUnlocked ? 'opacity-30 blur-sm pointer-events-none' : 'opacity-100'
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