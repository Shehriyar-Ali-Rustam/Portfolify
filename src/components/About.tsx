import Section from './Section';

const researchInterests = [
  'Computer vision for autonomous systems',
  'Efficient / edge AI and model compression',
  'Robotics (ROS2)',
  'NLP and LLM evaluation',
  'Retrieval and sentence embeddings',
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose-width space-y-4 text-base leading-relaxed text-foreground/85 md:text-[1.0625rem]">
        <p>
          I graduated in July 2026 with a BS in Software Engineering from Capital University of Science and Technology
          (CUST), Islamabad, with a CGPA of 3.66/4.00 and a final-year GPA of 3.81. My final-year research project was a
          low-cost, solar-powered autonomous vehicle for campus and community transport: I collected and annotated a
          10,000+ image campus dataset, trained a YOLOv8-Nano detector, and integrated perception with ROS2, ultrasonic
          sensing and GPS navigation on a Raspberry Pi 4. The work was published in IJIST (2026), with me as first
          author.
        </p>
        <p>
          The main lesson was the gap between accuracy and deployability: the detector ran at 0.8 FPS on the Pi versus
          28 FPS on a laptop. That is the problem I want to study in a master’s programme: efficient, uncertainty-aware
          perception for autonomous systems on constrained hardware. I also work on NLP and LLM evaluation, and have
          built semantic matching, text classification and prompt-benchmarking tools.
        </p>
      </div>

      <h3 className="mt-8 text-base font-semibold">Research interests</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {researchInterests.map((interest) => (
          <li key={interest} className="rounded-md border bg-card px-3 py-1.5 text-sm">
            {interest}
          </li>
        ))}
      </ul>
    </Section>
  );
}
