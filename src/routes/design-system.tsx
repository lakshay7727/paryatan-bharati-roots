import { createFileRoute } from "@tanstack/react-router";
import { Search, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { DestinationCard } from "@/components/site/DestinationCard";
import destKerala from "@/assets/dest-kerala.jpg";

export const Route = createFileRoute("/design-system")({
  head: () => ({
    meta: [
      { title: "Design System — Paryatan Bharati" },
      {
        name: "description",
        content:
          "The Paryatan Bharati design language: color tokens, typography, spacing, elevation and component library.",
      },
    ],
  }),
  component: DesignSystem,
});

const ramps: { name: string; token: string; classes: string[] }[] = [
  {
    name: "Royal Blue — Primary",
    token: "royal",
    classes: [
      "bg-royal-50",
      "bg-royal-100",
      "bg-royal-200",
      "bg-royal-300",
      "bg-royal-400",
      "bg-royal-500",
      "bg-royal-600",
      "bg-royal-700",
      "bg-royal-800",
      "bg-royal-900",
    ],
  },
  {
    name: "Emerald — Secondary",
    token: "emerald",
    classes: [
      "bg-emerald-50",
      "bg-emerald-100",
      "bg-emerald-200",
      "bg-emerald-300",
      "bg-emerald-400",
      "bg-emerald-500",
      "bg-emerald-600",
      "bg-emerald-700",
      "bg-emerald-800",
      "bg-emerald-900",
    ],
  },
  {
    name: "Sunset Orange — Accent",
    token: "sunset",
    classes: [
      "bg-sunset-50",
      "bg-sunset-100",
      "bg-sunset-200",
      "bg-sunset-300",
      "bg-sunset-400",
      "bg-sunset-500",
      "bg-sunset-600",
      "bg-sunset-700",
      "bg-sunset-800",
      "bg-sunset-900",
    ],
  },
];

const spacing = [4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128];
const radii = [
  { label: "4", cls: "rounded-xs" },
  { label: "8", cls: "rounded-sm" },
  { label: "12", cls: "rounded-md" },
  { label: "16", cls: "rounded-lg" },
  { label: "24", cls: "rounded-xl" },
  { label: "32", cls: "rounded-2xl" },
];
const shadows = [
  { label: "XS", cls: "shadow-xs" },
  { label: "SM", cls: "shadow-sm" },
  { label: "MD", cls: "shadow-md" },
  { label: "LG", cls: "shadow-lg" },
  { label: "XL", cls: "shadow-xl" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-border py-14">
      <h2 className="text-h2 text-foreground">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function DesignSystem() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="border-b border-border py-14">
          <p className="text-overline text-accent">Foundation</p>
          <h1 className="text-hero mt-3 text-foreground">Paryatan Bharati Design System</h1>
          <p className="text-body-lg mt-4 max-w-2xl text-muted-foreground">
            The single source of truth for every screen. Colors, typography, spacing, elevation and
            components below are the only building blocks allowed across the product.
          </p>
        </header>

        <Section title="Color System">
          <div className="space-y-8">
            {ramps.map((ramp) => (
              <div key={ramp.token}>
                <h3 className="text-h4 text-foreground">{ramp.name}</h3>
                <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
                  {ramp.classes.map((cls, i) => (
                    <div key={cls}>
                      <div className={`h-14 rounded-sm ${cls}`} />
                      <p className="mt-1.5 text-center text-xs text-muted-foreground">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 className="text-h4 text-foreground">Status</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <Badge className="bg-success text-success-foreground hover:bg-success">Success</Badge>
                <Badge className="bg-warning text-warning-foreground hover:bg-warning">Warning</Badge>
                <Badge variant="destructive">Danger</Badge>
                <Badge className="bg-info text-info-foreground hover:bg-info">Info</Badge>
                <Badge variant="outline" className="opacity-50">
                  Disabled
                </Badge>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Typography">
          <div className="space-y-6">
            <p className="text-display text-foreground">Display — Incredible India</p>
            <p className="text-hero text-foreground">Hero — Discover heritage</p>
            <p className="text-h1 text-foreground">Heading 1 — Poppins Semibold</p>
            <p className="text-h2 text-foreground">Heading 2 — Section titles</p>
            <p className="text-h3 text-foreground">Heading 3 — Card titles</p>
            <p className="text-h4 text-foreground">Heading 4 — Sub-sections</p>
            <p className="text-body-lg text-foreground">
              Body Large — Inter, 18px, relaxed line height for editorial storytelling.
            </p>
            <p className="text-base text-foreground">
              Body Medium — Inter 16px, the default reading size across the product.
            </p>
            <p className="text-sm text-muted-foreground">
              Body Small — 14px, secondary information and card metadata.
            </p>
            <p className="text-xs text-muted-foreground">Caption — 12px, timestamps and footnotes.</p>
            <p className="text-overline text-secondary">Overline — Section eyebrows</p>
          </div>
        </Section>

        <Section title="Spacing — 8pt System">
          <div className="space-y-2">
            {spacing.map((s) => (
              <div key={s} className="flex items-center gap-4">
                <span className="w-10 text-right text-xs text-muted-foreground">{s}</span>
                <div className="h-4 rounded-xs bg-royal-300" style={{ width: s }} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Border Radius & Elevation">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-wrap gap-4">
              {radii.map((r) => (
                <div key={r.label} className="text-center">
                  <div className={`h-20 w-20 border border-border bg-royal-100 ${r.cls}`} />
                  <p className="mt-2 text-xs text-muted-foreground">{r.label}px</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-6">
              {shadows.map((s) => (
                <div key={s.label} className="text-center">
                  <div className={`h-20 w-20 rounded-md bg-card ${s.cls}`} />
                  <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="hero">Hero CTA</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Text link</Button>
            <Button variant="destructive">Danger</Button>
            <Button variant="outline" size="icon" aria-label="Delete">
              <Trash2 />
            </Button>
            <Button disabled>
              <Loader2 className="animate-spin" />
              Loading
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl" variant="hero">
              Extra Large
            </Button>
          </div>
        </Section>

        <Section title="Inputs & Forms">
          <div className="grid max-w-2xl gap-6">
            <div className="grid gap-2">
              <Label htmlFor="ds-search">Search destinations</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="ds-search" placeholder="Try 'Hampi' or 'Kerala backwaters'" className="pl-9" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ds-name">Full name</Label>
              <Input id="ds-name" placeholder="Aarav Sharma" />
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <label className="flex items-center gap-2 text-sm text-foreground">
                <Checkbox id="ds-check" /> Include heritage sites
              </label>
              <label className="flex items-center gap-2 text-sm text-foreground">
                <Switch id="ds-switch" /> Travel alerts
              </label>
            </div>
          </div>
        </Section>

        <Section title="Cards & Feedback">
          <div className="grid gap-8 md:grid-cols-[320px_1fr]">
            <DestinationCard
              image={destKerala}
              title="Kerala Backwaters"
              region="Alleppey, Kerala"
              category="Nature"
              rating={4.9}
            />
            <div className="space-y-4">
              <Alert>
                <AlertTitle>Booking confirmed</AlertTitle>
                <AlertDescription>
                  Your houseboat stay in Alleppey is confirmed for 12–14 March.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTitle>Payment failed</AlertTitle>
                <AlertDescription>Please retry with a different payment method.</AlertDescription>
              </Alert>
              <div className="surface-card space-y-3 p-5">
                <p className="text-sm font-medium text-muted-foreground">Skeleton loading</p>
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-24 w-full rounded-md" />
              </div>
            </div>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
