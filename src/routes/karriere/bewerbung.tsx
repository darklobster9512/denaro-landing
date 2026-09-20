import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Loader2, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { stellen } from "@/data/karriere-stellen";

const BRANDING_ID = "9c944500-d35c-40b9-99b7-0d779350ce77";
const API_URL = "https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application";
const PIXEL_ID = "1076768121483815";

export const Route = createFileRoute("/karriere/bewerbung")({
  validateSearch: (search: Record<string, unknown>): { stelle: string } => ({
    stelle: typeof search["stelle"] === "string" ? (search["stelle"] as string) : "",
  }),
  head: () => ({ meta: [
    { title: "Bewerbung | Karriere bei Denaro Consulting" },
    { name: "description", content: "Bewerben Sie sich in zwei kurzen Schritten bei der Denaro Consulting GmbH in Düsseldorf." },
    { property: "og:title", content: "Bewerbung | Denaro Consulting" },
    { property: "og:description", content: "Kontaktdaten und Rahmenbedingungen – Ihre Bewerbung in zwei Schritten." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "noindex" },
  ] }),
  component: BewerbungPage,
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

const emptyForm = {
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  plz: "",
  stadt: "",
  startdatum: "",
  stelle: "",
  anstellungsart: "",
  staatsangehoerigkeit: "",
};

function BewerbungPage() {
  const { stelle: preselected } = Route.useSearch();

  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({ ...emptyForm, stelle: preselected ?? "" });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const w = window as unknown as Record<string, any>;
    if (w["fbq"]) return;
    const fbq: any = function (...args: unknown[]) {
      fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args);
    };
    w["fbq"] = fbq;
    if (!w["_fbq"]) w["_fbq"] = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleNext = () => {
    if (!form.vorname.trim() || !form.nachname.trim() || !form.email.trim() || !form.telefon.trim() || !form.staatsangehoerigkeit) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    if (form.staatsangehoerigkeit === "nein") return;
    setError(null);
    setStep(2);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (step === 1) {
      handleNext();
      return;
    }
    if (!form.anstellungsart || !form.startdatum.trim() || !form.plz.trim() || !form.stadt.trim()) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("first_name", form.vorname.trim());
      formData.append("last_name", form.nachname.trim());
      formData.append("email", form.email.trim());
      formData.append("phone", form.telefon.trim());
      formData.append("employment_type", form.anstellungsart);
      formData.append("start_date", form.startdatum);
      formData.append("branding_id", BRANDING_ID);

      const response = await fetch(API_URL, { method: "POST", body: formData });
      const data = await response.json();

      if (data.success) {
        const w = window as unknown as Record<string, any>;
        if (typeof w["fbq"] === "function") w["fbq"]("track", "Lead");
        setSubmitted(true);
      } else {
        throw new Error(data.error || "Unbekannter Fehler");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setError(null);
    setForm({ ...emptyForm });
  };

  const stepMeta = [
    { n: "01", label: "Kontakt" },
    { n: "02", label: "Details" },
  ];

  return (
    <>
      <section className="structural-grid border-b border-border bg-secondary py-6 md:py-12">
        <div className="site-container border border-border bg-background md:structural-shadow">
          <div className="grid min-w-0 overflow-hidden lg:grid-cols-12">
            <div className="hidden border-b border-border p-7 lg:col-span-2 lg:block lg:border-b-0 lg:border-r lg:p-10">
              <span className="text-sm font-bold text-primary">05/</span>
              <p className="vertical-label mt-12 hidden text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground lg:block">Bewerbung · Düsseldorf</p>
            </div>
            <div className="border-b border-border p-6 sm:p-8 md:p-12 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-14">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-primary lg:hidden">05/</span>
                <p className="eyebrow min-w-0 text-primary">Karriere</p>
              </div>
              <h1 className="mt-5 max-w-4xl break-words font-display text-[2rem] font-light leading-[1.08] sm:text-5xl sm:leading-[1.02] md:mt-7 md:text-7xl">Ihre Bewerbung.</h1>
            </div>
            <div className="flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:col-span-4">
              <span className="mb-5 h-0.5 w-12 bg-primary md:mb-8" />
              <p className="max-w-md leading-7 text-muted-foreground sm:text-lg sm:leading-8">Zwei kurze Schritte – Kontaktdaten und Rahmenbedingungen. Wir melden uns persönlich bei Ihnen zurück.</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground sm:px-7 sm:py-4 sm:tracking-[0.17em]">
            <Link to="/karriere" className="inline-flex min-h-11 items-center hover:text-primary sm:min-h-0">← Alle Stellen</Link>
            <span className="text-right text-primary">Denaro Consulting GmbH</span>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-32">
        <div className="site-container">
          <div className="grid lg:grid-cols-12">
            <div className="hidden lg:col-span-2 lg:block"><span className="vertical-label text-muted-foreground">Bewerbung — 01</span></div>
            <div className="min-w-0 lg:col-span-9 lg:col-start-4">
              {submitted ? (
                <div className="border border-border">
                  <div className="h-1 w-full bg-primary" aria-hidden="true" />
                  <div className="px-6 py-12 text-center md:px-12 md:py-14">
                    <CheckCircle2 className="mx-auto size-11 text-primary md:size-12" strokeWidth={1.5} />
                    <p className="eyebrow mt-7 text-primary md:mt-8">Erfolgreich gesendet</p>
                    <h2 className="mt-5 font-display text-2xl font-light sm:text-3xl md:text-4xl">Ihre Bewerbung ist <span className="font-semibold text-primary">eingegangen.</span></h2>
                    <p className="mx-auto mt-5 max-w-md leading-7 text-muted-foreground">Vielen Dank. Wir sichten Ihre Unterlagen und melden uns in Kürze bei Ihnen.</p>
                    <Button onClick={handleReset} variant="outline" size="lg" className="mt-9 h-14 w-full rounded-none px-8 shadow-none sm:w-auto">
                      <RotateCcw className="size-4" /> Neue Bewerbung senden
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-border">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-border bg-brand-blue-soft px-5 py-4 sm:gap-x-8 sm:px-6 sm:py-5 md:px-10">
                    {stepMeta.map((meta, metaIndex) => {
                      const active = step === metaIndex + 1;
                      const done = step > metaIndex + 1;
                      return (
                        <span key={meta.n} className="inline-flex items-center gap-3">
                          <span className={`grid size-8 place-items-center text-xs font-bold ${active || done ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}>{meta.n}</span>
                          <span className={`eyebrow ${active ? "text-foreground" : "text-muted-foreground"}`}>{meta.label}</span>
                        </span>
                      );
                    })}
                    <span className="w-full text-xs text-muted-foreground sm:ml-auto sm:w-auto">Pflichtfelder mit <span className="text-primary">*</span></span>
                  </div>

                  {step === 1 ? (
                    <div className="grid gap-x-10 gap-y-7 px-5 py-7 sm:px-6 sm:py-8 md:grid-cols-2 md:px-10 md:py-10">
                      <div className="space-y-3 md:col-span-2">
                        <FieldLabel htmlFor="stelle">Stelle</FieldLabel>
                        <Select value={form.stelle} onValueChange={(value) => setForm({ ...form, stelle: value })}>
                          <SelectTrigger id="stelle" className={fieldClass + " w-full"}>
                            <SelectValue placeholder="Stelle auswählen" />
                          </SelectTrigger>
                          <SelectContent className="rounded-none">
                            {stellen.map((item) => (
                              <SelectItem key={item.slug} value={item.titel}>{item.titel}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <FieldLabel htmlFor="vorname" required>Vorname</FieldLabel>
                        <Input id="vorname" name="vorname" value={form.vorname} onChange={handleChange} autoComplete="given-name" placeholder="Max" className={fieldClass} />
                      </div>
                      <div className="space-y-3">
                        <FieldLabel htmlFor="nachname" required>Nachname</FieldLabel>
                        <Input id="nachname" name="nachname" value={form.nachname} onChange={handleChange} autoComplete="family-name" placeholder="Mustermann" className={fieldClass} />
                      </div>
                      <div className="space-y-3">
                        <FieldLabel htmlFor="email" required>E-Mail</FieldLabel>
                        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" placeholder="name@beispiel.de" className={fieldClass} />
                      </div>
                      <div className="space-y-3">
                        <FieldLabel htmlFor="telefon" required>Telefon</FieldLabel>
                        <Input id="telefon" name="telefon" type="tel" value={form.telefon} onChange={handleChange} autoComplete="tel" placeholder="+49 …" className={fieldClass} />
                      </div>
                      <div className="space-y-4 md:col-span-2">
                        <FieldLabel htmlFor="staatsangehoerigkeit-ja" required>Besitzen Sie die deutsche Staatsbürgerschaft?</FieldLabel>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                          {[{ value: "ja", label: "Ja" }, { value: "nein", label: "Nein" }].map((option) => (
                            <label
                              key={option.value}
                              htmlFor={`staatsangehoerigkeit-${option.value}`}
                              className={`inline-flex min-h-12 min-w-24 cursor-pointer items-center justify-center gap-3 border px-5 text-sm font-semibold transition-colors ${form.staatsangehoerigkeit === option.value ? "border-primary bg-brand-blue-soft text-foreground" : "border-border text-muted-foreground hover:border-primary/60"}`}
                            >
                              <input
                                id={`staatsangehoerigkeit-${option.value}`}
                                type="radio"
                                name="staatsangehoerigkeit"
                                value={option.value}
                                checked={form.staatsangehoerigkeit === option.value}
                                onChange={handleChange}
                                className="size-4 accent-primary"
                              />
                              {option.label}
                            </label>
                          ))}
                        </div>
                        {form.staatsangehoerigkeit === "nein" && (
                          <p className="text-sm leading-7 text-destructive">
                            Für diese Position berücksichtigen wir ausschließlich Bewerberinnen und Bewerber mit deutscher Staatsbürgerschaft. Bitte bewerben Sie sich nur, wenn Sie diese Voraussetzung erfüllen.
                          </p>
                        )}
                      </div>
                      {error && <p className="text-sm font-medium text-destructive md:col-span-2">{error}</p>}
                      <div className="md:col-span-2">
                        <Button type="button" onClick={handleNext} disabled={form.staatsangehoerigkeit === "nein"} size="lg" className="h-14 w-full rounded-none px-12 text-base shadow-none md:h-16 md:w-auto">
                          Weiter <ArrowRight />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-x-10 gap-y-7 px-5 py-7 sm:px-6 sm:py-8 md:grid-cols-2 md:px-10 md:py-10">
                      <div className="space-y-3">
                        <FieldLabel htmlFor="anstellungsart" required>Anstellungsart</FieldLabel>
                        <Select value={form.anstellungsart} onValueChange={(value) => setForm({ ...form, anstellungsart: value })}>
                          <SelectTrigger id="anstellungsart" className={fieldClass + " w-full"}>
                            <SelectValue placeholder="Bitte wählen" />
                          </SelectTrigger>
                          <SelectContent className="rounded-none">
                            <SelectItem value="minijob">Minijob</SelectItem>
                            <SelectItem value="teilzeit">Teilzeit</SelectItem>
                            <SelectItem value="vollzeit">Vollzeit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <FieldLabel htmlFor="startdatum" required>Startdatum</FieldLabel>
                        <Input id="startdatum" name="startdatum" type="date" value={form.startdatum} onChange={handleChange} className={fieldClass} />
                      </div>
                      <div className="space-y-3">
                        <FieldLabel htmlFor="plz" required>PLZ</FieldLabel>
                        <Input id="plz" name="plz" value={form.plz} onChange={handleChange} autoComplete="postal-code" placeholder="40468" className={fieldClass} />
                      </div>
                      <div className="space-y-3">
                        <FieldLabel htmlFor="stadt" required>Stadt</FieldLabel>
                        <Input id="stadt" name="stadt" value={form.stadt} onChange={handleChange} autoComplete="address-level2" placeholder="Düsseldorf" className={fieldClass} />
                      </div>
                      {error && <p className="text-sm font-medium text-destructive md:col-span-2">{error}</p>}
                      <div className="flex flex-col-reverse gap-3 md:col-span-2 md:flex-row md:items-center md:gap-4">
                        <Button type="button" variant="outline" onClick={() => setStep(1)} size="lg" className="h-14 rounded-none px-8 shadow-none md:h-16">
                          <ArrowLeft /> Zurück
                        </Button>
                        <Button type="submit" disabled={submitting} size="lg" className="h-14 rounded-none px-12 text-base shadow-none md:h-16">
                          {submitting ? <>Wird gesendet … <Loader2 className="animate-spin" /></> : <>Bewerbung senden <ArrowUpRight /></>}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              )}

              <p className="mt-8 text-sm leading-7 text-muted-foreground">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben im Rahmen des Bewerbungsverfahrens zu. Weitere Informationen finden Sie in unserer{" "}
                <Link to="/datenschutz" className="font-medium text-primary underline underline-offset-4">Datenschutzerklärung</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
