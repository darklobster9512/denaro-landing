import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/denaro-boardroom-editorial.jpg";
import architectureImage from "@/assets/denaro-architecture-editorial.jpg";
import { ContactBand } from "@/components/site-shell";
import { ServicesGrid, TextLink } from "@/components/page-sections";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Denaro Consulting | Beratung, IT & Architektur in Düsseldorf" },
    { name: "description", content: "Denaro Consulting verbindet Unternehmensberatung, IT-Kompetenz und Architektur für klare Entscheidungen und tragfähige Lösungen." },
    { property: "og:title", content: "Denaro Consulting GmbH" },
    { property: "og:description", content: "Beratung, Technologie und Architektur aus einer Hand – mit Sitz in Düsseldorf." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <>
    <section className="line-pattern relative overflow-hidden bg-brand-night text-primary-foreground">
      <div className="site-container grid min-h-[47rem] gap-14 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
        <div className="reveal relative z-10 lg:col-span-6">
          <p className="eyebrow flex items-center gap-4 text-brand-gold"><span className="h-px w-10 bg-brand-gold" />Denaro Consulting · Düsseldorf</p>
          <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.04] md:text-7xl lg:text-[5.2rem]">Klarheit für <span className="editorial text-brand-steel">komplexe</span> Vorhaben.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-primary-foreground/68 md:text-xl">Unternehmerische Weitsicht, technologische Kompetenz und planerische Präzision — konsequent zusammengeführt.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-14 rounded-none bg-brand-gold px-8 text-brand-night shadow-none hover:bg-primary-foreground"><Link to="/kontakt">Erstgespräch vereinbaren <ArrowUpRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-primary-foreground/20 bg-transparent px-8 text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/leistungen">Unsere Leistungen</Link></Button>
          </div>
        </div>
        <div className="reveal-delay relative pb-10 lg:col-span-6 lg:pl-10">
          <div className="absolute -right-6 -top-6 h-full w-full border border-primary-foreground/12" />
          <div className="group relative aspect-[4/5] max-h-[36rem] overflow-hidden border border-primary-foreground/15">
            <img src={heroImage} alt="Beratungsteam bei einer strategischen Besprechung in Düsseldorf" width={1600} height={1072} className="image-lift size-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-brand-ink/15" />
          </div>
          <div className="absolute bottom-0 left-0 max-w-xs border border-primary-foreground/10 bg-brand-ink/95 p-6 shadow-2xl lg:-left-6 lg:p-8">
            <p className="editorial text-2xl text-primary-foreground">Drei Disziplinen.</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-steel">Ein Anspruch an Qualität</p>
            <div className="mt-5 h-px w-12 bg-brand-gold" />
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"><span className="text-[0.6rem] uppercase tracking-[0.2em] text-brand-steel">Entdecken</span><ArrowDown className="size-4 text-brand-gold" /></div>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="site-container">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div><p className="eyebrow text-primary">Kompetenzfelder</p><h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">Drei Perspektiven.<br/><span className="editorial text-brand-steel">Ein Anspruch.</span></h2></div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground md:justify-self-end">Komplexe Aufgaben brauchen mehr als eine Disziplin. Wir betrachten wirtschaftliche, digitale und bauliche Zusammenhänge gemeinsam.</p>
        </div>
        <ServicesGrid />
        <div className="mt-10"><TextLink to="/leistungen">Alle Leistungen im Überblick</TextLink></div>
      </div>
    </section>

    <section className="bg-secondary py-24 md:py-32">
      <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="group relative lg:col-span-6">
          <div className="absolute -bottom-5 -left-5 h-full w-full border border-brand-steel/30" />
          <img src={architectureImage} alt="Moderne Architektur als Ausdruck klarer Planung" width={1408} height={1056} loading="lazy" className="image-lift relative aspect-[4/3] w-full object-cover" />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow text-primary">Über Denaro</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">Wir denken nicht in Silos, sondern in <span className="editorial text-brand-steel">Zusammenhängen.</span></h2>
          <p className="mt-7 text-lg leading-8 text-muted-foreground">Wirtschaftliche Entscheidungen beeinflussen Systeme. Systeme prägen Prozesse. Projekte brauchen Struktur. Deshalb verbinden wir Perspektiven, die in der Praxis zusammengehören.</p>
          <div className="mt-9"><TextLink to="/ueber-uns">Mehr über Denaro Consulting</TextLink></div>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="site-container">
        <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-2 md:items-end"><div><p className="eyebrow text-primary">Unser Vorgehen</p><h2 className="mt-5 font-display text-4xl font-semibold md:text-6xl">Verstehen. Strukturieren. <span className="editorial text-brand-steel">Umsetzen.</span></h2></div><p className="max-w-xl text-lg leading-8 text-muted-foreground md:justify-self-end">Klare Verantwortlichkeiten, nachvollziehbare Entscheidungen und konkrete nächste Schritte bilden die Grundlage jeder Zusammenarbeit.</p></div>
        <div className="grid md:grid-cols-3">
          {[["01","Verstehen","Wir hören genau hin und schärfen Ausgangslage, Ziele und Rahmenbedingungen."],["02","Strukturieren","Wir machen Abhängigkeiten sichtbar und übersetzen Komplexität in belastbare Optionen."],["03","Umsetzen","Wir begleiten Entscheidungen konsequent bis zum wirksamen Ergebnis."]].map(([number,title,text]) => <article key={number} className="border-b border-border py-10 md:border-b-0 md:border-r md:px-9 md:first:pl-0 md:last:border-r-0"><span className="text-xs font-semibold text-brand-gold">{number}</span><h3 className="mt-8 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{text}</p><ArrowRight className="mt-8 size-5 text-primary" /></article>)}
        </div>
      </div>
    </section>
    <ContactBand />
  </>;
}
