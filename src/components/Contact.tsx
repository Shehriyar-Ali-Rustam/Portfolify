import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import CopyButton from './CopyButton';
import ExtLink from './ExtLink';
import Section from './Section';
import { CV_URL, EMAIL, EMAIL_HREF, GITHUB_URL, LINKEDIN_URL, LOCATION } from '../site';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="prose-width text-lg leading-relaxed text-foreground/85">
        Open to MS / research master’s positions in computer vision, robotics, autonomous systems and NLP for Fall
        2027.
      </p>

      <dl className="mt-8 space-y-4 text-sm sm:text-base">
        <div className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center sm:gap-6">
          <dt className="flex items-center gap-2 text-muted-foreground">
            <Mail size={16} aria-hidden />
            Email
          </dt>
          <dd className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href={EMAIL_HREF} className="link break-all">
              {EMAIL}
            </a>
            <CopyButton text={EMAIL} label="Copy email" className="btn btn-outline btn-sm" />
          </dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
          <dt className="flex items-center gap-2 text-muted-foreground">
            <Github size={16} aria-hidden />
            GitHub
          </dt>
          <dd>
            <ExtLink href={GITHUB_URL} className="link">
              github.com/Shehriyar-Ali-Rustam
            </ExtLink>
          </dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
          <dt className="flex items-center gap-2 text-muted-foreground">
            <Linkedin size={16} aria-hidden />
            LinkedIn
          </dt>
          <dd>
            <ExtLink href={LINKEDIN_URL} className="link">
              linkedin.com/in/shehriyar-ali-rustam
            </ExtLink>
          </dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
          <dt className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} aria-hidden />
            Location
          </dt>
          <dd className="text-foreground/85">{LOCATION}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={EMAIL_HREF} className="btn btn-primary">
          <Mail size={16} aria-hidden />
          Email me
        </a>
        <ExtLink href={CV_URL} className="btn btn-outline">
          <Download size={16} aria-hidden />
          Download CV (PDF)
        </ExtLink>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">References available on request.</p>
    </Section>
  );
}
