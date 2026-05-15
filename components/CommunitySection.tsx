
import React from 'react';
import { Users, Shield, MessageCircle, Globe, Camera, Calendar, Star, Info } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-12 bg-transparent text-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Users size={14} /> Global Denim Syndicate
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Panduan <span className="text-indigo-400">Komunitas</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Raw denim bukan hanya tentang pakaian, tapi tentang komunitas yang saling mendukung dalam perjalanan panjang memudarkan warna.
          </p>
        </div>

        {/* Rules of the Syndicate */}
        <div className="mb-32">
          <div className="bg-slate-900/60 border border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Shield size={240} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-indigo-600 rounded-2xl">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight">Etiket Indigo</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: "No Wash Shame", desc: "Jangan pernah mencela orang yang mencuci denim mereka lebih cepat. Setiap perjalanan adalah personal." },
                  { title: "Saling Berbagi", desc: "Berikan tips perawatan atau info rilisan terbatas kepada sesama anggota komunitas." },
                  { title: "Hargai Artisan", desc: "Hormati kerja keras para penjahit dan pabrik kain dengan tidak mempromosikan produk bajakan." },
                  { title: "Dokumentasi Jujur", desc: "Bagikan hasil fading Anda tanpa filter berlebihan untuk memberikan referensi yang akurat." }
                ].map((rule, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="text-indigo-500 font-bold text-2xl font-serif italic">0{idx + 1}.</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-white">{rule.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Platforms Grid */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold mb-12 text-center">Temukan Kami Di Mana Saja</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="text-emerald-400" />,
                platform: "Discord",
                handle: "/indigo-syndicate",
                desc: "Diskusi real-time tentang fit, fabric, dan info sale terbaru."
              },
              {
                icon: <Camera className="text-pink-400" />,
                platform: "Instagram",
                handle: "#ThreadStateFades",
                desc: "Galeri visual harian dari hasil fading komunitas di seluruh dunia."
              },
              {
                icon: <Globe className="text-indigo-400" />,
                platform: "Reddit",
                handle: "r/rawdenim",
                desc: "Forum paling komprehensif untuk review mendalam dan diskusi teknis."
              }
            ].map((social, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-10 rounded-[3rem] hover:bg-white/10 transition-all group">
                <div className="mb-6 inline-flex p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <h4 className="text-2xl font-bold mb-1">{social.platform}</h4>
                <p className="text-indigo-400 text-sm font-bold mb-4">{social.handle}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {social.desc}
                </p>
                <button className="mt-6 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white flex items-center gap-2 transition-colors">
                  Gabung Sekarang <Star size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Events / Meetups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">Agenda <span className="text-indigo-400">Terdekat</span></h3>
            <p className="text-slate-400 leading-relaxed">
              Bergabunglah dalam acara tatap muka untuk bertukar cerita, melakukan 'fit check', dan tentunya melihat fading sesama kolektor secara langsung.
            </p>
            <div className="space-y-4">
              {[
                { date: "15 Juni 2024", event: "Indigo Picnic - Bekasi", loc: "Stadion Patriot Candrabhaga" },
                { date: "02 Juli 2024", event: "Workshop Repair & Darning", loc: "Indigo HQ Bekasi" },
                { date: "20 Agustus 2024", event: "Denim & Coffee Meetup", loc: "Bekasi City Center" }
              ].map((ev, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all cursor-pointer group">
                  <div className="bg-indigo-600 p-3 rounded-xl text-center min-w-[80px]">
                    <p className="text-[10px] font-bold uppercase text-indigo-200">Bulan</p>
                    <p className="text-lg font-bold">{ev.date.split(' ')[1].substring(0,3)}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{ev.event}</h5>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <Calendar size={10} /> {ev.date} • {ev.loc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[4rem] overflow-hidden border border-white/5 group h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop" 
              alt="Community Meetup" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-12">
               <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                 <p className="text-amber-400 font-bold uppercase text-[10px] tracking-widest mb-2 flex items-center gap-2">
                   <Info size={12} /> Spotlight
                 </p>
                 <p className="text-white font-medium text-sm italic">
                   "Pertama kali datang ke meetup, saya baru sadar bahwa hobi ini lebih dari sekadar celana—ini tentang persaudaraan."
                 </p>
                 <p className="text-indigo-400 text-xs mt-3">— Member #452</p>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-20 bg-indigo-900/40 rounded-[4rem] border border-indigo-500/20">
          <h2 className="text-4xl font-bold mb-6">Siap Menjadi Bagian Dari Kami?</h2>
          <p className="text-indigo-200/60 max-w-xl mx-auto mb-10">
            Daftarkan email Anda untuk menerima buletin komunitas eksklusif dan undangan ke acara-acara terbatas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email Anda..."
              className="flex-grow bg-black/40 border border-white/10 rounded-full px-8 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button className="px-10 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/40">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
