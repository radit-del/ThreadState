
import React from 'react';
import { Layers, Scissors, History, ShieldCheck } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <Layers className="text-indigo-600" size={32} />,
      title: "Sanforization",
      description: "Memahami perbedaan antara Unsanforized (pasti menyusut) dan Sanforized (minim penyusutan)."
    },
    {
      icon: <Scissors className="text-indigo-600" size={32} />,
      title: "Selvedge Edge",
      description: "Tepi kain yang ditenun rapat menggunakan mesin shuttle loom kuno, memberikan kekuatan ekstra."
    },
    {
      icon: <History className="text-indigo-600" size={32} />,
      title: "Warisan Budaya",
      description: "Menghormati tradisi pembuatan denim dari Jepang dan Amerika Serikat yang sudah ada sejak abad ke-19."
    },
    {
      icon: <ShieldCheck className="text-indigo-600" size={32} />,
      title: "Ketahanan Ekstrim",
      description: "Dibuat dengan berat oz yang lebih tinggi (14oz - 25oz+), menjadikannya celana paling awet yang pernah ada."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, idx) => (
        <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all group">
          <div className="mb-4 transform group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-indigo-950 mb-3">{feature.title}</h3>
          <p className="text-slate-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
