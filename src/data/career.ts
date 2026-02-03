export type CareerItem = {
  id: string;
  title: {
    de: string;
    en: string;
  };
  company?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: {
    de: string;
    en: string;
  };
  technologies?: string[];
  type: 'work' | 'education' | 'certification';
};

export const careerData: CareerItem[] = [
  {
    id: '1',
    title: {
      de: 'Ausbildung zum Fachinformatiker Systemintegration',
      en: 'Apprenticeship as IT Specialist in System Integration',
    },
    company: 'WSE GmbH',
    startDate: '2018-06',
    endDate: '2015-07',
    type: 'education',
    description: {
      de: 'Ausbildung zum Fachinformatiker mit Schwerpunkt Systemintegration. Erste Erfahrungen in der Web-Entwicklung und Programmierung.',
      en: 'Apprenticeship as an IT specialist with a focus on system integration. First experiences in web development and programming.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    id: '2',
    title: {
      de: 'Web Developer für Vodafone Festnetz Bestandskunden Portal',
      en: 'Web Developer for Vodafone Fixed Network customer portal',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2018-08',
    endDate: '2020-08',
    type: 'work',
    description: {
      de: 'Maintenance & Erweiterung des Vodafone Festnetzbereich für Bestandskunden',
      en: 'Maintenance & extension of the Vodafone Fixed Network area for customers',
    },
    technologies: [
      'Angular.js',
      'Bootstrap',
      'Typo3',
      'jQuery',
      'Smarty',
    ],
  },
  {
    id: '4',
    title: {
      de: 'Web Developer für Vodafone Festnetz Neukunden Portal',
      en: 'Web Developer for Vodafone Fixed Network new customer portal',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2020-03',
    endDate: '2021-12',
    type: 'work',
    description: {
      de: 'Umbau des Frontends im Vodafone Festnetzbereich Neukunden auf responsive Templates, Umstellung sämtlicher Komponenten auf Vue.js und SCSS',
      en: 'Rebuild of the frontend in the Vodafone Fixed Network area for new customers on responsive templates, replacement of all components on Vue.js and SCSS',
    },
    technologies: [
      'HTML',
      'SCSS',
      'Vue.js',
      'Typescript',
    ],
  },
  {
    id: '5',
    title: {
      de: 'Full Stack Developer für ion2s Website',
      en: 'Full Stack Developer for ion2s Website',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2022-01',
    endDate: '2022-06',
    type: 'work',
    description: {
      de: 'Umbau der ion2s Webseite von Typo3 auf Nuxt.js/Vue mit Contentful Anbindung',
      en: 'Rebuild of the ion2s website from Typo3 to Nuxt.js/Vue with Contentful integration',
    },
    technologies: [
      'Nuxt.js',
      'Vue.js',
      'Typescript',
      'SCSS',
      'Contentful',
    ],
  },
  {
    id: '6',
    title: {
      de: 'Web Developer für Vodafone B2B Festnetz Neukunden Portal',
      en: 'Web Developer for Vodafone Fixed Network new customer portal',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2022-06',
    endDate: '2023-10',
    type: 'work',
    description: {
      de: 'Betreuung und Erweiterung des Vodafone B2B Festnetzbereichs (Neukunden) im Frontend',
      en: 'Maintenance and extension of the Vodafone B2B Fixed Network area (new customers) in the frontend',
    },
    technologies: [
      'Angular.js',
      'Bootstrap',
      'Typo3',
      'jQuery',
    ],
  },
  {
    id: '7',
    title: {
      de: 'Web Developer für Vodafone B2B Festnetz Neukunden Portal',
      en: 'Web Developer for Vodafone B2B Fixed Network new customer portal',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2022-10',
    endDate: '2023-05',
    type: 'work',
    description: {
      de: 'Umbau des Frontends im Vodafone B2B Festnetzbereich (Neukunden) auf Next.js, Umstellung sämtlicher Komponenten auf React sowie die Entwicklung neuer Frontend Komponenten',
      en: 'Rebuild of the frontend in the Vodafone B2B Fixed Network area (new customers) on Next.js, replacement of all components on React as well as the development of new frontend components',
    },
    technologies: [
      'Next.js',
      'React',
      'Typescript',
      'SCSS',
      'Contentful',
      'styled-components',
      'Storybook',
      'Jest',
      'Cypress',
      'Atomic Design',
    ],
  },
  {
    id: '9',
    title: {
      de: 'Full Stack Developer für ion2s Website',
      en: 'Full Stack Developer for ion2s Website',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2022-06',
    endDate: '2023-10',
    type: 'work',
    description: {
      de: 'Maintenance & Weiterentwicklung der ion2s Webseite mit Nuxt.js/Vue.js und Contentful Anbindung',
      en: 'Maintenance & further development of the ion2s website with Nuxt.js/Vue.js and Contentful integration',
    },
    technologies: [
      'Nuxt.js',
      'Vue.js',
      'Typescript',
      'SCSS',
      'Contentful',
    ],
  },
  {
    id: '10',
    title: {
      de: 'Web Developer für oxg.de Website',
      en: 'Web Developer for oxg.de Website',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2023-11',
    endDate: '2023-12',
    type: 'work',
    description: {
      de: 'Relaunch der oxg.de Website in TYPO3. Bei der Umsetzung im Frontend wurden basierend auf Bootstrap neue Komponenten entwickelt.',
      en: 'Relaunch of the oxg.de website in TYPO3. New components were developed based on Bootstrap in the frontend.',
    },
    technologies: [
      'HTML',
      'SCSS',
      'Bootstrap',
      'Typo3',
      'jQuery'
    ],
  },
  {
    id: '11',
    title: {
      de: 'Contentful Certified Professional',
      en: 'Contentful Certified Professional',
    },
    description: {
      de: 'Zertifizierung als Contentful Certified Professional',
      en: 'Certification as Contentful Certified Professional',
    },
    type: 'certification',
    startDate: '2022-05',
    endDate: '2024-05',
    technologies: [
      'Contentful',
    ],
  },
  {
    id: '12',
    title: {
      de: 'Full Stack Developer für PYUR Website',
      en: 'Full Stack Developer for PYUR Website',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2024-05',
    endDate: '2025-04',
    type: 'work',
    description: {
      de: 'Neuentwicklung des B2C-Webshop mit React Remix und Contentful Anbindung, Entwicklung von Frontend Komponenten basierend auf Figma-Designs, Checkout-Logik und Seitenbaum implementiert basierend auf Produkte und Content Elementen in Contentful, sowie Inputvalidierung mit ZOD',
      en: 'Rebuild of the B2C webshop with React Remix and Contentful integration, development of frontend components based on Figma designs, checkout logic and page tree implemented based on products and content elements in Contentful, as well as input validation with ZOD',
    },
    technologies: [
      'React',
      'Remix',
      'Chakra UI',
      'Typescript',
      'SCSS',
      'Contentful',
      'GraphQL',
      'ZOD',
    ],
  },
  {
    id: '13',
    title: {
      de: 'Web Developer für Ponnath Website',
      en: 'Web Developer for Ponnath Website',
    },
    company: 'ion2s',
    location: 'Darmstadt',
    startDate: '2023-11',
    endDate: '2025-06',
    type: 'work',
    description: {
      de: `Übernahme der Ponnath.de Webseite von der Vorgängeragentur, regelmäßige technische Aktualisierungen, sowie Einbau verschiedener neuer Features u.a. Coveto Plugin zum Anzeigen von Stellenanzeigen und tschechische und englische Lokalisierung`,
      en: `Takeover of the Ponnath.de website from the predecessor agency, regular technical updates, as well as the installation of various new features including the Coveto plugin for displaying job advertisements and czech and english localization`,
    },
    technologies: [
      'Next.js',
      'React',
      'i18n',
      'SCSS',
      'Contentful',
      'Typescript',
    ],
  },
  {
    id: '14',
    title: {
      de: 'Jobsuche',
      en: 'Job Search',
    },
    startDate: '2025-08',
    type: 'work',
    description: {
      de: 'Aktiv auf der Suche nach neuen Möglichkeiten als Fullstack/Frontend Developer.',
      en: 'Actively seeking new opportunities as a Fullstack/Frontend Developer.',
    },
  },
];
