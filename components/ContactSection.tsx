
import React from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send, Clock, Globe } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah dikirim ke tim Artisan ThreadState.");
  };

  const contactItems = [
    { 
      icon: <MapPin className="text-indigo-400" size={24} />, 
      title: "Workshop & Showroom", 
      detail: "Jl. Indigo Craft No. 12, Bekasi, Jawa Barat",
      link: "https://maps.google.com/?q=Bekasi+Jawa+Barat"
    },
    { 
      icon: <Mail className="text-indigo-400" size={24} />, 
      title: "Email Support", 
      detail: "hello@threadstate.com",
      link: "mailto:hello@threadstate.com"
    },
    { 
      icon: <Phone className="text-indigo-400" size={24} />, 
      title: "WhatsApp Center", 
      detail: "+62 815 5338 0275",
      link: "https://wa.me/6281553380275"
    },
    { 
      icon: <Clock className="text-indigo-400" size={24} />, 
      title: "Jam Operasional", 
      detail: "Senin - Jumat: 09:00 - 18:00 WIB",
      link: null
    }
  ];

  return (
    <section className="py-12 bg-transparent text-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Connect with Artisans
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Mari <span className="text-indigo-400 italic font-serif">Berdiskusi.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Apakah Anda memiliki pertanyaan tentang fit, pesanan khusus, atau ingin berkonsultasi tentang reparasi denim? Tim artisan kami siap membantu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Informasi <span className="text-indigo-400">Kontak</span></h3>
              <div className="space-y-6">
                {contactItems.map((item, idx) => {
                  const Content = (
                    <div className="flex gap-6 group">
                      <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-indigo-600/20 transition-all border border-white/5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-widest">{item.title}</h4>
                        <p className={`text-slate-400 text-sm leading-relaxed ${item.link ? 'group-hover:text-indigo-400 transition-colors underline underline-offset-4 decoration-indigo-500/30' : ''}`}>{item.detail}</p>
                      </div>
                    </div>
                  );

                  return item.link ? (
                    <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                      {Content}
                    </a>
                  ) : (
                    <div key={idx}>{Content}</div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-indigo-400 uppercase text-xs tracking-widest">Ikuti Kami</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, label: "@thread_09state", link: "https://www.instagram.com/thread_09state?igsh=MWk4Ym51dXoycmx4OQ==" },
                  { icon: <MessageCircle size={20} />, label: "Community Discord", link: "https://discord.gg" },
                  { icon: <Globe size={20} />, label: "Artisan Blog", link: "#" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 bg-indigo-900/20 border border-indigo-500/20 rounded-[2.5rem]">
              <p className="text-sm text-indigo-100/70 italic leading-relaxed">
                "Kami lebih senang mengobrol sambil minum kopi di workshop. Jika Anda di Bekasi, pintu kami selalu terbuka untuk sesama pecinta denim."
              </p>
              <div className="mt-6">
                 <a 
                   href="https://wa.me/6281553380275?text=Halo%20Artisan%20ThreadState,%20saya%20ingin%20berkonsultasi..."
                   className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all text-xs uppercase tracking-widest"
                 >
                   <Phone size={14} /> Chat Via WhatsApp
                 </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 border border-white/5 rounded-[4rem] p-12 md:p-16 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8">Kirim <span className="text-indigo-400">Pesan</span></h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Masukkan nama Anda..."
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@contoh.com"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Subjek</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-400">
                    <option>Pertanyaan Umum</option>
                    <option>Konsultasi Custom Order</option>
                    <option>Layanan Reparasi / Darning</option>
                    <option>Kolaborasi Artisan</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Pesan Anda</label>
                  <textarea 
                    rows={6}
                    required
                    placeholder="Tuliskan detail pertanyaan atau masukan Anda di sini..."
                    className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-3 group"
                >
                  Kirim Pesan <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-32 text-center py-20 border-t border-white/5">
          <p className="text-2xl font-serif italic text-white/30 max-w-2xl mx-auto">
            "Setiap jahitan yang lepas, setiap warna yang pudar, adalah awal dari percakapan baru."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
