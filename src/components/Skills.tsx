import { Brain, Eye, MessageSquare, Code2, Wrench, BadgeCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const skillGroups = [
  { icon: Brain, name: 'ML / AI', skills: ['YOLOv8 (Ultralytics)', 'TensorFlow/Keras', 'scikit-learn', 'Model training and evaluation'] },
  { icon: Eye, name: 'Vision & Robotics', skills: ['OpenCV', 'CVAT annotation', 'ROS2', 'Raspberry Pi', 'Ultrasonic and GPS sensors'] },
  {
    icon: MessageSquare,
    name: 'NLP / LLMs',
    skills: ['Sentence Transformers', 'spaCy', 'NLTK', 'LangChain', 'RAG', 'Prompt engineering', 'LLM APIs (OpenAI, Anthropic, Gemini)'],
  },
  { icon: Code2, name: 'Programming', skills: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'] },
  { icon: Wrench, name: 'Frameworks & Tools', skills: ['FastAPI', 'Flask', 'Streamlit', 'React', 'Supabase/PostgreSQL', 'D3', 'Git', 'Linux'] },
];

const certifications = [
  'Fundamentals of AI Agents Using RAG and LangChain (IBM, 2025)',
  'Machine Learning with Python (IBM Cognitive Class, 2025)',
  'Reinforcement & Deep Learning Essentials (IBM Skills Network, 2025)',
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="section relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader id="skills" lead="My" accent="Skills" subtitle="Technologies and tools I work with" />

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <div
                key={group.name}
                className={`glass-card p-6 card-hover ${isVisible ? 'reveal visible' : 'reveal'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <group.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-heading font-semibold">{group.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full glass text-xs font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div
              className={`glass-card p-6 card-hover ${isVisible ? 'reveal visible' : 'reveal'}`}
              style={{ transitionDelay: `${skillGroups.length * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <BadgeCheck size={20} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-muted-foreground text-sm flex gap-2">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
