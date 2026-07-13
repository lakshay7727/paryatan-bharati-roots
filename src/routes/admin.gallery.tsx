import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FolderOpen, Search, UploadCloud, Image as ImageIcon, Play } from "lucide-react";
import destKerala from "@/assets/dest-kerala.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destRajasthan from "@/assets/dest-rajasthan.jpg";
import destVaranasi from "@/assets/dest-varanasi.jpg";
import destTemple from "@/assets/dest-temple.jpg";
import destFood from "@/assets/dest-food.jpg";
import destHimalaya from "@/assets/dest-himalaya.jpg";
import destGoa from "@/assets/dest-goa.jpg";
import heroTaj from "@/assets/hero-taj.jpg";
import heritageHampi from "@/assets/heritage-hampi.jpg";
import foodThali from "@/assets/food-thali.jpg";
import foodChaat from "@/assets/food-chaat.jpg";

export const Route = createFileRoute("/admin/gallery")({
  component: GalleryPage,
});

const folders = [
  { name: "Destinations", count: 128 },
  { name: "Temples & Heritage", count: 74 },
  { name: "Food & Culture", count: 52 },
  { name: "Adventure & Sports", count: 41 },
  { name: "Government events", count: 18 },
  { name: "Testimonial photos", count: 33 },
];

const media = [
  { src: heroTaj, title: "Taj at sunrise", type: "img" },
  { src: destKerala, title: "Alleppey backwaters", type: "img" },
  { src: destLadakh, title: "Pangong Lake", type: "img" },
  { src: destRajasthan, title: "Hawa Mahal", type: "img" },
  { src: destVaranasi, title: "Ghats of Varanasi", type: "img" },
  { src: destTemple, title: "Meenakshi gopuram", type: "img" },
  { src: heritageHampi, title: "Hampi ruins", type: "img" },
  { src: destHimalaya, title: "Himalayan pass", type: "vid" },
  { src: destGoa, title: "Palolem cove", type: "img" },
  { src: foodThali, title: "Rajasthani thali", type: "img" },
  { src: foodChaat, title: "Chandni Chowk chaat", type: "img" },
  { src: destFood, title: "Street food night", type: "vid" },
];

function GalleryPage() {
  return (
    <AdminShell
      title="Gallery"
      breadcrumbs={[{ label: "Gallery" }]}
      actions={
        <>
          <Button variant="outline" size="sm">New folder</Button>
          <Button variant="hero" size="sm"><UploadCloud className="mr-1 h-4 w-4" /> Upload media</Button>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="surface-card p-4">
          <div className="text-overline text-[10px] text-muted-foreground">Library</div>
          <ul className="mt-2 space-y-1">
            {folders.map((f, i) => (
              <li key={f.name}>
                <Link to="/admin/gallery" className={`flex items-center justify-between rounded-md px-2.5 py-2 text-sm ${i === 0 ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:bg-muted"}`}>
                  <span className="flex items-center gap-2"><FolderOpen className="h-4 w-4" /> {f.name}</span>
                  <span className="text-[11px]">{f.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className="surface-card p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="h-9 w-72 pl-9" placeholder="Search media…" />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>218 items · 4.2 GB used</span>
              <Button variant="outline" size="sm" className="h-8">Sort</Button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {media.map((m, i) => (
              <div key={i} className="img-zoom group relative aspect-square overflow-hidden rounded-md border border-border">
                <img src={m.src} alt={m.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-2 text-[11px] text-white">
                  <span className="truncate">{m.title}</span>
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 backdrop-blur">
                    {m.type === "vid" ? <Play className="h-3 w-3" /> : <ImageIcon className="h-3 w-3" />}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
