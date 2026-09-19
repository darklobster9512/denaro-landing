import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

import heroImage from "@/assets/denaro-duesseldorf-office.jpg";
import teamImage from "@/assets/denaro-consulting-team.jpg";
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

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <>
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-brand-ink text-primary-foreground md:min-h-[44rem]">
      <img src={heroImage} alt="Moderner Wirtschaftsstandort am Düsseldorfer Rhein" width={1600} height={1008} className="absolute inset-0 size-full object-cover object-center" fetchPriority="high" />
      <div className="absolute inset-0 bg-brand-ink/65 md:bg-gradient-to-r md:from-brand-ink/95 md:via-brand-ink/65 md:to-brand-ink/15" />
      <div className="site-container relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-20 md:min-h-[44rem]">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-brand-gold">Denaro Consulting · Düsseldorf</p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.03] md:text-7xl lg:text-8xl">Klarheit für komplexe Vorhaben.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-primary-foreground/80 md:text-xl">Wir verbinden unternehmerisches Denken, technologische Kompetenz und planerische Perspektive.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-13 rounded-none bg-brand-gold px-7 text-brand-ink shadow-none hover:bg-brand-gold/90"><Link to="/leistungen">Leistungen entdecken <ArrowUpRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-none border-primary-foreground/45 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground hover:text-brand-ink"><Link to="/kontakt">Gespräch vereinbaren</Link></Button>
          </div>
        </div>
        <ArrowDown className="absolute bottom-8 size-5 text-brand-gold" />
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="site-container">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="eyebrow text-primary">Unsere Kompetenzfelder</p><h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">Drei Perspektiven. Ein Anspruch.</h2></div>
          <p className="max-w-xl leading-8 text-muted-foreground md:justify-self-end">Komplexe Aufgaben brauchen mehr als eine Disziplin. Wir betrachten wirtschaftliche, digitale und bauliche Zusammenhänge gemeinsam.</p>
        </div>
        <ServicesGrid />
        <div className="mt-8"><TextLink to="/leistungen">Alle Leistungen im Überblick</TextLink></div>
      </div>
    </section>

    <section className="bg-secondary py-20 md:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <img src={teamImage} alt="Beratungsteam bei der gemeinsamen Projektarbeit" width={1408} height={1008} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div>
          <p className="eyebrow text-primary">Unser Arbeitsprinzip</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">Verstehen. Strukturieren. Umsetzen.</h2>
          <p className="mt-6 leading-8 text-muted-foreground">Wir hören genau hin, stellen die richtigen Fragen und entwickeln Lösungen, die nicht nur auf dem Papier funktionieren. Dabei bleiben Verantwortlichkeiten, nächste Schritte und Ziele jederzeit transparent.</p>
          <ul className="mt-8 space-y-4">
            {["Persönliche und direkte Zusammenarbeit", "Interdisziplinärer Blick auf jedes Vorhaben", "Pragmatische Lösungen mit langfristigem Wert"].map((item) => <li key={item} className="flex items-center gap-3 font-semibold"><span className="grid size-6 place-items-center bg-brand-gold text-brand-ink"><Check className="size-4" /></span>{item}</li>)}
          </ul>
          <div className="mt-9"><TextLink to="/ueber-uns">Mehr über Denaro Consulting</TextLink></div>
        </div>
      </div>
    </section>
    <ContactBand />
  </>;
}
