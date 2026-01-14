import React, { useState, useEffect } from 'react';
import { NavItem, Page } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Home', page: Page.Home, path: '/' },
  { label: 'About', page: Page.About, path: '/about' },
  { label: 'Portfolio', page: Page.Portfolio, path: '/portfolio' },
  { label: 'Contact', page: Page.Contact, path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50 group">
            <span className="font-sans font-extrabold text-xl tracking-tight text-primary group-hover:text-secondary transition-colors">
                edward<span className="text-secondary">.</span>allan
            </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`font-button text-sm tracking-widest uppercase hover:text-secondary transition-colors ${
                location.pathname === item.path ? 'text-secondary font-semibold' : 'text-primary/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden z-50 text-primary hover:text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-navy flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`font-button text-2xl uppercase tracking-widest ${
                 location.pathname === item.path ? 'text-secondary' : 'text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;