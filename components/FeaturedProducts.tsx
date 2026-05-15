
import React from 'react';
import { ShoppingCart, ArrowRight, Star, TrendingUp } from 'lucide-react';

interface FeaturedProductsProps {
  onAddToCart: (product: any) => void;
  onNavigateShop: () => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onAddToCart, onNavigateShop }) => {
  const featured = [
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

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
              <TrendingUp size={14} /> Spotlight Collection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Koleksi <span className="text-indigo-400 italic font-serif">Pilihan.</span></h2>
            <p className="text-slate-400 max-w-xl font-light">
              Tiga masterpiece dengan potongan <span className="text-white font-medium">Straight Fit</span> yang mendefinisikan standar kualitas kami. Semua dalam kondisi murni (unworn).
            </p>
          </div>
          <button 
            onClick={onNavigateShop}
            className="flex items-center gap-3 text-white font-bold group hover:text-indigo-400 transition-colors"
          >
            Lihat Semua Katalog <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div key={product.id} className="group relative flex flex-col bg-slate-900/40 border border-white/5 rounded-[3rem] overflow-hidden hover:border-indigo-500/40 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/10">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 bg-indigo-600/90 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-lg border border-indigo-400/30">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-xl flex items-center gap-2 border border-white/10">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-white">{product.rating}</span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">{product.origin}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-white">{product.weight}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{product.type}</p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <div className="text-xl font-bold text-indigo-400">
                    {product.price}
                  </div>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="flex-grow flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-indigo-600 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all border border-white/10 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20"
                  >
                    <ShoppingCart size={18} /> Tambah Ke Keranjang
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

export default FeaturedProducts;
