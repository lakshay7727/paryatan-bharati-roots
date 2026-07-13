import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye } from "lucide-react";

export const Route = createFileRoute("/admin/blogs")({
  component: BlogsPage,
});

type Blog = { id: number; title: string; author: string; initials: string; category: string; views: number; updated: string; status: "Published" | "Draft" | "Scheduled" };

const rows: Blog[] = [
  { id: 1, title: "10 Hidden Villages in the Himalayas", author: "Meera Iyer", initials: "MI", category: "Adventure", views: 24800, updated: "2h ago", status: "Published" },
  { id: 2, title: "A Foodie's Guide to Old Delhi", author: "Rohit Sharma", initials: "RS", category: "Food", views: 18200, updated: "1d ago", status: "Published" },
  { id: 3, title: "Monsoon in the Western Ghats", author: "Ananya Verma", initials: "AV", category: "Nature", views: 12100, updated: "3d ago", status: "Scheduled" },
  { id: 4, title: "How AI Planners Are Changing Indian Travel", author: "Aarav Sharma", initials: "AR", category: "Technology", views: 9600, updated: "5d ago", status: "Published" },
  { id: 5, title: "Rann Utsav 2026 — Complete Guide", author: "Neha Bhatia", initials: "NB", category: "Festivals", views: 0, updated: "just now", status: "Draft" },
];

const columns: Column<Blog>[] = [
  { key: "title", header: "Article", render: (b) => (
    <div>
      <div className="text-sm font-semibold">{b.title}</div>
      <div className="text-[11px] text-muted-foreground">{b.category}</div>
    </div>
  ) },
  { key: "author", header: "Author", render: (b) => (
    <div className="flex items-center gap-2">
      <Avatar className="h-7 w-7"><AvatarFallback className="bg-gradient-royal text-[10px] font-semibold text-primary-foreground">{b.initials}</AvatarFallback></Avatar>
      <span className="text-sm">{b.author}</span>
    </div>
  ) },
  { key: "views", header: "Views", render: (b) => <span className="inline-flex items-center gap-1 text-sm"><Eye className="h-3.5 w-3.5 text-muted-foreground" />{b.views.toLocaleString("en-IN")}</span> },
  { key: "updated", header: "Updated", className: "text-muted-foreground" },
  { key: "status", header: "Status", render: (b) => <StatusBadge status={b.status} /> },
];

function BlogsPage() {
  return (
    <AdminShell title="Blogs" breadcrumbs={[{ label: "Blogs" }]}>
      <EntityManager<Blog> columns={columns} data={rows} searchKeys={["title", "author", "category"]} primaryAction="New article" />
    </AdminShell>
  );
}
