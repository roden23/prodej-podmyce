import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, Droplets, Zap, Home, CheckCircle2, Map as MapIcon, Globe, X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function PlotDetails() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activePlotId, setActivePlotId] = useState<number | null>(null);

  const photosViz = [
    "/gallery/visualizations/vizualizace-1.png",
    "/gallery/visualizations/vizualizace-2.png",
    "/gallery/visualizations/vizualizace-3.png",
    "/gallery/visualizations/vizualizace-4.png",
    "/gallery/visualizations/vizualizace-5.png",
    "/gallery/visualizations/vizualizace-6.png",
    "/gallery/visualizations/vizualizace-7.png",
    "/gallery/visualizations/vizualizace-8.png",
    "/gallery/visualizations/vizualizace-9.png",
  ];

  const photosA = [
    "/gallery/parcela-a/pozemek-A-1.jpeg",
    "/gallery/parcela-a/pozemek-A-2.jpeg",
    "/gallery/parcela-a/pozemek-A-3.jpeg",
    "/gallery/parcela-a/pozemek-A-4.jpeg",
    "/gallery/parcela-a/pozemek-A-5.jpeg",
    "/gallery/parcela-a/pozemek-A-6.jpeg",
    "/gallery/parcela-a/pozemek-A-7.jpeg",
    "/gallery/parcela-a/pozemek-A-8.jpeg",
    "/gallery/parcela-a/pozemek-A-9.jpeg",
    "/gallery/parcela-a/pozemek-A-10.jpeg",
    "/gallery/parcela-a/pozemek-A-11.jpeg",
    "/gallery/parcela-a/pozemek-A-12.jpeg",
    "/gallery/parcela-a/pozemek-A-13.jpeg",
    "/gallery/parcela-a/pozemek-A-14.jpeg",
    "/gallery/parcela-a/pozemek-A-15.jpeg",
    "/gallery/parcela-a/pozemek-A-16.jpeg",
    "/gallery/parcela-a/pozemek-A-17.jpeg"
  ];

  const photosB = [
    "/gallery/parcela-b/pozemek-B-1.jpeg",
    "/gallery/parcela-b/pozemek-B-2.jpeg",
    "/gallery/parcela-b/pozemek-B-3.jpeg",
    "/gallery/parcela-b/pozemek-B-5.jpeg",
    "/gallery/parcela-b/pozemek-B-6.jpeg",
    "/gallery/parcela-b/pozemek-B-7.jpeg"
  ];

  const plots = [
    {
      id: 1,
      title: t('plots.plot_a.title'),
      parcels: "155, 156",
      price: t('plots.plot_a.price'),
      features: [
        t('plots.plot_a.feat1'),
        t('plots.plot_a.feat2'),
        t('plots.plot_a.feat3'),
        t('plots.plot_a.feat4'),
        t('plots.plot_a.feat5'),
        t('plots.plot_a.feat6'),
      ],
      description: t('plots.plot_a.desc'),
      stats: [
        { icon: Maximize2, label: t('plots.stat_area'), value: t('plots.plot_a.stat_area') },
        { icon: Home, label: t('plots.stat_status'), value: t('plots.plot_a.stat_status') },
        { icon: Zap, label: t('plots.stat_networks'), value: t('plots.plot_a.stat_networks') },
        { icon: Droplets, label: t('plots.stat_water'), value: t('plots.plot_a.stat_water') }
      ],
      images: [
        "/parcela-155-156-satelit.png",
        "/parcela-155-156-mapa.png",
        ...photosA,
        ...photosViz
      ]
    },
    {
      id: 2,
      title: t('plots.plot_b.title'),
      parcels: "153, 154",
      price: t('plots.plot_b.price'),
      features: [
        t('plots.plot_b.feat1'),
        t('plots.plot_b.feat2'),
      ],
      description: t('plots.plot_b.desc'),
      stats: [
        { icon: Maximize2, label: t('plots.stat_area'), value: t('plots.plot_b.stat_area') },
        { icon: Home, label: t('plots.stat_status'), value: t('plots.plot_b.stat_status') },
        { icon: Zap, label: t('plots.stat_networks'), value: t('plots.plot_b.stat_networks') },      
      ],
      images: [
        "/parcela-153-154-satelit.png",
        "/parcela-153-154-mapa.png",
        ...photosB
      ]
    }
  ];

  const currentGallery = activePlotId !== null ? plots.find(p => p.id === activePlotId)?.images || [] : [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, activePlotId]);

  const navigate = (direction: number) => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + direction + currentGallery.length) % currentGallery.length;
    setSelectedIndex(newIndex);
  };

  const openLightbox = (plotId: number, index: number) => {
    setActivePlotId(plotId);
    setSelectedIndex(index);
  };

  return (
    <section id="pozemky" className="py-32 px-4 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 serif tracking-tight">{t('plots.title')}</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">{t('plots.subtitle')}</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-l-4 border-brand-text p-6 shadow-sm max-w-md"
          >
            <p className="text-sm font-semibold mb-2">{t('plots.adjacent_title')}</p>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              {t('plots.adjacent_desc')}
            </p>
          </motion.div>
        </div>

        <div className="grid gap-24">
          {plots.map((plot, idx) => (
            <PlotCard 
              key={plot.id} 
              plot={plot as any} 
              idx={idx} 
              onImageClick={(index) => openLightbox(plot.id, index)}
              t={t}
            />
          ))}
        </div>
        
        <div className="mt-32 pt-16 border-t border-brand-border flex flex-col md:flex-row justify-between items-start gap-12">
           <div className="max-w-md">
             <h4 className="text-2xl font-semibold serif mb-4">{t('plots.guarantee_title')}</h4>
             <p className="text-sm text-gray-500 leading-relaxed">
               {t('plots.guarantee_desc')}
             </p>
           </div>
           <div className="p-8 bg-zinc-900 text-white max-w-sm shadow-xl">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-50 italic">{t('plots.owner_note')}</p>
              <p className="text-lg serif italic leading-snug">{t('plots.owner_quote')}</p>
           </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && activePlotId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[60]"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-6 text-white/50 hover:text-white transition-colors z-[60] bg-white/5 p-4 rounded-full"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-6 text-white/50 hover:text-white transition-colors z-[60] bg-white/5 p-4 rounded-full"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentGallery[selectedIndex]} 
                alt="Detail" 
                className={`max-w-full max-h-full object-contain shadow-2xl ${selectedIndex < 2 ? 'bg-white p-2' : ''}`}
              />
              <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                  {plots.find(p => p.id === activePlotId)?.title} • {selectedIndex + 1} / {currentGallery.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface PlotCardProps {
  plot: {
    id: number;
    title: string;
    parcels: string;
    description: string;
    price: string;
    images: string[];
  };
  idx: number;
  onImageClick: (index: number) => void;
  t: (key: string) => string;
}

function PlotCard({ plot, idx, onImageClick, t }: PlotCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-brand-border p-8 md:p-12 shadow-sm flex flex-col gap-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="space-y-4 flex-1">
          <span className="inline-block px-3 py-1 bg-brand-text text-white text-[10px] uppercase font-bold tracking-tighter">
            {idx === 0 ? t('gallery.plot_a') : t('gallery.plot_b')}
          </span>
          <h3 className="text-3xl md:text-5xl font-semibold serif leading-tight">{plot.title}</h3>
          <p className="text-sm text-gray-500 font-sans max-w-2xl leading-relaxed">
            {plot.description}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-4xl md:text-5xl font-light tracking-tight">{plot.price}</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{t('plots.price_negotiable')}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-brand-border">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{t('plots.parcel_numbers')}</p>
          <p className="text-sm font-semibold">{plot.parcels}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{t('plots.utilities')}</p>
          <p className="text-sm font-semibold italic">{t('plots.electricity')}{idx === 0 ? `, ${t('plots.well')}` : ''}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{t('plots.main_benefits')}</p>
          <p className="text-sm font-semibold">{idx === 0 ? t('plots.plot_a_benefit') : t('plots.plot_b_benefit')}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{t('plots.legal_status')}</p>
          <p className="text-sm font-semibold text-green-700">{t('plots.clean_status')}</p>
        </div>
      </div>

      {/* Gallery inside the frame */}
      <div className="space-y-8">
        {/* Real life / Maps Group */}
        <div className="space-y-3">
          <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
            {t('plots.real_photos_title')}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {plot.images.map((img, i) => ({ img, i })).filter(({ img }) => !img.includes('visualizations')).map(({ img, i }) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                onClick={() => onImageClick(i)}
                className="aspect-[4/3] bg-brand-bg border border-brand-border cursor-pointer overflow-hidden group relative"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${i < 2 ? 'object-contain p-2 bg-white' : ''}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                {i === 1 && (
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-brand-text/80 text-white text-[8px] font-bold uppercase tracking-tighter">
                    {t('plots.map')}
                  </div>
                )}
                {i === 0 && (
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-brand-text/80 text-white text-[8px] font-bold uppercase tracking-tighter">
                    {t('plots.satellite')}
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Search size={16} className="text-white drop-shadow-md" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visualizations Group (only if they exist) */}
        {plot.images.some(img => img.includes('visualizations')) && (
          <div className="space-y-3 pt-4 border-t border-brand-border/50">
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
              {t('plots.viz_title')}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {plot.images.map((img, i) => ({ img, i })).filter(({ img }) => img.includes('visualizations')).map(({ img, i }) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => onImageClick(i)}
                  className="aspect-[4/3] bg-brand-bg border border-brand-border cursor-pointer overflow-hidden group relative"
                >
                  <img 
                    src={img} 
                    alt={`Visualization ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Search size={16} className="text-white drop-shadow-md" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
