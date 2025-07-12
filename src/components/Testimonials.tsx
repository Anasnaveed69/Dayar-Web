import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

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

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Homeowner',
      content: 'Dayar transformed our house into a dream home. Their attention to detail and creative vision exceeded all our expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Muhammad Hassan',
      role: 'Business Owner',
      content: 'The office design they created for us has significantly improved our team\'s productivity and client impressions. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Fatima Khan',
      role: 'Restaurant Owner',
      content: 'Their landscape design for our restaurant created the perfect ambiance. Our customers love the outdoor dining experience.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-dayar-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-dayar-brand-dark mb-4">
            What Our <span className="text-dayar-brand-gold font-medium">Clients Say</span>
          </h2>
          <p className="text-lg text-dayar-charcoal max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Dayar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const [cardRef, inView] = useInView(0.18);
            return (
              <div
                key={index}
                ref={cardRef}
                className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 zoom-in${inView ? ' visible' : ''}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <Quote className="w-8 h-8 text-dayar-brand-gold mb-4" />
                <p className="text-dayar-charcoal leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-dayar-brand-gold fill-current" />
                  ))}
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-dayar-brand-dark">{testimonial.name}</h4>
                    <p className="text-sm text-dayar-charcoal">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;