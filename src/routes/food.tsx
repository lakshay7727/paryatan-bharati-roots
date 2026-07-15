import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, MapPin, Star, UtensilsCrossed } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { HubCard } from "@/components/site/HubCard";
import { Button } from "@/components/ui/button";
import foodThali from "@/assets/food-thali.jpg";
import foodChaat from "@/assets/food-chaat.jpg";
import destFood from "@/assets/dest-food.jpg";

export const Route = createFileRoute("/food")({
  head: () => ({ meta: [{ title: "Local Food Guide · Paryatan Bharati" }] }),
  component: FoodPage,
});

export const DISHES = [
  { slug: "rajasthani-thali", name: "Rajasthani Thali", region: "Rajasthan", kind: "Traditional", veg: true, image: foodThali },
  { slug: "kolkata-chaat", name: "Kolkata Puchka", region: "West Bengal", kind: "Street food", veg: true, image: foodChaat },
  { slug: "kerala-sadya", name: "Onam Sadya", region: "Kerala", kind: "Festive", veg: true, image: destFood },
  { slug: "hyderabadi-biryani", name: "Hyderabadi Biryani", region: "Telangana", kind: "Fine dining", veg: false, image: destFood },
  { slug: "amritsari-kulcha", name: "Amritsari Kulcha", region: "Punjab", kind: "Street food", veg: true, image: foodChaat },
  { slug: "goan-fish-curry", name: "Goan Fish Curry", region: "Goa", kind: "Coastal", veg: false, image: destFood },
  { slug: "mysore-pak", name: "Mysore Pak", region: "Karnataka", kind: "Sweet", veg: true, image: foodThali },
  { slug: "kashmiri-wazwan", name: "Kashmiri Wazwan", region: "J&K", kind: "Festive", veg: false, image: destFood },
];

function FoodPage() {
  return (
    <PageShell>
      <HubHero eyebrow="Taste of India"
        title="Local food guide"
        description="From street chaat to royal thalis — dishes, restaurants, stories and recipes across every state."
        image={destFood}
        crumbs={[{ label: "Home", to: "/" }, { label: "Local Food" }]}
        actions={<><Button asChild variant="hero" size="lg"><Link to="/restaurants">Find restaurants</Link></Button></>} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-overline text-primary">Curated collections</p>
        <h2 className="text-h2 mt-2">How would you like to eat?</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Regional cuisines", desc: "State-by-state.", icon: MapPin, tone: "royal" as const },
            { title: "Street food", desc: "Chaat, kebabs, snacks.", icon: UtensilsCrossed, tone: "sunset" as const },
            { title: "Traditional thalis", desc: "Complete meals.", icon: UtensilsCrossed, tone: "emerald" as const },
            { title: "Vegetarian / Jain", desc: "Sattvic and pure-veg.", icon: Leaf, tone: "emerald" as const },
          ].map((c) => <HubCard key={c.title} to="/food" icon={c.icon} tone={c.tone} title={c.title} description={c.desc} />)}
        </div>
      </section>

      <section className="border-y border-border bg-sand-warm/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-overline text-primary">Iconic dishes</p>
          <h2 className="text-h2 mt-2">Signatures of India</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {DISHES.map((d) => (
              <Link key={d.slug} to="/food/$slug" params={{ slug: d.slug }} className="surface-card hover-lift group overflow-hidden">
                <div className="img-zoom aspect-[4/3]"><img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover" /></div>
                <div className="p-4">
                  <span className="text-overline text-primary">{d.kind}</span>
                  <h3 className="text-h4 mt-1">{d.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {d.region}</p>
                  {d.veg && <span className="mt-2 inline-flex items-center gap-1 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700"><Leaf className="h-3 w-3" /> Veg</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
