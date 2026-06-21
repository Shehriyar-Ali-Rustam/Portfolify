import { useScrollReveal } from '../hooks/useScrollReveal';

const skillsData = [
  { name: 'Python', level: 92, category: 'Languages' },
  { name: 'Machine Learning', level: 88, category: 'AI / ML' },
  { name: 'Deep Learning', level: 82, category: 'AI / ML' },
  { name: 'NLP', level: 85, category: 'AI / ML' },
  { name: 'TensorFlow / Keras', level: 80, category: 'AI / ML' },
  { name: 'Scikit-Learn', level: 88, category: 'AI / ML' },
  { name: 'JavaScript', level: 85, category: 'Languages' },
  { name: 'React', level: 82, category: 'Frontend' },
  { name: 'HTML / CSS', level: 92, category: 'Frontend' },
  { name: 'FastAPI / Flask', level: 80, category: 'Backend' },
  { name: 'Streamlit', level: 88, category: 'Tools' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
  { name: 'Firebase', level: 78, category: 'Database' },
  { name: 'REST APIs', level: 85, category: 'Backend' },
  { name: 'WordPress', level: 82, category: 'CMS' },
  { name: 'C++', level: 75, category: 'Languages' },
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section relative overflow-hidden bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass-card p-6 card-hover ${
                  isVisible ? 'reveal visible' : 'reveal'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 50 + 300}ms`,
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-2 inline-block">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-heading font-semibold mb-6 text-xl">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'spaCy',
                'NLTK',
                'Prompt Engineering',
                'MLOps',
                'Model Training & Evaluation',
                'Microservices',
                'Pandas',
                'NumPy',
                'OpenCV',
                'Jupyter',
                'Google Colab',
                'Linux',
                'Figma',
                'Photoshop',
                'Canva',
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full glass text-sm font-medium hover:border-primary hover:text-primary transition-colors ${
                    isVisible ? 'reveal visible' : 'reveal'
                  }`}
                  style={{ transitionDelay: `${index * 30 + 500}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
