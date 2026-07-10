import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Search, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";
import destVaranasi from "@/assets/dest-varanasi.jpg";
import foodChaat from "@/assets/food-chaat.jpg";
import heroTaj from "@/assets/hero-taj.jpg";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Travel Journal · Paryatan Bharati" },
      { name: "description", content: "Slow travel stories, guides, itineraries and culture writing from across India." },
    ],
  }),
  component: BlogsPage,
});

const featured = { img: heroTaj, t: "Sunrise at the Taj: a photographer's field notes", cat: "Heritage", read: 8, slug: "sunrise-taj" };
const trending = [
  { img: destLadakh, t: "10 slow-travel routes in Ladakh", cat: "Adventure", read: 6, slug: "slow-ladakh" },
  { img: destKerala, t: "Sadya on a banana leaf: a guide", cat: "Food", read: 5, slug: "sadya-guide" },
  { img: destVaranasi, t: "Dawn on the ghats of Varanasi", cat: "Culture", read: 7, slug: "dawn-varanasi" },
];
const grid = [
  { img: destRaj, t: "How to plan a 7-day Rajasthan loop", cat: "Itinerary", read: 9, slug: "raj-loop" },
  { img: foodChaat, t: "A chaat lover's crawl in Old Delhi", cat: "Food", read: 4, slug: "chaat-delhi" },
  { img: destKerala, t: "Monsoon in Munnar: what to expect", cat: "Season", read: 6, slug: "munnar-monsoon" },
  { img: destLadakh, t: "Acclimatising responsibly in Leh", cat: "Health", read: 5, slug: "acclimatise-leh" },
  { img: destVaranasi, t: "Where to eat late-night in Lucknow", cat: "Food", read: 6, slug: "lucknow-food" },
  { img: destRaj, t: "Handicraft trails of Kutch", cat: "Culture", read: 8, slug: "kutch-crafts" },
];

const CATS = ["All", "Heritage", "Adventure", "Food", "Culture", "Season", "Itinerary", "Health"];

function BlogsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Travel Journal"
        title="Stories from across Bharat"
        description="Long-form writing, field notes and photo essays from our editors and travellers."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blogs" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Featured */}
        <article className="surface-card grid gap-0 overflow-hidden lg:grid-cols-2">
          <div className="img-zoom aspect-[16/10] lg:aspect-auto">
            <img src={featured.img} alt={featured.t} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <Badge className="w-fit bg-accent text-accent-foreground hover:bg-accent">Featured</Badge>
            <h2 className="text-hero mt-4">{featured.t}</h2>
            <p className="mt-4 text-muted-foreground">
              A quiet morning at India's most photographed monument, and what changes when you slow
              down enough to notice the light.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featured.read} min read</span>
              <span>By Kabir Menon</span>
            </div>
            <Button asChild variant="hero" className="mt-6 w-fit">
              <Link to="/blogs/$slug" params={{ slug: featured.slug }}>Read story</Link>
            </Button>
          </div>
        </article>

        {/* Search & categories */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="surface-card flex items-center gap-2 rounded-xl p-2 md:w-96">
            <Search className="ml-2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search stories" className="h-10 border-0 shadow-none focus-visible:ring-0" />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c, i) => (
              <button
                key={c}
                className={
                  "rounded-full border px-3.5 py-1.5 text-sm " +
                  (i === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary/40")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Trending */}
        <h2 className="text-h2 mt-12 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-accent" /> Trending this week
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((b) => <BlogCard key={b.slug} b={b} />)}
        </div>

        {/* Grid */}
        <h2 className="text-h2 mt-14">Latest stories</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((b) => <BlogCard key={b.slug} b={b} />)}
        </div>
      </section>
    </PageShell>
  );
}

function BlogCard({ b }: { b: { img: string; t: string; cat: string; read: number; slug: string } }) {
  return (
    <Link to="/blogs/$slug" params={{ slug: b.slug }} className="surface-card hover-lift group block overflow-hidden">
      <div className="img-zoom aspect-[4/3]">
        <img src={b.img} alt={b.t} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-5">
        <Badge variant="secondary" className="bg-royal-50 text-primary hover:bg-royal-50">{b.cat}</Badge>
        <h3 className="text-h4 mt-3">{b.t}</h3>
        <p className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> {b.read} min read
        </p>
      </div>
    </Link>
  );
}
