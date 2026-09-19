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

export function PageIntro({ eyebrow, title, text, number = "01" }: { eyebrow: string; title: string; text: string; number?: string }) {
  return (
    <section className="structural-grid border-b border-border bg-secondary py-8 md:py-12">
      <div className="site-container border border-border bg-background md:structural-shadow">
        <div className="grid min-w-0 overflow-hidden lg:grid-cols-12">
          <div className="border-b border-border p-7 lg:col-span-2 lg:border-b-0 lg:border-r lg:p-10">
            <span className="text-sm font-bold text-primary">{number}/</span>
            <p className="vertical-label mt-12 hidden text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground lg:block">Denaro Consulting · Düsseldorf</p>
          </div>
          <div className="border-b border-border p-7 md:p-12 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-14">
            <p className="eyebrow text-primary">{eyebrow}</p>
            <h1 className="mt-7 max-w-4xl break-words font-display text-4xl font-light leading-[1.02] sm:text-5xl md:text-7xl">{title}</h1>
          </div>
          <div className="flex flex-col justify-end p-7 md:p-10 lg:col-span-4">
            <span className="mb-8 h-0.5 w-12 bg-primary" />
            <p className="max-w-md text-lg leading-8 text-muted-foreground">{text}</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border px-7 py-4 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-muted-foreground"><span>Unternehmerische Klarheit</span><span className="text-primary">Strategie · Technologie · Planung</span></div>
      </div>
    </section>
  );
}

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return <div className="border-t border-border">
      {services.map(({ number, title, text, icon: Icon, image, detail }, index) => (
        <article key={title} className="grid min-w-0 border-b border-border py-14 md:grid-cols-12 md:py-24">
          <div className={`group relative min-w-0 overflow-hidden border-x border-border md:col-span-6 ${index % 2 ? "md:order-2" : ""}`}>
             <img src={image.url} alt="" width={1408} height={1056} loading="lazy" className="image-lift aspect-[4/3] size-full object-cover" />
             <span className="absolute left-0 top-0 bg-primary px-5 py-4 text-sm font-bold text-primary-foreground">{number}</span>
          </div>
          <div className={`min-w-0 border-x border-t border-border p-8 md:col-span-6 md:self-stretch md:border-t-0 md:p-12 lg:p-14 ${index % 2 ? "md:order-1 md:border-r-0" : "md:border-l-0"}`}>
            <div className="flex items-center justify-between"><span className="eyebrow text-primary">Kompetenzfeld {number}</span><Icon className="size-7 text-primary" strokeWidth={1.5} /></div>
            <h2 className="mt-10 break-words font-display text-3xl font-semibold md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
            <ul className="mt-10 border-t border-border">
              {detail.map((item, itemIndex) => <li key={item} className="grid grid-cols-[2.5rem_1fr] border-b border-border py-4 text-sm font-semibold"><span className="text-xs text-primary">0{itemIndex + 1}</span>{item}</li>)}
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
        <div key={label} className="group relative min-h-64 border-b border-r border-border p-7 transition-colors hover:bg-secondary md:p-9">
          <div className="flex items-start justify-between"><Icon className="size-7 text-primary" strokeWidth={1.5} /><span className="text-xs font-bold text-primary">0{items.findIndex((item) => item.label === label) + 1}</span></div>
          <p className="eyebrow mt-14 text-muted-foreground">{label}</p>
          <div className="mt-3 text-lg font-semibold leading-7 text-foreground">{value}</div>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
        </div>
      ))}
    </div>
  );
}

export function TextLink({ to, children }: { to: "/leistungen" | "/ueber-uns" | "/team" | "/kontakt"; children: React.ReactNode }) {
  return (
    <Button asChild variant="link" className="h-auto rounded-none p-0 font-semibold no-underline">
      <Link to={to}>{children}<ArrowRight /></Link>
    </Button>
  );
}
