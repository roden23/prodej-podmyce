import { property } from './data/property';
import './styles/globals.css';

const navItems = [
  ['Přehled', 'prehled'],
  ['Parcely', 'parcely'],
  ['Stavba', 'stavba'],
  ['Lokalita', 'lokalita'],
  ['Kontakt', 'kontakt'],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Zpět nahoru">
        <span className="brand-mark">P</span>
        <span>Podmyče</span>
      </a>
      <nav aria-label="Hlavní navigace">
        {navItems.map(([label, id]) => (
          <button key={id} onClick={() => scrollToId(id)}>
            {label}
          </button>
        ))}
      </nav>
      <button className="nav-cta" onClick={() => scrollToId('kontakt')}>
        Kontaktovat majitele
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">{property.kicker}</p>
        <h1>{property.title}</h1>
        <p className="lead">{property.claim}</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => scrollToId('kontakt')}>
            Kontaktovat majitele
          </button>
          <button className="secondary" onClick={() => scrollToId('parcely')}>
            Zobrazit parcely
          </button>
        </div>
      </div>
      <div className="hero-card" aria-label="Vizualizace pozemků">
        <div className="sun" />
        <div className="plot plot-a">
          <strong>Pozemek A</strong>
          <span>155 + 156</span>
          <small>se stavbou</small>
        </div>
        <div className="plot plot-b">
          <strong>Pozemek B</strong>
          <span>153 + 154</span>
          <small>navazující celek</small>
        </div>
        <div className="house">⌂</div>
      </div>
    </section>
  );
}

