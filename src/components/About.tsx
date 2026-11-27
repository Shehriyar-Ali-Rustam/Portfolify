import { BookOpen, Trophy, GraduationCap, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const highlights = [
  {
    icon: BookOpen,
    title: 'First-Author Publication',
    description: 'Autonomous solar vehicle with YOLOv8 perception, published in IJIST (2026)',
  },
  {
    icon: GraduationCap,
    title: 'CGPA 3.66 / 4.00',
    description: 'Final-year GPA 3.81 · Dean’s Honour Roll five times at CUST',
  },
  {
    icon: Trophy,
    title: '1st Place, HackHorizon ’26',
    description: 'Plus 2nd place of 190+ teams at the CUST Hackathon 2026 (TaxNet AI)',
  },
];

const researchInterests = [
  'Computer vision for autonomous systems',
  'Efficient / edge AI and model compression',
  'Robotics (ROS2)',
  'NLP and LLM evaluation',
  'Retrieval and sentence embeddings',
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" aria-labelledby="about-heading" className="section relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader id="about" lead="About" accent="Me" subtitle="Research focus and background" />

        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I graduated in July 2026 with a <span className="text-foreground">BS in Software Engineering</span> from
              Capital University of Science and Technology (CUST), Islamabad, with a CGPA of 3.66/4.00 and a final-year
              GPA of 3.81. My final-year research project was a low-cost, solar-powered autonomous vehicle for campus
              and community transport: I collected and annotated a 10,000+ image campus dataset, trained a YOLOv8-Nano
              detector, and integrated perception with ROS2, ultrasonic sensing and GPS navigation on a Raspberry Pi 4.
              The work was published in <span className="text-primary font-medium">IJIST (2026)</span>, with me as
              first author.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The main lesson was the gap between accuracy and deployability: the detector ran at 0.8 FPS on the Pi
              versus 28 FPS on a laptop. That is the problem I want to study in a master’s programme:{' '}
              <span className="text-foreground">
                efficient, uncertainty-aware perception for autonomous systems on constrained hardware
              </span>
              . I also work on NLP and LLM evaluation, and have built semantic matching, text classification and
              prompt-benchmarking tools.
            </p>

            <div>
              <h3 className="font-heading font-semibold mb-3">Research interests</h3>
              <ul className="flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <li
                    key={interest}
                    className="px-4 py-2 rounded-full glass text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <a href="#research" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group">
              See my research
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 flex items-start gap-4 card-hover ${isVisible ? 'reveal visible' : 'reveal'}`}
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
