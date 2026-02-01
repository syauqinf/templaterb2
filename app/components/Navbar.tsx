'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };
    
    handleResize(); // Check initial size
    setHasMounted(true);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent auto-scroll on mount
  useEffect(() => {
    if (hasMounted) {
      // Remove any hash scroll behavior on initial load
      if (window.location.hash === '#hero') {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, [hasMounted]);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* LEFT: LOGO ONLY - Remove Brand Name to Reduce Clutter */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              {/* Gunakan file logo KKM Logo_081910.png yang kamu punya */}
              <Image 
                src="/kkmlogo.png" 
                alt="Kira Kira Michi Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          {hasMounted && isLargeScreen && (
            <div className="flex flex-col ml-2">
              <div className="flex items-end gap-1">
                <span className="text-base md:text-lg font-[900] tracking-tight text-kkm-dark leading-tight uppercase">
                  Kira Kira
                </span>
                <span className="text-base md:text-lg font-[900] tracking-tight text-kkm-yellow leading-tight uppercase">
                  Michi
                </span>
              </div>
            </div>
          )}
        </Link>
        
        {/* CENTER: NAVIGATION LINKS (Model Biasa) */}
          {hasMounted && isLargeScreen && (
            <div className="flex items-center gap-8">
              {[
                { name: 'Beranda', href: '#hero' },
                { name: 'Tentang', href: '#story' },
                { name: 'Produk', href: '#menu' },
                { name: 'Proses', href: '#process' },
                { name: 'Testimoni', href: '#reviews' },
                { name: 'Bantuan', href: '#faq' }, // FAQ section now renamed to Bantuan and updated ID to #faq
              ].map((item) => (
                item.name === 'Beranda' ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      const targetElement = document.getElementById('hero');
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-[13px] font-extrabold text-text-muted hover:text-kkm-red transition-all duration-300 uppercase tracking-widest"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className="text-[13px] font-extrabold text-text-muted hover:text-kkm-red transition-all duration-300 uppercase tracking-widest"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          )}

          {/* RIGHT: CONTACT CTA */}
          <div className="flex items-center">
            <a 
              href="#cta" 
              className="bg-kkm-red text-white px-6 md:px-8 py-3 rounded-xl text-[12px] font-black hover:bg-kkm-dark transition-all shadow-lg shadow-kkm-red/20 uppercase tracking-widest"
            >
              Kontak
            </a>
            
            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 p-2 text-kkm-dark lg:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 bg-black/50 z-[90]" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-[95]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex flex-col space-y-4">
                {[
                  { name: 'Beranda', href: '#hero' },
                  { name: 'Tentang', href: '#story' },
                  { name: 'Produk', href: '#menu' },
                  { name: 'Proses', href: '#process' },
                  { name: 'Testimoni', href: '#reviews' },
                  { name: 'Bantuan', href: '#faq' },
                ].map((item) => (
                  item.name === 'Beranda' ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        const targetElement = document.getElementById('hero');
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-[14px] font-extrabold text-text-muted hover:text-kkm-red transition-all duration-300 uppercase tracking-widest text-left w-full py-2"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link 
                      key={item.name}
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[14px] font-extrabold text-text-muted hover:text-kkm-red transition-all duration-300 uppercase tracking-widest block py-2"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;