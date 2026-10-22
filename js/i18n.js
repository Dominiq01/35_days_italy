/* Translations (EN / PL / IT).
 * Text in [BRACKETS] is a placeholder: replace it with your own words in all three languages.
 * {placeholders} in curly braces are filled in by main.js.
 */
const TRANSLATIONS = {
  en: {
    "nav.about": "About",
    "nav.challenge": "Challenge",
    "nav.route": "Route",
    "nav.donate": "Donate",
    "nav.partners": "Partners",
    "nav.contact": "Contact",

    "cta.donate": "Donate",
    "cta.donateNow": "Donate now",
    "cta.route": "See the route",
    "cta.partner": "Become a partner",

    "hero.tagline": "35 marathons.<br>35 days. Italy.",
    "hero.lead": "From Melito di Porto Salvo, the southernmost tip of mainland Italy, to Como at the foot of the Alps: a full marathon every day for 35 days, for free psychological help from Fundacja Twarze Depresji.",
    "hero.photoAlt": "Runner on the road",

    "countdown.before": "Start in",
    "countdown.days": "days",
    "countdown.hours": "hours",
    "countdown.minutes": "min",
    "countdown.live": "On the road",
    "countdown.during": "Day {day} of 35",
    "countdown.after": "Finished. Thank you!",

    "challenge.kicker": "The challenge",
    "challenge.title": "One country. One marathon a day.",
    "challenge.lead": "No rest days. Heat, hills, sore legs and 35 sunrises in a row. Every kilometre is a step against the silence that surrounds depression.",

    "stats.days": "days",
    "stats.marathons": "marathons",
    "stats.perDay": "km every day",
    "stats.total": "km in total",

    "about.kicker": "Who I am",
    "about.title": "Why I'm running",
    "about.story": "[Your story goes here: who you are, how you got into running, and why this cause matters to you. Two or three short, honest paragraphs work best.]",
    "about.photoAlt": "Portrait",

    "foundation.title": "Fundacja Twarze Depresji",
    "foundation.text": "The \"Faces of Depression\" Foundation runs Poland's longest-standing public campaign about depression, \"Twarze depresji. Nie oceniam. Akceptuję\" (I don't judge. I accept), and gives people free professional help.",
    "foundation.link": "Visit the foundation",

    "route.kicker": "The route",
    "route.title": "From the sea to the Alps",
    "route.lead": "Tap a stage to zoom in. The route may change slightly as the plan comes together.",
    "route.stages": "Stages",
    "route.showAll": "Show all",
    "route.day": "Day {day}",
    "route.start": "Start",
    "route.finish": "Finish",
    "route.error": "The route couldn't be loaded. If you opened the file directly, start a local server (see README).",

    "donate.kicker": "Support the run",
    "donate.title": "Every kilometre counts",
    "donate.lead": "Your donation goes straight to Fundacja Twarze Depresji. Pick a kilometre, a whole marathon, or any amount you like.",
    "donate.raised": "raised",
    "donate.goal": "goal",
    "donate.tierKm": "sponsors 1 kilometre",
    "donate.tierMarathon": "sponsors a whole marathon",
    "donate.tierAny": "Any amount",
    "donate.tierAnyText": "keeps me going",

    "partners.kicker": "Partners",
    "partners.title": "Become a partner of my run",
    "partners.lead": "I'm looking for the first companies to hit the road with me.",
    "partners.slot": "Your logo",

    "follow.kicker": "Follow along",
    "follow.lead": "Daily updates, photos and Strava logs from the road. If I'm passing through your town, come and run a few kilometres with me!",

    "contact.emailLabel": "Email",
    "contact.title": "Let's talk",

    "nav.needs": "What I need",
    "cta.needs": "See what I need",
    "cta.help": "I can help",
    "foundation.item1": "Free remote psychological help and psychiatric consultations, including for children, teenagers and parents",
    "foundation.item2": "A psychological counselling centre in Warsaw",
    "foundation.item3": "Education campaigns against the stigma of depression",
    "foundation.note": "Money from the fundraiser goes directly to the foundation, not to me.",
    "needs.kicker": "What I need",
    "needs.title": "Help me get to Como",
    "needs.lead": "I'm doing this with no budget. Each of these things decides whether I reach the finish. In-kind support is just as valuable as money.",
    "needs.camper.flag": "Top priority: without it the run can't happen",
    "needs.camper.title": "Camper van",
    "needs.camper.text": "The camper is my home, kitchen, recovery room and base for 35 days. I'm looking for a rental company, a dealer or a private owner willing to lend a vehicle for the expedition. It will appear in photos and videos every day, in dozens of places across Italy.",
    "needs.camper.periodLabel": "Period",
    "needs.camper.period": "approx. 15 Apr – 26 May 2027",
    "needs.camper.formLabel": "Form",
    "needs.camper.form": "rental or loan",
    "needs.camper.pickupLabel": "Pick-up",
    "needs.camper.pickup": "to be agreed",
    "needs.camper.returnLabel": "In return",
    "needs.camper.return": "vehicle branding, daily content",
    "needs.tag": "Needed",
    "needs.n1.title": "Camper driver",
    "needs.n1.text": "A person or volunteer to drive the camper and support me on the road for 35 days.",
    "needs.n2.title": "Fuel, tolls, campsites",
    "needs.n2.text": "Camper travel costs for about 1,500 km, motorway tolls and stopovers with water and power.",
    "needs.n3.title": "Shoes and running kit",
    "needs.n3.text": "Several pairs of shoes to rotate, socks, shirts and gear for both rain and heat.",
    "needs.n4.title": "Nutrition and food",
    "needs.n4.text": "Gels, electrolytes, bars and food for 35 days of running a marathon a day.",
    "needs.n5.title": "Physio and recovery",
    "needs.n5.text": "Physiotherapy before the start and along the route, plus recovery equipment.",
    "needs.n6.title": "Insurance and GPS",
    "needs.n6.text": "Insurance for the expedition and a GPS tracker so anyone can follow the run live.",
    "benefits.kicker": "For partners",
    "benefits.title": "What you get",
    "benefits.lead": "I don't promise millions of views. I promise honest cooperation, a real story and content you can't shoot in a studio.",
    "benefits.b1.title": "Your brand on the road",
    "benefits.b1.text": "Your logo on my shirt, the camper and this website, during the run and after it.",
    "benefits.b2.title": "Content for your marketing",
    "benefits.b2.text": "Photos and videos of your product in action: Calabria, the Cilento coast, Rome, Tuscany, the Alps. Use them on your own channels.",
    "benefits.b3.title": "Backing a good cause",
    "benefits.b3.text": "A concrete, visible CSR project about mental health, a topic that matters to customers and employees.",
    "benefits.b4.title": "Tested in extreme conditions",
    "benefits.b4.text": "Your product goes through about 1,500 km and 35 days of real use. You get an honest account of how it held up.",
    "benefits.b5.title": "Thanks and stories",
    "benefits.b5.text": "Dedicated posts, tags in stories from the road and a thank-you in the final summary of the run.",
    "benefits.b6.title": "Meet on the route",
    "benefits.b6.text": "If you're on the route, I'll stop by. We can also meet at the finish in Como.",
    "partners.slotCamper": "Camper partner",
    "partners.slotGear": "Gear partner",
    "partners.slotFood": "Nutrition partner",
    "contact.lead": "Write or call. I reply personally, usually the same day. I speak Polish, Italian and English.",
    "contact.phoneLabel": "Phone",
    "contact.whatsappLabel": "WhatsApp",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "footer.note": "A charity run for Fundacja Twarze Depresji."
  },

  pl: {
    "nav.about": "O mnie",
    "nav.challenge": "Wyzwanie",
    "nav.route": "Trasa",
    "nav.donate": "Wesprzyj",
    "nav.partners": "Partnerzy",
    "nav.contact": "Kontakt",

    "cta.donate": "Wesprzyj",
    "cta.donateNow": "Wesprzyj teraz",
    "cta.route": "Zobacz trasę",
    "cta.partner": "Zostań partnerem",

    "hero.tagline": "35 maratonów.<br>35 dni. Włochy.",
    "hero.lead": "Z Melito di Porto Salvo, najdalej wysuniętego na południe punktu kontynentalnych Włoch, do Como u stóp Alp: pełny maraton codziennie przez 35 dni, dla bezpłatnej pomocy psychologicznej Fundacji Twarze Depresji.",
    "hero.photoAlt": "Biegacz na trasie",

    "countdown.before": "Start za",
    "countdown.days": "dni",
    "countdown.hours": "godz.",
    "countdown.minutes": "min",
    "countdown.live": "Jestem w trasie",
    "countdown.during": "Dzień {day} z 35",
    "countdown.after": "Meta. Dziękuję!",

    "challenge.kicker": "Wyzwanie",
    "challenge.title": "Jeden kraj. Maraton dziennie.",
    "challenge.lead": "Bez dni przerwy. Upał, podbiegi, zmęczone nogi i 35 wschodów słońca z rzędu. Każdy kilometr to krok przeciwko milczeniu, które otacza depresję.",

    "stats.days": "dni",
    "stats.marathons": "maratonów",
    "stats.perDay": "km każdego dnia",
    "stats.total": "km łącznie",

    "about.kicker": "Kim jestem",
    "about.title": "Dlaczego biegnę",
    "about.story": "[Tu wpisz swoją historię: kim jesteś, jak zaczęła się Twoja przygoda z bieganiem i dlaczego ta sprawa jest dla Ciebie ważna. Najlepiej sprawdzą się dwa, trzy krótkie i szczere akapity.]",
    "about.photoAlt": "Portret",

    "foundation.title": "Fundacja Twarze Depresji",
    "foundation.text": "Fundacja Twarze Depresji prowadzi najstarszą w Polsce kampanię społeczną o depresji „Twarze depresji. Nie oceniam. Akceptuję” i zapewnia bezpłatną, profesjonalną pomoc.",
    "foundation.link": "Poznaj fundację",

    "route.kicker": "Trasa",
    "route.title": "Od morza do Alp",
    "route.lead": "Kliknij etap, aby go przybliżyć. Trasa może się jeszcze nieco zmienić.",
    "route.stages": "Etapy",
    "route.showAll": "Pokaż całość",
    "route.day": "Dzień {day}",
    "route.start": "Start",
    "route.finish": "Meta",
    "route.error": "Nie udało się wczytać trasy. Jeśli otwierasz plik bezpośrednio, uruchom lokalny serwer (zobacz README).",

    "donate.kicker": "Wesprzyj bieg",
    "donate.title": "Każdy kilometr się liczy",
    "donate.lead": "Twoja wpłata trafia bezpośrednio do Fundacji Twarze Depresji. Wybierz kilometr, cały maraton albo dowolną kwotę.",
    "donate.raised": "zebrano",
    "donate.goal": "cel",
    "donate.tierKm": "to jeden kilometr",
    "donate.tierMarathon": "to cały maraton",
    "donate.tierAny": "Dowolna kwota",
    "donate.tierAnyText": "doda mi sił",

    "partners.kicker": "Partnerzy",
    "partners.title": "Zostań partnerem mojego biegu",
    "partners.lead": "Szukam pierwszych firm, które ruszą ze mną w drogę.",
    "partners.slot": "Twoje logo",

    "follow.kicker": "Bądź na bieżąco",
    "follow.lead": "Codzienne relacje, zdjęcia i zapisy ze Stravy prosto z trasy. Jeśli będę przebiegać przez Twoje miasto, dołącz do mnie na kilka kilometrów!",

    "contact.emailLabel": "E-mail",
    "contact.title": "Porozmawiajmy",

    "nav.needs": "Czego potrzebuję",
    "cta.needs": "Zobacz, czego potrzebuję",
    "cta.help": "Mogę pomóc",
    "foundation.item1": "Bezpłatna zdalna pomoc psychologiczna i konsultacje psychiatryczne, m.in. dla dzieci, młodzieży i rodziców",
    "foundation.item2": "Poradnia psychologiczna w Warszawie",
    "foundation.item3": "Kampanie edukacyjne przeciw stygmatyzacji depresji",
    "foundation.note": "Pieniądze ze zbiórki trafiają bezpośrednio do fundacji, nie do mnie.",
    "needs.kicker": "Czego potrzebuję",
    "needs.title": "Pomóż mi dobiec do Como",
    "needs.lead": "Robię to bez budżetu. Każda z tych rzeczy decyduje o tym, czy dobiegnę do mety. Wsparcie rzeczowe jest tak samo cenne jak finansowe.",
    "needs.camper.flag": "Najważniejsze: bez tego wyprawa się nie odbędzie",
    "needs.camper.title": "Kamper",
    "needs.camper.text": "Kamper to mój dom, kuchnia, miejsce regeneracji i baza na 35 dni. Szukam firmy wynajmującej kampery, dealera lub osoby prywatnej, która użyczy pojazd na czas wyprawy. Kamper będzie codziennie na zdjęciach i filmach, w kilkudziesięciu miejscach w całych Włoszech.",
    "needs.camper.periodLabel": "Okres",
    "needs.camper.period": "ok. 15.04 – 26.05.2027",
    "needs.camper.formLabel": "Forma",
    "needs.camper.form": "wypożyczenie lub użyczenie",
    "needs.camper.pickupLabel": "Odbiór",
    "needs.camper.pickup": "do ustalenia",
    "needs.camper.returnLabel": "W zamian",
    "needs.camper.return": "branding na pojeździe, codzienne treści",
    "needs.tag": "Szukam",
    "needs.n1.title": "Kierowca kampera",
    "needs.n1.text": "Osoba lub wolontariusz, który poprowadzi kamper i będzie moim wsparciem na trasie przez 35 dni.",
    "needs.n2.title": "Paliwo, autostrady, kempingi",
    "needs.n2.text": "Koszty przejazdu kampera na ok. 1500 km, opłaty drogowe i miejsca postojowe z wodą i prądem.",
    "needs.n3.title": "Buty i odzież biegowa",
    "needs.n3.text": "Kilka par butów na zmianę, skarpety, koszulki oraz odzież na deszcz i upał.",
    "needs.n4.title": "Odżywki i jedzenie",
    "needs.n4.text": "Żele, elektrolity, batony i jedzenie na 35 dni biegania maratonu dziennie.",
    "needs.n5.title": "Fizjoterapia i regeneracja",
    "needs.n5.text": "Fizjoterapia przed startem i na trasie oraz sprzęt do regeneracji.",
    "needs.n6.title": "Ubezpieczenie i GPS",
    "needs.n6.text": "Ubezpieczenie na czas wyprawy i tracker GPS, dzięki któremu każdy może śledzić bieg na żywo.",
    "benefits.kicker": "Dla partnerów",
    "benefits.title": "Co zyskujesz",
    "benefits.lead": "Nie obiecuję milionowych zasięgów. Obiecuję uczciwą współpracę, prawdziwą historię i treści, których nie da się nagrać w studiu.",
    "benefits.b1.title": "Twoja marka w drodze",
    "benefits.b1.text": "Logo na mojej koszulce, kamperze i tej stronie, w trakcie biegu i po nim.",
    "benefits.b2.title": "Treści do Twojego marketingu",
    "benefits.b2.text": "Zdjęcia i filmy z Twoim produktem w akcji: Kalabria, wybrzeże Cilento, Rzym, Toskania, Alpy. Możesz je wykorzystać w swoich kanałach.",
    "benefits.b3.title": "Wsparcie dobrej sprawy",
    "benefits.b3.text": "Konkretny, widoczny projekt CSR o zdrowiu psychicznym, temacie ważnym dla klientów i pracowników.",
    "benefits.b4.title": "Test w ekstremalnych warunkach",
    "benefits.b4.text": "Twój produkt przejdzie ok. 1500 km i 35 dni prawdziwego użytkowania. Dostaniesz szczerą relację, jak się sprawdził.",
    "benefits.b5.title": "Podziękowania i relacje",
    "benefits.b5.text": "Dedykowane posty, oznaczenia w relacjach z trasy i podziękowanie w podsumowaniu biegu.",
    "benefits.b6.title": "Spotkanie na trasie",
    "benefits.b6.text": "Jeśli jesteś na trasie, wpadnę do Ciebie. Możemy też spotkać się na mecie w Como.",
    "partners.slotCamper": "Partner kampera",
    "partners.slotGear": "Partner sprzętowy",
    "partners.slotFood": "Partner żywieniowy",
    "contact.lead": "Napisz albo zadzwoń. Odpowiadam osobiście, zwykle tego samego dnia. Mówię po polsku, włosku i angielsku.",
    "contact.phoneLabel": "Telefon",
    "contact.whatsappLabel": "WhatsApp",
    "contact.copy": "Kopiuj",
    "contact.copied": "Skopiowano",
    "footer.note": "Charytatywny bieg dla Fundacji Twarze Depresji."
  },

  it: {
    "nav.about": "Chi sono",
    "nav.challenge": "La sfida",
    "nav.route": "Percorso",
    "nav.donate": "Dona",
    "nav.partners": "Partner",
    "nav.contact": "Contatti",

    "cta.donate": "Dona",
    "cta.donateNow": "Dona ora",
    "cta.route": "Vedi il percorso",
    "cta.partner": "Diventa partner",

    "hero.tagline": "35 maratone.<br>35 giorni. Italia.",
    "hero.lead": "Da Melito di Porto Salvo, la punta più a sud dell'Italia continentale, fino a Como ai piedi delle Alpi: una maratona completa ogni giorno per 35 giorni, per il supporto psicologico gratuito della Fondazione Twarze Depresji.",
    "hero.photoAlt": "Runner in strada",

    "countdown.before": "Si parte tra",
    "countdown.days": "giorni",
    "countdown.hours": "ore",
    "countdown.minutes": "min",
    "countdown.live": "In corsa",
    "countdown.during": "Giorno {day} di 35",
    "countdown.after": "Traguardo. Grazie!",

    "challenge.kicker": "La sfida",
    "challenge.title": "Un Paese. Una maratona al giorno.",
    "challenge.lead": "Nessun giorno di riposo. Caldo, salite, gambe stanche e 35 albe di fila. Ogni chilometro è un passo contro il silenzio che circonda la depressione.",

    "stats.days": "giorni",
    "stats.marathons": "maratone",
    "stats.perDay": "km ogni giorno",
    "stats.total": "km in totale",

    "about.kicker": "Chi sono",
    "about.title": "Perché corro",
    "about.story": "[Qui va la tua storia: chi sei, come hai iniziato a correre e perché questa causa è importante per te. Due o tre paragrafi brevi e sinceri funzionano meglio.]",
    "about.photoAlt": "Ritratto",

    "foundation.title": "Fundacja Twarze Depresji",
    "foundation.text": "La Fondazione \"Volti della Depressione\" porta avanti la più longeva campagna sociale polacca sulla depressione, \"Twarze depresji. Nie oceniam. Akceptuję\" (Non giudico. Accetto), e offre aiuto professionale gratuito.",
    "foundation.link": "Scopri la fondazione",

    "route.kicker": "Il percorso",
    "route.title": "Dal mare alle Alpi",
    "route.lead": "Tocca una tappa per ingrandirla. Il percorso potrebbe cambiare leggermente.",
    "route.stages": "Tappe",
    "route.showAll": "Mostra tutto",
    "route.day": "Giorno {day}",
    "route.start": "Partenza",
    "route.finish": "Arrivo",
    "route.error": "Impossibile caricare il percorso. Se hai aperto il file direttamente, avvia un server locale (vedi README).",

    "donate.kicker": "Sostieni la corsa",
    "donate.title": "Ogni chilometro conta",
    "donate.lead": "La tua donazione va direttamente alla Fondazione Twarze Depresji. Scegli un chilometro, una maratona intera o l'importo che preferisci.",
    "donate.raised": "raccolti",
    "donate.goal": "obiettivo",
    "donate.tierKm": "sostengono 1 chilometro",
    "donate.tierMarathon": "sostengono un'intera maratona",
    "donate.tierAny": "Qualsiasi importo",
    "donate.tierAnyText": "mi dà la carica",

    "partners.kicker": "Partner",
    "partners.title": "Diventa partner della mia corsa",
    "partners.lead": "Cerco le prime aziende che partano con me.",
    "partners.slot": "Il tuo logo",

    "follow.kicker": "Seguimi",
    "follow.lead": "Aggiornamenti quotidiani, foto e attività Strava dalla strada. Se passo dalla tua città, vieni a correre qualche chilometro con me!",

    "contact.emailLabel": "Email",
    "contact.title": "Parliamone",

    "nav.needs": "Di cosa ho bisogno",
    "cta.needs": "Scopri di cosa ho bisogno",
    "cta.help": "Posso aiutare",
    "foundation.item1": "Supporto psicologico gratuito a distanza e consulti psichiatrici, anche per bambini, ragazzi e genitori",
    "foundation.item2": "Un centro di consulenza psicologica a Varsavia",
    "foundation.item3": "Campagne educative contro lo stigma della depressione",
    "foundation.note": "I fondi raccolti vanno direttamente alla fondazione, non a me.",
    "needs.kicker": "Di cosa ho bisogno",
    "needs.title": "Aiutami ad arrivare a Como",
    "needs.lead": "Lo faccio senza budget. Ognuna di queste cose decide se arriverò al traguardo. Il supporto in natura vale quanto quello economico.",
    "needs.camper.flag": "Priorità assoluta: senza questo il viaggio non parte",
    "needs.camper.title": "Camper",
    "needs.camper.text": "Il camper è la mia casa, cucina, sala di recupero e base per 35 giorni. Cerco un'azienda di noleggio, un concessionario o un privato disposto a prestare un mezzo per tutta la durata del viaggio. Il camper comparirà ogni giorno in foto e video, in decine di luoghi in tutta Italia.",
    "needs.camper.periodLabel": "Periodo",
    "needs.camper.period": "circa 15.04 – 26.05.2027",
    "needs.camper.formLabel": "Formula",
    "needs.camper.form": "noleggio o comodato",
    "needs.camper.pickupLabel": "Ritiro",
    "needs.camper.pickup": "da concordare",
    "needs.camper.returnLabel": "In cambio",
    "needs.camper.return": "branding sul mezzo, contenuti quotidiani",
    "needs.tag": "Cerco",
    "needs.n1.title": "Autista del camper",
    "needs.n1.text": "Una persona o un volontario che guidi il camper e mi supporti lungo il percorso per 35 giorni.",
    "needs.n2.title": "Carburante, pedaggi, campeggi",
    "needs.n2.text": "Costi di viaggio del camper per circa 1.500 km, pedaggi autostradali e aree di sosta con acqua ed elettricità.",
    "needs.n3.title": "Scarpe e abbigliamento",
    "needs.n3.text": "Diverse paia di scarpe da alternare, calze, magliette e abbigliamento per pioggia e caldo.",
    "needs.n4.title": "Integratori e cibo",
    "needs.n4.text": "Gel, elettroliti, barrette e cibo per 35 giorni di una maratona al giorno.",
    "needs.n5.title": "Fisioterapia e recupero",
    "needs.n5.text": "Fisioterapia prima della partenza e lungo il percorso, e attrezzatura per il recupero.",
    "needs.n6.title": "Assicurazione e GPS",
    "needs.n6.text": "Un'assicurazione per il viaggio e un tracker GPS per seguire la corsa in diretta.",
    "benefits.kicker": "Per i partner",
    "benefits.title": "Cosa ottieni",
    "benefits.lead": "Non prometto milioni di visualizzazioni. Prometto una collaborazione onesta, una storia vera e contenuti che non si possono girare in studio.",
    "benefits.b1.title": "Il tuo marchio in viaggio",
    "benefits.b1.text": "Il tuo logo sulla mia maglia, sul camper e su questo sito, durante la corsa e dopo.",
    "benefits.b2.title": "Contenuti per il tuo marketing",
    "benefits.b2.text": "Foto e video con il tuo prodotto in azione: Calabria, costa del Cilento, Roma, Toscana, Alpi. Puoi usarli sui tuoi canali.",
    "benefits.b3.title": "Sostegno a una buona causa",
    "benefits.b3.text": "Un progetto di responsabilità sociale concreto e visibile sulla salute mentale, tema importante per clienti e dipendenti.",
    "benefits.b4.title": "Test in condizioni estreme",
    "benefits.b4.text": "Il tuo prodotto affronterà circa 1.500 km e 35 giorni di uso reale. Riceverai un racconto sincero di come si è comportato.",
    "benefits.b5.title": "Ringraziamenti e racconti",
    "benefits.b5.text": "Post dedicati, tag nelle storie dal percorso e un ringraziamento nel resoconto finale della corsa.",
    "benefits.b6.title": "Incontro lungo il percorso",
    "benefits.b6.text": "Se sei sul percorso, passo a trovarti. Possiamo anche incontrarci all'arrivo a Como.",
    "partners.slotCamper": "Partner camper",
    "partners.slotGear": "Partner tecnico",
    "partners.slotFood": "Partner alimentare",
    "contact.lead": "Scrivimi o chiamami. Rispondo personalmente, di solito in giornata. Parlo polacco, italiano e inglese.",
    "contact.phoneLabel": "Telefono",
    "contact.whatsappLabel": "WhatsApp",
    "contact.copy": "Copia",
    "contact.copied": "Copiato",
    "footer.note": "Una corsa di beneficenza per la Fondazione Twarze Depresji."
  }
};

const I18N = (() => {
  const SUPPORTED = Object.keys(TRANSLATIONS);
  const STORAGE_KEY = "35days-lang";
  let current = "en";

  function t(key, vars = {}) {
    const str = (TRANSLATIONS[current] && TRANSLATIONS[current][key]) ?? TRANSLATIONS.en[key] ?? key;
    return str.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`));
  }

  function detect() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (SUPPORTED.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* storage unavailable */ }
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : "en";
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (value.includes("<")) el.innerHTML = value;  // only our own dictionary strings
      else el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.alt = t(el.dataset.i18nAlt);
    });
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === current));
    });
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
    apply();
  }

  function init() {
    current = detect();
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    apply();
  }

  return { t, init, setLang, get lang() { return current; } };
})();
