import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Download } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CopyButton from './CopyButton';
import SectionHeader from './SectionHeader';
import { CV_URL, EMAIL, EMAIL_HREF, GITHUB_URL, LINKEDIN_URL, LOCATION } from '../site';

const contactInfo = [
  { icon: Mail, label: 'Email', value: EMAIL, href: EMAIL_HREF },
  { icon: Github, label: 'GitHub', value: 'Shehriyar-Ali-Rustam', href: GITHUB_URL },
  { icon: Linkedin, label: 'LinkedIn', value: 'shehriyar-ali-rustam', href: LINKEDIN_URL },
  { icon: MapPin, label: 'Location', value: LOCATION },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [opened, setOpened] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // No backend: the message opens in the visitor's own email app, addressed to me.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    window.location.href = `${EMAIL_HREF}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors';

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section relative overflow-hidden bg-card/30">
      <div className="container mx-auto">
        <SectionHeader
          id="contact"
          lead="Get In"
          accent="Touch"
          subtitle="Open to MS / research master’s positions in computer vision, robotics, autonomous systems and NLP for Fall 2027."
        />

        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                Email is the quickest way to reach me. My CV has the full record; references are available on request.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const content = (
                  <>
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      <p className="font-medium text-sm break-all">{item.value}</p>
                    </div>
                  </>
                );
                const className = `glass-card p-4 flex items-center gap-4 card-hover ${isVisible ? 'reveal visible' : 'reveal'}`;
                const style = { transitionDelay: `${index * 100}ms` };
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={className}
                    style={style}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className={className} style={style}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                <Download size={18} />
                Download CV (PDF)
              </a>
              <CopyButton text={EMAIL} label="Copy email" className="btn-outline flex items-center gap-2" />
            </div>
          </div>

          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="MS position / research enquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Your message..." />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send via Email
                <Send size={18} />
              </button>
              <p role="status" className="text-xs text-muted-foreground text-center">
                {opened
                  ? `Your email app should now be open with this message. If it isn't, write to ${EMAIL}.`
                  : 'Opens your email app with this message addressed to me.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
