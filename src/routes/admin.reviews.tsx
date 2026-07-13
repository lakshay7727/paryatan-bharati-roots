import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const Route = createFileRoute("/admin/reviews")({
  component: ReviewsPage,
});

type Review = { id: number; author: string; initials: string; target: string; rating: number; excerpt: string; date: string; status: "Approved" | "Pending" | "Featured" | "Archived" };

const rows: Review[] = [
  { id: 1, author: "Priya R.", initials: "PR", target: "Golden Triangle Deluxe", rating: 5, excerpt: "Meera made every stop unforgettable — flawless planning.", date: "2h ago", status: "Featured" },
  { id: 2, author: "Arjun K.", initials: "AK", target: "Kerala Backwaters — 6D", rating: 5, excerpt: "Houseboat sunset was pure magic. Highly recommend.", date: "6h ago", status: "Approved" },
  { id: 3, author: "Sana D.", initials: "SD", target: "Ladakh Adventure — 8D", rating: 4, excerpt: "Great trip, wish we had more time at Pangong.", date: "1d ago", status: "Pending" },
  { id: 4, author: "Rohan M.", initials: "RM", target: "Varanasi Spiritual Trail", rating: 5, excerpt: "Aarti at Dashashwamedh was a spiritual experience.", date: "2d ago", status: "Approved" },
  { id: 5, author: "Ishaan K.", initials: "IK", target: "Rajasthan Royal", rating: 2, excerpt: "Hotel in Udaipur was not as promised.", date: "3d ago", status: "Pending" },
];

const columns: Column<Review>[] = [
  { key: "author", header: "Author", render: (r) => (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8"><AvatarFallback className="bg-gradient-royal text-[11px] font-semibold text-primary-foreground">{r.initials}</AvatarFallback></Avatar>
      <div><div className="text-sm font-semibold">{r.author}</div><div className="text-[11px] text-muted-foreground">{r.target}</div></div>
    </div>
  ) },
  { key: "rating", header: "Rating", render: (r) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-accent text-accent" : "text-muted-foreground/40"}`} />
      ))}
    </div>
  ) },
  { key: "excerpt", header: "Review", render: (r) => <span className="line-clamp-1 text-sm text-muted-foreground">{r.excerpt}</span> },
  { key: "date", header: "Date", className: "text-muted-foreground" },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

function ReviewsPage() {
  return (
    <AdminShell title="Reviews" breadcrumbs={[{ label: "Reviews" }]}>
      <EntityManager<Review>
        columns={columns}
        data={rows}
        searchKeys={["author", "target", "excerpt"]}
        tabs={[
          { label: "All", value: "all", count: rows.length },
          { label: "Pending", value: "p", count: 2 },
          { label: "Featured", value: "f", count: 1 },
          { label: "Approved", value: "a", count: 2 },
        ]}
        primaryAction="Publish reply"
      />
    </AdminShell>
  );
}
