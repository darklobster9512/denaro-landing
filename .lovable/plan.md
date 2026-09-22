# Meta Pixel auf neue ID umstellen (site-weit)

## Hintergrund
Der Meta-Pixel existiert aktuell nur auf der Bewerbungsseite (`src/routes/karriere/bewerbung.tsx`) mit der alten ID `1076768121483815` und wird dort per `useEffect` manuell geladen. Der Nutzer hat den offiziellen Meta-Pixel-Code mit der neuen ID `1772008590507911` geliefert und möchte diesen eingesetzt haben.

## Umsetzung

### 1. Globaler Pixel in `src/routes/__root.tsx`
- Offiziellen Meta-Pixel-Code mit ID `1772008590507911` einmalig im `<head>` der Root-Shell einbinden (inline Script via `dangerouslySetInnerHTML`).
- `<noscript>`-Fallback-Bild (`https://www.facebook.com/tr?id=1772008590507911&ev=PageView&noscript=1`) direkt am Anfang von `<body>` einfügen.
- Damit trackt die Seite `PageView` auf allen Unterseiten.

### 2. `src/routes/karriere/bewerbung.tsx` aufräumen
- Doppeltes Initialisieren entfernen: Der `useEffect` lädt fbevents.js nicht mehr selbst, sondern nutzt das global vorhandene `window.fbq`.
- `PIXEL_ID` auf `1772008590507911` aktualisieren (bzw. Konstante entfernen, da Global-Init übernimmt).
- Das `fbq("track", "Lead")` nach erfolgreichem Absenden bleibt unverändert bestehen.

## Nicht geändert
- Formularlogik, Branding-ID `d212b0e8-98e1-4727-b370-b850275a7dd0`, API-URL, Design und alle anderen Seiten.

## Verifikation
- Build (`bun run build`) erfolgreich.
- Playwright-Prüfung: `fbq` ist auf Startseite und Bewerbungsseite global initialisiert, fbevents.js wird geladen, kein doppeltes `init`, kein Console-Error.
