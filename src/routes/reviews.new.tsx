import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, CheckCircle2, Star } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reviews/new")({
  head: () => ({ meta: [{ title: "Rate your trip · Paryatan Bharati" }] }),
  component: NewReview,
});

const CATEGORIES = ["Destination", "Hotel", "Guide", "Food", "Overall experience"];

function NewReview() {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Reviews"
        title="How was your trip to Kerala?"
        description="Your honest feedback helps other travellers plan smarter journeys."
        crumbs={[{ label: "Home", to: "/" }, { label: "Reviews" }, { label: "New" }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="surface-card p-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="text-hero mt-4">Thank you</h2>
            <p className="mt-2 text-muted-foreground">Your review is live and will help fellow travellers.</p>
            <Button asChild variant="hero" className="mt-6"><Link to="/bookings">Back to bookings</Link></Button>
          </div>
        ) : (
          <div className="surface-card p-6 sm:p-10">
            {CATEGORIES.map((c) => (
              <div key={c} className="flex items-center justify-between border-b border-border py-4 last:border-0">
                <span className="font-medium">{c}</span>
                <Stars value={ratings[c] ?? 0} onChange={(v) => setRatings({ ...ratings, [c]: v })} />
              </div>
            ))}

            <Separator className="my-6" />
            <div>
              <Label htmlFor="story">Your story</Label>
              <Textarea id="story" className="mt-1.5" rows={6} placeholder="What did you love? Anything future travellers should know?" />
            </div>

            <div className="mt-6">
              <Label>Add photos</Label>
              <div className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <button key={i} className="grid aspect-square place-items-center rounded-md border-2 border-dashed border-border text-muted-foreground hover:border-primary hover:text-primary">
                    <Camera className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Button asChild variant="ghost"><Link to="/bookings">Cancel</Link></Button>
              <Button variant="hero" onClick={() => setSubmitted(true)}>Submit review</Button>
            </div>
          </div>
        )}
      </section>
    </PageShell>
  );
}

function Stars({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} aria-label={`${n} star`} onClick={() => onChange(n)}>
          <Star className={cn("h-6 w-6 transition-colors", n <= value ? "fill-accent text-accent" : "text-muted-foreground")} />
        </button>
      ))}
    </div>
  );
}
