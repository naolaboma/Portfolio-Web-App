import React from 'react';
import { about } from 'data/about';

const shields: Record<
  'LinkedIn' | 'LeetCode' | 'Codeforces' | 'GitHub' | 'Email',
  (label?: string) => string
> = {
  LinkedIn: (label = 'LinkedIn') =>
    `https://img.shields.io/badge/${encodeURIComponent(label)}-blue?style=for-the-badge&logo=linkedin&logoColor=white`,
  LeetCode: (label = 'LeetCode') =>
    `https://img.shields.io/badge/${encodeURIComponent(label)}-FFA116?style=for-the-badge&logo=leetcode&logoColor=black`,
  Codeforces: (label = 'Codeforces') =>
    `https://img.shields.io/badge/${encodeURIComponent(label)}-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white`,
  GitHub: (label = 'GitHub') =>
    `https://img.shields.io/badge/${encodeURIComponent(label)}-100000?style=for-the-badge&logo=github&logoColor=white`,
  Email: (label = 'Email') =>
    `https://img.shields.io/badge/${encodeURIComponent(label)}-D14836?style=for-the-badge&logo=gmail&logoColor=white`,
};

const getShieldUrl = (name: string) => {
  const fn = (shields as Record<string, (label?: string) => string>)[name];
  if (fn) return fn();
  // default generic badge
  return `https://img.shields.io/badge/${encodeURIComponent(name)}-0A0A0A?style=for-the-badge`;
};

const SocialBadges: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {about.socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={s.name}
        >
          <img
            src={getShieldUrl(s.name)}
            alt={`${s.name} badge`}
            className="h-8 transition-transform hover:scale-105 active:scale-95"
            height={32}
            loading="lazy"
            decoding="async"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialBadges;