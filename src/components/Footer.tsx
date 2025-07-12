import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dayar-brand-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 bg-dayar-brand-dark p-2 rounded inline-block">
              <img 
                src="/Dayar_Architecture_Logo.jpg"
                alt="Dayar Architecture" 
                className="h-16 w-auto md:h-20"
              />
            </div>
            <p className="text-dayar-cream leading-relaxed">
              Creating exceptional spaces through innovative design and architectural excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-dayar-cream hover:text-dayar-brand-gold transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-dayar-cream hover:text-dayar-brand-gold transition-colors duration-200">About</a></li>
              <li><a href="#services" className="text-dayar-cream hover:text-dayar-brand-gold transition-colors duration-200">Services</a></li>
              <li><a href="#portfolio" className="text-dayar-cream hover:text-dayar-brand-gold transition-colors duration-200">Portfolio</a></li>
              <li><a href="#contact" className="text-dayar-cream hover:text-dayar-brand-gold transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-dayar-cream">Architecture</span></li>
              <li><span className="text-dayar-cream">Interior Design</span></li>
              <li><span className="text-dayar-cream">Landscape Design</span></li>
              <li><span className="text-dayar-cream">3D Visualization</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-dayar-brand-gold" />
                <span className="text-dayar-cream text-sm">Canal View, Lahore</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-dayar-brand-gold" />
                <span className="text-dayar-cream text-sm">+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-dayar-brand-gold" />
                <span className="text-dayar-cream text-sm">info@dayar.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-dayar-brand-gold" />
                <span className="text-dayar-cream text-sm">@dayar.architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dayar-light-charcoal pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dayar-cream text-sm">
            © {currentYear} Dayar Architecture. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-dayar-cream hover:text-dayar-brand-gold transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;