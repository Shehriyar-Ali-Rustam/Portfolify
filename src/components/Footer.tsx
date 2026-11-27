import ExtLink from './ExtLink';
import { EMAIL_HREF, GITHUB_URL, LINKEDIN_URL, NAME } from '../site';

interface FooterProps {
  showDesignLink?: boolean;
}

export default function Footer({ showDesignLink = true }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="page-container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {NAME}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <ExtLink href={GITHUB_URL} className="hover:text-foreground">
              GitHub
            </ExtLink>
          </li>
          <li>
            <ExtLink href={LINKEDIN_URL} className="hover:text-foreground">
              LinkedIn
            </ExtLink>
          </li>
          <li>
            <a href={EMAIL_HREF} className="hover:text-foreground">
              Email
            </a>
          </li>
          {showDesignLink && (
            <li>
              <a href="/design" className="hover:text-foreground">
                Design &amp; web work
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
