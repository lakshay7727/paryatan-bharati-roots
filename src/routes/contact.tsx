import { createFileRoute } from "@tanstack/react-router";
import { LifeBuoy, Mail, MapPin, MessageCircle, Phone, Send, Shield } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import destVaranasi from "@/assets/dest-varanasi.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Paryatan Bharati" },
      { name: "description", content: "Talk to our travel planners, get support, or reach the 24×7 emergency travel helpline." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Say hello"
        title="We're here — before, during and after your trip"
        description="Reach a planner, request a callback, or use the emergency travel helpline anytime."
        image={destVaranasi}
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, t: "Call", d: "1800-11-1363", s: "Toll-free · 24×7" },
            { icon: Mail, t: "Email", d: "hello@paryatanbharati.in", s: "Reply within 4 hours" },
            { icon: MessageCircle, t: "Chat", d: "Start a conversation", s: "9 AM – 11 PM IST" },
            { icon: LifeBuoy, t: "Emergency", d: "+91 11 4041 4000", s: "24×7 travel helpline" },
          ].map((c) => (
            <div key={c.t} className="surface-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-royal-50 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <p className="text-overline mt-4 text-muted-foreground">{c.t}</p>
              <p className="mt-1 text-h4">{c.d}</p>
              <p className="text-xs text-muted-foreground">{c.s}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="surface-card p-8">
            <h2 className="text-h2">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We usually respond within a few working hours.</p>
            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <FieldInput id="name" label="Full name" />
              <FieldInput id="email" label="Email" type="email" />
              <FieldInput id="phone" label="Phone" className="sm:col-span-2" />
              <FieldInput id="subject" label="Subject" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" className="mt-1.5 min-h-[140px]" />
              </div>
              <Button variant="hero" className="sm:col-span-2" type="button">
                <Send className="h-4 w-4" /> Send message
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="surface-card overflow-hidden">
              <div className="grid aspect-[16/10] place-items-center bg-sand-deep text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-6 w-6" />
                  Interactive map · Transport Bhawan
                </div>
              </div>
              <div className="p-6">
                <p className="text-h4">Head office</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Transport Bhawan, Parliament Street, New Delhi 110001
                </p>
              </div>
            </div>
            <div className="surface-card flex items-start gap-4 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-emerald-50 text-emerald-700"><Shield className="h-5 w-5" /></span>
              <div>
                <p className="text-h4">Verified operators</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Every listed operator on Paryatan Bharati is vetted by state tourism boards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FieldInput({ id, label, className, ...rest }: { id: string; label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} className="mt-1.5" {...rest} />
    </div>
  );
}
