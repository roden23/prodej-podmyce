export type Parcel = {
  number: string;
  group: 'A' | 'B';
  note: string;
  area?: string;
  type?: string;
};

export type Fact = {
  label: string;
  value: string;
  detail?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const property = {
  title: 'Pozemky se stavbou v Podmyčích',
  kicker: 'Katastrální území Podmyče · parcely 153, 154, 155 a 156',
  claim: 'Čtyři parcely, dva pozemkové celky a jedna jedinečná příležitost.',
  intro:
    'Nabídka zahrnuje dva navazující pozemkové celky v katastrálním území Podmyče, které tvoří celek o celkové výměře ideální pro prostorné bydlení či rekreaci. První celek (parcely 155 a 156) obsahuje stavbu, druhý (parcely 153 a 154) navazuje jako rozlehlá zahrada. Při koupi obou celků získáte výjimečně velký a kompaktní pozemek s unikátním potenciálem.',
  location: 'Podmyče, Jihomoravský kraj',
  locationDetails: `Lokalita Podmyčí nabízí vzácnou kombinaci klidného venkovského prostředí a okamžité dostupnosti těch nejlepších aktivit, které jižní Morava nabízí.

- **Příroda a aktivní odpočinek:** Podmyče jsou ideální vstupní branou do Národního parku Podyjí. Pro milovníky cyklistiky a pěší turistiky jsou zde kilometry tras vedoucích říčními meandry Dyje až k rakouské hranici.
- **Bohaté zázemí Vranovska:** Během pár minut se dostanete do turistického centra Vranova nad Dyjí. Užijete si zde koupání a vodní sporty na Vranovské přehradě („moravském Jadranu“) nebo prohlídku barokního státního zámku, který je dominantou celého regionu.
- **Rodinné trávení volného času:** Lokalita je výjimečně přívětivá k rodinám. V bezprostřední blízkosti se nachází populární Vrunoff Park, rozsáhlý areál plný herních prvků a zábavy pro všechny generace, který skvěle doplňuje místní klid.

Ať už hledáte únik od městského shonu, zázemí pro rekreaci nebo prostor pro aktivní rodinný život, Podmyče vám nabídnou ideální rovnováhu.`,
  price: 'Cena bude doplněna',
  contactName: 'Martin · majitel nemovitosti',
  contactEmail: 'martin@rode.cz',
  contactPhone: '+420 602 740 346',
  facts: [
    { label: 'Lokalita', value: 'Podmyče', detail: 'klidná obec v okolí Vranova nad Dyjí' },
    { label: 'Parcely', value: '153, 154, 155, 156', detail: 'čtyři parcely ve dvou celcích' },
    { label: 'Pozemek A', value: '155 + 156', detail: 'pozemkový celek se stavbou' },
    { label: 'Pozemek B', value: '153 + 154', detail: 'druhý navazující celek' },
    { label: 'Sítě', value: 'elektřina, studna', detail: 'na pozemku je elektřina a kopaná studna' },
    { label: 'Právní stav', value: 'bez omezení', detail: 'pozemek je bez právních vad či břemen' },
    { label: 'Územní plán', value: 'k ověření', detail: 'je nutné si vyžádat Územně plánovací informaci na příslušném úřadě' },
  ] satisfies Fact[],
  parcels: [
    { number: '155', group: 'A', note: 'Součást celku A; na tomto celku je stavba.', area: '565 m²' },
    { number: '156', group: 'A', note: 'Součást celku A; návaznost na parcelu 155.', area: '1479 m²' },
    { number: '153', group: 'B', note: 'Součást celku B; samostatný navazující pozemek.', area: '459 m²' },
    { number: '154', group: 'B', note: 'Součást celku B; návaznost na parcelu 153.', area: '1037 m²' },
  ] satisfies Parcel[],
  needed: [
    'Prodejní cena a informace, zda lze celky koupit samostatně.',
    'Přesné výměry a druh pozemku u parcel 153, 154, 155 a 156.',
    'List vlastnictví, právní stav, věcná břemena a případná omezení.',
    'Typ, stav a využitelnost stavby včetně fotografií.',
    'Informace o přístupu, oplocení, terénu a aktuálním využití.',
    'Inženýrské sítě: elektřina, voda, kanalizace/septik/ČOV, plyn, studna.',
    'Zařazení v územním plánu a možnosti dalšího využití.',
    'Fotografie, dron, situační plánek, mapa a kontaktní údaje.',
  ],
  images: [
    { group: 'overview', src: 'map-cadastral.png', alt: 'Katastrální mapa celého území' },
    { group: 'B', src: 'map-cadastral-153-154.png', alt: 'Katastrální mapa parcel 153 a 154' },
    { group: 'overview', src: 'map-satellite.png', alt: 'Satelitní snímek celého území' },
    { group: 'B', src: 'map-satellite-153-154.png', alt: 'Satelitní snímek parcel 153 a 154' },
  ],
  faqs: [
    {
      question: 'Co přesně je předmětem prodeje?',
      answer:
        'Čtyři parcely v katastrálním území Podmyče: 155 a 156 tvoří celek se stavbou, 153 a 154 tvoří druhý pozemkový celek.',
    },
    {
      question: 'Je možné koupit pozemkové celky samostatně?',
      answer: 'Tuto informaci je potřeba doplnit podle rozhodnutí prodávajícího a právních možností.',
    },
    {
      question: 'Jaké jsou výměry parcel?',
      answer: 'Výměry zatím nejsou doplněné. Web má pro ně připravené místo po ověření v katastru.',
    },
    {
      question: 'Jaký je stav stavby?',
      answer: 'Detail stavby je potřeba doplnit: typ, technický stav, zastavěnou plochu a možnosti využití.',
    },
    {
      question: 'Jsou dostupné inženýrské sítě?',
      answer: 'Sítě je potřeba ověřit a doplnit. Bez ověření je web záměrně neprezentuje jako jistý fakt.',
    },
  ] satisfies Faq[],
};
