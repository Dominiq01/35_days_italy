# 35 Days Across Italy: kontekst projektu

Strona (landing page) charytatywnego biegu: Dominik biegnie maraton (42,2 km) dziennie przez 35 dni przez Włochy, zbierając pieniądze dla **Fundacji Twarze Depresji**.

## Ustalenia
- Statyczna strona bez build stepu: `index.html`, `css/style.css`, `js/i18n.js` (teksty EN/PL/IT), `js/main.js` (`CONFIG` + mapa).
- Języki: EN, PL, IT; wybór przez `?lang=`, zapisany wybór albo język przeglądarki.
- Mapa: Leaflet 1.9.4 (cdnjs) + kafelki OpenStreetMap. Kafelki CARTO wymagały klucza API i zostały porzucone.
- GPX: każdy `<trk>` to jeden dzień/etap. Własny parser w `main.js` (bez leaflet-gpx). Suma km na stronie liczona z pliku.
- Styl inspirowany https://tomaszsobania.pl/: ciemny grafit `#20252b` + biel, akcent czerwony `#d6263b`, pasek trikoloru, Montserrat + Lato, dwuliniowe nagłówki sekcji, duże liczby, sekcja partnerów.
- Hosting: repo prywatne https://github.com/Dominiq01/35_days_italy. GitHub Pages wymaga płatnego planu przy prywatnym repo; plan to Netlify lub Vercel.
- Commity: autor `dominik.wedzina@onet.pl`.

## Do zrobienia
- [ ] Podmienić `gpx/route.gpx` (teraz PRZYKŁADOWA trasa Aosta → Reggio Calabria) na prawdziwy scalony plik GPX
- [ ] Uzupełnić `CONFIG` w `js/main.js`: imię i nazwisko, data startu, e-mail, link do zbiórki, cel/zebrana kwota, social media
- [ ] Napisać historię `about.story` w `js/i18n.js` (EN/PL/IT)
- [ ] Dodać zdjęcia zamiast `img/hero.svg` i `img/about.svg`
- [ ] Sprawdzić adres strony fundacji (`foundationUrl`, obecnie twarzedepresji.org) i opis fundacji
- [ ] Korekta tekstów PL i IT przez native speakera
- [ ] Deploy (Netlify/Vercel)

## Uruchomienie
`python3 -m http.server 8000` → http://localhost:8000. Przez `file://` mapa się nie wczyta, bo `fetch` GPX nie działa.
