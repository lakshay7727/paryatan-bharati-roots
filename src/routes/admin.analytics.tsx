import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/admin/StatCard";
import { IndianRupee, TrendingUp, Users, Globe2 } from "lucide-react";

export const Route = createFileRoute("/admin/analytics")({
  component: AnalyticsPage,
});

const states = [
  { name: "Rajasthan", value: 92 },
  { name: "Kerala", value: 88 },
  { name: "Goa", value: 74 },
  { name: "Uttarakhand", value: 71 },
  { name: "Himachal", value: 68 },
  { name: "Tamil Nadu", value: 62 },
  { name: "Karnataka", value: 58 },
  { name: "Ladakh", value: 55 },
  { name: "Odisha", value: 40 },
  { name: "Assam", value: 34 },
];

const demographics = [
  { label: "18–24", value: 22 },
  { label: "25–34", value: 38 },
  { label: "35–44", value: 21 },
  { label: "45–54", value: 12 },
  { label: "55+", value: 7 },
];

function AnalyticsPage() {
  return (
    <AdminShell
      title="Analytics"
      breadcrumbs={[{ label: "Analytics" }]}
      actions={<Button variant="outline" size="sm">Last 30 days</Button>}
    >
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue" value="₹1.28 Cr" delta={12.4} icon={IndianRupee} accent="primary" />
        <StatCard label="Conversion" value="6.8%" delta={0.9} icon={TrendingUp} accent="secondary" />
        <StatCard label="Unique visitors" value="284K" delta={7.1} icon={Users} accent="accent" />
        <StatCard label="Countries" value="42" delta={3.2} icon={Globe2} accent="info" />
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="surface-card p-5 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-overline text-[10px] text-muted-foreground">State-wise tourism</div>
              <div className="mt-1 font-display text-h3">Popularity heatmap</div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1"><span className="h-2 w-8 bg-royal-100" /> low</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-8 bg-royal-400" /> med</span>
              <span className="inline-flex items-center gap-1"><span className="h-2 w-8 bg-royal-800" /> high</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {states.map((s) => {
              const opacity = 0.15 + (s.value / 100) * 0.85;
              return (
                <div
                  key={s.name}
                  className="rounded-md border border-border p-3 text-white transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: `color-mix(in oklab, var(--royal-700) ${Math.round(opacity * 100)}%, white)` }}
                >
                  <div className="text-[10px] uppercase tracking-wider opacity-80">{s.name}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{s.value}%</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="surface-card p-5">
          <div className="text-overline text-[10px] text-muted-foreground">Tourist demographics</div>
          <div className="mt-1 font-display text-h3">Age distribution</div>
          <div className="mt-4 space-y-3">
            {demographics.map((d) => (
              <div key={d.label}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-muted-foreground">{d.label}</span>
                  <span className="font-semibold">{d.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-gradient-royal" style={{ width: `${d.value * 2.6}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-md border border-border p-3">
              <div className="text-muted-foreground">Repeat visitors</div>
              <div className="mt-1 font-display text-xl">31%</div>
            </div>
            <div className="rounded-md border border-border p-3">
              <div className="text-muted-foreground">Avg. trip length</div>
              <div className="mt-1 font-display text-xl">6.4 days</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="surface-card p-5">
          <div className="text-overline text-[10px] text-muted-foreground">Most viewed destinations</div>
          <ul className="mt-3 divide-y divide-border">
            {["Jaipur","Alleppey","Leh–Ladakh","Varanasi","Goa","Hampi"].map((n, i) => (
              <li key={n} className="flex items-center gap-3 py-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                <div className="flex-1 text-sm font-semibold">{n}</div>
                <div className="w-40">
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-gradient-royal" style={{ width: `${90 - i * 10}%` }} />
                  </div>
                </div>
                <div className="w-14 text-right text-xs font-semibold">{(120 - i * 12).toFixed(1)}K</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card p-5">
          <div className="text-overline text-[10px] text-muted-foreground">Popular packages</div>
          <ul className="mt-3 divide-y divide-border">
            {[
              { n: "Golden Triangle Deluxe", r: "₹68 L" },
              { n: "Kerala Backwaters — 6D", r: "₹52 L" },
              { n: "Ladakh Adventure — 8D", r: "₹41 L" },
              { n: "Rajasthan Royal — 10D", r: "₹38 L" },
              { n: "Goa Coastal Escape", r: "₹29 L" },
            ].map((p, i) => (
              <li key={p.n} className="flex items-center justify-between py-2.5">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-secondary/10 text-xs font-bold text-secondary">{i + 1}</span>
                  <span className="text-sm font-semibold">{p.n}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{p.r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AdminShell>
  );
}
