import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Research from '../components/Research';
import Publication from '../components/Publication';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Awards from '../components/Awards';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import ScrollToTop from '../components/ScrollToTop';
import { SITE_TITLE } from '../site';

export default function HomePage() {
  useEffect(() => {
    document.title = SITE_TITLE;
    // Sections render client-side, so a fresh load of /#research may need a nudge to land on it.
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Publication />
        <Projects />
        <Experience />
        <Education />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
