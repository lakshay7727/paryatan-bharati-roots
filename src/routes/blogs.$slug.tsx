import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, ChevronRight, Clock, Facebook, Heart, Linkedin, Twitter } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import heroTaj from "@/assets/hero-taj.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destVaranasi from "@/assets/dest-varanasi.jpg";

export const Route = createFileRoute("/blogs/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} · Paryatan Bharati Journal` },
      { name: "description", content: "A long-form story from the Paryatan Bharati travel journal." },
      { property: "og:image", content: "" },
    ],
  }),
  component: BlogDetails,
});

const TOC = [
  { id: "prologue", label: "Prologue" },
  { id: "morning", label: "The morning walk" },
  { id: "light", label: "Chasing the light" },
  { id: "notes", label: "Field notes" },
  { id: "return", label: "Coming home" },
];

function BlogDetails() {
  return (
    <PageShell>
      <div className="relative aspect-[21/9] w-full overflow-hidden">
        <img src={heroTaj} alt="" className="h-full w-full object-cover" />
      </div>

      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/blogs" className="hover:text-primary">Journal</Link>
          <ChevronRight className="h-3 w-3" /> Heritage
        </nav>

        <div className="mt-4 grid gap-12 lg:grid-cols-[220px_1fr_240px]">
          {/* TOC */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <p className="text-overline text-muted-foreground">On this page</p>
            <ul className="mt-3 space-y-2 text-sm">
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-muted-foreground hover:text-primary">{t.label}</a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Body */}
          <div>
            <Badge className="bg-royal-50 text-primary hover:bg-royal-50">Heritage</Badge>
            <h1 className="text-hero mt-4">Sunrise at the Taj: a photographer's field notes</h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Kabir Menon</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min read</span>
              <span>10 July 2026</span>
            </div>

            <div className="prose mt-8 max-w-none text-foreground [&_p]:text-body-lg [&_p]:mt-6 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_h2]:text-h2 [&_h2]:mt-12">
              <h2 id="prologue">Prologue</h2>
              <p>
                The marble looks different at 5:47 AM. Not white, not pink — something between the two,
                like the surface remembers every dawn it has stood through. It has stood through many.
              </p>
              <p>
                I have been visiting the Taj Mahal since I was eight. This is my sixteenth trip and,
                somehow, the first time I let the tripod stay in the bag.
              </p>

              <h2 id="morning">The morning walk</h2>
              <img src={destVaranasi} alt="" className="mt-8 aspect-[16/9] w-full rounded-lg object-cover" />
              <p>
                Agra wakes gently. A rickshaw driver hums a Kishore Kumar song. The Yamuna is still
                a suggestion behind the mist. You feel the monument before you see it.
              </p>

              <h2 id="light">Chasing the light</h2>
              <p>
                For twenty minutes the marble is a soft coral, and then — quickly, decisively — it is
                gold. The trick is not to shoot everything. The trick is to sit.
              </p>

              <h2 id="notes">Field notes</h2>
              <img src={destKerala} alt="" className="mt-8 aspect-[16/9] w-full rounded-lg object-cover" />
              <p>
                Best entrance at dawn: East gate. Skip Fridays. Carry only what you can hold in one
                hand — the security line is faster.
              </p>

              <h2 id="return">Coming home</h2>
              <p>
                We came back for petha and chai at a place my grandfather used to bring me. The
                monument is the frame; the city is the story.
              </p>
            </div>

            <Separator className="my-10" />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-royal font-display text-primary-foreground">KM</div>
                <div>
                  <p className="font-semibold">Kabir Menon</p>
                  <p className="text-xs text-muted-foreground">Editor · Photography</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" aria-label="Like"><Heart /></Button>
                <Button variant="outline" size="icon" aria-label="Save"><Bookmark /></Button>
                <Button variant="outline" size="icon" aria-label="Share on Twitter"><Twitter /></Button>
                <Button variant="outline" size="icon" aria-label="Share on Facebook"><Facebook /></Button>
                <Button variant="outline" size="icon" aria-label="Share on LinkedIn"><Linkedin /></Button>
              </div>
            </div>

            <h3 className="text-h2 mt-14">Related stories</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[destKerala, destVaranasi].map((img, i) => (
                <Link key={i} to="/blogs" className="surface-card hover-lift block overflow-hidden">
                  <img src={img} alt="" className="aspect-[16/9] w-full object-cover" />
                  <div className="p-5">
                    <h4 className="text-h4">A slow week in the backwaters</h4>
                    <p className="mt-2 text-xs text-muted-foreground">6 min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Meta */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <div className="surface-card p-5">
              <p className="text-overline text-muted-foreground">Share</p>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="icon" aria-label="Twitter"><Twitter /></Button>
                <Button variant="outline" size="icon" aria-label="Facebook"><Facebook /></Button>
                <Button variant="outline" size="icon" aria-label="LinkedIn"><Linkedin /></Button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </PageShell>
  );
}
