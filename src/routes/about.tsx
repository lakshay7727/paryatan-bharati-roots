import { createFileRoute } from "@tanstack/react-router";
import { Building2, Compass, Flag, Globe, Heart, MapPin, Sparkles, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Badge } from "@/components/ui/badge";
import destKerala from "@/assets/dest-kerala.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";
import heroTaj from "@/assets/hero-taj.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Paryatan Bharati" },
      { name: "description", content: "Our mission, vision and the team building India's digital tourism ecosystem." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About us"
        title="Building the digital front door to Bharat's tourism"
        description="Paryatan Bharati brings destinations, government schemes, heritage, education and payments into a single, trusted experience for every traveller."
        image={destRaj}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface-card p-8">
            <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">Our mission</Badge>
            <h2 className="text-h2 mt-3">Make discovering India effortless — and equitable.</h2>
            <p className="mt-4 text-muted-foreground">
              We want a first-time traveller from Guwahati and a returning family from Bengaluru to
              have the same premium, trustworthy experience — with local operators, verified guides
              and transparent pricing.
            </p>
          </div>
          <div className="surface-card p-8">
            <Badge className="bg-royal-50 text-primary hover:bg-royal-50">Our vision</Badge>
            <h2 className="text-h2 mt-3">One platform. Every corner of Bharat.</h2>
            <p className="mt-4 text-muted-foreground">
              From heritage circuits and student tours to pilgrimage, food trails and adventure
              expeditions — a single digital ecosystem that respects our culture and empowers our
              tourism economy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand-deep py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-h1">By the numbers</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, v: "740+", l: "Destinations" },
              { icon: Users, v: "1.2M", l: "Travellers served" },
              { icon: Building2, v: "36", l: "State partnerships" },
              { icon: Globe, v: "22", l: "Languages supported" },
            ].map((s) => (
              <div key={s.l} className="surface-card flex items-center gap-4 p-6">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-royal-50 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-3xl font-semibold">{s.v}</p>
                  <p className="text-xs text-muted-foreground">{s.l}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-h1">Our journey</h2>
        <ol className="relative mt-8 space-y-8 border-l-2 border-border pl-8">
          {[
            { y: "2023", t: "Idea", d: "A cross-ministerial working group sketches a unified digital tourism platform." },
            { y: "2024", t: "Pilot", d: "Launched in five states with 120 destinations and 18 verified operators." },
            { y: "2025", t: "AI Planner", d: "Personalised itineraries powered by local knowledge and traveller reviews." },
            { y: "2026", t: "Nationwide", d: "Full rollout — every state and UT onboarded with schemes and training modules." },
          ].map((m) => (
            <li key={m.y}>
              <span className="absolute -left-[9px] mt-2 grid h-4 w-4 place-items-center rounded-full bg-primary" />
              <p className="text-overline text-primary">{m.y}</p>
              <h3 className="text-h3 mt-1">{m.t}</h3>
              <p className="mt-1 text-muted-foreground">{m.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-charcoal py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-h1">Government collaboration</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/75">
            Built in partnership with the Ministry of Tourism, state tourism boards and the ASI —
            every operator and guide on Paryatan Bharati is verified.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {["Ministry of Tourism", "ASI", "Indian Railways", "IRCTC", "Incredible India", "Dekho Apna Desh"].map((p) => (
              <div key={p} className="surface-card grid h-24 place-items-center bg-white/5 px-4 text-center text-sm font-medium text-primary-foreground/85 backdrop-blur">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-h1">The team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "Aditi Rao", r: "Product · Delhi", img: destKerala },
            { n: "Rohan Iyer", r: "Design · Bengaluru", img: heroTaj },
            { n: "Meera Bose", r: "Partnerships · Kolkata", img: destRaj },
            { n: "Vikram Singh", r: "Engineering · Jaipur", img: destKerala },
          ].map((m) => (
            <div key={m.n} className="surface-card overflow-hidden">
              <div className="aspect-[4/5]"><img src={m.img} alt="" className="h-full w-full object-cover" /></div>
              <div className="p-4">
                <p className="font-semibold">{m.n}</p>
                <p className="text-xs text-muted-foreground">{m.r}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
