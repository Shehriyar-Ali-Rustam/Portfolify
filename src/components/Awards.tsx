import { Award, Trophy, Mic2, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

// Newest first.
const awards = [
  {
    icon: Trophy,
    title: 'Winner (1st place), HackHorizon ’26',
    date: 'Aug 2026',
    detail: 'International Islamic University Islamabad (IIUI). Theme: “Human Intelligence vs Artificial Intelligence”.',
  },
  {
    icon: Award,
    title: '2nd place, CUST Hackathon 2026',
    date: '13 June 2026',
    detail: 'Among 190+ teams from 25+ universities, for TaxNet AI.',
  },
  {
    icon: Mic2,
    title: 'Paper presentation, ICCoR 2026',
    date: '2026',
    detail: 'International Conference on Computing Research, CUST.',
  },
  {
    icon: Star,
    title: 'Dean’s Honour Roll, five semesters',
    date: '2022 to 2026',
    // TODO(portfolio): confirm the fifth Dean's Honour Roll semester and its GPA before adding it here.
    detail: 'CUST. Semesters include Fall 2022 (GPA 3.91), Fall 2023 (3.67), Fall 2024 (3.84) and Fall 2025 (3.73).',
  },
];

export default function Awards() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="awards" aria-labelledby="awards-heading" className="section relative overflow-hidden bg-card/30">
      <div className="container mx-auto">
        <SectionHeader id="awards" lead="Honours &" accent="Awards" subtitle="Competitions, conferences and academic distinctions" />

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className={`glass-card p-6 flex items-start gap-4 card-hover ${isVisible ? 'reveal visible' : 'reveal'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <award.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">{award.title}</h3>
                <p className="text-primary text-xs font-medium mb-2">{award.date}</p>
                <p className="text-muted-foreground text-sm">{award.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
