import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageIntro } from "@/components/page-sections";
import { Button } from "@/components/ui/button";

const gfAsset = { url: "/images/team-geschaeftsfuehrer_1.png" };
const plAsset = { url: "/images/team-projektleiter_1.png" };
const recAsset = { url: "/images/team-recruiter_1.png" };
const hrAsset = { url: "/images/team-HR_managerin_1.png" };
const mann2Asset = { url: "/images/team-mann_2.png" };
const frau1Asset = { url: "/images/team-frau_1.png" };
const frau2Asset = { url: "/images/team-frau_2.png" };

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Unser Team | Denaro Consulting GmbH Düsseldorf" },
    { name: "description", content: "Das Team der Denaro Consulting GmbH in Düsseldorf: Geschäftsführung, Projektleitung, Recruiting und Beratung aus einer Hand." },
    { property: "og:title", content: "Unser Team | Denaro Consulting GmbH Düsseldorf" },
    { property: "og:description", content: "Die Menschen hinter Denaro Consulting – von der Geschäftsführung bis zur Beratung." },
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
    <section className="py-14 md:py-32">
      <div className="site-container">
        {/* Geschäftsführung */}
        <div className="mb-9 grid gap-5 border-b border-border pb-8 md:mb-12 md:pb-10 lg:grid-cols-12 lg:gap-8">
          <p className="eyebrow text-primary lg:col-span-3">Geschäftsführung</p>
          <h2 className="font-display text-2xl font-light leading-tight sm:text-3xl md:text-4xl lg:col-span-6 lg:col-start-7">Verantwortung mit <span className="font-semibold text-primary">klarer Haltung.</span></h2>
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="hidden lg:col-span-2 lg:block"><span className="vertical-label text-muted-foreground">Geschäftsführung — 01</span></div>
          <div className="min-w-0 lg:col-span-9 lg:col-start-4">
            <div className="structural-grid grid border border-border bg-background md:grid-cols-12">
              <div className="flex items-center justify-center border-b border-border p-8 md:col-span-5 md:h-full md:border-b-0 md:border-r md:p-10">
                <img src={leader.image} alt={leader.name} className="size-36 rounded-full object-cover object-top ring-1 ring-border sm:size-44 md:size-48" loading="lazy" />
              </div>
              <div className="flex flex-col justify-between gap-7 p-6 sm:p-8 md:col-span-7 md:gap-10 md:p-12">
                <div>
                  <span className="text-sm font-bold text-primary">01/</span>
                  <p className="eyebrow mt-6 text-primary md:mt-8">{leader.role}</p>
                  <h3 className="mt-4 font-display text-2xl font-light leading-tight sm:text-3xl md:text-5xl">{leader.name}</h3>
                  <p className="mt-5 max-w-lg leading-7 text-muted-foreground md:mt-6">
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
        <div className="mt-14 md:mt-28">
          <div className="mb-9 grid gap-5 border-b border-border pb-8 md:mb-12 md:pb-10 lg:grid-cols-12 lg:gap-8">
            <p className="eyebrow text-primary lg:col-span-3">Team</p>
            <h2 className="font-display text-2xl font-light leading-tight sm:text-3xl md:text-4xl lg:col-span-6 lg:col-start-7">Persönlich erreichbar. <span className="font-semibold text-primary">Klar im Austausch.</span></h2>
          </div>
          <div className="grid lg:grid-cols-12">
            <div className="hidden lg:col-span-2 lg:block"><span className="vertical-label text-muted-foreground">Team — 02</span></div>
            <div className="grid min-w-0 border border-border bg-background sm:grid-cols-2 lg:col-span-9 lg:col-start-4 lg:grid-cols-3">
              {members.map((member, index) => (
                <article key={member.name} className="group border-b border-border last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(3)]:border-b-0">
                  <div className="flex justify-center p-6">
                    <img src={member.image} alt={member.name} className="size-28 rounded-full object-cover object-top ring-1 ring-border transition-all duration-300 group-hover:ring-2 group-hover:ring-primary" loading="lazy" />
                  </div>
                  <div className="p-6 pt-0 text-center">
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
        <div className="structural-grid mt-14 grid border border-border bg-brand-blue-soft md:mt-28 md:grid-cols-12">
          <div className="hidden border-b border-border p-8 md:col-span-2 md:block md:border-b-0 md:border-r md:p-10"><span className="text-sm font-bold text-primary">03/</span></div>
          <div className="border-b border-border p-6 sm:p-8 md:col-span-7 md:border-b-0 md:border-r md:p-12"><p className="eyebrow text-primary">Lernen Sie uns kennen</p><h2 className="mt-5 font-display text-2xl font-light sm:text-3xl md:mt-6 md:text-5xl">Sprechen Sie mit <span className="font-semibold text-primary">unserem Team.</span></h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Vereinbaren Sie ein erstes Gespräch — wir melden uns persönlich bei Ihnen zurück.</p></div>
          <div className="flex items-center p-6 sm:p-8 md:col-span-3"><Button asChild size="lg" className="h-14 w-full rounded-none px-8 shadow-none"><Link to="/kontakt">Kontakt aufnehmen <ArrowUpRight /></Link></Button></div>
        </div>
      </div>
    </section>
  </>;
}
