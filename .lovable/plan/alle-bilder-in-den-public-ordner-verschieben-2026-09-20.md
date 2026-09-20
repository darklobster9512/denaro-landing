# Alle Bilder in den public-Ordner verschieben

## Ziel
Alle Website-Bilder liegen als echte Dateien im Projekt unter `public/images/` statt als CDN-Verweise (`.asset.json`). Alle Seiten zeigen danach exakt dieselben Bilder — keine Design- oder Textänderungen.

## Betroffene Bilder (14 Stück)
- 6 Stockfotos: Hero-Architektur, Boardroom, IT, Architektur, Team, Düsseldorf
- 1 Logo: `denaro-logo.png` (Header, Menü, Footer)
- 7 Team-Porträts (Geschäftsführer, Projektleiter, Recruiter, HR, 2 weitere Frauen, 1 weiterer Mann)

## Vorgehen
1. Alle 14 Bilder von den bestehenden CDN-Adressen herunterladen und als Dateien unter `public/images/` ablegen (Dateinamen wie bisher, z. B. `denaro-hero-corporate-architecture.jpg`).
2. Alle Verwendungen im Code auf die neuen Pfade umstellen (`/images/dateiname.jpg`):
   - `src/routes/index.tsx` (6 Bilder)
   - `src/routes/ueber-uns.tsx`, `src/routes/team.tsx`, `src/components/page-sections.tsx` (Bilder/Porträts)
   - `src/components/site-shell.tsx` (Logo in Header, mobilem Menü, Footer)
3. Die nicht mehr benötigten `.asset.json`-Verweis-Dateien in `src/assets/` entfernen und die CDN-Objekte ordentlich über das Asset-Tool löschen.
4. Favicon bleibt unverändert (`public/favicon.png` liegt bereits in `public`).

## Technische Details
- Öffentliche Dateien unter `public/` werden vom Server direkt ausgeliefert und sind unter `/images/...` erreichbar.
- Statt `import bild from "...asset.json"` wird direkt die URL `/images/...` in `src`-Attributen verwendet.
- Hinweis: Die Bilder verlieren dadurch das CDN-Caching; Ladezeiten können minimal steigen.

## Prüfung
- Build ausführen.
- Mit dem Browser alle Seiten (Start, Leistungen, Über uns, Team, Karriere, Kontakt) auf Desktop und Handy prüfen: alle Bilder laden, kein Verschieben des Layouts, keine Fehlermeldungen.
