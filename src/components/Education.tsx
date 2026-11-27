import { GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const relevantCoursework = [
  'Calculus & Analytical Geometry',
  'Probability & Statistics',
  'Discrete Structures',
  'Applied Physics',
  'Software Architecture & Design',
  'Database Systems',
  'Computer Networks',
  'Cloud Computing',
  'Formal Methods',
  'Software Quality Engineering',
  'Technical Report Writing',
];

const alsoCompleted = ['Artificial Intelligence', 'Data Structures', 'Linear Algebra', 'Operating Systems', 'Simulation & Modeling'];

const educationData = [
  {
    degree: 'BS Software Engineering',
    institution: 'Capital University of Science and Technology (CUST), Islamabad, Pakistan',
    period: 'Sep 2022 to Jul 2026 · degree completed 15 July 2026',
    points: [
      'CGPA 3.66 / 4.00 (130 credits) · final-year GPA 3.81 (Fall 2025: 3.73, Spring 2026: 3.92)',
      'Dean’s Honour Roll ×5',
      'HEC-recognised, English-medium; full degree taught and examined in English (CUST English Proficiency Certificate, Nov 2026)',
      'Final-year project: Part I A−, Part II A',
    ],
    highlight: true,
  },
  {
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'Aga Khan Higher Secondary School, Seenlasht, Chitral',
    period: '2019 to 2021',
    points: ['885/1100 (80.5%)'],
    highlight: false,
  },
];

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" aria-labelledby="education-heading" className="section relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader id="education" lead="My" accent="Education" subtitle="Academic record and qualifications" />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="hidden md:block timeline-line" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'reveal visible' : 'reveal'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="hidden md:block timeline-dot" style={{ top: '2rem' }} />

                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`glass-card p-6 card-hover ${edu.highlight ? 'glow' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-1">{edu.degree}</h3>
                        <p className="text-primary font-medium mb-1">{edu.institution}</p>
                        <p className="text-muted-foreground text-xs mb-3">{edu.period}</p>
                        <ul className="space-y-1">
                          {edu.points.map((point) => (
                            <li key={point} className="text-muted-foreground text-sm flex gap-2">
                              <span className="text-primary flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        <div className={`max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-6 ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <div className="glass-card p-6">
            <h3 className="font-heading font-semibold mb-4">
              Relevant coursework <span className="text-muted-foreground text-sm font-normal">(A / A−)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {relevantCoursework.map((course) => (
                <span key={course} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                  {course}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-heading font-semibold mb-4">Also completed</h3>
            <div className="flex flex-wrap gap-2">
              {alsoCompleted.map((course) => (
                <span key={course} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
