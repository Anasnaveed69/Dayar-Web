import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const typewriterWords = [
  'Architecture',
  'Interior',
  'Landscape',
  'Visualisation',
];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [animateWord, setAnimateWord] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    setShowHero(true);
  }, []);

  useEffect(() => {
    let typingSpeed = 90;
    let pause = 1200;
    const word = typewriterWords[currentWord];

    if (!isDeleting && displayed.length < word.length) {
      setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!isDeleting && displayed.length === word.length) {
      setTimeout(() => setIsDeleting(true), pause);
      setAnimateWord(true);
      setTimeout(() => setAnimateWord(false), 350);
    } else if (isDeleting && displayed.length > 0) {
      setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), typingSpeed / 2);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % typewriterWords.length);
    }
  }, [displayed, isDeleting, currentWord]);

  return (
    <section id="home" className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 hero-animated-bg pointer-events-none"></div>
      </div>

      {/* Glassmorphic Card Content */}
      <div
        className={`relative z-10 max-w-3xl w-full mx-auto px-4 sm:px-8 py-12 rounded-2xl glass-card text-center text-white shadow-2xl transition-all duration-700 ${showHero ? 'hero-entrance' : 'opacity-0 translate-y-10'}`}
        style={{backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)'}}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-6 leading-tight">
          Designing Spaces<br />
          <span className="text-dayar-brand-gold font-semibold">That Inspire</span>
        </h1>
        <div className="h-12 flex flex-col items-center justify-center mb-8">
          <span className={`typewriter-text text-lg sm:text-xl md:text-2xl font-light text-gray-200 ${animateWord ? 'typewriter-bounce' : ''}`}
            >
            {displayed}
            <span className="typewriter-cursor">|</span>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#portfolio"
            className="cta-btn group"
            style={{ scrollBehavior: 'smooth' }}
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-5 h-5 cta-arrow group-hover:translate-x-2" />
          </a>
          <button className="btn-secondary font-medium shadow-md">
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="scroll-indicator">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6V26" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round"/>
            <path d="M10 20L16 26L22 20" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;