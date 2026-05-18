import { motion } from "motion/react";
import { Mountain, Waves, Map as MapIcon, Castle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function LocationDetails() {
  const { t } = useLanguage();

  const attractions = [
    {
      title: t('location.attr1.title'),
      description: t('location.attr1.desc'),
      icon: Waves,
      image: "/vranov-prehrada.jpg"
    },
    {
      title: t('location.attr2.title'),
      description: t('location.attr2.desc'),
      icon: Mountain,
      image: "/np-podyji.jpg"
    },
    {
      title: t('location.attr3.title'),
      description: t('location.attr3.desc'),
      icon: Castle,
      image: "/zamek-vranov.jpg"
    }
  ];

  return (
    <section id="lokalita" className="py-32 bg-white text-brand-text overflow-hidden border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-semibold mb-10 serif leading-[1.1] tracking-tight text-zinc-900">
              {t('location.title')} <br />
              <span className="italic font-normal text-zinc-500">{t('location.subtitle')}</span>
            </h2>
            <div className="space-y-6 text-base text-gray-500 font-sans leading-relaxed max-w-lg">
              <p>
                {t('location.desc1')}
              </p>
              <p>
                {t('location.desc2')}
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-brand-bg border border-brand-border flex items-center justify-center text-center p-12">
               <div className="space-y-8">
                 <div className="flex justify-center text-zinc-300">
                   <MapIcon size={64} strokeWidth={1} />
                 </div>
                 <h4 className="text-xl font-bold uppercase tracking-[0.25em] text-zinc-400">{t('location.strategic_title')}</h4>
                 <div className="space-y-4 text-sm font-semibold tracking-tight text-zinc-800">
                   <div className="flex justify-between gap-12 border-b border-brand-border pb-2">
                     <span>{t('location.dist_vranov_beach')}</span>
                     <span className="text-zinc-400">10 min</span>
                   </div>
                   <div className="flex justify-between gap-12 border-b border-brand-border pb-2">
                     <span>{t('location.dist_znojmo')}</span>
                     <span className="text-zinc-400">20 min</span>
                   </div>
                   <div className="flex justify-between gap-12 border-b border-brand-border pb-2">
                     <span>{t('location.dist_vranov_castle')}</span>
                     <span className="text-zinc-400">5 min</span>
                   </div>
                   <div className="flex justify-between gap-12 border-b border-brand-border pb-2">
                     <span>{t('location.dist_brno')}</span>
                     <span className="text-zinc-400">1 hod 15 min</span>
                   </div>
                   <div className="flex justify-between gap-12 border-b border-brand-border pb-2">
                     <span>{t('location.dist_vienna')}</span>
                     <span className="text-zinc-400">1 hod 30 min</span>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-bg border border-brand-border p-3 group"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6 transition-all duration-700">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
              </div>
              <div className="px-4 pb-6">
                <h4 className="text-lg font-bold mb-3 uppercase tracking-wider">{item.title}</h4>
                <p className="text-sm text-gray-500 font-sans leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
