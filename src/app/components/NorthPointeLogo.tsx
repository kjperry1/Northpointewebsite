import logoDark from "figma:asset/d6d0fa99ad4bda07416aed15906a88ea8790a67d.png";

interface NorthPointeLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
}

export function NorthPointeLogo({ className = '', variant = 'dark' }: NorthPointeLogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img 
        src={logoDark} 
        alt="North Pointe Capital Group" 
        className={`h-20 w-auto object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}