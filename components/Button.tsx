import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-button text-sm md:text-base uppercase tracking-widest rounded-pill px-8 py-3.5 transition-all duration-300 ease-in-out font-semibold whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#F6F4EE] text-[#0A192F] hover:bg-[#33c481] hover:text-[#0A192F] shadow-lg",
    secondary: "bg-transparent border border-secondary text-[#F6F4EE] hover:bg-[#F6F4EE] hover:text-[#0F3D2E]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;