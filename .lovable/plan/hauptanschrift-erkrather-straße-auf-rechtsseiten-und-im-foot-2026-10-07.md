# Hauptanschrift Erkrather Straße auf Rechtsseiten und im Footer

## Ziel

Die **Erkrather Straße 401, 40231 Düsseldorf** wird als **Hauptanschrift** eingetragen. Die bisherige Adresse **Mettlacher Straße 10, 40468 Düsseldorf** bleibt als **Zweigstelle** bestehen. Die neue Hauptanschrift steht zusätzlich im Footer.

Nur Impressum, Datenschutz und Footer werden geändert — alle anderen Seiten (z. B. Kontakt) bleiben unangetastet.

## Konkrete Änderungen

1. **`src/routes/impressum.tsx`** (Abschnitt 01 „Denaro Consulting GmbH"):
   - Hauptanschrift: Erkrather Straße 401, 40231 Düsseldorf, Deutschland
   - Darunter als Zeile „Zweigstelle: Mettlacher Straße 10, 40468 Düsseldorf"

2. **`src/routes/datenschutz.tsx`** (Abschnitt 1 „Verantwortlicher"):
   - Hauptanschrift: Erkrather Straße 401, 40231 Düsseldorf
   - Darunter „Zweigstelle: Mettlacher Straße 10, 40468 Düsseldorf"
   - Telefon- und E-Mail-Angaben sowie der restliche Text bleiben unverändert

3. **`src/components/site-shell.tsx`** (`SiteFooter`, Kontaktspalte):
   - Die Adresse im Footer wird durch die neue Hauptanschrift ersetzt:
     Erkrather Straße 401, 40231 Düsseldorf
   - Layout (getrennte Zeilen für Adresse, Telefon, E-Mail) bleibt wie im neuen Structuralist-Editorial-Footer

## Verifizierung

- `rg "Mettlacher"` zeigt danach nur noch Impressum (als Zweigstelle), Datenschutz (als Zweigstelle) und unveränderte Kontakt-Seite
- Playwright-Prüfung: Impressum, Datenschutz und Footer zeigen die neue Hauptanschrift korrekt, kein Layout-Bruch
