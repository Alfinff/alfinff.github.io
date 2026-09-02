import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Professional Engineering Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven track record of building reliable software architectures across fintech corporations, state-owned enterprises, and high-demand web projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-48 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-200" />

              {/* Period for Large Screens (Placed on the left) */}
              <div className="hidden sm:block absolute -left-32 md:-left-48 top-1 text-right w-24 md:w-40">
                <span className="font-mono text-xs text-cyan-400 font-semibold block">
                  {exp.period}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {exp.type}
                </span>
              </div>

              {/* Card Content */}
              <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all">
                
                {/* Period for Mobile */}
                <div className="sm:hidden flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                  <span className="text-slate-600">•</span>
                  <span>{exp.type}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-cyan-300 font-mono mb-4">
                  {exp.company}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-5">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack used */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-900 border border-cyan-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Looking for a verified Tech Partner or Lead Engineer?</h4>
              <p className="text-xs text-slate-400 mt-0.5">Let's discuss how we can build high-performance systems for your organization.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shrink-0 shadow-md shadow-cyan-500/20"
          >
            Start Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
