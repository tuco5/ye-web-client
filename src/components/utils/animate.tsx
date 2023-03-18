'use client';
import { useState, useEffect } from 'react';

/* ANIMATE */
interface AnimateProps {
  isActive: boolean;
  children: React.ReactNode;
  initStyles: string;
  finalStyles: string;
}

export function Animate({ isActive, children, initStyles, finalStyles }: AnimateProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(isActive);
    }, 10);
  }, [isActive]);

  return <div className={animate ? finalStyles : initStyles}>{children}</div>;
}
