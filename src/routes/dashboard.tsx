import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  CalendarCheck2,
  GraduationCap,
  Heart,
  Landmark,
  MapPin,
  Sparkles,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { DashboardShell } from "@/components/site/DashboardShell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard · Paryatan Bharati" }, { name: "robots", content: "noindex" }] }),
  component: DashboardHome,
});

const stats = [
  { icon: CalendarCheck2, label: "Upcoming trips", value: "2", hint: "Next in 14 days", tone: "royal" },
  { icon: MapPin, label: "Completed trips", value: "9", hint: "5 states covered", tone: "emerald" },
  { icon: Heart, label: "Wishlist", value: "23", hint: "3 price drops", tone: "sunset" },
  { icon: Sparkles, label: "Reward points", value: "4,820", hint: "Silver tier", tone: "royal" },
];

const upcoming = [
  { img: destKerala, title: "Kerala Slow & Sacred", when: "12 – 16 Oct 2026", id: "KX82HQP", status: "Confirmed" },
  { img: destLadakh, title: "Ladakh Expedition", when: "04 – 12 Jun 2027", id: "LA55PQT", status: "Payment pending" },
];

const recos = [
  { img: destRaj, title: "Royal Rajasthan · 7D", price: "₹18,499", tag: "Heritage" },
  { img: destLadakh, title: "Pangong Circuit · 6D", price: "₹24,999", tag: "Adventure" },
  { img: destKerala, title: "Backwaters Escape · 5D", price: "₹12,999", tag: "Nature" },
];

function DashboardHome() {
  return (
    <DashboardShell title="Namaste, Priya 👋" subtitle="Here's what's happening across your journeys today.">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="surface-card hover-lift p-5">
            <div className="flex items-center justify-between">
              <span className={"grid h-10 w-10 place-items-center rounded-md " + toneClass(s.tone)}><s.icon className="h-5 w-5" /></span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-4 font-display text-3xl font-semibold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="mt-2 text-xs text-primary">{s.hint}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="surface-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-overline text-primary">Upcoming</p>
              <h2 className="text-h3 mt-1">Your next journeys</h2>
            </div>
            <Button asChild variant="ghost" size="sm"><Link to="/bookings">View all <ArrowUpRight className="h-4 w-4" /></Link></Button>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {upcoming.map((u) => (
              <Link key={u.id} to="/trips/$id" params={{ id: u.id }} className="surface-card hover-lift group overflow-hidden">
                <div className="img-zoom aspect-[16/10]"><img src={u.img} alt="" className="h-full w-full object-cover" /></div>
                <div className="p-4">
                  <Badge className={u.status === "Confirmed" ? "bg-emerald-500 hover:bg-emerald-500 text-primary-foreground" : "bg-amber-500 hover:bg-amber-500 text-primary-foreground"}>{u.status}</Badge>
                  <h3 className="text-h4 mt-2">{u.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{u.when} · {u.id}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <p className="text-overline text-primary">Travel wallet</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display text-3xl font-semibold">₹8,420</span>
            <span className="text-xs text-muted-foreground">available credit</span>
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium">Silver → Gold tier</p>
            <Progress value={62} className="mt-2 h-2" />
            <p className="mt-2 text-xs text-muted-foreground">₹22,180 more spend to unlock Gold perks.</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <Button asChild variant="outline" size="sm"><Link to="/rewards"><Sparkles className="h-4 w-4" /> Rewards</Link></Button>
            <Button asChild variant="outline" size="sm"><Link to="/certificates"><Award className="h-4 w-4" /> Certificates</Link></Button>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="surface-card p-6">
          <div className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary" /><h2 className="text-h4">Training progress</h2></div>
          <p className="mt-1 text-sm text-muted-foreground">You're on a 4-course learning path for Responsible Tourism.</p>
          <div className="mt-5 space-y-4">
            {[
              { t: "Sustainable Travel 101", p: 100 },
              { t: "Heritage Guide Basics", p: 68 },
              { t: "Local Etiquette & Language", p: 30 },
              { t: "Emergency Preparedness", p: 0 },
            ].map((c) => (
              <div key={c.t}>
                <div className="flex items-center justify-between text-sm"><span>{c.t}</span><span className="text-muted-foreground">{c.p}%</span></div>
                <Progress value={c.p} className="mt-1.5 h-1.5" />
              </div>
            ))}
          </div>
          <Button asChild variant="hero" size="sm" className="mt-6"><Link to="/training">Continue learning</Link></Button>
        </div>

        <div className="surface-card p-6">
          <div className="flex items-center gap-2"><Landmark className="h-5 w-5 text-primary" /><h2 className="text-h4">Government benefits</h2></div>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { t: "Dekho Apna Desh voucher", s: "₹2,000 · valid till 31 Mar" },
              { t: "PRASHAD pilgrim discount", s: "15% off Varanasi circuit" },
              { t: "NE Explorer subsidy", s: "State-approved · Assam & Meghalaya" },
            ].map((b) => (
              <li key={b.t} className="flex items-center justify-between rounded-md border border-border p-3">
                <div><p className="font-medium">{b.t}</p><p className="text-xs text-muted-foreground">{b.s}</p></div>
                <Button variant="ghost" size="sm">Claim</Button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 surface-card p-6">
        <div className="flex items-center justify-between">
          <div><p className="text-overline text-primary">Personalized</p><h2 className="text-h3 mt-1">AI recommends</h2></div>
          <Button asChild variant="ghost" size="sm"><Link to="/destinations">More ideas <ArrowUpRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {recos.map((r) => (
            <article key={r.title} className="surface-card hover-lift overflow-hidden">
              <div className="img-zoom aspect-[4/3]"><img src={r.img} alt="" className="h-full w-full object-cover" /></div>
              <div className="p-4">
                <Badge variant="secondary" className="bg-royal-50 text-primary hover:bg-royal-50">{r.tag}</Badge>
                <h3 className="text-h4 mt-2">{r.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm"><Star className="h-3.5 w-3.5 fill-accent text-accent" /> 4.9</span>
                  <span className="font-display text-base font-semibold text-primary">{r.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 surface-card p-6">
        <div className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary" /><h2 className="text-h4">Travel statistics</h2></div>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          {[
            { l: "States visited", v: "12/28" },
            { l: "Distance travelled", v: "18,420 km" },
            { l: "Heritage sites", v: "27" },
            { l: "Carbon offset", v: "1.2 t" },
          ].map((s) => (
            <div key={s.l} className="rounded-md border border-border p-4">
              <p className="text-overline text-muted-foreground">{s.l}</p>
              <p className="mt-1 font-display text-2xl font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Need help? Visit <Link to="/faq" className="text-primary hover:underline">FAQ</Link> or <Link to="/contact" className="text-primary hover:underline">contact concierge</Link>.
      </p>
      <div className="mt-2 flex items-center justify-center gap-3 text-xs text-muted-foreground">
        <Wallet className="h-3.5 w-3.5" /> Payments secured by industry-grade encryption
      </div>
    </DashboardShell>
  );
}

function toneClass(tone: string) {
  if (tone === "royal") return "bg-royal-100 text-primary";
  if (tone === "emerald") return "bg-emerald-100 text-emerald-700";
  return "bg-sunset-100 text-accent";
}
