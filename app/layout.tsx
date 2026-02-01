import './globals.css';
import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import AOSInit from './components/AOSInit';
import ScrollToTop from './components/ScrollToTop';
import 'aos/dist/aos.css';

const epilogue = Epilogue({ 
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
});

// Load Material Symbols font
export const metadata: Metadata = {
  title: 'Kira Kira Michi',
  description: 'Tempat terbaik untuk custom merchandise favoritmu, dengan kualitas premium dan desain eksklusif. Didukung oleh DekatLokal.',
  keywords: 'custom merchandise, kkm, dekatlokal, produk kreatif, desain eksklusif',
  authors: [{ name: 'Kira Kira Michi' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${epilogue.variable} light scroll-smooth`}>
      <body className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased selection:bg-primary/30 selection:text-text-main">
        <ScrollToTop />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}