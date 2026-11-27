import { FileText, Github } from 'lucide-react';
import ExtLink from './ExtLink';
import Section from './Section';
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
    term: 'Team and my part',
    text: 'Team project with Sardar Shahzeb Khan and Saqib Nawaz Khan. My part: sensor-based navigation integration, embedded control logic and the machine-learning pipeline.',
  },
  {
    term: 'Grades',
    text: 'Final-year project Part I: A−, Part II: A.',
  },
];

const results = [
  { label: 'mAP@0.5 (YOLOv8-Nano)', value: '84.7%', note: '54.8% mAP@0.5:0.95' },
  { label: 'Obstacle-avoidance success', value: '94%', note: 'over 50 controlled trials' },
  { label: 'Response time', value: '487 ± 42', unit: 'ms' },
  { label: 'Solar harvest', value: '200 ± 15', unit: 'Wh/day', note: '14-day field test in Islamabad' },
];

// Detector speed on each platform. One series, so the caption names it instead of a legend.
const FPS_MAX = 28;
const fps = [
  { platform: 'Raspberry Pi 4 (on-device)', value: 0.8, emphasis: true },
  { platform: 'Laptop (offloaded)', value: 28, emphasis: false },
];

type Media =
  | { kind: 'image'; src: string; alt: string; width: number; height: number; caption?: string }
  | { kind: 'video'; src: string; poster?: string; label: string; caption?: string };

// TODO(portfolio): add 1 to 3 photos of the vehicle, a detection screenshot and/or a short demo video.
// Put the files in public/images/research/ (WebP for photos, ~1200px wide) and list them here, e.g.
//   { kind: 'image', src: '/images/research/vehicle.webp', alt: 'The solar-powered vehicle on a CUST campus road', width: 1200, height: 800 },
//   { kind: 'video', src: '/images/research/demo.mp4', poster: '/images/research/demo-poster.webp', label: 'Demo: obstacle avoidance on campus' },
// Blur any faces or number plates you don't have permission to publish. The gallery stays hidden while this is empty.
const media: Media[] = [];

export default function Research() {
  return (
    <Section
      id="research"
      title="Research: Autonomous Solar Vehicle for Community Transport"
      subtitle="Final-year research project · CUST, Islamabad · 2025 to 2026 · Supervisor: Syed Awais Haider"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div>
          <dl className="prose-width space-y-5">
            {details.map((item) => (
              <div key={item.term}>
                <dt className="eyebrow">{item.term}</dt>
                <dd className="mt-1 leading-relaxed text-foreground/85">{item.text}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <ExtLink href={PAPER_URL} className="btn btn-primary">
              <FileText size={16} aria-hidden />
              Read the paper
            </ExtLink>
            <ExtLink href={VEHICLE_CODE_URL} className="btn btn-outline">
              <Github size={16} aria-hidden />
              Code: vehicle control
            </ExtLink>
            <ExtLink href={PERCEPTION_CODE_URL} className="btn btn-outline">
              <Github size={16} aria-hidden />
              Code: YOLOv8 perception
            </ExtLink>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold">Results</h3>
          <dl className="mt-4 grid grid-cols-2 gap-3">
            {results.map((result) => (
              <div key={result.label} className="rounded-lg border bg-card p-4">
                <dt className="text-xs text-muted-foreground">{result.label}</dt>
                <dd className="mt-1">
                  <span className="whitespace-nowrap text-2xl font-semibold">{result.value}</span>
                  {result.unit && <span className="text-sm font-medium text-foreground/85"> {result.unit}</span>}
                </dd>
                {result.note && <dd className="mt-1 text-xs text-muted-foreground">{result.note}</dd>}
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="card mt-10">
        <h3 className="text-base font-semibold">Open problem and next step</h3>
        <p className="prose-width mt-2 leading-relaxed text-foreground/85">
          On-device inference was the bottleneck: <strong className="font-semibold text-foreground">0.8 FPS on the
          Raspberry Pi vs 28 FPS offloaded to a laptop</strong>. Next step: model compression, quantisation and
          edge-efficient perception.
        </p>

        <figure className="mt-6 max-w-3xl">
          <figcaption className="text-xs text-muted-foreground">Detector speed, frames per second</figcaption>
          <div className="mt-3 space-y-4">
            {fps.map((row) => (
              <div
                key={row.platform}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1.5 sm:grid-cols-[13rem_minmax(0,1fr)_4.5rem]"
              >
                <span className="text-sm text-foreground/85">{row.platform}</span>
                <div aria-hidden className="col-span-2 row-start-2 h-3 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                  <div
                    className={`h-3 rounded-r ${row.emphasis ? 'bg-primary' : 'bg-[hsl(var(--border-strong))]'}`}
                    style={{ width: `${(row.value / FPS_MAX) * 100}%` }}
                  />
                </div>
                <span className="col-start-2 row-start-1 text-right text-sm font-semibold sm:col-start-3">
                  {row.value} FPS
                </span>
              </div>
            ))}
          </div>
        </figure>
      </div>

      {media.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item) => (
            <figure key={item.src}>
              {item.kind === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-lg border object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  aria-label={item.label}
                  controls
                  preload="none"
                  className="h-auto w-full rounded-lg border"
                />
              )}
              {item.caption && <figcaption className="mt-2 text-xs text-muted-foreground">{item.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </Section>
  );
}
