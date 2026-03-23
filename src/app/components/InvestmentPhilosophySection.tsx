import { Building2, MapPin, TrendingUp } from 'lucide-react';

export function InvestmentPhilosophySection() {
  const principles = [
    {
      icon: Building2,
      title: 'Multifamily Focus',
      description: 'We exclusively invest in apartment communities with strong fundamentals and proven cash flow potential.'
    },
    {
      icon: MapPin,
      title: 'Strategic Markets',
      description: 'Target markets with population growth, job diversity, and favorable landlord-tenant regulations.'
    },
    {
      icon: TrendingUp,
      title: 'Value Creation',
      description: 'Generate returns through operational improvements, strategic renovations, and disciplined asset management.'
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--gold)] mb-8 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl mb-6 text-[var(--emerald-dark)]">
            Investment Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our approach is methodical, data-driven, and focused on long-term value creation. We seek properties that offer stable cash flow with opportunities for strategic enhancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-[var(--emerald)] text-white">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl mb-4 text-[var(--black)]">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}