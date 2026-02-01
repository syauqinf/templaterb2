import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Support from './components/Support';
import Features from './components/Features';
import Story from './components/Story';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Support />
      <Features />
      <Story />
      <Menu />
      <Reviews />
      <FAQ />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}