# Footer-Redesign: Structuralist Editorial

## Ziel

Der Footer (in `src/components/site-shell.tsx`, `SiteFooter`) wird nach der vom Nutzer gewählten Richtung **„Structuralist Editorial"** (Prototyp v2) neu aufgebaut. Nur der Footer wird geändert — Header, Menü, Seiteninhalte und Formulare bleiben unangetastet.

## Neues Layout (Desktop)

Kartenartiger Footer mit feinem Rahmen und vertikalen Trennlinien, vier Spalten im 12-Spalten-Raster:

```text
+--------------------------------------------------------------------------+
| Spalte 1 (4/12)      | Leistungen (3/12) | Unternehmen (2/12) | Kontakt (3/12)
| denaro-Logo          | Unternehmens-     | Über uns           | Mettlacher Straße 10
| Tagline              |   beratung        | Team               | 40468 Düsseldorf
| HRB 107712 AG        | IT-Beratung       | Karriere           | 0211 87971210
|   Düsseldorf         | Architektur &     | Kontakt            | kontakt@denaro-consult.com
| UStId DE163919849    |   Hochbau         |                    |
| Geschäftsführer:     |                   |                    |
|   A. V. Denaro       |                   |                    |
+--------------------------------------------------------------------------+
| © 2026 Denaro Consulting GmbH   Impressum   Datenschutz      DÜSSELDORF → |
+--------------------------------------------------------------------------+
```

## Konkrete Umsetzung

1. **Rahmen & Raster**: Footer als helles Panel mit `border border-border` und `shadow-sm`, innen `grid grid-cols-1 md:grid-cols-12`; Spalten per `md:border-r` getrennt, untere Reihe per `border-t` abgesetzt.
2. **Spalte 1 – Identität**: Bestehendes Logo (`/images/denaro-logo.png`) + Kurz-Tagline; darunter Registerangaben (HRB 107712 Amtsgericht Düsseldorf, UStId DE163919849) in kompakter Monospace-Typografie, darunter „Geschäftsführer: Alexander Valentino Denaro".
3. **Spalte 2 – Leistungen**: Drei Links auf die Anker-/Leistungsseite (Unternehmensberatung, IT-Beratung, Architektur & Hochbau → `/leistungen#unternehmensberatung` usw.).
4. **Spalte 3 – Unternehmen**: Links zu Über uns, Team, Karriere, Kontakt.
5. **Spalte 4 – Kontakt**: Adresse, Telefon (`tel:`) und E-Mail (`mailto:`) als **getrennte, eigenständige Zeilen** (behebt das aktuelle Zusammenschieben), E-Mail mit Azure-Unterstreichen.
6. **Untere Rechtszeile**: © 2026, Impressum, Datenschutz links; „Düsseldorf →" rechts mit dezentem Azure-Hover (Pfeil bewegt sich leicht).
7. **Design-Token**: Ausschließlich semantische Tokens (`border-border`, `text-muted-foreground`, `text-primary` usw.) — keine harten Farbwerte; scharfkantig (`rounded-none`), keine Gradienten/Orbs.
8. **Mobile**: Spalten stapeln sich mit `border-b`-Trennern, Tippflächen weiterhin ≥ 44 px (`.tap-target`), kompakte Abstände — Desktop bleibt über `md:`-Klassen unverändert zum Prototyp.

## Verifizierung

- `bun run build`
- Playwright-Prüfung Desktop (1280 px) und Mobil (390 px): Footer vollständig sichtbar, alle Links klickbar, kein horizontaler Overflow, keine Page-Errors.
