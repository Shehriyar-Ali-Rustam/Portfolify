import { Target, ShieldCheck, Timer, Sun, Cpu, FileText, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { PAPER_URL, PERCEPTION_CODE_URL, VEHICLE_CODE_URL } from '../site';

const details = [
  {
    term: 'Problem',
    text: 'Affordable, clean last-mile transport for campuses and communities, built from low-cost components.',
  },
  {
    term: 'System',
    text: 'ROS2 (Foxy) on a Raspberry Pi 4; six ultrasonic sensors; NEO-6M GPS waypoint navigation; solar charging.',
  },
  {
    term: 'Perception',
    text: 'Custom dataset of 10,000+ campus images, annotated in CVAT; YOLOv8-Nano trained for pedestrian, vehicle and obstacle detection.',
  },
  {
    term: 'Team & my part',
    text: 'Team project with Sardar Shahzeb Khan and Saqib Nawaz Khan. My part: sensor-based navigation integration, embedded control logic and the machine-learning pipeline.',
  },
  { term: 'Grades', text: 'Final-year project Part I: A−, Part II: A.' },
];

const results = [
  { icon: Target, value: '84.7%', label: 'mAP@0.5', note: '54.8% mAP@0.5:0.95' },
  { icon: ShieldCheck, value: '94%', label: 'Obstacle-avoidance success', note: 'over 50 controlled trials' },
  { icon: Timer, value: '487 ± 42 ms', label: 'Response time' },
  { icon: Sun, value: '200 ± 15 Wh/day', label: 'Solar harvest', note: '14-day field test in Islamabad' },
];

const fps = [
  { platform: 'Raspberry Pi 4 (on-device)', value: 0.8 },
  { platform: 'Laptop (offloaded)', value: 28 },
];

type Media =
  | { kind: 'image'; src: string; alt: string; width: number; height: number }
  | { kind: 'video'; src: string; poster?: string; label: string };

// TODO(portfolio): add 1 to 3 photos of the vehicle, a detection screenshot and/or a short demo video.
// Put the files in public/images/research/ (WebP, ~1200px wide) and list them here, e.g.
//   { kind: 'image', src: '/images/research/vehicle.webp', alt: 'The solar-powered vehicle on a CUST campus road', width: 1200, height: 800 },
// The gallery stays hidden while this is empty.
const media: Media[] = [];

export default function Research() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="research" aria-labelledby="research-heading" className="section relative overflow-hidden bg-card/30">
      <div className="container mx-auto">
        <SectionHeader
          id="research"
          lead="Research:"
          accent="Autonomous Solar Vehicle"
          subtitle="For community transport · Final-year research project · CUST, Islamabad · 2025 to 2026 · Supervisor: Syed Awais Haider"
        />

        <div ref={ref} className={`grid lg:grid-cols-2 gap-10 ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <div className="glass-card p-6 md:p-8">
            <dl className="space-y-5">
              {details.map((item) => (
                <div key={item.term}>
                  <dt className="text-primary text-sm font-semibold uppercase tracking-wider">{item.term}</dt>
                  <dd className="mt-1 text-muted-foreground leading-relaxed">{item.text}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href={PAPER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm">
                <FileText size={16} />
                Read the paper
              </a>
              <a href={VEHICLE_CODE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 text-sm">
                <Github size={16} />
                Code: vehicle control
              </a>
              <a href={PERCEPTION_CODE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 text-sm">
                <Github size={16} />
                Code: YOLOv8 perception
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div
                  key={result.label}
                  className={`glass-card p-5 card-hover ${isVisible ? 'reveal visible' : 'reveal'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3">
                    <result.icon size={20} className="text-white" />
                  </div>
                  <p className="text-2xl font-heading font-bold gradient-text">{result.value}</p>
                  <p className="text-sm font-medium mt-1">{result.label}</p>
                  {result.note && <p className="text-xs text-muted-foreground mt-1">{result.note}</p>}
                </div>
              ))}
            </div>

            <div className="glass-card p-6 glow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Cpu size={20} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Open problem &amp; next step</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                On-device inference was the bottleneck:{' '}
                <span className="text-foreground font-medium">0.8 FPS on the Raspberry Pi vs 28 FPS offloaded to a laptop</span>.
                Next step: model compression, quantisation and edge-efficient perception.
              </p>
              <div className="mt-5 space-y-3" aria-label="Detector speed: 0.8 FPS on the Raspberry Pi 4, 28 FPS on a laptop">
                {fps.map((row) => (
                  <div key={row.platform}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{row.platform}</span>
                      <span className="font-semibold">{row.value} FPS</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: isVisible ? `${(row.value / 28) * 100}%` : '0%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {media.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {media.map((item) =>
              item.kind === 'image' ? (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="w-full h-auto rounded-2xl glass-card object-cover"
                />
              ) : (
                <video
                  key={item.src}
                  src={item.src}
                  poster={item.poster}
                  aria-label={item.label}
                  controls
                  preload="none"
                  className="w-full rounded-2xl glass-card"
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
