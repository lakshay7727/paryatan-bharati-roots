import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Camera, Compass, Headphones, MapPin, Star, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { HERITAGE } from "./heritage";
import heritageHampi from "@/assets/heritage-hampi.jpg";

export const Route = createFileRoute("/heritage/$slug")({
  loader: ({ params }) => {
    const site = HERITAGE.find((h) => h.slug === params.slug);
    if (!site) throw notFound();
    return { site };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.site.name ?? "Heritage"} · Paryatan Bharati` }] }),
  notFoundComponent: () => <PageShell><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-h2">Not found</h1><Button asChild className="mt-6" variant="hero"><Link to="/heritage">Back</Link></Button></div></PageShell>,
  component: HeritageDetail,
});

function HeritageDetail() {
  const { site } = Route.useLoaderData();
  return (
    <PageShell>
      <HubHero eyebrow={site.kind} title={site.name}
        description={`${site.era} · ${site.state}${site.unesco ? " · UNESCO World Heritage Site" : ""}`}
        image={heritageHampi}
        crumbs={[{ label: "Home", to: "/" }, { label: "Heritage", to: "/heritage" }, { label: site.name }]}
        actions={<><Button variant="hero" size="lg"><Users className="h-4 w-4" /> Book guided tour</Button><Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20"><Headphones className="h-4 w-4" /> Audio guide</Button></>} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-10">
          <div>
            <h2 className="text-h3">Interactive timeline</h2>
            <ol className="mt-5 relative border-l-2 border-border pl-6">
              {[["Foundation", site.era], ["Golden era", "Following century"], ["Decline", "Later invasions"], ["Restoration", "20th century — ASI"], ["UNESCO listing", "Recognised as World Heritage"]].map(([t, d], i) => (
                <li key={t} className="mb-6 relative">
                  <span className="absolute -left-[27px] top-0 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-h3">Architecture</h2>
            <p className="text-body mt-3">Elaborate stonework, layered plans and craftsmanship representative of {site.kind.toLowerCase()} of the {site.era.split(" · ")[1] ?? "era"}. Explore mandapams, courtyards, gates and hidden passages.</p>
          </div>
          <div>
            <h2 className="text-h3">Gallery</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="img-zoom aspect-[4/3] overflow-hidden rounded-lg bg-sand-deep"><div className="grid h-full w-full place-items-center text-muted-foreground"><Camera className="h-5 w-5" /></div></div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-h3">Travel tips</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {["Best months: Oct–Mar", "Reach 30 min before sunrise", "Hire an ASI-licensed guide", "Carry water & sun hat"].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm"><Compass className="h-4 w-4 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Quick facts</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between"><span className="text-muted-foreground">Era</span><span className="font-medium">{site.era}</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">State</span><span className="font-medium">{site.state}</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Type</span><span className="font-medium">{site.kind}</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">UNESCO</span><span className="font-medium">{site.unesco ? "Yes" : "—"}</span></li>
            </ul>
          </div>
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Nearby attractions</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>· Old bazaar walk — 1 km</li>
              <li>· State museum — 2.4 km</li>
              <li>· Sunset viewpoint — 3.1 km</li>
            </ul>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
