import { createFileRoute } from "@tanstack/react-router";
import { Heart, MapPin, Star, Trash2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { EmptyState } from "@/components/site/EmptyState";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import foodThali from "@/assets/food-thali.jpg";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [{ title: "Wishlist · Paryatan Bharati" }],
  }),
  component: WishlistPage,
});

const items = [
  { img: destKerala, t: "Kerala Backwaters", s: "Kerala · Coastal", tag: "Destination", r: 4.9 },
  { img: destLadakh, t: "Ladakh Expedition · 8D", s: "From ₹48,999", tag: "Package", r: 4.9 },
  { img: destTemple, t: "Meenakshi Temple", s: "Madurai", tag: "Temple", r: 4.8 },
  { img: foodThali, t: "Kerala Sadya trail", s: "12 eateries", tag: "Food", r: 4.7 },
];

function WishlistPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Your saved journeys"
        title="Wishlist"
        description="A private collection of destinations, packages and experiences you want to explore."
        crumbs={[{ label: "Home", to: "/" }, { label: "Wishlist" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All ({items.length})</TabsTrigger>
            <TabsTrigger value="dest">Destinations</TabsTrigger>
            <TabsTrigger value="pkg">Packages</TabsTrigger>
            <TabsTrigger value="temples">Temples</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{items.length} saved</p>
              <Button variant="outline" size="sm">Compare selected</Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((i) => (
                <article key={i.t} className="surface-card hover-lift group overflow-hidden">
                  <div className="img-zoom relative aspect-[4/3]">
                    <img src={i.img} alt="" className="h-full w-full object-cover" />
                    <button
                      aria-label="Remove"
                      className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-destructive shadow-sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <Badge variant="secondary" className="bg-royal-50 text-primary hover:bg-royal-50">{i.tag}</Badge>
                    <h3 className="text-h4 mt-2">{i.t}</h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {i.s}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-sm font-semibold">
                        <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {i.r}
                      </span>
                      <Button variant="hero" size="sm">View</Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {["dest", "pkg", "temples", "food"].map((v) => (
            <TabsContent key={v} value={v} className="mt-8">
              <EmptyState
                icon={Heart}
                title="Nothing saved here yet"
                description="Tap the heart on any card to save it for later."
                actionLabel="Explore destinations"
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </PageShell>
  );
}
