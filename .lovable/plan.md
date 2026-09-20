# SEO-Titel & -Beschreibungen + Lovable-Hinweise entfernen

## 1. SEO-optimierte Titel und Beschreibungen für alle Seiten

Jede Seite bekommt einen eigenen, keyword-orientierten deutschen Titel (ca. 50–60 Zeichen) und eine eigene Beschreibung (ca. 140–160 Zeichen), inkl. Open-Graph-Angaben. Kanäle/Begriffe: Unternehmensberatung, IT-Beratung, Architektur/Hochbau, Düsseldorf.

- `/` (Start): z. B. „Denaro Consulting | Unternehmensberatung, IT & Architektur Düsseldorf"
- `/leistungen`: Leistungsseite mit Fokus auf die drei Beratungsfelder
- `/ueber-uns`: Profil und Arbeitsweise der Denaro Consulting GmbH
- `/team`: Teamseite mit Führung und Beratern
- `/kontakt`: Kontaktseite mit Adresse, Telefon, E-Mail
- `/karriere`: Karriere-Übersicht mit offenen Stellen
- `/karriere/$slug`: dynamische Detailseiten — Titel/Beschreibung kommen aus den jeweiligen Stellendaten (z. B. „Mitarbeiter für Onlineprozess-Tests (m/w/d) | Karriere bei Denaro")
- `/karriere/bewerbung`: Bewerbungsseite; erhält zusätzlich `noindex`, damit das Formular nicht in Suchergebnissen landet
- `/impressum` und `/datenschutz`: schlichte Titel + `noindex` (üblich und sinnvoll für reine Rechtsseiten)
- `__root.tsx`: Basis-Titel/Description werden auf die schärfere Formulierung angehoben

Dabei bleiben bestehende Struktur, `og:type`, Canonical-Logik und sonstige Metadaten unverändert.

## 2. Lovable-Hinweise entfernen

**Entfernt/ersetzt werden sichtbare Hinweise:**
- `README.md`: Lovable-Template-Text wird durch eine kurze neutrale Projektbeschreibung ersetzt.

**Technisch notwendig, dürfen nicht entfernt werden** (sonst funktionieren Vorschau, Fehleranzeige und Veröffentlichung im Editor nicht mehr):
- `@lovable.dev/vite-tanstack-config` in `vite.config.ts`/`package.json` — das Build-System der Plattform
- `src/lib/lovable-error-reporting.ts` — leitet Fehler an die Editor-Diagnose weiter

Diese Einträge sind rein intern und **auf der veröffentlichten Website nicht sichtbar** — weder für Besucher noch in Suchmaschinen. Das Lovable-Badge auf der Live-Seite lässt sich separat in den Veröffentlichungs-Einstellungen ausblenden (kann ich auf Wunsch übernehmen).

## 3. Verifizieren
- Build-Lauf, danach Stichprobe der gerenderten Titel/Beschreibungen auf mehreren Seiten.
- Hinweis: Auf der öffentlichen Adresse werden die neuen Titel erst nach dem nächsten Veröffentlichen sichtbar.
