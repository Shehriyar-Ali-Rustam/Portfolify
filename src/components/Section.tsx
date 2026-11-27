import type { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionProps {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={`section ${className}`}>
      <div ref={ref} className={`page-container reveal ${isVisible ? 'visible' : ''}`}>
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
        {subtitle && <p className="section-subtitle prose-width">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
