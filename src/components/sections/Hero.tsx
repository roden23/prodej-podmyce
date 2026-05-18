import { motion } from "motion/react";
import { TreePine, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-bg text-brand-text">
      <div className="absolute inset-0 opacity-20 filter grayscale">
        <img 
          src="/np-podyji.jpg" 
          alt="Podmyče Krajina" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[0.4em] text-[10px] mb-8 block font-sans font-bold text-gray-500">
            {t('hero.badge')}
          </span>
          <h1 className="text-6xl md:text-9xl font-semibold mb-10 leading-[0.9] serif tracking-tighter">
            {t('hero.title_main')} <br />
            <span className="italic font-normal">{t('hero.title_sub')}</span>
          </h1>
          <p className="text-lg md:text-xl font-normal max-w-2xl mx-auto mb-12 text-gray-600 leading-relaxed font-sans">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#pozemky" 
              className="bg-brand-text text-brand-bg px-10 py-4 font-bold text-xs uppercase tracking-widest transition-all hover:bg-gray-800"
            >
              {t('hero.cta_plots')}
            </a>
            <a 
              href="#kontakt" 
              className="border border-brand-border px-10 py-4 font-bold text-xs uppercase tracking-widest transition-all hover:bg-brand-border/50"
            >
              {t('hero.cta_contact')}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-400 uppercase text-[9px] tracking-[0.3em] font-bold"
      >
        <span>{t('hero.scroll')}</span>
        <div className="w-px h-16 bg-brand-border"></div>
      </motion.div>
    </section>
  );
}
