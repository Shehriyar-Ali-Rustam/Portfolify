interface SectionHeaderProps {
  id: string;
  lead?: string;
  accent: string;
  subtitle?: string;
}

export default function SectionHeader({ id, lead, accent, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 id={`${id}-heading`} className="section-title">
        {lead && <>{lead} </>}
        <span className="gradient-text">{accent}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
