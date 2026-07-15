import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Search, Star, Utensils } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import destFood from "@/assets/dest-food.jpg";

export const Route = createFileRoute("/restaurants")({
  head: () => ({ meta: [{ title: "Restaurant guide · Paryatan Bharati" }] }),
  component: RestaurantsPage,
});

const RESTAURANTS = [
  { name: "Bukhara", city: "New Delhi", cuisine: "North-West Frontier", price: "₹₹₹₹", rating: 4.8 },
  { name: "Karavalli", city: "Bengaluru", cuisine: "Coastal", price: "₹₹₹", rating: 4.7 },
  { name: "Peshawri", city: "Mumbai", cuisine: "Frontier", price: "₹₹₹₹", rating: 4.7 },
  { name: "Indian Accent", city: "New Delhi", cuisine: "Modern Indian", price: "₹₹₹₹", rating: 4.9 },
  { name: "Dakshin", city: "Chennai", cuisine: "South Indian", price: "₹₹₹", rating: 4.6 },
  { name: "Trishna", city: "Mumbai", cuisine: "Seafood", price: "₹₹₹", rating: 4.7 },
  { name: "Chor Bizarre", city: "Delhi", cuisine: "Kashmiri", price: "₹₹₹", rating: 4.6 },
  { name: "Amaranta", city: "Gurugram", cuisine: "Regional Indian", price: "₹₹₹₹", rating: 4.7 },
];

function RestaurantsPage() {
  return (
    <PageShell>
      <HubHero eyebrow="Restaurant guide"
        title="Where India eats"
        description="Handpicked restaurants across every city — from legendary institutions to modern icons."
        image={destFood}
        crumbs={[{ label: "Home", to: "/" }, { label: "Food", to: "/food" }, { label: "Restaurants" }]} />

      <section className="border-b border-border bg-sand-warm/40 py-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
          <div className="surface-card flex flex-1 items-center gap-2 rounded-xl p-2">
            <Search className="ml-2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search by city, dish or cuisine…" className="h-11 border-0 shadow-none focus-visible:ring-0" />
            <Button variant="hero" size="lg">Search</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {RESTAURANTS.map((r) => (
            <article key={r.name} className="surface-card hover-lift p-5">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-sunset-100 text-accent"><Utensils className="h-5 w-5" /></span>
              <h3 className="text-h4 mt-4">{r.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{r.cuisine} · {r.price}</p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {r.city}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="flex items-center gap-1 text-sm font-semibold"><Star className="h-3.5 w-3.5 fill-accent text-accent" /> {r.rating}</span>
                <Button size="sm" variant="outline">Reserve</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
