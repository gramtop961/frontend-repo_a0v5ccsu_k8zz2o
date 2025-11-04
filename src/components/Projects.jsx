import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Motion Portfolio',
    description: 'A smooth, animated portfolio built with React, Framer Motion, and Tailwind. Emphasis on performance and micro-interactions.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Design System Kit',
    description: 'Reusable UI components, accessible primitives, and tokens to ship consistent interfaces faster.',
    tags: ['TypeScript', 'Storybook', 'Radix UI'],
    live: '#',
    repo: '#',
  },
  {
    title: 'API Dashboard',
    description: 'Data-rich dashboard with charts, filters, and real-time updates. Built for clarity and speed.',
    tags: ['Vite', 'Zustand', 'Chart.js'],
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
            <p className="text-white/60 mt-2 max-w-2xl">A few things I’ve built recently. Clean code, accessible UX, and performance-first mindset.</p>
          </div>
          <div className="hidden md:block text-sm text-white/60">More on GitHub →</div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 hover:border-white/20 transition">
              <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-emerald-500/20 mb-4" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-white/60 mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-5">
                <a href={p.live} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white transition">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
                  <Github size={16} /> Code
                </a>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-white/15" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
