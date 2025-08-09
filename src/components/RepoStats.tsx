import React from 'react';
import { FiStar, FiGitBranch, FiEye } from 'react-icons/fi';
import { useRepoStats } from 'hooks/useRepoStats';

type Props = { url?: string; owner?: string; repo?: string; className?: string };

const RepoStats: React.FC<Props> = ({ url, owner, repo, className }) => {
  const { data, loading, error } = useRepoStats({ url, owner, repo });

  if (!url && !(owner && repo)) return null;
  if (error) return null;

  return (
    <div className={`flex items-center gap-4 text-xs text-teal-200 ${className || ''}`} aria-label="GitHub repository stats">
      {loading ? (
        <span className="text-slate-400">Loading...</span>
      ) : (
        <>
          <span className="inline-flex items-center gap-1"><FiStar aria-hidden />{data?.stars ?? 0}</span>
          <span className="inline-flex items-center gap-1"><FiGitBranch aria-hidden />{data?.forks ?? 0}</span>
          <span className="inline-flex items-center gap-1"><FiEye aria-hidden />{data?.watchers ?? 0}</span>
        </>
      )}
    </div>
  );
};

export default RepoStats;
