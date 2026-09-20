import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Euro, MapPin, Timer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { findStelle, stellen } from "@/data/karriere-stellen";

export const Route = createFileRoute("/karriere/$slug")({
  loader: ({ params }) => {
    const stelle = findStelle(params.slug);
    if (!stelle) throw notFound();
    return { stelle };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Stelle nicht gefunden | Denaro Consulting" }, { name: "robots", content: "noindex" }] };
    }
    const { stelle } = loaderData;
    return { meta: [
      { title: `${stelle.titel} | Karriere bei Denaro Consulting` },
      { name: "description", content: stelle.kurzbeschreibung },
      { property: "og:title", content: `${stelle.titel} | Denaro Consulting` },
      { property: "og:description", content: stelle.kurzbeschreibung },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: StelleNotFound,
  component: StelleDetail,
});

function StelleNotFound() {
  return (
    <section className="py-32">
      <div className="site-container">
        <p className="eyebrow text-primary">Karriere</p>
        <h1 className="mt-6 font-display text-4xl font-light md:text-6xl">Diese Stelle ist <span className="font-semibold text-primary">nicht verfügbar.</span></h1>
        <Button asChild size="lg" className="mt-10 h-14 rounded-none px-8 shadow-none">
          <Link to="/karriere">Zu allen Stellen <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  );
}

function StelleDetail() {
  const { stelle } = Route.useLoaderData();
  const index = stellen.findIndex((item) => item.slug === stelle.slug);
  const prev = index > 0 ? stellen[index - 1] : undefined;
  const next = index < stellen.length - 1 ? stellen[index + 1] : undefined;

  const facts = [
    { icon: MapPin, label: "Standort", value: stelle.standort },
    { icon: Clock, label: "Arbeitsmodell", value: stelle.modell },
    ...(stelle.arbeitszeit ? [{ icon: Timer, label: "Arbeitszeit", value: stelle.arbeitszeit }] : []),
    ...(stelle.stundenlohn ? [{ icon: Euro, label: "Vergütung", value: `${stelle.stundenlohn} / Std.` }] : []),
  ];

  const sections: { title: string; text?: string; items?: string[] }[] = [
    { title: "Über die Position", text: stelle.beschreibung },
    { title: "Ihre Aufgaben", items: stelle.aufgaben },
    { title: "Ihr Profil", items: stelle.voraussetzungen },
    { title: "Was wir bieten", items: stelle.benefits },
  ];

  return (
    <>
      <section className="structural-grid border-b border-border bg-secondary py-6 md:py-12">
        <div className="site-container border border-border bg-background md:structural-shadow">
          <div className="grid min-w-0 overflow-hidden lg:grid-cols-12">
            <div className="hidden border-b border-border p-7 lg:col-span-2 lg:block lg:border-b-0 lg:border-r lg:p-10">
              <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}/</span>
              <p className="vertical-label mt-12 hidden text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground lg:block">Karriere · Denaro Consulting</p>
            </div>
            <div className="border-b border-border p-6 sm:p-8 md:p-12 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-14">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-primary lg:hidden">{String(index + 1).padStart(2, "0")}/</span>
                <p className="eyebrow min-w-0 text-primary">Offene Position</p>
              </div>
              <h1 className="mt-5 max-w-4xl break-words font-display text-[1.75rem] font-light leading-[1.12] sm:text-4xl sm:leading-[1.05] md:mt-7 md:text-6xl">{stelle.titel}</h1>
            </div>
            <div className="flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:col-span-4">
              <span className="mb-5 h-0.5 w-12 bg-primary md:mb-8" />
              <p className="max-w-md leading-7 text-muted-foreground sm:text-lg sm:leading-8">{stelle.kurzbeschreibung}</p>
              <Button asChild size="lg" className="mt-7 h-14 w-full rounded-none px-8 shadow-none sm:w-auto md:mt-8">
                <Link to="/karriere/bewerbung" search={{ stelle: stelle.titel }}>Jetzt bewerben <ArrowUpRight /></Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border px-6 py-4 sm:gap-x-8 sm:px-7">
            {facts.map((fact) => (
              <span key={fact.label} className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted-foreground sm:text-[0.68rem] sm:tracking-[0.15em]">
                <fact.icon className="size-4 text-primary" strokeWidth={1.75} />
                {fact.value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-32">
        <div className="site-container">
          <div className="grid lg:grid-cols-12">
            <div className="hidden lg:col-span-2 lg:block"><span className="vertical-label text-muted-foreground">Stellenprofil</span></div>
            <div className="min-w-0 space-y-12 lg:col-span-9 lg:col-start-4 md:space-y-16">
              {sections.map((section, sectionIndex) => (
                <div key={section.title}>
                   <div className="flex items-baseline gap-4 border-b border-border pb-5 sm:gap-6">
                    <span className="text-sm font-bold text-primary">{String(sectionIndex + 1).padStart(2, "0")}</span>
                    <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">{section.title}</h2>
                  </div>
                  {section.text ? (
                    <p className="mt-6 max-w-3xl leading-7 text-muted-foreground sm:text-lg sm:leading-8">{section.text}</p>
                  ) : (
                    <ul className="mt-6 border-t border-border">
                      {section.items?.map((item, itemIndex) => (
                        <li key={item} className="grid grid-cols-[2rem_1fr] gap-2 border-b border-border py-4 text-base leading-7 text-muted-foreground sm:grid-cols-[2.5rem_1fr]">
                          <span className="text-xs font-bold text-primary">{String(itemIndex + 1).padStart(2, "0")}</span>
                          <span className="min-w-0 break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="border border-border bg-brand-blue-soft p-6 sm:p-8 md:p-12">
                <p className="eyebrow text-primary">Bewerbung</p>
                <h2 className="mt-5 font-display text-2xl font-light sm:text-3xl md:mt-6 md:text-4xl">Interesse an dieser <span className="font-semibold text-primary">Position?</span></h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground md:mt-5">Senden Sie uns Ihre Angaben in zwei kurzen Schritten. Wir melden uns persönlich zurück.</p>
                <Button asChild size="lg" className="mt-7 h-14 w-full rounded-none px-8 shadow-none sm:w-auto md:mt-8">
                  <Link to="/karriere/bewerbung" search={{ stelle: stelle.titel }}>Bewerbung starten <ArrowUpRight /></Link>
                </Button>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-border pt-8 sm:flex-row">
                {prev ? (
                  <Link to="/karriere/$slug" params={{ slug: prev.slug }} className="group inline-flex min-h-11 min-w-0 items-center gap-3 text-sm font-semibold text-muted-foreground hover:text-primary">
                    <ArrowLeft className="size-4 shrink-0" /><span className="min-w-0 break-words">{prev.titel}</span>
                  </Link>
                ) : <span />}
                {next && (
                  <Link to="/karriere/$slug" params={{ slug: next.slug }} className="group inline-flex min-h-11 min-w-0 items-center gap-3 text-sm font-semibold text-muted-foreground hover:text-primary sm:text-right">
                    <span className="min-w-0 break-words">{next.titel}</span><ArrowRight className="size-4 shrink-0" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
