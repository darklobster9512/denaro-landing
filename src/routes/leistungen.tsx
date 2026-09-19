import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

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
    <section className="py-20 md:py-28"><div className="site-container"><ServicesGrid detailed /></div></section>
    <section className="bg-secondary py-20 md:py-24">
      <div className="site-container grid gap-10 md:grid-cols-2 md:gap-20">
        <div><p className="eyebrow text-primary">Zusammenarbeit</p><h2 className="mt-4 font-display text-4xl font-extrabold">Von der Analyse bis zur Umsetzung.</h2></div>
        <div className="space-y-6">
          {["Ausgangslage und Ziele gemeinsam präzisieren", "Handlungsoptionen transparent bewerten", "Entscheidungen in konkrete Schritte übersetzen", "Fortschritt eng begleiten und Ergebnisse sichern"].map((item, index) => <div key={item} className="flex gap-4 border-b border-border pb-5"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-gold" /><div><span className="text-xs font-extrabold text-muted-foreground">0{index + 1}</span><p className="mt-1 font-bold">{item}</p></div></div>)}
        </div>
      </div>
    </section>
    <ContactBand />
  </>;
}
