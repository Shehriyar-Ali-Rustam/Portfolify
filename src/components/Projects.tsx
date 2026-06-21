import { ExternalLink, Github, Folder } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projectsData = [
  {
    title: 'Autonomous Solar Vehicle',
    description:
      'Final Year Project — Designed and built an autonomous solar-powered vehicle with sensor-based navigation and custom self-driving model training. Research accepted for publication in IJIST, aligned with UN SDGs.',
    image: '/images/project/1.png',
    tags: ['Python', 'Embedded Systems', 'Solar Energy', 'Autonomous Driving'],
    badge: 'FYP · Published',
    liveUrl: '#',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam',
  },
  {
    title: 'TaxNet AI',
    description:
      'Full-stack tax-intelligence dashboard for FBR analytics with a D3 force-directed knowledge graph for entity-network mapping and benami detection. Integrated Anthropic Claude AI copilot for natural-language analysis.',
    image: '/images/project/2.png',
    tags: ['React 18', 'Vite', 'Supabase', 'D3.js', 'Claude AI'],
    badge: 'Hackathon 2nd Place',
    liveUrl: '#',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam',
  },
  {
    title: 'AI Resume–Job Matcher',
    description:
      'AI-powered resume matcher using Sentence Transformers achieving 92%+ semantic matching accuracy. FastAPI microservice + Streamlit UI with advanced NLP pipelines (spaCy, NLTK) for skill detection and ATS optimization.',
    image: '/images/project/3.png',
    tags: ['Python', 'Sentence Transformers', 'FastAPI', 'Streamlit', 'NLP'],
    badge: 'Open Source',
    liveUrl: 'https://resume-job-matcher-ai-shehriyar.streamlit.app/',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam/ai-resume-job-matcher',
  },
  {
    title: 'Hello Kitty Voice Assistant',
    description:
      'Voice-activated AI assistant with custom wake-word detection, real-time speech-to-text, and natural TTS responses. Modular architecture supporting multi-provider AI (ChatGPT/Gemini) with cross-platform compatibility.',
    image: '/images/project/6.png',
    tags: ['Python', 'Google Speech Recognition', 'pyttsx3', 'ChatGPT', 'Gemini'],
    badge: null,
    liveUrl: '#',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam',
  },
  {
    title: 'E-Voting Console',
    description:
      'Secure real-time electronic voting platform for student elections using React and Firebase with tamper-resistant data handling and live result updates.',
    image: '/images/project/4.png',
    tags: ['React', 'Firebase', 'Security', 'Real-time'],
    badge: null,
    liveUrl: 'https://e-voting-console-for-students-shehriyar.streamlit.app/',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam/E-Voting-Console-for-students',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'Content-based recommendation engine with TF-IDF vectorization delivering sub-50ms retrieval across 250+ movies, built with Python and Streamlit.',
    image: '/images/project/3.png',
    tags: ['Python', 'TF-IDF', 'Scikit-Learn', 'Streamlit', 'Data Science'],
    badge: null,
    liveUrl: 'https://movie-recommendation-engine-shehriyar.streamlit.app/',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam/Movie-Recommendation-Engine',
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Featured projects I've worked on
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={`project-card group ${
                isVisible ? 'reveal visible' : 'reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {project.badge ? (
                <div className="absolute -top-3 -right-3 z-10">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full gradient-primary text-white shadow-lg">
                    {project.badge}
                  </span>
                </div>
              ) : (
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold z-10 group-hover:rotate-12 transition-transform">
                  {String(index + 1).padStart(2, '0')}
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder size={18} className="text-primary" />
                  <h3 className="font-heading font-semibold text-lg">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Shehriyar-Ali-Rustam"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All on GitHub
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
