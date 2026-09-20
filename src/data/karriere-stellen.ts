export interface Stelle {
  slug: string;
  titel: string;
  standort: string;
  modell: string;
  arbeitszeit?: string;
  stundenlohn?: string;
  kurzbeschreibung: string;
  beschreibung: string;
  aufgaben: string[];
  voraussetzungen: string[];
  benefits: string[];
}

export const stellen: Stelle[] = [
  {
    slug: "onlineprozess-tester",
    titel: "Mitarbeiter (m/w/d) für Onlineprozess-Tests",
    standort: "Düsseldorf / Remote",
    modell: "Remote / Minijob / Teilzeit",
    arbeitszeit: "Flexibel (ca. 5–30 Std./Woche)",
    stundenlohn: "29 €",
    kurzbeschreibung:
      "Prüfe digitale Abläufe und Anwendungen remote und halte deine Eindrücke strukturiert fest – flexibel und ohne Vorkenntnisse.",
    beschreibung:
      "Du bist regelmäßig online unterwegs und achtest darauf, ob Webseiten oder Anwendungen sauber funktionieren? Dann könnte diese Tätigkeit gut zu dir passen. Für die Begleitung unserer Beratungsprojekte suchen wir Personen, die digitale Prozesse testen und ihre Beobachtungen strukturiert dokumentieren. Die Aufgaben sind klar beschrieben und werden verständlich erklärt – Vorkenntnisse sind nicht erforderlich.",
    aufgaben: [
      "Testen von Webseiten, Portalen und mobilen Anwendungen",
      "Prüfen von Abläufen aus Sicht eines Nutzers",
      "Dokumentation von Auffälligkeiten und Rückmeldungen",
      "Erkennen von einfachen Bedienungsproblemen",
      "Weitergabe von Verbesserungsvorschlägen an das Projektteam",
    ],
    voraussetzungen: [
      "Zuverlässige und sorgfältige Arbeitsweise",
      "Grundlegendes Verständnis für Internetanwendungen",
      "Ein internetfähiges Gerät (Smartphone, Tablet oder PC)",
      "Eigenständiges Arbeiten und Motivation",
      "Keine spezielle Ausbildung notwendig",
    ],
    benefits: [
      "Flexible Zeiteinteilung (auch abends oder am Wochenende möglich)",
      "Arbeiten von zu Hause aus",
      "Einfache Einarbeitung mit klaren Anleitungen",
      "Unkomplizierte Zusammenarbeit mit festen Ansprechpartnern",
      "Vergütung auf Stundenbasis",
    ],
  },
  {
    slug: "berater-unternehmensberatung",
    titel: "Berater (m/w/d) Unternehmensberatung",
    standort: "Düsseldorf",
    modell: "Vollzeit / hybrid",
    kurzbeschreibung:
      "Begleite mittelständische Unternehmen bei Strategie, Organisation und der Umsetzung konkreter Veränderungsvorhaben.",
    beschreibung:
      "In dieser Rolle arbeitest du direkt mit Geschäftsführungen und Fachbereichen zusammen. Du analysierst Strukturen und Abläufe, erarbeitest Entscheidungsgrundlagen und begleitest die Umsetzung bis zum messbaren Ergebnis.",
    aufgaben: [
      "Analyse von Organisationsstrukturen und Geschäftsprozessen",
      "Erarbeitung von Entscheidungsgrundlagen für die Geschäftsführung",
      "Konzeption und Begleitung von Veränderungsvorhaben",
      "Vorbereitung und Moderation von Workshops",
      "Dokumentation von Ergebnissen und Handlungsempfehlungen",
    ],
    voraussetzungen: [
      "Abgeschlossenes Studium, idealerweise mit wirtschaftlichem Schwerpunkt",
      "Erste Berufserfahrung in Beratung, Projektarbeit oder einer Fachfunktion",
      "Strukturierte, analytische Arbeitsweise",
      "Sicheres Auftreten im Austausch mit Entscheidern",
      "Sehr gute Deutschkenntnisse in Wort und Schrift",
    ],
    benefits: [
      "Direkte Zusammenarbeit mit der Geschäftsführung",
      "Vielfältige Projekte im Mittelstand",
      "Hybrides Arbeiten mit Büro in Düsseldorf",
      "Individuelle Weiterbildung",
      "Kurze Entscheidungswege",
    ],
  },
  {
    slug: "berater-it-beratung",
    titel: "Berater (m/w/d) IT-Beratung",
    standort: "Düsseldorf / Remote",
    modell: "Vollzeit",
    kurzbeschreibung:
      "Übersetze fachliche Anforderungen in tragfähige IT-Lösungen und begleite Digitalisierungsvorhaben von der Analyse bis zum Betrieb.",
    beschreibung:
      "Du arbeitest an der Schnittstelle zwischen Fachbereich und Technik. Du erhebst Anforderungen, bewertest Systeme und Prozesse und begleitest die Einführung von Lösungen in enger Abstimmung mit unseren Kunden.",
    aufgaben: [
      "Aufnahme und Bewertung fachlicher Anforderungen",
      "Analyse bestehender Systemlandschaften und Prozesse",
      "Erarbeitung von Digitalisierungs- und Umsetzungskonzepten",
      "Begleitung von Auswahl- und Einführungsprojekten",
      "Abstimmung mit Dienstleistern und internen Teams",
    ],
    voraussetzungen: [
      "Studium oder Ausbildung mit IT-Bezug",
      "Erfahrung in IT-Projekten, Anforderungsanalyse oder Prozessberatung",
      "Verständnis für Schnittstellen, Datenflüsse und Systemarchitekturen",
      "Klare Kommunikation zwischen Fach- und Technikseite",
      "Sehr gute Deutschkenntnisse in Wort und Schrift",
    ],
    benefits: [
      "Projekte mit echter Gestaltungsmöglichkeit",
      "Flexible Arbeitsorte, remote möglich",
      "Moderne Arbeitsausstattung",
      "Fachliche Weiterentwicklung",
      "Kollegiales, kleines Team",
    ],
  },
  {
    slug: "architekt-hochbau",
    titel: "Architekt / Bauzeichner (m/w/d) Hochbau",
    standort: "Düsseldorf",
    modell: "Vollzeit / Teilzeit",
    kurzbeschreibung:
      "Arbeite an Hochbauprojekten mit – von der Planung über die Koordination bis zur wirtschaftlichen Projektbetrachtung.",
    beschreibung:
      "Du unterstützt unsere Hochbauprojekte planerisch und organisatorisch. Dabei verbindest du gestalterische Qualität mit einer wirtschaftlichen Perspektive und sorgst für klare Abläufe zwischen allen Beteiligten.",
    aufgaben: [
      "Erstellung und Pflege von Planunterlagen im Hochbau",
      "Mitwirkung in den Leistungsphasen der Planung",
      "Koordination von Schnittstellen zwischen Beteiligten",
      "Unterstützung bei Terminen, Kosten und Qualitäten",
      "Vorbereitung von Unterlagen für Abstimmungen und Genehmigungen",
    ],
    voraussetzungen: [
      "Studium der Architektur oder Ausbildung als Bauzeichner (m/w/d)",
      "Sicherer Umgang mit gängiger CAD-Software",
      "Kenntnisse relevanter Normen und Vorschriften im Hochbau",
      "Sorgfältige und strukturierte Arbeitsweise",
      "Sehr gute Deutschkenntnisse in Wort und Schrift",
    ],
    benefits: [
      "Projekte mit gestalterischem Anspruch",
      "Enge Zusammenarbeit mit Beratung und Technologie",
      "Büro in Düsseldorf mit guter Anbindung",
      "Teilzeitmodelle möglich",
      "Fachliche Weiterbildung",
    ],
  },
  {
    slug: "recruiter",
    titel: "Recruiter (m/w/d)",
    standort: "Düsseldorf",
    modell: "Vollzeit / hybrid",
    kurzbeschreibung:
      "Gewinne Fachkräfte für unsere Beratungs-, IT- und Architekturprojekte und begleite Bewerbende durch den gesamten Prozess.",
    beschreibung:
      "Du verantwortest die Besetzung offener Positionen – von der Stellenausschreibung über die Ansprache bis zum Vertragsangebot. Dabei arbeitest du eng mit der Geschäftsführung und den Projektleitungen zusammen.",
    aufgaben: [
      "Erstellung und Veröffentlichung von Stellenausschreibungen",
      "Aktive Ansprache und Vorauswahl von Kandidatinnen und Kandidaten",
      "Durchführung von Erst- und Fachgesprächen",
      "Begleitung des gesamten Bewerbungsprozesses",
      "Aufbau und Pflege eines Kandidatennetzwerks",
    ],
    voraussetzungen: [
      "Erfahrung im Recruiting oder in der Personalarbeit",
      "Freude am Kontakt mit Menschen und klare Kommunikation",
      "Strukturierte, eigenverantwortliche Arbeitsweise",
      "Sicherer Umgang mit digitalen Recruiting-Werkzeugen",
      "Sehr gute Deutschkenntnisse in Wort und Schrift",
    ],
    benefits: [
      "Eigenverantwortlicher Aufgabenbereich",
      "Kurze Abstimmungswege zur Geschäftsführung",
      "Hybrides Arbeiten mit Büro in Düsseldorf",
      "Weiterbildung im Recruiting",
      "Kollegiales Team",
    ],
  },
];

export function findStelle(slug: string) {
  return stellen.find((stelle) => stelle.slug === slug);
}
