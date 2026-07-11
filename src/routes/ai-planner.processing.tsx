import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, CloudSun, MapPin, Route as RouteIcon, Sparkles, UtensilsCrossed, Wallet } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Progress } from "@/components/ui/progress";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destRaj from "@/assets/dest-rajasthan.jpg";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/ai-planner/processing")({
  head: () => ({ meta: [{ title: "Crafting your trip · AI Planner" }] }),
  component: Processing,
});

const STEPS = [
  { icon: MapPin, label: "Finding hidden gems in your regions…" },
  { icon: Wallet, label: "Optimizing your budget…" },
  { icon: CloudSun, label: "Checking weather & festival calendar…" },
  { icon: RouteIcon, label: "Planning transportation between cities…" },
  { icon: UtensilsCrossed, label: "Curating local food you'll love…" },
  { icon: Sparkles, label: "Building your day-by-day itinerary…" },
];

const FACTS = [
  "India has 43 UNESCO World Heritage sites — you'll pass a few on this trip.",
  "The Kumbh Mela is the largest peaceful gathering of humans on Earth.",
  "Kerala's backwaters stretch over 900 km of interlinked lagoons.",
  "Ladakh's Pangong Lake changes colour up to seven times a day.",
];

const IMGS = [destKerala, destLadakh, destRaj, destHimalaya];

function Processing() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const [factIdx, setFactIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => setI((v) => (v < STEPS.length ? v + 1 : v)), 2400);
    const factTimer = setInterval(() => setFactIdx((v) => (v + 1) % FACTS.length), 3200);
    const imgTimer = setInterval(() => setImgIdx((v) => (v + 1) % IMGS.length), 2800);
    const done = setTimeout(() => navigate({ to: "/ai-planner/itinerary" }), STEPS.length * 2400 + 500);
    return () => {
      clearInterval(stepTimer);
      clearInterval(factTimer);
      clearInterval(imgTimer);
      clearTimeout(done);
    };
  }, [navigate]);

  const progress = Math.min(100, Math.round((i / STEPS.length) * 100));

  return (
    <PageShell>
      <section className="relative isolate min-h-[calc(100vh-160px)] overflow-hidden bg-charcoal text-primary-foreground">
        {IMGS.map((src, k) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className={
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 " +
              (k === imgIdx ? "opacity-40" : "opacity-0")
            }
          />
        ))}
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[calc(100vh-160px)] max-w-3xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Paryatan AI is thinking
            </span>
            <h1 className="text-hero mt-4">Crafting a trip made just for you.</h1>
            <p className="mt-3 text-primary-foreground/80">Usually takes 15–30 seconds.</p>
          </div>

          <div className="surface-card mt-10 bg-background/95 p-6 text-foreground shadow-xl backdrop-blur">
            <Progress value={progress} className="h-2" />
            <ul className="mt-6 space-y-3">
              {STEPS.map((s, k) => {
                const done = k < i;
                const active = k === i;
                return (
                  <li key={s.label} className="flex items-center gap-3">
                    <span
                      className={
                        "grid h-8 w-8 place-items-center rounded-full transition-colors " +
                        (done
                          ? "bg-emerald-600 text-primary-foreground"
                          : active
                            ? "bg-primary text-primary-foreground animate-pulse"
                            : "bg-sand-deep text-muted-foreground")
                      }
                    >
                      {done ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                    </span>
                    <span
                      className={
                        "text-sm " +
                        (done ? "text-muted-foreground line-through" : active ? "font-semibold" : "text-muted-foreground")
                      }
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-8 text-center text-sm text-primary-foreground/80 animate-fade-in" key={factIdx}>
            Did you know? {FACTS[factIdx]}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
