import { useState } from 'react';
import { Input } from './ui/input';

interface GateSectionProps {
  onSubmit: (name: string, email: string) => void;
}

export function GateSection({ onSubmit }: GateSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onSubmit(name, email);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1643612695138-7d697b4e60d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzcyUyMGIlMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMG1pZHJpc2V8ZW58MXx8fHwxNzczODA3Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg w-full mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-sm shadow-2xl border border-[var(--gold)]/20">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-block">
              <div className="h-px w-16 bg-[var(--gold)] mb-6 mx-auto"></div>
              <h1 className="text-3xl mb-3 text-[var(--black)]">North Pointe Capital Group</h1>
              <div className="h-px w-16 bg-[var(--gold)] mt-6 mx-auto"></div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl mb-4 text-center text-[var(--emerald-dark)]">
            Access Private Multifamily Investment Opportunities
          </h2>
          
          <p className="text-center text-gray-600 mb-8 leading-relaxed">
            Join the North Pointe Investor Network to receive access to curated apartment investment opportunities.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-[var(--black)]">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-[var(--black)]">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] bg-white"
                placeholder="john@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--black)] py-4 px-6 rounded-sm transition-all duration-300 tracking-wide"
            >
              Enter Investor Network
            </button>
          </form>

          <p className="text-xs text-center text-gray-500 mt-6">
            By entering, you agree to receive investment opportunities and updates from North Pointe Capital Group.
          </p>
        </div>
      </div>
    </div>
  );
}
