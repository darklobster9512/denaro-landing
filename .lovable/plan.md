# Hochgeladenes Favicon einbinden (suchmaschinen-tauglich)

## Ziel
Das hochgeladene Bild (`denarofavicon.png`, dunkelblaues „d“-Zeichen) wird das Favicon der Website und soll von Google in den Suchergebnissen angezeigt werden können.

## Vorgehen

1. **Favicon-Datei ersetzen**
   - Das hochgeladene „d“-Icon auf 48×48 px bringen (Google verlangt für die Anzeige in Suchergebnissen eine Größe als Vielfaches von 48 px) und als `public/favicon.png` speichern — ersetzt das aktuell aus dem Logo erzeugte Favicon.
   - Favicons müssen als echte Datei unter `public/` liegen (kein CDN-Verweis), damit sie unter `/favicon.png` erreichbar und crawlbar sind.

2. **Verweis im Seitenkopf prüfen**
   - `src/routes/__root.tsx` verweist bereits mit `{ rel: "icon", href: "/favicon.png", type: "image/png" }` auf genau diese Datei — die Verlinkung bleibt also korrekt und muss nicht geändert werden.
   - Damit ist die Google-Voraussetzung erfüllt: gültiges `<link rel="icon">` im `<head>` der Startseite, crawlbarer Pfad, passende Größe.

3. **Verifizieren**
   - Build-Lauf.
   - Kurzer Abruf von `/favicon.png` (Status 200, Bild-Typ) und Sichtprüfung im Browser-Tab.

## Wichtig zu wissen
- Ob und wann Google das Favicon in den Suchergebnissen anzeigt, entscheidet Google nach dem nächsten Crawl der Seite — die technischen Voraussetzungen schaffen wir hiermit, die Indexierung selbst kann Tage bis Wochen dauern.
- Sichtbar live ist das neue Favicon auf der öffentlichen Adresse erst nach dem nächsten Veröffentlichen (Publish).

## Bewusst unverändert
- Logo in Header/Footer, Farben, Inhalte, andere Metadaten.
