import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Plane,
  CalendarCheck,
  IndianRupee,
  MapPin,
  Star,
  Landmark,
  GraduationCap,
  BookOpen,
  Package,
  ArrowUpRight,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatCard } from "@/components/admin/StatCard";
import { StatusBadge } from "@/components/admin/EntityManager";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const revenueSeries = [42, 58, 51, 66, 71, 63, 79, 85, 74, 92, 88, 104];
const bookingsSeries = [180, 210, 195, 240, 260, 235, 300, 320, 285, 360, 350, 410];

function AdminDashboard() {
  return (
    <AdminShell
      title="Welcome back, Aarav"
      breadcrumbs={[{ label: "Dashboard" }]}
      actions={
        <>
          <Button variant="outline" size="sm">Export report</Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/admin/packages"><Sparkles className="mr-1 h-4 w-4" /> Launch package</Link>
          </Button>
        </>
      }
    >
      {/* Stat cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Revenue" value="₹1.28 Cr" delta={12.4} icon={IndianRupee} accent="primary" />
        <StatCard label="Active Tourists" value="18,432" delta={8.7} icon={Plane} accent="secondary" />
        <StatCard label="Bookings (30d)" value="3,204" delta={-2.1} icon={CalendarCheck} accent="accent" />
        <StatCard label="New Users" value="1,876" delta={14.9} icon={Users} accent="info" />
      </section>

      <section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Popular Destinations" value="42" delta={4.3} icon={MapPin} accent="primary" />
        <StatCard label="Pending Reviews" value="87" delta={5.8} icon={Star} accent="accent" />
        <StatCard label="Scheme Applications" value="612" delta={22.1} icon={Landmark} accent="secondary" />
        <StatCard label="Student Registrations" value="1,204" delta={9.6} icon={GraduationCap} accent="info" />
      </section>

      {/* Revenue + bookings */}
      <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="surface-card p-5 xl:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-overline text-[10px] text-muted-foreground">Revenue overview</div>
              <div className="mt-1 font-display text-h3 text-foreground">₹1.28 Cr <span className="text-sm font-medium text-secondary">+12.4%</span></div>
              <div className="text-xs text-muted-foreground">Compared to last 12 months</div>
            </div>
            <div className="flex items-center gap-1 rounded-md border border-border p-0.5 text-xs">
              {["1M", "3M", "6M", "1Y", "All"].map((r) => (
                <button key={r} className={`rounded-sm px-2.5 py-1 ${r === "1Y" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{r}</button>
              ))}
            </div>
          </div>
          <AreaChart data={revenueSeries} />
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <MiniStat label="Packages" value="₹68 L" hint="+18%" />
            <MiniStat label="Hotels" value="₹31 L" hint="+9%" />
            <MiniStat label="Transport" value="₹19 L" hint="+4%" />
            <MiniStat label="Experiences" value="₹10 L" hint="+22%" />
          </div>
        </div>

        <div className="surface-card flex flex-col p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-overline text-[10px] text-muted-foreground">Booking trends</div>
              <div className="mt-1 font-display text-h3 text-foreground">3,204</div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
          </div>
          <BarChart data={bookingsSeries} />
          <div className="mt-4 space-y-3">
            {[
              { label: "Domestic", value: 74 },
              { label: "International", value: 21 },
              { label: "Corporate", value: 12 },
            ].map((r) => (
              <div key={r.label}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-semibold text-foreground">{r.value}%</span>
                </div>
                <Progress value={r.value} className="h-1.5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column lower */}
      <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="surface-card p-5 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div className="text-h4 font-display">Recent bookings</div>
            <Button asChild variant="ghost" size="sm"><Link to="/admin/bookings">View all <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></Link></Button>
          </div>
          <div className="mt-4 divide-y divide-border">
            {recentBookings.map((b) => (
              <div key={b.id} className="flex items-center gap-3 py-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-gradient-royal text-[11px] font-semibold text-primary-foreground">{b.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-foreground">{b.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{b.package} · {b.date}</div>
                </div>
                <div className="hidden text-right sm:block">
                  <div className="text-sm font-semibold text-foreground">{b.amount}</div>
                  <div className="text-[11px] text-muted-foreground">{b.travellers} guests</div>
                </div>
                <StatusBadge status={b.status} />
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-5">
          <div className="flex items-center justify-between">
            <div className="text-h4 font-display">Top destinations</div>
            <Button asChild variant="ghost" size="sm"><Link to="/admin/destinations">Manage</Link></Button>
          </div>
          <ul className="mt-4 space-y-4">
            {topDestinations.map((d, i) => (
              <li key={d.name} className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold">{d.name}</div>
                  <div className="text-[11px] text-muted-foreground">{d.state}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">{d.bookings}</div>
                  <div className="text-[11px] text-secondary">+{d.growth}%</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programs strip */}
      <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ProgramCard icon={Landmark} title="Government Schemes" value="24" caption="Live schemes" cta="Manage" to="/admin/schemes" />
        <ProgramCard icon={GraduationCap} title="Student Tourism" value="38" caption="Active programs" cta="Manage" to="/admin/students" />
        <ProgramCard icon={BookOpen} title="Training Center" value="126" caption="Enrolled learners" cta="Open CMS" to="/admin/training" />
        <ProgramCard icon={Package} title="Packages Live" value="182" caption="Across 28 states" cta="Manage" to="/admin/packages" />
      </section>
    </AdminShell>
  );
}

function AreaChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((v - min) / (max - min)) * 80 - 10;
    return `${x},${y}`;
  });
  const line = points.join(" ");
  const area = `0,100 ${line} 100,100`;
  return (
    <div className="mt-4">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-40 w-full">
        <defs>
          <linearGradient id="revFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--royal-500)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--royal-500)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon fill="url(#revFill)" points={area} />
        <polyline fill="none" stroke="var(--royal-600)" strokeWidth="1.2" points={line} vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
        {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => <span key={m}>{m}</span>)}
      </div>
    </div>
  );
}

function BarChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="mt-4 flex h-32 items-end gap-1.5">
      {data.map((v, i) => (
        <div key={i} className="flex-1 rounded-t-sm bg-gradient-royal transition-all hover:opacity-90" style={{ height: `${(v / max) * 100}%` }} />
      ))}
    </div>
  );
}

function MiniStat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-md border border-border bg-muted/40 p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-semibold text-foreground">{value}</div>
      <div className="text-[11px] text-secondary">{hint}</div>
    </div>
  );
}

function ProgramCard({ icon: Icon, title, value, caption, cta, to }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; caption: string; cta: string; to: string }) {
  return (
    <div className="surface-card hover-lift p-5">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-accent/10 text-accent"><Icon className="h-5 w-5" /></span>
      <div className="mt-3 text-overline text-[10px] text-muted-foreground">{title}</div>
      <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
      <div className="text-xs text-muted-foreground">{caption}</div>
      <Button asChild variant="link" size="sm" className="mt-2 h-auto px-0 text-primary"><Link to={to}>{cta} →</Link></Button>
    </div>
  );
}

const recentBookings = [
  { id: 1, initials: "PR", name: "Priya Ranganathan", package: "Golden Triangle Deluxe", date: "12 Jul", amount: "₹64,800", travellers: 4, status: "Confirmed" },
  { id: 2, initials: "AK", name: "Arjun Kapoor", package: "Kerala Backwaters — 6D", date: "12 Jul", amount: "₹42,200", travellers: 2, status: "Paid" },
  { id: 3, initials: "SD", name: "Sana Desai", package: "Ladakh Adventure — 8D", date: "11 Jul", amount: "₹92,500", travellers: 3, status: "Pending" },
  { id: 4, initials: "RM", name: "Rohan Mehta", package: "Varanasi Spiritual Trail", date: "11 Jul", amount: "₹28,900", travellers: 2, status: "Confirmed" },
  { id: 5, initials: "IK", name: "Ishaan Khanna", package: "Rajasthan Royal — 10D", date: "10 Jul", amount: "₹1,18,000", travellers: 5, status: "Refunded" },
];

const topDestinations = [
  { name: "Jaipur", state: "Rajasthan", bookings: 842, growth: 22 },
  { name: "Alleppey", state: "Kerala", bookings: 738, growth: 14 },
  { name: "Leh–Ladakh", state: "Ladakh", bookings: 612, growth: 31 },
  { name: "Varanasi", state: "Uttar Pradesh", bookings: 588, growth: 9 },
  { name: "Hampi", state: "Karnataka", bookings: 421, growth: 18 },
];
