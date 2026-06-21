import { Code2, Palette, Zap, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful user experiences and interfaces',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and seamless interactions',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me better
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isVisible ? 'reveal visible' : 'reveal'
          }`}
        >
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-primary font-medium">Shehriyar Ali Rustam</span>,
              a passionate developer and designer based in Pakistan. Currently pursuing my
              Bachelor's degree in Computer Science at Capital University of Science and Technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in <span className="text-foreground">AI & Machine Learning</span>,
              <span className="text-foreground"> Web Development</span>, and
              <span className="text-foreground"> Graphic Design</span>. My journey in tech
              started with curiosity and has evolved into a passion for building innovative
              solutions that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or working on freelance projects. I believe in continuous
              learning and pushing the boundaries of what's possible.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group"
            >
              Let's work together
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 flex items-start gap-4 card-hover ${
                  isVisible ? 'reveal visible' : 'reveal'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
