
import React, { useEffect, useState } from 'react';
import { Scissors, Zap } from 'lucide-react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 0.8 : 100));
    }, 30);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200);
    }, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#080b14] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out overflow-hidden ${
        isVisible ? 'opacity-100' : 'opacity-0 scale-105 pointer-events-none'
      }`}
    >
      {/* Heavy Denim Twill Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/denim.png')]"></div>
      
      {/* Old Film & Grain Effect */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Selvedge ID Border (Red/White Edge) */}
      <div className={`absolute inset-y-0 left-0 w-2 transition-transform duration-[2000ms] delay-500 bg-white border-r border-red-600 ${progress > 5 ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-y-0 right-[1px] w-[1px] bg-red-600"></div>
      </div>
      <div className={`absolute inset-y-0 right-0 w-2 transition-transform duration-[2000ms] delay-500 bg-white border-l border-red-600 ${progress > 5 ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-y-0 left-[1px] w-[1px] bg-red-600"></div>
      </div>

      {/* Decorative Copper Stitching Lines */}
      <div className="absolute top-10 inset-x-20 border-t border-dashed border-orange-500/20 opacity-50"></div>
      <div className="absolute bottom-10 inset-x-20 border-b border-dashed border-orange-500/20 opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Heritage Mark Icon (Copper Rivet inspired) */}
        <div className="mb-10 relative">
          <div className="w-14 h-14 rounded-full border border-orange-500/40 flex items-center justify-center animate-[spin_10s_linear_infinite]">
            <div className="w-10 h-10 rounded-full border-2 border-orange-500/60 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.2)]">
               <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 p-1 bg-[#080b14] rounded-full border border-orange-500/30">
            <Scissors size={12} className="text-orange-500/60" />
          </div>
        </div>

        <div className="text-center">
          {/* THE LOGO - Indigo Fade & Copper Stitch Aesthetic */}
          <div className="relative mb-6">
            <h1 className="text-[7rem] md:text-[10rem] font-bold leading-none tracking-tighter select-none font-serif italic text-transparent bg-clip-text bg-indigo-copper-gradient relative z-10 animate-luxury-fade-in drop-shadow-2xl">
              TS
              {/* Indigo Bleed / Fading Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent -skew-x-12 translate-x-[-200%] animate-indigo-sweep mix-blend-screen"></div>
            </h1>
            
            {/* Indigo Glow Underlay */}
            <h1 className="absolute top-2 left-0 w-full text-[7rem] md:text-[10rem] font-bold leading-none tracking-tighter select-none font-serif italic text-indigo-900/40 blur-3xl -z-10">
              TS
            </h1>
          </div>

          <div className="flex flex-col items-center">
             <div className="flex items-center gap-4 mb-6">
               <div className="h-[1px] w-12 bg-orange-500/30"></div>
               <p className="text-indigo-200/50 text-[10px] font-bold tracking-[1.2em] uppercase animate-tracking-in">
                 THREADSTATE
               </p>
               <div className="h-[1px] w-12 bg-orange-500/30"></div>
             </div>
             
             <div className="flex flex-col items-center gap-2">
               <span className="text-orange-500/40 text-[9px] font-medium tracking-[0.4em] uppercase">
                 Genuine Raw Indigo Goods
               </span>
               <span className="text-indigo-400/30 text-[8px] font-serif italic animate-fade-in-up">
                 Individually Faded Since 2018
               </span>
             </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator (Inspired by a Denim Seam) */}
      <div className="absolute bottom-24 flex items-center gap-4">
        <span className="text-[10px] font-mono text-orange-500/40 uppercase">Rope-Dyeing</span>
        <div className="w-32 h-[2px] bg-white/5 relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600 transition-all duration-300 shadow-[0_0_10px_rgba(79,70,229,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-[10px] font-mono text-orange-500/40">{Math.round(progress)}%</span>
      </div>

      <div className="absolute bottom-10 text-center">
        <p className="text-white/10 text-[7px] tracking-[2em] uppercase font-light">
          Heritage • Patience • Character
        </p>
      </div>

      <style>{`
        .bg-indigo-copper-gradient {
          background-image: linear-gradient(135deg, 
            #1e3a8a 0%, 
            #312e81 20%, 
            #fb923c 45%, 
            #f97316 50%, 
            #fb923c 55%, 
            #312e81 80%, 
            #1e3a8a 100%
          );
          background-size: 200% auto;
        }
        @keyframes indigo-sweep {
          0% { transform: translateX(-150%) skewX(-15deg); }
          40%, 100% { transform: translateX(180%) skewX(-15deg); }
        }
        .animate-indigo-sweep {
          animation: indigo-sweep 7s ease-in-out infinite;
        }
        @keyframes luxury-fade-in {
          from { opacity: 0; transform: scale(0.92) translateY(20px); filter: blur(12px) contrast(1.5); }
          to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0) contrast(1); }
        }
        .animate-luxury-fade-in {
          animation: luxury-fade-in 3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes tracking-in {
          from { letter-spacing: 0.2em; opacity: 0; }
          to { letter-spacing: 1.2em; opacity: 1; }
        }
        .animate-tracking-in {
          animation: tracking-in 3.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.8s;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 2s ease-out forwards;
          animation-delay: 2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
