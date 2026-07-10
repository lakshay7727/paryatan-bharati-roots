import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Heart, MapPin, Star, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";
import destGoa from "@/assets/dest-goa.jpg";
import destHimalaya from "@/assets/dest-himalaya.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import destHampi from "@/assets/heritage-hampi.jpg";
import heroTaj from "@/assets/hero-taj.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages · Paryatan Bharati" },
      {
        name: "description",
        content:
          "Handpicked tour packages across India — family, adventure, luxury, student and pilgrimage journeys with transparent pricing.",
      },
      { property: "og:title", content: "Tour Packages · Paryatan Bharati" },
    ],
  }),
  component: PackagesPage,
});

const PACKAGES = [
  { slug: "golden-triangle", title: "Golden Triangle Classic", cities: "Delhi · Agra · Jaipur", days: 5, price: 24999, mrp: 32000, type: "Heritage", rating: 4.8, image: heroTaj },
  { slug: "kerala-backwaters", title: "Kerala Backwaters & Beaches", cities: "Kochi · Alleppey · Kovalam", days: 6, price: 32999, mrp: 42000, type: "Family", rating: 4.9, image: destKerala },
  { slug: "ladakh-expedition", title: "Ladakh High-Altitude Expedition", cities: "Leh · Nubra · Pangong", days: 8, price: 48999, mrp: 58000, type: "Adventure", rating: 4.9, image: destLadakh },
  { slug: "royal-rajasthan", title: "Royal Rajasthan Circuit", cities: "Jaipur · Jodhpur · Udaipur", days: 7, price: 39999, mrp: 51000, type: "Luxury", rating: 4.8, image: destRaj },
  { slug: "goa-getaway", title: "Goa Weekend Getaway", cities: "North & South Goa", days: 4, price: 15999, mrp: 21000, type: "Family", rating: 4.6, image: destGoa },
  { slug: "himachal-hills", title: "Himachal Snow & Pine", cities: "Shimla · Manali · Kasol", days: 6, price: 27999, mrp: 34000, type: "Adventure", rating: 4.7, image: destHimalaya },
  { slug: "temple-trail", title: "South India Temple Trail", cities: "Madurai · Rameshwaram · Kanyakumari", days: 5, price: 22999, mrp: 28000, type: "Religious", rating: 4.7, image: destTemple },
  { slug: "hampi-heritage", title: "Hampi Heritage Weekend", cities: "Hampi · Badami", days: 3, price: 12999, mrp: 16000, type: "Student", rating: 4.6, image: destHampi },
];



function PackagesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tour Packages"
        title="Curated journeys across India"
        description="Fully-planned itineraries with vetted hotels, certified guides and 24×7 support. Transparent pricing. Cancel free up to 48 hours."
        image={destRaj}
        crumbs={[{ label: "Home", to: "/" }, { label: "Packages" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="surface-card sticky top-24 h-fit p-6">
            <h3 className="text-h4">Filters</h3>
            <Separator className="my-4" />
            <FilterGroup title="Travel type" options={["Family", "Adventure", "Luxury", "Student", "Religious"]} />
            <Separator className="my-4" />
            <FilterGroup title="Duration" options={["1–3 days", "4–7 days", "8–14 days", "15+ days"]} />
            <Separator className="my-4" />
            <FilterGroup title="Budget" options={["Under ₹15k", "₹15k–₹30k", "₹30k–₹60k", "₹60k+"]} />
            <Separator className="my-4" />
            <FilterGroup title="Includes" options={["Flights", "Hotels", "Meals", "Guide", "Transfers"]} />
          </aside>

          <div>
            <div className="flex items-center justify-between pb-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{PACKAGES.length}</span> packages · Sorted by relevance
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {PACKAGES.map((p) => (
                <PackageCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FilterGroup({ title, options }: { title: string; options: string[] }) {
  return (
    <div>
      <p className="text-overline mb-2 text-muted-foreground">{title}</p>
      {options.map((o) => (
        <label key={o} className="flex items-center gap-2 py-1.5 text-sm">
          <Checkbox /> {o}
        </label>
      ))}
    </div>
  );
}

type Pkg = (typeof PACKAGES)[number];

function PackageCard({ p }: { p: Pkg }) {
  const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
  return (
    <article className="surface-card hover-lift group overflow-hidden">
      <div className="img-zoom relative aspect-[4/3]">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
        <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground hover:bg-accent">
          {off}% off
        </Badge>
        <button
          aria-label="Save"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 shadow-sm hover:text-accent"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" className="bg-royal-50 text-primary hover:bg-royal-50">
            {p.type}
          </Badge>
          <span className="flex items-center gap-1 text-sm font-semibold">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {p.rating}
          </span>
        </div>
        <h3 className="text-h4 mt-3">{p.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" /> {p.cities}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {p.days} days</span>
          <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> 2+ pax</span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="font-display text-2xl font-semibold">₹{p.price.toLocaleString("en-IN")}</p>
            <p className="text-xs text-muted-foreground">
              <span className="line-through">₹{p.mrp.toLocaleString("en-IN")}</span> · per person
            </p>
          </div>
          <Button asChild variant="hero" size="sm">
            <Link to="/packages/$slug" params={{ slug: p.slug }}>Book now</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
