import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const getBreakpoint = width => {
  let breakpoint = 'sm';
  for (const [key, value] of Object.entries(breakpoints)) {
    if (width >= value) {
      breakpoint = key;
    } else {
      break;
    }
  }
  return breakpoint;
};

/**
 * Hook that returns the current breakpoint.
 *
 * The hook will return one of the following: 'sm', 'md', 'lg', 'xl', or '2xl'.
 * The breakpoints are defined as:
 * - sm: 640px
 * - md: 768px
 * - lg: 1024px
 * - xl: 1280px
 * - 2xl: 1536px
 *
 * The hook will update the returned value when the window is resized.
 *
 * @returns {string} The current breakpoint.
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('sm');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (!hasMounted) {
    return '';
  }

  return breakpoint;
};
