import { Name } from './types';

export type Job = {
  id: string;
  company: string;
  description: string;
  links?: Array<string>;
  project: string;
  sector: string;
  techStack: Array<string>;
};

export const JOBS: Record<Name, Array<Job>> = {
  barbora: [
    {
      id: '1',
      company: 'Qubix Studio',
      project: 'Virtual Earth Asset Management & Crypto Wallet',
      sector: 'Crypto',
      description:
        'Implementation of features based on Figma designs and customer requirements for Districts - a virtual representation of the Earth - and Freehold Wallet - focusing on crypto asset management and investments.',
      techStack: ['Typescript', 'React', 'Material UI', 'GraphQL', 'Nx', 'Storybook', 'Jest', 'React Query', 'Figma'],
      links: ['https://app.districts.xyz', 'https://app.freehold.finance'],
    },
    {
      id: '2',
      company: 'Deutsche Börse',
      project: 'Financial Message Exchange',
      sector: 'Finance',
      description: 'Redesign of a message exchange application based on provided designs, visualization in Storybook.',
      techStack: ['Typescript', 'React', 'Material UI', 'Nx', 'Storybook'],
    },
    {
      id: '3',
      company: 'Wild&Coco',
      project: 'Production System & Strategy',
      sector: 'Food & Beverage',
      description:
        'Development of a custom reporting interface to streamline logistics; evaluation of existing infrastructure to deliver a performance and scalability roadmap.',
      techStack: ['Typescript', 'React', 'Material UI'],
      links: ['https://wildandcoco.com'],
    },
    {
      id: '4',
      company: 'Banking Software Company',
      project: 'Digital Banking Boilerplate',
      sector: 'Finance',
      description:
        'Implementation of features in a reference implementation of the core smart banking product, writing Cypress automation tests with Cucumber.',
      techStack: ['Typescript', 'React', 'Material UI', 'GraphQL', 'Nx', 'Storybook', 'Cypress', 'Cucumber', 'Figma'],
    },
    {
      id: '5',
      company: 'Vodafone',
      project: 'Eshop Platform',
      sector: 'Telecommunications',
      description: 'Implementing new sections of the new eshop solution, writing component tests with Jest.',
      techStack: ['Typescript', 'React', 'Next.js', 'Storybook', 'react-hook-form'],
      links: ['https://vodafone.cz/eshop'],
    },
    {
      id: '6',
      company: 'CN Group',
      project: 'Attendance & Shift Tracking PWA',
      sector: 'IT Services',
      description:
        'Redesign of the internal website. Development of new features in a PWA for tracking attendance and managing shifts.',
      techStack: ['Typescript', 'React', 'Redux', 'GraphQL', 'Figma'],
    },
    {
      id: '7',
      company: 'Economia',
      project: 'News Portal Redesign, New Application Development',
      sector: 'Media',
      description: 'Redesign of Aktualne.cz. Vareni.cz Next.js application development.',
      techStack: ['React', 'Redux', 'Next.js', 'GraphQL'],
      links: ['https://aktualne.cz', 'https://vareni.cz'],
    },
  ],
  patrik: [
    {
      id: '1',
      company: 'Qubix Studio',
      project: 'Virtual Earth Asset Management',
      sector: 'Crypto',
      description:
        'Technical leadership, architecture design and full-stack development of the Districts.xyz Web3 application.',
      techStack: [
        'React',
        'Typescript',
        'Next.js',
        'Material UI',
        'Mapbox',
        'Storybook',
        'Node.js',
        'PostgreSQL',
        'BullMQ',
        'Redis',
        'GraphQL',
        'SSE',
        'Nx',
        'Playwright',
        'Docker',
        'Google Cloud',
        'Azure DevOps',
        'Wagmi',
      ],
      links: ['https://districts.xyz'],
    },
    {
      id: '2',
      company: 'Productboard',
      project: 'Product development management platform',
      sector: 'SaaS',
      description:
        'Frontend development of new features and refactoring of old ones in the main Productboard application. Contribution to the internal design system. Writing E2E tests. Migration of existing code from REST to GraphQL, technical leadership of the largest information architecture overhaul to date, driving improvements in the hiring process.',
      techStack: ['React', 'Typescript', 'styled-components', 'Flux', 'GraphQL', 'Nx', 'Storybook', 'Cypress', 'Kotlin'],
      links: ['https://productboard.com'],
    },
    {
      id: '3',
      company: 'Deutsche Börse',
      project: 'Financial Message Exchange',
      sector: 'Finance',
      description:
        'Rewrite of a legacy application from Java servlets to React using Typescript, NX for monorepo management, Jest and Cypress for testing, Storybook for component presentation, GitHub Actions for CI. Collaboration with backend developers based in Luxembourg on designing the contract for the API using OpenAPI, mocking the API using a custom generator from OpenAPI to Mirage.js.',
      techStack: ['React', 'Typescript', 'Material UI', 'Nx', 'Storybook', 'GitHub Actions', 'OpenAPI/Swagger', 'Mirage.js'],
    },
    {
      id: '4',
      company: 'Economia',
      project: 'Centrum.cz, Vareni.cz, News Kiosk, Customer Portal, and more',
      sector: 'Media',
      description:
        'Development and operations management of new frontend and backend applications along with maintenance and rewrites of old projects. Experience with big data collection and aggregation. Deployment and management of products in the cloud.',
      techStack: [
        'PHP',
        'Laravel',
        'Nette',
        'Node.js',
        'Elasticsearch',
        'Redis',
        'SQL',
        'React',
        'Server-side rendering',
        'Redux',
        'styled-components',
        'Next.js',
        'Typescript',
        'TypeORM',
        'GraphQL',
        'AWS',
        'CI/CD',
        'Docker',
      ],
      links: ['https://centrum.cz', 'https://vareni.cz', 'https://predplatne.hn.cz'],
    },
    {
      id: '5',
      company: 'NESS Slovensko',
      project: 'Student competition',
      description:
        'Development of a complete platform for the competition "Kockaté hlavy" - a project to support potential young developers and promote programming and IT in general among middle school students.',
      techStack: ['Apache', 'MySQL', 'PHP', 'HTML5', 'CSS3', 'jQuery'],
      sector: 'IT Services',
    },
    {
      id: '6',
      company: 'Zeerat',
      project: 'Web Analytics Platform Development',
      description: 'Development of the client-facing application and backend for the web analytics platform Zeerat.',
      techStack: ['Bootstrap', 'Material Design', 'jQuery', 'PHP', 'Laravel', 'PostgreSQL'],
      sector: 'SaaS',
    },
    {
      id: '7',
      company: 'ARTIN',
      project: 'PoC implementation',
      description: 'Analysis and implementation of a PoC validating a new tech stack for future projects.',
      techStack: ['PHP', 'Nette', 'AngularJS', 'Scala', 'Play Framework'],
      sector: 'IT Services',
    },
  ],
};
