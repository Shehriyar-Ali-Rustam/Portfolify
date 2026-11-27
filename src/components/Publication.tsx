import { FileDown, Link2 } from 'lucide-react';
import CopyButton from './CopyButton';
import ExtLink from './ExtLink';
import Section from './Section';
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
  return (
    <Section id="publication" title="Publication">
      <article className="card">
        <ul aria-label="About this paper" className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <li key={badge} className="rounded-md border px-2.5 py-1 text-xs font-medium text-foreground">
              {badge}
            </li>
          ))}
        </ul>

        <p className="prose-width mt-5 break-words leading-relaxed text-foreground/85">
          <strong className="font-semibold text-foreground">Rustam, S. A.</strong>, Khan, S. N., &amp; Khan, S. S.
          (2026). <cite>Autonomous Solar Vehicle: A Community-Oriented Sustainable Transportation Solution Aligned with
          UN Sustainable Development Goals.</cite> International Journal of Innovations in Science &amp; Technology
          (IJIST), 8(3), 273–293. (CUST ICCoR 2026 issue.){' '}
          <ExtLink href={PAPER_URL} className="link">
            {PAPER_URL}
          </ExtLink>
        </p>

        <p className="prose-width mt-3 text-sm text-muted-foreground">
          Presented at the International Conference on Computing Research (ICCoR 2026), Faculty of Computing, CUST.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ExtLink href={PAPER_URL} className="btn btn-primary">
            <Link2 size={16} aria-hidden />
            DOI
          </ExtLink>
          {PDF_URL && (
            <ExtLink href={PDF_URL} className="btn btn-outline">
              <FileDown size={16} aria-hidden />
              PDF
            </ExtLink>
          )}
          <CopyButton text={BIBTEX} label="Copy BibTeX" />
        </div>

        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">Show BibTeX</summary>
          <pre className="mt-3 overflow-x-auto rounded-md border bg-background p-4 text-xs leading-relaxed text-foreground/85">
            <code>{BIBTEX}</code>
          </pre>
        </details>
      </article>
    </Section>
  );
}
