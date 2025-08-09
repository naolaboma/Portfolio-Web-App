import React from 'react';
import { projects } from 'data/projects';
import ProjectCard from 'components/ProjectCard';

const byDateDesc = (a?: string, b?: string) => {
  const da = a ? Date.parse(a) : 0;
  const db = b ? Date.parse(b) : 0;
  return db - da;
};

const Projects: React.FC = () => {
  const featured = projects.filter((p) => p.featured).sort((a, b) => byDateDesc(a.date, b.date));
  const others = projects.filter((p) => !p.featured).sort((a, b) => byDateDesc(a.date, b.date));

  return (
    <div className="space-y-8">
      {featured.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-teal-300/90">Featured</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      )}
      {others.length > 0 && (
        <div>
          {featured.length > 0 && (
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-teal-300/60">All Projects</h3>
          )}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;