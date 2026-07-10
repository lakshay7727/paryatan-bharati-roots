import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bus,
  Calendar,
  CalendarDays,
  Camera,
  ChevronRight,
  CloudSun,
  Heart,
  MapPin,
  Plane,
  Share2,
  Star,
  Train,
  Utensils,
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
import destKerala from "@/assets/dest-kerala.jpg";
import destVaranasi from "@/assets/dest-varanasi.jpg";
import destHampi from "@/assets/heritage-hampi.jpg";
import foodThali from "@/assets/food-thali.jpg";

export const Route = createFileRoute("/destinations/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${cap(params.slug)} · Destination · Paryatan Bharati` },
      {
        name: "description",
        content: `Complete travel guide for ${cap(params.slug)} — history, best time to visit, how to reach, food, festivals and curated packages.`,
      },
      { property: "og:title", content: `${cap(params.slug)} · Paryatan Bharati` },
      { property: "og:image", content: `https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200` },
    ],
  }),
  component: DestinationDetailsPage,
});

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function DestinationDetailsPage() {
  const { slug } = Route.useParams();
  const title = cap(slug);

  return (
    <PageShell>
      {/* Hero gallery */}
      <section className="relative">
        <div className="grid gap-1 md:grid-cols-[2fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-[560px]">
            <img src={heroTaj} alt={title} className="h-full w-full object-cover" />
            <div className="hero-scrim absolute inset-0" />
          </div>
          <div className="hidden grid-rows-2 gap-1 md:grid">
            <div className="overflow-hidden">
              <img src={destKerala} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="overflow-hidden">
                <img src={destHampi} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="relative overflow-hidden">
                <img src={destVaranasi} alt="" className="h-full w-full object-cover" />
                <button className="absolute inset-0 grid place-items-center bg-charcoal/50 text-primary-foreground backdrop-blur-sm">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Camera className="h-4 w-4" /> +24 photos
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header block */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/destinations" className="hover:text-primary">Destinations</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <Badge className="mb-3 bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                  UNESCO Heritage
                </Badge>
                <h1 className="text-hero">{title}</h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> Uttar Pradesh, North India
                  <span className="mx-1">·</span>
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-semibold text-foreground">4.8</span> (12,430 reviews)
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button variant="outline" size="icon" aria-label="Wishlist">
                  <Heart />
                </Button>
                <Button variant="outline" size="icon" aria-label="Share">
                  <Share2 />
                </Button>
              </div>
            </div>

            <p className="text-body-lg mt-6 text-muted-foreground">
              A timeless icon of Indian heritage — where craftsmanship, love and history converge on the
              banks of the Yamuna. Spend two golden days exploring monuments, bazaars and Mughal
              cuisine, then continue into the wider Braj region.
            </p>

            {/* Sections */}
            <Section title="History & Story">
              <p className="text-muted-foreground">
                Commissioned in 1632 and completed over two decades, {title} weaves Persian, Islamic and
                Indian architectural traditions into a single, luminous whole. Its inlaid marble, hand-cut
                pietra dura and perfectly proportioned gardens reflect a peak of Mughal artistry.
              </p>
            </Section>

            <Section title="Best time to visit">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { m: "Oct – Mar", label: "Ideal", tone: "emerald" },
                  { m: "Apr – Jun", label: "Very hot", tone: "sunset" },
                  { m: "Jul – Sep", label: "Monsoon", tone: "royal" },
                ].map((s) => (
                  <div key={s.m} className="surface-card p-4">
                    <p className="text-overline text-muted-foreground">{s.m}</p>
                    <p className="mt-1 flex items-center gap-1.5 font-medium">
                      <CloudSun className="h-4 w-4 text-accent" /> {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="How to reach">
              <div className="grid gap-3 sm:grid-cols-3">
                <ReachCard icon={Plane} title="By air" text="Agra Airport (AGR), 13 km" />
                <ReachCard icon={Train} title="By train" text="Agra Cantonment, all major routes" />
                <ReachCard icon={Bus} title="By road" text="Yamuna Expressway from Delhi" />
              </div>
            </Section>

            <Section title="Nearby attractions">
              <div className="grid gap-4 sm:grid-cols-3">
                {["Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"].map((n) => (
                  <Link
                    key={n}
                    to="/destinations"
                    className="surface-card hover-lift block overflow-hidden"
                  >
                    <div className="img-zoom aspect-[4/3]">
                      <img src={destHampi} alt={n} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">{n}</h4>
                      <p className="text-xs text-muted-foreground">15 min drive</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Section>

            <Section title="Local food & cuisine">
              <div className="surface-card flex items-center gap-4 overflow-hidden p-4">
                <img src={foodThali} alt="" className="h-24 w-24 rounded-md object-cover" />
                <div>
                  <p className="text-h4">Mughlai thali & Petha</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Kebabs, biryani and Agra's iconic sweet — the crystallised petha, dating back to
                    Shah Jahan's kitchens.
                  </p>
                  <Link to="/" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Explore local food <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Section>

            <Section title="Travel tips">
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Arrive at sunrise for the best light and shorter queues.</li>
                <li>Fridays are closed to visitors for prayers.</li>
                <li>Photography is restricted inside the main mausoleum.</li>
              </ul>
            </Section>

            <Section title="Frequently asked">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "Do I need to pre-book tickets?", a: "Yes — online tickets skip long queues." },
                  { q: "Is it wheelchair accessible?", a: "Yes, ramps and assistance are available." },
                  { q: "Are guides certified?", a: "Book only Ministry-approved guides via Paryatan Bharati." },
                ].map((f, i) => (
                  <AccordionItem key={i} value={`f${i}`}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Section>
          </div>

          {/* Sticky booking */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="surface-card p-6">
              <p className="text-overline text-muted-foreground">Starting from</p>
              <p className="mt-1 flex items-baseline gap-2 font-display text-3xl font-semibold">
                ₹8,499 <span className="text-sm font-normal text-muted-foreground">/ person</span>
              </p>
              <Separator className="my-4" />
              <div className="space-y-3 text-sm">
                <FieldRow icon={CalendarDays} label="Check-in" value="Select date" />
                <FieldRow icon={Calendar} label="Duration" value="2 nights" />
                <FieldRow icon={Utensils} label="Travellers" value="2 adults" />
              </div>
              <Button variant="hero" className="mt-5 w-full">Book this trip</Button>
              <Button variant="outline" className="mt-2 w-full">Save to wishlist</Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Free cancellation up to 48h before check-in.
              </p>
            </div>
            <div className="surface-card mt-4 p-6">
              <h4 className="text-h4">Related packages</h4>
              <ul className="mt-3 space-y-3 text-sm">
                {["Golden Triangle · 5D", "Mughal Trail · 3D", "Braj Yatra · 4D"].map((p) => (
                  <li key={p} className="flex items-center justify-between">
                    <span>{p}</span>
                    <Link to="/packages" className="text-primary hover:underline">View</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <div className="h-20" />
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="text-h2 mb-4">{title}</h2>
      {children}
    </div>
  );
}

function ReachCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="surface-card flex items-start gap-3 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-royal-50 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function FieldRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border px-3 py-2.5">
      <span className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4" /> {label}
      </span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
