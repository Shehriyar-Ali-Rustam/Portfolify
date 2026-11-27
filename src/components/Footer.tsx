import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { EMAIL_HREF, GITHUB_URL, LINKEDIN_URL } from '../site';

const quickLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Research', href: '/#research' },
  { name: 'Publication', href: '/#publication' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Design & web work', href: '/design' },
];

const socialLinks = [
  { icon: Github, href: GITHUB_URL, label: 'GitHub' },
  { icon: Linkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: Mail, href: EMAIL_HREF, label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <a href="/#home" className="font-logo text-2xl font-bold gradient-text inline-block mb-4">
              Shehriyar
            </a>
            <p className="text-muted-foreground text-sm">&copy; {currentYear} Shehriyar Ali Rustam</p>
          </div>

          <div className="text-center">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="social-icon"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-primary fill-primary" /> by Shehriyar Ali Rustam
          </p>
        </div>
      </div>
    </footer>
  );
}
