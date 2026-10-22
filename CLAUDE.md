# 35 Days Across Italy: kontekst projektu

Strona (landing page) charytatywnego biegu: Dominik biegnie maraton (42,2 km) dziennie przez 35 dni przez Włochy, zbierając pieniądze dla **Fundacji Twarze Depresji**.

## Ustalenia
- Statyczna strona bez build stepu: `index.html`, `css/style.css`, `js/i18n.js` (teksty EN/PL/IT), `js/main.js` (`CONFIG` + mapa).
- Języki: EN, PL, IT; wybór przez `?lang=`, zapisany wybór albo język przeglądarki.
- Mapa: Leaflet 1.9.4 (cdnjs) + kafelki OpenStreetMap. Kafelki CARTO wymagały klucza API i zostały porzucone.
- GPX: każdy `<trk>` to jeden dzień/etap. Własny parser w `main.js` (bez leaflet-gpx). Suma km na stronie liczona z pliku.
- Styl inspirowany https://tomaszsobania.pl/: ciemny grafit `#20252b` + biel, akcent czerwony `#d6263b`, pasek trikoloru, Montserrat + Lato, dwuliniowe nagłówki sekcji, duże liczby, sekcja partnerów.
- Hosting: repo https://github.com/Dominiq01/35_days_italy (uwaga: w październiku 2026 było publiczne; jeśli ma być prywatne, zmienić w ustawieniach). GitHub Pages wymaga płatnego planu przy prywatnym repo; plan to Netlify lub Vercel.
- Commity: autor `dominik.wedzina@onet.pl`.

- Strona jest przede wszystkim dla **sponsorów**. Kolejność: hero (odliczanie) → wyzwanie → kim jestem + fundacja → trasa → czego potrzebuję (kamper wyróżniony) → co zyskuje partner → partnerzy → [wpłaty] → kontakt.
- Bez pakietów sponsorskich i bez sekcji zasięgów (decyzja Dominika).
- Kamper to warunek konieczny wyprawy (wypożyczenie od firmy lub użyczenie od osoby/dealera). Szukamy też kierowcy.
- Sekcja wpłat i link „Wesprzyj” w menu są ukryte, dopóki `CONFIG.donateUrl` jest `null` (fundacja dała na razie wstępną zgodę, link do zbiórki jeszcze nie istnieje). Nie pisać, że Dominik sam pokrywa koszty.
- Kontakt: e-mail, telefon, WhatsApp z przyciskami „Kopiuj” (bez formularza mailto).
- Trasa biegnie z południa na północ: Melito di Porto Salvo → Como, start 19.04.2027.

## Stan prac (22.10.2026, przekazanie z claude.ai do Claude Code)
- Strona została przebudowana pod sponsorów w rozmowie na claude.ai (commit „Przebudowa strony pod sponsorów…”). Wygląd: ten z repo (decyzja Dominika); treść sekcji „Czego potrzebuję” i „Co zyskujesz” przeniesiona z alternatywnej wersji.
- Potrzeby wyprawy (ustalone z Dominikiem): kamper (wypożyczenie od firmy lub użyczenie od dealera/osoby, ok. 15.04–26.05.2027, kluczowy), kierowca kampera (szuka), paliwo/autostrady/kempingi, buty i odzież, odżywki i jedzenie, fizjo + ubezpieczenie + tracker GPS. Spanie w kamperze.
- Zasięgi w social mediach są małe, dlatego nie pokazujemy liczb.
- Sponsorzy: polscy i włoscy, strona w 3 językach; link do strony będzie wysyłany w mailach do sponsorów.
- Fundacja Twarze Depresji (Warszawa, KRS 0000743128, twarzedepresji.pl) dała na razie tylko wstępną zgodę.
- Podgląd artefaktu na claude.ai nie ładuje kafelków OSM; lokalnie i na hostingu mapa działa.

