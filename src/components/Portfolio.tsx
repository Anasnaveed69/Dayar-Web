import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

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

const Portfolio = () => {
  const projects = [
    {
      title: 'Modern Villa',
      category: 'Interior Design',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Luxury residential interior with contemporary aesthetics'
    },
    {
      title: 'Corporate Office',
      category: 'Architecture',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Modern office space designed for productivity and wellness'
    },
    {
      title: 'Garden Oasis',
      category: 'Landscape',
      image: 'https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Serene garden landscape with sustainable design elements'
    },
    {
      title: 'Luxury Penthouse',
      category: 'Visualization',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: '3D visualization of high-end residential project'
    },
    {
      title: 'Boutique Hotel',
      category: 'Interior Design',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Elegant hospitality interior with local cultural elements'
    },
    {
      title: 'Residential Complex',
      category: 'Architecture',
      image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Sustainable residential development with modern amenities'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dayar-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-dayar-brand-dark mb-4">
            Featured <span className="text-dayar-brand-gold font-medium">Projects</span>
          </h2>
          <p className="text-lg text-dayar-charcoal max-w-2xl mx-auto">
            Explore our portfolio of exceptional projects that showcase our commitment to design excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const [cardRef, inView] = useInView(0.18);
            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group fade-in${inView ? ' visible' : ''}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dayar-brand-dark bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-dayar-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-dayar-brand-gold text-dayar-brand-dark px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dayar-brand-dark mb-2">{project.title}</h3>
                  <p className="text-dayar-charcoal">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-dayar-brand-gold hover:bg-dayar-dark-gold text-dayar-brand-dark px-8 py-4 rounded-sm transition-all duration-300 font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;