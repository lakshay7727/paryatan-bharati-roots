import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, CheckCircle2, IndianRupee, Info } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/cancel/$id")({
  head: () => ({ meta: [{ title: "Cancel booking · Paryatan Bharati" }] }),
  component: Cancel,
});

function Cancel() {
  const { id } = Route.useParams();
  const [done, setDone] = useState(false);
  const [reason, setReason] = useState("plans-changed");

  return (
    <PageShell>
      <PageHero
        eyebrow="Cancellation"
        title="We're sorry to see this trip go"
        description="Review the refund breakdown before confirming — no charges until you approve."
        crumbs={[{ label: "Home", to: "/" }, { label: "Bookings", to: "/bookings" }, { label: id }, { label: "Cancel" }]}
      />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {done ? (
          <div className="surface-card p-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="text-hero mt-4">Cancellation confirmed</h2>
            <p className="mt-2 text-muted-foreground">
              A refund of <span className="font-semibold text-foreground">₹41,918</span> will reach your original payment method within 5–7 working days.
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <Button asChild variant="hero"><Link to="/bookings">Back to bookings</Link></Button>
              <Button asChild variant="outline"><Link to="/ai-planner">Plan another trip</Link></Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <div className="surface-card p-6 sm:p-8">
              <h2 className="text-h2">Reason for cancellation</h2>
              <p className="mt-1 text-sm text-muted-foreground">This helps us improve — completely optional.</p>
              <RadioGroup value={reason} onValueChange={setReason} className="mt-6 space-y-2">
                {[
                  { v: "plans-changed", l: "Plans changed" },
                  { v: "found-better", l: "Found a better package" },
                  { v: "medical", l: "Medical / emergency" },
                  { v: "cost", l: "Cost is too high" },
                  { v: "other", l: "Other" },
                ].map((r) => (
                  <label key={r.v} className="surface-card flex cursor-pointer items-center gap-3 p-4">
                    <RadioGroupItem value={r.v} id={r.v} /> <Label htmlFor={r.v}>{r.l}</Label>
                  </label>
                ))}
              </RadioGroup>
              <div className="mt-6">
                <Label htmlFor="notes">Tell us more (optional)</Label>
                <Textarea id="notes" className="mt-1.5" rows={4} placeholder="Anything we could have done differently?" />
              </div>

              <div className="mt-8 rounded-md border border-accent/40 bg-sunset-50 p-4 text-sm">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Info className="h-4 w-4 text-accent" /> Cancellation policy
                </div>
                <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                  <li>100% refund up to 48 hours before departure</li>
                  <li>50% refund up to 24 hours before departure</li>
                  <li>Non-refundable within 24 hours</li>
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Button asChild variant="ghost"><Link to="/trips/$id" params={{ id }}><ArrowLeft className="h-4 w-4" /> Keep my trip</Link></Button>
                <Button variant="hero" onClick={() => setDone(true)}>
                  <AlertTriangle className="h-4 w-4" /> Confirm cancellation
                </Button>
              </div>
            </div>

            <aside>
              <div className="surface-card p-6">
                <h3 className="text-h4 flex items-center gap-2"><IndianRupee className="h-4 w-4 text-primary" /> Refund breakdown</h3>
                <Separator className="my-4" />
                <Row k="Paid amount" v="₹53,846" />
                <Row k="Cancellation charge (20%)" v="− ₹10,769" tone="neg" />
                <Row k="Non-refundable convenience fee" v="− ₹1,159" tone="neg" />
                <Separator className="my-3" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Refund to you</span>
                  <span className="font-display text-2xl font-semibold text-emerald-700">₹41,918</span>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Credited to original payment method in 5–7 working days.</p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </PageShell>
  );
}

function Row({ k, v, tone }: { k: string; v: string; tone?: "neg" }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-muted-foreground">{k}</span>
      <span className={"font-medium " + (tone === "neg" ? "text-destructive" : "")}>{v}</span>
    </div>
  );
}
