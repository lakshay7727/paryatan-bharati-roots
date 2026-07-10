import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, GraduationCap, Landmark, MapPin, Package, Search, UtensilsCrossed } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState } from "@/components/site/EmptyState";
import destKerala from "@/assets/dest-kerala.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import foodChaat from "@/assets/food-chaat.jpg";
import heroTaj from "@/assets/hero-taj.jpg";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search · Paryatan Bharati" },
      { name: "description", content: "Search destinations, packages, blogs, courses, schemes, temples and local food." },
    ],
  }),
  component: SearchPage,
});

const TABS = [
  { id: "all", label: "All" },
  { id: "destinations", label: "Destinations" },
  { id: "packages", label: "Packages" },
  { id: "blogs", label: "Blogs" },
  { id: "courses", label: "Courses" },
  { id: "schemes", label: "Schemes" },
  { id: "food", label: "Food" },
  { id: "temples", label: "Temples" },
];

function SearchPage() {
  const [q, setQ] = useState("Kerala");
  return (
    <PageShell>
      <PageHero
        eyebrow="Universal Search"
        title="Find anything on Paryatan Bharati"
        description="One search across destinations, packages, blogs, training courses and government schemes."
      >
        <div className="surface-card flex items-center gap-2 rounded-xl p-2">
          <Search className="ml-2 h-5 w-5 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try 'Ladakh biking' or 'PRASHAD scheme'"
            className="h-11 border-0 shadow-none focus-visible:ring-0"
          />
          <Button variant="hero" size="lg">Search</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tabs defaultValue="all">
          <TabsList className="flex-wrap">
            {TABS.map((t) => (
              <TabsTrigger key={t.id} value={t.id}>{t.label}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-8 space-y-10">
            <ResultBlock title="Destinations" icon={MapPin}>
              {[
                { img: destKerala, t: "Kerala Backwaters", s: "Kerala · Coastal" },
                { img: heroTaj, t: "Taj Mahal", s: "Uttar Pradesh · Heritage" },
              ].map((r) => (
                <ResultCard key={r.t} {...r} to="/destinations" />
              ))}
            </ResultBlock>

            <ResultBlock title="Packages" icon={Package}>
              <ResultCard img={destKerala} t="Kerala Backwaters & Beaches · 6D" s="From ₹32,999" to="/packages" />
              <ResultCard img={heroTaj} t="Golden Triangle Classic · 5D" s="From ₹24,999" to="/packages" />
            </ResultBlock>

            <ResultBlock title="Temples & Heritage" icon={Landmark}>
              <ResultCard img={destTemple} t="Meenakshi Temple" s="Madurai · Tamil Nadu" to="/destinations" />
            </ResultBlock>

            <ResultBlock title="Local food" icon={UtensilsCrossed}>
              <ResultCard img={foodChaat} t="Kerala Sadya" s="12+ local eateries" to="/" />
            </ResultBlock>

            <ResultBlock title="Blogs" icon={BookOpen}>
              <TextResult t="10 hidden villages in Kerala worth a slow trip" s="Blog · 6 min read" />
            </ResultBlock>

            <ResultBlock title="Training courses" icon={GraduationCap}>
              <TextResult t="Certified India Tour Guide Program" s="Ministry of Tourism · 6 weeks" />
            </ResultBlock>
          </TabsContent>

          {TABS.slice(1).map((t) => (
            <TabsContent key={t.id} value={t.id} className="mt-8">
              <EmptyState
                icon={Search}
                title={`No ${t.label.toLowerCase()} yet`}
                description="Try broadening your query or explore related categories."
              />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </PageShell>
  );
}

function ResultBlock({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-h3 mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" /> {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </div>
  );
}

function ResultCard({ img, t, s, to }: { img: string; t: string; s: string; to: string }) {
  return (
    <Link to={to} className="surface-card hover-lift flex gap-4 overflow-hidden p-3">
      <img src={img} alt="" className="h-20 w-24 shrink-0 rounded-md object-cover" />
      <div className="min-w-0 py-1">
        <h4 className="truncate font-semibold">{t}</h4>
        <p className="mt-1 text-xs text-muted-foreground">{s}</p>
      </div>
    </Link>
  );
}

function TextResult({ t, s }: { t: string; s: string }) {
  return (
    <div className="surface-card p-4">
      <h4 className="font-semibold">{t}</h4>
      <p className="mt-1 text-xs text-muted-foreground">{s}</p>
    </div>
  );
}
