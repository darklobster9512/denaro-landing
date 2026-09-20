# Mobile-Optimierung aller Seiten

Alle zehn Seiten wurden im Handy-Format (390 x 844) geprüft. Ergebnis: kein horizontales Scrollen und keine Fehler — die Struktur passt bereits. Verbesserungsbedarf besteht bei Lesbarkeit, Tippflächen und Platzverbrauch.

## Festgestellte Punkte

- Kleine Beschriftungen liegen bei rund 10,5-11,5 px (Rubriken, Fußleisten, Logo-Zusatz). Pro Seite sind 8-21 solcher Textstellen vorhanden.
- Pro Seite gibt es 9-13 Links und Schaltflächen mit einer Höhe unter 36 px, also unter der empfohlenen Mindestgröße für Finger.
- Der Kopfbereich jeder Unterseite enthält auf dem Handy einen leeren Block, der nur eine Nummer zeigt und unnötig Höhe kostet.
- Die Leiste unterhalb des Seitentitels stellt zwei Großbuchstaben-Texte nebeneinander — auf schmalen Displays sehr gedrängt.
- Innenabstände und Abstände zwischen Abschnitten sind auf dem Handy identisch mit dem Tablet-Wert und wirken dadurch teils zu luftig, teils gedrängt.

## Geplante Anpassungen

1. **Lesbarkeit**: Mindestgröße für alle Kleinschriften auf dem Handy anheben (ca. 12 px) und die sehr weite Buchstabensperrung auf schmalen Displays leicht reduzieren.
2. **Tippflächen**: Navigationslinks, Fußzeilenlinks, Telefon- und E-Mail-Links sowie Formular-Schaltflächen erhalten auf dem Handy eine Mindesthöhe von 44 px.
3. **Seitenköpfe**: Nummernblock und Titel auf dem Handy in eine Zeile zusammenführen, statt eines eigenen leeren Blocks; Titelgröße für sehr schmale Displays abstufen.
4. **Infoleiste**: Die zweiteilige Leiste unter dem Titel bricht auf dem Handy sauber untereinander um.
5. **Abstände**: Vertikale Abstände und Innenabstände für das Handy eigens abstufen, damit Abschnitte kompakter und gleichmäßiger wirken.
6. **Formulare (Kontakt und Bewerbung)**: Eingabefelder mit ausreichender Höhe, Schriftgröße 16 px gegen ungewolltes Zoomen in iOS, Schaltflächen über die volle Breite, Bestätigungsdialog auf kleinen Displays geprüft.
7. **Team und Karriere**: Kachelabstände und Avatargrößen auf dem Handy feinjustieren, Stellenangaben untereinander statt gedrängt nebeneinander.
8. **Mobiles Menü**: Einträge mit größeren Tippflächen und klarer Trennung, Kontakt-Schaltfläche gut erreichbar am Ende.

Inhalte, Texte, Farben, Bilder und die Darstellung auf großen Bildschirmen bleiben unverändert.

## Technische Details

- Änderungen erfolgen in `src/styles.css` (Utilities `eyebrow`, `site-container`, Abstandsvariablen) sowie in `src/components/page-sections.tsx`, `src/components/site-shell.tsx` und den Routen `index.tsx`, `leistungen.tsx`, `ueber-uns.tsx`, `team.tsx`, `kontakt.tsx`, `impressum.tsx`, `datenschutz.tsx`, `karriere/index.tsx`, `karriere/$slug.tsx`, `karriere/bewerbung.tsx`.
- Vorgehen ausschließlich mobile-first: Basisklassen für das Handy, bestehende `md:`/`lg:`-Werte bleiben erhalten, damit Desktop unverändert bleibt.
- Für Textzeilen mit festen Elementen gilt weiterhin `min-w-0` plus `shrink-0`.
- Prüfung nach der Umsetzung: `bun run build` sowie ein Playwright-Durchlauf über alle zehn Routen bei 390 x 844 und 360 x 740 mit Kontrolle von Überbreite, Schriftgrößen unter 12 px, Tippflächen unter 44 px und Konsolenfehlern; zusätzlich ein Desktop-Durchlauf bei 1280 px als Regressionskontrolle.
