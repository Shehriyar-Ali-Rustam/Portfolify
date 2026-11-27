// Identity and links shared across sections. Section-specific content lives at the top of each component.

export const NAME = 'Shehriyar Ali Rustam';
export const SITE_TITLE = 'Shehriyar Ali Rustam | AI, Computer Vision & NLP';
export const SITE_URL = 'https://portfolify-eight.vercel.app';

export const EMAIL = 'shehriyarali122@gmail.com';
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const GITHUB_URL = 'https://github.com/Shehriyar-Ali-Rustam';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/shehriyar-ali-rustam/';
export const LOCATION = 'Islamabad, Pakistan';

// TODO(portfolio): add your academic CV at public/cv/CV_Shehriyar_Ali_Rustam.pdf (exact filename).
// Every "Download CV" button points here, so they stay broken until that file exists.
export const CV_URL = '/cv/CV_Shehriyar_Ali_Rustam.pdf';

export const PAPER_DOI = '10.33411/IJIST/1807';
export const PAPER_URL = `https://doi.org/${PAPER_DOI}`;

const REPO = (name: string) => `${GITHUB_URL}/${name}`;

// TODO(portfolio): the brief asked for https://github.com/Shehriyar-Ali-Rustam/Solar-Autonomous-Vehicle-Part-II,
// but that repository is empty (checked 28 Nov 2026). These two public repos hold the project's code.
// If you push the code to Part II, point the links back there.
export const VEHICLE_CODE_URL = REPO('Autonomous-Solar-Vehicle-FYP');
export const PERCEPTION_CODE_URL = REPO('Autonomous-Solar-Vehicle');

export const repoUrl = REPO;
