import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Check, Download, ExternalLink, FileText, HelpCircle, Mail, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { SCHEMES } from "./government";
import heroTaj from "@/assets/hero-taj.jpg";

export const Route = createFileRoute("/government/$slug")({
  loader: ({ params }) => {
    const scheme = SCHEMES.find((s) => s.slug === params.slug);
    if (!scheme) throw notFound();
    return { scheme };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.scheme.title ?? "Scheme"} · Paryatan Bharati` },
      { name: "description", content: loaderData?.scheme ? `${loaderData.scheme.title} — ${loaderData.scheme.ministry}. Eligibility, benefits, timeline and downloads.` : "Scheme details" },
      ...(loaderData ? [] : [{ name: "robots", content: "noindex" }]),
    ],
  }),
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-h2">Scheme not found</h1>
        <p className="mt-3 text-muted-foreground">Check the scheme code or browse the portal.</p>
        <Button asChild variant="hero" className="mt-6"><Link to="/government">Back to portal</Link></Button>
      </div>
    </PageShell>
  ),
  component: SchemeDetail,
});

function SchemeDetail() {
  const { scheme } = Route.useLoaderData();
  return (
    <PageShell>
      <HubHero
        eyebrow={scheme.code}
        title={scheme.title}
        description={`${scheme.ministry} · ${scheme.cat} scheme. ${scheme.benefits}.`}
        image={heroTaj}
        crumbs={[{ label: "Home", to: "/" }, { label: "Government", to: "/government" }, { label: scheme.title }]}
        actions={<>
          <Button variant="hero" size="lg"><Download className="h-4 w-4" /> Download PDF</Button>
          <Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20"><ExternalLink className="h-4 w-4" /> Official site</Button>
        </>}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-10">
          <Block title="Overview">
            <p>The <strong>{scheme.title}</strong> is a flagship initiative by the {scheme.ministry} that funds infrastructure, capacity building and promotion for eligible partners across India. Applicants receive dedicated case managers and access to the Paryatan Bharati e-filing workflow.</p>
          </Block>
          <Block title="Eligibility">
            <ul className="space-y-2">
              {[scheme.eligibility, "Registered under the relevant tourism act", "GST compliant for last 2 years", "No pending audit observations"].map((t) => (
                <li key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {t}</li>
              ))}
            </ul>
          </Block>
          <Block title="Benefits">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Capital assistance up to " + scheme.benefits, "Priority technical review", "Co-branded marketing support", "Access to skill certification"].map((t) => (
                <div key={t} className="rounded-md bg-sand-deep px-4 py-3 text-sm">{t}</div>
              ))}
            </div>
          </Block>
          <Block title="Application process">
            <ol className="relative space-y-6 border-l-2 border-border pl-6">
              {["Register on the Paryatan Bharati e-portal", "Upload the DPR and financial statements", "Schedule the technical inspection", "Sanction letter issued in 45 days", "Milestone-based disbursement"].map((t, i) => (
                <li key={t} className="relative">
                  <span className="absolute -left-[27px] top-0 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                  <p className="font-medium">{t}</p>
                </li>
              ))}
            </ol>
          </Block>
          <Block title="Required documents">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Detailed Project Report (DPR)", "Audited financials — last 3 FY", "Land ownership / lease deed", "GST & PAN certificates", "State tourism NOC", "Bank mandate & cancelled cheque"].map((d) => (
                <div key={d} className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm"><FileText className="h-4 w-4 text-primary" /> {d}</div>
              ))}
            </div>
          </Block>
          <Block title="FAQs">
            <div className="divide-y divide-border rounded-xl border border-border">
              {[
                ["Is co-funding required?", "Yes, matching contribution ranges from 10–30% depending on state."],
                ["How is progress monitored?", "Third-party quarterly audits plus Paryatan Bharati dashboard reporting."],
                ["Can NGOs apply?", "Registered NGOs with 5+ years of tourism-focused work are eligible under Focus categories."],
              ].map(([q, a]) => (
                <details key={q} className="group p-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-2 font-medium"><span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-primary" /> {q}</span><span className="text-primary transition-transform group-open:rotate-45">+</span></summary>
                  <p className="mt-2 text-sm text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </Block>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Important dates</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">Announced</span><span className="font-medium">01 Apr 2026</span></li>
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">Last date</span><span className="font-medium text-accent">{scheme.lastDate}</span></li>
              <li className="flex justify-between gap-3"><span className="text-muted-foreground">Result</span><span className="font-medium">Within 45 days</span></li>
            </ul>
            <Button variant="hero" className="mt-5 w-full"><CalendarDays className="h-4 w-4" /> Set a reminder</Button>
          </div>
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Contact</p>
            <p className="mt-3 text-sm"><Phone className="mr-2 inline h-4 w-4 text-primary" /> 1800-11-1363</p>
            <p className="mt-2 text-sm"><Mail className="mr-2 inline h-4 w-4 text-primary" /> schemes@paryatan.gov.in</p>
          </div>
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Related schemes</p>
            <ul className="mt-3 space-y-3">
              {SCHEMES.filter((s) => s.slug !== scheme.slug).slice(0, 3).map((s) => (
                <li key={s.slug}>
                  <Link to="/government/$slug" params={{ slug: s.slug }} className="story-link text-sm font-medium">{s.title}</Link>
                  <p className="text-xs text-muted-foreground">{s.ministry}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-h3 mb-4 text-foreground">{title}</h2>
      <div className="text-body text-foreground">{children}</div>
    </section>
  );
}
