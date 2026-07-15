import { createFileRoute } from "@tanstack/react-router";
import { Backpack, Building2, GraduationCap, Landmark, Microscope, Mountain, ShieldCheck, TreePine, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HubHero } from "@/components/site/HubHero";
import { HubCard } from "@/components/site/HubCard";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import destHimalaya from "@/assets/dest-himalaya.jpg";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "Student Tourism · Paryatan Bharati" },
      { name: "description", content: "Educational trips, heritage walks, science museums, industrial visits and adventure camps for schools & colleges." },
    ],
  }),
  component: StudentsPage,
});

export const STUDENT_PACKAGES = [
  { slug: "delhi-heritage-walk", title: "Delhi Heritage Walk", cat: "Historical", age: "12–17", days: 3, discount: 40, price: 6499 },
  { slug: "isro-bengaluru", title: "ISRO Bengaluru + Museums", cat: "Science", age: "14–22", days: 4, discount: 35, price: 8999 },
  { slug: "kerala-nature-camp", title: "Kerala Nature Camp", cat: "Nature", age: "12–17", days: 5, discount: 40, price: 11999 },
  { slug: "auto-plant-chennai", title: "Auto Plant Visit — Chennai", cat: "Industrial", age: "16–22", days: 2, discount: 30, price: 4999 },
  { slug: "hampi-heritage", title: "Hampi Heritage Study", cat: "Historical", age: "16–22", days: 4, discount: 40, price: 9999 },
  { slug: "himachal-adventure", title: "Himachal Adventure Camp", cat: "Adventure", age: "14–22", days: 6, discount: 35, price: 12999 },
  { slug: "iit-bombay", title: "IIT Bombay + Elephanta", cat: "University", age: "16–22", days: 3, discount: 30, price: 7499 },
  { slug: "nagaland-culture", title: "Nagaland Cultural Exchange", cat: "Cultural", age: "18–24", days: 7, discount: 45, price: 15999 },
];

function StudentsPage() {
  return (
    <PageShell>
      <HubHero
        eyebrow="Learn while you travel"
        title="Student tourism, made for classrooms."
        description="Curated educational, cultural and adventure trips — with faculty-approved safety, learning outcomes and up to 45% student subsidy."
        image={destHimalaya}
        crumbs={[{ label: "Home", to: "/" }, { label: "Student Tourism" }]}
        actions={<>
          <Button asChild variant="hero" size="lg"><Link to="/student-portal">Institution portal</Link></Button>
          <Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground hover:bg-background/20">Download brochure</Button>
        </>}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-overline text-primary">Categories</p>
        <h2 className="text-h2 mt-2">Explore by learning theme</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Landmark, title: "Historical tours", desc: "Forts, palaces & living history.", tone: "royal" as const },
            { icon: Microscope, title: "Science museums", desc: "ISRO, NCSM & innovation labs.", tone: "emerald" as const },
            { icon: Building2, title: "Industrial visits", desc: "Auto plants, refineries, ports.", tone: "sunset" as const },
            { icon: GraduationCap, title: "University trips", desc: "IITs, IIMs and central universities.", tone: "royal" as const },
            { icon: Users, title: "Cultural exchange", desc: "State-to-state student swaps.", tone: "emerald" as const },
            { icon: Mountain, title: "Adventure camps", desc: "Trek, raft, climb & ropes.", tone: "sunset" as const },
            { icon: TreePine, title: "Nature camps", desc: "Bird-watching, forests, wildlife.", tone: "emerald" as const },
            { icon: Backpack, title: "Heritage walks", desc: "Old cities on foot with guides.", tone: "royal" as const },
          ].map((c) => (
            <HubCard key={c.title} to="/students" icon={c.icon} tone={c.tone} title={c.title} description={c.desc} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-sand-warm/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-overline text-primary">Programs</p>
          <h2 className="text-h2 mt-2">Curated student packages</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STUDENT_PACKAGES.map((p) => (
              <Link key={p.slug} to="/students/$slug" params={{ slug: p.slug }} className="surface-card hover-lift group flex flex-col p-5">
                <span className="text-overline text-primary">{p.cat}</span>
                <h3 className="text-h4 mt-1">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Ages {p.age} · {p.days} days</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-overline text-muted-foreground">From</p>
                    <p className="font-display text-xl font-semibold text-primary">₹{p.price.toLocaleString("en-IN")}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">-{p.discount}%</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="surface-card p-6"><ShieldCheck className="h-8 w-8 text-secondary" /><h3 className="text-h4 mt-3">Faculty safety kit</h3><p className="mt-2 text-sm text-muted-foreground">Vetted operators, verified guides, live location, medical partners on standby.</p></div>
        <div className="surface-card p-6"><GraduationCap className="h-8 w-8 text-primary" /><h3 className="text-h4 mt-3">Learning outcomes</h3><p className="mt-2 text-sm text-muted-foreground">Every trip maps to a learning framework — NCF/NEP aligned reports.</p></div>
        <div className="surface-card p-6"><Users className="h-8 w-8 text-accent" /><h3 className="text-h4 mt-3">Group discounts</h3><p className="mt-2 text-sm text-muted-foreground">Automatic pricing for 20+ students, plus faculty complimentary spots.</p></div>
      </section>
    </PageShell>
  );
}
