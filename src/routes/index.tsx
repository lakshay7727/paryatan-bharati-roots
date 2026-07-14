import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  ChevronRight,
  CreditCard,
  DollarSign,
  Flag,
  GraduationCap,
  Heart,
  IndianRupee,
  Landmark,
  MapPin,
  Mountain,
  PlaneTakeoff,
  Play,
  Quote,
  Search,
  Ship,
  Sparkles,
  Star,
  Train,
  TreePalm,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Bell, Cog, LayoutDashboard, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

import heroTaj from "@/assets/hero-taj.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import destRajasthan from "@/assets/dest-rajasthan.jpg";
import destVaranasi from "@/assets/dest-varanasi.jpg";
import destHimalaya from "@/assets/dest-himalaya.jpg";
import destGoa from "@/assets/dest-goa.jpg";
import destFood from "@/assets/dest-food.jpg";
import foodThali from "@/assets/food-thali.jpg";
import foodChaat from "@/assets/food-chaat.jpg";
import heritageHampi from "@/assets/heritage-hampi.jpg";
import newsletterBg from "@/assets/newsletter-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paryatan Bharati — Explore India's Heritage, Culture & Travel" },
      {
        name: "description",
        content:
          "Plan trips across India's temples, mountains, heritage sites and food trails with a trusted, premium tourism platform powered by AI and government partnerships.",
      },
      { property: "og:title", content: "Paryatan Bharati — Discover Incredible India" },
      {
        property: "og:description",
        content:
          "Heritage, culture, adventure and AI trip planning — one premium platform for exploring India.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader transparentOnTop />
      <main>
        <Hero />
        <Stats />
        <QuickAccess />
        <FeaturedDestinations />
        <GovernmentSchemes />
        <StudentTourism />
        <AIPlannerPreview />
        <HeritageStory />
        <TempleCircuit />
        <SportsAdventure />
        <FoodJourney />
        <Connectivity />
        <TrainingCenter />
        <BankingPartners />
        <Testimonials />
        <BlogsSection />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section className="relative -mt-[72px]">
      <div className="relative h-[720px] overflow-hidden md:h-[820px]">
        <img
          src={heroTaj}
          alt="Taj Mahal at golden-hour sunrise over the Yamuna river"
          width={1920}
          height={1088}
          className="h-full w-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
            <p className="text-overline animate-fade-up text-sunset-200">
              India's Digital Tourism Ecosystem
            </p>
            <h1 className="text-display animate-fade-up mt-4 max-w-3xl text-primary-foreground">
              Discover India,
              <br />
              one story at a time.
            </h1>
            <p className="text-body-lg animate-fade-up mt-5 max-w-xl text-primary-foreground/85">
              Heritage, culture, adventure and food — planned intelligently, booked with trust,
              and told with the depth India deserves.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/destinations">Explore India</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <Link to="/ai-planner"><Sparkles className="h-4 w-4" /> Plan with AI</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating search card */}
      <div className="relative z-10 mx-auto -mt-24 max-w-6xl px-4 sm:-mt-28 sm:px-6 lg:px-8">
        <div className="surface-card animate-fade-up p-4 shadow-xl md:p-6">
          <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_auto]">
            <SearchField icon={MapPin} label="Destination" placeholder="Where to?" />
            <SearchField icon={CalendarDays} label="Travel Dates" placeholder="Add dates" />
            <SearchField icon={Users} label="Travelers" placeholder="2 adults" />
            <SearchField icon={IndianRupee} label="Budget" placeholder="₹ Any" />
            <SearchField icon={Sparkles} label="Travel Style" placeholder="Heritage" />
            <Button variant="hero" size="lg" className="md:h-auto md:self-stretch md:px-6">
              <Search className="h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchField({
  icon: Icon,
  label,
  placeholder,
}: {
  icon: React.ElementType;
  label: string;
  placeholder: string;
}) {
  return (
    <label className="group flex flex-col gap-1 rounded-md border border-transparent px-3 py-2 transition-colors hover:border-border hover:bg-muted/50">
      <span className="text-overline text-[10px] text-muted-foreground">{label}</span>
      <span className="flex items-center gap-2 text-sm text-foreground">
        <Icon className="h-4 w-4 text-primary" />
        <input
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          placeholder={placeholder}
        />
      </span>
    </label>
  );
}

