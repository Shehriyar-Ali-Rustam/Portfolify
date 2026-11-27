import Section from './Section';

// Newest first.
const awards = [
  {
    date: 'Aug 2026',
    title: 'Winner (1st place), HackHorizon ’26',
    detail: 'International Islamic University Islamabad (IIUI). Theme: “Human Intelligence vs Artificial Intelligence”.',
  },
  {
    date: 'Jun 2026',
    title: '2nd place, CUST Hackathon 2026',
    detail: '13 June 2026, among 190+ teams from 25+ universities, for TaxNet AI.',
  },
  {
    date: '2026',
    title: 'Paper presentation, ICCoR 2026',
    detail: 'International Conference on Computing Research, CUST.',
  },
  {
    date: '2022 to 2026',
    title: 'Dean’s Honour Roll, five semesters',
    // TODO(portfolio): confirm the fifth Dean's Honour Roll semester and its GPA before adding it to this list.
    detail: 'CUST. Semesters include Fall 2022 (GPA 3.91), Fall 2023 (3.67), Fall 2024 (3.84) and Fall 2025 (3.73).',
  },
];

export default function Awards() {
  return (
    <Section id="awards" title="Honours & Awards">
      <ol className="space-y-6">
        {awards.map((award) => (
          <li key={award.title} className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
            <p className="text-sm text-muted-foreground sm:pt-0.5">{award.date}</p>
            <div>
              <h3 className="text-base font-semibold">{award.title}</h3>
              <p className="prose-width mt-1 text-sm leading-relaxed text-foreground/85 sm:text-base">{award.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
