# Logo im Header und Footer austauschen

## Ziel
Das hochgeladene Logo (`denarologo.png`, dunkelblaue „denaro"-Wortmarke) ersetzt den bisherigen selbst gebauten Markenblock (blaues „D"-Kästchen + Schriftzug DENARO / CONSULTING) überall dort, wo die Marke erscheint.

## Vorgehen

1. **Logo als CDN-Asset einbinden**
   - `lovable-assets create` aus `/mnt/user-uploads/denarologo.png` → `src/assets/denaro-logo.png.asset.json`
   - Da das Logo vermutlich einen weißen Hintergrund hat, der auf hellem Theme stören könnte: Prüfung, ob der weiße Rand sichtbar auffällt. Falls ja, Hintergrund transparent machen (Bildbearbeitung) und erneut hochladen.

2. **`Brand`-Komponente in `src/components/site-shell.tsx` umbauen**
   - Statt Icon-Kästchen + zweizeiligem Schriftzug: `<img>` mit dem neuen Logo, verlinkt auf die Startseite.
   - Größe passend zur Headerhöhe (ca. `h-8`–`h-9`, Breite automatisch), scharfkantiges Design bleibt.
   - Der dunkelblaue Farbton des Logos harmoniert mit dem bestehenden Azure/Anthrazit-Farbsystem; keine Farbänderungen nötig.

3. **Footer**
   - Der Footer verwendet dieselbe `Brand`-Komponente bzw. denselben Markenblock — wird automatisch mit aktualisiert bzw. dort ebenfalls das Logo eingesetzt (inkl. gut lesbarer Größe).

4. **Favicon prüfen**
   - Optional: Favicon im Browser-Tab auf ein „D"-Kürzel aus dem Logo abstimmen, falls gewünscht (nur wenn kurz bestätigt, sonst unverändert lassen).

5. **Verifizieren**
   - Build-Lauf.
   - Playwright-Prüfung Desktop + Mobil: Header und Footer auf Startseite und einer Unterseite, Logo lädt, keine Layout-Verschiebung.

## Bewusst unverändert
- Navigation, Farben, Texte, Seiteninhalte, Formulare.
