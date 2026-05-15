
import React from 'react';
import { Award, Users, Heart, Sparkles, MapPin, Mail, Instagram } from 'lucide-react';

interface AboutSectionProps {
  onNavigateContact?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateContact }) => {
  return (
    <section className="py-12 bg-transparent text-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase">
              The Modern Artisan
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Evolusi <br/>
              <span className="text-indigo-400 font-serif italic">Kultur Denim.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              Lahir dari dedikasi seorang pemuda yang percaya bahwa setiap goresan tangan dan jahitan memiliki jiwa.
            </p>
            <p className="text-slate-400 leading-relaxed">
              ThreadState bukan sekadar label, melainkan visi pribadi untuk membawa kembali kejujuran material ke dalam gaya hidup modern. Dimulai dari sketsa sederhana di atas meja kerja, kami membangun komunitas yang menghargai proses, bukan sekadar hasil instan.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">2018</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Founded</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Artisans</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">5k+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Members</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px]"></div>
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/5 group shadow-2xl">
              <img 
                src="https://raw.githubusercontent.com/Hafidzganteng09/Threadstate-image/main/Foto%20hafidz%20threadstate.jpg" 
                alt="ThreadState Founder & Lead Artisan" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex items-end p-10">
                <div className="backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10 w-full">
                  <h4 className="text-2xl font-serif italic text-white">"Identity is woven, not printed."</h4>
                  <p className="text-indigo-400 text-sm mt-2">— Founder, ThreadState</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-3xl -z-10 rotate-12 opacity-20 blur-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Award className="text-indigo-400" size={32} />,
              title: "Kualitas Tanpa Kompromi",
              desc: "Kami hanya menggunakan kain dari pabrik ternama dan teknik konstruksi vintage yang teruji waktu."
            },
            {
              icon: <Heart className="text-indigo-400" size={32} />,
              title: "Dibuat Dengan Etika",
              desc: "Menghargai setiap perajin dengan lingkungan kerja yang adil dan mendukung kesejahteraan mereka."
            },
            {
              icon: <Sparkles className="text-indigo-400" size={32} />,
              title: "Edukasi Berkelanjutan",
              desc: "Lebih dari sekadar menjual, kami ingin membangun komunitas yang paham dan menghargai nilai denim."
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 p-10 rounded-[3rem] hover:bg-white/10 transition-all text-center group">
              <div className="mb-6 inline-flex p-4 bg-indigo-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Team / Founders Placeholder */}
        <div className="bg-slate-900/60 rounded-[4rem] p-12 md:p-20 border border-white/5 relative overflow-hidden mb-32">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h3 className="text-3xl font-bold mb-4">Temui Tim Kami</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Kumpulan para kolektor, penjahit, dan desainer yang dipersatukan oleh cinta pada indigo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin size={18} className="text-indigo-400" />
                    <span className="text-sm">Bekasi, Jawa Barat</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail size={18} className="text-indigo-400" />
                    <span className="text-sm">hello@threadstate.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Instagram size={18} className="text-indigo-400" />
                    <span className="text-sm">@thread_09state</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                      <img 
                        src={`https://i.pravatar.cc/300?img=${i + 22}`} 
                        alt="Team Member" 
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">Artisan #{i}</h5>
                      <p className="text-[10px] uppercase text-indigo-400 tracking-widest">Master Tailor</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Bergabung Dengan Perjalanan Kami</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            Setiap pasang denim yang Anda beli membantu kami melestarikan teknik pembuatan pakaian tradisional di era modern.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={onNavigateContact}
              className="px-8 py-3 bg-indigo-600 rounded-full font-bold hover:bg-indigo-500 transition-all"
            >
              Kontak Kami
            </button>
            <a 
              href="https://www.instagram.com/thread_09state?igsh=MWk4Ym51dXoycmx4OQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all inline-block"
            >
              Ikuti Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
