'use client';

import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Force scroll to top on page load
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
      
      // Remove any hash that might cause auto-scroll
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, []);

  return null;
};

export default ScrollToTop;
