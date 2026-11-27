import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { CV_URL } from '../site';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Publication', href: '#publication' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Awards', href: '#awards' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1)).reverse();
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection('home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'glass py-3' : 'py-5'
      }`}
    >
      <nav aria-label="Primary" className="container mx-auto px-4 flex items-center justify-between gap-4">
        <a href="#home" className="font-logo text-2xl font-bold gradient-text">
          Shehriyar
        </a>

        <ul className="hidden xl:flex items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                aria-current={activeSection === link.href.substring(1) ? 'true' : undefined}
                className={`nav-link !px-3 text-sm ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-50 flex items-center gap-3">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-sm !px-4 !py-2"
          >
            <Download size={16} aria-hidden />
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV (PDF)</span>
          </a>
          <button
            type="button"
            className="xl:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-menu xl:hidden ${isMenuOpen ? 'open' : ''}`}>
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-2xl font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
