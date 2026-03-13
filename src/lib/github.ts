import type { PortfolioData } from '@/data/portfolioItems';

const OWNER = import.meta.env.VITE_GITHUB_OWNER || 'yoyogordy';
const REPO = import.meta.env.VITE_GITHUB_REPO || 'portfolio';
const PAT = import.meta.env.VITE_GITHUB_PAT || '';
const FILE_PATH = 'src/data/portfolioData.json';
const API_BASE = 'https://api.github.com';

const HEADERS = {
  Authorization: `Bearer ${PAT}`,
  Accept: 'application/vnd.github.v3+json',
  'Content-Type': 'application/json',
};

export async function fetchPortfolioData(): Promise<{ data: PortfolioData; sha: string }> {
  const res = await fetch(
    `${API_BASE}/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
    { headers: HEADERS }
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const json = await res.json();
  const bytes = Uint8Array.from(atob(json.content), (c) => c.charCodeAt(0));
  const content = new TextDecoder().decode(bytes);
  const data = JSON.parse(content) as PortfolioData;
  return { data, sha: json.sha };
}

export async function commitPortfolioData(
  data: PortfolioData,
  sha: string,
  message = 'Update portfolio items'
): Promise<{ commitSha: string }> {
  const content = btoa(
    unescape(encodeURIComponent(JSON.stringify(data, null, 2) + '\n'))
  );

  const res = await fetch(
    `${API_BASE}/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
    {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ message, content, sha }),
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `GitHub API error: ${res.status}`);
  }

  const json = await res.json();
  return { commitSha: json.commit.sha };
}

// Deploy tracking via GitHub Actions API
export type WorkflowRunStatus =
  | 'waiting'
  | 'queued'
  | 'in_progress'
  | 'completed';
export type WorkflowRunConclusion = 'success' | 'failure' | 'cancelled' | null;

export interface WorkflowRunInfo {
  id: number;
  status: WorkflowRunStatus;
  conclusion: WorkflowRunConclusion;
  html_url: string;
}

export async function getLatestWorkflowRun(
  afterCommitSha: string
): Promise<WorkflowRunInfo | null> {
  const res = await fetch(
    `${API_BASE}/repos/${OWNER}/${REPO}/actions/runs?per_page=5`,
    { headers: HEADERS }
  );
  if (!res.ok) return null;

  const json = await res.json();
  const run = json.workflow_runs?.find(
    (r: { head_sha: string }) => r.head_sha === afterCommitSha
  );

  if (!run) return null;
  return {
    id: run.id,
    status: run.status,
    conclusion: run.conclusion,
    html_url: run.html_url,
  };
}
