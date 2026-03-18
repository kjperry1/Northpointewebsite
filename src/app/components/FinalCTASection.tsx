export function FinalCTASection() {
  const handleJoinNetwork = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[var(--emerald-dark)] to-[var(--emerald)] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="h-px w-24 bg-[var(--gold)] mb-10 mx-auto"></div>
        
        <h2 className="text-4xl md:text-6xl mb-6">
          Join the North Pointe Investor Network
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Gain access to exclusive multifamily investment opportunities, detailed market analysis, and quarterly performance updates.
        </p>

        <button
          onClick={handleJoinNetwork}
          className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--black)] px-12 py-5 rounded-sm transition-all duration-300 tracking-wide inline-block shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Join the Network
        </button>

        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="mb-2 text-[var(--gold)]">Contact</h4>
              <p className="text-white/70">info@northpointecapital.com</p>
            </div>
            <div>
              <h4 className="mb-2 text-[var(--gold)]">Location</h4>
              <p className="text-white/70">Serving Markets Nationwide</p>
            </div>
            <div>
              <h4 className="mb-2 text-[var(--gold)]">Investment Focus</h4>
              <p className="text-white/70">Multifamily Real Estate</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-white/50">
          <p>© {new Date().getFullYear()} North Pointe Capital Group. All rights reserved.</p>
          <p className="mt-2">
            Securities offered through private placement. This is not an offer to sell securities.
          </p>
        </div>
      </div>
    </section>
  );
}
