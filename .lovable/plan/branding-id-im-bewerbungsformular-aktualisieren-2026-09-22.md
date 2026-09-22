# Branding-ID im Bewerbungsformular aktualisieren

## Aktueller Stand
- `src/routes/karriere/bewerbung.tsx` sendet Bewerbungen per FormData an die externe Edge Function; dort ist aktuell die alte Branding-ID `9c944500-d35c-40b9-99b7-0d779350ce77` als `BRANDING_ID` hinterlegt (Zeile 11).
- Die neue Branding-ID wurde noch nicht eingetragen.

## Änderung
1. In `src/routes/karriere/bewerbung.tsx` die Konstante ersetzen:
   `const BRANDING_ID = "d212b0e8-98e1-4727-b370-b850275a7dd0";`
2. Sonst nichts verändern — Versand-URL, Meta-Pixel, Formularlogik und alle anderen Dateien bleiben unangetastet.

## Verifikation
- Build ausführen (`bun run build`).
- Per Playwright die Bewerbungsseite öffnen und bestätigen, dass das Formular unverändert funktioniert (Submit-Verhalten bleibt Mock-los bzw. wie bisher).
