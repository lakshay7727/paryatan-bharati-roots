import { createFileRoute } from "@tanstack/react-router";
import { Bus, Car, Plane, Ship, Train, TramFront, Route as RouteIcon } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { HubCard } from "@/components/site/HubCard";
import { Button } from "@/components/ui/button";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/connectivity")({
  head: () => ({ meta: [{ title: "Travel connectivity · Paryatan Bharati" }] }),
  component: ConnectivityPage,
});

function ConnectivityPage() {
  return (
    <PageShell>
      <HubHero eyebrow="Travel connectivity"
        title="Reach anywhere in Bharat"
        description="Compare flights, trains, metros, buses, cabs, ferries and road trips — one search, all modes."
        image={destHimalaya}
        crumbs={[{ label: "Home", to: "/" }, { label: "Connectivity" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Plane, t: "Flights", d: "Domestic & international.", tone: "royal" as const },
            { i: Train, t: "Railways", d: "IRCTC + Vande Bharat.", tone: "emerald" as const },
            { i: TramFront, t: "Metro", d: "City rapid transit.", tone: "royal" as const },
            { i: Bus, t: "Bus", d: "Volvo & sleeper services.", tone: "sunset" as const },
            { i: Car, t: "Cab", d: "Verified taxi partners.", tone: "royal" as const },
            { i: Ship, t: "Water transport", d: "Ferries, cruises, houseboats.", tone: "emerald" as const },
            { i: RouteIcon, t: "Road trips", d: "Curated highway routes.", tone: "sunset" as const },
          ].map((c) => <HubCard key={c.t} to="/connectivity" icon={c.i} tone={c.tone} title={c.t} description={c.d} />)}
        </div>

        <div className="mt-10 surface-card p-6">
          <h2 className="text-h3">Route information</h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-sand-deep"><tr>{["Route", "Mode", "Distance", "Time", "From"].map((h) => <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ["Delhi → Agra", "Vande Bharat", "233 km", "1h 40m", "₹800"],
                  ["Mumbai → Goa", "Flight", "590 km", "1h 20m", "₹3,400"],
                  ["Manali → Leh", "Road trip", "428 km", "12h", "₹18,000"],
                  ["Kochi → Alleppey", "Cab + Houseboat", "62 km", "2h", "₹4,900"],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-border">{r.map((c, i) => <td key={i} className="px-4 py-3">{c}</td>)}<td className="px-4 py-3"><Button size="sm" variant="outline">Book</Button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
