
import React from 'react';

const FadeGallery: React.FC = () => {
  const fades = [
    {
      name: "Whiskers Area",
      loc: "Bagian Paha Atas",
      desc: "Area ini akan menjadi saksi bisu setiap kali Anda duduk. Pada denim baru, kain di sini masih kaku dan murni.",
      img: "https://images.unsplash.com/photo-1542272454315-4c01d7afdf16?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Honeycombs Base",
      loc: "Belakang Lutut",
      desc: "Lipatan kaku pada denim pajangan ini akan bertransformasi menjadi pola heksagonal yang artistik seiring waktu.",
      img: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Stacks Foundation",
      loc: "Pergelangan Kaki",
      desc: "Tumpukan kain yang masih kaku di bagian bawah akan menciptakan efek fading melingkar yang khas nantinya.",
      img: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="galeri" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Eksplorasi Kanvas</h2>
          <p className="text-slate-400">Setiap pasang raw denim baru adalah pajangan seni yang siap Anda personalisasi.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fades.map((fade, idx) => (
            <div key={idx} className="group overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={fade.img} 
                  alt={fade.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider">{fade.loc}</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-3">{fade.name}</h3>
                <p className="text-slate-400 leading-relaxed italic">"{fade.desc}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FadeGallery;
