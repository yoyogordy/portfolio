const STORAGE_KEY = 'portfolio-admin-auth';
const DEPLOY_KEY = 'portfolio-admin-deploy';

export function isAuthenticated(): boolean {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export function login(passcode: string): boolean {
  const expected = import.meta.env.VITE_ADMIN_PASSCODE;
  if (passcode === expected) {
    localStorage.setItem(STORAGE_KEY, 'true');
    return true;
  }
  return false;
}

export function logout(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// Deploy tracking persistence
export interface PendingDeploy {
  commitSha: string;
  timestamp: number;
}

export function savePendingDeploy(commitSha: string): void {
  localStorage.setItem(DEPLOY_KEY, JSON.stringify({ commitSha, timestamp: Date.now() }));
}

export function getPendingDeploy(): PendingDeploy | null {
  const raw = localStorage.getItem(DEPLOY_KEY);
  if (!raw) return null;
  const deploy = JSON.parse(raw) as PendingDeploy;
  // Expire after 10 minutes
  if (Date.now() - deploy.timestamp > 10 * 60 * 1000) {
    clearPendingDeploy();
    return null;
  }
  return deploy;
}

export function clearPendingDeploy(): void {
  localStorage.removeItem(DEPLOY_KEY);
}
