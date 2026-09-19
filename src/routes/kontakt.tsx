import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { ContactDetails, PageIntro } from "@/components/page-sections";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [
    { title: "Kontakt | Denaro Consulting GmbH" },
    { name: "description", content: "Kontaktieren Sie Denaro Consulting in Düsseldorf telefonisch, per E-Mail oder über das Kontaktformular." },
    { property: "og:title", content: "Kontakt | Denaro Consulting" },
    { property: "og:description", content: "Sprechen wir über Ihr nächstes Vorhaben." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: KontaktPage,
});

function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-x-8 gap-y-7 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input id="name" name="name" required autoComplete="name" placeholder="Ihr Name" className="h-12 rounded-none border-border bg-background shadow-none" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Unternehmen</Label>
        <Input id="company" name="company" autoComplete="organization" placeholder="Ihr Unternehmen" className="h-12 rounded-none border-border bg-background shadow-none" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-Mail *</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" placeholder="name@unternehmen.de" className="h-12 rounded-none border-border bg-background shadow-none" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+49 …" className="h-12 rounded-none border-border bg-background shadow-none" />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="topic">Thema *</Label>
        <Select name="topic" required>
          <SelectTrigger id="topic" className="h-12 w-full rounded-none border-border bg-background shadow-none">
            <SelectValue placeholder="Bitte wählen" />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            <SelectItem value="unternehmensberatung">Unternehmensberatung</SelectItem>
            <SelectItem value="it-beratung">IT-Beratung</SelectItem>
            <SelectItem value="architektur-hochbau">Architektur &amp; Hochbau</SelectItem>
            <SelectItem value="sonstiges">Sonstiges</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="message">Nachricht *</Label>
        <Textarea id="message" name="message" required rows={6} placeholder="Beschreiben Sie kurz Ihr Vorhaben …" className="rounded-none border-border bg-background shadow-none" />
      </div>
      <div className="flex items-start gap-3 md:col-span-2">
        <Checkbox id="privacy" required className="mt-1 rounded-none" />
        <Label htmlFor="privacy" className="text-sm font-normal leading-6 text-muted-foreground">
          Ich habe die <Link to="/datenschutz" className="font-medium text-primary underline underline-offset-4">Datenschutzerklärung</Link> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *
        </Label>
      </div>
      <div className="md:col-span-2">
        <Button type="submit" size="lg" className="h-14 w-full rounded-none px-10 shadow-none md:w-auto">
          Anfrage senden <ArrowUpRight />
        </Button>
      </div>
      {sent && (
        <div className="flex items-start gap-3 border border-primary/30 bg-brand-blue-soft p-5 md:col-span-2" role="status">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-6">
            Vielen Dank für Ihre Nachricht. Dieses Formular ist aktuell ein Entwurf und versendet noch keine Daten – bitte richten Sie Ihre Anfrage direkt an <a href="mailto:kontakt@denaro-consult.com" className="font-medium text-primary underline underline-offset-4">kontakt@denaro-consult.com</a>.
          </p>
        </div>
      )}
    </form>
  );
}

function KontaktPage() {
  return <>
    <PageIntro eyebrow="Direkter Kontakt" title="Der direkte Weg zu uns." text="Sie haben eine konkrete Aufgabe oder möchten eine erste Einschätzung? Rufen Sie uns an, schreiben Sie eine E-Mail oder nutzen Sie das Kontaktformular." number="03" />
    <section className="py-24 md:py-32">
      <div className="site-container">
        <div className="mb-12 grid gap-8 border-b border-border pb-10 lg:grid-cols-12"><p className="eyebrow text-primary lg:col-span-3">Kontaktpunkte</p><h2 className="font-display text-3xl font-light leading-tight lg:col-span-6 lg:col-start-7 md:text-4xl">Persönlich erreichbar. <span className="font-semibold text-primary">Klar im Austausch.</span></h2></div>
        <ContactDetails />
        <div className="mt-20 md:mt-28">
          <div className="mb-12 grid gap-8 border-b border-border pb-10 lg:grid-cols-12"><p className="eyebrow text-primary lg:col-span-3">Kontaktformular</p><h2 className="font-display text-3xl font-light leading-tight lg:col-span-6 lg:col-start-7 md:text-4xl">Unverbindlich anfragen. <span className="font-semibold text-primary">Wir melden uns persönlich zurück.</span></h2></div>
          <div className="grid lg:grid-cols-12">
            <div className="hidden lg:col-span-2 lg:block"><span className="vertical-label text-muted-foreground">Anfrage — 05</span></div>
            <div className="lg:col-span-9 lg:col-start-4">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="structural-grid mt-20 grid border border-border bg-brand-blue-soft md:mt-28 md:grid-cols-12">
          <div className="border-b border-border p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10"><span className="text-sm font-bold text-primary">06/</span></div>
          <div className="border-b border-border p-8 md:col-span-7 md:border-b-0 md:border-r md:p-12"><p className="eyebrow text-primary">Direkt per E-Mail</p><h2 className="mt-6 font-display text-3xl font-light md:text-5xl">Wie können wir Sie <span className="font-semibold text-primary">unterstützen?</span></h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Beschreiben Sie uns kurz Ihr Vorhaben. Wir melden uns persönlich bei Ihnen zurück.</p></div>
          <div className="flex items-center p-8 md:col-span-3"><Button asChild size="lg" className="h-14 w-full rounded-none px-8 shadow-none"><a href="mailto:kontakt@denaro-consult.com?subject=Anfrage%20über%20die%20Website">E-Mail schreiben <ArrowUpRight /></a></Button></div>
        </div>
      </div>
    </section>
  </>;
}
