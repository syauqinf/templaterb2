'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
  useEffect(() => {
    // Detect mobile untuk optimasi performa
    const isMobile = window.innerWidth < 768;
    
    AOS.init({
      duration: isMobile ? 600 : 800, // Lebih cepat di mobile
      easing: 'ease-out-cubic',
      once: true,
      offset: isMobile ? 25 : 50, // Trigger lebih awal di mobile
      delay: 0,
      startEvent: 'DOMContentLoaded',
      throttleDelay: isMobile ? 50 : 99, // Lebih responsif di mobile
      debounceDelay: isMobile ? 25 : 50,
    });
  }, []);

  return null;
};

export default AOSInit;
