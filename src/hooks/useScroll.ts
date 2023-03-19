import { useState, useEffect } from 'react';

interface ScrollData {
  scrollY: number;
  scrollingUp: boolean;
  scrollToTop: (behavior: ScrollBehavior) => void;
}

export function useScroll(): ScrollData {
  const [scrollY, setScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = (_: Event) => {
      setScrollY((scrollY) => {
        setScrollingUp(scrollY > window.scrollY);
        return window.scrollY;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (behavior: ScrollBehavior) => window.scrollTo({ top: 0, behavior: behavior });

  return { scrollY, scrollingUp, scrollToTop };
}