function QuickFacts() {
  return (
    <section id="prehled" className="section">
      <div className="section-heading">
        <p className="eyebrow">Rychlý přehled</p>
        <h2>Co nabídka obsahuje</h2>
        <p>{property.intro}</p>
      </div>
      <div className="facts-grid">
        {property.facts.map((fact) => (
          <article className="fact-card" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
            <small>{fact.detail}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function Description() {
  return (
    <section className="section split">
      <div>
        <p className="eyebrow">Popis nemovitosti</p>
        <h2>Klidné místo s praktickým rozdělením na dva celky</h2>
      </div>
      <div className="prose">
        <p>
          Hledáte prostor, který může sloužit pro rekreaci, vlastní bydlení nebo jako dlouhodobá investice?
          Tato nabídka v Podmyčích kombinuje pozemkový celek se stavbou a druhý navazující pozemek.
        </p>
        <p>
          Web zatím používá bezpečné formulace bez neověřených tvrzení. Jakmile doplníme výměry, stavbu,
          sítě, územní plán, cenu a fotografie, lze jej rychle proměnit ve finální prodejní prezentaci.
        </p>
        <button className="text-button" onClick={() => scrollToId('kontakt')}>
          Chci doplnit podklady →
        </button>
      </div>
    </section>
  );
}

function Parcels() {
  const groups = [
    { id: 'A', title: 'Pozemek A', subtitle: 'parcely 155 + 156 · se stavbou' },
    { id: 'B', title: 'Pozemek B', subtitle: 'parcely 153 + 154 · druhý pozemkový celek' },
  ] as const;

  return (
    <section id="parcely" className="section surface">
      <div className="section-heading">
        <p className="eyebrow">Parcely</p>
        <h2>Dva pozemkové celky</h2>
        <p>Přehled je připravený pro doplnění přesných výměr, druhů pozemků a mapových podkladů.</p>
      </div>
      <div className="parcel-layout">
        {groups.map((group) => (
          <article className="parcel-group" key={group.id}>
            <div className="group-header">
              <span>{group.title}</span>
              <strong>{group.subtitle}</strong>
            </div>
            <div className="parcel-list">
              {property.parcels
                .filter((parcel) => parcel.group === group.id)
                .map((parcel) => (
                  <div className="parcel-card" key={parcel.number}>
                    <span>Parcela {parcel.number}</span>
                    <strong>{parcel.area}</strong>
                    <small>{parcel.note}</small>
                  </div>
                ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Building() {
  return (
    <section id="stavba" className="section split">
      <div>
        <p className="eyebrow">Stavba</p>
        <h2>Stavba na celku 155 + 156</h2>
      </div>
      <div className="prose callout">
        <p>
          Stavba je důležitý prodejní argument, ale před finální publikací potřebujeme ověřit její právní a
          technický stav. Připravené místo počítá s typem stavby, zastavěnou plochou, fotkami, napojením na
          sítě a možnostmi rekonstrukce či dalšího využití.
        </p>
        <ul>
          <li>typ stavby a zápis v katastru,</li>
          <li>technický stav a případné rekonstrukce,</li>
          <li>fotografie exteriéru a interiéru,</li>
          <li>napojení na sítě a praktická využitelnost.</li>
        </ul>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="lokalita" className="section location">
      <div className="section-heading">
        <p className="eyebrow">Lokalita</p>
        <h2>Podmyče: Oáza klidu s aktivním zázemím</h2>
        <div className="prose">
          {property.locationDetails.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="map-placeholder">
        <span>Mapa / situační plánek</span>
        <strong>Podklady doplnit po ověření licence</strong>
      </div>
    </section>
  );
}

function Gallery() {
  const groups = [
    { id: 'overview', title: 'Celkový přehled' },
    { id: 'A', title: 'Pozemek A' },
    { id: 'B', title: 'Pozemek B' },
  ] as const;

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Mapy a fotografie</p>
        <h2>Mapové podklady a satelitní snímky</h2>
      </div>
      <div className="gallery-grid">
        {groups.map((group) => (
          <div key={group.id} className="image-group">
            <h3>{group.title}</h3>
            <div className="image-container">
              {property.images
                .filter((image) => image.group === group.id)
                .map((image) => (
                  <div className="photo-placeholder small" key={image.src}>
                    <img src={`/images/${image.src}`} alt={image.alt} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section price-card">
      <div>
        <p className="eyebrow">Cena a podmínky</p>
        <h2>{property.price}</h2>
        <p>
          Doplníme prodejní cenu, informaci o právním servisu, úschově, provizi a možnosti koupě celků
          společně nebo samostatně.
        </p>
      </div>
      <button className="primary" onClick={() => scrollToId('kontakt')}>
        Zajímá mě cena a podmínky
      </button>
    </section>
  );
}

function NeededInfo() {
  return (
    <section className="section surface">
      <div className="section-heading">
        <p className="eyebrow">Co doplnit</p>
        <h2>Podklady potřebné pro finální web</h2>
      </div>
      <div className="needed-grid">
        {property.needed.map((item, index) => (
          <div className="needed-item" key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>Časté otázky</h2>
      </div>
      <div className="faq-list">
        {property.faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section contact">
      <div>
        <p className="eyebrow">Kontakt</p>
        <h2>Přímý kontakt na majitele</h2>
        <p>
          Nemovitost prodává přímo majitel. Formulář je zatím front-end demonstrace; pro produkci doplníme
          e-mailový endpoint, GDPR text a reálné kontaktní údaje.
        </p>
        <div className="contact-links">
          <span>{property.contactName}</span>
          <span>{property.contactPhone}</span>
          <span>{property.contactEmail}</span>
        </div>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Jméno
          <input type="text" placeholder="Vaše jméno" />
        </label>
        <label>
          E-mail
          <input type="email" placeholder="vas@email.cz" />
        </label>
        <label>
          Telefon
          <input type="tel" placeholder="+420 ..." />
        </label>
        <label>
          Zpráva
          <textarea rows={4} placeholder="Mám zájem o více informací k nemovitosti…" />
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          <span>Souhlasím se zpracováním osobních údajů pro účely kontaktování.</span>
        </label>
        <button className="primary" type="submit">
          Odeslat poptávku
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Pozemky Podmyče</span>
      <span>Prezentační návrh — finální údaje ověřit před publikací.</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickFacts />
        <Description />
        <Parcels />
        <Building />
        <Location />
        <Gallery />
        <Pricing />
        <NeededInfo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
