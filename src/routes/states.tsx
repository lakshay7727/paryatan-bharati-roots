import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { IndiaStatesGrid } from "@/components/site/IndiaStatesGrid";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/states")({
  head: () => ({ meta: [{ title: "State tourism explorer · Paryatan Bharati" }] }),
  component: StatesPage,
});

function StatesPage() {
  return (
    <PageShell>
      <HubHero eyebrow="State tourism explorer"
        title="One country. 28 stories."
        description="Tap any state to unlock its attractions, culture, festivals, food, temples, wildlife and packages."
        image={destHimalaya}
        crumbs={[{ label: "Home", to: "/" }, { label: "States" }]} />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <IndiaStatesGrid />
      </section>
    </PageShell>
  );
}
