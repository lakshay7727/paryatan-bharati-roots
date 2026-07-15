import { createFileRoute, Link } from "@tanstack/react-router";
import { Church, Clock, MapPin, Sparkles, Star } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { HubCard } from "@/components/site/HubCard";
import { Button } from "@/components/ui/button";
import destTemple from "@/assets/dest-temple.jpg";

export const Route = createFileRoute("/temples")({
  head: () => ({ meta: [{ title: "Temples & Spiritual Tourism · Paryatan Bharati" }] }),
  component: TemplesPage,
});

export const TEMPLES = [
  { slug: "kashi-vishwanath", name: "Kashi Vishwanath", state: "Uttar Pradesh", deity: "Lord Shiva", timings: "03:00 – 23:00", circuit: "Jyotirlinga", rating: 4.9 },
  { slug: "somnath", name: "Somnath Jyotirlinga", state: "Gujarat", deity: "Lord Shiva", timings: "06:00 – 21:30", circuit: "Jyotirlinga", rating: 4.9 },
  { slug: "meenakshi", name: "Meenakshi Amman", state: "Tamil Nadu", deity: "Devi Meenakshi", timings: "05:00 – 22:00", circuit: "Shakti Peetha", rating: 4.9 },
  { slug: "jagannath-puri", name: "Jagannath Puri", state: "Odisha", deity: "Lord Jagannath", timings: "05:00 – 22:00", circuit: "Char Dham", rating: 4.8 },
  { slug: "kedarnath", name: "Kedarnath", state: "Uttarakhand", deity: "Lord Shiva", timings: "04:00 – 21:00", circuit: "Char Dham", rating: 4.9 },
  { slug: "padmanabhaswamy", name: "Padmanabhaswamy", state: "Kerala", deity: "Lord Vishnu", timings: "03:30 – 19:20", circuit: "Divya Desam", rating: 4.8 },
  { slug: "golden-temple", name: "Golden Temple", state: "Punjab", deity: "Guru Granth Sahib", timings: "24 hours", circuit: "Sikh Gurudwara", rating: 5.0 },
  { slug: "bodh-gaya", name: "Mahabodhi Temple", state: "Bihar", deity: "Lord Buddha", timings: "05:00 – 21:00", circuit: "Buddhist", rating: 4.9 },
];

function TemplesPage() {
  return (
    <PageShell>
      <HubHero eyebrow="Bharat's spiritual atlas"
        title="Temples, gurudwaras & sacred sites"
        description="Char Dham, 12 Jyotirlingas, Shakti Peethas, Buddhist stupas, Sikh gurudwaras, churches, mosques and Jain shrines."
        image={destTemple}
        crumbs={[{ label: "Home", to: "/" }, { label: "Temples & Religious" }]}
        actions={<><Button asChild variant="hero" size="lg"><Link to="/pilgrimage">Plan a pilgrimage</Link></Button></>} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-overline text-primary">Sacred circuits</p>
        <h2 className="text-h2 mt-2">Explore by tradition</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {["12 Jyotirlingas", "Char Dham", "Shakti Peethas", "Buddhist Sites", "Sikh Gurudwaras", "Divya Desam", "Jain Temples", "Churches", "Mosques", "Sufi Dargahs"].map((c) => (
            <div key={c} className="surface-card hover-lift p-5 text-center">
              <Sparkles className="mx-auto h-6 w-6 text-accent" />
              <p className="mt-2 font-semibold">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-sand-warm/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-overline text-primary">Featured</p>
          <h2 className="text-h2 mt-2">Sacred sites of India</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TEMPLES.map((t) => (
              <Link key={t.slug} to="/temples/$slug" params={{ slug: t.slug }} className="surface-card hover-lift group flex flex-col p-5">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-sunset-100 text-accent"><Church className="h-5 w-5" /></span>
                <h3 className="text-h4 mt-4">{t.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t.deity}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {t.state}</p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {t.timings}</p>
                <span className="mt-3 flex items-center gap-1 text-sm font-semibold"><Star className="h-3.5 w-3.5 fill-accent text-accent" /> {t.rating}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
