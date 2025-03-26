
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-50/50 to-transparent -z-10"></div>
      
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-ocean-200/30 to-beacon-200/30 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-ocean-200/20 to-beacon-200/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl animate-reveal">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-ocean-100/50 text-ocean-700 font-medium text-sm animate-reveal">
              Transforming Lives, One Step at a Time
            </div>
            
            <h1 className="font-semibold mb-6 animate-reveal animate-reveal-delay-1">
              Custom Prosthetics <br />
              <span className="text-gradient">For Your Beloved Pets</span>
            </h1>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-xl animate-reveal animate-reveal-delay-2">
              Ocean Beacon creates personalized, high-quality prosthetics that help your pets regain mobility, independence, and joy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-reveal animate-reveal-delay-3">
              <a 
                href="#booking" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-600 text-white font-medium rounded-lg shadow-sm hover:bg-ocean-700 transition-colors button-hover-effect"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a 
                href="#tracking" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-ocean-200 text-foreground font-medium rounded-lg shadow-sm hover:bg-ocean-50 transition-colors"
              >
                Track Your Order
              </a>
            </div>
          </div>
          
          <div className="relative w-full max-w-md lg:max-w-lg animate-reveal animate-reveal-delay-1">
            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-ocean-500/10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Happy dog with prosthetic leg" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl border-4 border-ocean-100 -z-10"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-12 glass p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-green-500 flex items-center justify-center text-white font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium">98% Success Rate</div>
                <div className="text-sm text-foreground/70">Verified by owners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
