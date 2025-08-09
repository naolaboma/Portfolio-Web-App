import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '../data/projects';
import RepoStats from 'components/RepoStats';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const thumb = project.images?.[0] ?? '/avatar.jpg';
  return (
    <div className="group rounded-xl border border-white/5 bg-slate-900/60 hover:bg-slate-900/80 transition overflow-hidden shadow-sm hover:shadow-lg hover:shadow-teal-900/20">
      <Link href={`/projects/${project.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-teal-500">
        <div className="relative w-full h-44">
          <Image
            src={thumb}
            alt={`${project.title} cover`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-300/90">{project.shortDescription}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((tech, index) => (
              <span key={index} className="inline-block rounded bg-slate-800 px-2 py-0.5 text-xs text-teal-200 ring-1 ring-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4 flex items-center gap-3">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-teal-300 hover:text-teal-200 underline"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-teal-300 hover:text-teal-200 underline"
          >
            Live
          </a>
        )}
        {project.repoUrl && <RepoStats url={project.repoUrl} className="ml-auto" />}
      </div>
    </div>
  );
};

export default ProjectCard;