import { BookOpen, Link2, FileDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CopyButton from './CopyButton';
import SectionHeader from './SectionHeader';
import { PAPER_URL } from '../site';

// TODO(portfolio): link the published PDF if IJIST makes it open access. The DOI resolves to
// https://journal.50sea.com/index.php/IJIST/article/view/1807; copy the PDF link from that page.
// While this is empty the PDF button is hidden.
const PDF_URL = '';

const badges = ['First author', 'Peer-reviewed', 'Presented at ICCoR 2026'];

const BIBTEX = `@article{rustam2026autonomous,
  author  = {Rustam, Shehriyar Ali and Khan, Saqib Nawaz and Khan, Sardar Shahzeb},
  title   = {Autonomous Solar Vehicle: A Community-Oriented Sustainable Transportation Solution Aligned with {UN} Sustainable Development Goals},
  journal = {International Journal of Innovations in Science \\& Technology},
  year    = {2026},
  volume  = {8},
  number  = {3},
  pages   = {273--293},
  doi     = {10.33411/IJIST/1807}
}`;

export default function Publication() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="publication" aria-labelledby="publication-heading" className="section relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader id="publication" lead="My" accent="Publication" subtitle="Peer-reviewed research" />

        <div ref={ref} className={`max-w-4xl mx-auto ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <article className="glass-card p-6 md:p-8 glow card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <BookOpen size={24} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <ul className="flex flex-wrap gap-2 mb-4">
                  {badges.map((badge) => (
                    <li key={badge} className="px-3 py-1 text-xs font-semibold rounded-full gradient-primary text-white">
                      {badge}
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground leading-relaxed break-words">
                  <strong className="text-foreground">Rustam, S. A.</strong>, Khan, S. N., &amp; Khan, S. S. (2026).{' '}
                  <cite className="text-foreground">
                    Autonomous Solar Vehicle: A Community-Oriented Sustainable Transportation Solution Aligned with UN
                    Sustainable Development Goals.
                  </cite>{' '}
                  International Journal of Innovations in Science &amp; Technology (IJIST), 8(3), 273–293. (CUST ICCoR
                  2026 issue.){' '}
                  <a href={PAPER_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {PAPER_URL}
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  Presented at the International Conference on Computing Research (ICCoR 2026), Faculty of Computing,
                  CUST.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <a href={PAPER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm">
                    <Link2 size={16} />
                    DOI
                  </a>
                  {PDF_URL && (
                    <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 text-sm">
                      <FileDown size={16} />
                      PDF
                    </a>
                  )}
                  <CopyButton text={BIBTEX} label="Copy BibTeX" className="btn-outline flex items-center gap-2 text-sm" />
                </div>

                <details className="mt-4">
                  <summary className="cursor-pointer text-sm text-muted-foreground hover:text-primary">Show BibTeX</summary>
                  <pre className="mt-3 overflow-x-auto rounded-xl bg-background/60 border border-border p-4 text-xs text-muted-foreground">
                    <code>{BIBTEX}</code>
                  </pre>
                </details>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
