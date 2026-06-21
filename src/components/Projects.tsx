import { ExternalLink, Github, Folder } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projectsData = [
  {
    title: 'AI Resume Job Matcher',
    description:
      'AI-powered application that intelligently matches resumes with job descriptions using machine learning algorithms for better recruitment.',
    image: '/images/project/1.png',
    tags: ['Python', 'Streamlit', 'NLP', 'Machine Learning'],
    liveUrl: 'https://resume-job-matcher-ai-shehriyar.streamlit.app/',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam/ai-resume-job-matcher',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Website featuring responsive design, smooth animations, and interactive elements.',
    image: '/images/project/2.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    liveUrl: 'https://shehriyar-ali-rustam.github.io/Updated-Personal-Portfolio/',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam/Updated-Personal-Portfolio',
  },
  {
    title: 'Movie Recommendation Engine',
    description:
      'Suggests movies based on user preferences and viewing history using collaborative filtering.',
    image: '/images/project/3.png',
    tags: ['Python', 'Streamlit', 'ML', 'Data Science'],
    liveUrl: 'https://movie-recommendation-engine-shehriyar.streamlit.app/',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam/Movie-Recommendation-Engine',
  },
  {
    title: 'E-Voting Console for Students',
    description:
      'Secure electronic voting system designed for student elections with real-time results and authentication.',
    image: '/images/project/4.png',
    tags: ['Python', 'Streamlit', 'Security', 'Database'],
    liveUrl: 'https://e-voting-console-for-students-shehriyar.streamlit.app/',
    githubUrl: 'https://github.com/Shehriyar-Ali-Rustam/E-Voting-Console-for-students',
  },
  {
    title: 'Chef-Bot (Kitchen Helper)',
    description:
      'Provides cooking assistance, recipe suggestions, and ingredient substitutions to help users in the kitchen.',
    image: '/images/project/5.png',
    tags: ['Python', 'AI', 'NLP', 'Chatbot'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Personal Assistant (Hello Kitty)',
    description:
      'Voice-activated personal assistant that helps with daily tasks, reminders, and information queries.',
    image: '/images/project/6.png',
    tags: ['Python', 'AI', 'Voice Recognition', 'APIs'],
    liveUrl: '#',
    githubUrl: '#',
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
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold z-10 group-hover:rotate-12 transition-transform">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
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
            href="/projects"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
