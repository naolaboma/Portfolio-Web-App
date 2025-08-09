export type Skill = {
  id: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

export const skills: Skill[] = [
  {
    id: 'go',
    name: 'Go',
    category: 'Language',
    level: 'Advanced'
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Framework',
    level: 'Intermediate'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    level: 'Intermediate'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Tool',
    level: 'Intermediate'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tool',
    level: 'Advanced'
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Language',
    level: 'Advanced'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Language',
    level: 'Advanced'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    level: 'Intermediate'
  }
];