import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Camera, CheckCircle2, Clock, MapPin, ShieldCheck, Ticket } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { TEMPLES } from "./temples";
import destTemple from "@/assets/dest-temple.jpg";

export const Route = createFileRoute("/temples/$slug")({
  loader: ({ params }) => {
    const temple = TEMPLES.find((t) => t.slug === params.slug);
    if (!temple) throw notFound();
    return { temple };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.temple.name ?? "Temple"} · Paryatan Bharati` }] }),
  notFoundComponent: () => <PageShell><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-h2">Temple not found</h1><Button asChild className="mt-6" variant="hero"><Link to="/temples">Back</Link></Button></div></PageShell>,
  component: TempleDetail,
});

function TempleDetail() {
  const { temple } = Route.useLoaderData();
  return (
    <PageShell>
      <HubHero eyebrow={temple.circuit} title={temple.name}
        description={`${temple.deity} · ${temple.state}. Timings ${temple.timings}. Darshan booking, dress code, nearby stays.`}
        image={destTemple}
        crumbs={[{ label: "Home", to: "/" }, { label: "Temples", to: "/temples" }, { label: temple.name }]}
        actions={<><Button variant="hero" size="lg"><Ticket className="h-4 w-4" /> Book darshan</Button><Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20">Add to itinerary</Button></>} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-10">
          <Section title="History & significance">
            <p>{temple.name} is one of India's most revered shrines, dedicated to {temple.deity}. Its origins trace back centuries and it is central to the {temple.circuit} tradition, attracting millions of pilgrims annually.</p>
          </Section>
          <Section title="Architecture">
            <p>Classic {temple.circuit === "Sikh Gurudwara" ? "Sikh" : temple.circuit === "Buddhist" ? "Buddhist stupa" : "Indian temple"} architecture with intricately carved gopurams, sanctum sanctorum and richly decorated mandapams.</p>
          </Section>
          <Section title="Festivals & special days">
            <div className="grid gap-3 sm:grid-cols-2">{["Maha Shivratri", "Kartik Purnima", "Annual Rath Yatra", "Navaratri"].map((f) => (
              <div key={f} className="rounded-md bg-sand-deep px-4 py-3 text-sm">{f}</div>
            ))}</div>
          </Section>
          <Section title="Rules & etiquette">
            <ul className="grid gap-2 sm:grid-cols-2">
              {["Traditional attire recommended", "Photography restricted inside sanctum", "No leather items in premises", "Mobile phones in silent mode"].map((r) => (
                <li key={r} className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm"><CheckCircle2 className="h-4 w-4 text-secondary" /> {r}</li>
              ))}
            </ul>
          </Section>
          <Section title="Gallery">
            <div className="grid gap-3 sm:grid-cols-3">{Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="img-zoom aspect-[4/3] overflow-hidden rounded-lg bg-sand-deep"><div className="grid h-full w-full place-items-center text-muted-foreground"><Camera className="h-5 w-5" /></div></div>
            ))}</div>
          </Section>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface-card p-5">
            <p className="text-overline text-primary">At a glance</p>
            <p className="mt-3 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" /> {temple.state}</p>
            <p className="mt-1 flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-primary" /> {temple.timings}</p>
            <p className="mt-1 flex items-center gap-2 text-sm"><ShieldCheck className="h-4 w-4 text-secondary" /> Verified darshan partner</p>
            <div className="mt-4 aspect-square rounded-md bg-sand-deep grid place-items-center text-xs text-muted-foreground">Location map</div>
          </div>
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Nearby</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>· Sacred ghats — 400 m</li>
              <li>· Heritage bazaar — 700 m</li>
              <li>· Ashram stays — 1.2 km</li>
              <li>· Restaurants (sattvic) — 300 m</li>
            </ul>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-h3 mb-4">{title}</h2><div className="text-body">{children}</div></section>;
}
