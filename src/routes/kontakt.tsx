import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

import { ContactDetails, PageIntro } from "@/components/page-sections";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

const fieldClass =
  "h-14 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none transition-colors focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60";

function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <Label htmlFor={htmlFor} className="eyebrow flex items-baseline gap-1.5 text-foreground">
      {children}
      {required && <span className="text-primary" aria-hidden="true">*</span>}
    </Label>
  );
}

function ContactForm() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={formRef}
        className="border border-border"
        onSubmit={(event) => {
          event.preventDefault();
          setDialogOpen(true);
        }}
      >
        {/* Gruppe 01 — Angaben */}
        <div className="border-b border-border">
          <div className="flex items-baseline gap-6 border-b border-border bg-brand-blue-soft px-6 py-5 md:px-10">
            <span className="text-sm font-bold text-primary">01</span>
            <p className="eyebrow text-foreground">Ihre Angaben</p>
          </div>
          <div className="grid gap-x-10 gap-y-8 px-6 py-8 md:grid-cols-2 md:px-10 md:py-10">
            <div className="space-y-3">
              <FieldLabel htmlFor="name" required>Name</FieldLabel>
              <Input id="name" name="name" required autoComplete="name" placeholder="Vor- und Nachname" className={fieldClass} />
            </div>
            <div className="space-y-3">
              <FieldLabel htmlFor="company">Unternehmen</FieldLabel>
              <Input id="company" name="company" autoComplete="organization" placeholder="Name Ihres Unternehmens" className={fieldClass} />
            </div>
            <div className="space-y-3">
              <FieldLabel htmlFor="email" required>E-Mail</FieldLabel>
              <Input id="email" name="email" type="email" required autoComplete="email" placeholder="name@unternehmen.de" className={fieldClass} />
            </div>
            <div className="space-y-3">
              <FieldLabel htmlFor="phone">Telefon</FieldLabel>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+49 …" className={fieldClass} />
            </div>
          </div>
        </div>

        {/* Gruppe 02 — Vorhaben */}
        <div className="border-b border-border">
          <div className="flex items-baseline gap-6 border-b border-border bg-brand-blue-soft px-6 py-5 md:px-10">
            <span className="text-sm font-bold text-primary">02</span>
            <p className="eyebrow text-foreground">Ihr Vorhaben</p>
          </div>
          <div className="grid gap-x-10 gap-y-8 px-6 py-8 md:px-10 md:py-10">
            <div className="space-y-3">
              <FieldLabel htmlFor="topic" required>Thema</FieldLabel>
              <Select name="topic" required>
                <SelectTrigger id="topic" className={fieldClass + " w-full"}>
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
            <div className="space-y-3">
              <FieldLabel htmlFor="message" required>Nachricht</FieldLabel>
              <Textarea id="message" name="message" required rows={5} placeholder="Beschreiben Sie kurz Ihr Vorhaben und Ihre Ziele …" className={fieldClass + " min-h-36 resize-y py-3 leading-7"} />
            </div>
          </div>
        </div>

        {/* Abschluss */}
        <div className="px-6 py-8 md:px-10 md:py-10">
          <div className="flex items-start gap-4">
            <Checkbox id="privacy" required className="mt-1 size-5 rounded-none" />
            <Label htmlFor="privacy" className="text-sm font-normal leading-7 text-muted-foreground">
              Ich habe die <Link to="/datenschutz" className="font-medium text-primary underline underline-offset-4">Datenschutzerklärung</Link> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. <span className="text-primary" aria-hidden="true">*</span>
            </Label>
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-6 text-muted-foreground">
              Pflichtfelder sind mit <span className="text-primary" aria-hidden="true">*</span> gekennzeichnet.<br />
              Wir melden uns persönlich bei Ihnen zurück.
            </p>
            <Button type="submit" size="lg" className="h-16 w-full rounded-none px-12 text-base shadow-none md:w-auto">
              Anfrage senden <ArrowUpRight />
            </Button>
          </div>
        </div>
      </form>

      <Dialog open={dialogOpen} onOpenChange={(open) => {
        setDialogOpen(open);
        if (!open) formRef.current?.reset();
      }}>
        <DialogContent className="max-w-lg rounded-none border-border p-0">
          <div className="h-1 w-full bg-primary" aria-hidden="true" />
          <DialogHeader className="px-8 pt-8 md:px-10">
            <CheckCircle2 className="mb-6 size-10 text-primary" strokeWidth={1.5} />
            <DialogTitle className="font-display text-2xl font-light leading-tight md:text-3xl">
              Vielen Dank für <span className="font-semibold text-primary">Ihre Anfrage.</span>
            </DialogTitle>
            <DialogDescription className="pt-4 text-sm leading-7">
              Ihre Anfrage ist bei uns eingegangen. Wir melden uns persönlich bei Ihnen zurück.
            </DialogDescription>
          </DialogHeader>
          <div className="border-t border-border bg-brand-blue-soft px-8 py-5 md:px-10">
            <p className="text-xs leading-6 text-muted-foreground">
              Hinweis: Dieses Formular ist aktuell ein Entwurf und versendet noch keine Daten. Bitte richten Sie Ihre Anfrage direkt an{" "}
              <a href="mailto:kontakt@denaro-consult.com" className="font-medium text-primary underline underline-offset-4">kontakt@denaro-consult.com</a>.
            </p>
          </div>
          <DialogFooter className="px-8 pb-8 pt-6 md:px-10">
            <Button onClick={() => { setDialogOpen(false); formRef.current?.reset(); }} size="lg" className="h-12 w-full rounded-none px-10 shadow-none sm:w-auto">
              Schließen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
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
            <div className="min-w-0 lg:col-span-9 lg:col-start-4">
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
