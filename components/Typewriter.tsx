"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 35,
  startDelay = 300,
  className = "",
  onDone,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  onDone?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`inline-block w-[2px] md:w-[3px] -mb-1 h-[0.85em] ml-1 bg-current ${
          done ? "animate-pulse" : "animate-[blink_0.9s_steps(1)_infinite]"
        }`}
      />
    </span>
  );
}
