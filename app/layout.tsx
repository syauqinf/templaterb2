import './globals.css';
import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';

const epilogue = Epilogue({ 
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
});

// Load Material Symbols font
export const metadata: Metadata = {
  title: 'Rasa Nusantara - Kuliner Lokal Otentik & Katering Terbaik',
  description: 'Nikmati masakan rumahan Indonesia yang otentik, 100% Halal dengan bahan lokal pilihan. Melayani pesan antar dan katering di Jakarta. Didukung oleh DekatLokal.',
  keywords: 'kuliner nusantara, katering jakarta, nasi goreng kampung, rendang sapi, makanan halal, dekatlokal',
  authors: [{ name: 'Rasa Nusantara' }],
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
        {children}
      </body>
    </html>
  );
}