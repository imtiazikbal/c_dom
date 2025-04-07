import { useState, useEffect } from 'react';


const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
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
/******  aa7574c9-7973-4462-a7eb-6d1bc76a0edd  *******/export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('sm');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newBreakpoint = 'sm';

      for (const [key, value] of Object.entries(breakpoints)) {
        if (width >= value) {
          newBreakpoint = key;
        } else {
          break;
        }
      }

      setBreakpoint(newBreakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};