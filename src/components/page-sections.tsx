import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Cpu, LineChart, Mail, MapPin, Phone } from "lucide-react";

import consultingImage from "@/assets/denaro-boardroom-stock.jpg.asset.json";
import itImage from "@/assets/denaro-it-stock.jpg.asset.json";
import architectureImage from "@/assets/denaro-architecture-stock.jpg.asset.json";

import { Button } from "@/components/ui/button";

export const services = [
  {
    number: "01",
    title: "Unternehmensberatung",
    text: "Wir ordnen Strukturen, schärfen Entscheidungen und begleiten Unternehmen von der strategischen Idee bis zur belastbaren Umsetzung.",
    icon: LineChart,
    image: consultingImage,
    detail: ["Strategie und Organisation", "Prozess- und Projektbegleitung", "Wirtschaftliche Entscheidungsgrundlagen"],
  },
  {
    number: "02",
    title: "IT-Beratung",
    text: "Wir übersetzen fachliche Anforderungen in tragfähige IT-Lösungen und schaffen Orientierung bei Systemen, Prozessen und Digitalisierung.",
    icon: Cpu,
    image: itImage,
    detail: ["Digitalisierungsstrategien", "System- und Prozessanalyse", "Technologische Projektbegleitung"],
  },
  {
    number: "03",
    title: "Architektur & Hochbau",
    text: "Wir verbinden planerisches Verständnis mit wirtschaftlicher Perspektive – für klare Abläufe und zukunftsfähige Bauvorhaben.",
    icon: Building2,
    image: architectureImage,
    detail: ["Planungs- und Projektberatung", "Schnittstellenkoordination", "Wirtschaftliche Projektbetrachtung"],
  },
];

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="line-pattern relative overflow-hidden border-b border-border bg-brand-blue-soft">
      <div className="site-container relative py-20 md:py-28 lg:py-32">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.04] md:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return <div className="space-y-0 border-t border-border">
      {services.map(({ number, title, text, icon: Icon, image, detail }, index) => (
        <article key={title} className="grid border-b border-border py-12 md:grid-cols-12 md:gap-12 md:py-20">
          <div className={`group overflow-hidden md:col-span-5 ${index % 2 ? "md:order-2" : ""}`}>
             <img src={image.url} alt="" width={1408} height={1056} loading="lazy" className="image-lift aspect-[4/3] size-full object-cover" />
          </div>
          <div className={`mt-8 md:col-span-7 md:mt-0 md:self-center ${index % 2 ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
            <div className="flex items-center gap-4"><span className="text-xs font-semibold text-primary">{number}</span><Icon className="size-6 text-primary" strokeWidth={1.5} /></div>
            <h2 className="mt-6 font-display text-3xl font-semibold md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {detail.map((item) => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><span className="h-px w-6 bg-primary" />{item}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>;
  }
  return (
    <div className="grid border-l border-t border-border lg:grid-cols-3">
      {services.map(({ number, title, text, icon: Icon }) => (
        <article key={title} className="group min-h-80 border-b border-r border-border bg-background p-7 transition-colors hover:bg-secondary md:p-9">
          <div className="flex items-start justify-between">
            <span className="text-xs font-extrabold text-primary">{number}</span>
            <Icon className="size-7 text-primary" strokeWidth={1.5} />
          </div>
           <h2 className="mt-14 font-display text-2xl font-semibold text-foreground">{title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
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
        <div key={label} className="group min-h-52 border-b border-r border-border p-7 transition-colors hover:bg-secondary md:p-9">
          <Icon className="size-6 text-primary" />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
          <div className="mt-2 text-lg font-semibold text-foreground">{value}</div>
        </div>
      ))}
    </div>
  );
}

export function TextLink({ to, children }: { to: "/leistungen" | "/ueber-uns" | "/kontakt"; children: React.ReactNode }) {
  return (
    <Button asChild variant="link" className="h-auto rounded-none p-0 font-semibold no-underline">
      <Link to={to}>{children}<ArrowRight /></Link>
    </Button>
  );
}
