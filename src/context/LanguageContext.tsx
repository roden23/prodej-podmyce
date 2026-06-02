
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cs' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  cs: {
    'nav.plots': 'Pozemky',
    'nav.location': 'Lokalita',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Kontakt',
    'nav.title': 'Pozemky',
    'nav.subtitle': 'Podmyče',
    'nav.phone_btn': '+420 602 740 346',
    'nav.phone_href': 'tel:+420602740346',
    'nav.share_btn': 'Sdílet kontakt',

    'hero.badge': 'Prodej pozemků • Podmyče',
    'hero.title_main': 'Váš nový domov',
    'hero.title_sub': 'v srdci Podyjí',
    'hero.description': 'Dva výjimečné, přímo sousedící stavební pozemky v klidné části na konci obce, na pomezí národního parku. Možnost koupě jednotlivě i jako celku.',
    'hero.cta_plots': 'Nabídka pozemků',
    'hero.cta_contact': 'Kontaktovat majitele',
    'hero.scroll': 'Scroll',

    'plots.title': 'Nabídka pozemků',
    'plots.subtitle': 'Znojemsko / obec Podmyče',
    'plots.adjacent_title': 'Sousedící pozemky',
    'plots.adjacent_desc': 'Pozemky spolu přímo sousedí, což nabízí unikátní možnost koupě celého celku o celkové výměře 3 576 m². Pozemky lze samozřejmě pořídit i samostatně.',
    'plots.guarantee_title': 'Garantovaná právní čistota',
    'plots.guarantee_desc': 'Všechny nabízené nemovitosti jsou v osobním vlastnictví bez jakýchkoliv zástav, exekucí či věcných břemen. Celý pozemek je dle platného územního plánu zastavitelný.',
    'plots.owner_note': 'Poznámka majitele',
    'plots.owner_quote': '"Pozemky v Podmyčích nabízíme přímo jako majitelé, v případě rychlého a seriózního jednání je možná dohoda na ceně."',
    'plots.price_negotiable': 'Cena k jednání',
    'plots.parcel_numbers': 'Čísla parcel',
    'plots.utilities': 'Inženýrské sítě',
    'plots.main_benefits': 'Hlavní výhody',
    'plots.legal_status': 'Právní stav',
    'plots.clean_status': 'Bez jakýchkoliv vad',
    'plots.electricity': 'Elektřina',
    'plots.well': 'studna',
    'plots.plot_a_benefit': 'RD v rekonstrukci',
    'plots.plot_b_benefit': 'Tvar a uliční šíře',
    'plots.satellite': 'Satelit',
    'plots.map': 'Mapa',
    'plots.image_not_found': 'Obrázek nenalezen',
    'plots.upload_instruction': 'Nahrajte prosím soubor',

    'plots.plot_a.title': 'Pozemek se stavbou 2044 m²',
    'plots.plot_a.desc': 'Tento rozlehlý pozemek nabízí ideální kombinaci soukromí a připravenosti k výstavbě. Na domě byla započata rekonstrukce, byly opraveny střešní trámy a zhotovena nová střecha z kvalitních betonových tašek včetně svodů. Stavba dává skvělou příležitost k dokončení dle vlastních představ.',
    'plots.plot_a.price': '1,6 mil. Kč',
    'plots.plot_a.feat1': 'Započatá rekonstrukce domu',
    'plots.plot_a.feat2': 'Nová střecha z betonových tašek a svody',
    'plots.plot_a.feat3': 'Opravené střešní trámy',
    'plots.plot_a.feat4': 'Elektrická přípojka',
    'plots.plot_a.feat5': 'Vlastní kopaná studna',
    'plots.plot_a.feat6': 'Celý pozemek je zastavitelný',
    'plots.plot_a.stat_area': '2044 m²',
    'plots.plot_a.stat_status': 'V rekonstrukci',
    'plots.plot_a.stat_networks': 'Elektřina na pozemku',
    'plots.plot_a.stat_water': 'Kopaná studna',

    'plots.plot_b.title': 'Pozemek 1532 m²',
    'plots.plot_b.desc': 'Prostorný pozemek ideální pro stavbu rodinného domu nebo rekreačního objektu. Kompletně připravený k okamžitému plánování stavby.',
    'plots.plot_b.price': '1 mil. Kč',
    'plots.plot_b.feat1': 'Elektrická přípojka',
    'plots.plot_b.feat2': 'Celý pozemek je zastavitelný',
    'plots.plot_b.stat_area': '1532 m²',
    'plots.plot_b.stat_status': 'Nezastavěný',
    'plots.plot_b.stat_networks': 'Elektřina na pozemku',

    'location.title': 'Podmyče:',
    'location.subtitle': 'Klid u bran národního parku',
    'location.desc1': 'Nabízené pozemky se nacházejí v klidné části na úplném konci obce Podmyče, v těsné blízkosti hranic s Rakouskem a Národního parku Podyjí. Jedná se o lokalitu s minimálním provozem, čistým vzduchem a výjimečným klidem.',
    'location.desc2': 'V okolí naleznete vyhlášenou Vranovskou přehradu, historické Znojmo i nekonečné cyklostezky skrze nedotčenou přírodu údolí řeky Dyje. Tato kombinace dělá z Podmyč ideální místo pro trvalé bydlení i rekreaci.',
    'location.strategic_title': 'Strategická poloha',
    'location.dist_vranov_beach': 'Vranovská pláž',
    'location.dist_znojmo': 'Znojmo',
    'location.dist_vranov_castle': 'Vranov nad Dyjí',
    'location.dist_brno': 'Brno',
    'location.dist_vienna': 'Vídeň (AT)',
    'location.attr1.title': 'Vranovská přehrada',
    'location.attr1.desc': "Letecký pohled na 'Moravský Jadran', vyhlášenou pláž a legendární lávku. Jen pár minut od domu najdete nepřeberné možnosti koupání a vodních sportů.",
    'location.attr2.title': 'Národní park Podyjí',
    'location.attr2.desc': 'Unikátní výhledy na terasovité vinice a hluboké kaňony řeky Dyje. Jeden z nejkrásnějších a nejzachovalejších koutů naší přírody.',
    'location.attr3.title': 'Zámek Vranov nad Dyjí',
    'location.attr3.desc': 'Barokní perla tyčící se na strmé skále nad řekou. Dominanta, kterou uvidíte z mnoha míst v okolí a která vás nikdy neomrzí.',

    'gallery.visualizations': 'Vizualizace rekonstrukce domu',
    'gallery.visualizations_sub': 'Jak by mohl vypadat váš budoucí domov',
    'gallery.title': 'Pohledy na pozemky',
    'gallery.subtitle': 'Zachyťte atmosféru místa',
    'gallery.all': 'Vše',
    'gallery.plot_a': 'Pozemek A',
    'gallery.plot_b': 'Pozemek B',
    'gallery.surroundings': 'Okolí',

    'contact.title': 'Kontakt',
    'contact.badge': 'Přímý kontakt',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    'contact.footer_loc': 'Jižní Morava / Podmyče',
    'contact.footer_no_rk': 'RK nevolat',

    'footer.rights': 'Všechna práva vyhrazena.',
    'footer.owner': 'Přímý prodej majitelem.',
    'gallery.alt_shot': 'Záběr z pozemku',
    'plots.alt_preview': 'Náhled',
    'plots.alt_for_parcels': 'pro parcely',
    'plots.real_photos_title': 'Mapy a fotografie',
    'plots.viz_title': 'Architektonické vizualizace',
  },
  de: {
    'nav.plots': 'Grundstücke',
    'nav.location': 'Standort',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Kontakt',
    'nav.title': 'Grundstücke',
    'nav.subtitle': 'Podmyče',
    'nav.phone_btn': '+49 151 57323512',
    'nav.phone_href': 'tel:+4915157323512',
    'nav.share_btn': 'Kontakt teilen',

    'hero.badge': 'Grundstücksverkauf • Podmyče',
    'hero.title_main': 'Ihr neues Zuhause',
    'hero.title_sub': 'im Herzen von Podyjí',
    'hero.description': 'Zwei außergewöhnliche, direkt aneinandergrenzende Baugrundstücke in ruhiger Lage am Rande des Dorfes, an der Grenze zum Nationalpark. Einzeln oder als Ganzes erwerbbar.',
    'hero.cta_plots': 'Grundstücksangebot',
    'hero.cta_contact': 'Besitzer kontaktieren',
    'hero.scroll': 'Scrollen',

    'plots.title': 'Grundstücksangebot',
    'plots.subtitle': 'Znojmo-Region / Gemeinde Podmyče',
    'plots.adjacent_title': 'Angrenzende Grundstücke',
    'plots.adjacent_desc': 'Die Grundstücke grenzen direkt aneinander, was die einmalige Möglichkeit bietet, das gesamte Ensemble mit einer Gesamtfläche von 3.576 m² zu erwerben. Die Grundstücke können natürlich auch einzeln erworben werden.',
    'plots.guarantee_title': 'Garantierte Rechtsklarheit',
    'plots.guarantee_desc': 'Alle angebotenen Immobilien befinden sich in Privatbesitz und sind frei von Pfandrechten, Zwangsvollstreckungen oder Dienstbarkeiten. Das gesamte Grundstück ist gemäß dem gültigen Flächennutzungsplan bebaubar.',
    'plots.owner_note': 'Anmerkung des Eigentümers',
    'plots.owner_quote': '"Wir bieten die Grundstücke in Podmyče direkt als Eigentümer an, bei schnellem und seriösem Handeln ist eine Preisvereinbarung möglich."',
    'plots.price_negotiable': 'Preis verhandelbar',
    'plots.parcel_numbers': 'Parzellennummern',
    'plots.utilities': 'Versorgungsleitungen',
    'plots.main_benefits': 'Hauptvorteile',
    'plots.legal_status': 'Rechtsstatus',
    'plots.clean_status': 'Mängelfrei',
    'plots.electricity': 'Strom',
    'plots.well': 'Brunnen',
    'plots.plot_a_benefit': 'Haus in Rekonstruktion',
    'plots.plot_b_benefit': 'Form und Straßenbreite',
    'plots.satellite': 'Satellit',
    'plots.map': 'Karte',
    'plots.image_not_found': 'Bild nicht gefunden',
    'plots.upload_instruction': 'Bitte laden Sie die Datei hoch',

    'plots.plot_a.title': 'Grundstück mit Bau 2044 m²',
    'plots.plot_a.desc': 'Dieses weitläufige Grundstück bietet eine ideale Kombination aus Privatsphäre und Baubereitschaft. Am Haus wurde mit der Rekonstruktion begonnen, die Dachbalken wurden repariert und ein neues Dach aus hochwertigen Betonziegeln samt Dachrinnen gefertigt. Der Bau bietet eine großartige Gelegenheit zur Fertigstellung nach eigenen Vorstellungen.',
    'plots.plot_a.price': '65 000 EUR',
    'plots.plot_a.feat1': 'Begonnene Hausrekonstruktion',
    'plots.plot_a.feat2': 'Neues Dach aus Betonziegeln und Dachrinnen',
    'plots.plot_a.feat3': 'Reparierte Dachbalken',
    'plots.plot_a.feat4': 'Stromanschluss',
    'plots.plot_a.feat5': 'Eigener gegrabener Brunnen',
    'plots.plot_a.feat6': 'Das gesamte Grundstück ist bebaubar',
    'plots.plot_a.stat_area': '2044 m²',
    'plots.plot_a.stat_status': 'In Rekonstruktion',
    'plots.plot_a.stat_networks': 'Strom auf dem Grundstück',
    'plots.plot_a.stat_water': 'Gegrabener Brunnen',

    'plots.plot_b.title': 'Grundstück 1532 m²',
    'plots.plot_b.desc': 'Großzügiges Grundstück, ideal für den Bau eines Familienhauses oder eines Freizeitobjekts. Komplett vorbereitet für die sofortige Bauplanung.',
    'plots.plot_b.price': '41 000 EUR',
    'plots.plot_b.feat1': 'Stromanschluss',
    'plots.plot_b.feat2': 'Das gesamte Grundstück ist bebaubar',
    'plots.plot_b.stat_area': '1532 m²',
    'plots.plot_b.stat_status': 'Unbebaut',
    'plots.plot_b.stat_networks': 'Strom auf dem Grundstück',

    'location.title': 'Podmyče:',
    'location.subtitle': 'Ruhe vor den Toren des Nationalparks',
    'location.desc1': 'Die angebotenen Grundstücke befinden sich in einem ruhigen Teil am Ende des Dorfes Podmyče, in unmittelbarer Nähe zur Grenze zu Österreich und zum Nationalpark Thayatal (Podyjí). Es ist eine Lage mit minimalem Verkehr, sauberer Luft und außergewöhnlicher Ruhe.',
    'location.desc2': 'In der Umgebung finden Sie die berühmte Vranov-Talsperre, das historische Znojmo sowie endlose Radwege durch die unberührte Natur des Thayatals. Diese Kombination macht Podmyče zu einem idealen Ort für dauerhaftes Wohnen und Erholung.',
    'location.strategic_title': 'Strategische Lage',
    'location.dist_vranov_beach': 'Strand von Vranov',
    'location.dist_znojmo': 'Znaim (Znojmo)',
    'location.dist_vranov_castle': 'Schloss Vranov nad Dyjí',
    'location.dist_brno': 'Brünn (Brno)',
    'location.dist_vienna': 'Wien (AT)',
    'location.attr1.title': 'Vranov-Talsperre',
    'location.attr1.desc': "Luftaufnahme der 'Mährischen Adria', des berühmten Strandes und des legendären Stegs. Nur wenige Minuten vom Haus entfernt finden Sie unzählige Möglichkeiten zum Schwimmen und für Wassersport.",
    'location.attr2.title': 'Nationalpark Podyjí',
    'location.attr2.desc': 'Einzigartige Ausblicke auf terrassierte Weinberge und tiefe Schluchten der Thaya. Eine der schönsten und am besten erhaltenen Ecken unserer Natur.',
    'location.attr3.title': 'Schloss Vranov nad Dyjí',
    'location.attr3.desc': 'Eine Barockperle auf einem steilen Felsen über dem Fluss. Ein Wahrzeichen, das Sie von vielen Orten in der Umgebung sehen werden und das Sie nie langweilen wird.',

    'gallery.visualizations': 'Visualisierung der Hausrekonstruktion',
    'gallery.visualizations_sub': 'Wie Ihr zukünftiges Zuhause aussehen könnte',
    'gallery.title': 'Ansichten der Grundstücke',
    'gallery.subtitle': 'Fangen Sie die Atmosphäre des Ortes ein',
    'gallery.all': 'Alle',
    'gallery.plot_a': 'Grundstück A',
    'gallery.plot_b': 'Grundstück B',
    'gallery.surroundings': 'Umgebung',

    'contact.title': 'Kontakt',
    'contact.badge': 'Direkter Kontakt',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.footer_loc': 'Südmähren / Podmyče',
    'contact.footer_no_rk': 'Keine Makler',

    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.owner': 'Direktverkauf durch den Eigentümer.',
    'gallery.alt_shot': 'Aufnahme vom Grundstück',
    'plots.alt_preview': 'Vorschau',
    'plots.alt_for_parcels': 'für Parzellen',
    'plots.real_photos_title': 'Karten & Fotografie',
    'plots.viz_title': 'Architektonische Visualisierungen',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('cs');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
