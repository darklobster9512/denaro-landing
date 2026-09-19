import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { ContactDetails, PageIntro } from "@/components/page-sections";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [
    { title: "Kontakt | Denaro Consulting GmbH" },
    { name: "description", content: "Kontaktieren Sie Denaro Consulting in Düsseldorf telefonisch oder per E-Mail." },
    { property: "og:title", content: "Kontakt | Denaro Consulting" },
    { property: "og:description", content: "Sprechen wir über Ihr nächstes Vorhaben." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: KontaktPage,
});

function KontaktPage() {
  return <>
    <PageIntro eyebrow="Kontakt" title="Der direkte Weg zu uns." text="Sie haben eine konkrete Aufgabe oder möchten eine erste Einschätzung? Rufen Sie uns an oder schreiben Sie uns eine E-Mail." />
    <section className="py-24 md:py-32">
      <div className="site-container">
        <ContactDetails />
        <div className="line-pattern mt-16 grid gap-10 border border-border bg-brand-blue-soft p-8 md:grid-cols-[1fr_auto] md:items-center md:p-14">
          <div><p className="eyebrow text-primary">Unverbindlich anfragen</p><h2 className="mt-5 font-display text-3xl font-semibold md:text-5xl">Wie können wir Sie <span className="editorial text-primary">unterstützen?</span></h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Beschreiben Sie uns kurz Ihr Vorhaben. Wir melden uns persönlich bei Ihnen zurück.</p></div>
          <Button asChild size="lg" className="h-14 rounded-sm px-8 shadow-sm"><a href="mailto:kontakt@denaro-consult.com?subject=Anfrage%20über%20die%20Website">E-Mail schreiben <ArrowUpRight /></a></Button>
        </div>
      </div>
    </section>
  </>;
}
