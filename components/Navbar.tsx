
import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'care' | 'learning' | 'shop' | 'about' | 'community' | 'contribution' | 'contact';
  onViewChange: (view: 'home' | 'care' | 'learning' | 'shop' | 'about' | 'community' | 'contribution' | 'contact') => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Explicitly define the navLinks type
  const navLinks: Array<{ 
    name: string; 
    view: 'home' | 'care' | 'learning' | 'shop' | 'about' | 'community' | 'contribution' | 'contact'; 
    href?: string 
  }> = [
    { name: 'Pengantar', view: 'learning' },
    { name: 'Cara Merawat', view: 'care' },
    { name: 'Belanja', view: 'shop' },
    { name: 'Komunitas', view: 'community' },
    { name: 'Kontribusi', view: 'contribution' },
    { name: 'Kontak', view: 'contact' },
    { name: 'Tentang Kami', view: 'about' },
  ];

  const handleNavClick = (view: 'home' | 'care' | 'learning' | 'shop' | 'about' | 'community' | 'contribution' | 'contact', href?: string) => {
    onViewChange(view);
    setIsOpen(false);
    if (view === 'home' && href && href.startsWith('#')) {
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-indigo-900 rounded-md flex items-center justify-center border border-indigo-700">
              <span className="text-white font-bold text-xs">TS</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight uppercase">ThreadState</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view, link.href)}
                className={`font-bold text-sm transition-colors tracking-wide flex items-center gap-2 ${
                  currentView === link.view
                    ? 'text-indigo-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-slate-300 hover:text-white transition-colors"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={onOpenCart} className="relative p-2 text-slate-300">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.view, link.href)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
