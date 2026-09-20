import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, Menu, Phone } from "lucide-react";

const logoAsset = { url: "/images/denaro-logo.png" };


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
  { to: "/karriere", label: "Karriere" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Brand() {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="Denaro Consulting Startseite">
      <img src={logoAsset.url} alt="Denaro Consulting" className="h-8 w-auto md:h-9" width="1528" height="355" />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-20 items-center justify-between gap-4 md:h-24">
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
            <Button variant="ghost" size="icon" className="size-12 shrink-0 rounded-none lg:hidden" aria-label="Menü öffnen">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
            <SheetContent className="flex w-[92vw] max-w-sm flex-col overflow-y-auto rounded-none border-l-border bg-background p-6 sm:p-8">
            <SheetHeader className="text-left">
              <SheetTitle><Brand /></SheetTitle>
              <SheetDescription className="pt-3">Beratung, Technologie und Architektur aus Düsseldorf.</SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-col" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link to={item.to} className="flex min-h-14 items-center border-b border-border font-display text-xl font-bold active:text-primary">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 flex flex-col text-sm">
              <a className="flex min-h-12 items-center gap-3 font-semibold text-primary" href="tel:+4921187971210"><Phone className="size-4 shrink-0" />0211 87971210</a>
              <a className="flex min-h-12 items-center gap-3 break-all font-semibold text-primary" href="mailto:kontakt@denaro-consult.com"><Mail className="size-4 shrink-0" />kontakt@denaro-consult.com</a>
            </div>
            <SheetClose asChild>
              <Button asChild size="lg" className="mt-6 h-14 w-full rounded-none">
                <Link to="/kontakt">Kontakt aufnehmen <ArrowUpRight /></Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function ContactBand() {
  return (
    <section className="line-pattern relative overflow-hidden border-y border-border bg-brand-blue-soft">
      <div className="site-container relative grid gap-8 py-14 md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:py-28">
        <div>
          <p className="eyebrow text-primary">Der nächste Schritt</p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-6xl">
            Aus einer komplexen Aufgabe wird ein <span className="editorial text-primary">klarer Weg.</span>
          </h2>
        </div>
        <Button asChild size="lg" className="h-14 w-full rounded-sm px-8 shadow-sm hover:bg-brand-blue-deep sm:w-auto">
          <Link to="/kontakt">Gespräch beginnen <ArrowUpRight /></Link>
        </Button>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-background text-foreground">
      <div className="site-container pb-10 pt-10 md:pb-14 md:pt-16">
        <div className="border border-border bg-card shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Identität */}
            <div className="border-b border-border p-6 sm:p-8 md:col-span-4 md:border-r md:p-10">
              <Link to="/" className="inline-block" aria-label="Denaro Consulting Startseite">
                <img src={logoAsset.url} alt="Denaro Consulting" className="h-9 w-auto" width="1528" height="355" />
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
                Unternehmensberatung, Informationstechnologie und Architektur mit klarer Perspektive und verlässlicher Umsetzung.
              </p>
              <div className="mt-8 space-y-1 font-mono text-[11px] uppercase leading-5 tracking-tight text-muted-foreground/80">
                <p>HRB 107712 · Amtsgericht Düsseldorf</p>
                <p>UStId DE163919849</p>
              </div>
              <p className="mt-5 border-t border-border/70 pt-4 text-xs text-muted-foreground">
                <span className="text-foreground font-medium">Geschäftsführer:</span> Alexander Valentino Denaro
              </p>
            </div>

            {/* Leistungen */}
            <div className="border-b border-border p-6 sm:p-8 md:col-span-3 md:border-r md:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Leistungen</p>
              <ul className="mt-6 space-y-1 text-sm">
                <li>
                  <Link to="/leistungen" className="tap-target text-muted-foreground transition-colors hover:text-primary">
                    Unternehmensberatung
                  </Link>
                </li>
                <li>
                  <Link to="/leistungen" className="tap-target text-muted-foreground transition-colors hover:text-primary">
                    IT-Beratung
                  </Link>
                </li>
                <li>
                  <Link to="/leistungen" className="tap-target text-muted-foreground transition-colors hover:text-primary">
                    Architektur &amp; Hochbau
                  </Link>
                </li>
              </ul>
            </div>

            {/* Unternehmen */}
            <div className="border-b border-border p-6 sm:p-8 md:col-span-2 md:border-r md:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Unternehmen</p>
              <ul className="mt-6 space-y-1 text-sm">
                <li><Link to="/ueber-uns" className="tap-target text-muted-foreground transition-colors hover:text-primary">Über uns</Link></li>
                <li><Link to="/team" className="tap-target text-muted-foreground transition-colors hover:text-primary">Team</Link></li>
                <li><Link to="/karriere" className="tap-target text-muted-foreground transition-colors hover:text-primary">Karriere</Link></li>
                <li><Link to="/kontakt" className="tap-target text-muted-foreground transition-colors hover:text-primary">Kontakt</Link></li>
              </ul>
            </div>

            {/* Kontakt */}
            <div className="p-6 sm:p-8 md:col-span-3 md:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Kontakt</p>
              <address className="mt-6 space-y-4 not-italic text-sm">
                <p className="leading-6 text-muted-foreground">
                  Mettlacher Straße 10<br />
                  40468 Düsseldorf
                </p>
                <div className="space-y-2">
                  <a href="tel:+4921187971210" className="tap-target block font-medium text-foreground transition-colors hover:text-primary">
                    0211 87971210
                  </a>
                  <a
                    href="mailto:kontakt@denaro-consult.com"
                    className="tap-target block break-all font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                  >
                    kontakt@denaro-consult.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Rechtszeile */}
          <div className="border-t border-border px-6 py-5 sm:px-8 md:px-10">
            <div className="flex flex-col gap-4 text-[11px] tracking-wide text-muted-foreground md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
                <span className="font-medium text-foreground/70">© 2026 Denaro Consulting GmbH</span>
                <Link to="/impressum" className="tap-target uppercase transition-colors hover:text-primary">Impressum</Link>
                <Link to="/datenschutz" className="tap-target uppercase transition-colors hover:text-primary">Datenschutz</Link>
              </div>
              <div className="group inline-flex items-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground transition-colors group-hover:text-primary">Düsseldorf</span>
                <ArrowRight className="ml-2 size-3.5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
