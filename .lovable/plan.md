# Karrierebereich für Denaro Consulting

Neuer Karrierebereich mit Stellenübersicht, Detailseiten je Stelle und einer eigenen Bewerbungsseite, die Bewerbungen an dieselbe Schnittstelle wie im Referenzprojekt sendet.

## Seiten

**/karriere — Übersicht**
- Kopfbereich im bestehenden hellen Azure-Structuralist-Stil (Seitennummer, vertikales Label, Azure-Linien)
- Liste aller offenen Stellen als nummerierte Zeilen mit Titel, Kurzbeschreibung und Merkmalen (Standort, Modell, Arbeitszeit, Vergütung)
- Abschlussband für Initiativbewerbungen mit Verweis auf kontakt@denaro-consult.com
- Verlinkung zu jeder Detailseite und zur Bewerbungsseite

**/karriere/$slug — Detailseite je Stelle**
- Eckdaten-Leiste (Standort, Arbeitsmodell, Arbeitszeit, Vergütung falls vorhanden)
- Abschnitte: Über die Position, Aufgaben, Profil, Was wir bieten
- Vor-/Zurück-Navigation zwischen Stellen, Button „Jetzt bewerben“ mit vorausgewählter Stelle
- Unbekannter Slug leitet auf /karriere um

**/karriere/bewerbung — Bewerbungsformular**
Zweischrittiges Formular wie im Referenzprojekt, gestaltet im Denaro-Stil:
- Schritt 01 Kontakt: Stelle (Auswahl, per Link vorausgewählt), Vorname, Nachname, E-Mail, Telefon, Pflichtabfrage deutsche Staatsbürgerschaft (bei „Nein“ Hinweis und keine Weiterleitung zu Schritt 2)
- Schritt 02 Details: Anstellungsart (Minijob/Teilzeit/Vollzeit), Startdatum, PLZ, Stadt
- Schrittanzeige, Zurück-Button, Pflichtfeldprüfung mit Hinweisen
- Nach erfolgreichem Absenden Bestätigungsansicht mit Option „Neue Bewerbung senden“

## Stellenanzeigen

Fünf Anzeigen, passend zum Unternehmen (Düsseldorf):
1. Mitarbeiter (m/w/d) für Onlineprozess-Tests — Remote, Minijob/Teilzeit, flexible Stunden, Stundenlohn wie im Referenzprojekt
2. Berater (m/w/d) Unternehmensberatung — Düsseldorf / hybrid
3. Berater (m/w/d) IT-Beratung — Düsseldorf / remote
4. Architekt / Bauzeichner (m/w/d) Hochbau — Düsseldorf
5. Recruiter (m/w/d) — Düsseldorf / hybrid

Inhalte (Aufgaben, Profil, Leistungen) werden sachlich formuliert; keine erfundenen Kennzahlen, Referenzen oder Auszeichnungen. Gehälter werden nur bei der Prozesstester-Stelle genannt (Stundenlohn), sonst nicht.

## Absenden der Bewerbung

- Versand per POST als FormData an dieselbe Schnittstelle wie im Referenzprojekt: `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application`
- Mitgesendete Felder: first_name, last_name, email, phone, employment_type, start_date, branding_id
- Branding-ID identisch zum Referenzprojekt: `9c944500-d35c-40b9-99b7-0d779350ce77`
- Meta Pixel mit derselben ID `1076768121483815` auf der Bewerbungsseite, PageView beim Laden und Lead nach erfolgreichem Absenden

## Einbindung

- „Karriere“ in Navigation und Footer ergänzen
- Eigene Seitentitel und Beschreibungen (Metadaten) für alle drei neuen Seiten
- Prüfung auf Desktop und Mobil: Navigation, Formularschritte, Pflichtfelder, erfolgreicher Versand, kein horizontaler Überlauf

## Technische Details

- Neue Routen `src/routes/karriere/index.tsx`, `src/routes/karriere/$slug.tsx`, `src/routes/karriere/bewerbung.tsx` (TanStack Router; `bewerbung` hat Vorrang vor `$slug`)
- Stellendaten zentral in `src/data/karriere-stellen.ts`
- Vorauswahl der Stelle über Suchparameter `?stelle=`
- Bestehende UI-Bausteine (Input, Select, Button) und die vorhandenen Section-Komponenten wiederverwenden
- Keine Backend-Anbindung im Projekt nötig, da die externe Schnittstelle direkt aufgerufen wird
