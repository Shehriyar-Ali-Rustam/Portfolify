import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experienceData = [
  {
    title: 'AI/ML | Internship',
    company: 'NAVTTC High Impact Youth Program | Government of Pakistan',
    period: 'March 2024 - July 2024',
    type: 'internship',
  },
  {
    title: 'Graphic Designer',
    company: 'Fiverr',
    period: 'Sep 2022 - Present',
    type: 'current',
  },
  {
    title: 'Web Developer | Internship',
    company: 'Programmer Tech',
    period: 'June 2024 - Aug 2024',
    type: 'internship',
  },
  {
    title: 'Graphic Designer | Remote',
    company: 'IYRP 2026',
    period: 'Jan 2021 - Present',
    type: 'current',
  },
  {
    title: 'Android App Developer | Self-Placed',
    company: 'Self-Employed',
    period: 'March 2025 - Present',
    type: 'current',
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section relative overflow-hidden bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey
          </p>
        </div>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={`${exp.title}-${exp.company}`}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'reveal visible' : 'reveal'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full gradient-primary glow"
                  style={{ top: '1.5rem' }}
                />

                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}
                >
                  <div
                    className={`glass-card p-6 inline-block text-left ${
                      exp.type === 'current' ? 'glow' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="font-heading font-semibold text-lg">
                            {exp.title}
                          </h3>
                          {exp.type === 'current' && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full gradient-primary text-white">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium mb-1">{exp.company}</p>
                        <p className="text-muted-foreground text-sm">{exp.period}</p>
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
