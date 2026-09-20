import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageIntro } from "@/components/page-sections";
import { Button } from "@/components/ui/button";

import gfAsset from "@/assets/team-geschaeftsfuehrer_1.png.asset.json";
import plAsset from "@/assets/team-projektleiter_1.png.asset.json";
import recAsset from "@/assets/team-recruiter_1.png.asset.json";
import hrAsset from "@/assets/team-HR_managerin_1.png.asset.json";
import mann2Asset from "@/assets/team-mann_2.png.asset.json";
import frau1Asset from "@/assets/team-frau_1.png.asset.json";
import frau2Asset from "@/assets/team-frau_2.png.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Team | Denaro Consulting GmbH" },
    { name: "description", content: "Das Team der Denaro Consulting GmbH in Düsseldorf: Geschäftsführung, Projektleitung, Recruiting und Beratung." },
    { property: "og:title", content: "Team | Denaro Consulting" },
    { property: "og:description", content: "Die Menschen hinter Denaro Consulting." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TeamPage,
});

const leader = {
  name: "Alexander Valentino Denaro",
  role: "Geschäftsführung",
  image: gfAsset.url,
};

const members = [
  { name: "Michael Bergmann", role: "Projektleitung", image: plAsset.url },
  { name: "Jonas Reuter", role: "Recruiter", image: recAsset.url },
  { name: "Laura Steinhoff", role: "HR & Personalberatung", image: hrAsset.url },
  { name: "David Okafor", role: "Senior-Berater Unternehmensberatung", image: mann2Asset.url },
  { name: "Nele Krüger", role: "IT-Beratung", image: frau1Asset.url },
  { name: "Miriam Seidel", role: "Architektur & Hochbau", image: frau2Asset.url },
];

function TeamPage() {
  return <>
    <PageIntro eyebrow="Unser Team" title="Die Menschen hinter Denaro." text="Persönlich, erfahren und mit klarer Verantwortung: Lernen Sie die Menschen kennen, die unsere Mandate von der ersten Analyse bis zur Umsetzung begleiten." number="04" />
    <section className="py-24 md:py-32">
      <div className="site-container">
        {/* Geschäftsführung */}
        <div className="mb-12 grid gap-8 border-b border-border pb-10 lg:grid-cols-12">
          <p className="eyebrow text-primary lg:col-span-3">Geschäftsführung</p>
          <h2 className="font-display text-3xl font-light leading-tight md:text-4xl lg:col-span-6 lg:col-start-7">Verantwortung mit <span className="font-semibold text-primary">klarer Haltung.</span></h2>
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="hidden lg:col-span-2 lg:block"><span className="vertical-label text-muted-foreground">Geschäftsführung — 01</span></div>
          <div className="min-w-0 lg:col-span-9 lg:col-start-4">
            <div className="structural-grid grid border border-border bg-background md:grid-cols-12">
              <div className="flex items-center justify-center border-b border-border p-10 md:col-span-5 md:h-full md:border-b-0 md:border-r">
                <img src={leader.image} alt={leader.name} className="size-44 rounded-full object-cover object-top ring-1 ring-border md:size-48" loading="lazy" />
              </div>
              <div className="flex flex-col justify-between gap-10 p-8 md:col-span-7 md:p-12">
                <div>
                  <span className="text-sm font-bold text-primary">01/</span>
                  <p className="eyebrow mt-8 text-primary">{leader.role}</p>
                  <h3 className="mt-4 font-display text-3xl font-light leading-tight md:text-5xl">{leader.name}</h3>
                  <p className="mt-6 max-w-lg leading-7 text-muted-foreground">
                    Als Geschäftsführer verantwortet Alexander Valentino Denaro die strategische Ausrichtung der Denaro Consulting GmbH und begleitet Mandate persönlich von der ersten Analyse bis zur Entscheidung.
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-border pt-6 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-muted-foreground">
                  <span className="h-0.5 w-10 bg-primary" />
                  <span>Düsseldorf</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-20 md:mt-28">
          <div className="mb-12 grid gap-8 border-b border-border pb-10 lg:grid-cols-12">
            <p className="eyebrow text-primary lg:col-span-3">Team</p>
            <h2 className="font-display text-3xl font-light leading-tight md:text-4xl lg:col-span-6 lg:col-start-7">Persönlich erreichbar. <span className="font-semibold text-primary">Klar im Austausch.</span></h2>
          </div>
          <div className="grid lg:grid-cols-12">
            <div className="hidden lg:col-span-2 lg:block"><span className="vertical-label text-muted-foreground">Team — 02</span></div>
            <div className="grid min-w-0 border border-border bg-background sm:grid-cols-2 lg:col-span-9 lg:col-start-4 lg:grid-cols-3">
              {members.map((member, index) => (
                <article key={member.name} className="group border-b border-border last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(3)]:border-b-0">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={member.image} alt={member.name} className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary">{String(index + 2).padStart(2, "0")}/</span>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{member.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Kontaktabschluss */}
        <div className="structural-grid mt-20 grid border border-border bg-brand-blue-soft md:mt-28 md:grid-cols-12">
          <div className="border-b border-border p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10"><span className="text-sm font-bold text-primary">03/</span></div>
          <div className="border-b border-border p-8 md:col-span-7 md:border-b-0 md:border-r md:p-12"><p className="eyebrow text-primary">Lernen Sie uns kennen</p><h2 className="mt-6 font-display text-3xl font-light md:text-5xl">Sprechen Sie mit <span className="font-semibold text-primary">unserem Team.</span></h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Vereinbaren Sie ein erstes Gespräch — wir melden uns persönlich bei Ihnen zurück.</p></div>
          <div className="flex items-center p-8 md:col-span-3"><Button asChild size="lg" className="h-14 w-full rounded-none px-8 shadow-none"><Link to="/kontakt">Kontakt aufnehmen <ArrowUpRight /></Link></Button></div>
        </div>
      </div>
    </section>
  </>;
}