## Sesja 22.10.2026 w Claude Code: co zrobiono
- Prawdziwa trasa: 35 plików Komoot scalone do `gpx/route.gpx` (1480 km). Dzień 35 (Biassono – Como) ma celowo tylko 33,7 km; Dominik jeszcze się nad tym zastanawia, na razie nic nie zmieniać.
- Górny pasek: w PL/IT etykiety się zawijały. Teraz `white-space: nowrap`, a `initNav()` w `main.js` sam przełącza na hamburgera (klasa `.is-compact`), gdy menu się nie mieści. Nie ma już stałego breakpointu 980px.
- Dane w `CONFIG`: imię, e-mail, Instagram, Strava. Telefon/WhatsApp/Facebook = `null` (ukryte przez `data-config-if`). Tekst kontaktu „Napisz do mnie” (bez „zadzwoń”). Zdanie „Mówię po polsku, włosku i angielsku” potwierdzone przez Dominika.
- Hashtag w sekcji kontaktu i e-mail w karcie nie łamią się już w środku (container queries).
- Sekcja „Dlaczego biegnę”: zamiast zdjęcia **pionowe wideo 9:16 jako plik MP4** (nie YouTube; decyzja Dominika), `CONFIG.aboutVideo`. Napisy `.vtt` przełączają się z językiem strony. Do czasu nagrania zaślepka „Film już wkrótce”. Kod odtwarzacza nie był jeszcze testowany z prawdziwym plikiem.
- Hero: zdjęcie Dominika (`img/hero.jpg`, `hero-800.jpg`) zrobione z `img/me.jpeg`: odbite (selfie było lustrzane), krawędzie oczyszczone, tło = gradient strony. Na telefonie kadr kwadratowy. `img/me.jpeg` to oryginał, strona go nie używa (do decyzji: usunąć z repo?).
- Podgląd zrzutów: headless Chrome na Windows ma minimalną szerokość okna 500px; widok telefonu sprawdzać przez iframe 390px.

## Gdzie skończyliśmy / następne kroki
1. **Historia `about.story` (EN/PL/IT)**: czekamy na odpowiedzi Dominika: wiek, skąd jest, czym się zajmuje; od kiedy biega i co przebiegł (m.in. Cracovia Maraton, jest medal na zdjęciu); dlaczego depresja i Fundacja Twarze Depresji (czy coś osobistego do pokazania publicznie); dlaczego Włochy. Z tych samych odpowiedzi powstanie skrypt filmu.
2. Skrypt filmu 60–90 s „kim jestem i dlaczego biegnę” (pionowy, napisy PL/IT/EN jako `.vtt`).
3. Szablon maila do sponsorów (PL i IT), osobna wersja do firm wynajmujących kampery.
4. Media kit PDF (2–3 strony, ta sama treść co strona).
5. Deploy (Netlify/Vercel).

## Do zrobienia
- [x] Podmienić `gpx/route.gpx` na prawdziwą trasę (22.10.2026: scalone 35 plików Komoot `gpx/IT_D01…IT_D35`, ciągła trasa, 1480 km; nazwy etapów „Day N: A – B” wpisane ręcznie, wysokości pominięte, bo strona ich nie używa)
- [x] Uzupełnić `CONFIG` w `js/main.js` (22.10.2026): Dominik Wędzina, dominik.wedzina@onet.pl, Instagram, Strava. **Bez telefonu i WhatsAppa** (Dominik boi się spamu) i bez Facebooka: wartości `null`, a elementy z `data-config-if` się chowają
- [ ] Link do zbiórki i cel w `CONFIG`, gdy będą
- [ ] Napisać historię `about.story` w `js/i18n.js` (EN/PL/IT)
- [x] Zdjęcie w hero (22.10.2026): `img/hero.jpg` + `hero-800.jpg` z `img/me.jpeg` (selfie z iPhone'a po Cracovia Maratonie, wycięte). Odbite lustrzanie (było odwrócone), krawędzie oczyszczone, tło zamienione na gradient w kolorach strony. Docelowo lepiej zdjęcie w biegu, bez okularów
- [ ] Wgrać film do sekcji „Dlaczego biegnę”: **pionowy 9:16, plik MP4 na stronie (nie YouTube)**, decyzja Dominika. `video/about.mp4` + napisy `video/about-{pl,en,it}.vtt`, ustawić `CONFIG.aboutVideo.src`. Do tego czasu zaślepka „Film już wkrótce” (zdjęcie `img/about.svg` usunięte)
- [ ] Pokazać fundacji opis i zapytać o zgodę na użycie nazwy/logo (`foundationUrl` poprawiony na twarzedepresji.pl)
- [ ] Nagrać film 60–90 s „kim jestem i dlaczego biegnę” (skrypt do przygotowania)
- [ ] Korekta tekstów PL i IT przez native speakera
- [ ] Deploy (Netlify/Vercel)

## Uruchomienie
`python3 -m http.server 8000` → http://localhost:8000. Przez `file://` mapa się nie wczyta, bo `fetch` GPX nie działa.
