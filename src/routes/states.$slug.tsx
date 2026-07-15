import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Church, Landmark, Languages, MapPin, Mountain, Plane, Sparkles, TreePine, Utensils } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { INDIAN_STATES } from "@/components/site/IndiaStatesGrid";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/states/$slug")({
  loader: ({ params }) => {
    const state = INDIAN_STATES.find((s) => s.slug === params.slug);
    if (!state) throw notFound();
    return { state };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.state.name ?? "State"} · Paryatan Bharati` }] }),
  notFoundComponent: () => <PageShell><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-h2">State not found</h1><Button asChild className="mt-6" variant="hero"><Link to="/states">Back</Link></Button></div></PageShell>,
  component: StateDetail,
});

function StateDetail() {
  const { state } = Route.useLoaderData();
  return (
    <PageShell>
      <HubHero eyebrow={`${state.region} India`} title={state.name}
        description={`${state.tag}. Discover attractions, culture, festivals, temples, wildlife, food and curated packages.`}
        image={destHimalaya}
        crumbs={[{ label: "Home", to: "/" }, { label: "States", to: "/states" }, { label: state.name }]}
        actions={<><Button variant="hero" size="lg">View packages</Button><Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20"><Plane className="h-4 w-4" /> Plan trip</Button></>} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: MapPin, t: "Attractions", d: "Top destinations" },
            { i: Sparkles, t: "Culture", d: "Art, dance & craft" },
            { i: Languages, t: "Language", d: "Primary tongues" },
            { i: CalendarDays, t: "Festivals", d: "Year-round" },
            { i: Utensils, t: "Food", d: "Signature dishes" },
            { i: Church, t: "Temples", d: "Sacred sites" },
            { i: TreePine, t: "Wildlife", d: "Sanctuaries" },
            { i: Mountain, t: "Adventure", d: "Trek & sport" },
          ].map((c) => (
            <div key={c.t} className="surface-card p-5">
              <c.i className="h-6 w-6 text-primary" />
              <h3 className="text-h4 mt-3">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="surface-card p-6">
            <h2 className="text-h3">Best time to visit</h2>
            <p className="text-body mt-2">October to March for pleasant weather. Monsoon (Jun–Sep) is perfect for greenery lovers in the western ghats and hills.</p>
            <h2 className="text-h3 mt-8">Connectivity</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">{["Airports", "Rail heads", "Highways"].map((c) => <li key={c} className="rounded-md bg-sand-deep px-3 py-2 text-sm">{c}</li>)}</ul>
          </div>
          <div className="surface-card p-6">
            <p className="text-overline text-primary">Featured packages</p>
            <ul className="mt-3 space-y-3 text-sm">
              {["3N/4D Highlights · ₹18,900", "5N/6D Cultural circuit · ₹32,900", "7N/8D Grand tour · ₹48,900"].map((p) => (
                <li key={p} className="flex items-center justify-between"><span>{p}</span><Button size="sm" variant="ghost">View</Button></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
