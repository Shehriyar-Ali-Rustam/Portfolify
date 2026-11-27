import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Github, FileText, Folder, Car, BarChart3, FlaskConical, MessageSquareWarning, ScanFace, Mic, FileSearch } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { GITHUB_URL, PAPER_URL, PERCEPTION_CODE_URL, VEHICLE_CODE_URL, repoUrl } from '../site';

type Category = 'cv' | 'nlp' | 'systems';
type Filter = 'all' | Category;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'cv', label: 'Computer Vision & Robotics' },
  { id: 'nlp', label: 'NLP & LLMs' },
  { id: 'systems', label: 'Systems' },
];

interface Project {
  title: string;
  badge: string;
  categories: Category[];
  problem: string;
  built: string;
  result?: string;
  tags: string[];
  image?: string;
  icon: LucideIcon;
  links: { label: string; href: string; kind: 'code' | 'paper' }[];
}

const projectsData: Project[] = [
  {
    title: 'Autonomous Solar Vehicle',
    badge: 'Published · IJIST 2026',
    categories: ['cv', 'systems'],
    problem: 'Affordable, clean last-mile transport for campuses and communities, built from low-cost components.',
    built:
      'YOLOv8-Nano detector trained on a 10,000+ image campus dataset, integrated with ROS2, six ultrasonic sensors and GPS waypoint navigation on a Raspberry Pi 4. Team of three; my part: navigation integration, embedded control logic and the ML pipeline.',
    result: '84.7% mAP@0.5 · 94% obstacle-avoidance success over 50 trials',
    tags: ['YOLOv8', 'ROS2', 'Raspberry Pi 4', 'CVAT', 'Python'],
    icon: Car,
    links: [
      { label: 'Paper', href: PAPER_URL, kind: 'paper' },
      { label: 'Code: vehicle control', href: VEHICLE_CODE_URL, kind: 'code' },
      { label: 'Code: perception', href: PERCEPTION_CODE_URL, kind: 'code' },
    ],
  },
  {
    title: 'AI Resume–Job Matcher',
    badge: 'NLP · Open Source',
    categories: ['nlp'],
    problem: 'Match resumes to job descriptions by meaning rather than by shared keywords.',
    built:
      'Semantic matching with Sentence Transformers and spaCy/NLTK skill extraction, served as a FastAPI microservice with a Streamlit UI.',
    result: '>92% matching accuracy on project tests · sub-second inference',
    tags: ['Python', 'Sentence Transformers', 'spaCy', 'NLTK', 'FastAPI', 'Streamlit'],
    image: '/images/project/1.webp',
    icon: FileSearch,
    // TODO(portfolio): optional live demo link. The old site linked https://resume-job-matcher-ai-shehriyar.streamlit.app/
    // and the repo README spells it "esume-job-matcher-ai-shehriyar"; neither was verified, so no demo link is shown.
    links: [{ label: 'Code', href: repoUrl('ai-resume-job-matcher'), kind: 'code' }],
  },
  {
    title: 'TaxNet AI',
    badge: 'Hackathon 2nd of 190+',
    categories: ['systems'],
    problem: 'Explore tax data as a graph of linked entities, with risk scores and natural-language queries.',
    built:
      'Graph-intelligence dashboard: React + Supabase (PostgreSQL), a D3 entity knowledge graph, risk-scoring and entity-resolution modules, and an LLM copilot. My part: dashboard and database integration.',
    result: '2nd place of 190+ teams from 25+ universities, CUST Hackathon 2026',
    tags: ['React', 'Supabase', 'PostgreSQL', 'D3', 'LLM'],
    icon: BarChart3,
    links: [{ label: 'Code', href: repoUrl('taxnet-ai-dashboard'), kind: 'code' }],
  },
  {
    title: 'Prompt-Bench',
    badge: 'LLM Evaluation',
    categories: ['nlp'],
    problem: 'Compare how the same prompt performs across LLM providers.',
    built:
      'Python CLI that benchmarks prompts across OpenAI, Anthropic and Gemini with automated metrics, response logging and side-by-side comparison.',
    tags: ['Python', 'LLM APIs', 'Evaluation'],
    icon: FlaskConical,
    links: [{ label: 'Code', href: repoUrl('Prompt-Bench'), kind: 'code' }],
  },
  {
    title: 'Sarcasm & Hate-Speech Detection API',
    badge: 'Text Classification',
    categories: ['nlp'],
    problem: 'Content moderation needs to tell sarcasm and hate speech apart from neutral text.',
    built:
      'End-to-end ML pipeline and FastAPI service that classifies text as sarcasm, hate speech or neutral. Built during the Ezitech internship.',
    tags: ['Python', 'NLP', 'scikit-learn', 'FastAPI'],
    icon: MessageSquareWarning,
    links: [{ label: 'Code', href: repoUrl('Multi-Sarcasm-Hate-Speech-Detection-API'), kind: 'code' }],
  },
  {
    title: 'Voice Assistant',
    badge: 'Speech · LLM',
    categories: ['nlp', 'systems'],
    problem: 'A hands-free assistant that is not tied to a single LLM provider.',
    built:
      'Wake-word detection, real-time speech-to-text and text-to-speech, with a modular multi-provider LLM back end (ChatGPT / Gemini); runs on Linux and Windows.',
    tags: ['Python', 'Speech', 'LLM APIs'],
    image: '/images/project/6.webp',
    icon: Mic,
    links: [{ label: 'Code', href: repoUrl('Personal-Assistant-Hello-Kitty-'), kind: 'code' }],
  },
  {
    title: 'Face Recognition Attendance System',
    badge: 'Computer Vision',
    categories: ['cv'],
    problem: 'Take attendance without a manual roll call.',
    built: 'Real-time face detection and identification with OpenCV and face_recognition, logging attendance automatically.',
    tags: ['Python', 'OpenCV', 'face_recognition'],
    icon: ScanFace,
    links: [{ label: 'Code', href: repoUrl('Face-Recognition-Attendence-System'), kind: 'code' }],
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? projectsData : projectsData.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader id="projects" lead="My" accent="Projects" subtitle="Research and engineering work, with code" />

        <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === option.id ? 'gradient-primary text-white glow' : 'glass text-muted-foreground hover:text-foreground hover:border-primary'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((project, index) => (
            <article
              key={project.title}
              className={`project-card group flex flex-col ${isVisible ? 'reveal visible' : 'reveal'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="px-3 py-1 text-xs font-semibold rounded-full gradient-primary text-white shadow-lg">
                  {project.badge}
                </span>
              </div>

              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/25 via-card to-secondary/25 transition-transform duration-500 group-hover:scale-110">
                    <div className="w-20 h-20 rounded-2xl gradient-primary glow flex items-center justify-center float-image">
                      <project.icon size={40} className="text-white" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Folder size={18} className="text-primary flex-shrink-0" />
                  <h3 className="font-heading font-semibold text-lg">{project.title}</h3>
                </div>

                <dl className="space-y-2 text-sm mb-4">
                  <div>
                    <dt className="text-primary text-xs font-semibold uppercase tracking-wider">Problem</dt>
                    <dd className="text-muted-foreground">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-primary text-xs font-semibold uppercase tracking-wider">Built</dt>
                    <dd className="text-muted-foreground">{project.built}</dd>
                  </div>
                  {project.result && (
                    <div>
                      <dt className="text-primary text-xs font-semibold uppercase tracking-wider">Result</dt>
                      <dd className="text-foreground font-medium">{project.result}</dd>
                    </div>
                  )}
                </dl>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  {project.links.length === 0 && <span className="text-muted-foreground">Code available on request</span>}
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
                    >
                      {link.kind === 'code' ? <Github size={15} /> : <FileText size={15} />}
                      {link.label}
                      <span className="sr-only">: {project.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
            View All on GitHub
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
