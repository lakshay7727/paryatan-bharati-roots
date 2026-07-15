import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ClipboardList, Download, GraduationCap, Users, Wallet } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/student-portal")({
  head: () => ({ meta: [{ title: "Institution portal · Student Tourism · Paryatan Bharati" }] }),
  component: PortalPage,
});

function PortalPage() {
  return (
    <PageShell>
      <HubHero eyebrow="Institution dashboard"
        title="Manage every student trip"
        description="Group registration, student lists, payments, attendance, certificates and post-trip reports."
        image={destHimalaya}
        crumbs={[{ label: "Home", to: "/" }, { label: "Students", to: "/students" }, { label: "Institution portal" }]}
        actions={<><Button variant="hero" size="lg"><ClipboardList className="h-4 w-4" /> New registration</Button></>} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { k: "Active trips", v: "3", i: GraduationCap, tone: "text-primary bg-royal-100" },
            { k: "Students booked", v: "218", i: Users, tone: "text-secondary bg-emerald-100" },
            { k: "Payments received", v: "₹18.4L", i: Wallet, tone: "text-accent bg-sunset-100" },
            { k: "Reports pending", v: "2", i: ClipboardList, tone: "text-primary bg-royal-100" },
          ].map((s) => (
            <div key={s.k} className="surface-card p-5">
              <div className="flex items-center justify-between"><p className="text-overline text-muted-foreground">{s.k}</p><span className={"grid h-9 w-9 place-items-center rounded-md " + s.tone}><s.i className="h-4 w-4" /></span></div>
              <p className="font-display text-2xl font-semibold text-foreground">{s.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="surface-card p-6">
            <div className="flex items-center justify-between"><h2 className="text-h3">Current registrations</h2><Button variant="outline" size="sm"><Download className="h-4 w-4" /> Export CSV</Button></div>
            <div className="mt-4 overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-sand-deep"><tr>{["Trip", "Students", "Payment", "Status"].map((h) => <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>)}</tr></thead>
                <tbody>
                  {[
                    ["Delhi Heritage Walk", 42, "₹2.7L / ₹2.7L", "Confirmed"],
                    ["Kerala Nature Camp", 68, "₹4.1L / ₹8.2L", "50% paid"],
                    ["ISRO Bengaluru", 108, "₹9.7L / ₹9.7L", "Confirmed"],
                  ].map((r, i) => (
                    <tr key={i} className="border-t border-border">
                      {r.map((c, j) => (
                        <td key={j} className="px-4 py-3">
                          {j === 3 ? <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">{c}</span> : c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-h4">Certificates</h3>
            <p className="mt-1 text-sm text-muted-foreground">Auto-generated for every completed trip.</p>
            <ul className="mt-4 space-y-3">{["Completion certificate", "Faculty escort letter", "Trip learning report"].map((t) => (
              <li key={t} className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> {t}</span><Button size="sm" variant="ghost"><Download className="h-4 w-4" /></Button></li>
            ))}</ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
