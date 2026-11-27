import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const experienceData = [
  {
    title: 'Machine Learning & Data Science Intern',
    company: 'Ezitech Institute',
    location: 'Islamabad',
    period: 'Jul to Sep 2025',
    current: false,
    summary:
      'Built Python ML prototypes for fraud detection and recommendation (including a movie recommendation system), sarcasm detection, and story/dialogue generation; data preprocessing, algorithm comparison, deployment as APIs and Streamlit apps.',
  },
  {
    title: 'AI & Machine Learning Intern',
    company: 'NAVTTC High Impact Youth Program',
    location: 'Islamabad',
    period: 'Mar to Jul 2025',
    current: false,
    summary:
      'Trained and evaluated supervised, unsupervised and neural-network models (scikit-learn, TensorFlow/Keras); NLP preprocessing, sentiment analysis and language-modelling exercises.',
  },
  {
    title: 'Freelance AI Web Developer & Designer',
    company: 'Fiverr',
    location: 'Remote',
    period: 'Sep 2021 to present',
    current: true,
    summary:
      '100+ projects for international clients, 5-star rating, Level One Seller. Since Feb 2026, building AI-integrated web apps (chatbots, recommendation, intelligent search).',
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="section relative overflow-hidden bg-card/30">
      <div className="container mx-auto">
        <SectionHeader id="experience" lead="Work" accent="Experience" subtitle="Internships and freelance work" />

        <div ref={ref} className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'reveal visible' : 'reveal'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-primary glow"
                  style={{ top: '1.5rem' }}
                />

                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`glass-card p-6 card-hover ${exp.current ? 'glow' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h3 className="font-heading font-semibold text-lg">{exp.title}</h3>
                          {exp.current && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full gradient-primary text-white">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground text-xs mb-3">
                          {exp.location} · {exp.period}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{exp.summary}</p>
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
