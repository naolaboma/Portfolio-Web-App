import React from 'react';
import Image from 'next/image';
import { about } from 'data/about';
import SocialBadges from 'components/SocialBadges';
import TypewriterText from 'components/TypewriterText';

const About: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-[160px_1fr] gap-6 items-start">
      {/* Avatar */}
      <div className="w-40 h-40 relative rounded-lg overflow-hidden ring-2 ring-transparent hover:ring-teal-500/40 transition-transform duration-300 will-change-transform">
        <Image
          src={about.avatarPath}
          alt={`Portrait of ${about.name}`}
          fill
          sizes="160px"
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
          <span className="wave-hand">Hi there 👋</span>, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 drop-shadow-[0_1px_10px_rgba(45,212,191,0.25)]">
            {about.name}
          </span>
        </h3>

        {/* Role pill */}
        <p className="mt-1 inline-block rounded-full bg-slate-800/70 px-3 py-1 text-sm text-teal-200 ring-1 ring-slate-700">
          {about.role}
        </p>

        {/* Tagline with typewriter */}
        <div className="mt-4">
          <TypewriterText
            text={about.tagline}
            className="text-base sm:text-lg text-gray-200/90"
            ariaLabel="Professional tagline"
            speedMs={18}
            startDelayMs={120}
          />
        </div>

        {/* Bio */}
        <p className="mt-4 text-gray-200 leading-relaxed">
          {about.bio}
        </p>

        {/* Highlights as interactive list */}
        <ul className="mt-5 space-y-2">
          {about.highlights.map((h, i) => (
            <li
              key={h}
              className="reveal group relative rounded-md border border-slate-800/60 bg-slate-900/40 px-3 py-2 leading-snug transition-colors hover:border-teal-600/50 hover:bg-slate-800/50"
              style={{ animationDelay: `${0.05 * i + 0.05}s` }}
            >
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-md bg-gradient-to-b from-teal-500/70 to-cyan-500/70 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="text-gray-200">{h}</span>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="mt-6">
          <SocialBadges />
        </div>

        {/* CV link */}
        <div className="mt-3">
          <a
            href={about.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-teal-600/90 px-3 py-2 text-sm font-medium text-white shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;