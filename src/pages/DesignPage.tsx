import { useEffect } from 'react';
import { ArrowLeft, Github, Palette } from 'lucide-react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Footer from '../components/Footer';
import { NAME, SITE_TITLE, SITE_URL, repoUrl } from '../site';

// Web and design work, kept off the main page and linked from the footer.
const webProjects = [
  {
    title: 'Aether: AI Web-Design Agency Landing Page',
    description: 'Animated landing page built with React 19, TypeScript, Vite, Tailwind CSS v4 and Framer Motion.',
    href: repoUrl('Aether-web-design-landing-page'),
  },
  {
    title: 'E-Voting Console for Students',
    description: 'React (Vite) app for student elections, with Firebase for real-time data and live results.',
    href: repoUrl('E-Voting-Console-for-students'),
  },
];

const tools = ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Figma', 'Photoshop', 'Canva'];

export default function DesignPage() {
  useEffect(() => {
    document.title = `Design & web work | ${NAME}`;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previous = canonical?.getAttribute('href');
    canonical?.setAttribute('href', `${SITE_URL}/design`);
    return () => {
      document.title = SITE_TITLE;
      if (canonical && previous) canonical.setAttribute('href', previous);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundAnimation />
      <a href="/" className="fixed top-6 left-6 z-50 btn-primary flex items-center gap-2">
        <ArrowLeft size={20} />
        Back to Portfolio
      </a>

      <main className="container mx-auto px-4 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Design &amp; <span className="gradient-text">Web Work</span>
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Since September 2021 I have worked as a freelance web developer and designer on Fiverr: 100+ projects for
          international clients, a 5-star rating and Level One Seller status. Since February 2026 I have been building
          AI-integrated web apps (chatbots, recommendation, intelligent search).
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {webProjects.map((project) => (
            <article key={project.href} className="glass-card p-6 card-hover flex flex-col">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Palette size={24} className="text-white" />
              </div>
              <h2 className="font-heading font-semibold text-xl mb-3">{project.title}</h2>
              <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm !py-2 !px-4 inline-flex items-center gap-2 self-start mt-auto"
              >
                <Github size={16} />
                Source Code
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="font-heading font-semibold mb-6 text-xl">Tools</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full glass text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
