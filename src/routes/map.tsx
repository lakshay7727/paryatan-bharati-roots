import { createFileRoute } from "@tanstack/react-router";
import { Building2, Castle, Church, MapPin, Route as RouteIcon, Trophy, Users, Utensils } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/map")({
  head: () => ({ meta: [{ title: "Interactive map · Paryatan Bharati" }] }),
  component: MapPage,
});

const LAYERS = [
  { i: MapPin, l: "Destinations", tone: "text-primary bg-royal-100" },
  { i: Building2, l: "Hotels", tone: "text-secondary bg-emerald-100" },
  { i: Church, l: "Temples", tone: "text-accent bg-sunset-100" },
  { i: Utensils, l: "Food", tone: "text-accent bg-sunset-100" },
  { i: Trophy, l: "Sports", tone: "text-primary bg-royal-100" },
  { i: Castle, l: "Heritage", tone: "text-primary bg-royal-100" },
  { i: Users, l: "Govt. offices", tone: "text-secondary bg-emerald-100" },
];

function MapPage() {
  return (
    <PageShell>
      <HubHero eyebrow="Interactive map"
        title="Explore India, layer by layer."
        description="Toggle destinations, hotels, temples, food, sports and heritage — plan routes and discover what's nearby."
        image={destHimalaya}
        crumbs={[{ label: "Home", to: "/" }, { label: "Map" }]} />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="surface-card h-fit p-5">
          <p className="text-overline text-primary">Layers</p>
          <div className="mt-3 space-y-2">
            {LAYERS.map((l) => (
              <label key={l.l} className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-sand-deep">
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-[hsl(var(--primary))]" />
                <span className={"grid h-8 w-8 place-items-center rounded-md " + l.tone}><l.i className="h-4 w-4" /></span>
                {l.l}
              </label>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-overline text-primary">Route planner</p>
            <input placeholder="From" className="mt-2 h-10 w-full rounded-md border border-border bg-background px-3 text-sm" />
            <input placeholder="To" className="mt-2 h-10 w-full rounded-md border border-border bg-background px-3 text-sm" />
            <Button variant="hero" className="mt-3 w-full"><RouteIcon className="h-4 w-4" /> Plan route</Button>
          </div>
        </aside>

        <div className="surface-card grid aspect-[16/10] place-items-center bg-sand-deep text-muted-foreground">
          <div className="text-center">
            <MapPin className="mx-auto mb-2 h-10 w-10 text-primary" />
            <p className="font-semibold text-foreground">Interactive India map</p>
            <p className="mt-1 text-sm">Clustered markers · Route planner · Nearby recommendations</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
