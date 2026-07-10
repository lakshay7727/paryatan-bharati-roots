import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Filter, Grid3x3, Heart, Map, MapPin, Search, SlidersHorizontal, Star } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { EmptyState } from "@/components/site/EmptyState";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";
import destVaranasi from "@/assets/dest-varanasi.jpg";
import destGoa from "@/assets/dest-goa.jpg";
import destHimalaya from "@/assets/dest-himalaya.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import destHampi from "@/assets/heritage-hampi.jpg";
import heroTaj from "@/assets/hero-taj.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations · Paryatan Bharati" },
      {
        name: "description",
        content:
          "Browse every state and region of India — heritage, adventure, spiritual, coastal and student-friendly destinations, curated in one place.",
      },
      { property: "og:title", content: "Destinations · Paryatan Bharati" },
      {
        property: "og:description",
        content: "Curated Indian destinations across heritage, adventure, spiritual and coastal themes.",
      },
    ],
  }),
  component: DestinationsPage,
});

const CATEGORIES = [
  "All",
  "Heritage",
  "Adventure",
  "Religious",
  "Coastal",
  "Hill",
  "Wildlife",
  "Food",
  "Weekend",
];

const REGIONS = ["North", "South", "East", "West", "Central", "North-East"];
const BUDGETS = ["Under ₹10k", "₹10k–₹25k", "₹25k–₹60k", "₹60k+"];

type Dest = {
  slug: string;
  title: string;
  state: string;
  category: string;
  region: string;
  season: string;
  duration: string;
  rating: number;
  image: string;
  blurb: string;
};

const DESTINATIONS: Dest[] = [
  { slug: "agra", title: "Agra & the Taj", state: "Uttar Pradesh", category: "Heritage", region: "North", season: "Oct – Mar", duration: "2–3 days", rating: 4.8, image: heroTaj, blurb: "Symbol of eternal love and Mughal grandeur." },
  { slug: "kerala", title: "Kerala Backwaters", state: "Kerala", category: "Coastal", region: "South", season: "Sep – Mar", duration: "5–7 days", rating: 4.9, image: destKerala, blurb: "Palm-fringed waterways and houseboat sunsets." },
  { slug: "ladakh", title: "Ladakh", state: "Ladakh", category: "Adventure", region: "North", season: "Jun – Sep", duration: "7–10 days", rating: 4.9, image: destLadakh, blurb: "High-altitude monasteries and moonscape valleys." },
  { slug: "rajasthan", title: "Royal Rajasthan", state: "Rajasthan", category: "Heritage", region: "West", season: "Oct – Mar", duration: "6–8 days", rating: 4.7, image: destRaj, blurb: "Palaces, forts and desert folk traditions." },
  { slug: "varanasi", title: "Varanasi", state: "Uttar Pradesh", category: "Religious", region: "North", season: "Oct – Mar", duration: "2–3 days", rating: 4.8, image: destVaranasi, blurb: "Ancient ghats along the sacred Ganga." },
  { slug: "goa", title: "Goa Beaches", state: "Goa", category: "Coastal", region: "West", season: "Nov – Feb", duration: "3–5 days", rating: 4.6, image: destGoa, blurb: "Sun, sand and Portuguese heritage lanes." },
  { slug: "himalayas", title: "Himachal Circuit", state: "Himachal Pradesh", category: "Hill", region: "North", season: "Mar – Jun", duration: "5–7 days", rating: 4.8, image: destHimalaya, blurb: "Pine forests, apple orchards and snow peaks." },
  { slug: "temples", title: "Southern Temples", state: "Tamil Nadu", category: "Religious", region: "South", season: "Oct – Feb", duration: "4–6 days", rating: 4.7, image: destTemple, blurb: "Dravidian architecture and living rituals." },
  { slug: "hampi", title: "Hampi Ruins", state: "Karnataka", category: "Heritage", region: "South", season: "Oct – Feb", duration: "2–3 days", rating: 4.7, image: destHampi, blurb: "Vijayanagara empire carved into boulders." },
];

function DestinationsPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "map">("grid");

  const filtered = useMemo(
    () =>
      DESTINATIONS.filter((d) => {
        const matchesQ =
          !q ||
          d.title.toLowerCase().includes(q.toLowerCase()) ||
          d.state.toLowerCase().includes(q.toLowerCase());
        const matchesCat = category === "All" || d.category === category;
        const matchesRegion = region.length === 0 || region.includes(d.region);
        return matchesQ && matchesCat && matchesRegion;
      }),
    [q, category, region],
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="Explore India"
        title="Every state. Every story."
        description="Search 700+ destinations, filter by mood, season and budget — and save the ones you love."
        image={destHimalaya}
        crumbs={[{ label: "Home", to: "/" }, { label: "Destinations" }]}
      >
        <div className="surface-card flex items-center gap-2 rounded-xl bg-background/95 p-2 backdrop-blur">
          <Search className="ml-2 h-5 w-5 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Goa, Ladakh, Varanasi…"
            className="h-11 border-0 shadow-none focus-visible:ring-0"
          />
          <Button variant="hero" size="lg" className="shrink-0">
            Search
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
                  (category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/40")
                }
              >
                {c}
              </button>
            ))}
          </div>
          <Tabs value={view} onValueChange={(v) => setView(v as "grid" | "map")}>
            <TabsList>
              <TabsTrigger value="grid" className="gap-1.5">
                <Grid3x3 className="h-4 w-4" /> Grid
              </TabsTrigger>
              <TabsTrigger value="map" className="gap-1.5">
                <Map className="h-4 w-4" /> Map
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="surface-card sticky top-24 h-fit p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-h4 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-primary" /> Filters
              </h3>
              <button className="text-xs font-medium text-primary hover:underline">Clear</button>
            </div>
            <Separator className="my-4" />
            <FilterGroup title="Region">
              {REGIONS.map((r) => (
                <label key={r} className="flex items-center gap-2 py-1.5 text-sm">
                  <Checkbox
                    checked={region.includes(r)}
                    onCheckedChange={(v) =>
                      setRegion((prev) => (v ? [...prev, r] : prev.filter((p) => p !== r)))
                    }
                  />
                  {r} India
                </label>
              ))}
            </FilterGroup>
            <Separator className="my-4" />
            <FilterGroup title="Budget">
              {BUDGETS.map((b) => (
                <label key={b} className="flex items-center gap-2 py-1.5 text-sm">
                  <Checkbox /> {b}
                </label>
              ))}
            </FilterGroup>
            <Separator className="my-4" />
            <FilterGroup title="Traveller">
              {["Family", "Student", "Solo", "Senior"].map((t) => (
                <label key={t} className="flex items-center gap-2 py-1.5 text-sm">
                  <Checkbox /> {t}
                </label>
              ))}
            </FilterGroup>
          </aside>

          <div>
            <div className="flex items-center justify-between pb-4">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filtered.length}</span> destinations
              </p>
              <div className="hidden items-center gap-2 text-sm text-muted-foreground md:flex">
                <Filter className="h-4 w-4" /> Sort · Recommended
              </div>
            </div>

            {view === "map" ? (
              <div className="surface-card grid aspect-[16/10] place-items-center bg-sand-deep text-muted-foreground">
                <div className="text-center">
                  <Map className="mx-auto mb-2 h-8 w-8" />
                  Interactive map view — coming soon
                </div>
              </div>
            ) : filtered.length === 0 ? (
              <EmptyState
                icon={Search}
                title="No destinations match"
                description="Try clearing a filter or widening your search."
                actionLabel="Reset filters"
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((d) => (
                  <DestCard key={d.slug} d={d} />
                ))}
              </div>
            )}

            <div className="mt-10 flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={
                    "min-h-10 min-w-10 rounded-md border text-sm font-medium " +
                    (n === 1
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-primary/40")
                  }
                >
                  {n}
                </button>
              ))}
              <span className="px-2 text-muted-foreground">…</span>
              <button className="min-h-10 min-w-10 rounded-md border border-border bg-card text-sm">
                42
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-overline mb-2 text-muted-foreground">{title}</p>
      <div>{children}</div>
    </div>
  );
}

function DestCard({ d }: { d: Dest }) {
  return (
    <article className="surface-card hover-lift group flex flex-col overflow-hidden">
      <div className="img-zoom relative aspect-[4/3]">
        <img src={d.image} alt={d.title} className="h-full w-full object-cover" loading="lazy" />
        <button
          aria-label="Save"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur transition-colors hover:text-accent"
        >
          <Heart className="h-4 w-4" />
        </button>
        <Badge className="absolute left-3 top-3 bg-background/90 text-foreground hover:bg-background/90">
          {d.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-h4 truncate">{d.title}</h3>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> {d.state}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {d.rating}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-md bg-sand-deep px-2.5 py-2">
            <dt className="text-muted-foreground">Best season</dt>
            <dd className="font-medium text-foreground">{d.season}</dd>
          </div>
          <div className="rounded-md bg-sand-deep px-2.5 py-2">
            <dt className="text-muted-foreground">Duration</dt>
            <dd className="font-medium text-foreground">{d.duration}</dd>
          </div>
        </dl>
        <div className="mt-5 flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="flex-1">
            <Link to="/destinations/$slug" params={{ slug: d.slug }}>
              View details
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            Compare
          </Button>
        </div>
      </div>
    </article>
  );
}
