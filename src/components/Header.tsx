import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPos = window.scrollY + 80;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && (sections[i] as HTMLElement).offsetTop <= scrollPos) {
          setActive(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 border-none m-0 p-0 ${
        isScrolled ? 'backdrop-blur-md bg-white/80 shadow-lg' : 'bg-transparent'
      }`}
      style={{ WebkitBackdropFilter: 'blur(12px)', border: 'none' }}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold flex items-center gap-1 group focus:outline-none transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <span
            className={`${
              isScrolled ? 'text-amber-600' : 'text-white'
            } group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}
          >
            D
          </span>
          <span
            className={`${
              isScrolled ? 'text-dayar-brand-gold' : 'text-white'
            } group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
          >
            AYAR
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative font-medium transition-all duration-300 px-2 py-1 rounded-lg 
                ${active === item.name
                  ? 'text-dayar-brand-gold font-bold bg-dayar-brand-gold/10 scale-105 shadow-md'
                  : isScrolled
                  ? 'text-gray-700 hover:text-dayar-brand-gold hover:bg-dayar-brand-gold/10 hover:scale-105 hover:font-bold'
                  : 'text-white hover:text-dayar-brand-gold hover:bg-dayar-brand-gold/10 hover:scale-105 hover:font-bold'}
              `}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-dayar-brand-gold rounded transition-all duration-300 ${
                  active === item.name ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
                style={{ transformOrigin: 'left' }}
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-amber-600 transition-transform duration-300" />
          ) : (
            <Menu className="w-7 h-7 text-amber-600 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/90 backdrop-blur-md z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-2xl font-semibold transition-all duration-300 px-4 py-2 rounded-lg 
                ${active === item.name
                  ? 'text-dayar-brand-gold font-bold bg-dayar-brand-gold/10 scale-105 shadow-md'
                  : isScrolled
                  ? 'text-gray-700 hover:text-dayar-brand-gold hover:bg-dayar-brand-gold/10 hover:scale-105 hover:font-bold'
                  : 'text-white hover:text-dayar-brand-gold hover:bg-dayar-brand-gold/10 hover:scale-105 hover:font-bold'}
              `}
              style={{ transitionDelay: `${idx * 60}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
