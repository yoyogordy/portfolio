const STORAGE_KEY = 'portfolio-admin-auth';

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
