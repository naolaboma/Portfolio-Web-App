import React from 'react';

type Badge = { key: string; label: string; color: string; logo?: string; logoColor?: string; href?: string };

const shield = ({ label, color, logo, logoColor = 'white' }: Badge) =>
  `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(color)}?style=for-the-badge${
    logo ? `&logo=${encodeURIComponent(logo)}&logoColor=${encodeURIComponent(logoColor)}` : ''
  }`;

const sections: Array<{ title: string; items: Badge[] }> = [
  {
    title: 'Programming Languages',
    items: [
      { key: 'go', label: 'Go', color: '00ADD8', logo: 'go', href: 'https://go.dev/doc/' },
      { key: 'python', label: 'Python', color: '3776AB', logo: 'python', href: 'https://docs.python.org/3/' },
      { key: 'java', label: 'Java', color: 'ED8B00', logo: 'java', href: 'https://docs.oracle.com/en/java/' },
      { key: 'javascript', label: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: '000000', href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { key: 'php', label: 'PHP', color: '777BB4', logo: 'php', href: 'https://www.php.net/docs.php' },
      { key: 'sql', label: 'SQL', color: '4479A1', logo: 'sqlite', href: 'https://www.postgresql.org/docs/' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { key: 'gin', label: 'Gin (Go)', color: '00ADD8', logo: 'go', href: 'https://gin-gonic.com/docs/' },
      { key: 'laravel', label: 'Laravel', color: 'E74430', logo: 'laravel', href: 'https://laravel.com/docs' },
      { key: 'express', label: 'Express.js', color: '000000', logo: 'express', href: 'https://expressjs.com/' },
      { key: 'nestjs', label: 'NestJS', color: 'E0234E', logo: 'nestjs', href: 'https://docs.nestjs.com/' },
      { key: 'react', label: 'React', color: '20232A', logo: 'react', logoColor: '61DAFB', href: 'https://react.dev/' },
      { key: 'next', label: 'Next.js', color: '000000', logo: 'next.js', href: 'https://nextjs.org/docs' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { key: 'mongo', label: 'MongoDB', color: '4EA94B', logo: 'mongodb', href: 'https://www.mongodb.com/docs/' },
      { key: 'mysql', label: 'MySQL', color: '005C84', logo: 'mysql', href: 'https://dev.mysql.com/doc/' },
      { key: 'postgres', label: 'PostgreSQL', color: '336791', logo: 'postgresql', href: 'https://www.postgresql.org/docs/' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { key: 'git', label: 'Git', color: 'F05032', logo: 'git', href: 'https://git-scm.com/doc' },
      { key: 'github', label: 'GitHub', color: '181717', logo: 'github', href: 'https://docs.github.com/' },
      { key: 'docker', label: 'Docker', color: '2496ED', logo: 'docker', href: 'https://docs.docker.com/' },
      { key: 'k8s', label: 'Kubernetes', color: '326CE5', logo: 'kubernetes', href: 'https://kubernetes.io/docs/home/' },
      { key: 'vscode', label: 'VS Code', color: '007ACC', logo: 'visual-studio-code', href: 'https://code.visualstudio.com/docs' },
      { key: 'matlab', label: 'MATLAB', color: 'orange', logo: 'mathworks', href: 'https://www.mathworks.com/help/' },
    ],
  },
];

const TechBadges: React.FC = () => {
  return (
    <div className="space-y-4">
      {sections.map((sec) => (
        <div key={sec.title}>
          <h4 className="text-teal-300 font-semibold mb-2">{sec.title}</h4>
          <div className="flex flex-wrap gap-2">
            {sec.items.map((b) => {
              const img = (
                <img
                  key={b.key}
                  src={shield(b)}
                  alt={`${b.label} badge`}
                  className="h-8 transition-transform hover:scale-105 active:scale-95"
                  height={32}
                  loading="lazy"
                  decoding="async"
                />
              );
              return b.href ? (
                <a
                  key={b.key}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${b.label} documentation`}
                  className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
                  title={`${b.label} docs`}
                >
                  {img}
                </a>
              ) : (
                img
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechBadges;