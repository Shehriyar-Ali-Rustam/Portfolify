import { Brain, Trophy, Star, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Developer',
    description: 'Building production-ready AI/ML solutions with Python, TensorFlow, and NLP frameworks',
  },
  {
    icon: Trophy,
    title: 'Hackathon 2nd Place',
    description: 'Competed against 190+ teams from 25+ universities at CUST Hackathon 2026',
  },
  {
    icon: Star,
    title: 'Level One Fiverr Seller',
    description: '100+ completed projects with a 5-star rating for global clients',
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
              a Software Engineer and AI/ML Developer skilled in building production-ready
              AI, machine learning, and full-stack solutions based in Pakistan.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-foreground">Bachelor's in Software Engineering</span> at
              Capital University of Science and Technology (CGPA: 3.63/4.0), I specialize in
              <span className="text-foreground"> AI & Machine Learning</span>,
              <span className="text-foreground"> NLP</span>, and
              <span className="text-foreground"> Full-Stack Web Development</span> with hands-on
              internship experience and a proven track record in end-to-end product development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My research on an Autonomous Solar Vehicle has been accepted for publication in the
              International Journal of Innovations in Science & Technology (IJIST), aligned with
              the UN Sustainable Development Goals.
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
