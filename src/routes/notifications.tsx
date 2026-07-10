import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Bell, CheckCheck, CreditCard, Flag, Info, Sparkles, Tag } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications · Paryatan Bharati" }] }),
  component: NotificationsPage,
});

type N = { icon: any; tone: string; title: string; body: string; time: string; unread?: boolean };
const items: N[] = [
  { icon: AlertTriangle, tone: "bg-warning/15 text-warning-foreground", title: "Weather alert · Ladakh", body: "Heavy snowfall expected 14–16 July. Roads to Nubra may be affected.", time: "2h", unread: true },
  { icon: CheckCheck, tone: "bg-emerald-50 text-emerald-700", title: "Booking confirmed", body: "Your Kerala Backwaters 6D booking is confirmed. Ticket sent to email.", time: "1d", unread: true },
  { icon: Flag, tone: "bg-royal-50 text-primary", title: "Government scheme update", body: "Dekho Apna Desh phase-2 destinations now available.", time: "2d" },
  { icon: Tag, tone: "bg-sunset-100 text-sunset-700", title: "Festive offer", body: "15% off on all heritage packages until 30 August.", time: "3d" },
  { icon: Sparkles, tone: "bg-royal-50 text-primary", title: "AI recommendation", body: "Based on Ladakh, you might love Spiti Valley in September.", time: "5d" },
  { icon: CreditCard, tone: "bg-emerald-50 text-emerald-700", title: "Refund processed", body: "₹4,999 refunded to your card ending 4421.", time: "1w" },
];

function NotificationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Notifications"
        title="Everything worth knowing, in one feed"
        description="Travel alerts, booking updates, government announcements and offers."
        crumbs={[{ label: "Home", to: "/" }, { label: "Notifications" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="surface-card divide-y divide-border">
                {items.map((n, i) => (
                  <NotifRow key={i} n={n} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="unread" className="mt-6">
              <div className="surface-card divide-y divide-border">
                {items.filter((n) => n.unread).map((n, i) => <NotifRow key={i} n={n} />)}
              </div>
            </TabsContent>
            <TabsContent value="alerts" className="mt-6 text-sm text-muted-foreground">Alerts only.</TabsContent>
            <TabsContent value="offers" className="mt-6 text-sm text-muted-foreground">Offers only.</TabsContent>
          </Tabs>
        </div>
      </section>
    </PageShell>
  );
}

function NotifRow({ n }: { n: N }) {
  const Icon = n.icon;
  return (
    <div className="flex items-start gap-4 p-5">
      <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-md " + n.tone}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-h4 truncate">{n.title}</h3>
          {n.unread && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-label="Unread" />}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{n.body}</p>
      </div>
      <span className="shrink-0 text-xs text-muted-foreground">{n.time}</span>
    </div>
  );
}
