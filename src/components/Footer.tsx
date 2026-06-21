import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Shehriyar-Ali-Rustam',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/shehriyar-ali-rustam-516895246/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:shehriyarali122@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="font-logo text-2xl font-bold gradient-text inline-block mb-4"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
            >
              Shehriyar
            </a>
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Shehriyar Ali Rustam. All rights reserved.
            </p>
          </div>

          <div className="text-center">
            <ul className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
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
                target="_blank"
                rel="noopener noreferrer"
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
            Made with <Heart size={16} className="text-primary fill-primary" /> by
            Shehriyar Ali Rustam
          </p>
        </div>
      </div>
    </footer>
  );
}
