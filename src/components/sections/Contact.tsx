import { motion } from "motion/react";
import { Phone, Mail, User } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="py-32 px-4 bg-brand-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 serif tracking-tight">{t('contact.title')}</h2>        
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-text text-white p-12 shadow-sm flex flex-col justify-between max-w-2xl w-full"
          >
            <div>
              <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-12">
                 <User size={14} />
                 <span>{t('contact.badge')}</span>
              </div>                            
              <div className="space-y-10">
                <a 
                  href="mailto:martin@rode.cz" 
                  className="flex items-center gap-8 group w-fit"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-brand-text">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-30 tracking-widest mb-1">{t('contact.email')}</p>
                    <p className="text-2xl font-light">martin@rode.cz</p>
                  </div>
                </a>

                <a 
                  href={t('nav.phone_href')} 
                  className="flex items-center gap-8 group w-fit"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-brand-text">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-30 tracking-widest mb-1">{t('contact.phone')}</p>
                    <p className="text-2xl font-light">{t('nav.phone_btn')}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold opacity-30 italic">
              <span>{t('contact.footer_loc')}</span>
              <span className="text-right">{t('contact.footer_no_rk')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
