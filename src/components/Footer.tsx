
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-ocean-50 to-background pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="animate-reveal">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-ocean-500 to-beacon-400 flex items-center justify-center shadow-md">
                <span className="font-bold text-white text-lg">OB</span>
              </div>
              <div className="font-medium text-xl">
                <span>Ocean</span>
                <span className="text-ocean-600">Beacon</span>
              </div>
            </div>
            
            <p className="text-foreground/80 mb-6">
              Transforming pets' lives with custom prosthetics designed for comfort, mobility, and joy.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-ocean-100 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-ocean-600" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-ocean-100 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-ocean-600" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-ocean-100 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-ocean-600" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="animate-reveal animate-reveal-delay-1">
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone Support</p>
                  <a href="tel:+5511987654321" className="text-foreground/80 hover:text-ocean-600 transition-colors">
                    +55 (11) 98765-4321
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@oceanbeacon.com" className="text-foreground/80 hover:text-ocean-600 transition-colors">
                    contact@oceanbeacon.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <address className="not-italic text-foreground/80">
                    123 Innovation Avenue<br />
                    São Paulo, SP 04538-132<br />
                    Brazil
                  </address>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div className="animate-reveal animate-reveal-delay-2">
            <h3 className="text-lg font-medium mb-6">Business Hours</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-foreground/80">9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-foreground/80">10:00 AM - 2:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-foreground/80">Closed</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 rounded-lg bg-foreground/5 border border-foreground/10">
              <p className="text-sm">
                <span className="font-medium">Note:</span> Consultation visits are by appointment only. Please book through our online system.
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-reveal animate-reveal-delay-3">
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            
            <ul className="space-y-3">
              <li>
                <a href="#booking" className="text-foreground/80 hover:text-ocean-600 transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#tracking" className="text-foreground/80 hover:text-ocean-600 transition-colors">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-ocean-600 transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-ocean-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-ocean-600 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-ocean-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://wa.me/5511987654321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ocean Beacon. All rights reserved. <br className="block md:hidden" />
              Crafting prosthetics that change pets' lives.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
