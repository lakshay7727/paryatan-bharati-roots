import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Globe, Palette, Users, Shield, KeyRound, Mail, MessageSquare, Database, Share2, Search, Cloud, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
});

const tabs = [
  { id: "general", label: "Website", icon: Globe },
  { id: "theme", label: "Theme", icon: Palette },
  { id: "team", label: "Users & Roles", icon: Users },
  { id: "security", label: "Security", icon: Shield },
  { id: "api", label: "API Keys", icon: KeyRound },
  { id: "email", label: "Email", icon: Mail },
  { id: "sms", label: "SMS", icon: MessageSquare },
  { id: "storage", label: "Storage", icon: Database },
  { id: "social", label: "Social", icon: Share2 },
  { id: "seo", label: "SEO", icon: Search },
  { id: "backup", label: "Backup", icon: Cloud },
  { id: "webhooks", label: "Automations", icon: Zap },
];

function SettingsPage() {
  const [active, setActive] = useState("general");
  return (
    <AdminShell
      title="Settings"
      breadcrumbs={[{ label: "Settings" }]}
      actions={<Button variant="hero" size="sm">Save changes</Button>}
    >
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="surface-card p-3">
          <nav className="space-y-0.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm transition-colors",
                  active === t.id ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:bg-muted",
                )}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="space-y-5">
          <section className="surface-card p-6">
            <div className="text-h4 font-display">Website settings</div>
            <p className="text-sm text-muted-foreground">Public identity of Paryatan Bharati.</p>
            <Separator className="my-5" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Brand name"><Input defaultValue="Paryatan Bharati" /></Field>
              <Field label="Tagline"><Input defaultValue="Incredible India, Digitally" /></Field>
              <Field label="Primary domain"><Input defaultValue="paryatanbharati.in" /></Field>
              <Field label="Support email"><Input defaultValue="support@paryatanbharati.in" /></Field>
              <div className="md:col-span-2">
                <Field label="Meta description">
                  <Textarea defaultValue="Discover India's soul — heritage, temples, adventure, culture and cuisine — with an AI-powered planner and trusted government tourism ecosystem." />
                </Field>
              </div>
            </div>
          </section>

          <section className="surface-card p-6">
            <div className="text-h4 font-display">Preferences</div>
            <Separator className="my-5" />
            <div className="space-y-4">
              <Toggle title="Enable dark mode for admins" desc="Auto-syncs with each admin's OS preference." defaultOn />
              <Toggle title="Require MFA for all admins" desc="TOTP via Google Authenticator or DigiLocker." defaultOn />
              <Toggle title="Show government schemes on homepage" desc="Featured strip above testimonials." defaultOn />
              <Toggle title="AI Planner beta" desc="Roll out to 100% of authenticated users." defaultOn={false} />
              <Toggle title="Auto-approve 5★ reviews" desc="Bypasses moderation queue for verified users." defaultOn={false} />
            </div>
          </section>

          <section className="surface-card p-6">
            <div className="text-h4 font-display">API keys</div>
            <p className="text-sm text-muted-foreground">Rotate keys periodically. Never share them publicly.</p>
            <Separator className="my-5" />
            <div className="space-y-3">
              {[
                { label: "Public site key", value: "pb_pub_9f•••••••••••••4d21" },
                { label: "Server secret", value: "pb_sec_a8•••••••••••••ff09" },
                { label: "Maps API key", value: "AIza•••••••••••••••2fXk" },
              ].map((k) => (
                <div key={k.label} className="flex items-center gap-3 rounded-md border border-border bg-muted/40 p-3">
                  <KeyRound className="h-4 w-4 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold">{k.label}</div>
                    <div className="truncate font-mono text-xs text-muted-foreground">{k.value}</div>
                  </div>
                  <Button variant="outline" size="sm">Rotate</Button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AdminShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-1.5 block text-xs font-semibold text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function Toggle({ title, desc, defaultOn }: { title: string; desc: string; defaultOn: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-border p-4">
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      <Switch defaultChecked={defaultOn} />
    </div>
  );
}
