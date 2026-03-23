import { NorthPointeLogo } from './NorthPointeLogo';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-1.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer -my-2" onClick={() => scrollToSection('hero')}>
            <svg
              width="70"
              height="45"
              viewBox="0 0 160 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 20 65 Q 80 50 140 65"
                stroke="var(--emerald-dark)"
                strokeWidth="1.5"
                fill="none"
              />
              <rect x="25" y="20" width="12" height="45" stroke="var(--emerald-dark)" strokeWidth="1.5" fill="none" />
              <line x1="28" y1="20" x2="28" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="31" y1="20" x2="31" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="34" y1="20" x2="34" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <rect x="40" y="35" width="10" height="30" stroke="var(--emerald-dark)" strokeWidth="1.5" fill="none" />
              <line x1="43" y1="35" x2="43" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="47" y1="35" x2="47" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <path
                d="M 70 10 L 80 5 L 90 10"
                stroke="var(--emerald-dark)"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="miter"
              />
              <rect x="72" y="10" width="16" height="55" stroke="var(--emerald-dark)" strokeWidth="1.5" fill="none" />
              <line x1="75" y1="10" x2="75" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="78" y1="10" x2="78" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="80" y1="5" x2="80" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="82" y1="10" x2="82" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="85" y1="10" x2="85" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <circle cx="76" cy="15" r="1" fill="var(--emerald-dark)" />
              <circle cx="80" cy="12" r="1" fill="var(--emerald-dark)" />
              <circle cx="84" cy="15" r="1" fill="var(--emerald-dark)" />
              <circle cx="76" cy="22" r="1" fill="var(--emerald-dark)" />
              <circle cx="80" cy="19" r="1" fill="var(--emerald-dark)" />
              <circle cx="84" cy="22" r="1" fill="var(--emerald-dark)" />
              <rect x="95" y="15" width="14" height="50" stroke="var(--emerald-dark)" strokeWidth="1.5" fill="none" />
              <line x1="98" y1="15" x2="98" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="102" y1="15" x2="102" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="106" y1="15" x2="106" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <rect x="112" y="28" width="11" height="37" stroke="var(--emerald-dark)" strokeWidth="1.5" fill="none" />
              <line x1="115" y1="28" x2="115" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="118" y1="28" x2="118" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="121" y1="28" x2="121" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <rect x="126" y="40" width="9" height="25" stroke="var(--emerald-dark)" strokeWidth="1.5" fill="none" />
              <line x1="129" y1="40" x2="129" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
              <line x1="132" y1="40" x2="132" y2="65" stroke="var(--emerald-dark)" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-xs tracking-wide text-gray-700 hover:text-[var(--emerald-dark)] transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-xs tracking-wide text-gray-700 hover:text-[var(--emerald-dark)] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('leadership')}
              className="text-xs tracking-wide text-gray-700 hover:text-[var(--emerald-dark)] transition-colors"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--black)] px-4 py-1.5 rounded-sm text-xs tracking-wide transition-all duration-300"
            >
              Join Network
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="md:hidden bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--black)] px-3 py-1.5 rounded-sm text-xs tracking-wide"
          >
            Join
          </button>
        </div>
      </div>
    </header>
  );
}