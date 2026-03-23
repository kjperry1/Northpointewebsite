export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1761165308179-d8de8f78bc49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBjb21wbGV4JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzczODA3Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="inline-block mb-8">
          <div className="h-px w-24 bg-[var(--gold)] mb-8 mx-auto"></div>
          <h1 className="text-5xl md:text-7xl mb-6 text-white tracking-tight">
            North Pointe Capital Group
          </h1>
          <div className="h-px w-24 bg-[var(--gold)] mt-8 mx-auto"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Strategic multifamily real estate investing for high-earning professionals.
        </p>

        <button
          onClick={scrollToContact}
          className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--black)] px-10 py-4 rounded-sm transition-all duration-300 tracking-wide inline-block"
        >
          Join the Investor Network
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}