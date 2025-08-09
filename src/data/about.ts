export type Social = { name: string; href: string };

export type AboutData = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  highlights: string[];
  socials: Social[];
  avatarPath: string; // public path
  cvPath: string; // public path to CV
};

export const about: AboutData = {
  name: 'Naol Aboma',
  role: 'Backend Engineer · ECE Student',
  tagline:
    'Backend engineer specializing in Go and Laravel—designing resilient, observable APIs and services with clean architecture and rigorous testing.',
  bio:
    'I craft high‑performance backend systems in Go and Laravel with a strong emphasis on domain modeling, clean architecture, and reliability. My work spans API design, data modeling, performance profiling, and production hardening—including containerization, CI/CD, and observability.',
  highlights: [
    'Go (Gin) and Laravel backends structured with clean architecture and pragmatic domain modeling',
    'Data modeling and query optimization across MongoDB and SQL stores',
    'API design: REST (and gRPC when appropriate), versioning, pagination, and robust validation',
    'Concurrency and performance: profiling, efficient I/O, and effective caching strategies',
    'Reliability in practice: Dockerized services, CI/CD pipelines, automated testing, and static analysis',
    'Observability by default: structured logs, metrics, and tracing for fast feedback and resilience',
    'A2SV learner—advanced DSA and systems design; active on LeetCode and Codeforces',
    'Currently building a blog platform with Go, MongoDB, and AI‑assisted drafting',
  ],
  socials: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/naolaboma/' },
    { name: 'LeetCode', href: 'https://leetcode.com/u/Naolae/' },
    { name: 'Codeforces', href: 'https://codeforces.com/profile/Naole' },
    { name: 'GitHub', href: 'https://github.com/naolaboma' },
    { name: 'Email', href: 'mailto:naolaboma@gmail.com' },
  ],
  avatarPath: '/avatar.jpg',
  cvPath: '/CVF-Naol_A.pdf',
};