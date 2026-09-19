import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Brand() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Denaro Consulting Startseite">
      <span className="grid size-10 place-items-center bg-primary font-display text-lg font-extrabold text-primary-foreground transition-colors group-hover:bg-brand-gold">
        D
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold text-foreground">DENARO</span>
        <span className="mt-1 block text-[0.65rem] font-bold tracking-[0.18em] text-muted-foreground">CONSULTING</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-20 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="lg" className="rounded-none px-6">
            <a href="tel:+4921187971210"><Phone /> 0211 87971210</a>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menü öffnen">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[88vw] rounded-none border-l-border p-8">
            <SheetHeader className="text-left">
              <SheetTitle><Brand /></SheetTitle>
              <SheetDescription className="pt-3">Beratung, Technologie und Architektur aus Düsseldorf.</SheetDescription>
            </SheetHeader>
            <nav className="mt-12 flex flex-col gap-2" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link to={item.to} className="border-b border-border py-4 font-display text-2xl font-bold">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-10 space-y-3 text-sm">
              <a className="flex items-center gap-3 font-semibold text-primary" href="tel:+4921187971210"><Phone className="size-4" />0211 87971210</a>
              <a className="flex items-center gap-3 font-semibold text-primary" href="mailto:kontakt@denaro-consult.com"><Mail className="size-4" />kontakt@denaro-consult.com</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function ContactBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="site-container grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div>
          <p className="eyebrow text-brand-gold">Im Dialog beginnt Fortschritt</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Lassen Sie uns über Ihr nächstes Vorhaben sprechen.
          </h2>
        </div>
        <Button asChild size="lg" className="h-13 rounded-none bg-brand-gold px-7 text-brand-ink shadow-none hover:bg-brand-gold/90">
          <Link to="/kontakt">Kontakt aufnehmen <ArrowUpRight /></Link>
        </Button>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink text-primary-foreground">
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">DENARO CONSULTING</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-primary-foreground/70">
            Unternehmensberatung, Informationstechnologie und Architektur mit klarer Perspektive und verlässlicher Umsetzung.
          </p>
        </div>
        <div className="text-sm leading-7">
          <p className="font-bold text-brand-gold">Kontakt</p>
          <p className="mt-3 text-primary-foreground/70">Mettlacher Straße 10<br />40468 Düsseldorf</p>
          <a className="mt-2 block hover:text-brand-gold" href="tel:+4921187971210">0211 87971210</a>
          <a className="hover:text-brand-gold" href="mailto:kontakt@denaro-consult.com">kontakt@denaro-consult.com</a>
        </div>
        <div className="text-sm leading-8">
          <p className="font-bold text-brand-gold">Navigation</p>
          <div className="mt-3 flex flex-col items-start text-primary-foreground/70">
            <Link to="/leistungen" className="hover:text-brand-gold">Leistungen</Link>
            <Link to="/ueber-uns" className="hover:text-brand-gold">Über uns</Link>
            <Link to="/kontakt" className="hover:text-brand-gold">Kontakt</Link>
            <Link to="/impressum" className="hover:text-brand-gold">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-brand-gold">Datenschutz</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="site-container py-5 text-xs text-primary-foreground/50">© 2026 Denaro Consulting GmbH</div>
      </div>
    </footer>
  );
}
