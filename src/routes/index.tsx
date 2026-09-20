import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, Check, Cpu, LineChart } from "lucide-react";

const heroImage = { url: "/images/denaro-boardroom-stock.jpg" };
const heroArchitectureImage = { url: "/images/denaro-hero-corporate-architecture.jpg" };
const architectureImage = { url: "/images/denaro-architecture-stock.jpg" };
const itImage = { url: "/images/denaro-it-stock.jpg" };
const teamImage = { url: "/images/denaro-team-stock.jpg" };
const officeImage = { url: "/images/denaro-duesseldorf-stock-day.jpg" };
import { ContactBand } from "@/components/site-shell";
import { TextLink } from "@/components/page-sections";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Denaro Consulting | Unternehmensberatung, IT & Architektur Düsseldorf" },
    { name: "description", content: "Denaro Consulting GmbH Düsseldorf: Unternehmensberatung, IT-Beratung und Architektur für Hochbau – für klare Entscheidungen und tragfähige Lösungen." },
    { property: "og:title", content: "Denaro Consulting | Unternehmensberatung, IT & Architektur Düsseldorf" },
    { property: "og:description", content: "Unternehmensberatung, IT-Beratung und Architektur aus einer Hand – mit Sitz in Düsseldorf." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <>
    <section className="structural-grid border-b border-border bg-secondary py-6 md:py-12">
      <div className="site-container grid border border-border bg-background md:structural-shadow lg:grid-cols-12">
        <div className="reveal flex flex-col justify-center border-b border-border p-6 sm:p-8 md:min-h-[38rem] md:p-14 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-16">
          <p className="eyebrow flex items-center gap-3 text-primary sm:gap-4"><span className="line-grow h-0.5 w-8 shrink-0 bg-primary sm:w-10" />Denaro Consulting · Düsseldorf</p>
          <h1 className="mt-6 max-w-3xl font-display text-[2.4rem] font-light leading-[1.05] sm:text-5xl sm:leading-[1.02] md:mt-8 md:text-7xl lg:text-[5rem]">Klarheit für <span className="font-semibold text-primary">komplexe</span> Vorhaben.</h1>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground sm:text-lg sm:leading-8 md:mt-8">Unternehmerische Weitsicht, technologische Kompetenz und planerische Präzision — konsequent zusammengeführt.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Button asChild size="lg" className="h-14 rounded-none px-8"><Link to="/kontakt">Erstgespräch vereinbaren <ArrowUpRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-foreground bg-background px-8 text-foreground shadow-none hover:border-primary hover:bg-secondary hover:text-primary"><Link to="/leistungen">Unsere Expertise</Link></Button>
          </div>
        </div>
        <div className="reveal-delay flex flex-col md:min-h-[34rem] lg:col-span-5">
          <div className="group relative min-h-64 flex-1 overflow-hidden md:min-h-[27rem]">
            <img src={heroArchitectureImage.url} alt="Moderne Unternehmensarchitektur mit klarer Glasfassade" width={1800} height={1198} className="image-lift absolute inset-0 size-full object-cover" fetchPriority="high" />
            <div className="absolute inset-x-0 bottom-0 border-t border-primary/30 bg-background/90 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Strategie · Technologie · Planung</p>
            </div>
          </div>
          <div className="grid grid-cols-2 bg-primary text-primary-foreground">
            <div className="border-r border-primary-foreground/25 p-6"><span className="block text-2xl font-semibold">03</span><span className="mt-2 block text-xs uppercase tracking-[0.14em] opacity-80">Kompetenzfelder</span></div>
            <div className="p-6"><span className="block text-2xl font-semibold">DUS</span><span className="mt-2 block text-xs uppercase tracking-[0.14em] opacity-80">Standort Düsseldorf</span></div>
          </div>
        </div>
        <div className="col-span-full grid border-t border-border sm:grid-cols-3">
          {[["01","Unternehmensberatung","#unternehmensberatung"],["02","IT-Beratung","#it-beratung"],["03","Architektur & Hochbau","#architektur"]].map(([number, label, href]) => <a key={number} href={href} className="group flex min-h-14 items-center justify-between border-b border-border p-5 last:border-b-0 hover:bg-secondary sm:border-b-0 sm:border-r sm:last:border-r-0"><span className="flex items-center gap-4"><span className="text-xs font-bold text-primary">{number}</span><span className="text-sm font-semibold">{label}</span></span><ArrowDown className="size-4 text-muted-foreground transition-transform group-hover:translate-y-1 group-hover:text-primary" /></a>)}
        </div>
      </div>
    </section>

    <section className="border-b border-border py-14 md:py-32">
      <div className="site-container">
        <div className="grid gap-7 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-2"><p className="eyebrow text-primary">01—03 / Kompetenzfelder</p></div>
          <div className="lg:col-span-7"><h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-6xl">Drei Perspektiven für Entscheidungen, die <span className="font-semibold text-primary">weitertragen.</span></h2></div>
          <div className="lg:col-span-3 lg:pt-3"><p className="leading-7 text-muted-foreground sm:text-lg sm:leading-8">Komplexe Aufgaben brauchen mehr als eine Disziplin. Wir betrachten wirtschaftliche, digitale und bauliche Zusammenhänge gemeinsam.</p></div>
        </div>
      </div>
    </section>

    <section id="unternehmensberatung" className="scroll-mt-24 border-b border-border">
      <div className="site-container grid lg:grid-cols-12">
        <div className="relative border-x border-border lg:col-span-7">
          <div className="group h-full min-h-72 overflow-hidden md:min-h-[30rem]"><img src={heroImage.url} alt="Strategische Unternehmensberatung im gemeinsamen Gespräch" width={1600} height={1072} loading="lazy" className="image-lift size-full object-cover" /></div>
          <span className="absolute left-0 top-0 bg-primary px-5 py-4 text-sm font-bold text-primary-foreground">01</span>
        </div>
        <article className="flex flex-col justify-center border-x border-t border-border p-6 sm:p-8 lg:col-span-5 lg:border-l-0 lg:border-t-0 lg:p-14">
          <LineChart className="size-7 text-primary sm:size-8" strokeWidth={1.5} />
          <p className="eyebrow mt-7 text-primary md:mt-10">Unternehmensberatung</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:mt-5 sm:text-4xl">Entscheidungen mit wirtschaftlicher Substanz.</h2>
          <p className="mt-5 leading-7 text-muted-foreground md:mt-6">Wir ordnen Strukturen, schärfen Optionen und begleiten Unternehmen von der strategischen Fragestellung bis zur belastbaren Umsetzung.</p>
          <ul className="mt-7 border-t border-border md:mt-8">
            {["Strategie und Organisation","Prozess- und Projektbegleitung","Wirtschaftliche Entscheidungsgrundlagen"].map(item => <li key={item} className="flex items-center gap-3 border-b border-border py-3 text-sm font-semibold"><Check className="size-4 shrink-0 text-primary" />{item}</li>)}
          </ul>
        </article>
      </div>
    </section>

    <section id="it-beratung" className="scroll-mt-24 border-b border-border bg-secondary">
      <div className="site-container grid lg:grid-cols-12">
        <article className="flex flex-col justify-center border-x border-border p-6 sm:p-8 lg:col-span-5 lg:p-14">
          <Cpu className="size-7 text-primary sm:size-8" strokeWidth={1.5} />
          <p className="eyebrow mt-7 text-primary md:mt-10">02 / IT-Beratung</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:mt-5 sm:text-4xl">Technologie, die fachlich funktioniert.</h2>
          <p className="mt-5 leading-7 text-muted-foreground md:mt-6">Wir übersetzen Anforderungen in tragfähige IT-Lösungen und schaffen Orientierung bei Systemen, Prozessen und Digitalisierung.</p>
          <div className="mt-7 grid grid-cols-2 border-l border-t border-border bg-background md:mt-8">
            {["Digitalisierung","Systemanalyse","Prozesse","Projektbegleitung"].map((item, index) => <div key={item} className="border-b border-r border-border p-4"><span className="text-xs font-bold text-primary">0{index + 1}</span><p className="mt-2 text-sm font-semibold">{item}</p></div>)}
          </div>
        </article>
        <div className="group relative min-h-72 overflow-hidden border-x border-t border-border md:min-h-[31rem] lg:col-span-7 lg:border-l-0 lg:border-t-0">
          <img src={itImage.url} alt="IT-Beratung und digitale Systemplanung" width={1408} height={1056} loading="lazy" className="image-lift absolute inset-0 size-full object-cover" />
          <div className="absolute bottom-0 right-0 hidden max-w-xs border-l border-t border-border bg-background p-6 sm:block"><p className="text-sm font-semibold">Von der fachlichen Anforderung zur klaren technischen Richtung.</p></div>
        </div>
      </div>
    </section>

    <section id="architektur" className="scroll-mt-24 border-b border-border">
      <div className="site-container grid lg:grid-cols-12">
        <div className="group relative min-h-72 overflow-hidden border-x border-border md:min-h-[32rem] lg:col-span-6"><img src={architectureImage.url} alt="Moderne Architektur als Ausdruck klarer Planung" width={1408} height={1056} loading="lazy" className="image-lift absolute inset-0 size-full object-cover" /><span className="vertical-label absolute right-0 top-0 bg-background px-3 py-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">Planung · Koordination · Wirtschaftlichkeit</span></div>
        <article className="border-x border-t border-border p-6 sm:p-8 lg:col-span-6 lg:border-l-0 lg:border-t-0 lg:p-14">
          <div className="flex items-center justify-between"><Building2 className="size-7 text-primary sm:size-8" strokeWidth={1.5} /><span className="text-sm font-bold text-primary">03</span></div>
          <p className="eyebrow mt-7 text-primary md:mt-10">Architektur & Hochbau</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:mt-5 sm:text-4xl">Planung mit Blick auf das Ganze.</h2>
          <p className="mt-5 max-w-xl leading-7 text-muted-foreground md:mt-6">Wir verbinden planerisches Verständnis mit wirtschaftlicher Perspektive – für klare Abläufe und zukunftsfähige Bauvorhaben.</p>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-3 md:mt-10">
            {[["01","Planungsberatung"],["02","Schnittstellen"],["03","Projektbetrachtung"]].map(([number,label]) => <div key={number} className="bg-background p-5"><span className="text-xs font-bold text-primary">{number}</span><p className="mt-6 text-sm font-semibold">{label}</p></div>)}
          </div>
          <div className="mt-9"><TextLink to="/leistungen">Alle Leistungen im Überblick</TextLink></div>
        </article>
      </div>
    </section>

    <section className="structural-grid border-b border-border bg-brand-blue-soft py-14 md:py-32">
      <div className="site-container">
        <div className="grid min-w-0 overflow-hidden border border-border bg-background lg:grid-cols-12">
          <div className="min-w-0 border-b border-border p-6 sm:p-8 md:p-12 lg:col-span-5 lg:border-b-0 lg:border-r">
            <p className="eyebrow text-primary">Der verbindende Blick</p>
            <h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl md:mt-6 md:text-5xl">Wir denken nicht in Silos, sondern in <span className="font-semibold text-primary">Zusammenhängen.</span></h2>
          </div>
          <div className="min-w-0 lg:col-span-7">
            {[["Wirtschaft","Entscheidungen brauchen eine belastbare unternehmerische Grundlage."],["Systeme","Technologie muss Prozesse unterstützen und dauerhaft tragfähig bleiben."],["Projekte","Planung wird wirksam, wenn Schnittstellen früh erkannt und klar geführt werden."]].map(([title,text], index) => <div key={title} className="grid border-b border-border p-6 last:border-b-0 sm:grid-cols-[3rem_1fr_2fr] sm:gap-6 sm:p-7"><span className="text-xs font-bold text-primary">0{index + 1}</span><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-0">{text}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-32">
      <div className="site-container">
        <div className="grid gap-7 border-b border-border pb-9 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-12"><div className="lg:col-span-7"><p className="eyebrow text-primary">Unser Vorgehen</p><h2 className="mt-5 font-display text-3xl font-light sm:text-4xl md:text-6xl">Von der Frage zur <span className="font-semibold text-primary">tragfähigen Lösung.</span></h2></div><p className="max-w-xl leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:col-span-4 lg:col-start-9">Klare Verantwortlichkeiten, nachvollziehbare Entscheidungen und konkrete nächste Schritte bilden die Grundlage jeder Zusammenarbeit.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {[["01","Analyse","Ausgangslage, Ziele und Rahmenbedingungen präzise erfassen."],["02","Struktur","Abhängigkeiten sichtbar machen und Themen belastbar ordnen."],["03","Entscheidung","Optionen bewerten und eine klare Richtung definieren."],["04","Begleitung","Die Umsetzung fokussiert bis zum wirksamen Ergebnis führen."]].map(([number,title,text]) => <article key={number} className="group border-b border-border py-7 md:border-r md:px-8 md:py-10 md:first:pl-0 lg:border-b-0 lg:last:border-r-0"><span className="text-xs font-bold text-primary">{number}</span><div className="mt-5 h-0.5 w-10 bg-primary transition-all group-hover:w-full md:mt-8" /><h3 className="mt-5 text-xl font-semibold sm:text-2xl md:mt-8">{title}</h3><p className="mt-3 leading-7 text-muted-foreground md:mt-4">{text}</p><ArrowRight className="mt-5 size-5 text-primary md:mt-8" /></article>)}
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-secondary py-14 md:py-32">
      <div className="site-container grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="group relative min-h-64 overflow-hidden border border-border md:min-h-[28rem] lg:col-span-7"><img src={officeImage.url} alt="Moderner Unternehmensstandort in Düsseldorf" width={1600} height={1008} loading="lazy" className="image-lift absolute inset-0 size-full object-cover" /><div className="absolute bottom-0 left-0 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground">Denaro Consulting · Düsseldorf</div></div>
        <div className="grid gap-6 lg:col-span-5 lg:gap-8">
          <div className="border border-border bg-background p-6 sm:p-8 md:p-10"><p className="eyebrow text-primary">Über Denaro</p><h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl">Präzise im Denken. <span className="font-semibold">Verlässlich im Handeln.</span></h2><p className="mt-5 leading-7 text-muted-foreground md:mt-6">Wir verbinden fachliche Perspektiven, strukturieren komplexe Aufgaben und schaffen eine klare Grundlage für Entscheidungen und Umsetzung.</p><div className="mt-7 md:mt-8"><TextLink to="/ueber-uns">Mehr über Denaro Consulting</TextLink></div></div>
          <div className="grid grid-cols-[1fr_1.2fr] border border-border bg-background"><img src={teamImage.url} alt="Teamarbeit bei Denaro Consulting" width={1408} height={1008} loading="lazy" className="h-full min-h-44 w-full object-cover" /><div className="flex flex-col justify-center p-6"><p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Unser Anspruch</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Klare Kommunikation, strukturierte Zusammenarbeit und konsequente Qualität.</p></div></div>
        </div>
      </div>
    </section>
    <ContactBand />
  </>;
}
