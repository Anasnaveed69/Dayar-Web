import React, { useRef, useEffect, useState } from 'react';
import { Lightbulb, Eye, Cog, Heart } from 'lucide-react';

// Custom hook for in-view detection
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);
  return [ref, inView] as const;
}

const WhyChooseUs = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Customized Designs',
      description: 'Every project is tailored to your unique vision, lifestyle, and requirements, ensuring truly personalized solutions.'
    },
    {
      icon: Eye,
      title: 'High-Quality Visualisation',
      description: 'State-of-the-art 3D rendering and visualization technology brings your ideas to life before construction begins.'
    },
    {
      icon: Cog,
      title: 'Detail-Oriented Process',
      description: 'Meticulous attention to every detail ensures flawless execution and exceptional quality in every project.'
    },
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Your satisfaction is our priority. We maintain open communication and collaboration throughout the entire process.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-dayar-brand-dark mb-4">
            Why Choose <span className="text-dayar-brand-gold font-medium">Dayar</span>
          </h2>
          <p className="text-lg text-dayar-charcoal max-w-2xl mx-auto">
            We combine creativity, technical expertise, and personalized service to deliver exceptional design solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const [cardRef, inView] = useInView(0.18);
            return (
              <div
                key={index}
                ref={cardRef}
                className={`text-center group slide-in-left${inView ? ' visible' : ''}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="w-16 h-16 bg-dayar-brand-gold bg-opacity-15 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dayar-brand-gold transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-dayar-brand-gold group-hover:text-dayar-brand-dark transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-dayar-brand-dark mb-4">{feature.title}</h3>
                <p className="text-dayar-charcoal leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;