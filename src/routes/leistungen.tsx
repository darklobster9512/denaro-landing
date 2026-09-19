import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageIntro, ServicesGrid } from "@/components/page-sections";
import { ContactBand } from "@/components/site-shell";

export const Route = createFileRoute("/leistungen")({
  head: () => ({ meta: [
    { title: "Leistungen | Denaro Consulting GmbH" },
    { name: "description", content: "Unternehmensberatung, IT-Beratung und Architekturleistungen von Denaro Consulting in Düsseldorf." },
    { property: "og:title", content: "Leistungen | Denaro Consulting" },
    { property: "og:description", content: "Drei Kompetenzfelder für klare, tragfähige Lösungen." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LeistungenPage,
});

function LeistungenPage() {
  return <>
    <PageIntro eyebrow="Leistungen" title="Expertise, die Zusammenhänge erkennt." text="Wir begleiten Vorhaben dort, wo wirtschaftliche Entscheidungen, digitale Systeme und gebaute Räume aufeinandertreffen." />
    <section className="py-16 md:py-24"><div className="site-container"><ServicesGrid detailed /></div></section>
    <section className="bg-secondary py-24 md:py-32">
      <div className="site-container grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5"><p className="eyebrow text-primary">Zusammenarbeit</p><h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">Von der Analyse bis zur <span className="editorial text-primary">Umsetzung.</span></h2><p className="mt-6 max-w-md leading-8 text-muted-foreground">Jedes Mandat beginnt mit einer präzisen Einordnung. Daraus entsteht ein Vorgehen, das Entscheidungen nachvollziehbar und Fortschritt sichtbar macht.</p></div>
        <div className="md:col-span-6 md:col-start-7">
          {["Ausgangslage und Ziele gemeinsam präzisieren", "Handlungsoptionen transparent bewerten", "Entscheidungen in konkrete Schritte übersetzen", "Fortschritt eng begleiten und Ergebnisse sichern"].map((item, index) => <div key={item} className="group flex items-center gap-5 border-b border-border py-6 first:pt-0"><span className="text-xs font-semibold text-primary">0{index + 1}</span><p className="flex-1 text-lg font-semibold">{item}</p><ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" /></div>)}
        </div>
      </div>
    </section>
    <ContactBand />
  </>;
}
