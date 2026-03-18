import { Briefcase, Stethoscope, FlaskConical, TrendingUp } from 'lucide-react';

export function WhoThisIsForSection() {
  const audiences = [
    {
      icon: Stethoscope,
      title: 'Medical Professionals',
      description: 'Physicians and healthcare executives seeking passive income streams'
    },
    {
      icon: FlaskConical,
      title: 'Scientists & Engineers',
      description: 'Technical professionals focused on data-driven investment strategies'
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurs',
      description: 'Business owners looking to diversify their investment portfolio'
    },
    {
      icon: TrendingUp,
      title: 'High-Income Professionals',
      description: 'Executives seeking tax-advantaged real estate investments'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--gold)] mb-8 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl mb-6 text-[var(--emerald-dark)]">
            Who This Is For
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            North Pointe is built for busy professionals who want to build wealth through real estate without the burden of property management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index} 
                className="text-center p-8 hover:bg-[var(--cream)] transition-all duration-300 rounded-sm group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[var(--emerald)]/10 group-hover:bg-[var(--gold)]/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[var(--emerald)]" />
                </div>
                <h3 className="text-xl mb-3 text-[var(--black)]">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
