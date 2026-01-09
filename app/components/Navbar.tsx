'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-[#f4f3f1] dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  d="M5.275 13.5c0.11665 -0.2 0.20415 -0.41665 0.2625 -0.65 0.05835 -0.23335 0.0875 -0.51665 0.0875 -0.85 0 -0.58335 -0.16665 -1.2125 -0.5 -1.8875 -0.33333 -0.675 -0.5 -1.25415 -0.5 -1.7375 0 -0.18335 0.01667 -0.39585 0.05 -0.6375 0.033335 -0.24165 0.133335 -0.4875 0.3 -0.7375h1.25c-0.13335 0.23335 -0.225 0.475 -0.275 0.725 -0.05 0.25 -0.075 0.46665 -0.075 0.65 0 0.56665 0.16665 1.16665 0.5 1.8 0.33335 0.63335 0.5 1.24165 0.5 1.825 0 0.33335 -0.02915 0.61665 -0.0875 0.85 -0.05835 0.23335 -0.14585 0.45 -0.2625 0.65h-1.25Zm6.5 0c0.11665 -0.2 0.20415 -0.41665 0.2625 -0.65 0.05835 -0.23335 0.0875 -0.51665 0.0875 -0.85 0 -0.58335 -0.16665 -1.2125 -0.5 -1.8875 -0.33335 -0.675 -0.5 -1.25415 -0.5 -1.7375 0 -0.18335 0.01665 -0.39585 0.05 -0.6375 0.03335 -0.24165 0.13335 -0.4875 0.3 -0.7375h1.25c-0.13335 0.23335 -0.225 0.475 -0.275 0.725 -0.05 0.25 -0.075 0.46665 -0.075 0.65 0 0.56665 0.16665 1.16665 0.5 1.8 0.33335 0.63335 0.5 1.24165 0.5 1.825 0 0.33335 -0.02915 0.61665 -0.0875 0.85 -0.05835 0.23335 -0.14585 0.45 -0.2625 0.65h-1.25Zm-3.25 0c0.11665 -0.2 0.20415 -0.41665 0.2625 -0.65 0.05835 -0.23335 0.0875 -0.51665 0.0875 -0.85 0 -0.58335 -0.16665 -1.2125 -0.5 -1.8875 -0.33335 -0.675 -0.5 -1.25415 -0.5 -1.7375 0 -0.18335 0.01665 -0.39585 0.05 -0.6375 0.03335 -0.24165 0.13335 -0.4875 0.3 -0.7375h1.25c-0.13335 0.23335 -0.225 0.475 -0.275 0.725 -0.05 0.25 -0.075 0.46665 -0.075 0.65 0 0.56665 0.16665 1.16665 0.5 1.8 0.33335 0.63335 0.5 1.24165 0.5 1.825 0 0.33335 -0.02915 0.61665 -0.0875 0.85 -0.05835 0.23335 -0.14585 0.45 -0.2625 0.65h-1.25Zm1.225 8.5c-1.66665 0 -3.15 -0.57085 -4.45 -1.7125C4 19.14585 3.233335 17.75 3 16.1c-0.03333 -0.23335 0.020835 -0.43335 0.1625 -0.6 0.14167 -0.16665 0.3375 -0.25 0.5875 -0.25H15l1.125 -10.825c0.08335 -0.683335 0.38335 -1.258335 0.9 -1.725C17.54165 2.233335 18.15 2 18.85 2c0.76665 0 1.41665 0.266665 1.95 0.8 0.53335 0.533335 0.8 1.183335 0.8 1.95 0 0.15 -0.00835 0.34585 -0.025 0.5875 -0.01665 0.24165 -0.04165 0.45415 -0.075 0.6375l-1.475 -0.2 0.0375 -0.425c0.025 -0.28335 0.0375 -0.483335 0.0375 -0.6 0 -0.35 -0.12085 -0.645835 -0.3625 -0.8875C19.49585 3.620835 19.2 3.5 18.85 3.5c-0.33335 0 -0.61665 0.108335 -0.85 0.325 -0.23335 0.216665 -0.36665 0.483335 -0.4 0.8L16.45 15.75c-0.18335 1.76665 -0.9125 3.25 -2.1875 4.45 -1.275 1.2 -2.77915 1.8 -4.5125 1.8Zm0 -1.5c1.08335 0 2.075 -0.325 2.975 -0.975 0.9 -0.65 1.56665 -1.575 2 -2.775H4.7c0.43335 1.2 1.1125 2.125 2.0375 2.775 0.925 0.65 1.92915 0.975 3.0125 0.975Z"
                  stroke="currentColor"
                  strokeWidth="0.7"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="text-xl font-bold tracking-tight text-text-main">
              Rasa Nusantara
            </span>
          </div>

          <nav className={`hidden md:flex items-center gap-8 ${isMobileMenuOpen ? 'block' : ''}`}>
            <Link href="#menu" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="#story" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
              Cerita
            </Link>
            <Link href="#location" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
              Lokasi
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
              Ulasan
            </Link>
          </nav>

          <div className="hidden md:flex">
            <button className="flex items-center justify-center h-10 px-6 rounded-full bg-primary text-white text-sm font-bold shadow-soft hover:bg-primary-hover hover:scale-105 transition-all duration-300">
              Pesan Online
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-text-main p-2"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#f4f3f1]">
            <nav className="flex flex-col gap-4">
              <Link
                href="#menu"
                className="text-sm font-medium text-text-main hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="#story"
                className="text-sm font-medium text-text-main hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cerita
              </Link>
              <Link
                href="#location"
                className="text-sm font-medium text-text-main hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lokasi
              </Link>
              <Link
                href="#reviews"
                className="text-sm font-medium text-text-main hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ulasan
              </Link>

              <button className="flex items-center justify-center h-10 px-6 rounded-full bg-primary text-white text-sm font-bold shadow-soft hover:bg-primary-hover hover:scale-105 transition-all duration-300 w-full">
                Pesan Online
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
