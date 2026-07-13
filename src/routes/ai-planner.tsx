import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Compass,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
  Wand2,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroTaj from "@/assets/hero-taj.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/ai-planner")({
  head: () => ({
    meta: [
      { title: "AI Trip Planner · Paryatan Bharati" },
      {
        name: "description",
        content:
          "Plan India trips with an AI travel consultant — personalized itineraries, budgets, hotels and transport in under 30 seconds.",
      },
      { property: "og:title", content: "AI Trip Planner · Paryatan Bharati" },
      {
        property: "og:description",
        content:
          "Personalized India itineraries powered by AI — routes, stays, food and budget, tailored to your travel style.",
      },
    ],
  }),
  component: AiPlannerLanding,
});

const BENEFITS = [
  { icon: Sparkles, t: "Personalized in seconds", d: "Tailored to your style, budget, dates and interests." },
  { icon: Wallet, t: "Transparent budgets", d: "See a live cost breakdown and government subsidies you qualify for." },
  { icon: ShieldCheck, t: "Verified partners", d: "Every hotel, guide and transport option is vetted for safety." },
  { icon: Compass, t: "Hidden gems included", d: "Local temples, food walks and festivals — not just the obvious spots." },
];

const SAMPLES = [
  { img: destRaj, t: "Royal Rajasthan · 7D", tag: "Luxury · Family", price: "₹39,999" },
  { img: destKerala, t: "Kerala Backwaters · 6D", tag: "Nature · Slow travel", price: "₹32,999" },
  { img: destLadakh, t: "Ladakh Expedition · 8D", tag: "Adventure", price: "₹48,999" },
  { img: destHimalaya, t: "Himachal Snow · 6D", tag: "Snow · Trek", price: "₹27,999" },
];

function AiPlannerLanding() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground">
        <img src={heroTaj} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:py-28">
          <div>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">
              <Sparkles className="mr-1 h-3 w-3" /> Powered by AI
            </Badge>
            <h1 className="text-hero mt-4 max-w-2xl">
              Your intelligent travel consultant for Incredible India
            </h1>
            <p className="text-body-lg mt-4 max-w-xl text-primary-foreground/85">
              Tell us your style, dates and budget — our AI drafts a complete itinerary with routes, stays,
              food, permits and festivals in under 30 seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/ai-planner/preferences">
                  <Wand2 className="h-4 w-4" /> Start planning
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                <Link to="/packages">Explore sample trips</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-accent text-accent" /> 4.9 · 42k travellers</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Verified partners</span>
            </div>
          </div>

          <div className="surface-card animate-fade-in bg-background/95 p-6 text-foreground shadow-xl backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-royal text-primary-foreground">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">Paryatan AI</p>
                <p className="text-xs text-muted-foreground">Live · trained on Indian tourism</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <ChatBubble who="you">A calm 5-day Kerala trip for 2, mid-range budget.</ChatBubble>
              <ChatBubble who="ai">Booking a houseboat night in Alleppey, an Ayurveda spa in Kochi and a sunrise at Munnar tea gardens. Budget looks like ₹38,400 for two.</ChatBubble>
              <ChatBubble who="you">Add a temple day and vegetarian food only.</ChatBubble>
              <ChatBubble who="ai">Added Guruvayur temple day 3 and swapped restaurants to pure-veg Sadhya spots. New total ₹37,900.</ChatBubble>
            </div>
            <Button asChild variant="hero" className="mt-5 w-full">
              <Link to="/ai-planner/preferences">Try it yourself <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-overline text-primary">Why AI Planner</p>
          <h2 className="text-h1 mt-2">Not a form — a travel companion.</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.t} className="surface-card hover-lift p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-royal-50 text-primary">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="text-h4 mt-4">{b.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample trips */}
      <section className="bg-sand-deep py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-overline text-primary">Popular AI itineraries</p>
              <h2 className="text-h1 mt-2">Trips travellers loved this month</h2>
            </div>
            <Button asChild variant="ghost">
              <Link to="/packages">See all <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SAMPLES.map((s) => (
              <article key={s.t} className="surface-card hover-lift group overflow-hidden">
                <div className="img-zoom relative aspect-[4/3]">
                  <img src={s.img} alt={s.t} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <Badge variant="secondary" className="bg-royal-50 text-primary hover:bg-royal-50">{s.tag}</Badge>
                  <h3 className="text-h4 mt-3">{s.t}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> AI-crafted itinerary
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-xl font-semibold">{s.price}</span>
                    <Button asChild variant="hero" size="sm">
                      <Link to="/ai-planner/preferences">Plan mine</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="surface-card relative overflow-hidden bg-gradient-royal p-10 text-primary-foreground sm:p-14">
          <Sparkles className="absolute right-6 top-6 h-10 w-10 text-accent/70" />
          <h2 className="text-h1 max-w-2xl">Ready to meet your next favourite place in India?</h2>
          <p className="mt-3 max-w-xl text-primary-foreground/85">
            Answer a few quick questions and get a shareable, editable itinerary — free.
          </p>
          <Button asChild variant="accent" size="lg" className="mt-8">
            <Link to="/ai-planner/preferences">Start planning <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}

function ChatBubble({ who, children }: { who: "you" | "ai"; children: React.ReactNode }) {
  const isAi = who === "ai";
  return (
    <div className={"flex " + (isAi ? "justify-start" : "justify-end")}>
      <div
        className={
          "max-w-[85%] rounded-lg px-3 py-2 text-sm " +
          (isAi ? "bg-royal-50 text-foreground" : "bg-primary text-primary-foreground")
        }
      >
        {children}
      </div>
    </div>
  );
}
