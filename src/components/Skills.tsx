import Section from './Section';

const skillGroups = [
  { name: 'ML / AI', skills: ['YOLOv8 (Ultralytics)', 'TensorFlow/Keras', 'scikit-learn', 'Model training and evaluation'] },
  {
    name: 'Vision & robotics',
    skills: ['OpenCV', 'CVAT annotation', 'ROS2', 'Raspberry Pi', 'Ultrasonic and GPS sensors'],
  },
  {
    name: 'NLP / LLMs',
    skills: [
      'Sentence Transformers',
      'spaCy',
      'NLTK',
      'LangChain',
      'RAG',
      'Prompt engineering',
      'LLM APIs (OpenAI, Anthropic, Gemini)',
    ],
  },
  { name: 'Programming', skills: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'] },
  {
    name: 'Frameworks & tools',
    skills: ['FastAPI', 'Flask', 'Streamlit', 'React', 'Supabase/PostgreSQL', 'D3', 'Git', 'Linux'],
  },
];

const certifications = [
  'Fundamentals of AI Agents Using RAG and LangChain (IBM, 2025)',
  'Machine Learning with Python (IBM Cognitive Class, 2025)',
  'Reinforcement & Deep Learning Essentials (IBM Skills Network, 2025)',
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.name} className="grid gap-2 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
            <dt className="text-sm font-semibold sm:pt-0.5">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag text-[0.8125rem]">
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <p className="prose-width mt-8 text-sm leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">Certifications:</span> {certifications.join(' · ')}.
      </p>
    </Section>
  );
}
