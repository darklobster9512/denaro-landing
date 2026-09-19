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
    <PageIntro eyebrow="Direkter Kontakt" title="Der direkte Weg zu uns." text="Sie haben eine konkrete Aufgabe oder möchten eine erste Einschätzung? Rufen Sie uns an oder schreiben Sie uns eine E-Mail." number="03" />
    <section className="py-24 md:py-32">
      <div className="site-container">
        <div className="mb-12 grid gap-8 border-b border-border pb-10 lg:grid-cols-12"><p className="eyebrow text-primary lg:col-span-3">Kontaktpunkte</p><h2 className="font-display text-3xl font-light leading-tight lg:col-span-6 lg:col-start-7 md:text-4xl">Persönlich erreichbar. <span className="font-semibold text-primary">Klar im Austausch.</span></h2></div>
        <ContactDetails />
        <div className="structural-grid mt-16 grid border border-border bg-brand-blue-soft md:grid-cols-12">
          <div className="border-b border-border p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10"><span className="text-sm font-bold text-primary">04/</span></div>
          <div className="border-b border-border p-8 md:col-span-7 md:border-b-0 md:border-r md:p-12"><p className="eyebrow text-primary">Unverbindlich anfragen</p><h2 className="mt-6 font-display text-3xl font-light md:text-5xl">Wie können wir Sie <span className="font-semibold text-primary">unterstützen?</span></h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Beschreiben Sie uns kurz Ihr Vorhaben. Wir melden uns persönlich bei Ihnen zurück.</p></div>
          <div className="flex items-center p-8 md:col-span-3"><Button asChild size="lg" className="h-14 w-full rounded-none px-8 shadow-none"><a href="mailto:kontakt@denaro-consult.com?subject=Anfrage%20über%20die%20Website">E-Mail schreiben <ArrowUpRight /></a></Button></div>
        </div>
      </div>
    </section>
  </>;
}
