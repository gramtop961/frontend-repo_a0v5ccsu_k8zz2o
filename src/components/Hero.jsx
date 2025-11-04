import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-300/90 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 w-max">Frontend Developer</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building delightful, performant web experiences
          </h1>
          <p className="text-white/70 max-w-xl">
            I design and develop interactive interfaces with modern web technologies — focusing on accessibility, clean code, and smooth animations.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-white/90 rounded-full px-5 py-3 text-sm font-medium transition">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full px-5 py-3 text-sm font-medium transition">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full px-5 py-3 text-sm font-medium transition">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <div className="text-xs text-white/60 pt-2">
            React • TypeScript • Tailwind • Framer Motion • Accessibility
          </div>
        </div>
        <div className="h-[300px] md:h-[540px]" />
      </div>
    </section>
  );
}
