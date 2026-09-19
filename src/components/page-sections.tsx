import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Cpu, LineChart, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export const services = [
  {
    number: "01",
    title: "Unternehmensberatung",
    text: "Wir ordnen Strukturen, schärfen Entscheidungen und begleiten Unternehmen von der strategischen Idee bis zur belastbaren Umsetzung.",
    icon: LineChart,
  },
  {
    number: "02",
    title: "IT-Beratung",
    text: "Wir übersetzen fachliche Anforderungen in tragfähige IT-Lösungen und schaffen Orientierung bei Systemen, Prozessen und Digitalisierung.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Architektur & Hochbau",
    text: "Wir verbinden planerisches Verständnis mit wirtschaftlicher Perspektive – für klare Abläufe und zukunftsfähige Bauvorhaben.",
    icon: Building2,
  },
];

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="site-container py-20 md:py-28">
        <p className="eyebrow text-brand-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/75">{text}</p>
      </div>
    </section>
  );
}

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid border-l border-t border-border md:grid-cols-3">
      {services.map(({ number, title, text, icon: Icon }) => (
        <article key={title} className="group border-b border-r border-border bg-background p-7 transition-colors hover:bg-secondary md:p-9">
          <div className="flex items-start justify-between">
            <span className="text-xs font-extrabold text-brand-gold">{number}</span>
            <Icon className="size-7 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="mt-12 font-display text-2xl font-extrabold text-foreground">{title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
          {detailed && (
            <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm text-foreground">
              {title === "Unternehmensberatung" && <><li>Strategie und Organisation</li><li>Prozess- und Projektbegleitung</li><li>Wirtschaftliche Entscheidungsgrundlagen</li></>}
              {title === "IT-Beratung" && <><li>Digitalisierungsstrategien</li><li>System- und Prozessanalyse</li><li>Technologische Projektbegleitung</li></>}
              {title === "Architektur & Hochbau" && <><li>Planungs- und Projektberatung</li><li>Schnittstellenkoordination</li><li>Wirtschaftliche Projektbetrachtung</li></>}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export function ContactDetails() {
  const items = [
    { icon: MapPin, label: "Adresse", value: <>Mettlacher Straße 10<br />40468 Düsseldorf</> },
    { icon: Phone, label: "Telefon", value: <a href="tel:+4921187971210">0211 87971210</a> },
    { icon: Mail, label: "E-Mail", value: <a className="break-all" href="mailto:kontakt@denaro-consult.com">kontakt@denaro-consult.com</a> },
  ];
  return (
    <div className="grid border-l border-t border-border md:grid-cols-3">
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="border-b border-r border-border p-7 md:p-9">
          <Icon className="size-6 text-brand-gold" />
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
          <div className="mt-2 text-lg font-bold text-foreground">{value}</div>
        </div>
      ))}
    </div>
  );
}

export function TextLink({ to, children }: { to: "/leistungen" | "/ueber-uns" | "/kontakt"; children: React.ReactNode }) {
  return (
    <Button asChild variant="link" className="h-auto rounded-none p-0 font-bold no-underline">
      <Link to={to}>{children}<ArrowRight /></Link>
    </Button>
  );
}
