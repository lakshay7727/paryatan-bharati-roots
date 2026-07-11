import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BellRing,
  CalendarDays,
  CheckCircle2,
  CloudSun,
  Download,
  FileText,
  Headphones,
  MapPin,
  MessageSquare,
  Phone,
  QrCode,
  ShieldAlert,
  Ticket,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import destKerala from "@/assets/dest-kerala.jpg";

export const Route = createFileRoute("/trips/$id")({
  head: () => ({ meta: [{ title: "Trip details · Paryatan Bharati" }] }),
  component: TripDetails,
});

function TripDetails() {
  const { id } = Route.useParams();
  return (
    <PageShell>
      <PageHero
        eyebrow="My trip"
        title="Kerala Slow & Sacred · 5 days"
        description="12 Oct → 16 Oct 2026 · 2 travellers · Booking confirmed"
        image={destKerala}
        crumbs={[{ label: "Home", to: "/" }, { label: "Bookings", to: "/bookings" }, { label: id }]}
      >
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge className="bg-emerald-500 text-primary-foreground hover:bg-emerald-500">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Confirmed · {id}
          </Badge>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <Tabs defaultValue="itinerary">
              <TabsList className="flex flex-wrap">
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="tickets">Tickets</TabsTrigger>
                <TabsTrigger value="checklist">Checklist</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              <TabsContent value="itinerary" className="mt-8 space-y-4">
                {["Day 1 · Kochi", "Day 2 · Munnar", "Day 3 · Alleppey", "Day 4 · Guruvayur", "Day 5 · Kovalam"].map((d) => (
                  <div key={d} className="surface-card p-5">
                    <p className="text-overline text-primary">{d}</p>
                    <h3 className="text-h4 mt-1">Detailed schedule & directions</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Pickup times, driver contact, hotel address and offline map link — all attached.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm">
                      <Button variant="outline" size="sm"><MapPin className="h-4 w-4" /> Open map</Button>
                      <Button variant="ghost" size="sm"><CloudSun className="h-4 w-4" /> Weather</Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="tickets" className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Flight DEL→COK", "Flight TRV→DEL", "Houseboat · Xandari", "Hotel · Windermere"].map((t) => (
                  <div key={t} className="surface-card p-5">
                    <Ticket className="h-5 w-5 text-primary" />
                    <h3 className="text-h4 mt-2">{t}</h3>
                    <div className="mt-4 grid grid-cols-[auto_1fr] items-center gap-3">
                      <div className="grid h-16 w-16 place-items-center rounded-md bg-sand-deep">
                        <QrCode className="h-8 w-8" />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <p>PNR · KX82HQP</p>
                        <p>Show at counter</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4"><Download className="h-4 w-4" /> Download</Button>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="checklist" className="mt-8 surface-card p-6">
                {["Photo ID (Aadhaar / Passport)", "Cash for local markets", "Rain jacket & umbrella", "Comfortable walking shoes", "Power bank", "Prescription medicines", "Modest clothing for temple day"].map((i, k) => (
                  <label key={i} className="flex items-center gap-3 border-b border-border py-3 last:border-0">
                    <Checkbox defaultChecked={k < 2} /> <span className="text-sm">{i}</span>
                  </label>
                ))}
              </TabsContent>

              <TabsContent value="support" className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="surface-card p-6">
                  <Headphones className="h-5 w-5 text-primary" />
                  <h3 className="text-h4 mt-2">24×7 concierge</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Multilingual help, on chat or call.</p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="hero" size="sm"><MessageSquare className="h-4 w-4" /> Chat</Button>
                    <Button variant="outline" size="sm"><Phone className="h-4 w-4" /> Call</Button>
                  </div>
                </div>
                <div className="surface-card p-6">
                  <ShieldAlert className="h-5 w-5 text-destructive" />
                  <h3 className="text-h4 mt-2">Emergency contacts</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Local police 100 · Ambulance 108 · Tourist helpline 1363</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className="surface-card p-6">
              <h3 className="text-h4 flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> Countdown</h3>
              <p className="mt-2 font-display text-3xl font-semibold">14 days to go</p>
              <Button variant="outline" className="mt-4 w-full"><BellRing className="h-4 w-4" /> Reminders on</Button>
            </div>
            <div className="surface-card p-6">
              <h3 className="text-h4 flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> Documents</h3>
              <Separator className="my-3" />
              {["e-Ticket bundle", "Tax invoice", "Insurance policy"].map((f) => (
                <div key={f} className="flex items-center justify-between py-2 text-sm">
                  <span>{f}</span>
                  <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                </div>
              ))}
            </div>
            <div className="surface-card p-6">
              <h3 className="text-h4">Change of plans?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Modify dates, guests or cancel with clear refund estimates.</p>
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild variant="outline"><Link to="/bookings">Modify booking</Link></Button>
                <Button asChild variant="ghost" className="text-destructive"><Link to="/cancel/$id" params={{ id }}>Cancel trip</Link></Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
