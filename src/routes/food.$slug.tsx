import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChefHat, Leaf, MapPin, Star } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { DISHES } from "./food";

export const Route = createFileRoute("/food/$slug")({
  loader: ({ params }) => {
    const dish = DISHES.find((d) => d.slug === params.slug);
    if (!dish) throw notFound();
    return { dish };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.dish.name ?? "Dish"} · Paryatan Bharati` }] }),
  notFoundComponent: () => <PageShell><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-h2">Not found</h1><Button asChild className="mt-6" variant="hero"><Link to="/food">Back</Link></Button></div></PageShell>,
  component: FoodDetail,
});

function FoodDetail() {
  const { dish } = Route.useLoaderData();
  return (
    <PageShell>
      <HubHero eyebrow={dish.kind} title={dish.name}
        description={`A signature ${dish.kind.toLowerCase()} from ${dish.region}. Explore restaurants, culture and the recipe.`}
        image={dish.image}
        crumbs={[{ label: "Home", to: "/" }, { label: "Food", to: "/food" }, { label: dish.name }]} />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-10">
          <div>
            <h2 className="text-h3">Cultural story</h2>
            <p className="text-body mt-3">{dish.name} traces its origins to the kitchens of {dish.region}. Every family passes down its own version — hospitality served on a plate.</p>
          </div>
          <div>
            <h2 className="text-h3">Ingredients</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["Local grains", "Regional spices", "Fresh produce", "Ghee / oil", "Aromatics", "Traditional utensils"].map((i) => (
                <div key={i} className="rounded-md bg-sand-deep px-3 py-2 text-sm">{i}</div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-h3">Where to eat</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {["Heritage restaurant · ₹₹", "Local legend eatery · ₹", "Fine dining · ₹₹₹"].map((r) => (
                <div key={r} className="surface-card p-4">
                  <ChefHat className="h-5 w-5 text-accent" />
                  <p className="mt-2 font-semibold">{r}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {dish.region}</p>
                  <p className="mt-2 flex items-center gap-1 text-sm font-semibold"><Star className="h-3.5 w-3.5 fill-accent text-accent" /> 4.7</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface-card p-5">
            <p className="text-overline text-primary">At a glance</p>
            <p className="mt-3 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" /> {dish.region}</p>
            <p className="mt-1 flex items-center gap-2 text-sm">{dish.veg ? <><Leaf className="h-4 w-4 text-secondary" /> Vegetarian</> : "Non-vegetarian"}</p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
