import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bed,
  CalendarDays,
  Camera,
  CloudSun,
  Compass,
  Download,
  Edit3,
  Heart,
  Landmark,
  MapPin,
  Plane,
  Plus,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  TrainFront,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import destKerala from "@/assets/dest-kerala.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import foodThali from "@/assets/food-thali.jpg";
import foodChaat from "@/assets/food-chaat.jpg";

export const Route = createFileRoute("/ai-planner/itinerary")({
  head: () => ({ meta: [{ title: "Your itinerary · AI Planner · Paryatan Bharati" }] }),
  component: Itinerary,
});

const DAYS = [
  { d: "Day 1", city: "Kochi", title: "Colonial cafés & Kathakali", stops: ["Fort Kochi walk", "Chinese fishing nets", "Kathakali show"], img: destKerala },
  { d: "Day 2", city: "Munnar", title: "Tea gardens sunrise", stops: ["Kolukkumalai sunrise", "Tea museum", "Eravikulam park"], img: destKerala },
  { d: "Day 3", city: "Alleppey", title: "Houseboat & backwaters", stops: ["Cruise check-in", "Coir village", "Sunset deck dinner"], img: destKerala },
  { d: "Day 4", city: "Guruvayur", title: "Temple day", stops: ["Morning darshan", "Elephant sanctuary", "Sadhya lunch"], img: destTemple },
  { d: "Day 5", city: "Kovalam", title: "Beach & Ayurveda", stops: ["Lighthouse beach", "Ayurvedic spa", "Sunset seafood"], img: destKerala },
];

const HOTELS = [
  { n: "Brunton Boatyard", area: "Fort Kochi", price: 6800, stars: 4, rating: 4.7, amenities: ["Pool", "Sea view", "Breakfast"] },
  { n: "Windermere Estate", area: "Munnar", price: 8200, stars: 4, rating: 4.8, amenities: ["Tea trails", "Yoga", "Breakfast"] },
  { n: "Xandari Riverscapes", area: "Alleppey", price: 12500, stars: 5, rating: 4.9, amenities: ["Houseboat", "All meals", "Guide"] },
];

const FOOD = [
  { img: foodThali, n: "Sadhya lunch · Guruvayur" },
  { img: foodChaat, n: "Ela Ada street snack · Kochi" },
];

