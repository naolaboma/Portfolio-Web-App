import React from 'react';
import { Project } from '../data/projects';
import Image from 'next/image';
import RepoStats from 'components/RepoStats';
import Link from 'next/link';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/#projects" className="text-teal-300 hover:text-teal-200 underline text-sm">← Back to Projects</Link>

      <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300">
        {project.title}
      </h1>

      {project.shortDescription && (
        <p className="mt-2 text-gray-300/90">{project.shortDescription}</p>
      )}

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {project.images.map((image, index) => (
            <div key={index} className="relative h-56 w-[420px] shrink-0 overflow-hidden rounded-lg border border-white/5">
              <Image src={image} alt={`${project.title} screenshot ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="mt-6 text-gray-200 leading-relaxed">{project.description}</p>

      {/* Tech */}
      <h2 className="mt-8 text-xl font-semibold text-teal-300">Technologies</h2>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span key={index} className="inline-block rounded bg-slate-800 px-3 py-1 text-xs text-teal-200 ring-1 ring-slate-700">
            {tech}
          </span>
        ))}
      </div>

      {/* Role & Highlights */}
      {project.role && (
        <>
          <h2 className="mt-8 text-xl font-semibold text-teal-300">Role & Responsibilities</h2>
          <p className="mt-1 text-gray-200">{project.role}</p>
        </>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <>
          <h2 className="mt-6 text-xl font-semibold text-teal-300">Highlights</h2>
          <ul className="mt-2 space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="relative rounded-md border border-slate-800/60 bg-slate-900/40 px-3 py-2 leading-snug">
                <span className="absolute left-0 top-0 h-full w-1 rounded-l-md bg-gradient-to-b from-teal-500/70 to-cyan-500/70" />
                <span className="text-gray-200">{highlight}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Metrics */}
      {project.keyMetrics && project.keyMetrics.length > 0 && (
        <>
          <h2 className="mt-6 text-xl font-semibold text-teal-300">Key Metrics</h2>
          <ul className="mt-2 list-disc list-inside text-gray-200">
            {project.keyMetrics.map((metric, index) => (
              <li key={index}>{metric}</li>
            ))}
          </ul>
        </>
      )}

      {/* Links + Repo Stats */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-teal-600/90 px-3 py-2 text-sm font-medium text-white shadow hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition"
          >
            View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-teal-200 ring-1 ring-slate-700 hover:bg-slate-700 transition"
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && <RepoStats url={project.repoUrl} className="ml-auto" />}
      </div>
    </div>
  );
};

export default ProjectDetail;