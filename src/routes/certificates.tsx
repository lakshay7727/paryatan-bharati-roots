import { createFileRoute } from "@tanstack/react-router";
import { Award, Download, QrCode, Share2, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/certificates")({
  head: () => ({ meta: [{ title: "Digital Certificates · Paryatan Bharati" }] }),
  component: Certificates,
});

const certs = [
  { t: "Sustainable Travel 101", d: "Awarded 12 Jun 2026", type: "Course completion", id: "PB-ST-2026-00841" },
  { t: "Heritage Guide Basics", d: "Awarded 04 Aug 2026", type: "Participation", id: "PB-HG-2026-01207" },
  { t: "Kumbh Mela Volunteer", d: "Awarded 22 Jan 2027", type: "Participation", id: "PB-KM-2027-00033" },
];

function Certificates() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Verified digital credentials"
        title="Your certificates"
        description="Downloadable, shareable and verifiable via QR — recognised by the Ministry of Tourism training partners."
        crumbs={[{ label: "Home", to: "/" }, { label: "Certificates" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certs.map((c) => (
            <article key={c.id} className="surface-card overflow-hidden">
              <div className="relative bg-gradient-royal p-6 text-primary-foreground">
                <div className="flex items-start justify-between">
                  <Award className="h-8 w-8 text-accent" />
                  <Badge className="bg-white/15 text-primary-foreground hover:bg-white/15 backdrop-blur">{c.type}</Badge>
                </div>
                <p className="text-overline mt-6 text-sunset-200">Paryatan Bharati Academy</p>
                <h3 className="text-h3 mt-1 max-w-[16rem]">{c.t}</h3>
                <p className="mt-4 text-sm text-primary-foreground/85">{c.d}</p>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div className="grid h-14 w-14 place-items-center rounded-md bg-sand-deep"><QrCode className="h-8 w-8" /></div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Verification ID</p>
                  <p className="truncate text-sm font-medium">{c.id}</p>
                </div>
              </div>
              <div className="flex gap-2 px-4 pb-4">
                <Button variant="outline" size="sm" className="flex-1"><Download className="h-4 w-4" /> PDF</Button>
                <Button variant="ghost" size="sm" className="flex-1"><Share2 className="h-4 w-4" /> Share</Button>
              </div>
            </article>
          ))}
        </div>

        <div className="surface-card mt-10 flex flex-wrap items-center gap-3 p-6">
          <ShieldCheck className="h-6 w-6 text-emerald-600" />
          <p className="text-sm">
            Every certificate carries a tamper-proof QR. Employers and institutions can verify authenticity at
            <span className="ml-1 font-medium text-primary">verify.paryatan-bharati.in</span>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
