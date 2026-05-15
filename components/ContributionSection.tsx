
import React from 'react';
import { Gift, Heart, PenTool, Camera, Share2, Code, MessageSquare, Star } from 'lucide-react';

const ContributionSection: React.FC = () => {
  return (
    <section className="py-12 bg-transparent text-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-24 overflow-hidden rounded-[4rem] bg-gradient-to-br from-indigo-900/40 via-black to-black border border-white/5 p-12 md:p-24 text-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none denim-texture-bg"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-[0.3em] uppercase mb-8">
              <Gift size={14} /> Be an Indigo Ally
            </div>
            <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Kontribusi <br/>
              <span className="text-indigo-400 italic font-serif">Kultur Kita.</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              ThreadState adalah proyek berbasis komunitas. Kontribusi Anda—sekecil apapun—adalah benang yang memperkuat kain kultur denim kita.
            </p>
          </div>
        </div>

        {/* Ways to Contribute Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {[
            {
              icon: <Camera className="text-indigo-400" size={32} />,
              title: "Dokumentasi Fading",
              desc: "Kirimkan foto perjalanan fading Anda. Foto Anda akan menjadi referensi berharga bagi pemula yang ingin melihat potensi kain tertentu.",
              action: "Unggah Foto"
            },
            {
              icon: <PenTool className="text-indigo-400" size={32} />,
              title: "Review Teknis",
              desc: "Apakah Anda baru membeli denim langka? Tulis ulasan tentang fit, fabric, dan hardware untuk membantu komunitas membuat pilihan.",
              action: "Tulis Review"
            },
            {
              icon: <Heart className="text-indigo-400" size={32} />,
              title: "Panduan Reparasi",
              desc: "Bagikan teknik darning atau sashiko Anda. Bantu sesama anggota untuk memperpanjang usia denim kesayangan mereka.",
              action: "Bagikan Tutorial"
            },
            {
              icon: <Share2 className="text-indigo-400" size={32} />,
              title: "Artisan Partner",
              desc: "Jika Anda adalah penjahit lokal atau brand artisan, mari berkolaborasi untuk menampilkan karya Anda di platform kami.",
              action: "Hubungi Kami"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-white/5 p-12 rounded-[3rem] hover:bg-white/5 transition-all group">
              <div className="mb-8 inline-flex p-5 bg-indigo-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {item.desc}
              </p>
              <button className="flex items-center gap-3 text-indigo-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                {item.action} <Star size={14} className="animate-pulse" />
              </button>
            </div>
          ))}
        </div>

        {/* Open Source / Community Spirit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">Kultur <span className="text-indigo-400">Terbuka</span></h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Kami percaya pada keterbukaan informasi. Semua data tentang berat kain, asal-usul kapas, dan teknik pewarnaan di ThreadState dikumpulkan secara gotong royong oleh para kolektor denim.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-white/5 rounded-lg text-indigo-400">
                  <Code size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Database Fabric</h5>
                  <p className="text-xs text-slate-500">Membantu memetakan ribuan jenis kain selvedge dari seluruh dunia.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-white/5 rounded-lg text-indigo-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Moderasi Konten</h5>
                  <p className="text-xs text-slate-500">Menjaga diskusi tetap sehat dan edukatif bagi semua level pecinta denim.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 p-1 rounded-[3rem]">
              <div className="bg-slate-950 p-12 rounded-[2.8rem] space-y-6">
                <h4 className="text-2xl font-bold text-center">Ready to contribute?</h4>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                  <select className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-400">
                    <option>Pilih Bidang Kontribusi</option>
                    <option>Menulis Review</option>
                    <option>Fotografi / Dokumentasi</option>
                    <option>Teknis Reparasi</option>
                    <option>Kemitraan Artisan</option>
                  </select>
                  <button className="w-full py-5 bg-indigo-600 rounded-2xl font-bold uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/40">
                    Kirim Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center py-20 border-t border-white/5">
          <p className="text-3xl font-serif italic text-white/40 max-w-3xl mx-auto">
            "We make the canvas, you provide the paint, but the story is what we weave together."
          </p>
          <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mt-8">ThreadState Core Vision</p>
        </div>
      </div>
    </section>
  );
};

export default ContributionSection;
