# Kontaktformular auf Enterprise-Niveau + Bestätigungs-Popup

## Ziel
Das Kontaktformular auf `/kontakt` bekommt denselben hochwertigen Structuralist-Look wie der Rest der Seite. Nach dem Absenden öffnet sich immer ein Bestätigungs-Popup (kein Inline-Hinweis mehr).

## Formular-Redesign
- Formular in ein nummeriertes, gerastertes Panel im Structuralist-Stil einbetten: dünne Rahmenlinien, Azure-Akzentlinie, keine Schatten, keine Rundungen.
- Klare Feld-Struktur mit nummerierten Gruppen (01 Ihre Angaben, 02 Ihr Vorhaben) und feinen Trennlinien statt losem Feld-Raster.
- Größere, hochwertigere Eingabefelder: minimalistisch, unterstrichene bzw. fein umrandete Felder mit Azure-Fokus-Linie, ruhige Platzhalter, konsistente Label-Typografie im Editorial-Stil.
- Pflichtfelder sauber markiert, Datenschutz-Checkbox optisch integriert.
- Deutlicher, hochwertiger Absende-Button im Azure-Branding.

## Bestätigungs-Popup
- Nach erfolgreichem Absenden erscheint immer ein modales Popup (vorhandene Dialog-Komponente).
- Inhalt: Haken-Icon, Überschrift „Vielen Dank für Ihre Anfrage.", kurzer Text mit Hinweis auf persönliche Rückmeldung und E-Mail-Adresse `kontakt@denaro-consult.com`, Schließen-Button.
- Da das Formular ein Mockup bleibt, steht im Popup der Hinweis, dass aktuell keine Daten versendet werden und Anfragen direkt per E-Mail laufen.
- Popup im gleichen Design: scharfkantig, helle Fläche, Azure-Akzent.
- Nach dem Schließen wird das Formular zurückgesetzt.

## Verhalten & Prüfung
- Native Pflichtfeld-Validierung bleibt bestehen; Popup kommt nur bei vollständig ausgefülltem Formular.
- Kein Versand, keine Speicherung von Daten (bleibt Mockup).
- Keine Änderungen an anderen Seiten oder am restlichen Kontaktbereich.
- Build plus Playwright-Check Desktop/Mobil: Popup öffnet, Validierung greift, kein Overflow, keine Fehler.
