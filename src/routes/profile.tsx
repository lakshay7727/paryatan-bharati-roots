import { createFileRoute } from "@tanstack/react-router";
import { Award, Bell, Camera, CreditCard, Heart, MapPin, Settings, Sparkles, User } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile · Paryatan Bharati" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <PageShell>
      {/* Cover */}
      <section className="relative">
        <div className="relative h-56 overflow-hidden bg-gradient-royal">
          <img src={destKerala} alt="" className="h-full w-full object-cover opacity-40" />
        </div>
        <div className="mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="surface-card flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center">
            <div className="relative">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-sunset font-display text-3xl font-semibold text-accent-foreground shadow-md">
                AS
              </div>
              <button
                aria-label="Change photo"
                className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-hero">Ananya Sharma</h1>
              <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Bengaluru, India · Member since 2024
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">Verified traveller</Badge>
                <Badge className="bg-royal-50 text-primary hover:bg-royal-50">Gold member</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline"><Settings className="h-4 w-4" /> Settings</Button>
              <Button variant="hero">Edit profile</Button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <Stat icon={MapPin} label="Trips" value="14" />
            <Stat icon={Heart} label="Saved" value="42" />
            <Stat icon={Award} label="Certificates" value="3" />
            <Stat icon={Sparkles} label="AI itineraries" value="7" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tabs defaultValue="overview">
          <TabsList className="flex-wrap">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trips">Upcoming trips</TabsTrigger>
            <TabsTrigger value="preferences">Travel preferences</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
              <div className="space-y-6">
                <Panel title="Personal information">
                  <div className="grid gap-4 sm:grid-cols-2 text-sm">
                    <Field label="Full name" value="Ananya Sharma" />
                    <Field label="Email" value="ananya@example.in" />
                    <Field label="Phone" value="+91 98••• •••10" />
                    <Field label="Preferred language" value="English" />
                  </div>
                </Panel>
                <Panel title="Upcoming trips">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { img: destLadakh, t: "Ladakh Expedition", d: "12 Jul – 20 Jul" },
                      { img: destKerala, t: "Kerala Backwaters", d: "24 Aug – 30 Aug" },
                    ].map((t) => (
                      <div key={t.t} className="surface-card overflow-hidden">
                        <img src={t.img} alt="" className="h-28 w-full object-cover" />
                        <div className="p-4">
                          <h4 className="font-semibold">{t.t}</h4>
                          <p className="text-xs text-muted-foreground">{t.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
              <div className="space-y-6">
                <Panel title="Profile completion">
                  <Progress value={80} className="h-2" />
                  <p className="mt-2 text-sm text-muted-foreground">80% complete — add ID verification.</p>
                </Panel>
                <Panel title="Rewards">
                  <p className="font-display text-3xl font-semibold">2,340 pts</p>
                  <p className="text-sm text-muted-foreground">340 pts to Platinum</p>
                  <Button variant="outline" className="mt-4 w-full"><CreditCard className="h-4 w-4" /> Redeem</Button>
                </Panel>
              </div>
            </div>
          </TabsContent>

          {["trips", "preferences", "achievements", "settings"].map((v) => (
            <TabsContent key={v} value={v} className="mt-8">
              <Panel title={v[0].toUpperCase() + v.slice(1)}>
                <p className="text-sm text-muted-foreground">Section content lives here.</p>
              </Panel>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </PageShell>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="surface-card flex items-center gap-4 p-5">
      <span className="grid h-11 w-11 place-items-center rounded-md bg-royal-50 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-display text-2xl font-semibold">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="surface-card p-6">
      <h3 className="text-h4">{title}</h3>
      <Separator className="my-4" />
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-overline text-muted-foreground">{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
