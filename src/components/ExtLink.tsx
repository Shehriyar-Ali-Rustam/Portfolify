import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ExtLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> {
  href: string;
  children: ReactNode;
}

// External link: opens in a new tab without giving the new page access to this one,
// and tells screen-reader users that it opens a new tab.
export default function ExtLink({ children, ...props }: ExtLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
