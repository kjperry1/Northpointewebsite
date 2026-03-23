import { UserPlus, FileText, DollarSign, PiggyBank } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: 'Join the Network',
      description: 'Complete a brief investor profile to join our exclusive network of real estate investors.'
    },
    {
      icon: FileText,
      number: '02',
      title: 'Review Opportunities',
      description: 'Receive detailed investment packages for each curated multifamily opportunity.'
    },
    {
      icon: DollarSign,
      number: '03',
      title: 'Invest',
      description: 'Choose opportunities that align with your investment goals and complete the investment process.'
    },
    {
      icon: PiggyBank,
      number: '04',
      title: 'Earn Passive Income',
      description: 'Receive quarterly distributions and detailed performance reports on your investments.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--gold)] mb-8 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl mb-6 text-[var(--emerald-dark)]">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A straightforward process designed for busy professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200 p-8 rounded-sm hover:shadow-xl hover:border-[var(--gold)] transition-all duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gold)] to-[var(--emerald)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="text-6xl mb-4 opacity-10 select-none">
                  {step.number}
                </div>
                
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-[var(--emerald)] text-white">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl mb-3 text-[var(--black)]">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}