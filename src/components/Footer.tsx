import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-white text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              Fullstack & Fintech Systems Engineer • Indonesia
            </span>
          </div>

          {/* Quick links & Deploy Badge */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-[11px]">
              <Globe className="w-3 h-3" />
              <span>Dual Deployed: GitHub Pages & Vercel</span>
            </span>

            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript, Tailwind CSS & Vite
          </p>
        </div>

      </div>
    </footer>
  );
};
