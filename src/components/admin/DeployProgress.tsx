import { useState, useEffect, useCallback } from 'react';
import { getLatestWorkflowRun, type WorkflowRunInfo } from '@/lib/github';

interface DeployProgressProps {
  commitSha: string;
  onDone: () => void;
}

const STEPS = [
  { key: 'committed', label: 'שינויים נשמרו' },
  { key: 'queued', label: 'בתור לבנייה' },
  { key: 'building', label: 'בונה את האתר' },
  { key: 'done', label: 'באוויר!' },
] as const;

function getActiveStep(run: WorkflowRunInfo | null): number {
  if (!run) return 0;
  if (run.status === 'queued') return 1;
  if (run.status === 'in_progress') return 2;
  if (run.status === 'completed' && run.conclusion === 'success') return 3;
  if (run.status === 'completed') return -1; // failure
  return 1;
}

export default function DeployProgress({ commitSha, onDone }: DeployProgressProps) {
  const [run, setRun] = useState<WorkflowRunInfo | null>(null);
  const [error, setError] = useState(false);

  const poll = useCallback(async () => {
    const info = await getLatestWorkflowRun(commitSha);
    setRun(info);
    if (info?.status === 'completed') {
      if (info.conclusion !== 'success') setError(true);
    }
  }, [commitSha]);

  useEffect(() => {
    poll();
    const interval = setInterval(poll, 5000);
    return () => clearInterval(interval);
  }, [poll]);

  const activeStep = getActiveStep(run);
  const isDone = activeStep === 3;

  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(onDone, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isDone, onDone]);

  if (error && run) {
    return (
      <div className="bg-destructive/10 border border-destructive rounded-lg p-4 space-y-2">
        <p className="text-destructive font-medium">הבנייה נכשלה</p>
        <a
          href={run.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-destructive"
        >
          צפה בלוג הבנייה
        </a>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-lg p-4 space-y-3">
      <p className="font-medium text-sm">מפרסם שינויים...</p>
      <div className="space-y-2">
        {STEPS.map((step, i) => {
          const isActive = i === activeStep;
          const isCompleted = i < activeStep;
          return (
            <div key={step.key} className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-primary text-primary-foreground animate-pulse'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {isCompleted ? '✓' : i + 1}
              </div>
              <span className={`text-sm ${isCompleted ? 'text-green-600' : isActive ? 'font-medium' : 'text-muted-foreground'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
