import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Instagram } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [infoRef, infoInView] = useInView(0.18);
  const [formCardRef, formInView] = useInView(0.18);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dayar-cream to-dayar-brand-dark/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4 animate-fade-in-up">
            Ready to Bring Your <span className="text-dayar-brand-gold font-medium">Vision to Life?</span>
          </h2>
          <p className="text-lg text-dayar-dark max-w-2xl mx-auto animate-fade-in-up">
            Get in touch with us today and let's discuss how we can transform your space into something extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div
            ref={infoRef}
            className={`bg-dayar-brand-dark/90 backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-col justify-center zoom-in${infoInView ? ' visible' : ''}`}
            style={{ transitionDelay: '0ms' }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">Get in Touch</h3>
            <div className="space-y-6">
              <div className="contact-info-row flex items-start space-x-4">
                <span className="bg-dayar-brand-gold/20 rounded-full p-3 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-dayar-brand-gold" />
                </span>
                <div>
                  <h4 className="font-semibold mb-1 text-dayar-brand-gold">Visit Our Office</h4>
                  <p className="text-white">Office-3, Block D, Canal View<br />Lahore, Pakistan</p>
                </div>
              </div>
              <div className="contact-info-row flex items-start space-x-4">
                <span className="bg-dayar-brand-gold/20 rounded-full p-3 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-dayar-brand-gold" />
                </span>
                <div>
                  <h4 className="font-semibold mb-1 text-dayar-brand-gold">Call or WhatsApp</h4>
                  <p className="text-white">+92 XXX XXXXXXX</p>
                </div>
              </div>
              <div className="contact-info-row flex items-start space-x-4">
                <span className="bg-dayar-brand-gold/20 rounded-full p-3 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-dayar-brand-gold" />
                </span>
                <div>
                  <h4 className="font-semibold mb-1 text-dayar-brand-gold">Email Us</h4>
                  <p className="text-white">info@dayar.com</p>
                </div>
              </div>
              <div className="contact-info-row flex items-start space-x-4">
                <span className="bg-dayar-brand-gold/20 rounded-full p-3 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-dayar-brand-gold" />
                </span>
                <div>
                  <h4 className="font-semibold mb-1 text-dayar-brand-gold">Follow Us</h4>
                  <p className="text-white">@dayar.architecture</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div
            ref={formCardRef}
            className={`zoom-in${formInView ? ' visible' : ''}`}
            style={{ transitionDelay: '120ms' }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-dayar-brand-dark/90 backdrop-blur-md rounded-2xl shadow-xl p-10"
            >
            <h3 className="text-2xl font-semibold mb-8 text-white">Send us a Message</h3>
            <div className="mb-6">
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-dayar-dark-charcoal text-white border border-dayar-brand-gold/30 focus:border-dayar-brand-gold focus:ring-2 focus:ring-dayar-brand-gold outline-none transition-all duration-300 placeholder:text-dayar-cream"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-dayar-dark-charcoal text-white border border-dayar-brand-gold/30 focus:border-dayar-brand-gold focus:ring-2 focus:ring-dayar-brand-gold outline-none transition-all duration-300 placeholder:text-dayar-cream"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-dayar-dark-charcoal text-white border border-dayar-brand-gold/30 focus:border-dayar-brand-gold focus:ring-2 focus:ring-dayar-brand-gold outline-none transition-all duration-300 placeholder:text-dayar-cream"
                placeholder="Type your message here..."
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-dayar-brand-gold hover:bg-dayar-dark-gold text-dayar-brand-dark font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md text-lg group"
            >
              Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;