import { createFileRoute } from "@tanstack/react-router";
import { Crown, Gift, Medal, Sparkles, Star, Trophy, Zap } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/rewards")({
  head: () => ({ meta: [{ title: "Rewards · Paryatan Bharati" }] }),
  component: Rewards,
});

const rewards = [
  { icon: Gift, t: "₹500 travel voucher", p: 2000, cat: "Voucher" },
  { icon: Zap, t: "Free airport pickup", p: 3500, cat: "Service" },
  { icon: Medal, t: "Priority check-in", p: 5000, cat: "Perk" },
  { icon: Crown, t: "Free heritage guide", p: 7500, cat: "Experience" },
  { icon: Sparkles, t: "Luxury tent upgrade", p: 12000, cat: "Upgrade" },
  { icon: Trophy, t: "2N houseboat stay", p: 20000, cat: "Stay" },
];

const badges = [
  { t: "First Booking", u: true }, { t: "Heritage Hunter", u: true },
  { t: "Foodie", u: true }, { t: "Trekker", u: false },
  { t: "Cultural Scholar", u: false }, { t: "Sustainable Star", u: true },
];

function Rewards() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Yatra Rewards"
        title="Every journey earns you more."
        description="Points on every booking, review and completed course. Redeem for upgrades, vouchers and exclusive experiences."
        crumbs={[{ label: "Home", to: "/" }, { label: "Rewards" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="surface-card overflow-hidden">
          <div className="grid gap-6 bg-gradient-royal p-8 text-primary-foreground md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-overline text-sunset-200">Silver tier</p>
              <h2 className="text-hero mt-1">4,820 <span className="font-display text-lg font-normal">points</span></h2>
              <p className="mt-2 text-primary-foreground/80">Earn 3,180 more to reach <span className="font-semibold text-accent">Gold</span> and unlock lounge access + free cancellations.</p>
              <Progress value={62} className="mt-4 h-2 bg-white/20" />
              <div className="mt-6 flex flex-wrap gap-2">
                <Button variant="hero">Redeem points</Button>
                <Button variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">How points work</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 self-center">
              {[{ l: "Bronze", n: "0" }, { l: "Silver", n: "2,500" }, { l: "Gold", n: "8,000" }].map((t, i) => (
                <div key={t.l} className={"rounded-md border p-3 text-center " + (i === 1 ? "border-accent bg-white/15" : "border-white/20")}>
                  <Medal className={"mx-auto h-5 w-5 " + (i === 1 ? "text-accent" : "text-primary-foreground/70")} />
                  <p className="mt-1 text-xs">{t.l}</p>
                  <p className="text-xs text-primary-foreground/70">{t.n} pts</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-h3 mt-10">Redeem rewards</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rewards.map((r) => (
            <div key={r.t} className="surface-card hover-lift p-5">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-sunset-100 text-accent"><r.icon className="h-5 w-5" /></span>
                <Badge variant="secondary" className="bg-royal-50 text-primary hover:bg-royal-50">{r.cat}</Badge>
              </div>
              <h3 className="text-h4 mt-3">{r.t}</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-primary">{r.p.toLocaleString("en-IN")} pts</span>
                <Button size="sm" variant={r.p <= 4820 ? "hero" : "outline"} disabled={r.p > 4820}>{r.p <= 4820 ? "Redeem" : "Locked"}</Button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-h3 mt-10">Achievements & badges</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((b) => (
            <div key={b.t} className="surface-card p-5 text-center">
              <Star className={"mx-auto h-8 w-8 " + (b.u ? "fill-accent text-accent" : "text-muted-foreground")} />
              <p className="mt-2 text-sm font-medium">{b.t}</p>
              <p className="mt-1 text-xs text-muted-foreground">{b.u ? "Unlocked" : "Locked"}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
