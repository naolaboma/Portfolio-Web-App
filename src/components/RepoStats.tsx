import React from 'react';
import clsx from 'clsx';
import { FiStar, FiGitBranch, FiEye } from 'react-icons/fi';
import { useRepoStats } from 'hooks/useRepoStats';

type Props = { url?: string; owner?: string; repo?: string; className?: string };

const RepoStats: React.FC<Props> = ({ url, owner, repo, className }) => {
  const { data, loading, error } = useRepoStats({ url, owner, repo });

  if (loading) {
    return (
      <div className={clsx('flex items-center gap-3 text-xs text-gray-400', className)} aria-busy="true" aria-live="polite">
        <div className="h-4 w-16 rounded bg-slate-800 animate-pulse" />
        <div className="h-4 w-16 rounded bg-slate-800 animate-pulse" />
        <div className="h-4 w-16 rounded bg-slate-800 animate-pulse" />
      </div>
    );
  }

  if (error || !data) return null;

  const repoLink = data.htmlUrl || url;

  return (
    <div className={clsx('flex items-center gap-4 text-xs text-gray-400', className)}>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:text-teal-300"
        title={`${data.fullName || 'Repository'} stars`}
      >
        <FiStar className="h-4 w-4" />
        <span>{data.stars}</span>
      </a>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:text-teal-300"
        title={`${data.fullName || 'Repository'} forks`}
      >
        <FiGitBranch className="h-4 w-4" />
        <span>{data.forks}</span>
      </a>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:text-teal-300"
        title={`${data.fullName || 'Repository'} watchers`}
      >
        <FiEye className="h-4 w-4" />
        <span>{data.watchers}</span>
      </a>
    </div>
  );
};

export default RepoStats;
