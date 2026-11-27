import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  label: string;
  className?: string;
}

export default function CopyButton({ text, label, className = 'btn-outline flex items-center gap-2' }: CopyButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <>
      <button type="button" onClick={copy} className={className}>
        {status === 'copied' ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
        {status === 'copied' ? 'Copied' : label}
      </button>
      <span role="status" className={status === 'failed' ? 'self-center text-xs text-muted-foreground' : 'sr-only'}>
        {status === 'copied' && 'Copied to clipboard.'}
        {status === 'failed' && 'Copy failed. Select the text and copy it manually.'}
      </span>
    </>
  );
}
