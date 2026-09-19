import { createFileRoute } from "@tanstack/react-router";

import teamImage from "@/assets/denaro-boardroom-editorial.jpg";
import officeImage from "@/assets/denaro-duesseldorf-office.jpg";
import { ContactBand } from "@/components/site-shell";
import { PageIntro } from "@/components/page-sections";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({ meta: [
    { title: "Über uns | Denaro Consulting GmbH" },
    { name: "description", content: "Lernen Sie Denaro Consulting und unsere interdisziplinäre Arbeitsweise kennen." },
    { property: "og:title", content: "Über Denaro Consulting" },
    { property: "og:description", content: "Persönlich, interdisziplinär und konsequent lösungsorientiert." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: UeberUnsPage,
});

function UeberUnsPage() {
  return <>
    <PageIntro eyebrow="Über uns" title="Verantwortung beginnt mit genauem Zuhören." text="Denaro Consulting steht für persönliche Beratung, klare Kommunikation und den Anspruch, aus komplexen Anforderungen handlungsfähige Lösungen zu machen." />
    <section className="py-24 md:py-32">
      <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="group relative lg:col-span-7"><div className="absolute -left-5 -top-5 h-full w-full border border-brand-steel/30"/><img src={teamImage} alt="Interdisziplinäre Projektbesprechung" width={1600} height={1072} className="image-lift relative aspect-[16/10] w-full object-cover" /></div>
        <div className="lg:col-span-4 lg:col-start-9"><p className="eyebrow text-primary">Denaro Consulting GmbH</p><h2 className="mt-5 font-display text-4xl font-semibold leading-tight">Beratung mit Blick auf das <span className="editorial text-brand-steel">Ganze.</span></h2><p className="mt-7 leading-8 text-muted-foreground">Unternehmerische Fragen lassen sich selten isoliert betrachten. Prozesse beeinflussen Systeme, Systeme prägen Entscheidungen und Projekte brauchen eine klare Struktur. Genau hier setzen wir an: mit einem interdisziplinären Blick und einer Zusammenarbeit auf Augenhöhe.</p></div>
      </div>
    </section>
    <section className="bg-secondary py-24 md:py-32"><div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-4"><img src={officeImage} alt="Wirtschaftsstandort Düsseldorf" width={1600} height={1008} loading="lazy" className="aspect-[3/4] w-full object-cover" /></div><div className="lg:col-span-6 lg:col-start-7"><p className="eyebrow text-primary">Geschäftsführung</p><h2 className="mt-5 font-display text-4xl font-semibold">Alexander Valentino Denaro</h2><blockquote className="mt-8 border-l-2 border-brand-gold pl-7 font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">„Gute Beratung schafft Orientierung und macht aus einer komplexen Aufgabe einen <span className="editorial text-brand-steel">klaren nächsten Schritt.</span>“</blockquote><p className="mt-8 leading-8 text-muted-foreground">Vom Standort Düsseldorf aus begleiten wir Unternehmen und Projekte mit persönlicher Verantwortung, direkter Kommunikation und einem konsequenten Blick auf umsetzbare Ergebnisse.</p></div></div></section>
    <ContactBand />
  </>;
}
