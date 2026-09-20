import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageIntro } from "@/components/page-sections";
import { Button } from "@/components/ui/button";
import { stellen } from "@/data/karriere-stellen";

export const Route = createFileRoute("/karriere/")({
  head: () => ({ meta: [
    { title: "Karriere | Denaro Consulting GmbH" },
    { name: "description", content: "Offene Stellen bei Denaro Consulting in Düsseldorf – Beratung, IT, Architektur und flexible Tätigkeiten im Onlineprozess-Test." },
    { property: "og:title", content: "Karriere | Denaro Consulting" },
    { property: "og:description", content: "Offene Positionen und Bewerbung bei Denaro Consulting in Düsseldorf." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: KarrierePage,
});

function KarrierePage() {
  return (
    <>
      <PageIntro
        eyebrow="Karriere"
        title="Arbeiten mit Struktur und Verantwortung."
        text="Wir suchen Menschen, die sorgfältig arbeiten, klar denken und Projekte in Beratung, Technologie und Planung mittragen."
        number="04"
      />

      <section className="py-14 md:py-32">
        <div className="site-container">
          <div className="mb-10 grid gap-5 border-b border-border pb-8 md:mb-12 md:gap-8 md:pb-10 lg:grid-cols-12">
            <p className="eyebrow text-primary lg:col-span-3">Offene Positionen</p>
            <h2 className="font-display text-2xl font-light leading-tight sm:text-3xl md:text-4xl lg:col-span-6 lg:col-start-7">
              {String(stellen.length).padStart(2, "0")} Stellen <span className="font-semibold text-primary">ausgeschrieben.</span>
            </h2>
          </div>

          <div className="border-t border-border">
            {stellen.map((stelle, index) => (
              <Link
                key={stelle.slug}
                to="/karriere/$slug"
                params={{ slug: stelle.slug }}
                className="group grid min-w-0 gap-4 border-b border-border py-7 transition-colors hover:bg-secondary md:grid-cols-12 md:items-center md:gap-8 md:px-6 md:py-9"
              >
                <span className="text-sm font-bold text-primary md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0 md:col-span-8">
                  <h3 className="break-words font-display text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl md:text-3xl">
                    {stelle.titel}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{stelle.kurzbeschreibung}</p>
                  <div className="mt-4 flex flex-wrap gap-2 md:mt-5">
                    {[stelle.standort, stelle.modell, stelle.arbeitszeit, stelle.stundenlohn && `${stelle.stundenlohn} / Std.`]
                      .filter(Boolean)
                      .map((meta) => (
                        <span key={meta as string} className="border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground sm:text-[0.65rem] sm:tracking-[0.15em]">
                          {meta}
                        </span>
                      ))}
                  </div>
                </div>
                <span className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary md:col-span-3 md:min-h-0 md:justify-end">
                  Details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="structural-grid mt-14 grid border border-border bg-brand-blue-soft md:mt-28 md:grid-cols-12">
            <div className="hidden border-b border-border p-8 md:col-span-2 md:block md:border-b-0 md:border-r md:p-10"><span className="text-sm font-bold text-primary">06/</span></div>
            <div className="border-b border-border p-6 sm:p-8 md:col-span-7 md:border-b-0 md:border-r md:p-12">
              <p className="eyebrow text-primary">Initiativbewerbung</p>
              <h2 className="mt-5 font-display text-2xl font-light sm:text-3xl md:mt-6 md:text-5xl">Keine passende Stelle <span className="font-semibold text-primary">gefunden?</span></h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground md:mt-5">
                Schreiben Sie uns, woran Sie arbeiten möchten. Wir sehen uns jede Bewerbung an und melden uns persönlich zurück.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 p-6 sm:p-8 md:col-span-3 md:gap-4">
              <Button asChild size="lg" className="h-14 w-full rounded-none px-8 shadow-none">
                <Link to="/karriere/bewerbung" search={{ stelle: "" }}>Jetzt bewerben <ArrowUpRight /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 w-full rounded-none px-8 shadow-none">
                <a href="mailto:kontakt@denaro-consult.com?subject=Initiativbewerbung">E-Mail schreiben</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
