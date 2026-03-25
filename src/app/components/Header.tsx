import { NorthPointeLogo } from './NorthPointeLogo';
import logoHeader from "figma:asset/fbbc6e937a2d4ac7d9c172d540eafee3a1e2071f.png";

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
            <img 
              src={logoHeader} 
              alt="North Pointe Capital Group" 
              className="h-12 w-auto object-contain"
            />
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