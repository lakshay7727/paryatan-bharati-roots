import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, CheckCircle2, ChevronLeft, ChevronRight, CreditCard, Sparkles } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [{ title: "Book your trip · Paryatan Bharati" }] }),
  component: BookingFlow,
});

const STEPS = ["Package", "Travellers", "Add-ons", "Payment", "Confirmed"];

function BookingFlow() {
  const [step, setStep] = useState(1);
  const isFinal = step === STEPS.length;

  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Stepper */}
        <ol className="flex flex-wrap items-center gap-2">
          {STEPS.map((label, i) => {
            const n = i + 1;
            const done = n < step;
            const active = n === step;
            return (
              <li key={label} className="flex items-center gap-2">
                <div
                  className={
                    "grid h-8 w-8 place-items-center rounded-full text-xs font-semibold " +
                    (done
                      ? "bg-emerald-600 text-primary-foreground"
                      : active
                        ? "bg-primary text-primary-foreground"
                        : "bg-sand-deep text-muted-foreground")
                  }
                >
                  {done ? <Check className="h-4 w-4" /> : n}
                </div>
                <span className={"text-sm " + (active ? "font-semibold text-foreground" : "text-muted-foreground")}>
                  {label}
                </span>
                {n < STEPS.length && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
              </li>
            );
          })}
        </ol>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="surface-card p-6 sm:p-8">
            {step === 1 && (
              <StepBlock title="Choose your package" desc="Confirm the base package and dates.">
                <div className="grid gap-3">
                  {["Golden Triangle · 5D", "Kerala Backwaters · 6D", "Ladakh Expedition · 8D"].map((p, i) => (
                    <label key={p} className="surface-card flex cursor-pointer items-center justify-between p-4">
                      <span className="flex items-center gap-3">
                        <Checkbox defaultChecked={i === 0} /> <span className="font-medium">{p}</span>
                      </span>
                      <span className="font-display text-lg font-semibold">₹{[24999, 32999, 48999][i].toLocaleString("en-IN")}</span>
                    </label>
                  ))}
                </div>
              </StepBlock>
            )}
            {step === 2 && (
              <StepBlock title="Traveller details" desc="For all guests joining this trip.">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FieldInput id="name" label="Full name" placeholder="As per government ID" />
                  <FieldInput id="dob" label="Date of birth" type="date" />
                  <FieldInput id="email" label="Email" type="email" />
                  <FieldInput id="phone" label="Phone" />
                </div>
              </StepBlock>
            )}
            {step === 3 && (
              <StepBlock title="Add-ons" desc="Enhance your journey.">
                {[
                  { t: "Airport pickup & drop", p: 1499 },
                  { t: "Certified local guide", p: 2999 },
                  { t: "Travel insurance", p: 799 },
                  { t: "Photography package", p: 4999 },
                ].map((a) => (
                  <label key={a.t} className="flex items-center justify-between border-b border-border py-3 last:border-0">
                    <span className="flex items-center gap-3"><Checkbox /> {a.t}</span>
                    <span className="font-medium">+ ₹{a.p.toLocaleString("en-IN")}</span>
                  </label>
                ))}
              </StepBlock>
            )}
            {step === 4 && (
              <StepBlock title="Payment" desc="256-bit secure. UPI, cards, netbanking supported.">
                <div className="grid gap-3">
                  {[
                    { l: "UPI · Any app", d: "PhonePe · GPay · Paytm" },
                    { l: "Credit / Debit card", d: "Visa · Mastercard · RuPay" },
                    { l: "Netbanking", d: "All major banks" },
                    { l: "EMI", d: "3, 6, 12 months" },
                  ].map((m, i) => (
                    <label key={m.l} className="surface-card flex cursor-pointer items-center gap-3 p-4">
                      <input type="radio" name="pay" defaultChecked={i === 0} />
                      <span className="grid h-9 w-9 place-items-center rounded-md bg-royal-50 text-primary">
                        <CreditCard className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-medium">{m.l}</span>
                        <span className="block text-xs text-muted-foreground">{m.d}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </StepBlock>
            )}
            {isFinal && (
              <div className="py-6 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-hero mt-4">Booking confirmed</h2>
                <p className="mt-2 text-muted-foreground">
                  A confirmation and e-ticket has been sent to your email.
                </p>
                <p className="mt-4 font-mono text-sm">Booking ID · <span className="font-semibold">PB-26JX4291</span></p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <Button variant="hero">Download ticket</Button>
                  <Button variant="outline">View invoice</Button>
                </div>
              </div>
            )}

            {!isFinal && (
              <div className="mt-8 flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button variant="hero" onClick={() => setStep((s) => Math.min(STEPS.length, s + 1))}>
                  {step === STEPS.length - 1 ? "Pay & confirm" : "Continue"} <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="surface-card p-6">
              <h3 className="text-h4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" /> Trip summary
              </h3>
              <Separator className="my-4" />
              <SummaryRow k="Package" v="Golden Triangle · 5D" />
              <SummaryRow k="Travellers" v="2 adults" />
              <SummaryRow k="Base price" v="₹49,998" />
              <SummaryRow k="Add-ons" v="₹1,499" />
              <SummaryRow k="Taxes & fees" v="₹2,349" />
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-display text-2xl font-semibold">₹53,846</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function StepBlock({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-h2">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function FieldInput({ id, label, ...rest }: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} className="mt-1.5" {...rest} />
    </div>
  );
}

function SummaryRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}
