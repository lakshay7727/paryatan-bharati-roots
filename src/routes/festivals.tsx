import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Drum, MapPin, Music, Palette, Sparkles, Utensils } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import destRaj from "@/assets/dest-rajasthan.jpg";

export const Route = createFileRoute("/festivals")({
  head: () => ({ meta: [{ title: "Festivals of India · Paryatan Bharati" }] }),
  component: FestivalsPage,
});

export const FESTIVALS = [
  { slug: "diwali-varanasi", name: "Dev Deepawali", state: "Uttar Pradesh", month: "November", kind: "Religious", icon: Sparkles },
  { slug: "pushkar-mela", name: "Pushkar Camel Fair", state: "Rajasthan", month: "November", kind: "Cultural", icon: Drum },
  { slug: "hornbill", name: "Hornbill Festival", state: "Nagaland", month: "December", kind: "Cultural", icon: Music },
  { slug: "rann-utsav", name: "Rann Utsav", state: "Gujarat", month: "Nov – Feb", kind: "Cultural", icon: Palette },
  { slug: "holi-mathura", name: "Holi in Mathura", state: "Uttar Pradesh", month: "March", kind: "Religious", icon: Sparkles },
  { slug: "onam", name: "Onam", state: "Kerala", month: "August", kind: "Cultural", icon: Utensils },
  { slug: "durga-puja", name: "Durga Puja", state: "West Bengal", month: "October", kind: "Religious", icon: Drum },
  { slug: "sunburn", name: "Sunburn Music Festival", state: "Goa", month: "December", kind: "Music", icon: Music },
];

function FestivalsPage() {
  return (
    <PageShell>
      <HubHero eyebrow="Festivals of India"
        title="365 days. Endless celebrations."
        description="Religious, cultural, music, dance, food and craft festivals across every state, with travel packages."
        image={destRaj}
        crumbs={[{ label: "Home", to: "/" }, { label: "Festivals" }]} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FESTIVALS.map((f) => (
            <Link key={f.slug} to="/festivals/$slug" params={{ slug: f.slug }} className="surface-card hover-lift group p-5">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-sunset-100 text-accent"><f.icon className="h-5 w-5" /></span>
              <span className="text-overline mt-4 block text-primary">{f.kind}</span>
              <h3 className="text-h4 mt-1">{f.name}</h3>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {f.state}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"><CalendarDays className="h-3 w-3" /> {f.month}</p>
              <Button size="sm" variant="outline" className="mt-4 w-full">View festival</Button>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
