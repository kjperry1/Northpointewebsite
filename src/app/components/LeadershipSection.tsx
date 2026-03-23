export function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-px w-16 bg-[var(--gold)] mb-8 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl mb-6 text-[var(--emerald-dark)]">
            Leadership
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div>
            <h3 className="text-3xl mb-4 text-[var(--black)] text-center">
              Disciplined. Analytical. Focused.
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                North Pointe Capital Group was founded on the principle that real estate investment should be approached with the same rigor and analytical discipline as any institutional investment strategy.
              </p>
              
              <p>
                Our leadership team brings decades of combined experience in real estate finance, property management, and institutional asset allocation. We believe in thorough market analysis, conservative underwriting, and transparent communication with our investor partners.
              </p>
              
              <p>
                Every investment opportunity is evaluated through a comprehensive due diligence process that examines market fundamentals, property condition, operational efficiency, and risk-adjusted return potential.
              </p>
              
              <p className="text-[var(--emerald)] italic text-center text-lg mt-8">
                "We invest our own capital alongside our partners in every opportunity. Our interests are fully aligned."
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                <strong className="text-[var(--black)]">Investment Approach:</strong> Data-driven analysis, conservative leverage, and long-term value creation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}