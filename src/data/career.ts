export type CareerItem = {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string; // undefined means "current"
  description: string;
  technologies?: string[];
  type: 'work' | 'education' | 'certification';
};

export const careerData: CareerItem[] = [
  {
    id: '3',
    title: 'Job Search',
    company: 'Looking for opportunities',
    startDate: '2024-01',
    type: 'work',
    description: 'Actively seeking new opportunities as a Fullstack Developer.',
  },
  {
    id: '2',
    title: 'Fullstack Developer',
    company: 'ion2s',
    location: 'Deutschland',
    startDate: '2020-01',
    endDate: '2023-12',
    type: 'work',
    description:
      'Entwicklung von Web-Anwendungen mit React, Next.js, TypeScript und Node.js. Arbeit mit verschiedenen CMS-Systemen und APIs.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Contentful',
      'SASS',
    ],
  },
  {
    id: '1',
    title: 'Ausbildung',
    company: 'Fachinformatiker Anwendungsentwicklung',
    location: 'Deutschland',
    startDate: '2017-08',
    endDate: '2020-07',
    type: 'education',
    description:
      'Ausbildung zum Fachinformatiker mit Schwerpunkt Anwendungsentwicklung. Erste Erfahrungen in der Web-Entwicklung und Programmierung.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];
