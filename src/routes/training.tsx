import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, CheckCircle2, PlayCircle, Trophy, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import destHimalaya from "@/assets/dest-himalaya.jpg";
import heritageHampi from "@/assets/heritage-hampi.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import destFood from "@/assets/dest-food.jpg";

export const Route = createFileRoute("/training")({
  head: () => ({ meta: [{ title: "Training Center · Paryatan Bharati" }] }),
  component: TrainingCenter,
});

const courses = [
  { img: destHimalaya, t: "Sustainable Travel 101", h: "6 lessons · 45 min", p: 100 },
  { img: heritageHampi, t: "Heritage Guide Basics", h: "12 lessons · 3 hrs", p: 68 },
  { img: destTemple, t: "Temple Etiquette & Rituals", h: "8 lessons · 90 min", p: 30 },
  { img: destFood, t: "Regional Food & Language", h: "10 lessons · 2 hrs", p: 0 },
];

function TrainingCenter() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Paryatan Academy"
        title="Learn, earn certificates, travel responsibly."
        description="Free micro-courses, quizzes and expert-led videos on Indian culture, heritage guiding, safety and sustainability."
        crumbs={[{ label: "Home", to: "/" }, { label: "Training" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { icon: BookOpen, l: "Courses", v: "24" },
            { icon: PlayCircle, l: "Video lessons", v: "180+" },
            { icon: Award, l: "Certificates earned", v: "12,400" },
            { icon: Users, l: "Active learners", v: "48,900" },
          ].map((s) => (
            <div key={s.l} className="surface-card p-5 text-center">
              <s.icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-2 font-display text-2xl font-semibold">{s.v}</p>
              <p className="text-xs text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>

        <Tabs defaultValue="courses" className="mt-10">
          <TabsList>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {courses.map((c) => (
                <article key={c.t} className="surface-card hover-lift overflow-hidden">
                  <div className="img-zoom aspect-[16/10]"><img src={c.img} alt="" className="h-full w-full object-cover" /></div>
                  <div className="p-5">
                    <h3 className="text-h4">{c.t}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.h}</p>
                    <Progress value={c.p} className="mt-3 h-1.5" />
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{c.p}% complete</span>
                      <Button size="sm" variant={c.p === 100 ? "outline" : "hero"}>{c.p === 100 ? "Review" : c.p ? "Resume" : "Start"}</Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quizzes" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Heritage IQ · Weekly", "Temple architecture", "State cuisines", "Wildlife safaris", "Festival calendar", "Emergency response"].map((q) => (
              <div key={q} className="surface-card p-5">
                <Badge variant="secondary" className="bg-sunset-100 text-accent hover:bg-sunset-100">15 questions</Badge>
                <h3 className="text-h4 mt-2">{q}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Test your knowledge and earn 50 reward points.</p>
                <Button size="sm" variant="hero" className="mt-4">Start quiz</Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-6 surface-card p-2">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground"><tr><th className="p-3">#</th><th>Learner</th><th>Courses</th><th>Points</th></tr></thead>
              <tbody>
                {[
                  { n: "Aarav Mehta", c: 22, p: 12480 },
                  { n: "Neha Iyer", c: 18, p: 9820 },
                  { n: "Priya Sharma", c: 12, p: 4820 },
                  { n: "Rohan Das", c: 8, p: 3120 },
                ].map((r, i) => (
                  <tr key={r.n} className="border-t border-border">
                    <td className="p-3 font-medium">{i + 1}</td>
                    <td>{r.n}</td>
                    <td>{r.c}</td>
                    <td className="font-semibold text-primary">{r.p.toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["First course completed", "Quiz streak · 7 days", "Heritage explorer", "Sustainable traveller", "Guide-in-training", "Cultural ambassador"].map((a, i) => (
              <div key={a} className="surface-card p-5 text-center">
                <Trophy className={"mx-auto h-8 w-8 " + (i < 3 ? "text-accent" : "text-muted-foreground")} />
                <p className="mt-3 font-medium">{a}</p>
                <p className="mt-1 text-xs text-muted-foreground">{i < 3 ? "Unlocked" : "Locked"}</p>
                {i < 3 && <CheckCircle2 className="mx-auto mt-2 h-4 w-4 text-emerald-600" />}
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </PageShell>
  );
}
