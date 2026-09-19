# Team-Seite für Denaro Consulting

## Ziel
Neue Unterseite `/team` im bestehenden Structuralist-Enterprise-Design (helles Theme, Azure-Akzent, 12-Spalten-Raster, nummerierte Abschnitte). Die sieben hochgeladenen Teamfotos werden als CDN-Assets eingebunden.

## Teammitglieder
Fest vorgegeben:
- Alexander Valentino Denaro — Geschäftsführung (`geschaeftsfuehrer_1.png`)
- Michael Bergmann — Projektleitung (`projektleiter_1.png`)
- Jonas Reuter — Recruiter (`recruiter_1.png`)

Vier weitere Mitglieder mit generierten, passenden Namen/Positionen (Branche: Unternehmensberatung, IT-Beratung, Architektur/Hochbau):
- HR-Managerin (Foto Frau, lange braune Haare) — z.B. HR & Personalberatung
- Mann im beigen Anzug — z.B. Senior-Berater Unternehmensberatung
- Frau mit Pony/Tattoos — z.B. IT-Beraterin
- Frau mit lockigem Haar — z.B. Architektur & Hochbau

Die generierten Namen werden im Umsetzungsschritt in der Antwort genannt und können jederzeit geändert werden.

## Seitenaufbau `/team`
- `PageIntro` (Eyebrow „Unser Team", Titel, kurzer Text, Nummer „07"-Logik passend zur Seitenstruktur).
- Hero-Mitglied: Geschäftsführer hervorgehoben (größere Kachel im asymmetrischen Raster, Name, Position).
- Raster mit den übrigen sechs Mitgliedern: einheitliche rechteckige Porträtkacheln (object-cover, gleiche Proportionen — gleicht die unterschiedlichen Zuschnitte der Uploads, inkl. ovaler/runder Fotos, sauber aus), Name + Position, feine Rahmenlinien, Azure-Hover-Akzent.
- Abschlussblock im Stil der anderen Seiten: Hinweis auf Kontakt („Lernen Sie uns kennen") mit Link zu `/kontakt`.
- Keine erfundenen Biografien, Zitate oder Kennzahlen — nur Namen und Positionen.

## Technik
- Alle 7 Fotos per `lovable-assets create` aus `/mnt/user-uploads/` als `.asset.json` unter `src/assets/` ablegen, Import der Pointer in der Route.
- Neue Datei `src/routes/team.tsx` mit `createFileRoute("/team")` inkl. eigenem `head()` (Title, Description, og-Tags).
- Navigation und Footer: Link „Team" ergänzen (Header-Nav + Footer-Navigation).
- Keine Änderungen an anderen Seiteninhalten.

## Prüfung
- `bun run build` muss erfolgreich sein.
- Playwright Desktop + Mobil: alle 7 Bilder laden, kein Overflow, keine Page-Errors, Navigation zur Team-Seite funktioniert.
