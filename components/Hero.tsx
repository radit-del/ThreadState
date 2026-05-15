
import React from 'react';
import { ChevronRight, ShoppingBag } from 'lucide-react';

interface HeroProps {
  onNavigateCare: () => void;
  onNavigateLearning: () => void;
  onNavigateShop: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateCare, onNavigateLearning, onNavigateShop }) => {
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-indigo-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1920&auto=format&fit=crop" 
          alt="New Raw Denim Fabric" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-105 transition-transform duration-[10s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-indigo-950/40 to-indigo-950"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-indigo-100 text-xs font-bold mb-8 tracking-[0.2em] uppercase animate-pulse">
          Pure Raw Indigo
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Lebih Dari Sekadar Celana, <br/>
          <span className="text-indigo-400 italic font-serif">Ini Adalah Perjalanan.</span>
        </h1>
        <p className="text-lg md:text-xl text-indigo-100/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Mulai petualangan raw denim-mu hari ini. Biarkan setiap lipatan dan gesekan menceritakan kisah hidupmu melalui pola fading yang unik dan personal.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button 
            onClick={onNavigateShop}
            className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-indigo-900/40 flex items-center justify-center gap-2"
          >
            Belanja Sekarang <ShoppingBag size={20} />
          </button>
          <button 
            onClick={onNavigateLearning}
            className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full backdrop-blur-md transition-all border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
          >
            Mulai Belajar <ChevronRight size={20} />
          </button>
          <button 
            onClick={onNavigateCare}
            className="px-8 py-4 text-indigo-200 hover:text-white font-bold transition-all flex items-center justify-center gap-2"
          >
            Cara Merawat
          </button>
        </div>
      </div>

      {/* Dekorasi Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white"></div>
      </div>
    </div>
  );
};

export default Hero;
