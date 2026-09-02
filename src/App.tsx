import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TerminalWidget } from './components/TerminalWidget';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar onOpenTerminal={scrollToTerminal} />
      <main>
        <Hero onOpenTerminal={scrollToTerminal} />
        <TechStack />
        <Projects />
        <Experience />
        <TerminalWidget />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
