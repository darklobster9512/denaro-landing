# E-Mail-Adressen in den Rechtstext-Seiten aktualisieren

## Ziel
Die neuen E-Mail-Adressen werden auf den beiden Rechtstext-Seiten hinterlegt:

- `kontakt@denaro-consult.com` — allgemeiner Kontakt
- `datenschutz@denaro-consult.com` — Datenschutzanliegen
- `geschaeftsfuehrung@denaro-consult.com` — Geschäftsführung
- `karriere@denaro-consult.com` — Bewerbungen / Karriere

## Änderungen

### Impressum (`src/routes/impressum.tsx`)
- Abschnitt „03 Kontakt": `kontakt@denaro-consult.com` bleibt, ergänzt um eine Zeile für die Geschäftsführung (`geschaeftsfuehrung@denaro-consult.com`) und eine Zeile für Bewerbungen (`karriere@denaro-consult.com`).
- Alle Adressen bleiben als klickbare `mailto:`-Links im bestehenden Stil.

### Datenschutz (`src/routes/datenschutz.tsx`)
- Abschnitt „1. Verantwortlicher": `kontakt@denaro-consult.com` bleibt als allgemeine Kontaktdaten.
- Abschnitt „7. Ihre Rechte": `datenschutz@denaro-consult.com` wird als zuständige Adresse für Auskunfts- und Datenschutzanfragen ergänzt.

## Umfang
- Nur die zwei Rechtstext-Seiten; keine Änderungen an Layout, anderen Seiten oder Formularen.
- Anschließend Build-Prüfung und kurze Sichtprüfung beider Seiten.
