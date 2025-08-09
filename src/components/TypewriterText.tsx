import React, { useEffect, useRef, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speedMs?: number; // time per character
  startDelayMs?: number;
  className?: string;
  ariaLabel?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speedMs = 18,
  startDelayMs = 150,
  className,
  ariaLabel,
}) => {
  const [out, setOut] = useState('');
  const indexRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // reset when text changes
    setOut('');
    indexRef.current = 0;

    const start = window.setTimeout(() => {
      const tick = () => {
        const i = indexRef.current;
        if (i <= text.length) {
          setOut(text.slice(0, i));
          indexRef.current = i + 1;
          timerRef.current = window.setTimeout(tick, speedMs);
        }
      };
      tick();
    }, startDelayMs);

    return () => {
      window.clearTimeout(start);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [text, speedMs, startDelayMs]);

  return (
    <span className={className} aria-label={ariaLabel} aria-live="polite">
      {out}
      <span className="align-baseline border-r-2 border-teal-400 ml-0.5 animate-blink" />
    </span>
  );
};

export default TypewriterText;