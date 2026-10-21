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
    "hero.lead": "From the Alps to the tip of the boot: I'll run a full marathon every single day to raise money for Fundacja Twarze Depresji and show that depression has many faces.",
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
    "foundation.text": "The \"Faces of Depression\" Foundation fights the stigma around depression in Poland. It raises awareness, supports people living with depression and their loved ones, and encourages them to seek help.",
    "foundation.link": "Visit the foundation",

    "route.kicker": "The route",
    "route.title": "From the Alps to the sea",
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
    "partners.lead": "I'm looking for brands and people who want to stand with me: gear, nutrition, physio, a support vehicle or places to sleep along the route. Let's talk.",
    "partners.slot": "Your logo",

    "follow.kicker": "Follow along",
    "follow.lead": "Daily updates, photos and Strava logs from the road. If I'm passing through your town, come and run a few kilometres with me!",

    "contact.emailLabel": "Email",
    "contact.title": "Write to me",
    "contact.name": "Name",
    "contact.email": "Your email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.subject": "35 Days Across Italy: message from {name}",

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
    "hero.lead": "Od Alp po czubek włoskiego buta: codziennie przebiegnę pełny maraton, żeby zebrać pieniądze dla Fundacji Twarze Depresji i pokazać, że depresja ma wiele twarzy.",
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
    "foundation.text": "Fundacja Twarze Depresji walczy ze stygmatyzacją depresji w Polsce. Prowadzi działania edukacyjne, wspiera osoby chorujące na depresję i ich bliskich oraz zachęca do szukania pomocy.",
    "foundation.link": "Poznaj fundację",

    "route.kicker": "Trasa",
    "route.title": "Od Alp do morza",
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
    "partners.lead": "Szukam firm i ludzi, którzy chcą stanąć obok mnie: sprzęt, odżywianie, fizjoterapia, auto wsparcia albo noclegi na trasie. Porozmawiajmy.",
    "partners.slot": "Twoje logo",

    "follow.kicker": "Bądź na bieżąco",
    "follow.lead": "Codzienne relacje, zdjęcia i zapisy ze Stravy prosto z trasy. Jeśli będę przebiegać przez Twoje miasto, dołącz do mnie na kilka kilometrów!",

    "contact.emailLabel": "E-mail",
    "contact.title": "Napisz do mnie",
    "contact.name": "Imię",
    "contact.email": "Twój e-mail",
    "contact.message": "Wiadomość",
    "contact.send": "Wyślij",
    "contact.subject": "35 dni przez Włochy: wiadomość od {name}",

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
    "hero.lead": "Dalle Alpi alla punta dello stivale: correrò una maratona completa ogni giorno per raccogliere fondi per la Fondazione Twarze Depresji e mostrare che la depressione ha tanti volti.",
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
    "foundation.text": "La Fondazione \"Volti della Depressione\" combatte lo stigma legato alla depressione in Polonia. Fa sensibilizzazione, sostiene le persone che convivono con la depressione e i loro cari e le incoraggia a chiedere aiuto.",
    "foundation.link": "Scopri la fondazione",

    "route.kicker": "Il percorso",
    "route.title": "Dalle Alpi al mare",
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
    "partners.lead": "Cerco aziende e persone che vogliano essere al mio fianco: attrezzatura, alimentazione, fisioterapia, un mezzo di supporto o un posto per dormire lungo il percorso. Parliamone.",
    "partners.slot": "Il tuo logo",

    "follow.kicker": "Seguimi",
    "follow.lead": "Aggiornamenti quotidiani, foto e attività Strava dalla strada. Se passo dalla tua città, vieni a correre qualche chilometro con me!",

    "contact.emailLabel": "Email",
    "contact.title": "Scrivimi",
    "contact.name": "Nome",
    "contact.email": "La tua email",
    "contact.message": "Messaggio",
    "contact.send": "Invia",
    "contact.subject": "35 giorni attraverso l'Italia: messaggio da {name}",

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
