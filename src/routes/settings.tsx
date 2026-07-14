import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Globe, Link2, Lock, Moon, ShieldAlert, Trash2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings · Paryatan Bharati" }, { name: "robots", content: "noindex" }] }),
  component: Settings,
});

function Settings() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Preferences"
        title="Settings"
        description="Personalise language, privacy, notifications and linked accounts."
        crumbs={[{ label: "Home", to: "/" }, { label: "Dashboard", to: "/dashboard" }, { label: "Settings" }]}
      />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <Card icon={Globe} title="Language & region">
          <Row label="Language">
            <Select defaultValue="en"><SelectTrigger className="w-56"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem><SelectItem value="hi">हिन्दी</SelectItem>
                <SelectItem value="ta">தமிழ்</SelectItem><SelectItem value="bn">বাংলা</SelectItem>
              </SelectContent>
            </Select>
          </Row>
          <Row label="Currency">
            <Select defaultValue="inr"><SelectTrigger className="w-56"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="inr">₹ INR</SelectItem><SelectItem value="usd">$ USD</SelectItem><SelectItem value="eur">€ EUR</SelectItem></SelectContent>
            </Select>
          </Row>
        </Card>

        <Card icon={Moon} title="Appearance">
          <Row label="Dark mode" hint="Automatically follows your system by default."><Switch /></Row>
          <Row label="Reduce motion"><Switch /></Row>
        </Card>

        <Card icon={Bell} title="Notifications">
          {[
            { l: "Booking updates", d: true }, { l: "AI trip suggestions", d: true },
            { l: "Government schemes & offers", d: false }, { l: "Training reminders", d: true },
            { l: "Marketing & newsletters", d: false },
          ].map((n) => (<Row key={n.l} label={n.l}><Switch defaultChecked={n.d} /></Row>))}
        </Card>

        <Card icon={Lock} title="Security">
          <Row label="Two-factor authentication" hint="Add an extra layer via SMS OTP."><Switch defaultChecked /></Row>
          <Row label="Change password">
            <Button asChild variant="outline"><Link to="/auth/reset">Update</Link></Button>
          </Row>
          <Row label="Active sessions" hint="Sign out from other devices.">
            <Button variant="outline">Manage</Button>
          </Row>
        </Card>

        <Card icon={Link2} title="Linked accounts">
          {[
            { p: "Google", c: true }, { p: "Apple", c: false }, { p: "Facebook", c: false },
          ].map((p) => (
            <Row key={p.p} label={p.p}>
              <Button variant={p.c ? "outline" : "hero"} size="sm">{p.c ? "Disconnect" : "Connect"}</Button>
            </Row>
          ))}
        </Card>

        <Card icon={ShieldAlert} title="Privacy">
          <Row label="Personalised ads"><Switch /></Row>
          <Row label="Share trip stats with community"><Switch defaultChecked /></Row>
          <Row label="Download your data">
            <Button variant="outline">Request export</Button>
          </Row>
        </Card>

        <div className="surface-card border-destructive/40 p-6">
          <div className="flex items-start gap-3">
            <Trash2 className="mt-1 h-5 w-5 text-destructive" />
            <div className="flex-1">
              <h3 className="text-h4 text-destructive">Delete account</h3>
              <p className="mt-1 text-sm text-muted-foreground">This permanently removes your profile, bookings history and rewards. This action cannot be undone.</p>
              <div className="mt-4 flex gap-2">
                <Input placeholder='Type "DELETE" to confirm' className="max-w-xs" />
                <Button variant="destructive">Delete account</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Card({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="surface-card p-6">
      <div className="flex items-center gap-2"><Icon className="h-5 w-5 text-primary" /><h2 className="text-h4">{title}</h2></div>
      <Separator className="my-4" />
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div><Label className="text-sm font-medium">{label}</Label>{hint && <p className="text-xs text-muted-foreground">{hint}</p>}</div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}
