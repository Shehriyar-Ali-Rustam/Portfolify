import { GraduationCap, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const educationData = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Capital University of Science and Technology (CUST), Islamabad',
    period: 'Sep 2022 – Aug 2026 (Expected)',
    description: 'CGPA: 3.63 / 4.0',
    current: true,
    image: '/images/educat/university.jpg',
  },
  {
    degree: 'SSC & HSSC — Pre-Engineering',
    institution: 'Aga Khan Higher Secondary School Chitral (AKHSS)',
    period: '2016 – 2021',
    description: 'Completed',
    current: false,
    image: '/images/educat/college.jpeg',
  },
];

const awards = [
  {
    title: "Dean's Honour Roll",
    detail: '5 times at CUST for outstanding academic performance',
  },
  {
    title: '2nd Place — Hackathon 2026',
    detail: 'Competing against 190+ teams from 25+ universities at CUST',
  },
  {
    title: 'Research Publication (IJIST)',
    detail: 'Autonomous Solar Vehicle paper accepted in the International Journal of Innovations in Science & Technology, aligned with UN SDGs',
  },
  {
    title: 'Level One Seller — Fiverr',
    detail: '5-star rating across 100+ completed projects for global clients',
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
                        <p className="text-muted-foreground text-sm mb-1">{edu.period}</p>
                        <p className="text-muted-foreground text-sm font-medium">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Honours & Awards */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-heading font-bold">
              Honours & <span className="gradient-text">Awards</span>
            </h3>
          </div>
          <div
            className={`grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto ${
              isVisible ? 'reveal visible' : 'reveal'
            }`}
          >
            {awards.map((award, index) => (
              <div
                key={award.title}
                className="glass-card p-6 flex items-start gap-4 card-hover"
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">{award.title}</h4>
                  <p className="text-muted-foreground text-sm">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
