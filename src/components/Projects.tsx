import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { FolderGit2, Sparkles, Server, Check, X, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'fintech', label: 'Fintech & Switching' },
    { id: 'bumn', label: 'BUMN & Government' },
    { id: 'web', label: 'Web Platforms' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Systems & Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Case Studies & Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Engineered for high-availability environments, payment infrastructure, and enterprise digital operations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group glass-card rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl ${
                project.featured
                  ? 'border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/10'
                  : 'border-slate-800/80 hover:border-slate-700 hover:shadow-black/50'
              }`}
            >
              <div>
                {/* Header badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-mono font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact Highlight */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-4">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold block mb-0.5">
                    Impact & Scale:
                  </span>
                  <p className="text-xs text-slate-300">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700 transition-all flex items-center justify-center gap-1.5"
                >
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View System Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Dive Architecture */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-card rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-700 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architecture Details */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyan-400" />
                  Technical Architecture & Implementation
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Card in Modal */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-xs font-mono text-emerald-400 font-bold block mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Key Impact & Business Value:
                </span>
                <p className="text-xs sm:text-sm text-emerald-200">
                  {selectedProject.impact}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
                >
                  Done
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
