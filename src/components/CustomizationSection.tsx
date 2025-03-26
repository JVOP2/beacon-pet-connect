
import { useState } from 'react';
import { cn } from '@/lib/utils';

type ColorOption = {
  id: string;
  name: string;
  value: string;
};

type PatternOption = {
  id: string;
  name: string;
  image: string;
};

const colorOptions: ColorOption[] = [
  { id: 'ocean-blue', name: 'Ocean Blue', value: '#0ea5e9' },
  { id: 'coral-red', name: 'Coral Red', value: '#f43f5e' },
  { id: 'forest-green', name: 'Forest Green', value: '#10b981' },
  { id: 'royal-purple', name: 'Royal Purple', value: '#8b5cf6' },
  { id: 'sunny-yellow', name: 'Sunny Yellow', value: '#fbbf24' },
  { id: 'classic-black', name: 'Classic Black', value: '#171717' },
  { id: 'pearl-white', name: 'Pearl White', value: '#f8fafc' },
  { id: 'rose-pink', name: 'Rose Pink', value: '#ec4899' },
];

const patternOptions: PatternOption[] = [
  { id: 'none', name: 'None', image: 'https://via.placeholder.com/60x60/f8fafc/f8fafc?text=+' },
  { id: 'paw-prints', name: 'Paw Prints', image: 'https://via.placeholder.com/60x60/f8fafc/888888?text=🐾' },
  { id: 'dots', name: 'Polka Dots', image: 'https://via.placeholder.com/60x60/f8fafc/888888?text=•••' },
  { id: 'stripes', name: 'Stripes', image: 'https://via.placeholder.com/60x60/f8fafc/888888?text=≡' },
  { id: 'stars', name: 'Stars', image: 'https://via.placeholder.com/60x60/f8fafc/888888?text=★' },
  { id: 'hearts', name: 'Hearts', image: 'https://via.placeholder.com/60x60/f8fafc/888888?text=♥' },
  { id: 'camo', name: 'Camouflage', image: 'https://via.placeholder.com/60x60/4b5320/2d3214?text=≈' },
  { id: 'flowers', name: 'Flowers', image: 'https://via.placeholder.com/60x60/f8fafc/888888?text=✿' },
];

const CustomizationSection = () => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);
  const [selectedPattern, setSelectedPattern] = useState<PatternOption>(patternOptions[0]);
  const [isRotating, setIsRotating] = useState(false);

  // Trigger rotation animation when color/pattern changes
  const handleColorChange = (color: ColorOption) => {
    setSelectedColor(color);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  const handlePatternChange = (pattern: PatternOption) => {
    setSelectedPattern(pattern);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  // Generate background style based on selected options
  const getPreviewStyle = () => {
    if (selectedPattern.id === 'none') {
      return { backgroundColor: selectedColor.value };
    }
    
    return {
      backgroundColor: selectedColor.value,
      backgroundImage: `url(${selectedPattern.image})`,
      backgroundSize: '30%',
      backgroundRepeat: 'repeat',
    };
  };

  return (
    <section id="customization" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-beacon-50/50 to-transparent -z-10"></div>
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ocean-50/50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-ocean-100/50 text-ocean-700 font-medium text-sm">
            Make It Unique
          </div>
          
          <h2 className="font-semibold mb-6 text-gradient">Customize Your Pet's Prosthetic</h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Your pet deserves a prosthetic that's not only functional but also reflects their personality. Explore our customization options.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Customization Form */}
          <div className="order-2 lg:order-1 animate-reveal animate-reveal-delay-1">
            <div className="glass rounded-2xl shadow-xl shadow-ocean-500/5 p-8">
              <h3 className="text-2xl font-medium mb-6">Design Your Pet's Prosthetic</h3>
              
              <div className="space-y-8">
                {/* Color Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Choose a Color</label>
                  <div className="grid grid-cols-4 gap-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color.id}
                        className={cn(
                          "w-full aspect-square rounded-lg flex items-center justify-center border-2 transition-all",
                          selectedColor.id === color.id 
                            ? "border-ocean-500 ring-2 ring-ocean-300/50" 
                            : "border-transparent hover:border-ocean-300"
                        )}
                        onClick={() => handleColorChange(color)}
                        style={{ backgroundColor: color.value }}
                        aria-label={`Select ${color.name}`}
                      >
                        {selectedColor.id === color.id && (
                          <svg className="w-6 h-6 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Selected: {selectedColor.name}</p>
                </div>
                
                {/* Pattern Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Choose a Pattern (Optional)</label>
                  <div className="grid grid-cols-4 gap-3">
                    {patternOptions.map((pattern) => (
                      <button
                        key={pattern.id}
                        className={cn(
                          "w-full aspect-square rounded-lg border-2 overflow-hidden transition-all",
                          selectedPattern.id === pattern.id 
                            ? "border-ocean-500 ring-2 ring-ocean-300/50" 
                            : "border-transparent hover:border-ocean-300"
                        )}
                        onClick={() => handlePatternChange(pattern)}
                        aria-label={`Select ${pattern.name} pattern`}
                      >
                        <img 
                          src={pattern.image} 
                          alt={pattern.name} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Selected Pattern: {selectedPattern.name}</p>
                </div>
                
                {/* Custom Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2">Custom Requests (Optional)</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 outline-none transition-all"
                    placeholder="Any special requests or details for customization..."
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Note: All customizations are subject to approval based on functionality requirements.
                </p>
                <button 
                  className="w-full py-3 bg-ocean-600 hover:bg-ocean-700 text-white font-medium rounded-lg transition-colors button-hover-effect"
                >
                  Save Customization Preferences
                </button>
              </div>
            </div>
          </div>
          
          {/* 3D Preview */}
          <div className="order-1 lg:order-2 animate-reveal">
            <div className="relative flex items-center justify-center">
              {/* Simulated 3D preview with perspective */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-300/10 to-beacon-300/10 rounded-full blur-3xl animate-float" />
                
                <div className="relative">
                  <div 
                    className={cn(
                      "w-64 h-64 mx-auto rounded-2xl shadow-2xl transition-transform duration-1000 ease-out transform-gpu relative",
                      isRotating && "rotate-y-180"
                    )}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    {/* Front side - prosthetic model */}
                    <div 
                      className="absolute inset-0 rounded-2xl backface-hidden"
                      style={getPreviewStyle()}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-2xl font-medium text-white drop-shadow-lg">
                            Preview
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back side - simulated back of prosthetic */}
                    <div 
                      className="absolute inset-0 rounded-2xl backface-hidden rotate-y-180"
                      style={{
                        ...getPreviewStyle(),
                        filter: 'brightness(0.9)'
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-2xl font-medium text-white drop-shadow-lg">
                            Back Side
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rotation controls */}
                  <div className="mt-8 flex justify-center">
                    <button 
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setIsRotating(!isRotating);
                        setTimeout(() => setIsRotating(false), 1000);
                      }}
                    >
                      Rotate Preview
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-12 top-1/4 w-24 h-24 bg-ocean-400/10 rounded-full blur-xl" />
              <div className="absolute -left-8 bottom-1/4 w-20 h-20 bg-beacon-400/10 rounded-full blur-xl" />
            </div>
            
            <div className="mt-12 bg-muted/30 border border-border rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-medium mb-4">Why Customize?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-ocean-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-ocean-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Helps pets adapt faster to their new prosthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-ocean-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-ocean-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Makes the prosthetic an extension of your pet's personality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-ocean-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-ocean-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Creates a positive association with the device</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
