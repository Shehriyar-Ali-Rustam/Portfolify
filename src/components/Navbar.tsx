import { useEffect, useRef, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import ExtLink from './ExtLink';
import { CV_URL, NAME } from '../site';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Highlight whichever section crosses a thin band in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -54% 0px' }
    );
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape (returning focus to the toggle) or when the desktop nav takes over.
  useEffect(() => {
    if (!isMenuOpen) return;
    const desktop = window.matchMedia('(min-width: 1280px)');
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onBreakpoint = () => desktop.matches && setIsMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [isMenuOpen]);

  const linkClass = (href: string) =>
    activeSection === href.slice(1)
      ? 'text-foreground underline decoration-primary decoration-2 underline-offset-8'
      : 'text-muted-foreground hover:text-foreground';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur">
      <nav aria-label="Primary">
        <div className="page-container flex h-16 items-center justify-between gap-4">
          <a href="#top" className="font-heading text-base font-semibold text-foreground">
            {NAME}
          </a>

          <ul className="hidden items-center xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={activeSection === link.href.slice(1) ? 'true' : undefined}
                  className={`px-2.5 py-2 text-sm transition-colors ${linkClass(link.href)}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ExtLink href={CV_URL} className="btn btn-primary btn-sm">
              <Download size={16} aria-hidden />
              <span className="sm:hidden">CV</span>
              <span className="hidden sm:inline">Download CV (PDF)</span>
            </ExtLink>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary xl:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="sr-only">Menu</span>
              {isMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>

        {/* `hidden` takes the closed menu out of the tab order. Don't add a utility that sets display
            (block, flex): it would override the attribute and leave invisible links focusable. */}
        <div id="mobile-menu" hidden={!isMenuOpen} className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t bg-background xl:hidden">
          <ul className="page-container py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={activeSection === link.href.slice(1) ? 'true' : undefined}
                  className={`block py-3 text-base ${linkClass(link.href)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
