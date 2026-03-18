import { Shield, Target, Clock } from 'lucide-react';

export function InvestorQualificationSection() {
  return (
    <section className="py-24 bg-[var(--emerald-dark)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--gold)] mb-8 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Investor Qualification
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Our investment opportunities are designed for individuals with strong income and long-term wealth-building goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[var(--gold)]/20 border-2 border-[var(--gold)]">
              <Shield className="w-8 h-8 text-[var(--gold)]" />
            </div>
            <h3 className="text-xl mb-3">
              Accredited Status
            </h3>
            <p className="text-white/70 leading-relaxed">
              Most opportunities require accredited investor status per SEC regulations.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[var(--gold)]/20 border-2 border-[var(--gold)]">
              <Target className="w-8 h-8 text-[var(--gold)]" />
            </div>
            <h3 className="text-xl mb-3">
              Long-Term Focus
            </h3>
            <p className="text-white/70 leading-relaxed">
              Typical investment hold periods range from 5-7 years for optimal value creation.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[var(--gold)]/20 border-2 border-[var(--gold)]">
              <Clock className="w-8 h-8 text-[var(--gold)]" />
            </div>
            <h3 className="text-xl mb-3">
              Passive Approach
            </h3>
            <p className="text-white/70 leading-relaxed">
              Ideal for professionals seeking passive income without active management responsibilities.
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm">
          <p className="text-white/90 leading-relaxed text-center">
            <strong className="text-[var(--gold)]">Important:</strong> Investment opportunities are offered through private placement offerings and are subject to investor qualification requirements. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}
