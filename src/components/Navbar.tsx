import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Terminal, ExternalLink, Code2, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
              Alfin Faiz
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </span>
            <span className="text-[11px] font-mono text-cyan-400/80">Fullstack & Fintech Eng</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
              title="Open Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI</span>
            </button>
          )}

          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow-md shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-md"
            >
              Hire Me / Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
