import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const roles = [
  'AI & Machine Learning',
  'Frontend Development',
  'Graphic Design',
  'Data Science',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 opacity-0 animate-fade-up stagger-1">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 opacity-0 animate-fade-up stagger-2">
              Shehriyar Ali Rustam
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-3">
              <span>I specialize in </span>
              <span className="text-primary typing-cursor">{displayText}</span>
            </div>
            <p className="text-muted-foreground max-w-xl mb-8 opacity-0 animate-fade-up stagger-4">
              A passionate developer crafting innovative solutions with AI, machine learning,
              and modern web technologies. Turning complex problems into elegant solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-up stagger-5">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline flex items-center gap-2">
                View Projects
              </a>
              <a
                href="/myresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-6">
              <a
                href="https://github.com/Shehriyar-Ali-Rustam"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shehriyar-ali-rustam-516895246/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shehriyarali122@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-up stagger-4">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glow float-image">
                <img
                  src="/images/profile_2.png"
                  alt="Shehriyar Ali Rustam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-glow" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-up stagger-8">
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
