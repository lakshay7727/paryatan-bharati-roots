import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, ClipboardList, GraduationCap, ShieldCheck, Users, Utensils } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { Button } from "@/components/ui/button";
import { STUDENT_PACKAGES } from "./students";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/students/$slug")({
  loader: ({ params }) => {
    const pkg = STUDENT_PACKAGES.find((p) => p.slug === params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.pkg.title ?? "Student trip"} · Paryatan Bharati` }],
  }),
  notFoundComponent: () => (
    <PageShell><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-h2">Program not found</h1><Button asChild className="mt-6" variant="hero"><Link to="/students">Back</Link></Button></div></PageShell>
  ),
  component: StudentDetail,
});

function StudentDetail() {
  const { pkg } = Route.useLoaderData();
  return (
    <PageShell>
      <HubHero eyebrow={pkg.cat} title={pkg.title} description={`${pkg.days}-day educational program for ages ${pkg.age} · Up to ${pkg.discount}% student discount`}
        image={destHimalaya}
        crumbs={[{ label: "Home", to: "/" }, { label: "Student Tourism", to: "/students" }, { label: pkg.title }]}
        actions={<><Button variant="hero" size="lg">Register school / college</Button><Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20">Faculty brochure</Button></>}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <div className="space-y-10">
          <Info title="Learning objectives" icon={GraduationCap}>
            <ul className="grid gap-2 sm:grid-cols-2">{["Contextual history", "Field observation", "Team problem-solving", "Written reflections"].map((t) => <li key={t} className="rounded-md bg-sand-deep px-3 py-2 text-sm">{t}</li>)}</ul>
          </Info>
          <Info title="Day-by-day itinerary" icon={CalendarDays}>
            <ol className="relative space-y-5 border-l-2 border-border pl-6">
              {Array.from({ length: pkg.days }).map((_, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[27px] top-0 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                  <p className="font-medium">Day {i + 1} — {["Arrival & orientation", "Guided site study", "Workshop & interaction", "Field project", "Presentation & departure"][i % 5]}</p>
                  <p className="text-sm text-muted-foreground">Morning briefing, on-site study, cultural evening. All meals included.</p>
                </li>
              ))}
            </ol>
          </Info>
          <Info title="Accommodation & meals" icon={Utensils}>
            <p>Certified student hostels or 3★ properties with dormitory / twin sharing. Vegetarian and Jain meals available. Filtered water and 24×7 warden.</p>
          </Info>
          <Info title="Safety information" icon={ShieldCheck}>
            <ul className="grid gap-2 sm:grid-cols-2">{["1 faculty per 15 students", "GPS-tracked coaches", "Emergency medical partners", "Insurance included"].map((t) => <li key={t} className="rounded-md border border-border px-3 py-2 text-sm">{t}</li>)}</ul>
          </Info>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
          <div className="surface-card p-5">
            <p className="text-overline text-muted-foreground">Program cost (per student)</p>
            <p className="font-display text-3xl font-semibold text-primary">₹{pkg.price.toLocaleString("en-IN")}</p>
            <p className="text-xs text-emerald-700">Includes {pkg.discount}% government subsidy</p>
            <Button variant="hero" className="mt-4 w-full">Book now</Button>
            <Button variant="outline" className="mt-2 w-full">Request quote for group</Button>
          </div>
          <div className="surface-card p-5">
            <p className="text-overline text-primary">Group size</p>
            <p className="mt-2 flex items-center gap-2 text-sm"><Users className="h-4 w-4 text-primary" /> Min 20 · Max 90 students</p>
            <p className="mt-1 flex items-center gap-2 text-sm"><ClipboardList className="h-4 w-4 text-primary" /> Faculty escort: 1 free per 20</p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Info({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-h3 mb-4 flex items-center gap-2"><Icon className="h-5 w-5 text-primary" /> {title}</h2>
      <div className="text-body text-foreground">{children}</div>
    </section>
  );
}
