import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, MapPin, Radio, Ticket, Trophy } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { SPORT_EVENTS } from "./sports";
import destLadakh from "@/assets/dest-ladakh.jpg";

export const Route = createFileRoute("/sports/$slug")({
  loader: ({ params }) => {
    const event = SPORT_EVENTS.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.event.title ?? "Event"} · Paryatan Bharati` }] }),
  notFoundComponent: () => <PageShell><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-h2">Event not found</h1><Button asChild className="mt-6" variant="hero"><Link to="/sports">Back</Link></Button></div></PageShell>,
  component: SportDetail,
});

function SportDetail() {
  const { event } = Route.useLoaderData();
  return (
    <PageShell>
      <HubHero eyebrow={event.sport} title={event.title} description={`${event.city} · ${event.date}. Tickets, hotels and city guide in one flow.`}
        image={destLadakh}
        crumbs={[{ label: "Home", to: "/" }, { label: "Sports", to: "/sports" }, { label: event.title }]}
        actions={<><Button variant="hero" size="lg"><Ticket className="h-4 w-4" /> Buy tickets</Button><Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20">Save event</Button></>} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-10">
          <div>
            <h2 className="text-h3">Event overview</h2>
            <p className="text-body mt-3">India's flagship {event.sport.toLowerCase()} showcase, drawing athletes and travellers from every state. Live broadcast, city fan zones and a curated travel package with airport transfers.</p>
          </div>
          <div>
            <h2 className="text-h3">Schedule</h2>
            <ol className="mt-4 space-y-3">
              {["Opening ceremony", "Group stage", "Knockouts", "Finals & closing"].map((s, i) => (
                <li key={s} className="surface-card flex items-center justify-between p-4"><span className="font-medium">{s}</span><span className="text-sm text-muted-foreground">Day {i + 1}</span></li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-h3">Nearby hotels</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">{["₹4,900 · 3★", "₹8,900 · 4★", "₹14,900 · 5★"].map((h) => (
              <div key={h} className="surface-card p-4"><p className="text-overline text-primary">Verified partner</p><p className="mt-1 font-semibold">{h}</p><p className="mt-1 text-xs text-muted-foreground">Free cancellation · Airport pickup</p><Button size="sm" variant="outline" className="mt-3 w-full">View</Button></div>
            ))}</div>
          </div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface-card p-5">
            <p className="text-overline text-muted-foreground">Venue</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium"><MapPin className="h-4 w-4 text-primary" /> {event.city}</p>
            <p className="mt-3 flex items-center gap-2 text-sm"><CalendarDays className="h-4 w-4 text-primary" /> {event.date}</p>
            <p className="mt-1 flex items-center gap-2 text-sm"><Trophy className="h-4 w-4 text-accent" /> {event.sport}</p>
            <div className="mt-4 aspect-video rounded-md bg-sand-deep grid place-items-center text-muted-foreground text-xs">Interactive venue map</div>
          </div>
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Live updates</p>
            <p className="mt-2 flex items-center gap-2 text-sm"><Radio className="h-4 w-4 text-accent" /> Match commentary & scores</p>
            <Button variant="hero" className="mt-4 w-full">Follow event</Button>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
