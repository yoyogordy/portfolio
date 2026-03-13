import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { login } from '@/lib/adminAuth';

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(passcode.trim())) {
      onLogin();
    } else {
      setError('קוד גישה שגוי');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">ניהול תיק עבודות</h1>
          <p className="text-muted-foreground text-sm">הכנס קוד גישה כדי להמשיך</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="קוד גישה"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            dir="ltr"
            className="text-center text-lg tracking-widest"
          />
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button type="submit" className="w-full" disabled={!passcode.trim()}>
            כניסה
          </Button>
        </form>
      </div>
    </div>
  );
}
