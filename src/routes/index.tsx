import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Leaf, GraduationCap, Sparkles, ShieldCheck, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { DestinationCard } from "@/components/site/DestinationCard";
import heroTaj from "@/assets/hero-taj.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import destFood from "@/assets/dest-food.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paryatan Bharati — Explore India's Heritage, Culture & Travel" },
      {
        name: "description",
        content:
          "Plan trips across India's temples, mountains, heritage sites and food trails with a trusted, premium tourism platform.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Landmark,
    title: "Heritage & Culture",
    body: "UNESCO sites, forts, temples and living traditions — documented with depth and care.",
  },
  {
    icon: Leaf,
    title: "Nature & Adventure",
    body: "From Himalayan treks to Kerala backwaters, explore India's landscapes responsibly.",
  },
  {
    icon: GraduationCap,
    title: "Student & Educational",
    body: "Curated study tours and learning journeys connecting classrooms to culture.",
  },
  {
    icon: Sparkles,
    title: "AI Trip Planning",
    body: "Personalised itineraries built around your time, budget and interests.",
  },
  {
    icon: ShieldCheck,
    title: "Government Verified",
    body: "Official schemes, verified guides and trusted bookings backed by transparency.",
  },
  {
    icon: UtensilsCrossed,
    title: "Local Food Discovery",
    body: "Street food trails and regional cuisines mapped by locals who know them best.",
  },
];

const destinations = [
  {
    image: destKerala,
    title: "Kerala Backwaters",
    region: "Alleppey, Kerala",
    category: "Nature",
    rating: 4.9,
  },
  {
    image: destLadakh,
    title: "Pangong & Ladakh",
    region: "Leh, Ladakh",
    category: "Adventure",
    rating: 4.8,
  },
  {
    image: destTemple,
    title: "Meenakshi Temple",
    region: "Madurai, Tamil Nadu",
    category: "Religious",
    rating: 4.9,
  },
  {
    image: destFood,
    title: "Old Delhi Food Trail",
    region: "Chandni Chowk, Delhi",
    category: "Food",
    rating: 4.7,
  },
];

const stats = [
  { value: "40+", label: "UNESCO Heritage Sites" },
  { value: "28", label: "States & Union Cultures" },
  { value: "5,000+", label: "Verified Local Guides" },
  { value: "1M+", label: "Travellers Inspired" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="relative h-[560px] overflow-hidden md:h-[640px]">
            <img
              src={heroTaj}
              alt="Taj Mahal at golden-hour sunrise over the Yamuna river"
              width={1920}
              height={1088}
              className="h-full w-full object-cover"
            />
            <div className="hero-scrim absolute inset-0" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 md:pb-20 lg:px-8">
                <p className="text-overline animate-fade-up text-sunset-200">
                  India's Digital Tourism Ecosystem
                </p>
                <h1 className="text-display animate-fade-up mt-4 max-w-3xl text-primary-foreground">
                  Discover India, one story at a time.
                </h1>
                <p className="text-body-lg animate-fade-up mt-5 max-w-xl text-primary-foreground/85">
                  Heritage, culture, adventure and food — planned intelligently, booked with
                  trust, and told with the depth India deserves.
                </p>
                <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
                  <Button variant="hero" size="xl">
                    Start Exploring
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-card/10 hover:text-primary-foreground"
                  >
                    Plan with AI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-h1 text-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-overline text-secondary">One Platform</p>
          <h2 className="text-h1 mt-3 max-w-2xl text-foreground">
            Every dimension of Indian tourism, unified.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="surface-card hover-lift p-6">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-royal-50 text-primary">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-h4 mt-5 text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Destinations */}
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-overline text-accent">Curated Journeys</p>
                <h2 className="text-h1 mt-3 text-foreground">Signature destinations</h2>
              </div>
              <Button variant="outline">View all destinations</Button>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map((d) => (
                <DestinationCard key={d.title} {...d} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-royal">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <h2 className="text-hero mx-auto max-w-2xl text-primary-foreground">
              Your India journey begins here.
            </h2>
            <p className="text-body-lg mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Let our AI planner craft a journey through India's heritage, nature and flavours —
              tailored to you.
            </p>
            <div className="mt-8">
              <Button variant="hero" size="xl">
                Plan My Trip
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
