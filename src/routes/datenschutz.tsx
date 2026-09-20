import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-sections";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [
    { title: "Datenschutz | Denaro Consulting GmbH" },
    { name: "description", content: "Datenschutzhinweise der Denaro Consulting GmbH." },
    { property: "og:title", content: "Datenschutz | Denaro Consulting GmbH" },
    { property: "og:description", content: "Informationen zum Datenschutz auf dieser Website." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: DatenschutzPage,
});

const sections = [
  ["1. Verantwortlicher", <>Denaro Consulting GmbH<br />Mettlacher Straße 10<br />40468 Düsseldorf<br /><br />Telefon: 0211 87971210<br />E-Mail: kontakt@denaro-consult.com<br /><br />Vertreten durch den Geschäftsführer Alexander Valentino Denaro.</>],
  ["2. Allgemeine Hinweise", <>Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Personenbezogene Daten werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.</>],
  ["3. Hosting und Server-Logdateien", <>Beim Aufruf dieser Website können technisch erforderliche Daten durch den Hostinganbieter verarbeitet werden. Dazu gehören insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, Browsertyp und Betriebssystem. Die Verarbeitung erfolgt zur sicheren und störungsfreien Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</>],
  ["4. Kontaktaufnahme", <>Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen oder vertraglichen Anliegen, im Übrigen Art. 6 Abs. 1 lit. f DSGVO.</>],
  ["5. Schriftarten", <>Diese Website kann Schriftarten eines externen Anbieters laden. Dabei kann Ihre IP-Adresse an den Anbieter übertragen werden. Vor der Veröffentlichung sollte geprüft werden, ob die Schriften lokal eingebunden oder eine Einwilligungslösung erforderlich ist.</>],
  ["6. Speicherdauer", <>Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</>],
  ["7. Ihre Rechte", <>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.</>],
  ["8. Stand", <>Stand: September 2026</>],
] as const;

function DatenschutzPage() {
  return <>
    <PageIntro eyebrow="Rechtliches" title="Datenschutz" text="Informationen über die Verarbeitung personenbezogener Daten auf dieser Website." number="05" />
    <section className="py-12 md:py-28"><div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-10">
      <aside className="lg:col-span-3"><p className="eyebrow text-primary">Datenschutzhinweise</p><p className="mt-5 border-l-2 border-primary pl-5 text-sm leading-7 text-muted-foreground">Diese Datenschutzerklärung ist ein allgemeiner Ausgangsentwurf. Sie muss vor Veröffentlichung an das tatsächliche Hosting, eingebundene Dienste und weitere Datenverarbeitungen angepasst und rechtlich geprüft werden.</p></aside>
      <div className="border-t border-border leading-8 lg:col-span-8 lg:col-start-5">{sections.map(([title, content], index) => <div key={title} className="grid border-b border-border py-6 md:grid-cols-[3rem_1fr] md:gap-7 md:py-8"><span className="text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span><div><h2 className="font-display text-xl font-semibold">{title}</h2><div className="mt-3 text-muted-foreground">{content}</div></div></div>)}</div>
    </div></section>
  </>;
}
