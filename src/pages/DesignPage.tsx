import { useEffect } from 'react';
import { ArrowLeft, Github } from 'lucide-react';
import ExtLink from '../components/ExtLink';
import Footer from '../components/Footer';
import { NAME, SITE_TITLE, SITE_URL, repoUrl } from '../site';

// Web and design work, kept off the academic home page and linked only from the footer.
const webProjects = [
  {
    title: 'Aether: landing page for an AI web-design agency',
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
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="border-b">
        <div className="page-container flex h-16 items-center justify-between gap-4">
          <a href="/" className="font-heading text-base font-semibold">
            {NAME}
          </a>
          <a href="/" className="link inline-flex items-center gap-1.5 text-sm">
            <ArrowLeft size={16} aria-hidden />
            Main site
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <section aria-labelledby="design-heading" className="section">
          <div className="page-container">
            <h1 id="design-heading" className="text-3xl font-semibold tracking-tight">
              Design &amp; web work
            </h1>
            <p className="prose-width mt-4 leading-relaxed text-foreground/85">
              Since September 2021 I have worked as a freelance web developer and designer on Fiverr: 100+ projects for
              international clients, a 5-star rating and Level One Seller status. Since February 2026 I have been
              building AI-integrated web apps (chatbots, recommendation, intelligent search).
            </p>
            <p className="prose-width mt-3 text-muted-foreground">
              For my research and machine-learning work, see the{' '}
              <a href="/#research" className="link">
                main site
              </a>
              .
            </p>

            <h2 className="mt-12 text-xl font-semibold">Selected web projects</h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {webProjects.map((project) => (
                <li key={project.href} className="card flex flex-col">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.description}</p>
                  <ExtLink href={project.href} className="link mt-4 inline-flex items-center gap-1.5 self-start text-sm">
                    <Github size={15} aria-hidden />
                    Code
                    <span className="sr-only">: {project.title}</span>
                  </ExtLink>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-xl font-semibold">Tools</h2>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {tools.map((tool) => (
                <li key={tool} className="tag text-[0.8125rem]">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer showDesignLink={false} />
    </>
  );
}
