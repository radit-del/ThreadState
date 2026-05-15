
import React, { useState } from 'react';
import { ShoppingCart, Tag, Filter, Scale, ChevronRight, Star } from 'lucide-react';

interface ShopSectionProps {
  onAddToCart: (product: any) => void;
}

const ShopSection: React.FC<ShopSectionProps> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState('All');

  const products = [
    {
      id: 1,
      name: "The Deep Ocean",
      weight: "14oz",
      origin: "Okayama, Japan",
      type: "Sanforized",
      price: "Rp 1.850.000",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Heavyweight Armor",
      weight: "21oz",
      origin: "Bekasi, Jawa Barat",
      type: "Unsanforized",
      price: "Rp 2.400.000",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop",
      tag: "Hardcore"
    },
    {
      id: 3,
      name: "Featherweight Slub",
      weight: "12oz",
      origin: "Hiroshima, Japan",
      type: "Sanforized",
      price: "Rp 1.600.000",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
      tag: "Daily Wear"
    },
    {
      id: 4,
      name: "Vintage 1960's",
      weight: "14.5oz",
      origin: "Kojima, Japan",
      type: "Unsanforized",
      price: "Rp 3.200.000",
      rating: 5.0,
      img: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=800&auto=format&fit=crop",
      tag: "Rare"
    }
  ];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => {
        if (filter === 'Light') return parseInt(p.weight) <= 13;
        if (filter === 'Mid') return parseInt(p.weight) > 13 && parseInt(p.weight) <= 16;
        if (filter === 'Heavy') return parseInt(p.weight) > 16;
        return true;
      });

  return (
    <section className="py-12 bg-transparent text-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Tag size={12} /> Curated Collection
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Katalog <span className="text-indigo-400">Indigo</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Pilihan denim terbaik dari artisan lokal dan global. Setiap produk adalah pajangan seni murni dengan potongan <span className="text-white font-medium">Straight Cut</span> klasik.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm">
            {['All', 'Light', 'Mid', 'Heavy'].map((btn) => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-widest ${
                  filter === btn 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {btn === 'All' ? 'Semua' : `${btn} (OZ)`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-indigo-600 text-[10px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg flex items-center gap-1.5 border border-white/10">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold">{product.rating}</span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{product.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-tighter">{product.origin}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-indigo-400 font-bold">{product.weight}</p>
                    <p className="text-[10px] text-slate-500 uppercase">{product.type}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-lg font-bold text-white">
                    {product.price}
                  </div>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-12 h-12 bg-white/5 hover:bg-indigo-600 rounded-2xl flex items-center justify-center transition-all group/btn border border-white/10 hover:border-indigo-500"
                  >
                    <ShoppingCart size={20} className="text-white group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
