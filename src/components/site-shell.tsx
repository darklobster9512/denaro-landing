import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, Menu, Phone } from "lucide-react";

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
  { to: "/team", label: "Team" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Brand() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3.5" aria-label="Denaro Consulting Startseite">
      <span className="relative grid size-11 place-items-center overflow-hidden rounded-sm bg-primary font-display text-lg font-semibold text-primary-foreground shadow-sm">
        <span className="absolute right-0 top-0 h-1 w-5 bg-brand-blue-deep" />D
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-semibold text-foreground">DENARO</span>
        <span className="mt-1.5 block text-[0.61rem] font-semibold tracking-[0.2em] text-muted-foreground">CONSULTING</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-24 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative py-9 text-xs font-semibold uppercase text-muted-foreground transition-colors after:absolute after:bottom-6 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="lg" className="h-12 rounded-sm px-7 shadow-sm">
            <Link to="/kontakt">Kontakt <ArrowUpRight /></Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="size-11 rounded-none lg:hidden" aria-label="Menü öffnen">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
            <SheetContent className="w-[90vw] rounded-none border-l-border bg-background p-8">
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
    <section className="line-pattern relative overflow-hidden border-y border-border bg-brand-blue-soft">
      <div className="site-container relative grid gap-10 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28">
        <div>
          <p className="eyebrow text-primary">Der nächste Schritt</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] md:text-6xl">
            Aus einer komplexen Aufgabe wird ein <span className="editorial text-primary">klarer Weg.</span>
          </h2>
        </div>
        <Button asChild size="lg" className="h-14 rounded-sm px-8 shadow-sm hover:bg-brand-blue-deep">
          <Link to="/kontakt">Gespräch beginnen <ArrowUpRight /></Link>
        </Button>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr] lg:py-20">
        <div>
          <p className="font-display text-2xl font-semibold">DENARO <span className="editorial text-primary">Consulting</span></p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
            Unternehmensberatung, Informationstechnologie und Architektur mit klarer Perspektive und verlässlicher Umsetzung.
          </p>
        </div>
        <div className="text-sm leading-7">
          <p className="eyebrow text-primary">Kontakt</p>
          <p className="mt-3 text-muted-foreground">Mettlacher Straße 10<br />40468 Düsseldorf</p>
          <a className="mt-2 block hover:text-primary" href="tel:+4921187971210">0211 87971210</a>
          <a className="hover:text-primary" href="mailto:kontakt@denaro-consult.com">kontakt@denaro-consult.com</a>
        </div>
        <div className="text-sm leading-8">
          <p className="eyebrow text-primary">Navigation</p>
          <div className="mt-3 flex flex-col items-start text-muted-foreground">
            <Link to="/leistungen" className="hover:text-primary">Leistungen</Link>
            <Link to="/ueber-uns" className="hover:text-primary">Über uns</Link>
            <Link to="/team" className="hover:text-primary">Team</Link>
            <Link to="/kontakt" className="hover:text-primary">Kontakt</Link>
            <Link to="/impressum" className="hover:text-primary">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary">Datenschutz</Link>
          </div>
        </div>
      </div>
       <div className="border-t border-border bg-secondary/50">
         <div className="site-container flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Denaro Consulting GmbH</span><span className="flex items-center gap-2 text-primary">Düsseldorf <ArrowRight className="size-3" /></span></div>
      </div>
    </footer>
  );
}
