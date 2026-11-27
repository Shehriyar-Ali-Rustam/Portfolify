import Section from './Section';

const experience = [
  {
    role: 'Machine Learning & Data Science Intern',
    organisation: 'Ezitech Institute, Islamabad',
    period: 'Jul to Sep 2025',
    summary:
      'Built Python ML prototypes for fraud detection and recommendation (including a movie recommendation system), sarcasm detection, and story/dialogue generation; data preprocessing, algorithm comparison, deployment as APIs and Streamlit apps.',
  },
  {
    role: 'AI & Machine Learning Intern',
    organisation: 'NAVTTC High Impact Youth Program, Islamabad',
    period: 'Mar to Jul 2025',
    summary:
      'Trained and evaluated supervised, unsupervised and neural-network models (scikit-learn, TensorFlow/Keras); NLP preprocessing, sentiment analysis and language-modelling exercises.',
  },
  {
    role: 'Freelance AI Web Developer & Designer',
    organisation: 'Fiverr (remote)',
    period: 'Sep 2021 to present',
    summary:
      '100+ projects for international clients, 5-star rating, Level One Seller. Since Feb 2026, building AI-integrated web apps (chatbots, recommendation, intelligent search).',
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="ml-1.5 space-y-8 border-l">
        {experience.map((item) => (
          <li key={item.role} className="relative pl-6">
            <span aria-hidden className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
            <h3 className="text-base font-semibold sm:text-lg">{item.role}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {item.organisation} · {item.period}
            </p>
            <p className="prose-width mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">{item.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
