import { ArrowDown, Download, FileText, Github, Mail } from 'lucide-react';
import ExtLink from './ExtLink';
import { CV_URL, EMAIL_HREF, GITHUB_URL, NAME, PAPER_URL } from '../site';

const keyFacts = [
  { label: 'CGPA 3.66 / 4.00', detail: 'final year 3.81' },
  { label: '1 first-author publication (IJIST 2026)' },
  { label: 'Dean’s Honour Roll ×5' },
  { label: '1st place, HackHorizon ’26' },
];

const featuredResults = [
  { value: '84.7%', label: 'mAP@0.5, YOLOv8-Nano detector' },
  { value: '94%', label: 'obstacle-avoidance success over 50 trials' },
  { value: '0.8 FPS', label: 'on the Raspberry Pi, vs 28 FPS on a laptop' },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pb-6 pt-24 md:pb-8 md:pt-32">
      <div className="page-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-center lg:gap-12">
        <div>
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src="/images/profile.webp"
              alt="Portrait of Shehriyar Ali Rustam"
              width={320}
              height={320}
              decoding="async"
              className="h-16 w-16 flex-none rounded-full object-cover sm:h-20 sm:w-20"
            />
            <h1 id="hero-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {NAME}
            </h1>
          </div>

          <p className="mt-5 text-lg font-medium text-primary sm:text-xl">
            Machine Learning · Computer Vision for Autonomous Systems · NLP
          </p>
          <p className="prose-width mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Software Engineering graduate (CUST, 2026) building perception systems that run on low-cost hardware.
            First author of a peer-reviewed paper on a solar-powered autonomous vehicle. Applying for a funded MS,
            Fall 2027.
          </p>

          <ul aria-label="Key facts" className="mt-6 flex flex-wrap gap-2">
            {keyFacts.map((fact) => (
              <li key={fact.label} className="rounded-md border bg-card px-3 py-1.5 text-sm">
                {fact.label}
                {fact.detail && <span className="text-muted-foreground"> · {fact.detail}</span>}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <ExtLink href={CV_URL} className="btn btn-primary">
              <Download size={16} aria-hidden />
              Download CV
            </ExtLink>
            <ExtLink href={PAPER_URL} className="btn btn-outline">
              <FileText size={16} aria-hidden />
              Read the paper
            </ExtLink>
            <ExtLink href={GITHUB_URL} className="btn btn-outline">
              <Github size={16} aria-hidden />
              GitHub
            </ExtLink>
            <a href={EMAIL_HREF} className="btn btn-outline">
              <Mail size={16} aria-hidden />
              Email me
            </a>
          </div>
        </div>

        <div className="card">
          <p className="eyebrow">Featured research · IJIST 2026</p>
          <p className="mt-2 font-heading text-lg font-semibold leading-snug">
            Autonomous Solar Vehicle for Community Transport
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            YOLOv8-Nano perception with ROS2, ultrasonic sensing and GPS navigation on a Raspberry Pi 4.
          </p>
          <dl className="mt-5 space-y-3">
            {featuredResults.map((result) => (
              <div key={result.value} className="flex flex-row-reverse items-baseline justify-end gap-3">
                <dt className="text-sm text-muted-foreground">{result.label}</dt>
                <dd className="w-20 flex-none text-xl font-semibold">{result.value}</dd>
              </div>
            ))}
          </dl>
          <a href="#research" className="link mt-5 inline-flex items-center gap-1 text-sm">
            Results and next steps
            <ArrowDown size={14} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
