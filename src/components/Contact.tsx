import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, MessageSquare, Send, Check, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#3b82f6', '#10b981'],
    });

    setSubmitted(true);

    // Prepare WhatsApp message
    const waText = encodeURIComponent(
      `Halo Alfin, nama saya ${formData.name} (${formData.email || 'Email tidak disertakan'}).\n\nSubjek: ${formData.subject || 'Proyek/Diskusi'}\n\nPesan: ${formData.message}`
    );

    // Open WhatsApp in new tab
    const phone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${phone}?text=${waText}`;
    window.open(waUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Let's Collaborate & Build Something Resilient
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you have a question regarding financial switching architectures, high-load microservices, or want to collaborate on new products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Info Cards (Left Col) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={PERSONAL_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-4 group hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 block font-medium">Fast Response</span>
                <h4 className="font-bold text-white group-hover:text-emerald-300 transition-colors">Chat on WhatsApp</h4>
                <p className="text-xs text-slate-400 mt-0.5">Direct instant messaging for quick inquiries</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-4 group hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 block font-medium">Official Inquiries</span>
                <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors">{PERSONAL_INFO.email}</h4>
                <p className="text-xs text-slate-400 mt-0.5">Send specs, project briefs, or job offers</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all flex items-center gap-4 group hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block font-medium">Open Source & Code</span>
                <h4 className="font-bold text-white group-hover:text-slate-200 transition-colors">github.com/alfinff</h4>
                <p className="text-xs text-slate-400 mt-0.5">Check out repositories and activity</p>
              </div>
            </a>

            {/* Location & Remote */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Surabaya & East Java, Indonesia</h4>
                <p className="text-xs text-slate-400 mt-0.5">Available for On-site & Worldwide Remote roles</p>
              </div>
            </div>

          </div>

          {/* Form (Right Col) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span>Send a Direct Message</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the brief details below. It will format your message and open WhatsApp for an immediate response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Email / Company</label>
                    <input
                      type="text"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Fintech Consultation / Full-time Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project requirements, tech stack, or timeline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    submitted
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:scale-[1.01]'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Message Formatted! Opening Chat...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Inquiry</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