function Itinerary() {
  return (
    <PageShell>
      {/* Cover */}
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground">
        <img src={destKerala} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Badge className="bg-emerald-500 text-primary-foreground hover:bg-emerald-500">
            <Sparkles className="mr-1 h-3 w-3" /> AI generated
          </Badge>
          <h1 className="text-hero mt-4 max-w-3xl">Kerala Slow & Sacred · 5 days</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            Kochi → Munnar → Alleppey → Guruvayur → Kovalam · For 2 adults · Mid-range budget · Vegetarian
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button variant="hero"><Edit3 className="h-4 w-4" /> Edit trip</Button>
            <Button variant="outline" className="border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
            <Button variant="outline" className="border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
              <Share2 className="h-4 w-4" /> Share
            </Button>
            <Button variant="outline" className="border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
              <Heart className="h-4 w-4" /> Save
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <Tabs defaultValue="itinerary">
              <TabsList className="flex flex-wrap">
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="hotels">Hotels</TabsTrigger>
                <TabsTrigger value="transport">Transport</TabsTrigger>
                <TabsTrigger value="food">Food</TabsTrigger>
                <TabsTrigger value="addons">Add-ons</TabsTrigger>
              </TabsList>

              {/* Itinerary */}
              <TabsContent value="itinerary" className="mt-8">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-h2">Day-by-day</h2>
                  <Button variant="ghost" size="sm"><Plus className="h-4 w-4" /> Add day</Button>
                </div>
                <ol className="relative space-y-6 border-l-2 border-border pl-6">
                  {DAYS.map((day) => (
                    <li key={day.d} className="relative">
                      <span className="absolute -left-[33px] top-4 grid h-6 w-6 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {day.d.replace("Day ", "")}
                      </span>
                      <article className="surface-card overflow-hidden md:flex">
                        <img src={day.img} alt="" className="h-40 w-full object-cover md:h-auto md:w-48" />
                        <div className="flex-1 p-5">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <p className="text-overline text-primary">{day.d} · {day.city}</p>
                              <h3 className="text-h3 mt-1">{day.title}</h3>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <CloudSun className="h-4 w-4 text-accent" /> 28° · Light breeze
                            </div>
                          </div>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                            {day.stops.map((s) => (
                              <li key={s} className="flex items-center gap-2 rounded-md bg-sand-deep px-3 py-2 text-sm">
                                <Compass className="h-3.5 w-3.5 text-primary" /> {s}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Button variant="ghost" size="sm"><Edit3 className="h-4 w-4" /> Edit</Button>
                            <Button variant="ghost" size="sm"><Plus className="h-4 w-4" /> Add activity</Button>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ol>
              </TabsContent>

              {/* Hotels */}
              <TabsContent value="hotels" className="mt-8 space-y-4">
                {HOTELS.map((h) => (
                  <article key={h.n} className="surface-card hover-lift flex flex-col overflow-hidden md:flex-row">
                    <img src={destKerala} alt="" className="h-48 w-full object-cover md:h-auto md:w-64" />
                    <div className="flex-1 p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-1 text-xs text-accent">
                            {Array.from({ length: h.stars }).map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-accent" />
                            ))}
                          </div>
                          <h3 className="text-h4 mt-1">{h.n}</h3>
                          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" /> {h.area}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-2xl font-semibold">₹{h.price.toLocaleString("en-IN")}</p>
                          <p className="text-xs text-muted-foreground">per night</p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {h.amenities.map((a) => (
                          <Badge key={a} variant="secondary" className="bg-royal-50 text-primary hover:bg-royal-50">{a}</Badge>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1 text-emerald-700">
                          <ShieldCheck className="h-4 w-4" /> Verified · Free cancellation
                        </span>
                        <Button variant="hero" size="sm">Select</Button>
                      </div>
                    </div>
                  </article>
                ))}
              </TabsContent>

              {/* Transport */}
              <TabsContent value="transport" className="mt-8">
                <div className="surface-card overflow-hidden">
                  <TransportRow icon={Plane} name="IndiGo 6E-542" from="DEL 06:15" to="COK 09:40" dur="3h 25m" price="₹6,499" />
                  <TransportRow icon={TrainFront} name="Vanchinad Express" from="ERS 11:20" to="TCR 14:05" dur="2h 45m" price="₹420" />
                  <TransportRow icon={Compass} name="Private cab · Innova" from="Kochi" to="Alleppey" dur="1h 40m" price="₹2,200" />
                  <TransportRow icon={Plane} name="IndiGo 6E-231" from="TRV 19:10" to="DEL 22:35" dur="3h 25m" price="₹7,199" last />
                </div>
              </TabsContent>

              {/* Food */}
              <TabsContent value="food" className="mt-8 grid gap-6 sm:grid-cols-2">
                {FOOD.map((f) => (
                  <article key={f.n} className="surface-card hover-lift overflow-hidden">
                    <img src={f.img} alt={f.n} className="aspect-[4/3] w-full object-cover" />
                    <div className="p-5">
                      <UtensilsCrossed className="h-5 w-5 text-accent" />
                      <h3 className="text-h4 mt-2">{f.n}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">AI recommended based on your vegetarian preference.</p>
                    </div>
                  </article>
                ))}
              </TabsContent>

              {/* Add-ons */}
              <TabsContent value="addons" className="mt-8 space-y-3">
                {[
                  { i: ShieldCheck, t: "Travel insurance", d: "Medical + trip cancellation", p: 799 },
                  { i: Compass, t: "Certified local guide", d: "Malayalam · English · Hindi", p: 2999 },
                  { i: Camera, t: "Photography package", d: "Half-day pro shoot", p: 4999 },
                  { i: Landmark, t: "Temple priority darshan", d: "Guruvayur skip-the-queue", p: 1499 },
                ].map((a) => (
                  <label key={a.t} className="surface-card flex cursor-pointer items-center justify-between p-4">
                    <span className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-royal-50 text-primary">
                        <a.i className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-medium">{a.t}</span>
                        <span className="block text-xs text-muted-foreground">{a.d}</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="font-semibold">+ ₹{a.p.toLocaleString("en-IN")}</span>
                      <Button variant="outline" size="sm"><Plus className="h-4 w-4" /> Add</Button>
                    </span>
                  </label>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="surface-card p-6">
              <h3 className="text-h4 flex items-center gap-2">
                <Wallet className="h-4 w-4 text-accent" /> Live budget
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">Updates as you edit</p>
              <Separator className="my-4" />
              <SummaryRow k="Flights" v="₹13,698" />
              <SummaryRow k="Hotels · 4 nights" v="₹38,000" />
              <SummaryRow k="Transport" v="₹4,620" />
              <SummaryRow k="Activities" v="₹6,200" />
              <SummaryRow k="Food estimate" v="₹5,400" />
              <SummaryRow k="Government subsidy" v="− ₹2,000" tone="pos" />
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total for 2</span>
                <span className="font-display text-2xl font-semibold">₹65,918</span>
              </div>
              <Button asChild variant="hero" className="mt-6 w-full">
                <Link to="/booking">Book this trip</Link>
              </Button>
              <p className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <ShieldCheck className="h-3 w-3 text-emerald-700" /> Free cancellation up to 48h
              </p>
            </div>

            <div className="surface-card mt-4 p-6">
              <h3 className="text-h4 flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" /> Trip window
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">12 Oct → 16 Oct 2026 · Weather: 26–30° C, occasional showers.</p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function TransportRow({
  icon: Icon,
  name,
  from,
  to,
  dur,
  price,
  last,
}: {
  icon: React.ElementType;
  name: string;
  from: string;
  to: string;
  dur: string;
  price: string;
  last?: boolean;
}) {
  return (
    <div className={"grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5 " + (!last ? "border-b border-border" : "")}>
      <span className="grid h-10 w-10 place-items-center rounded-md bg-royal-50 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-medium">{name}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {from} → {to} · {dur}
        </p>
      </div>
      <div className="text-right">
        <p className="font-display text-lg font-semibold">{price}</p>
        <Button variant="ghost" size="sm">Change</Button>
      </div>
    </div>
  );
}

function SummaryRow({ k, v, tone }: { k: string; v: string; tone?: "pos" }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-muted-foreground">{k}</span>
      <span className={"font-medium " + (tone === "pos" ? "text-emerald-700" : "")}>{v}</span>
    </div>
  );
}
