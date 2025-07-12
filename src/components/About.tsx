import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Calendar, Target } from 'lucide-react';

// Custom hook to detect if an element is in the viewport
function useInView(threshold = 0.3) {
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

// Counter component for animated numbers
type CounterProps = { end: string; duration?: number; start: boolean };
const Counter: React.FC<CounterProps> = ({ end, duration = 1500, start }) => {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);
  const isPlus = typeof end === 'string' && end.includes('+');
  const endNum = parseInt(end);

  useEffect(() => {
    if (!start) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endNum));
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      } else {
        setCount(endNum);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [endNum, duration, start]);

  return (
    <span>
      {count}
      {isPlus && '+'}
    </span>
  );
};

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '12+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Calendar, label: 'Projects Completed', value: '150+' },
    { icon: Target, label: 'Awards Won', value: '25+' },
  ];
  const [statsRef, statsInView] = useInView(0.3);

  return (
    <section id="about" className="py-20 bg-dayar-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light text-dayar-brand-dark mb-6">
              About 
              <span className="text-amber-600 font-medium"> D</span>
              <span className="text-dayar-brand-gold font-medium">AYAR</span>

            </h2>
            <p className="text-lg text-dayar-charcoal leading-relaxed mb-8">
              Dayar is a multidisciplinary design studio based in Lahore, blending architectural innovation with timeless aesthetics. We create functional, beautiful spaces that elevate everyday living.
            </p>
            <p className="text-lg text-dayar-charcoal leading-relaxed mb-8">
              Our philosophy centers on the belief that great design transcends mere aesthetics it shapes experiences, influences emotions, and transforms the way people interact with their environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="about-tag">Sustainable Design</span>
              <span className="about-tag">Innovation</span>
              <span className="about-tag">Precision</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6" ref={statsRef}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center bg-white p-6 rounded-lg shadow-sm border border-dayar-cream fade-in-right${statsInView ? ' visible' : ''}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <stat.icon className="w-8 h-8 text-dayar-brand-gold mx-auto mb-4" />
                <div className="text-2xl font-bold text-dayar-brand-dark mb-2">
                  <Counter end={stat.value} start={statsInView} />
                </div>
                <div className="text-sm text-dayar-charcoal">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;