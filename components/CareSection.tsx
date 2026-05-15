
import React, { useState } from 'react';
import { 
  Droplets, 
  Wind, 
  Waves, 
  Hammer, 
  Clock,
  Package,
  Zap,
  Anchor,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Info,
  ArrowRight,
  ShoppingBag
} from 'lucide-react';

interface CareSectionProps {
  onNext?: () => void;
}

const CareSection: React.FC<CareSectionProps> = ({ onNext }) => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 0,
      label: "Bulan 0: Ritual Awal",
      title: "The Initial Soak",
      icon: <Droplets />,
      desc: "Langkah krusial sebelum pemakaian pertama, terutama untuk denim 'Unsanforized'.",
      steps: [
        "Balik celana (bagian dalam di luar) untuk menjaga pigmen.",
        "Rendam dalam air hangat (40°C) selama 45-60 menit.",
        "Jangan gunakan deterjen pada tahap ini.",
        "Jemur dengan cara diangin-anginkan (hang dry)."
      ],
      proTip: "Initial soak membuang kanji berlebih dan menstabilkan serat kain agar tidak menyusut drastis nantinya."
    },
    {
      id: 1,
      label: "Bulan 1-6: Break-In",
      title: "Daily Battle",
      icon: <Hammer />,
      desc: "Masa di mana denim mulai 'mengingat' bentuk tubuh dan aktivitas Anda.",
      steps: [
        "Gunakan sesering mungkin, minimal 5 hari seminggu.",
        "Hindari mencuci jika tidak sangat kotor atau bau.",
        "Jika berbau, gantung di luar ruangan semalaman.",
        "Gunakan 'Denim Spray' atau sinar matahari pagi untuk sterilisasi."
      ],
      proTip: "Semakin banyak aktivitas fisik, semakin kontras pola 'Whiskers' dan 'Honeycombs' yang akan terbentuk."
    },
    {
      id: 2,
      label: "Bulan 6+: First Wash",
      title: "The Moment of Truth",
      icon: <Waves />,
      desc: "Saatnya mengungkap hasil jerih payah pemakaian Anda selama berbulan-bulan.",
      steps: [
        "Gunakan air dingin dan deterjen khusus (pH netral).",
        "Rendam selama 30 menit tanpa dikucek keras.",
        "Bilas perlahan dan jangan diperas (wring).",
        "Jemur di tempat teduh tanpa terkena matahari langsung."
      ],
      proTip: "Pencucian pertama akan menyingkap warna biru indigo yang lebih terang dengan kontras putih yang tajam."
    }
  ];

  return (
    <section id="perawatan" className="py-12 bg-transparent text-white overflow-hidden relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">Care Protocol v2.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Cara Merawat Raw Denim</h2>
          <p className="text-indigo-200/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Raw denim membutuhkan pendekatan yang berbeda. Ini bukan sekadar mencuci pakaian, ini adalah <span className="text-white font-medium">konservasi seni</span>.
          </p>
        </div>

        {/* Timeline Navigator */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`px-6 py-4 rounded-2xl border transition-all flex items-center gap-3 ${
                activeStage === stage.id 
                ? 'bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-600/20 translate-y-[-4px]' 
                : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className={activeStage === stage.id ? 'text-white' : 'text-indigo-400'}>
                {stage.icon}
              </div>
              <span className="font-bold text-sm tracking-tight">{stage.label}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          <div className="lg:col-span-8">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{stages[activeStage].title}</h3>
                  <p className="text-indigo-200/60 italic">{stages[activeStage].desc}</p>
                </div>
                <div className="px-5 py-2 bg-indigo-500/20 rounded-full border border-indigo-500/30 flex items-center gap-2 text-indigo-300">
                  <Clock size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Duration: {activeStage === 0 ? '60m' : activeStage === 1 ? '6 Months' : '30m'}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">Panduan Langkah:</h4>
                  {stages[activeStage].steps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center shrink-0 text-xs font-bold group-hover:bg-indigo-600 transition-colors">
                        {i + 1}
                      </div>
                      <p className="text-indigo-50/90 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-900/40 border border-indigo-500/20 p-8 rounded-3xl relative overflow-hidden h-fit self-center">
                  <div className="absolute -top-4 -right-4 opacity-10">
                    <Info size={120} />
                  </div>
                  <h4 className="font-bold flex items-center gap-2 mb-4 text-amber-400">
                    <Zap size={18} /> Pro Tip:
                  </h4>
                  <p className="text-sm text-indigo-100/80 leading-relaxed italic">
                    "{stages[activeStage].proTip}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Package className="text-indigo-400" /> Wajib Dimiliki
              </h4>
              <div className="space-y-6">
                {[
                  { name: "Indigo Soap", desc: "Deterjen pH netral.", icon: <Droplets size={16} /> },
                  { name: "S-Hook", desc: "Hanger celana optimal.", icon: <Anchor size={16} /> },
                  { name: "Denim Spray", desc: "Anti-bakteri & bau.", icon: <Wind size={16} /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center group">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-indigo-600 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-[10px] text-indigo-400 uppercase tracking-tighter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold mb-6 text-indigo-400 uppercase text-xs tracking-widest">Aturan Emas:</h4>
              <div className="space-y-4">
                <div className="flex gap-3 items-center text-sm">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
                  <span className="text-emerald-50/80">Jemur di tempat teduh</span>
                </div>
                <div className="flex gap-3 items-center text-sm">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
                  <span className="text-emerald-50/80">Air dingin selalu terbaik</span>
                </div>
                <div className="flex gap-3 items-center text-sm">
                  <XCircle className="text-red-400 shrink-0" size={18} />
                  <span className="text-red-50/80">Dilarang masuk mesin pengering</span>
                </div>
                <div className="flex gap-3 items-center text-sm">
                  <XCircle className="text-red-400 shrink-0" size={18} />
                  <span className="text-red-50/80">Hindari sikat bulu keras</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sequential Navigation CTA */}
        {onNext && (
          <div className="p-12 md:p-20 bg-indigo-950/40 border border-indigo-400/20 rounded-[4rem] text-center mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="max-w-2xl mx-auto relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Siap Menulis Cerita Anda?</h3>
              <p className="text-slate-300 mb-10 text-lg">
                Anda sudah memiliki ilmunya, sekarang saatnya memilih kanvas yang tepat untuk memulai petualangan raw denim Anda.
              </p>
              <button 
                onClick={onNext}
                className="group px-12 py-5 bg-white text-indigo-950 font-bold rounded-full transition-all flex items-center gap-3 mx-auto hover:bg-indigo-50 shadow-xl"
              >
                Mulai Berbelanja <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Floating Health Tip */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
          <div className="bg-amber-400 p-4 rounded-2xl shadow-lg shadow-amber-400/20">
            <AlertCircle className="text-indigo-950" size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Peringatan Bau?</h4>
            <p className="text-indigo-200/60 text-sm leading-relaxed">
              Jika denim Anda mulai berbau namun Anda belum ingin mencucinya, masukkan ke dalam kantong kedap udara dan letakkan di dalam <span className="text-white font-medium underline underline-offset-4 decoration-indigo-400">freezer</span> selama 24 jam. Ini akan membunuh bakteri penyebab bau tanpa merusak pigmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;
