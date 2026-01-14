import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-navy-light py-12 md:py-16">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Wordmark */}
        <div className="text-left">
          <span className="font-sans font-extrabold text-xl tracking-tight text-primary">
                edward<span className="text-secondary">.</span>allan
          </span>
        </div>

        {/* Middle: Tagline */}
        <div className="text-center">
            <span className="font-serif italic text-muted text-lg">
                Data made <span className="text-secondary">actionable</span>.
            </span>
        </div>

        {/* Right: Socials */}
        <div className="flex items-center space-x-6">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-secondary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-secondary transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;