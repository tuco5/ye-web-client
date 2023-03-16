import { useState, useEffect } from 'react';

interface ScrollData {
  scrollY: number;
  scrollToTop: boolean;
}

export function useScroll(): ScrollData {
  const [scrollY, setScrollY] = useState(0);
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = (_: Event) => {
      setScrollY((scrollY) => {
        setScrollToTop(scrollY > window.scrollY);
        return window.scrollY;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY, scrollToTop };
}