/* ─────────────── STATS ─────────────── */
function Stats() {
  const stats = [
    { value: "40+", label: "UNESCO Heritage Sites" },
    { value: "28", label: "States & Union Cultures" },
    { value: "5,000+", label: "Verified Local Guides" },
    { value: "1M+", label: "Travellers Inspired" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-h1 text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── FEATURED DESTINATIONS ─────────────── */
function FeaturedDestinations() {
  const destinations = [
    { image: destKerala, title: "Kerala Backwaters", state: "Kerala", category: "Nature", rating: 4.9, season: "Sep – Mar", price: 12999, desc: "Palm-lined canals, houseboat sunsets and Ayurvedic stillness." },
    { image: destLadakh, title: "Pangong & Ladakh", state: "Ladakh", category: "Adventure", rating: 4.8, season: "May – Sep", price: 24999, desc: "High-altitude lakes, monasteries and Himalayan silence." },
    { image: destRajasthan, title: "Royal Rajasthan", state: "Rajasthan", category: "Heritage", rating: 4.9, season: "Oct – Mar", price: 18499, desc: "Amber forts, palaces and desert camps under starlit skies." },
    { image: destVaranasi, title: "Varanasi Ghats", state: "Uttar Pradesh", category: "Religious", rating: 4.9, season: "Oct – Mar", price: 9499, desc: "Sunrise aarti on the Ganges — India's spiritual heartbeat." },
    { image: destGoa, title: "Goa Coastline", state: "Goa", category: "Beach", rating: 4.7, season: "Nov – Feb", price: 14999, desc: "Palm-shaded beaches, Portuguese heritage and coastal cuisine." },
    { image: destHimalaya, title: "Himachal Peaks", state: "Himachal Pradesh", category: "Adventure", rating: 4.8, season: "Mar – Jun", price: 16999, desc: "Himalayan treks above the clouds with alpine villages." },
    { image: destTemple, title: "Meenakshi Circuit", state: "Tamil Nadu", category: "Religious", rating: 4.9, season: "Nov – Feb", price: 11499, desc: "Dravidian gopurams and temple towns of the deep south." },
    { image: heritageHampi, title: "Hampi Ruins", state: "Karnataka", category: "Heritage", rating: 4.8, season: "Oct – Feb", price: 10999, desc: "Vijayanagara stone empire scattered across boulder valleys." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Curated Journeys"
        title="Signature destinations"
        subtitle="Verified experiences across India's most iconic regions."
        action={
          <Button variant="outline">
            View all destinations <ArrowRight className="h-4 w-4" />
          </Button>
        }
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <article key={d.title} className="surface-card hover-lift group overflow-hidden">
            <div className="img-zoom relative aspect-[4/5]">
              <img
                src={d.image}
                alt={`${d.title}, ${d.state}`}
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
              <button
                aria-label="Add to wishlist"
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-slate-ink shadow-sm transition-colors hover:text-accent"
              >
                <Heart className="h-4 w-4" />
              </button>
              <Badge className="absolute left-3 top-3 bg-white/95 text-foreground hover:bg-white">
                {d.category}
              </Badge>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {d.state}
                </p>
                <span className="flex items-center gap-1 text-sm font-medium">
                  <Star className="h-4 w-4 fill-accent text-accent" /> {d.rating.toFixed(1)}
                </span>
              </div>
              <h3 className="text-h4 mt-2 text-foreground">{d.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {d.desc}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-[11px] text-muted-foreground">Best season</p>
                  <p className="text-xs font-medium text-foreground">{d.season}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-muted-foreground">from</p>
                  <p className="font-display text-base font-semibold text-primary">
                    ₹{d.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── GOVERNMENT SCHEMES ─────────────── */
function GovernmentSchemes() {
  const schemes = [
    {
      title: "Dekho Apna Desh",
      body: "A nationwide movement encouraging Indians to explore domestic destinations and support local economies.",
      eligibility: "All Indian travellers",
      tag: "Flagship Campaign",
    },
    {
      title: "Swadesh Darshan 2.0",
      body: "Integrated development of theme-based tourist circuits across India with world-class infrastructure.",
      eligibility: "State partnerships",
      tag: "Infrastructure",
    },
    {
      title: "PRASHAD Scheme",
      body: "Pilgrimage rejuvenation and spiritual heritage augmentation drive for temple towns and religious circuits.",
      eligibility: "Registered pilgrims",
      tag: "Religious Tourism",
    },
  ];
  return (
    <section className="bg-royal-50/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Government of India"
          title="Verified tourism initiatives"
          subtitle="Official schemes from the Ministry of Tourism — transparent, trusted, and open to all."
          icon={Flag}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {schemes.map((s) => (
            <article key={s.title} className="surface-card hover-lift flex flex-col gap-4 p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-gradient-royal text-primary-foreground shadow-sm">
                  <Landmark className="h-5 w-5" />
                </span>
                <Badge variant="secondary" className="bg-royal-100 text-royal-700 hover:bg-royal-100">
                  {s.tag}
                </Badge>
              </div>
              <div>
                <h3 className="text-h3 text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-[11px] text-muted-foreground">Eligibility</p>
                  <p className="text-xs font-medium text-foreground">{s.eligibility}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── STUDENT TOURISM ─────────────── */
function StudentTourism() {
  const tours = [
    { title: "Heritage Circuit — Rajasthan", price: 8999, duration: "6 days", group: "30–45", highlight: "History & architecture" },
    { title: "Science Trail — ISRO Bengaluru", price: 6499, duration: "4 days", group: "25–40", highlight: "STEM & innovation" },
    { title: "Nature Camp — Himachal", price: 7999, duration: "5 days", group: "20–35", highlight: "Ecology & adventure" },
    { title: "Industrial Visit — Mumbai", price: 5999, duration: "3 days", group: "30–50", highlight: "Business & industry" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Student & Educational"
        title="Learning journeys, thoughtfully planned"
        subtitle="Curated school, college and industrial tours — affordable, safe and academically enriching."
        icon={GraduationCap}
        action={<Button variant="outline">School programs <ArrowRight className="h-4 w-4" /></Button>}
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tours.map((t) => (
          <article key={t.title} className="surface-card hover-lift flex flex-col gap-4 p-6">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-emerald-50 text-emerald-700">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="text-h4 text-foreground">{t.title}</h3>
            <p className="text-sm text-muted-foreground">{t.highlight}</p>
            <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-border pt-4 text-xs">
              <div>
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="mt-0.5 font-medium text-foreground">{t.duration}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Group</dt>
                <dd className="mt-0.5 font-medium text-foreground">{t.group}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">From</dt>
                <dd className="mt-0.5 font-medium text-primary">₹{t.price.toLocaleString("en-IN")}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── AI PLANNER ─────────────── */
function AIPlannerPreview() {
  const day = [
    { time: "Day 1", title: "Arrival in Jaipur", body: "City palace, Hawa Mahal & Chokhi Dhani dinner" },
    { time: "Day 2", title: "Amber Fort & Nahargarh", body: "Sunrise elephant ride and heritage stepwells" },
    { time: "Day 3", title: "Jodhpur Blue City", body: "Mehrangarh Fort and rooftop cafe crawl" },
  ];
  return (
    <section className="bg-gradient-royal py-24 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-overline text-sunset-200">AI Trip Planner</p>
          <h2 className="text-hero mt-3">Your itinerary, imagined intelligently.</h2>
          <p className="text-body-lg mt-4 max-w-lg text-primary-foreground/80">
            Tell us your time, budget and interests. Our AI planner blends heritage, food and
            hidden gems into a day-by-day journey — instantly.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/85">
            {["Personalised to your travel style", "Verified stays and local guides", "Editable maps & offline mode"].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
                  <Sparkles className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg">
              Create My AI Itinerary
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <Play className="h-4 w-4" /> Watch demo
            </Button>
          </div>
        </div>

        {/* Preview panel */}
        <div className="surface-card overflow-hidden !bg-white/95 p-0 text-foreground shadow-xl">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-sunset text-accent-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">Rajasthan Heritage · 6 days</p>
                <p className="text-xs text-muted-foreground">₹18,499 · 2 travellers · Oct 12</p>
              </div>
            </div>
            <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">Draft</Badge>
          </div>
          <div className="grid grid-cols-[1fr_1fr]">
            <div className="border-r border-border p-4">
              <p className="text-overline text-muted-foreground">Itinerary</p>
              <ol className="mt-3 space-y-3">
                {day.map((d) => (
                  <li key={d.time} className="rounded-md border border-border p-3">
                    <p className="text-[11px] font-semibold text-primary">{d.time}</p>
                    <p className="mt-0.5 text-sm font-semibold">{d.title}</p>
                    <p className="text-xs text-muted-foreground">{d.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative">
              <img
                src={destRajasthan}
                alt="Rajasthan trip map preview"
                loading="lazy"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-md bg-white/95 p-3 text-xs shadow-sm">
                <p className="font-semibold text-foreground">3 stops · 412 km</p>
                <p className="text-muted-foreground">Jaipur → Jodhpur → Udaipur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── HERITAGE STORY ─────────────── */
function HeritageStory() {
  const stories = [
    {
      image: heritageHampi,
      eyebrow: "UNESCO · Karnataka",
      title: "Hampi — the stone empire of Vijayanagara",
      body: "Walk through a 14th-century capital scattered across a landscape of boulders, temples and royal enclosures — one of India's most cinematic ruins.",
    },
    {
      image: destRajasthan,
      eyebrow: "Living Heritage · Rajasthan",
      title: "Forts of the Rajputs, still alive today",
      body: "Amber, Mehrangarh, Chittorgarh — palaces still occupied by descendants, workshops still practising the crafts of court artisans.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Culture & Heritage"
        title="Stories carved in stone and song"
        subtitle="From UNESCO monuments to living traditions — India's heritage, told with depth."
      />
      <div className="mt-16 flex flex-col gap-16">
        {stories.map((s, i) => (
          <article
            key={s.title}
            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="img-zoom overflow-hidden rounded-lg shadow-md">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1000}
                height={800}
                className="aspect-[5/4] h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-overline text-secondary">{s.eyebrow}</p>
              <h3 className="text-h1 mt-3 text-foreground">{s.title}</h3>
              <p className="text-body-lg mt-4 text-muted-foreground">{s.body}</p>
              <Button variant="outline" className="mt-6">
                Read the story <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── TEMPLE CIRCUIT ─────────────── */
function TempleCircuit() {
  const temples = [
    { image: destTemple, title: "Meenakshi Amman", location: "Madurai, Tamil Nadu", season: "Nov – Feb", note: "Dravidian gopurams from the 6th century." },
    { image: destVaranasi, title: "Kashi Vishwanath", location: "Varanasi, UP", season: "Oct – Mar", note: "Jyotirlinga on the western bank of the Ganges." },
    { image: heritageHampi, title: "Virupaksha Temple", location: "Hampi, Karnataka", season: "Oct – Feb", note: "Continuously worshipped since the 7th century." },
  ];
  return (
    <section className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Religious Tourism"
          title="Pilgrimage circuits of India"
          subtitle="From Char Dham to the Jyotirlingas — travel the spiritual geography of the subcontinent."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {temples.map((t) => (
            <article key={t.title} className="surface-card hover-lift overflow-hidden">
              <div className="img-zoom aspect-[4/3]">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {t.location}
                </p>
                <h3 className="text-h4 mt-2 text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs">
                  <span className="text-muted-foreground">
                    Best season · <span className="font-medium text-foreground">{t.season}</span>
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    Plan visit <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SPORTS / ADVENTURE ─────────────── */
function SportsAdventure() {
  const activities = [
    { icon: Mountain, title: "Himalayan Trekking", meta: "Uttarakhand · Himachal · Ladakh" },
    { icon: Ship, title: "River Rafting", meta: "Rishikesh · Zanskar · Teesta" },
    { icon: TrendingUp, title: "Snow Skiing", meta: "Auli · Gulmarg · Manali" },
    { icon: Award, title: "National Sports Venues", meta: "Cricket · Football · Athletics" },
  ];
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-primary-foreground">
      <img
        src={destHimalaya}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-royal-900/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Adventure & Sports"
          title="India, off the beaten path"
          subtitle="Chase altitude, whitewater and adrenaline — safely, with certified operators."
          light
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a) => (
            <article
              key={a.title}
              className="hover-lift rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-gradient-sunset text-accent-foreground shadow-sm">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="text-h4 mt-5">{a.title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/70">{a.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FOOD JOURNEY ─────────────── */
function FoodJourney() {
  const dishes = [
    { image: foodThali, name: "South Indian Thali", state: "Tamil Nadu", desc: "Banana-leaf feast of sambar, rasam and heritage curries." },
    { image: foodChaat, name: "Old Delhi Chaat", state: "Delhi", desc: "Golgappa, aloo tikki and papdi from Chandni Chowk gullies." },
    { image: destFood, name: "Regional Street Food", state: "Pan-India", desc: "From vada pav to litti chokha — India on a plate." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Local Food Discovery"
        title="Follow the flavour trail"
        subtitle="Regional cuisines mapped by locals — the way you'd eat if you lived there."
        icon={UtensilsCrossed}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {dishes.map((d) => (
          <article key={d.name} className="surface-card hover-lift overflow-hidden">
            <div className="img-zoom aspect-[4/3]">
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <Badge className="bg-sunset-100 text-sunset-700 hover:bg-sunset-100">{d.state}</Badge>
              <h3 className="text-h3 mt-3 text-foreground">{d.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── CONNECTIVITY ─────────────── */
function Connectivity() {
  const modes = [
    { icon: PlaneTakeoff, title: "Flights", meta: "150+ airports, all major carriers" },
    { icon: Train, title: "Railways", meta: "IRCTC-integrated bookings" },
    { icon: Building2, title: "Roads", meta: "NH corridors & luxury coaches" },
    { icon: Ship, title: "Waterways", meta: "Cruises on Ganga, Brahmaputra & Kerala" },
  ];
  return (
    <section className="bg-royal-50/60 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Travel Connectivity"
            title="Getting there is half the story"
            subtitle="Compare flights, trains, roads and waterways — plan the whole journey in one place."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {modes.map((m) => (
              <div key={m.title} className="surface-card flex items-start gap-3 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-royal-100 text-royal-700">
                  <m.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-h4 text-foreground">{m.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{m.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="surface-card relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-royal-700 via-royal-600 to-emerald-700" />
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center text-primary-foreground">
            <MapPin className="h-10 w-10 text-sunset-300" />
            <p className="text-overline text-sunset-200">Interactive India Map</p>
            <p className="text-h3 max-w-xs">Tap any state to see routes, airports and stations.</p>
            <Button variant="hero" size="lg" className="mt-4">
              Open Route Explorer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TRAINING CENTER ─────────────── */
function TrainingCenter() {
  const modules = [
    { icon: Play, title: "Video Lessons", meta: "80+ hours from certified guides" },
    { icon: BookOpen, title: "Travel Guides", meta: "Region-wise reading library" },
    { icon: Sparkles, title: "Interactive Modules", meta: "Culture, safety & etiquette quizzes" },
    { icon: Award, title: "Certificates", meta: "Ministry-recognised completion badges" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="surface-card relative overflow-hidden">
          <img
            src={destVaranasi}
            alt="Training center classroom on Indian culture"
            loading="lazy"
            width={1000}
            height={800}
            className="aspect-[5/4] h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-4">
            <div className="rounded-md bg-white/95 px-4 py-3 text-xs shadow-md">
              <p className="text-muted-foreground">Course progress</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-1.5 w-40 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-2/3 rounded-full bg-gradient-sunset" />
                </div>
                <span className="font-semibold text-foreground">67%</span>
              </div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              <Award className="mr-1 h-3 w-3" /> Certified Guide Program
            </Badge>
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="Online Guide & Training"
            title="Learn India before you travel it"
            subtitle="Bite-sized courses from historians, chefs and local guides — free to start."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {modules.map((m) => (
              <div key={m.title} className="rounded-md border border-border bg-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-emerald-50 text-emerald-700">
                  <m.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{m.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.meta}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Button variant="default">Browse courses</Button>
            <Button variant="ghost" className="text-primary hover:text-primary">
              For educators <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── BANKING PARTNERS ─────────────── */
function BankingPartners() {
  const offers = [
    { icon: CreditCard, title: "No-cost EMI", body: "0% EMI up to 12 months on partner credit cards.", partner: "HDFC · ICICI · SBI" },
    { icon: Wallet, title: "5% Cashback", body: "Instant cashback on domestic bookings above ₹15,000.", partner: "Axis Bank" },
    { icon: DollarSign, title: "Forex made easy", body: "Zero-margin forex cards for international travellers.", partner: "IndusInd · Kotak" },
  ];
  return (
    <section className="bg-sand-deep py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Banking Partners"
          title="Travel more, pay smarter"
          subtitle="Exclusive offers from India's trusted banks — vetted and transparent."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <article key={o.title} className="surface-card hover-lift p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-gradient-royal text-primary-foreground shadow-sm">
                <o.icon className="h-5 w-5" />
              </span>
              <h3 className="text-h4 mt-5 text-foreground">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
                Partners · <span className="font-medium text-foreground">{o.partner}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TESTIMONIALS ─────────────── */
function Testimonials() {
  const quotes = [
    {
      name: "Ananya Sharma",
      role: "Traveller · Bengaluru",
      dest: "Kerala Backwaters",
      rating: 5,
      body: "The AI planner nailed the pace. We saw more of Kerala in 5 days than in past trips — without ever feeling rushed.",
    },
    {
      name: "Raghav Menon",
      role: "Photographer · Kochi",
      dest: "Ladakh Expedition",
      rating: 5,
      body: "Verified local guides made the difference. Every homestay, every route — exactly as described. Fully trustworthy.",
    },
    {
      name: "Meera Iyer",
      role: "Teacher · Chennai",
      dest: "Heritage Circuit — Rajasthan",
      rating: 5,
      body: "Booked a 40-student school tour. The government-backed permits and safety briefings put every parent at ease.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Traveller Stories"
        title="Trusted by travellers across India"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <article key={q.name} className="surface-card hover-lift flex flex-col gap-5 p-7">
            <Quote className="h-8 w-8 text-accent" />
            <p className="text-base leading-relaxed text-foreground">"{q.body}"</p>
            <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-royal font-display text-sm font-semibold text-primary-foreground">
                {q.name.charAt(0)}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{q.name}</p>
                <p className="text-xs text-muted-foreground">{q.role} · {q.dest}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: q.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── BLOGS ─────────────── */
function BlogsSection() {
  const posts = [
    { image: destVaranasi, category: "Culture", read: "8 min", title: "72 hours in Varanasi: a slow travel guide", excerpt: "Sunrise aartis, silk workshops and lassi at midnight — the eternal city, unhurried." },
    { image: destHimalaya, category: "Adventure", read: "12 min", title: "Trekking Hampta Pass for first-timers", excerpt: "Everything to pack, permits to carry, and how to acclimatise before the climb." },
    { image: foodThali, category: "Food", read: "6 min", title: "The vegetarian's map of South India", excerpt: "From Chettinad to Udupi — a region-by-region guide to India's greatest vegetarian traditions." },
  ];
  return (
    <section className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Travel Stories"
          title="From our journal"
          subtitle="Notes from writers, historians and photographers on the road."
          action={<Button variant="outline">All stories <ArrowRight className="h-4 w-4" /></Button>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="surface-card hover-lift overflow-hidden">
              <div className="img-zoom aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">{p.category}</Badge>
                  <span className="text-muted-foreground">{p.read} read</span>
                </div>
                <h3 className="text-h4 mt-3 text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <Button variant="ghost" size="sm" className="mt-4 -ml-3 text-primary hover:text-primary">
                  Read story <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── NEWSLETTER ─────────────── */
function Newsletter() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={newsletterBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-royal-900/85 to-charcoal/90" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-overline text-sunset-200">Newsletter</p>
        <h2 className="text-hero mt-3 text-primary-foreground">
          One inspiring India story, every week.
        </h2>
        <p className="text-body-lg mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Get destination guides, cultural essays and offers from verified travel partners —
          straight to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            required
            placeholder="you@email.com"
            className="h-12 flex-1 border-white/20 bg-white/95 text-foreground placeholder:text-muted-foreground"
          />
          <Button type="submit" variant="hero" size="lg">
            Subscribe
          </Button>
        </form>
        <p className="mt-4 text-xs text-primary-foreground/60">
          No spam. Unsubscribe anytime. Read our privacy policy.
        </p>
      </div>
    </section>
  );
}

/* ─────────────── SHARED SECTION HEADER ─────────────── */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  icon: Icon,
  light,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  icon?: React.ElementType;
  light?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <p
          className={`text-overline flex items-center gap-2 ${
            light ? "text-sunset-200" : "text-secondary"
          }`}
        >
          {Icon && <Icon className="h-4 w-4" />} {eyebrow}
        </p>
        <h2
          className={`text-h1 mt-3 ${light ? "text-primary-foreground" : "text-foreground"}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-body-lg mt-3 ${
              light ? "text-primary-foreground/75" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
