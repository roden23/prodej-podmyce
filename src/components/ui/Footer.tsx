import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-20 bg-brand-bg text-gray-400 text-center border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold serif text-brand-text mb-8">{t('nav.title')} {t('nav.subtitle')}</h2>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
          <a href="#pozemky" className="hover:text-brand-text transition-colors">{t('nav.plots')}</a>
          <a href="#lokalita" className="hover:text-brand-text transition-colors">{t('nav.location')}</a>
          <a href="#kontakt" className="hover:text-brand-text transition-colors">{t('nav.contact')}</a>
        </div>
        <p className="max-w-md mx-auto text-sm font-sans italic mb-12 text-gray-400">
          {t('hero.description').split('.')[0]}. {t('footer.owner')}
        </p>
        <div className="text-[9px] uppercase tracking-[0.4em] opacity-50 font-bold flex flex-col items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Martin Rode • {t('footer.rights')}</span>
          <a href="/banner" target="_blank" className="text-white/20 hover:text-white/40 border border-white/5 px-3 py-1 rounded transition-colors">Reklamní Banner Design</a>
        </div>
      </div>
    </footer>
  );
}
