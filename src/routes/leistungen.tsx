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
    <PageIntro eyebrow="Leistungsspektrum" title="Expertise, die Zusammenhänge erkennt." text="Wir begleiten Vorhaben dort, wo wirtschaftliche Entscheidungen, digitale Systeme und gebaute Räume aufeinandertreffen." number="01" />
    <section className="py-12 md:py-28"><div className="site-container"><div className="mb-9 grid gap-5 border-b border-border pb-8 md:mb-14 md:pb-10 lg:grid-cols-12 lg:gap-8"><p className="eyebrow text-primary lg:col-span-3">01—03 / Kompetenzfelder</p><p className="text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8 lg:col-span-6 lg:col-start-7">Drei fachliche Perspektiven, verbunden durch einen klaren Blick auf das gesamte Vorhaben.</p></div><ServicesGrid detailed /></div></section>
    <section className="structural-grid border-y border-border bg-secondary py-14 md:py-32">
      <div className="site-container grid gap-6 md:grid-cols-12 md:gap-12">
        <div className="border border-border bg-background p-6 sm:p-8 md:col-span-5 md:p-12"><p className="eyebrow text-primary">Zusammenarbeit</p><h2 className="mt-5 font-display text-3xl font-light leading-tight sm:text-4xl md:mt-6 md:text-5xl">Von der Analyse bis zur <span className="font-semibold text-primary">Umsetzung.</span></h2><p className="mt-5 max-w-md leading-7 text-muted-foreground sm:leading-8 md:mt-7">Jedes Mandat beginnt mit einer präzisen Einordnung. Daraus entsteht ein Vorgehen, das Entscheidungen nachvollziehbar und Fortschritt sichtbar macht.</p></div>
        <div className="border border-border bg-background md:col-span-7">
          {["Ausgangslage und Ziele gemeinsam präzisieren", "Handlungsoptionen transparent bewerten", "Entscheidungen in konkrete Schritte übersetzen", "Fortschritt eng begleiten und Ergebnisse sichern"].map((item, index) => <div key={item} className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border p-5 last:border-b-0 sm:grid-cols-[3rem_1fr_auto] sm:gap-4 sm:p-6 md:p-8"><span className="text-xs font-bold text-primary">0{index + 1}</span><p className="min-w-0 font-semibold sm:text-lg">{item}</p><ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" /></div>)}
        </div>
      </div>
    </section>
    <ContactBand />
  </>;
}
