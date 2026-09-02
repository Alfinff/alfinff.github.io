import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HistoryItem {
  type: 'input' | 'output';
  content: React.ReactNode;
}

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: 'output',
      content: (
        <div className="text-slate-300 space-y-1 mb-2">
          <p className="text-cyan-400 font-bold">Welcome to Alfin OS v2.4 (Interactive Shell)</p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-amber-400 font-semibold">'help'</span> to see all available commands.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: HistoryItem[] = [
      ...history,
      { type: 'input', content: `$ ${input}` },
    ];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: (
            <div className="space-y-1 text-xs text-slate-300">
              <p className="text-cyan-400 font-bold mb-1">Available Commands:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono">
                <div><span className="text-emerald-400">whoami</span> - Display developer profile & bio</div>
                <div><span className="text-emerald-400">skills</span> - List core technical proficiencies</div>
                <div><span className="text-emerald-400">projects</span> - View high-throughput production systems</div>
                <div><span className="text-emerald-400">experience</span> - View company work timeline</div>
                <div><span className="text-emerald-400">contact</span> - Get direct WhatsApp, Email & GitHub</div>
                <div><span className="text-emerald-400">sudo</span> - Secret admin privilege</div>
                <div><span className="text-emerald-400">clear</span> - Reset and clear terminal screen</div>
              </div>
            </div>
          ),
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          content: (
            <div className="text-xs text-slate-300 space-y-1">
              <p><strong className="text-cyan-400">{PERSONAL_INFO.name}</strong> - {PERSONAL_INFO.role}</p>
              <p className="text-slate-400">{PERSONAL_INFO.bio}</p>
              <p className="text-slate-500 font-mono">Location: {PERSONAL_INFO.location} | Status: {PERSONAL_INFO.status}</p>
            </div>
          ),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: (
            <div className="text-xs space-y-1.5 font-mono">
              <p className="text-amber-400 font-bold">Technical Arsenal:</p>
              <p><span className="text-cyan-400">• Backend:</span> Golang, Node.js, PHP/Laravel, Java, BullMQ, Redis</p>
              <p><span className="text-cyan-400">• Frontend & Mobile:</span> React.js, TypeScript, Vue.js, Flutter, Tailwind CSS</p>
              <p><span className="text-cyan-400">• Database:</span> MySQL, PostgreSQL, MongoDB, Redis In-Memory, SQL Server</p>
              <p><span className="text-cyan-400">• Protocols:</span> H2H Switching, ISO-8583, RESTful APIs, Webhooks, OCR Extraction</p>
            </div>
          ),
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          content: (
            <div className="text-xs space-y-2 font-mono">
              <p className="text-emerald-400 font-bold">Featured Production Systems:</p>
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="border-l-2 border-cyan-500/50 pl-2">
                  <p className="text-white font-semibold">{p.title} <span className="text-cyan-400 text-[10px]">[{p.categoryLabel}]</span></p>
                  <p className="text-slate-400 text-[11px]">{p.impact}</p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          content: (
            <div className="text-xs space-y-2 font-mono">
              <p className="text-purple-400 font-bold">Work History:</p>
              <div>
                <p className="text-white font-semibold">1. PT Bimasakti Multi Sinergi (2023 - Present)</p>
                <p className="text-slate-400">Backend & Fintech Systems Engineer (H2H Core, BPJS, Kemenkeu, Fraud Detection)</p>
              </div>
              <div>
                <p className="text-white font-semibold">2. PT Primakom Integrasi Solusi (2021 - 2023)</p>
                <p className="text-slate-400">Fullstack Developer (Pelindo Port Operations, Kemenhub Pusbang Laut & Udara)</p>
              </div>
            </div>
          ),
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: (
            <div className="text-xs space-y-1 font-mono">
              <p className="text-cyan-400 font-bold">Connect Directly:</p>
              <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 underline">{PERSONAL_INFO.email}</a></p>
              <p>WhatsApp: <a href={PERSONAL_INFO.social.whatsapp} target="_blank" rel="noreferrer" className="text-emerald-400 underline">Chat on WhatsApp</a></p>
              <p>GitHub: <a href={PERSONAL_INFO.social.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.social.github}</a></p>
            </div>
          ),
        });
        break;

      case 'sudo':
        newHistory.push({
          type: 'output',
          content: (
            <div className="text-xs text-amber-400 font-mono">
              🚀 [ROOT ACCESS GRANTED] Permission verified: You are authorized to contact Alfin and initiate collaboration immediately.
            </div>
          ),
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'output',
          content: (
            <p className="text-xs text-rose-400 font-mono">
              Command not recognized: '{cmd}'. Type 'help' for a list of available commands.
            </p>
          ),
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Developer Console</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Interactive CLI Terminal
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Explore my profile, systems, and technical background through a lightweight virtual shell.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className={`rounded-2xl border border-slate-800 bg-[#070b14] shadow-2xl overflow-hidden transition-all duration-300 font-mono ${
          isMaximized ? 'fixed inset-4 z-50 rounded-xl' : 'w-full'
        }`}>
          
          {/* Title Bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block hover:opacity-100 cursor-pointer" onClick={() => setHistory([])} title="Clear" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:opacity-100 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} title="Maximize" />
              <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
                <span>alfin@production-cluster:~</span>
              </span>
            </div>

            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-slate-500 hover:text-white p-1 rounded"
              title="Toggle size"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Console Body */}
          <div 
            className="p-4 sm:p-6 overflow-y-auto space-y-3"
            style={{ minHeight: isMaximized ? 'calc(100vh - 120px)' : '320px', maxHeight: isMaximized ? 'calc(100vh - 120px)' : '400px' }}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'input' ? (
                  <p className="text-xs text-cyan-300 font-bold">{item.content}</p>
                ) : (
                  <div>{item.content}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt Form */}
          <form onSubmit={handleCommand} className="border-t border-slate-800/80 bg-slate-950/60 px-4 py-3 flex items-center gap-2">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help' for commands..."
              className="flex-1 bg-transparent text-xs sm:text-sm text-slate-100 outline-none placeholder-slate-600 font-mono"
            />
            <button
              type="submit"
              className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
              title="Execute command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
