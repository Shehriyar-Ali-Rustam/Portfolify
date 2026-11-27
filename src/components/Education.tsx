import Section from './Section';

const relevantCoursework = [
  'Calculus & Analytical Geometry',
  'Probability & Statistics',
  'Discrete Structures',
  'Applied Physics',
  'Software Architecture & Design',
  'Database Systems',
  'Computer Networks',
  'Cloud Computing',
  'Formal Methods',
  'Software Quality Engineering',
  'Technical Report Writing',
];

const alsoCompleted = ['Artificial Intelligence', 'Data Structures', 'Linear Algebra', 'Operating Systems', 'Simulation & Modeling'];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        <article className="card">
          <h3 className="text-lg font-semibold">BS Software Engineering</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Capital University of Science and Technology (CUST), Islamabad, Pakistan · Sep 2022 to Jul 2026 (degree
            completed 15 July 2026)
          </p>

          <ul className="prose-width mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/85 marker:text-muted-foreground sm:text-base">
            <li>
              CGPA <strong className="font-semibold text-foreground">3.66 / 4.00</strong> (130 credits) · final-year GPA{' '}
              <strong className="font-semibold text-foreground">3.81</strong> (Fall 2025: 3.73, Spring 2026: 3.92)
            </li>
            <li>Dean’s Honour Roll ×5</li>
            <li>
              HEC-recognised, English-medium; full degree taught and examined in English (CUST English Proficiency
              Certificate, Nov 2026)
            </li>
            <li>Final-year project: Part I A−, Part II A</li>
          </ul>

          <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <h4 className="text-sm font-semibold">Relevant coursework (A / A−)</h4>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {relevantCoursework.map((course) => (
                  <li key={course} className="tag">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Also completed</h4>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {alsoCompleted.map((course) => (
                  <li key={course} className="tag">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="card">
          <h3 className="text-lg font-semibold">Intermediate (Pre-Engineering)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Aga Khan Higher Secondary School, Seenlasht, Chitral · 2019 to 2021 · 885/1100 (80.5%)
          </p>
        </article>
      </div>
    </Section>
  );
}
