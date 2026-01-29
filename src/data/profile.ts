export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  projects: Project[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  devops: Skill[];
  tools: Skill[];
  testing: Skill[];
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  availability: string;
  email: string;
  linkedin: string;
  photo: string;
  summary: string;
  stats: Stat[];
  skills: SkillCategory;
  domains: string[];
  experience: Experience[];
  education: Education;
  leadership: string[];
}

export const profile: Profile = {
  name: 'Rizan Mohomed',
  title: 'Associate Technical Lead',
  subtitle: 'Senior Software Engineer',
  location: 'Sri Lanka',
  availability: 'Open to Remote',
  email: 'musthafarizan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rizan-mohomed',
  photo: '/images/pro-pic.jpg',

  summary: `Senior Software Engineer with 7+ years of experience designing and delivering scalable web and cross-platform mobile applications. Specialized in React, React Native, Flutter, TypeScript, and modern backend technologies. Proven track record of leading teams, shipping AI-powered features, and working closely with clients in Telecom, Healthcare, Travel, and FinTech domains. Strong problem solver with hands-on leadership and full-stack expertise, focused on clean architecture and long-term maintainability.`,

  stats: [
    { value: 7, suffix: '+', label: 'Years Experience' },
    { value: 4, suffix: '', label: 'Industry Domains' },
    { value: 10, suffix: '+', label: 'Projects Delivered' },
    { value: 15, suffix: '+', label: 'Technologies' },
  ],

  skills: {
    frontend: [
      { name: 'React', icon: 'react' },
      { name: 'React Native', icon: 'react' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Vue.js', icon: 'vue' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'MUI', icon: 'mui' },
      { name: 'Ant Design', icon: 'antdesign' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
    backend: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
    ],
    database: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Supabase', icon: 'supabase' },
    ],
    devops: [
      { name: 'AWS', icon: 'aws' },
      { name: 'GitLab CI/CD', icon: 'gitlab' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Bitrise', icon: 'bitrise' },
    ],
    tools: [
      { name: 'Git', icon: 'git' },
      { name: 'Jira', icon: 'jira' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Postman', icon: 'postman' },
    ],
    testing: [
      { name: 'Jest', icon: 'jest' },
      { name: 'React Testing Library', icon: 'testing-library' },
      { name: 'Enzyme', icon: 'enzyme' },
    ],
  },

  domains: ['Telecom', 'Healthcare', 'E-Wallets', 'Travel Tech', 'AI-Driven Platforms'],

  experience: [
    {
      company: 'Allion Technologies',
      role: 'Associate Technical Lead',
      period: 'Current',
      projects: [
        {
          name: 'Maestro Concierge',
          description: 'Travel & AI Platform',
          tech: ['React Native', 'React', 'NestJS', 'MongoDB', 'OpenAI'],
          highlights: [
            'Led rapid feature delivery based on weekly client feedback and evolving requirements',
            'Worked across mobile, web, and backend layers to unblock teams and accelerate delivery',
            'Performed peer code reviews and ensured adherence to best practices',
            'Contributed to AI-powered trip planning and conversational features',
          ],
        },
        {
          name: 'Proxi Networking',
          description: 'Service Matchmaking Platform',
          tech: ['React Native', 'Supabase', 'OpenAI'],
          highlights: [
            'Delivered features in short daily feedback loops with stakeholders',
            'Implemented AI-based real-time summaries and transcription features',
            'Mentored developers and maintained code quality standards',
          ],
        },
      ],
    },
    {
      company: 'Aeturnum Lanka',
      role: 'Senior Software Engineer',
      period: 'Previous',
      projects: [
        {
          name: 'MonitoredRX',
          description: 'Healthcare Platform',
          tech: ['Flutter', 'Java', 'Swift'],
          highlights: [
            'Built cross-platform mobile apps connecting patients and doctors',
            'Integrated Bluetooth medical devices for real-time data capture',
            'Participated in architecture decisions and code reviews',
            'Wrote unit tests for business-critical logic',
          ],
        },
        {
          name: 'aPriori CIS Application',
          description: 'Enterprise Platform',
          tech: ['React', 'TypeScript', 'MUI', 'React Testing Library'],
          highlights: [
            'Developed a greenfield enterprise platform following strict client-defined best practices',
            'Built reusable UI components using Zeplin as the source of truth',
            'Delivered well-tested, maintainable frontend modules',
          ],
        },
        {
          name: 'NDoc 2.0',
          description: 'EMR System Revamp',
          tech: ['React', 'TypeScript', 'Jest', 'Ant Design'],
          highlights: [
            'Contributed to requirement analysis, documentation, and feasibility studies',
            'Implemented modern UI using Figma designs',
            'Improved reliability with unit-tested reusable components',
          ],
        },
      ],
    },
    {
      company: 'Mitra Innovations',
      role: 'Senior Software Engineer / Software Engineer',
      period: 'Previous',
      projects: [
        {
          name: 'Mobile Self-Care App',
          description: 'Telecom Platform',
          tech: ['React Native', 'Firebase', 'Node.js', 'Vue.js', 'AWS', 'Bitrise'],
          highlights: [
            'Developed a large-scale self-care app for a major telecom provider',
            'Implemented authentication, payments, VAS management, and third-party integrations',
            'Set up CI/CD pipelines and automated store deployments for iOS and Android',
            'Integrated analytics, push notifications, and CMS-driven dynamic content',
          ],
        },
        {
          name: 'Mobile Payment Wallet',
          description: 'FinTech Solution',
          tech: ['React Native', 'Verdaccio', 'Yarn Workspaces'],
          highlights: [
            'Built a reusable e-wallet module distributed via a private NPM registry',
            'Designed CI/CD pipelines and integrated the module into production apps',
          ],
        },
      ],
    },
  ],

  education: {
    degree: 'Diploma in Web Engineering',
    institution: 'E-Soft Metro Campus',
    location: 'Sri Lanka',
    year: '2018',
  },

  leadership: [
    'Associate Technical Lead managing delivery and technical quality across multiple projects',
    'Strong experience collaborating directly with clients and product stakeholders',
    'Consistent focus on scalability, maintainability, and developer experience',
  ],
};
