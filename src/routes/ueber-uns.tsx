import { createFileRoute } from "@tanstack/react-router";

import teamImage from "@/assets/denaro-consulting-team.jpg";
import { ContactBand } from "@/components/site-shell";
import { PageIntro } from "@/components/page-sections";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({ meta: [
    { title: "Über uns | Denaro Consulting GmbH" },
    { name: "description", content: "Lernen Sie Denaro Consulting und unsere interdisziplinäre Arbeitsweise kennen." },
    { property: "og:title", content: "Über Denaro Consulting" },
    { property: "og:description", content: "Persönlich, interdisziplinär und konsequent lösungsorientiert." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: UeberUnsPage,
});

function UeberUnsPage() {
  return <>
    <PageIntro eyebrow="Über uns" title="Verantwortung beginnt mit genauem Zuhören." text="Denaro Consulting steht für persönliche Beratung, klare Kommunikation und den Anspruch, aus komplexen Anforderungen handlungsfähige Lösungen zu machen." />
    <section className="py-20 md:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <img src={teamImage} alt="Interdisziplinäre Projektbesprechung" width={1408} height={1008} className="aspect-[4/3] w-full object-cover" />
        <div><p className="eyebrow text-primary">Denaro Consulting GmbH</p><h2 className="mt-4 font-display text-4xl font-extrabold">Beratung mit Blick auf das Ganze.</h2><p className="mt-6 leading-8 text-muted-foreground">Unternehmerische Fragen lassen sich selten isoliert betrachten. Prozesse beeinflussen Systeme, Systeme prägen Entscheidungen und Projekte brauchen eine klare Struktur. Genau hier setzen wir an: mit einem interdisziplinären Blick und einer Zusammenarbeit auf Augenhöhe.</p><p className="mt-5 leading-8 text-muted-foreground">Unser Sitz in Düsseldorf verbindet uns mit einem dynamischen Wirtschafts- und Architekturstandort. Von hier aus begleiten wir Unternehmen und Projekte mit Verlässlichkeit und klarer Verantwortung.</p></div>
      </div>
    </section>
    <section className="bg-secondary py-20 md:py-24"><div className="site-container grid gap-10 md:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-primary">Geschäftsführung</p><h2 className="mt-4 font-display text-3xl font-extrabold">Alexander Valentino Denaro</h2></div><blockquote className="border-l-4 border-brand-gold pl-7 font-display text-2xl font-semibold leading-relaxed text-foreground">„Gute Beratung schafft Orientierung und macht aus einer komplexen Aufgabe einen klaren nächsten Schritt.“</blockquote></div></section>
    <ContactBand />
  </>;
}
