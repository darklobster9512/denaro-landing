# Kontaktformular-Mockup auf /kontakt

## Ziel
Die Kontaktseite erhält ein vollständig gestaltetes Kontaktformular im bestehenden Structuralist-Enterprise-Design. Das Formular ist ein Mockup: Es sieht fertig aus und reagiert auf Eingaben, versendet aber noch nichts (kein Backend, keine E-Mail). Beim Absenden erscheint ein Hinweis, dass die Anfrage aktuell per E-Mail möglich ist.

## Umsetzung

### Formularbereich (neu, auf /kontakt)
- Neuer Abschnitt unter den Kontaktpunkten, im 12-Spalten-Raster wie die übrigen Seiten: Nummer, vertikale Orientierung, lange Azure-Linien, scharfkantige Felder ohne Rundungen.
- Überschrift im vorhandenen Stil, z. B. „Unverbindlich anfragen – Wir melden uns persönlich zurück."

### Formularfelder
- Name (Pflicht)
- Unternehmen (optional)
- E-Mail (Pflicht)
- Telefon (optional)
- Thema (Auswahl: Unternehmensberatung, IT-Beratung, Architektur & Hochbau, Sonstiges)
- Nachricht (Pflicht, mehrzeilig)
- Datenschutz-Checkbox mit Link auf /datenschutz (Pflicht)
- Absenden-Button „Anfrage senden"

### Mockup-Verhalten
- Validierung im Browser (Pflichtfelder, E-Mail-Format, Checkbox).
- Bei Absenden: Erfolgsmeldung als Hinweis „Demo – das Formular versendet noch nicht. Bitte nutzen Sie kontakt@denaro-consult.com" (Toast oder Inline-Hinweis), kein Versand, keine Datenspeicherung.
- Bestehender E-Mail-CTA-Block und Kontaktdaten bleiben unverändert erhalten.

### Nicht enthalten
- Kein Backend, kein E-Mail-Versand, keine Datenbank. Wenn später echter Versand gewünscht ist, wird Lovable Cloud aktiviert (separater Schritt).

### Technik
- Änderung nur in `src/routes/kontakt.tsx` (ggf. kleine Hilfskomponente in `src/components/`); bestehende UI-Bausteine (Button, Input, Textarea, Select, Checkbox, Label) aus dem vorhandenen shadcn-Set.
- Abschluss: Build-Check sowie Desktop-/Mobilprüfung von /kontakt (Felder bedienbar, Validierung sichtbar, kein Overflow, keine Browserfehler).
