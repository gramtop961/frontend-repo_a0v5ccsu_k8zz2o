import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const email = 'you@example.com';
  return (
    <section id="contact" className="relative bg-slate-950 text-white py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s build something great</h2>
        <p className="text-white/60 mt-3">I’m open to freelance work, full-time opportunities, and creative collaborations.</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 hover:bg-white/90 transition">
            <Mail size={18} /> Email me
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/15 transition">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/15 transition">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <p className="text-xs text-white/50 mt-8">Powered by React • Tailwind • Spline</p>
      </div>
    </section>
  );
}
