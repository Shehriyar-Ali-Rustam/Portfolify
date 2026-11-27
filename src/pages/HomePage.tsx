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
import ScrollToTop from '../components/ScrollToTop';
import { SITE_TITLE } from '../site';

export default function HomePage() {
  useEffect(() => {
    document.title = SITE_TITLE;
    // Sections are rendered by JavaScript, so on a fresh load of /#research the browser
    // can try to jump before the section exists. Jump once it does.
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
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
    </>
  );
}
