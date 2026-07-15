import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Mountain, Snowflake, Trophy, Waves } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { HubCard } from "@/components/site/HubCard";
import { Button } from "@/components/ui/button";
import destLadakh from "@/assets/dest-ladakh.jpg";

export const Route = createFileRoute("/sports")({
  head: () => ({ meta: [{ title: "Sports Tourism · Paryatan Bharati" }] }),
  component: SportsPage,
});

export const SPORT_EVENTS = [
  { slug: "khelo-india-chennai", title: "Khelo India Youth Games", city: "Chennai · Tamil Nadu", date: "12–20 Aug 2026", sport: "Multi-sport", tone: "royal" as const },
  { slug: "ladakh-ice-hockey", title: "Ladakh Ice Hockey Championship", city: "Leh · Ladakh", date: "05–10 Jan 2027", sport: "Ice hockey", tone: "royal" as const },
  { slug: "kerala-snake-boat", title: "Nehru Trophy Snake Boat Race", city: "Alleppey · Kerala", date: "10 Aug 2026", sport: "Rowing", tone: "emerald" as const },
  { slug: "rann-marathon", title: "Rann Utsav Marathon", city: "Kutch · Gujarat", date: "18 Dec 2026", sport: "Marathon", tone: "sunset" as const },
  { slug: "himalayan-mtb", title: "Himalayan MTB Rally", city: "Manali → Leh", date: "01–14 Sep 2026", sport: "Cycling", tone: "royal" as const },
  { slug: "goa-surf-open", title: "Goa Surf Open", city: "Arambol · Goa", date: "22–28 Nov 2026", sport: "Surfing", tone: "emerald" as const },
  { slug: "bengaluru-marathon", title: "TCS World 10K", city: "Bengaluru · Karnataka", date: "27 Apr 2026", sport: "Running", tone: "sunset" as const },
  { slug: "kolkata-ipl", title: "IPL Eden Gardens Weekend", city: "Kolkata · West Bengal", date: "04 May 2026", sport: "Cricket", tone: "royal" as const },
];

function SportsPage() {
  return (
    <PageShell>
      <HubHero eyebrow="Play the country"
        title="Sports tourism, coast to summit."
        description="From Ladakh ice hockey to Kerala boat races — book tickets, stays and transport for every major event."
        image={destLadakh}
        crumbs={[{ label: "Home", to: "/" }, { label: "Sports Tourism" }]}
        actions={<><Button asChild variant="hero" size="lg"><Link to="/map">Sports map</Link></Button><Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20">Adventure calendar</Button></>} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-overline text-primary">Categories</p>
        <h2 className="text-h2 mt-2">Choose your terrain</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Mountain, title: "Mountain sports", desc: "Trek, climb, MTB, ski.", tone: "royal" as const },
            { icon: Waves, title: "Water sports", desc: "Surf, kayak, rafting, sailing.", tone: "emerald" as const },
            { icon: Snowflake, title: "Winter sports", desc: "Ice hockey, skiing, snowboard.", tone: "royal" as const },
            { icon: Trophy, title: "Traditional sports", desc: "Kabaddi, kalaripayattu, mallakhamb.", tone: "sunset" as const },
          ].map((c) => <HubCard key={c.title} to="/sports" icon={c.icon} tone={c.tone} title={c.title} description={c.desc} />)}
        </div>
      </section>

      <section className="border-y border-border bg-sand-warm/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-overline text-primary">Live calendar</p>
          <h2 className="text-h2 mt-2">Upcoming events</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SPORT_EVENTS.map((e) => (
              <Link key={e.slug} to="/sports/$slug" params={{ slug: e.slug }} className="surface-card hover-lift group p-5">
                <span className="text-overline text-primary">{e.sport}</span>
                <h3 className="text-h4 mt-1">{e.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {e.city}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"><CalendarDays className="h-3 w-3" /> {e.date}</p>
                <Button variant="outline" size="sm" className="mt-4 w-full">View & book</Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
