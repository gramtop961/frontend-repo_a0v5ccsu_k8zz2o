import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">devfolio</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition">GitHub</a>
        </div>
        <a href="#contact" className="inline-flex md:hidden items-center gap-2 rounded-full px-4 py-2 bg-white/10 text-white text-sm hover:bg-white/20 transition">
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
