import { useScrollReveal } from '../hooks/useScrollReveal';

const skillsData = [
  { name: 'Python', level: 90, category: 'Programming' },
  { name: 'Machine Learning', level: 85, category: 'AI/ML' },
  { name: 'Data Science', level: 82, category: 'AI/ML' },
  { name: 'Deep Learning', level: 78, category: 'AI/ML' },
  { name: 'HTML/CSS', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'React', level: 80, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
  { name: 'Streamlit', level: 85, category: 'Tools' },
  { name: 'Flask', level: 75, category: 'Backend' },
  { name: 'Git & GitHub', level: 85, category: 'Tools' },
  { name: 'Graphic Design', level: 80, category: 'Design' },
  { name: 'UI/UX Design', level: 75, category: 'Design' },
  { name: 'Figma', level: 78, category: 'Design' },
  { name: 'SQL', level: 80, category: 'Database' },
  { name: 'WordPress', level: 82, category: 'CMS' },
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
                'NumPy',
                'Pandas',
                'Scikit-learn',
                'TensorFlow',
                'OpenCV',
                'NLP',
                'Bootstrap',
                'REST APIs',
                'Linux',
                'VS Code',
                'Jupyter',
                'Google Colab',
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
