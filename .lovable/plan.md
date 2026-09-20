# Team-Seite: Runde, kleinere Avatars

## Ziel
Die Teamfotos auf `/team` wirken bei großer Darstellung unscharf (geringe Auflösung der Uploads). Deshalb werden alle Bilder deutlich kleiner und als runde Kreis-Avatars dargestellt.

## Änderungen (nur `src/routes/team.tsx`)
- **Geschäftsführer-Kachel (Hero-Mitglied):** Statt der großen 4:5-Bildfläche eine deutlich kleinere runde Darstellung (ca. 160–192 px Durchmesser, `rounded-full object-cover object-top`), ausgerichtet im Kachel-Layout. Name, Position, Text und Nummerierung bleiben unverändert.
- **Team-Raster:** Statt der großen `aspect-[4/5]`-Kachelbilder erhalten alle sechs übrigen Mitglieder einen zentrierten runden Avatar (ca. 112–128 px), darunter weiterhin Name und Position in der bestehenden Typografie. Die Kacheln selbst bleiben im Structuralist-Raster mit feinen Rahmenlinien; die Kachelhöhe richtet sich künftig nach Inhalt, kein aufgeblähter Bildbereich mehr.
- Hover-Effekt: dezenter Azure-Ring statt Scale-Zoom (bei kleinen Avatars wirkt ein Ring seriöser als Vergrößerung).
- `object-cover object-top` bleibt, damit die Gesichter sauber im Kreis sitzen.

## Nicht geändert
- Namen, Positionen, Texte, Metadaten (`head()`), Navigation, Footer, Kontaktabschluss.
- Keine neuen Assets, keine sonstigen Seiten.

## Prüfung
- `bun run build` erfolgreich.
- Playwright Desktop + Mobil: Kreise sauber rund, kein Verzerrungszuschnitt, kein Overflow, keine Page-Errors.
