import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experienceData = [
  {
    title: 'Machine Learning & Data Science Intern',
    company: 'Ezitech Institute',
    location: 'Islamabad, Pakistan',
    period: 'Jul 2025 – Sep 2025',
    type: 'internship',
    bullets: [
      'Developed Python-based ML projects including fraud detection and recommendation systems, handling data preprocessing, cleaning, and algorithm testing for real-world applications.',
      'Built and deployed APIs and interactive Streamlit apps, collaborated on debugging and optimization, and documented projects on GitHub.',
    ],
  },
  {
    title: 'AI & Machine Learning Intern',
    company: 'NAVTTC High Impact Youth Program',
    location: 'Islamabad, Pakistan',
    period: 'Mar 2025 – Jul 2025',
    type: 'internship',
    bullets: [
      'Completed hands-on AI/ML training building supervised/unsupervised models, NLP tasks, and neural networks using Python, Scikit-Learn, and TensorFlow.',
      'Implemented practical AI solutions including text preprocessing, sentiment analysis, and language modeling with real-world datasets and ML pipeline deployment.',
    ],
  },
  {
    title: 'Freelance Graphic Designer & Web Developer',
    company: 'Fiverr',
    location: 'Remote',
    period: 'Sep 2021 – Present',
    type: 'current',
    bullets: [
      'Completed 100+ high-quality graphic and web design projects for global clients, maintaining a 5-star rating and earning Level One Seller status.',
      'Delivered responsive websites and custom visuals using HTML, CSS, WordPress, Photoshop, and Canva, consistently meeting client deadlines.',
    ],
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
                    className={`glass-card p-6 inline-block text-left w-full ${
                      exp.type === 'current' ? 'glow' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h3 className="font-heading font-semibold text-lg">
                            {exp.title}
                          </h3>
                          {exp.type === 'current' && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full gradient-primary text-white">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground text-xs mb-3">
                          {exp.location} · {exp.period}
                        </p>
                        <ul className="space-y-1">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex gap-2">
                              <span className="text-primary mt-1 flex-shrink-0">•</span>
                              <span>{b}</span>
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
      </div>
    </section>
  );
}
