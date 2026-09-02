import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, CheckCircle2, Layers, Database, Globe, Wrench } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Cpu className="w-4 h-4" />;
      case 1: return <Globe className="w-4 h-4" />;
      case 2: return <Database className="w-4 h-4" />;
      default: return <Wrench className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Production-Tested Tech Arsenal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From high-throughput backend services and in-memory event queues to modern reactive frontends and cross-platform mobile apps.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-500/10 border'
                  : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 mb-12">
          <div className="mb-6 pb-4 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 self-start sm:self-auto">
              {SKILL_CATEGORIES[activeTab].skills.length} Technologies
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400 transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {skill.featured && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        Core
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-slate-200 text-sm group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/60">
                  <span className="text-[11px] font-mono text-slate-400">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Principles Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <h4 className="text-sm font-semibold text-cyan-400 font-mono mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Idempotency & Concurrency
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designed with distributed Redis mutex locks and database constraints to guarantee zero double-charging or balance corruption during high peak spikes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <h4 className="text-sm font-semibold text-indigo-400 font-mono mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Event-Driven Workflows
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Decoupled asynchronous worker queues (BullMQ) processing heavy payloads, banking settlement file parsing, and real-time webhook broadcasts without blocking user requests.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <h4 className="text-sm font-semibold text-emerald-400 font-mono mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Clean Architecture
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict separation between domain entities, business use-cases, and transport layers ensuring easy testability, maintainability, and seamless upstream protocol switching.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
