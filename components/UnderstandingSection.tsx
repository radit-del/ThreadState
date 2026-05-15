
import React from 'react';
import { 
  Weight, 
  Dna, 
  History, 
  BadgeCheck,
  CheckCircle2,
  ArrowRightLeft,
  Layers,
  Search,
  Zap,
  Maximize2,
  BookOpen,
  Globe,
  Feather,
  ArrowRight
} from 'lucide-react';

interface UnderstandingSectionProps {
  onNext?: () => void;
}

const UnderstandingSection: React.FC<UnderstandingSectionProps> = ({ onNext }) => {
  const coreBasics = [
    {
      icon: <Weight size={28} />,
      title: "Ilmu Tentang Berat (OZ)",
      desc: "Raw denim diukur dalam Ounce (oz). 12-14oz cocok untuk pemula (nyaman), sementara 21oz+ adalah denim kelas berat (heavyweight) yang sangat kaku namun menghasilkan fading yang tajam dan dramatis.",
      accent: "bg-amber-500/10 text-amber-500"
    },
    {
      icon: <Dna size={28} />,
      title: "Struktur Selvedge",
      desc: "Ditenun dengan mesin shuttle loom kuno. Tepi kain yang terkunci rapat (self-edge) menjamin kekuatan lebih dan estetika klasik berupa garis merah/biru saat celana dilipat.",
      accent: "bg-red-500/10 text-red-500"
    },
    {
      icon: <History size={28} />,
      title: "Karakter Indigo",
      desc: "Pewarnaan indigo hanya melapisi bagian luar benang (rope dying). Seiring waktu, lapisan ini akan terkikis dan menyingkap inti benang yang putih, menciptakan efek kontras yang personal.",
      accent: "bg-indigo-500/10 text-indigo-400"
    }
  ];

  return (
    <section id="pengantar" className="py-24 bg-transparent overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Denim 101: Definisi & Sejarah */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                <BookOpen size={16} className="text-indigo-400" />
                <span className="text-indigo-400 font-bold uppercase text-[10px] tracking-widest">Denim 101: Fundamental</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
                Apa Itu <br/> 
                <span className="text-indigo-400">Denim?</span>
              </h2>
              
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Secara teknis, <span className="font-bold text-white italic">Denim</span> adalah kain katun kasar dengan anyaman <span className="underline decoration-indigo-500/30 underline-offset-4">twill</span> di mana benang pakan melewati di bawah dua atau lebih benang lungsin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-indigo-900 rounded-xl flex items-center justify-center text-white">
                    <Globe size={20} />
                  </div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-tighter">Asal Nama</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Berasal dari kota Nîmes di Prancis, kain ini awalnya disebut <span className="italic">"Serge de Nîmes"</span> yang kemudian disingkat menjadi "Denim".
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <Feather size={20} />
                  </div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-tighter">Konstruksi Unik</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Hanya benang lungsin yang diwarnai indigo, sementara pakan dibiarkan putih. Inilah rahasia mengapa jeans terlihat biru di luar namun putih di dalam.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-900/20 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop" 
                  alt="Denim Fabric Close Up" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-10">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Makroskopis</p>
                    <p className="text-2xl font-serif italic">The Diagonal Weave</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-slate-900 p-6 rounded-3xl shadow-xl border border-white/5 max-w-[240px] animate-float">
                <p className="text-indigo-400 font-bold text-3xl mb-1">1873</p>
                <p className="text-xs text-slate-400 font-medium leading-relaxed uppercase tracking-tighter">
                  Tahun saat Denim dengan rivet dipatenkan sebagai pakaian kerja resmi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-32"></div>

        {/* Header Edukasi */}
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-12 bg-indigo-600"></div>
              <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs">Modul 02: Filosofi Raw</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Memahami Kanvas Kosong: <br/>
              <span className="text-indigo-400 font-serif italic">Raw vs Pre-washed</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              Berbeda dengan jeans supermarket yang sudah dicuci pabrik (pre-washed), raw denim datang dalam keadaan murni. 
            </p>
          </div>
          <div className="lg:w-1/3 pb-2">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:scale-110 transition-transform">
                <Search size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeCheck className="text-indigo-400" />
                  <span className="font-bold text-white uppercase tracking-tighter">Mantra Utama</span>
                </div>
                <p className="text-lg text-slate-300 italic font-serif leading-relaxed">
                  "Wear often, wash seldom, be patient. Let the indigo tell your story."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Immersive Comparison Feature */}
        <div className="bg-black/50 border border-white/5 rounded-[3rem] p-4 md:p-12 mb-24 relative overflow-hidden backdrop-blur-sm">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase">
                Anatomi & Evolusi
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Bagaimana <span className="text-indigo-400 underline decoration-indigo-400/30 underline-offset-8">Transformasi</span> Itu Terjadi?
              </h3>
              
              <div className="space-y-6">
                {[
                  { title: "The Starch Phase", text: "Kain dilindungi oleh kanji (starch) yang membuatnya kaku, menjaga lipatan tetap tajam." },
                  { title: "The Creasing", text: "Setelah 1-2 bulan, area lutut dan selangkangan mulai membentuk lipatan permanen." },
                  { title: "The High Friction", text: "Gesekan berulang pada lipatan mulai mengikis warna indigo di bagian puncak lipatan." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                  alt="Raw Denim"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-sm tracking-widest uppercase">Hari Ke-1</p>
                  <p className="text-white/60 text-xs">Murni & Kaku</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                  alt="Faded Denim"
                />
                <div className="absolute inset-0 bg-indigo-950/40 flex flex-col justify-end p-6">
                  <p className="text-indigo-400 font-bold text-sm tracking-widest uppercase">Hari Ke-365</p>
                  <p className="text-white/60 text-xs">Karakter Terbentuk</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {coreBasics.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 hover:border-indigo-500/20 transition-all group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Maximize2 size={64} />
              </div>
              <div className={`${item.accent} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sequential Navigation CTA */}
        {onNext && (
          <div className="p-12 md:p-20 bg-gradient-to-br from-indigo-900/60 to-black border border-indigo-500/20 rounded-[4rem] text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 italic font-serif">"Pengetahuan adalah Langkah Pertama."</h3>
              <p className="text-indigo-200/60 mb-10 text-lg">
                Sekarang Anda sudah paham dasar-dasar raw denim. Tahap selanjutnya adalah mempelajari cara menjaga kanvas ini tetap prima selama bertahun-tahun.
              </p>
              <button 
                onClick={onNext}
                className="group px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all flex items-center gap-3 mx-auto shadow-2xl shadow-indigo-900/40"
              >
                Lanjut ke Panduan Perawatan <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UnderstandingSection;
