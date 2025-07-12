import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Loader component
const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center loader-bg transition-opacity duration-700">
    <div className="flex flex-col items-center">
      {/* Dual-ring spinner with orbiting dots */}
      <div className="relative mb-8">
        <div className="loader-dual-ring"></div>
        <div className="loader-dot loader-dot1"></div>
        <div className="loader-dot loader-dot2"></div>
        <div className="loader-dot loader-dot3"></div>
      </div>
      {/* Animated DAYAR text */}
      <span className="loader-brand text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest">
        <span className="loader-letter text-amber-600">D</span>
        <span className="loader-letter gold">A</span>
        <span className="loader-letter gold">Y</span>
        <span className="loader-letter gold">A</span>
        <span className="loader-letter gold">R</span>
      </span>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {loading && <Loader />}
      <div className={loading ? 'opacity-0 pointer-events-none select-none' : 'opacity-100 transition-opacity duration-700'}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;