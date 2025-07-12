import React, { useRef, useEffect, useState } from 'react';
import { Building, Palette, TreePine, Eye } from 'lucide-react';

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

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Architecture',
      description: 'Innovative architectural solutions that blend functionality with aesthetic excellence, creating spaces that inspire and endure.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Transforming interiors with sophisticated design concepts that reflect personality while maximizing comfort and functionality.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: TreePine,
      title: 'Landscape',
      description: 'Crafting outdoor environments that harmonize with nature, creating serene and beautiful landscapes for every season.',
      image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Eye,
      title: 'Visualization',
      description: 'Bringing concepts to life through stunning 3D visualizations and photorealistic renderings that showcase every detail.',
      image: 'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-dayar-brand-dark mb-4">
            Our <span className="text-dayar-brand-gold font-medium">Services</span>
          </h2>
          <p className="text-lg text-dayar-charcoal max-w-2xl mx-auto">
            We offer comprehensive design services that cover every aspect of creating exceptional spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const [cardRef, inView] = useInView(0.18);
            return (
              <div
                key={index}
                ref={cardRef}
                className={`group cursor-pointer fade-in${inView ? ' visible' : ''} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-square">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dayar-brand-gold bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-dayar-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dayar-brand-dark mb-3">{service.title}</h3>
                <p className="text-dayar-charcoal leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;