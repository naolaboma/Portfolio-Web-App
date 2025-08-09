import { useEffect, useMemo, useState } from 'react';

export type RepoStats = {
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  language?: string;
  fullName?: string;
  htmlUrl?: string;
};

export function useRepoStats({ url, owner, repo }: { url?: string; owner?: string; repo?: string }) {
  const [data, setData] = useState<RepoStats | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const qs = useMemo(() => {
    if (url) return `?url=${encodeURIComponent(url)}`;
    if (owner && repo) return `?owner=${encodeURIComponent(owner)}&repo=${encodeURIComponent(repo)}`;
    return '';
  }, [url, owner, repo]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!qs) return;
      setLoading(true);
      setError(null);
      try {
        const r = await fetch(`/api/repo${qs}`);
        const json = await r.json();
        if (!r.ok) throw new Error(json?.error || `Request failed: ${r.status}`);
        if (!cancelled) setData(json as RepoStats);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [qs]);

  return { data, loading, error };
}
