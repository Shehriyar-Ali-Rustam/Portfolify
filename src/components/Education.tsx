import { GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const educationData = [
  {
    degree: "Bachelor in Software Engineering",
    institution: 'Capital University of Science and Technology Islamabad | CUST',
    period: '2022 - 2026',
    description: 'Continued...',
    current: true,
    image: '/images/educat/university.jpg',
  },
  {
    degree: 'SSC & HSSC | Pre-Engineering',
    institution: 'Aga Khan Higher Secondary School Chitral | AKHSS',
    period: '2016 - 2021',
    description: 'Completed',
    current: false,
    image: '/images/educat/college.jpeg',
  },
];

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic journey and qualifications
          </p>
        </div>

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

                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  }`}
                >
                  <div
                    className={`glass-card p-6 inline-block text-left ${
                      edu.current ? 'glow' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-heading font-semibold text-lg">
                            {edu.degree}
                          </h3>
                          {edu.current && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full gradient-primary text-white">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium mb-1">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm mb-3">{edu.period}</p>
                        <p className="text-muted-foreground text-sm">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
