import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bed,
  Bus,
  Camera,
  Check,
  ChevronRight,
  ShieldCheck,
  Star,
  User,
  Utensils,
  X,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import heroTaj from "@/assets/hero-taj.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";
import destHampi from "@/assets/heritage-hampi.jpg";
import foodThali from "@/assets/food-thali.jpg";

export const Route = createFileRoute("/packages/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${humanize(params.slug)} · Package · Paryatan Bharati` },
      { name: "description", content: `Detailed itinerary, hotels, inclusions and pricing for ${humanize(params.slug)}.` },
    ],
  }),
  component: PackageDetails,
});

function humanize(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const ITINERARY = [
  { day: 1, title: "Arrival · Delhi", text: "Airport pickup, welcome dinner, hotel briefing." },
  { day: 2, title: "Delhi city", text: "Red Fort, Qutub Minar, Chandni Chowk food walk." },
  { day: 3, title: "Delhi → Agra", text: "Yamuna Expressway drive, sunset at Mehtab Bagh." },
  { day: 4, title: "Taj Mahal & Fort", text: "Sunrise at the Taj, guided fort tour." },
  { day: 5, title: "Agra → Jaipur", text: "Fatehpur Sikri en route, arrive Jaipur." },
];

function PackageDetails() {
  const { slug } = Route.useParams();
  const title = humanize(slug);
  return (
    <PageShell>
      <section className="relative isolate">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img src={heroTaj} alt={title} className="h-full w-full object-cover" />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1 text-xs text-primary-foreground/80">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/packages" className="hover:text-accent">Packages</Link>
              <ChevronRight className="h-3 w-3" />
              <span>{title}</span>
            </nav>
            <Badge className="mt-4 bg-accent text-accent-foreground hover:bg-accent">Best Seller</Badge>
            <h1 className="text-hero mt-3 text-primary-foreground">{title}</h1>
            <p className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/85">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4.8 (2,341 reviews) · 5 days · Delhi · Agra · Jaipur
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                { icon: Bed, label: "4★ hotels" },
                { icon: Bus, label: "AC transfers" },
                { icon: Utensils, label: "Daily breakfast" },
                { icon: User, label: "Certified guide" },
              ].map((f) => (
                <div key={f.label} className="surface-card flex items-center gap-3 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-700">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-h2">Day-wise itinerary</h2>
              <ol className="mt-6 space-y-4">
                {ITINERARY.map((d) => (
                  <li key={d.day} className="surface-card flex gap-4 p-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-royal font-display text-lg font-semibold text-primary-foreground">
                      {d.day}
                    </div>
                    <div>
                      <h3 className="text-h4">Day {d.day} — {d.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-6">
                <h3 className="text-h4 mb-3 flex items-center gap-2 text-emerald-700">
                  <Check className="h-4 w-4" /> Included
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Hotels", "Breakfast", "AC transport", "Sightseeing", "Guide"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface-card p-6">
                <h3 className="text-h4 mb-3 flex items-center gap-2 text-destructive">
                  <X className="h-4 w-4" /> Not included
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Flights", "Lunch & dinner", "Personal expenses", "Insurance", "Tips"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <X className="h-3.5 w-3.5 text-destructive" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-h2">Gallery</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[heroTaj, destRaj, destHampi, foodThali].map((src, i) => (
                  <div key={i} className="img-zoom aspect-square overflow-hidden rounded-lg">
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-h2">Guest reviews</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  { n: "Ananya S.", t: "Every detail was perfect. Sunrise at the Taj was magical." },
                  { n: "Rohit M.", t: "Loved the guide — deep local knowledge without rushing us." },
                ].map((r) => (
                  <div key={r.n} className="surface-card p-5">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent" />
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">"{r.t}"</p>
                    <p className="mt-3 text-xs font-medium">{r.n} · Verified traveller</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-h2">FAQs & policies</h2>
              <Accordion type="single" collapsible className="mt-4">
                {[
                  { q: "What is the cancellation policy?", a: "Full refund up to 7 days prior; 50% up to 48h." },
                  { q: "Are flights included?", a: "No — pair with our flight add-on at checkout." },
                  { q: "Can this be customised?", a: "Yes, our planners can rework hotels, days or add-ons." },
                ].map((f, i) => (
                  <AccordionItem key={i} value={`p${i}`}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="surface-card p-6">
              <p className="text-overline text-muted-foreground">Total price</p>
              <p className="mt-1 font-display text-3xl font-semibold">₹24,999</p>
              <p className="text-xs text-muted-foreground">per person on twin sharing</p>
              <Separator className="my-4" />
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/booking" search={{ pkg: slug }}>Book now</Link>
              </Button>
              <Button variant="outline" className="mt-2 w-full">Talk to a planner</Button>
              <div className="mt-4 flex items-center gap-2 rounded-md bg-emerald-50 p-3 text-xs text-emerald-800">
                <ShieldCheck className="h-4 w-4" /> Government-verified operator
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
