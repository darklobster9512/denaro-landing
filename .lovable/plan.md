# Meta Pixel siteweit auf neue ID 1653879779616473 umstellen

## Umsetzung
- In der globalen Seitenvorlage die Pixel-ID `1772008590507911` durch `1653879779616473` ersetzen (Init-Aufruf und noscript-Fallback-Bild).
- Bewerbungsseite auf Reste der alten ID prüfen und ggf. ersetzen; das Lead-Event beim gültigen Absenden bleibt unverändert.

## Nicht geändert
- Formularlogik, Branding-ID, Design, alle anderen Inhalte.

## Verifikation
- Suche bestätigt: alte ID kommt nirgends mehr vor.
- Browser-Check: Pixel lädt mit neuer ID, PageView wird gesendet.
