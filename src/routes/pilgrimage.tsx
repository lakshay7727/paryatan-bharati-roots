import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, CloudSun, IndianRupee, MapPin, Plus, Route as RouteIcon } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { TEMPLES } from "./temples";
import destTemple from "@/assets/dest-temple.jpg";

export const Route = createFileRoute("/pilgrimage")({
  head: () => ({ meta: [{ title: "Pilgrimage planner · Paryatan Bharati" }] }),
  component: PilgrimagePage,
});

function PilgrimagePage() {
  return (
    <PageShell>
      <HubHero eyebrow="Pilgrimage planner"
        title="Plan a sacred journey"
        description="Pick your temples, we build the route, weather forecast, budget and stays. Save it to your dashboard."
        image={destTemple}
        crumbs={[{ label: "Home", to: "/" }, { label: "Temples", to: "/temples" }, { label: "Planner" }]} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <div>
          <h2 className="text-h3">1. Select temples</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {TEMPLES.slice(0, 6).map((t) => (
              <label key={t.slug} className="surface-card flex cursor-pointer items-start gap-3 p-4">
                <input type="checkbox" defaultChecked={["kashi-vishwanath", "kedarnath", "jagannath-puri"].includes(t.slug)} className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.state} · {t.circuit}</p>
                </div>
              </label>
            ))}
          </div>

          <h2 className="text-h3 mt-10">2. Route preview</h2>
          <div className="surface-card mt-4 aspect-[16/9] grid place-items-center bg-sand-deep text-muted-foreground">
            <div className="text-center"><RouteIcon className="mx-auto mb-2 h-8 w-8" />Interactive route · 3 stops · 1,240 km</div>
          </div>
          <ol className="mt-6 grid gap-3 md:grid-cols-3">
            {["Varanasi · 2 nights", "Kedarnath · 2 nights", "Puri · 3 nights"].map((s, i) => (
              <li key={s} className="surface-card p-4"><p className="text-overline text-primary">Stop {i + 1}</p><p className="mt-1 font-semibold">{s}</p></li>
            ))}
          </ol>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Budget estimate</p>
            <p className="mt-1 font-display text-3xl font-semibold text-primary"><IndianRupee className="mr-0.5 inline h-6 w-6" />48,900</p>
            <p className="text-xs text-muted-foreground">Per person · twin sharing</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between"><span>Stays (7 nights)</span><span>₹22,400</span></li>
              <li className="flex justify-between"><span>Transport</span><span>₹18,500</span></li>
              <li className="flex justify-between"><span>Meals & extras</span><span>₹8,000</span></li>
            </ul>
          </div>
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Weather outlook</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              {["Varanasi 28°", "Kedar 12°", "Puri 30°"].map((w) => (
                <div key={w} className="rounded-md bg-sand-deep p-2"><CloudSun className="mx-auto h-4 w-4 text-primary" /><p className="mt-1">{w}</p></div>
              ))}
            </div>
          </div>
          <Button variant="hero" size="lg" className="w-full"><CheckCircle2 className="h-4 w-4" /> Save & continue booking</Button>
        </aside>
      </section>
    </PageShell>
  );
}
