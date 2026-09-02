import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, ShieldCheck, Zap, Server, ChevronDown, MessageSquare, Terminal as TerminalIcon } from 'lucide-react';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-8 backdrop-blur-md shadow-sm shadow-cyan-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-300 tracking-wide">{PERSONAL_INFO.status}</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-mono text-[11px]">{PERSONAL_INFO.location}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Engineering{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              High-Throughput
            </span>{' '}
            Fintech & Enterprise Systems
          </h1>

          {/* Subtitle / Intro */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I specialize in 
            <span className="text-cyan-400"> Host-to-Host (H2H) biller switching</span>, 
            <span className="text-blue-400"> real-time event queues</span>, and 
            <span className="text-indigo-400"> scalable web & mobile platforms</span> for national-scale enterprises and government organizations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <span>Explore Enterprise Systems</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </a>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 font-mono text-xs transition-colors"
                title="Launch Developer CLI"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>$ CLI Terminal</span>
              </button>
            )}
          </div>

          {/* Stats Bar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl glass-card border border-slate-800/80 shadow-2xl">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-3 border-r last:border-r-0 border-slate-800/60">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 mt-1 font-medium text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Core Strengths Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Sub-second Transaction Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Fraud Detection & AML Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>Multi-Bank Automated Reconciliation</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 text-xs">
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
