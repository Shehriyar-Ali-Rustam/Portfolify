import { useState } from 'react';
import { ArrowRight, FileText, Github } from 'lucide-react';
import ExtLink from './ExtLink';
import Section from './Section';
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
  context: string;
  categories: Category[];
  problem: string;
  built: string;
  result?: string;
  tags: string[];
  // Empty means the card says "Code available on request".
  links: { label: string; href: string; icon: 'code' | 'paper' }[];
  detailsHref?: string;
}

const projects: Project[] = [
  {
    title: 'Autonomous Solar Vehicle',
    context: 'Final-year research project · published in IJIST 2026',
    categories: ['cv', 'systems'],
    problem: 'Affordable, clean last-mile transport for campuses and communities, built from low-cost components.',
    built:
      'YOLOv8-Nano detector trained on a 10,000+ image campus dataset, integrated with ROS2, six ultrasonic sensors and GPS waypoint navigation on a Raspberry Pi 4. Team of three; my part: navigation integration, embedded control logic and the ML pipeline.',
    result: '84.7% mAP@0.5; 94% obstacle-avoidance success over 50 trials.',
    tags: ['YOLOv8', 'ROS2', 'Raspberry Pi 4', 'CVAT', 'Python'],
    links: [
      { label: 'Paper', href: PAPER_URL, icon: 'paper' },
      { label: 'Code: vehicle control', href: VEHICLE_CODE_URL, icon: 'code' },
      { label: 'Code: perception', href: PERCEPTION_CODE_URL, icon: 'code' },
    ],
    detailsHref: '#research',
  },
  {
    title: 'AI Resume–Job Matcher',
    context: 'NLP · open source',
    categories: ['nlp'],
    problem: 'Match resumes to job descriptions by meaning rather than by shared keywords.',
    built:
      'Semantic matching with Sentence Transformers and spaCy/NLTK skill extraction, served as a FastAPI microservice with a Streamlit UI.',
    result: '>92% matching accuracy on project tests; sub-second inference.',
    tags: ['Python', 'Sentence Transformers', 'spaCy', 'NLTK', 'FastAPI', 'Streamlit'],
    // TODO(portfolio): optional live demo link. The old site linked https://resume-job-matcher-ai-shehriyar.streamlit.app/
    // and the repo README spells it "esume-job-matcher-ai-shehriyar"; neither was verified, so no demo link is shown.
    links: [{ label: 'Code', href: repoUrl('ai-resume-job-matcher'), icon: 'code' }],
  },
  {
    title: 'TaxNet AI',
    context: 'Hackathon 2026 · 2nd place of 190+ teams',
    categories: ['systems'],
    problem: 'Explore tax data as a graph of linked entities, with risk scores and natural-language queries.',
    built:
      'Graph-intelligence dashboard: React + Supabase (PostgreSQL), a D3 entity knowledge graph, risk-scoring and entity-resolution modules, and an LLM copilot. My part: dashboard and database integration.',
    result: '2nd place of 190+ teams from 25+ universities, CUST Hackathon 2026.',
    tags: ['React', 'Supabase', 'PostgreSQL', 'D3', 'LLM'],
    links: [{ label: 'Code', href: repoUrl('taxnet-ai-dashboard'), icon: 'code' }],
  },
  {
    title: 'Prompt-Bench',
    context: 'LLM evaluation',
    categories: ['nlp'],
    problem: 'Compare how the same prompt performs across LLM providers.',
    built:
      'Python CLI that benchmarks prompts across OpenAI, Anthropic and Gemini with automated metrics, response logging and side-by-side comparison.',
    tags: ['Python', 'LLM APIs', 'Evaluation'],
    links: [{ label: 'Code', href: repoUrl('Prompt-Bench'), icon: 'code' }],
  },
  {
    title: 'Sarcasm & Hate-Speech Detection API',
    context: 'NLP · text classification',
    categories: ['nlp'],
    problem: 'Content moderation needs to tell sarcasm and hate speech apart from neutral text.',
    built:
      'End-to-end ML pipeline and FastAPI service that classifies text as sarcasm, hate speech or neutral. Built during the Ezitech internship.',
    tags: ['Python', 'NLP', 'scikit-learn', 'FastAPI'],
    links: [{ label: 'Code', href: repoUrl('Multi-Sarcasm-Hate-Speech-Detection-API'), icon: 'code' }],
  },
  {
    title: 'Voice Assistant',
    context: 'Speech · LLM integration',
    categories: ['nlp', 'systems'],
    problem: 'A hands-free assistant that is not tied to a single LLM provider.',
    built:
      'Wake-word detection, real-time speech-to-text and text-to-speech, with a modular multi-provider LLM back end (ChatGPT / Gemini); runs on Linux and Windows.',
    tags: ['Python', 'Speech', 'LLM APIs'],
    links: [{ label: 'Code', href: repoUrl('Personal-Assistant-Hello-Kitty-'), icon: 'code' }],
  },
  {
    title: 'Face Recognition Attendance System',
    context: 'Computer vision',
    categories: ['cv'],
    problem: 'Take attendance without a manual roll call.',
    built: 'Real-time face detection and identification with OpenCV and face_recognition, logging attendance automatically.',
    tags: ['Python', 'OpenCV', 'face_recognition'],
    links: [{ label: 'Code', href: repoUrl('Face-Recognition-Attendence-System'), icon: 'code' }],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? projects : projects.filter((project) => project.categories.includes(filter));

  return (
    <Section id="projects" title="Projects">
      <div role="group" aria-label="Filter projects by area" className="flex flex-wrap gap-2">
        {filters.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={filter === option.id}
            onClick={() => setFilter(option.id)}
            className={`btn btn-sm font-normal ${
              filter === option.id ? 'btn-primary' : 'btn-outline text-muted-foreground hover:text-foreground'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <p role="status" className="sr-only">
        Showing {visible.length} of {projects.length} projects
      </p>

      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {visible.map((project) => (
          <li key={project.title} className="card flex flex-col">
            <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.context}</p>

            <dl className="mt-4 space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="eyebrow">Problem</dt>
                <dd className="mt-0.5 text-foreground/85">{project.problem}</dd>
              </div>
              <div>
                <dt className="eyebrow">Built</dt>
                <dd className="mt-0.5 text-foreground/85">{project.built}</dd>
              </div>
              {project.result && (
                <div>
                  <dt className="eyebrow">Result</dt>
                  <dd className="mt-0.5 text-foreground">{project.result}</dd>
                </div>
              )}
            </dl>

            <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm">
              {project.links.length === 0 && <span className="text-muted-foreground">Code available on request</span>}
              {project.links.map((link) => (
                <ExtLink key={link.href} href={link.href} className="link inline-flex items-center gap-1.5">
                  {link.icon === 'code' ? <Github size={15} aria-hidden /> : <FileText size={15} aria-hidden />}
                  {link.label}
                  <span className="sr-only">: {project.title}</span>
                </ExtLink>
              ))}
              {project.detailsHref && (
                <a href={project.detailsHref} className="link inline-flex items-center gap-1.5">
                  Details
                  <span className="sr-only">: {project.title}</span>
                  <ArrowRight size={15} aria-hidden />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-muted-foreground">
        More projects on{' '}
        <ExtLink href={GITHUB_URL} className="link">
          GitHub
        </ExtLink>
        .
      </p>
    </Section>
  );
}
