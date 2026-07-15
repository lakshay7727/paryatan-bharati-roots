import { createFileRoute, Link } from "@tanstack/react-router";
import { Castle, Landmark, MapPin, Star } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { HubCard } from "@/components/site/HubCard";
import { Button } from "@/components/ui/button";
import heritageHampi from "@/assets/heritage-hampi.jpg";

export const Route = createFileRoute("/heritage")({
  head: () => ({ meta: [{ title: "Culture & Heritage · Paryatan Bharati" }] }),
  component: HeritagePage,
});

export const HERITAGE = [
  { slug: "taj-mahal", name: "Taj Mahal", state: "Uttar Pradesh", era: "1653 CE · Mughal", unesco: true, kind: "Monument" },
  { slug: "hampi", name: "Hampi", state: "Karnataka", era: "14th c. · Vijayanagara", unesco: true, kind: "Ruins" },
  { slug: "ajanta", name: "Ajanta Caves", state: "Maharashtra", era: "2nd c. BCE", unesco: true, kind: "Cave art" },
  { slug: "konark", name: "Konark Sun Temple", state: "Odisha", era: "1250 CE", unesco: true, kind: "Temple" },
  { slug: "qutub-minar", name: "Qutub Minar", state: "Delhi", era: "1193 CE", unesco: true, kind: "Monument" },
  { slug: "khajuraho", name: "Khajuraho", state: "Madhya Pradesh", era: "950 CE", unesco: true, kind: "Temple complex" },
  { slug: "mysore-palace", name: "Mysore Palace", state: "Karnataka", era: "1912 CE", unesco: false, kind: "Palace" },
  { slug: "amber-fort", name: "Amber Fort", state: "Rajasthan", era: "1592 CE", unesco: true, kind: "Fort" },
];

function HeritagePage() {
  return (
    <PageShell>
      <HubHero eyebrow="Culture & Heritage"
        title="India's living museum"
        description="UNESCO sites, monuments, forts, palaces and historic cities — with guided tours and audio-guides."
        image={heritageHampi}
        crumbs={[{ label: "Home", to: "/" }, { label: "Heritage" }]} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-overline text-primary">Categories</p>
        <h2 className="text-h2 mt-2">Discover by type</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "UNESCO sites", desc: "42 inscribed sites across India.", icon: Star, tone: "sunset" as const },
            { title: "Forts & palaces", desc: "From Amber to Mehrangarh.", icon: Castle, tone: "royal" as const },
            { title: "Monuments", desc: "Iconic wonders of every era.", icon: Landmark, tone: "emerald" as const },
            { title: "Historical cities", desc: "Varanasi, Madurai, Jaipur & more.", icon: MapPin, tone: "royal" as const },
          ].map((c) => <HubCard key={c.title} to="/heritage" icon={c.icon} tone={c.tone} title={c.title} description={c.desc} />)}
        </div>
      </section>

      <section className="border-y border-border bg-sand-warm/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-overline text-primary">Featured</p>
          <h2 className="text-h2 mt-2">Icons of Indian heritage</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERITAGE.map((h) => (
              <Link key={h.slug} to="/heritage/$slug" params={{ slug: h.slug }} className="surface-card hover-lift group flex flex-col p-5">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-royal-100 text-primary"><Castle className="h-5 w-5" /></span>
                <h3 className="text-h4 mt-4">{h.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{h.era}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {h.state}</p>
                {h.unesco && <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700"><Star className="h-3 w-3" /> UNESCO</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
