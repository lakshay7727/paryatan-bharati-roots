import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Clock, Download, MapPin, XCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";

export const Route = createFileRoute("/bookings")({
  head: () => ({ meta: [{ title: "Booking history · Paryatan Bharati" }] }),
  component: BookingsPage,
});

type Status = "confirmed" | "completed" | "cancelled";
const bookings: { img: string; t: string; where: string; date: string; id: string; amount: string; status: Status }[] = [
  { img: destLadakh, t: "Ladakh Expedition · 8D", where: "Leh · Nubra · Pangong", date: "12 Jul → 20 Jul 2026", id: "PB-24AJ92", amount: "₹48,999", status: "confirmed" },
  { img: destKerala, t: "Kerala Backwaters · 6D", where: "Kochi · Alleppey · Kovalam", date: "24 Aug → 30 Aug 2026", id: "PB-24BK14", amount: "₹32,999", status: "confirmed" },
  { img: destRaj, t: "Royal Rajasthan · 7D", where: "Jaipur · Jodhpur · Udaipur", date: "05 Feb → 12 Feb 2026", id: "PB-24RJ07", amount: "₹39,999", status: "completed" },
];

const tone: Record<Status, string> = {
  confirmed: "bg-emerald-50 text-emerald-700",
  completed: "bg-royal-50 text-primary",
  cancelled: "bg-destructive/10 text-destructive",
};

function BookingsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="My bookings"
        title="Every trip you've planned with us"
        description="Tickets, invoices and refund status — all in one place."
        crumbs={[{ label: "Home", to: "/" }, { label: "Bookings" }]}
      />
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-8">
            <ol className="relative border-l-2 border-border pl-6">
              {bookings.map((b) => (
                <li key={b.id} className="mb-8">
                  <span className="absolute -left-[9px] mt-6 grid h-4 w-4 place-items-center rounded-full bg-primary" />
                  <div className="surface-card flex flex-col overflow-hidden md:flex-row">
                    <img src={b.img} alt="" className="h-40 w-full object-cover md:h-auto md:w-56" />
                    <div className="flex-1 p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-h4">{b.t}</h3>
                          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" /> {b.where}
                          </p>
                        </div>
                        <Badge className={tone[b.status] + " capitalize"}>{b.status}</Badge>
                      </div>
                      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                        <Info icon={CalendarDays} label="Dates" value={b.date} />
                        <Info icon={Clock} label="Booking ID" value={b.id} />
                        <Info icon={CheckCircle2} label="Amount" value={b.amount} />
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Button variant="hero" size="sm"><Download className="h-4 w-4" /> Download ticket</Button>
                        <Button variant="outline" size="sm">Invoice</Button>
                        {b.status === "confirmed" && (
                          <Button variant="ghost" size="sm" className="text-destructive">
                            <XCircle className="h-4 w-4" /> Cancel booking
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </TabsContent>
          <TabsContent value="upcoming" className="mt-8 text-sm text-muted-foreground">Upcoming bookings only.</TabsContent>
          <TabsContent value="completed" className="mt-8 text-sm text-muted-foreground">Completed trips only.</TabsContent>
          <TabsContent value="cancelled" className="mt-8 text-sm text-muted-foreground">Nothing cancelled — smooth sailing.</TabsContent>
        </Tabs>
      </section>
    </PageShell>
  );
}

function Info({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="rounded-md bg-sand-deep px-3 py-2">
      <p className="text-overline text-muted-foreground"><Icon className="mr-1 inline h-3 w-3" />{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
