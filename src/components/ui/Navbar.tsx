import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.plots'), href: "#pozemky" },
    { name: t('nav.location'), href: "#lokalita" },
    { name: t('nav.gallery'), href: "#fotogalerie" },
    { name: t('nav.contact'), href: "#kontakt" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg py-4 border-b border-brand-border" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif tracking-tighter ${isScrolled ? "text-brand-text" : "text-white"}`}>
          {t('nav.title')} <span className="italic font-normal">{t('nav.subtitle')}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8 mr-4 border-r border-current pr-8 opacity-60">
            <button 
              onClick={() => setLanguage('cs')} 
              className={`flex items-center gap-2 text-xs uppercase font-bold tracking-widest transition-opacity hover:opacity-100 ${language === 'cs' ? 'underline decoration-2 underline-offset-4' : ''}`}
            >
              <span className="text-lg">🇨🇿</span> CZ
            </button>
            <button 
              onClick={() => setLanguage('de')} 
              className={`flex items-center gap-2 text-xs uppercase font-bold tracking-widest transition-opacity hover:opacity-100 ${language === 'de' ? 'underline decoration-2 underline-offset-4' : ''}`}
            >
              <span className="text-lg">🇩🇪</span> DE
            </button>
          </div>

          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors ${
                isScrolled ? "text-brand-text/70 hover:text-brand-text" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={t('nav.phone_href')}
            className={`px-6 py-2 border text-xs uppercase tracking-widest font-semibold transition-all ${
              isScrolled 
                ? "border-brand-text text-brand-text hover:bg-brand-text hover:text-white" 
                : "border-white/30 text-white hover:bg-white hover:text-brand-text"
            }`}
          >
            {t('nav.phone_btn')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <div className="flex items-center gap-6 mr-2">
            <button 
              onClick={() => setLanguage('cs')} 
              className={`flex items-center gap-1 text-[11px] uppercase font-bold tracking-widest ${isScrolled ? "text-brand-text" : "text-white"} ${language === 'cs' ? 'underline decoration-2 underline-offset-4' : 'opacity-40'}`}
            >
              <span className="text-base">🇨🇿</span> CZ
            </button>
            <button 
              onClick={() => setLanguage('de')} 
              className={`flex items-center gap-1 text-[11px] uppercase font-bold tracking-widest ${isScrolled ? "text-brand-text" : "text-white"} ${language === 'de' ? 'underline decoration-2 underline-offset-4' : 'opacity-40'}`}
            >
              <span className="text-base">🇩🇪</span> DE
            </button>
          </div>
          <button 
            className={`p-2 rounded-full ${isScrolled ? "text-brand-text" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-border overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-serif text-brand-text"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={t('nav.phone_href')}
                className="mt-4 bg-brand-text text-white p-4 text-center font-semibold text-sm uppercase tracking-widest"
              >
                {t('nav.share_btn')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
