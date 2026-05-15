
import React from 'react';

interface FooterProps {
  onNavigateAbout: () => void;
  onNavigateCommunity: () => void;
  onNavigateContribution: () => void;
  onNavigateContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateAbout, onNavigateCommunity, onNavigateContribution, onNavigateContact }) => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">TS</span>
              </div>
              <span className="text-lg font-bold tracking-tight uppercase">ThreadState</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Membangun apresiasi terhadap kualitas, kerajinan tangan, dan kesabaran dalam berpakaian.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <button onClick={onNavigateAbout} className="hover:text-white transition-colors">Tentang Kami</button>
            <button onClick={onNavigateCommunity} className="hover:text-white transition-colors">Panduan Komunitas</button>
            <button onClick={onNavigateContribution} className="hover:text-white transition-colors">Kontribusi</button>
            <button onClick={onNavigateContact} className="hover:text-white transition-colors">Kontak</button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} ThreadState. Didedikasikan untuk para pecinta denim di seluruh Nusantara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
