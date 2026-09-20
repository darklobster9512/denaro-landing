# Mehr Abstand zwischen Footer und vorheriger Sektion

## Ziel
Auf allen Seiten etwas mehr Luft zwischen der letzten Sektion (z. B. Kontaktband, Inhaltssektion) und dem Footer-Panel.

## Umsetzung
Nur `src/components/site-shell.tsx`, `SiteFooter`:

- Footer-Container-Klassen von
  `pb-8 pt-2 md:pb-12`
  auf
  `pb-10 pt-10 md:pb-14 md:pt-16`
  ändern.

Damit entsteht oben ein gleichmäßiger Abstand von 40 px (mobil) bzw. 64 px (Desktop) zwischen der vorherigen Sektion und dem gerahmten Footer-Panel — auf jeder Route, da der Footer zentral gerendert wird.

## Nicht geändert
- Footer-Inhalt, Spalten, Typografie, Farben
- Alle Seiteninhalte und sonstige Abstände
