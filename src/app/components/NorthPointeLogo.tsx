interface NorthPointeLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
}

export function NorthPointeLogo({ className = '', variant = 'dark' }: NorthPointeLogoProps) {
  const colors = {
    dark: 'var(--emerald-dark)',
    light: 'white',
    gold: 'var(--gold)',
  };

  const strokeColor = colors[variant];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Skyline Logo */}
      <svg
        width="160"
        height="90"
        viewBox="0 0 160 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-3"
      >
        {/* Curved base arc */}
        <path
          d="M 20 65 Q 80 50 140 65"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Building 1 - Left tall */}
        <rect x="25" y="20" width="12" height="45" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <line x1="28" y1="20" x2="28" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="31" y1="20" x2="31" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="34" y1="20" x2="34" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        
        {/* Building 2 - Left medium */}
        <rect x="40" y="35" width="10" height="30" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <line x1="43" y1="35" x2="43" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="47" y1="35" x2="47" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        
        {/* Building 3 - Center Art Deco tower with pointed crown */}
        <path
          d="M 70 10 L 80 5 L 90 10"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="miter"
        />
        <rect x="72" y="10" width="16" height="55" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <line x1="75" y1="10" x2="75" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="78" y1="10" x2="78" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="80" y1="5" x2="80" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="82" y1="10" x2="82" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="85" y1="10" x2="85" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        
        {/* Diamond details on center building */}
        <circle cx="76" cy="15" r="1" fill={strokeColor} />
        <circle cx="80" cy="12" r="1" fill={strokeColor} />
        <circle cx="84" cy="15" r="1" fill={strokeColor} />
        <circle cx="76" cy="22" r="1" fill={strokeColor} />
        <circle cx="80" cy="19" r="1" fill={strokeColor} />
        <circle cx="84" cy="22" r="1" fill={strokeColor} />
        
        {/* Building 4 - Right tall */}
        <rect x="95" y="15" width="14" height="50" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <line x1="98" y1="15" x2="98" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="102" y1="15" x2="102" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="106" y1="15" x2="106" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        
        {/* Building 5 - Right medium */}
        <rect x="112" y="28" width="11" height="37" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <line x1="115" y1="28" x2="115" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="118" y1="28" x2="118" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="121" y1="28" x2="121" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        
        {/* Building 6 - Far right short */}
        <rect x="126" y="40" width="9" height="25" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <line x1="129" y1="40" x2="129" y2="65" stroke={strokeColor} strokeWidth="0.5" />
        <line x1="132" y1="40" x2="132" y2="65" stroke={strokeColor} strokeWidth="0.5" />
      </svg>

      {/* Company Name */}
      <div className="text-center">
        <div className={`text-lg tracking-[0.3em] font-light ${variant === 'light' ? 'text-white' : 'text-[var(--black)]'}`}>
          NORTH POINTE
        </div>
        <div className={`text-xs tracking-[0.4em] font-light mt-0.5 ${variant === 'light' ? 'text-white/80' : 'text-gray-600'}`}>
          CAPITAL GROUP
        </div>
      </div>
    </div>
  );
}