import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Camera, MapPin, Play } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { FESTIVALS } from "./festivals";
import destRaj from "@/assets/dest-rajasthan.jpg";

export const Route = createFileRoute("/festivals/$slug")({
  loader: ({ params }) => {
    const f = FESTIVALS.find((x) => x.slug === params.slug);
    if (!f) throw notFound();
    return { f };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.f.name ?? "Festival"} · Paryatan Bharati` }] }),
  notFoundComponent: () => <PageShell><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-h2">Not found</h1><Button asChild className="mt-6" variant="hero"><Link to="/festivals">Back</Link></Button></div></PageShell>,
  component: FestivalDetail,
});

function FestivalDetail() {
  const { f } = Route.useLoaderData();
  return (
    <PageShell>
      <HubHero eyebrow={f.kind} title={f.name}
        description={`${f.state} · ${f.month}. Experience local celebrations with curated stays and cultural passes.`}
        image={destRaj}
        crumbs={[{ label: "Home", to: "/" }, { label: "Festivals", to: "/festivals" }, { label: f.name }]}
        actions={<><Button variant="hero" size="lg">Explore packages</Button><Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20"><Play className="h-4 w-4" /> Watch highlights</Button></>} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-10">
          <div><h2 className="text-h3">History</h2><p className="text-body mt-3">A time-honoured celebration rooted in the region's traditions, drawing communities together in music, colour and shared meals.</p></div>
          <div><h2 className="text-h3">How it's celebrated</h2><p className="text-body mt-3">Processions, folk performances, night bazaars and temple rituals bring the {f.state} landscape alive across {f.month}.</p></div>
          <div>
            <h2 className="text-h3">Gallery & videos</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">{Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="img-zoom aspect-[4/3] overflow-hidden rounded-lg bg-sand-deep"><div className="grid h-full w-full place-items-center text-muted-foreground"><Camera className="h-5 w-5" /></div></div>
            ))}</div>
          </div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Quick info</p>
            <p className="mt-3 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" /> {f.state}</p>
            <p className="mt-1 flex items-center gap-2 text-sm"><CalendarDays className="h-4 w-4 text-primary" /> {f.month}</p>
          </div>
          <div className="surface-card p-5"><p className="text-overline text-primary">Nearby hotels</p><ul className="mt-3 space-y-2 text-sm">{["Heritage haveli · ₹8,900", "Boutique stay · ₹4,900", "Luxury tented camp · ₹18,900"].map((h) => <li key={h}>{h}</li>)}</ul></div>
        </aside>
      </section>
    </PageShell>
  );
}
