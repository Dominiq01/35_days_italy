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

## Do zrobienia
- [ ] Podmienić `gpx/route.gpx` (teraz PRZYKŁADOWA, wygenerowana trasa Melito → Como, 35 etapów, 1477 km) na prawdziwy scalony plik GPX
- [ ] Uzupełnić `CONFIG` w `js/main.js`: imię i nazwisko, e-mail, telefon, WhatsApp, social media; link do zbiórki i cel, gdy będą
- [ ] Napisać historię `about.story` w `js/i18n.js` (EN/PL/IT)
- [ ] Dodać zdjęcia zamiast `img/hero.svg` i `img/about.svg`
- [ ] Pokazać fundacji opis i zapytać o zgodę na użycie nazwy/logo (`foundationUrl` poprawiony na twarzedepresji.pl)
- [ ] Nagrać film 60–90 s „kim jestem i dlaczego biegnę” (skrypt do przygotowania)
- [ ] Korekta tekstów PL i IT przez native speakera
- [ ] Deploy (Netlify/Vercel)

## Uruchomienie
`python3 -m http.server 8000` → http://localhost:8000. Przez `file://` mapa się nie wczyta, bo `fetch` GPX nie działa.
