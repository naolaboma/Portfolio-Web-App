import React from 'react';
import { about } from 'data/about';

type CTA = { label: string; link: string };

type HeroProps = {
  name?: string;
  role?: string;
  tagline?: string;
  ctas?: CTA[];
};

const Hero: React.FC<HeroProps> = ({
  name = about.name,
  role = about.role.replace('·', '|'),
  tagline = about.tagline,
  ctas = [
    { label: 'View Projects', link: '#projects' },
    { label: 'Download CV', link: about.cvPath },
  ],
}) => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[70vh] text-center bg-gradient-to-b from-slate-900 to-slate-800">
      <h1 className="text-4xl font-bold text-white">{name}</h1>
      <h2 className="mt-2 text-2xl text-teal-400">{role}</h2>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl">{tagline}</p>
      <div className="mt-6">
        {ctas.map((cta, index) => (
          <a
            key={index}
            href={cta.link}
            className="inline-block px-6 py-3 m-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition"
            {...(cta.link.startsWith('http') || cta.link.endsWith('.pdf')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {cta.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;