import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-sections";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [
    { title: "Impressum | Denaro Consulting GmbH" },
    { name: "description", content: "Impressum und Anbieterkennzeichnung der Denaro Consulting GmbH." },
    { property: "og:title", content: "Impressum | Denaro Consulting GmbH" },
    { property: "og:description", content: "Rechtliche Anbieterinformationen der Denaro Consulting GmbH." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return <>
    <PageIntro eyebrow="Rechtliches" title="Impressum" text="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)." number="04" />
    <section className="py-12 md:py-28"><div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-10"><aside className="lg:col-span-3"><p className="eyebrow text-primary">Anbieterkennzeichnung</p><p className="mt-5 text-sm leading-7 text-muted-foreground">Rechtliche Informationen zur Denaro Consulting GmbH.</p></aside><div className="border-t border-border leading-8 lg:col-span-8 lg:col-start-5 [&>div]:grid [&>div]:border-b [&>div]:border-border [&>div]:py-6 md:[&>div]:py-8 md:[&>div]:grid-cols-[3rem_1fr] md:[&>div]:gap-7">
      <div><span className="text-xs font-bold text-primary">01</span><div><h2 className="font-display text-2xl font-extrabold">Denaro Consulting GmbH</h2><p className="mt-3 text-muted-foreground">Mettlacher Straße 10<br />40468 Düsseldorf<br />Deutschland</p></div></div>
      <div><span className="text-xs font-bold text-primary">02</span><div><h2 className="font-display text-xl font-extrabold">Vertreten durch</h2><p className="mt-2 text-muted-foreground">Geschäftsführer: Alexander Valentino Denaro</p></div></div>
      <div><span className="text-xs font-bold text-primary">03</span><div><h2 className="font-display text-xl font-extrabold">Kontakt</h2><p className="mt-2 text-muted-foreground">Telefon: <a className="tap-target text-primary underline" href="tel:+4921187971210">0211 87971210</a><br />E-Mail: <a className="tap-target text-primary underline" href="mailto:kontakt@denaro-consult.com">kontakt@denaro-consult.com</a><br />Internet: denaro-consult.solutions</p></div></div>
      <div><span className="text-xs font-bold text-primary">04</span><div><h2 className="font-display text-xl font-extrabold">Registereintrag</h2><p className="mt-2 text-muted-foreground">Handelsregister: HRB 107712<br />Registergericht: Amtsgericht Düsseldorf</p></div></div>
      <div><span className="text-xs font-bold text-primary">05</span><div><h2 className="font-display text-xl font-extrabold">Umsatzsteuer-ID</h2><p className="mt-2 text-muted-foreground">Umsatzsteuer-Identifikationsnummer: DE163919849</p></div></div>
      <div><span className="text-xs font-bold text-primary">06</span><div><h2 className="font-display text-xl font-extrabold">Verbraucherstreitbeilegung</h2><p className="mt-2 text-muted-foreground">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></div></div>
      <p className="mt-8 border-l-2 md:mt-10 border-primary pl-5 text-sm text-muted-foreground">Hinweis: Dieser Text ist ein allgemeiner Entwurf und ersetzt keine rechtliche Prüfung.</p>
    </div></div></section>
  </>;
}
