import React from 'react';
import { MapPin, Clock, ChevronRight } from 'lucide-react';

const locations = [
  { name: 'Jillelaguda', id: 1 },
  { name: 'Meerpet', id: 2 },
  { name: 'Gayatri Nagar', id: 3 },
  { name: 'Nadgergul', id: 4 },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-radial from-emerald-900 via-emerald-700 to-emerald-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Logo and Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-white/10 backdrop-blur-sm p-1 mx-auto mb-8 animate-float">
              <div className="w-full h-full rounded-full bg-white/20 p-1">
                <div className="w-full h-full rounded-full bg-white/30 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#FDF6E9] flex items-center justify-center">
                    <img 
                      src="/organicpotlam-logo.png" 
                      alt="OrganicPotlam Logo" 
                      className="w-[95%] h-[95%] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair drop-shadow-lg">
            Choose Your Location
          </h1>
          <div className="flex items-center justify-center space-x-2 text-emerald-50 mb-8">
            <Clock className="w-5 h-5" />
            <p className="text-lg">Delivery within 15 minutes</p>
          </div>
        </div>

        {/* Location Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto perspective-1000">
          {locations.map((location, index) => (
            <a
              key={location.id}
              href="https://organicpotlam.mini.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="group card-3d-wrapper"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-3d relative overflow-hidden rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.3)] transition-all duration-500 p-6 border border-white/20">
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-white" />
                    <span className="text-xl font-medium text-white">{location.name}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="mt-2 text-sm text-emerald-50">
                  Tap to order fresh organic items
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-24 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-8 font-playfair">Why Choose OrganicPotlam?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Fresh & Organic', desc: 'Hand-picked quality ingredients' },
              { title: 'Quick Delivery', desc: '15-minute delivery guarantee' },
              { title: 'Local Sourcing', desc: 'Supporting local farmers' }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="feature-card p-6 rounded-lg bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm transition-transform duration-300 animate-fade-in border border-white/20" 
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <h3 className="font-semibold text-white mb-2 font-playfair">{feature.title}</h3>
                <p className="text-emerald-50">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;