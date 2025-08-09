import type { NextApiRequest, NextApiResponse } from 'next';

function parseOwnerRepoFromUrl(url?: string): { owner: string; repo: string } | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (!u.hostname.includes('github.com')) return null;
    const parts = u.pathname.replace(/^\/+/, '').split('/');
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1] };
  } catch {
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url, owner, repo } = req.query as { url?: string; owner?: string; repo?: string };

  let or = parseOwnerRepoFromUrl(url);
  if (!or && owner && repo) {
    or = { owner, repo };
  }
  if (!or) {
    res.status(400).json({ error: 'Provide ?url=https://github.com/<owner>/<repo> or ?owner=<owner>&repo=<repo>' });
    return;
  }

  const headers: Record<string, string> = { 'User-Agent': 'portfolio-app' };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const r = await fetch(`https://api.github.com/repos/${or.owner}/${or.repo}`, { headers });
    if (!r.ok) {
      res.status(r.status).json({ error: `GitHub API error: ${r.status}` });
      return;
    }
    const data = await r.json();

    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json({
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      watchers: data.subscribers_count ?? data.watchers_count ?? 0,
      openIssues: data.open_issues_count ?? 0,
      language: data.language ?? undefined,
      fullName: data.full_name,
      htmlUrl: data.html_url,
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Unexpected error' });
  }
}
