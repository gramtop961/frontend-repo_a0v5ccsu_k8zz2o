import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-white/50 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span>Crafted with care • React + Tailwind + Spline</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
