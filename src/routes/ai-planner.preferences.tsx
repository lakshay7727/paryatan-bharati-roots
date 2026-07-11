import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Bike,
  Building2,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  Flame,
  GraduationCap,
  Heart,
  Home,
  Landmark,
  Leaf,
  MapPin,
  Minus,
  Mountain,
  Plane,
  Plus,
  Sparkles,
  Tent,
  TrainFront,
  User,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ai-planner/preferences")({
  head: () => ({ meta: [{ title: "Travel preferences · AI Planner · Paryatan Bharati" }] }),
  component: PreferencesWizard,
});

const STEPS = ["Destination", "Dates & budget", "Travellers", "Style", "Transport & stay", "Extras"];

function PreferencesWizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [budget, setBudget] = useState([45000]);
  const [pax, setPax] = useState({ adults: 2, children: 0, seniors: 0 });
  const [styles, setStyles] = useState<string[]>(["Culture"]);
  const [transport, setTransport] = useState("No preference");
  const [stay, setStay] = useState("Hotel");

  const toggle = (arr: string[], v: string, set: (a: string[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-overline text-primary">
          <Sparkles className="h-4 w-4" /> AI Planner
        </div>
        <h1 className="text-hero mt-2">Let's plan your journey</h1>
        <p className="mt-2 text-muted-foreground">Step {step + 1} of {STEPS.length} · {STEPS[step]}</p>

        {/* Progress */}
        <div className="mt-6 flex gap-1.5">
          {STEPS.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors",
                i <= step ? "bg-primary" : "bg-sand-deep",
              )}
            />
          ))}
        </div>

        <div className="surface-card mt-8 animate-fade-in p-6 sm:p-10">
          {step === 0 && (
            <Block title="Where would you like to explore?" desc="Pick a state, city or leave it to us.">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <Label htmlFor="dest">Destination</Label>
                  <Input id="dest" placeholder="e.g. Kerala, Ladakh, Jaipur…" className="mt-1.5" />
                </div>
                <div className="self-end">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Sparkles className="h-4 w-4" /> Surprise me
                  </Button>
                </div>
              </div>
              <p className="text-overline mt-6 text-muted-foreground">Trending</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Kerala", "Ladakh", "Rajasthan", "Himachal", "Andaman", "Varanasi", "Meghalaya"].map((d) => (
                  <button key={d} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm hover:border-primary hover:text-primary">
                    <MapPin className="mr-1 inline h-3 w-3" /> {d}
                  </button>
                ))}
              </div>
            </Block>
          )}

          {step === 1 && (
            <Block title="Dates & budget" desc="Approximate is fine — we'll fine-tune later.">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="start">Start date</Label>
                  <Input id="start" type="date" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="end">End date</Label>
                  <Input id="end" type="date" className="mt-1.5" />
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-1.5"><Wallet className="h-4 w-4 text-primary" /> Budget per person</Label>
                  <span className="font-display text-xl font-semibold">₹{budget[0].toLocaleString("en-IN")}</span>
                </div>
                <Slider value={budget} onValueChange={setBudget} min={5000} max={200000} step={1000} className="mt-4" />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>₹5k</span><span>₹2L+</span>
                </div>
              </div>
            </Block>
          )}

          {step === 2 && (
            <Block title="Who's travelling?" desc="Helps us pick right-sized rooms and safe activities.">
              {(["adults", "children", "seniors"] as const).map((k) => (
                <div key={k} className="flex items-center justify-between border-b border-border py-4 last:border-0">
                  <div>
                    <p className="font-medium capitalize">{k}</p>
                    <p className="text-xs text-muted-foreground">
                      {k === "adults" && "12+ years"}
                      {k === "children" && "2 – 11 years"}
                      {k === "seniors" && "60+ years · barrier-free options"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" onClick={() => setPax({ ...pax, [k]: Math.max(0, pax[k] - 1) })}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center font-semibold">{pax[k]}</span>
                    <Button variant="outline" size="icon" onClick={() => setPax({ ...pax, [k]: pax[k] + 1 })}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </Block>
          )}

          {step === 3 && (
            <Block title="Travel style" desc="Pick as many as you like.">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {[
                  { l: "Adventure", i: Mountain },
                  { l: "Luxury", i: Sparkles },
                  { l: "Family", i: Heart },
                  { l: "Student", i: GraduationCap },
                  { l: "Solo", i: User },
                  { l: "Religious", i: Landmark },
                  { l: "Photography", i: Camera },
                  { l: "Food", i: UtensilsCrossed },
                  { l: "Nature", i: Leaf },
                  { l: "Culture", i: Compass },
                ].map(({ l, i: Icon }) => {
                  const on = styles.includes(l);
                  return (
                    <button
                      key={l}
                      onClick={() => toggle(styles, l, setStyles)}
                      className={cn(
                        "surface-card hover-lift flex flex-col items-center gap-2 p-4 text-sm transition",
                        on && "border-primary bg-royal-50 text-primary",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {l}
                      {on && <Check className="h-3 w-3" />}
                    </button>
                  );
                })}
              </div>
            </Block>
          )}

          {step === 4 && (
            <Block title="Transport & stay" desc="We'll optimize based on distance and comfort.">
              <p className="text-overline text-muted-foreground">Preferred transport</p>
              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { l: "Flight", i: Plane },
                  { l: "Train", i: TrainFront },
                  { l: "Road", i: Bike },
                  { l: "No preference", i: Compass },
                ].map(({ l, i: Icon }) => (
                  <button
                    key={l}
                    onClick={() => setTransport(l)}
                    className={cn(
                      "surface-card hover-lift flex flex-col items-center gap-2 p-4 text-sm",
                      transport === l && "border-primary bg-royal-50 text-primary",
                    )}
                  >
                    <Icon className="h-5 w-5" /> {l}
                  </button>
                ))}
              </div>
              <p className="text-overline mt-8 text-muted-foreground">Accommodation</p>
              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  { l: "Hotel", i: Building2 },
                  { l: "Resort", i: Sparkles },
                  { l: "Hostel", i: Home },
                  { l: "Homestay", i: Heart },
                  { l: "Camping", i: Tent },
                ].map(({ l, i: Icon }) => (
                  <button
                    key={l}
                    onClick={() => setStay(l)}
                    className={cn(
                      "surface-card hover-lift flex flex-col items-center gap-2 p-4 text-sm",
                      stay === l && "border-primary bg-royal-50 text-primary",
                    )}
                  >
                    <Icon className="h-5 w-5" /> {l}
                  </button>
                ))}
              </div>
            </Block>
          )}

          {step === 5 && (
            <Block title="Anything special?" desc="Accessibility, dietary or interests — we'll factor it in.">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Dietary preference</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Vegetarian", "Jain", "Vegan", "Halal", "No restriction"].map((d) => (
                      <button key={d} className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary">
                        <Flame className="mr-1 inline h-3 w-3" /> {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Accessibility</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Wheelchair", "Step-free stays", "Elder friendly", "Slow pace"].map((d) => (
                      <button key={d} className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary">
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Label htmlFor="notes">Special interests or notes</Label>
                <Textarea id="notes" placeholder="I want to see a Kathakali show, avoid crowded temples on weekends…" className="mt-1.5" rows={4} />
              </div>
            </Block>
          )}

          <Separator className="my-8" />
          <div className="flex items-center justify-between">
            <Button variant="ghost" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
              <ChevronLeft className="h-4 w-4" /> Back
            </Button>
            {step < STEPS.length - 1 ? (
              <Button variant="hero" onClick={() => setStep((s) => s + 1)}>
                Continue <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button variant="hero" onClick={() => navigate({ to: "/ai-planner/processing" })}>
                <Sparkles className="h-4 w-4" /> Generate itinerary
              </Button>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Block({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-h2">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}
