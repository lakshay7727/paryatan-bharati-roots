import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ExternalLink, FileText, Filter, Search, Sparkles, Users, Wallet } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { HubCard } from "@/components/site/HubCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroTaj from "@/assets/hero-taj.jpg";

export const Route = createFileRoute("/government")({
  head: () => ({
    meta: [
      { title: "Government Tourism Portal · Paryatan Bharati" },
      { name: "description", content: "Central & state tourism schemes, subsidies, grants and campaigns — all in one premium portal." },
      { property: "og:title", content: "Government Tourism Portal · Paryatan Bharati" },
      { property: "og:description", content: "Every Incredible India scheme, grant and campaign, curated." },
    ],
  }),
  component: GovernmentPage,
});

export const SCHEMES = [
  { slug: "swadesh-darshan-2", code: "MOT-SD-2.0", title: "Swadesh Darshan 2.0", ministry: "Ministry of Tourism", cat: "Central", eligibility: "State PSUs, DMOs", benefits: "Up to ₹100 Cr per circuit", lastDate: "30 Sep 2026", tone: "royal" as const },
  { slug: "prashad", code: "MOT-PRASHAD", title: "PRASHAD — Pilgrimage Rejuvenation", ministry: "Ministry of Tourism", cat: "Central", eligibility: "Temple trusts, PSUs", benefits: "Infra upgrades", lastDate: "15 Oct 2026", tone: "sunset" as const },
  { slug: "dekho-apna-desh", code: "MOT-DAD", title: "Dekho Apna Desh — Student Grant", ministry: "MoT + MoE", cat: "Central", eligibility: "Universities, Schools", benefits: "40% subsidy", lastDate: "05 Aug 2026", tone: "emerald" as const },
  { slug: "ne-circuit", code: "MDoNER-NEC", title: "North East Circuit Scheme", ministry: "MDoNER", cat: "Central", eligibility: "NE state boards", benefits: "Infra + promotion", lastDate: "12 Sep 2026", tone: "royal" as const },
  { slug: "women-solo", code: "MOT-WSTI", title: "Women Solo Traveller Initiative", ministry: "Ministry of Tourism", cat: "Focus", eligibility: "Verified operators", benefits: "Safety grants", lastDate: "Rolling", tone: "sunset" as const },
  { slug: "senior-yatra", code: "IRCTC-SY", title: "Senior Citizen Yatra Subsidy", ministry: "IRCTC + MoT", cat: "Focus", eligibility: "60+ Indian citizens", benefits: "25% fare rebate", lastDate: "Ongoing", tone: "emerald" as const },
  { slug: "eco-tourism", code: "MoEFCC-ET", title: "National Eco Tourism Campaign", ministry: "MoEFCC", cat: "Campaign", eligibility: "Verified eco-lodges", benefits: "Grants + certification", lastDate: "31 Dec 2026", tone: "emerald" as const },
  { slug: "rural-homestay", code: "MOT-RH", title: "Rural Homestay Development", ministry: "Ministry of Tourism", cat: "Focus", eligibility: "Panchayats, homestays", benefits: "₹2L per unit", lastDate: "Rolling", tone: "royal" as const },
  { slug: "atulya-bharat", code: "MOT-IIB", title: "Atulya Bharat International Push", ministry: "MoT", cat: "Campaign", eligibility: "Outbound operators", benefits: "Co-marketing", lastDate: "31 Mar 2027", tone: "sunset" as const },
];

function GovernmentPage() {
  return (
    <PageShell>
      <HubHero
        eyebrow="Incredible India · Government portal"
        title="Every tourism scheme, one place."
        description="Central and state programmes, grants, subsidies and campaigns — searchable, verified and downloadable."
        image={heroTaj}
        crumbs={[{ label: "Home", to: "/" }, { label: "Government Tourism" }]}
        actions={<>
          <Button variant="hero" size="lg"><Search className="h-4 w-4" /> Explore schemes</Button>
          <Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20">Download brochure pack</Button>
        </>}
      />

      <section className="border-b border-border bg-sand-warm/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 sm:px-6 lg:px-8">
          <div className="surface-card flex flex-1 items-center gap-2 rounded-xl p-2">
            <Search className="ml-2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search Swadesh Darshan, PRASHAD, Dekho Apna Desh…" className="h-11 border-0 shadow-none focus-visible:ring-0" />
            <Button variant="hero" size="lg" className="shrink-0">Search</Button>
          </div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="central">Central</TabsTrigger>
              <TabsTrigger value="state">State</TabsTrigger>
              <TabsTrigger value="focus">Focus groups</TabsTrigger>
              <TabsTrigger value="campaign">Campaigns</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Featured" title="Central government schemes" note="Curated by category" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SCHEMES.slice(0, 6).map((s) => (
            <HubCard key={s.slug} to="/government/$slug" params={{ slug: s.slug }} icon={FileText}
              tone={s.tone} eyebrow={s.code} title={s.title} description={`${s.ministry} · ${s.eligibility}`} meta={`Last date: ${s.lastDate}`} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-sand-warm/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Focus groups" title="Programmes built for every traveller" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FocusTile icon={Users} title="Women's tourism" text="Safety grants, verified operators, women-led homestays." tone="sunset" />
            <FocusTile icon={Sparkles} title="Senior citizens" text="Yatra subsidies, medical assistance, priority darshan." tone="emerald" />
            <FocusTile icon={Users} title="Student discounts" text="40% subsidised educational trips across states." tone="royal" />
            <FocusTile icon={Wallet} title="Rural & eco" text="Homestay grants, eco-lodge certification, tribal tourism." tone="emerald" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Latest" title="Announcements & tenders" />
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-sand-deep text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Scheme / Notice</th>
                <th className="px-4 py-3 font-semibold">Ministry</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["10 Jul 2026", "Swadesh Darshan 2.0 — third tranche released", "MoT"],
                ["04 Jul 2026", "PRASHAD notification for Char Dham circuit", "MoT"],
                ["28 Jun 2026", "Rural homestay grant applications open", "MoT"],
                ["21 Jun 2026", "North East Circuit — RFP for Shillong-Cherrapunji", "MDoNER"],
              ].map(([d, t, m]) => (
                <tr key={t} className="border-t border-border">
                  <td className="px-4 py-3 text-muted-foreground">{d}</td>
                  <td className="px-4 py-3 font-medium">{t}</td>
                  <td className="px-4 py-3 text-muted-foreground">{m}</td>
                  <td className="px-4 py-3"><Button size="sm" variant="outline"><Download className="h-3.5 w-3.5" /> PDF</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}

function SectionHead({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-overline text-primary">{eyebrow}</p>
        <h2 className="text-h2 mt-2 text-foreground">{title}</h2>
      </div>
      {note && <p className="text-sm text-muted-foreground"><Filter className="mr-1 inline h-3.5 w-3.5" /> {note}</p>}
    </div>
  );
}

function FocusTile({ icon: Icon, title, text, tone }: { icon: any; title: string; text: string; tone: "royal" | "emerald" | "sunset" }) {
  const cls = tone === "royal" ? "bg-royal-100 text-primary" : tone === "emerald" ? "bg-emerald-100 text-emerald-700" : "bg-sunset-100 text-accent";
  return (
    <div className="surface-card p-6">
      <span className={"grid h-11 w-11 place-items-center rounded-md " + cls}><Icon className="h-5 w-5" /></span>
      <h3 className="text-h4 mt-4">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
