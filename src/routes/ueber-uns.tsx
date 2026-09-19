import { createFileRoute } from "@tanstack/react-router";

import teamImage from "@/assets/denaro-boardroom-stock.jpg.asset.json";
import officeImage from "@/assets/denaro-duesseldorf-stock-day.jpg.asset.json";
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
    <PageIntro eyebrow="Unternehmensprofil" title="Verantwortung beginnt mit genauem Zuhören." text="Denaro Consulting steht für persönliche Beratung, klare Kommunikation und den Anspruch, aus komplexen Anforderungen handlungsfähige Lösungen zu machen." number="02" />
    <section className="py-24 md:py-32">
      <div className="site-container grid lg:grid-cols-12">
        <div className="group relative overflow-hidden border-x border-border lg:col-span-7"><img src={teamImage.url} alt="Interdisziplinäre Projektbesprechung" width={1600} height={1072} className="image-lift aspect-[16/10] h-full w-full object-cover" /><span className="absolute left-0 top-0 bg-primary px-5 py-4 text-sm font-bold text-primary-foreground">01</span></div>
        <div className="border-x border-t border-border p-8 lg:col-span-5 lg:border-l-0 lg:border-t-0 lg:p-14"><p className="eyebrow text-primary">Denaro Consulting GmbH</p><h2 className="mt-8 font-display text-4xl font-light leading-tight md:text-5xl">Beratung mit Blick auf das <span className="font-semibold text-primary">Ganze.</span></h2><p className="mt-8 leading-8 text-muted-foreground">Unternehmerische Fragen lassen sich selten isoliert betrachten. Prozesse beeinflussen Systeme, Systeme prägen Entscheidungen und Projekte brauchen eine klare Struktur. Genau hier setzen wir an: mit einem interdisziplinären Blick und einer Zusammenarbeit auf Augenhöhe.</p><div className="mt-10 border-t border-border pt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Wirtschaft · Systeme · Projekte</div></div>
      </div>
    </section>
    <section className="structural-grid border-y border-border bg-secondary py-24 md:py-32"><div className="site-container grid border border-border bg-background lg:grid-cols-12"><div className="relative min-h-[30rem] overflow-hidden lg:col-span-5"><img src={officeImage.url} alt="Wirtschaftsstandort Düsseldorf" width={1600} height={1008} loading="lazy" className="absolute inset-0 size-full object-cover" /><span className="absolute bottom-0 left-0 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground">Düsseldorf</span></div><div className="border-t border-border p-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-14"><div className="flex items-start justify-between"><p className="eyebrow text-primary">Geschäftsführung</p><span className="text-sm font-bold text-primary">02/</span></div><h2 className="mt-8 font-display text-4xl font-semibold">Alexander Valentino Denaro</h2><blockquote className="mt-10 border-l-2 border-primary pl-7 font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">„Gute Beratung schafft Orientierung und macht aus einer komplexen Aufgabe einen <span className="text-primary">klaren nächsten Schritt.</span>“</blockquote><p className="mt-10 max-w-2xl leading-8 text-muted-foreground">Vom Standort Düsseldorf aus begleiten wir Unternehmen und Projekte mit persönlicher Verantwortung, direkter Kommunikation und einem konsequenten Blick auf umsetzbare Ergebnisse.</p></div></div></section>
    <ContactBand />
  </>;
}
