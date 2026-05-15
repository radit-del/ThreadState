
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UnderstandingSection from './components/UnderstandingSection';
import CareSection from './components/CareSection';
import FadeGallery from './components/FadeGallery';
import ShopSection from './components/ShopSection';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import CommunitySection from './components/CommunitySection';
import ContributionSection from './components/ContributionSection';
import ContactSection from './components/ContactSection';
import CartDrawer from './components/CartDrawer';
import GeminiAssistant from './components/GeminiAssistant';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import { Info, ArrowLeft } from 'lucide-react';

type View = 'home' | 'care' | 'learning' | 'shop' | 'about' | 'community' | 'contribution' | 'contact';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  img: string;
  quantity: number;
}

const App: React.FC = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [view, setView] = useState<View>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (!isAppReady) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isAppReady]);

  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {!isAppReady && <SplashScreen onComplete={() => setIsAppReady(true)} />}

      <div className={`min-h-screen flex flex-col denim-texture-bg transition-all duration-1000 ${isAppReady ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'}`}>
        <Navbar 
          currentView={view} 
          onViewChange={navigateTo} 
          cartCount={cartCount} 
          onOpenCart={() => setIsCartOpen(true)} 
        />
        
        <main className="flex-grow">
          {view === 'home' && (
            <div className="animate-in fade-in duration-700">
              <Hero 
                onNavigateCare={() => navigateTo('care')} 
                onNavigateLearning={() => navigateTo('learning')}
                onNavigateShop={() => navigateTo('shop')} 
              />
              <div className="bg-black/40 backdrop-blur-sm">
                <FadeGallery />
              </div>
              
              <FeaturedProducts 
                onAddToCart={addToCart} 
                onNavigateShop={() => navigateTo('shop')} 
              />

              <section id="tanya-expert" className="py-24 bg-black/60 backdrop-blur-md">
                <div className="max-w-4xl mx-auto px-4">
                  <div className="bg-slate-900/80 backdrop-blur-xl rounded-[3rem] shadow-2xl shadow-indigo-950/20 overflow-hidden p-8 md:p-16 border border-white/10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg shadow-indigo-900/50">
                        <Info className="text-white" size={28} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">Jangan Malu Bertanya</h2>
                        <p className="text-indigo-400 font-medium">Tanya apa saja tentang kultur Denim</p>
                      </div>
                    </div>
                    <GeminiAssistant />
                  </div>
                </div>
              </section>
            </div>
          )}

          {view === 'learning' && (
            <div className="animate-in slide-in-from-right duration-500 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-12">
                <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-indigo-400 hover:text-white mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Kembali</span>
                </button>
              </div>
              <UnderstandingSection onNext={() => navigateTo('care')} />
            </div>
          )}

          {view === 'care' && (
            <div className="animate-in slide-in-from-right duration-500 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-12">
                <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-indigo-400 hover:text-white mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Kembali</span>
                </button>
              </div>
              <CareSection onNext={() => navigateTo('shop')} />
            </div>
          )}

          {view === 'shop' && (
            <div className="animate-in slide-in-from-right duration-500 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-12">
                <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-indigo-400 hover:text-white mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Kembali</span>
                </button>
              </div>
              <ShopSection onAddToCart={addToCart} />
            </div>
          )}

          {view === 'about' && (
            <div className="animate-in slide-in-from-right duration-500 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-12">
                <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-indigo-400 hover:text-white mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Kembali</span>
                </button>
              </div>
              <AboutSection onNavigateContact={() => navigateTo('contact')} />
            </div>
          )}

          {view === 'community' && (
            <div className="animate-in slide-in-from-right duration-500 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-12">
                <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-indigo-400 hover:text-white mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Kembali</span>
                </button>
              </div>
              <CommunitySection />
            </div>
          )}

          {view === 'contribution' && (
            <div className="animate-in slide-in-from-right duration-500 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-12">
                <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-indigo-400 hover:text-white mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Kembali</span>
                </button>
              </div>
              <ContributionSection />
            </div>
          )}

          {view === 'contact' && (
            <div className="animate-in slide-in-from-right duration-500 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-12">
                <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-indigo-400 hover:text-white mb-8 group">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold uppercase tracking-widest text-sm">Kembali</span>
                </button>
              </div>
              <ContactSection />
            </div>
          )}
        </main>

        <Footer 
          onNavigateAbout={() => navigateTo('about')} 
          onNavigateCommunity={() => navigateTo('community')}
          onNavigateContribution={() => navigateTo('contribution')}
          onNavigateContact={() => navigateTo('contact')}
        />

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cart} 
          onRemove={removeFromCart}
          onUpdateQty={updateQuantity}
        />
      </div>
    </>
  );
};

export default App;
