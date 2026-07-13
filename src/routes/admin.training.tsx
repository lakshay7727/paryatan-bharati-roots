import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { BookOpen, Users2 } from "lucide-react";

export const Route = createFileRoute("/admin/training")({
  component: TrainingPage,
});

type Course = { id: number; title: string; category: string; lessons: number; enrolled: number; certified: number; status: "Published" | "Draft" | "Scheduled" };

const rows: Course[] = [
  { id: 1, title: "Certified India Tour Guide L1", category: "Guide certification", lessons: 42, enrolled: 218, certified: 156, status: "Published" },
  { id: 2, title: "Hospitality Excellence — Front Office", category: "Hospitality", lessons: 28, enrolled: 142, certified: 98, status: "Published" },
  { id: 3, title: "Heritage Storytelling Workshop", category: "Culture", lessons: 12, enrolled: 84, certified: 51, status: "Published" },
  { id: 4, title: "Sustainable Ecotourism Practices", category: "Sustainability", lessons: 18, enrolled: 66, certified: 22, status: "Scheduled" },
  { id: 5, title: "Adventure Safety & Rescue", category: "Adventure", lessons: 24, enrolled: 34, certified: 0, status: "Draft" },
];

const columns: Column<Course>[] = [
  { key: "title", header: "Course", render: (c) => (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><BookOpen className="h-5 w-5" /></div>
      <div><div className="text-sm font-semibold">{c.title}</div><div className="text-[11px] text-muted-foreground">{c.category} · {c.lessons} lessons</div></div>
    </div>
  ) },
  { key: "enrolled", header: "Enrolled", render: (c) => <span className="inline-flex items-center gap-1 text-sm"><Users2 className="h-3.5 w-3.5 text-muted-foreground" />{c.enrolled}</span> },
  { key: "certified", header: "Certified", render: (c) => <span className="text-sm font-semibold text-secondary">{c.certified}</span> },
  { key: "status", header: "Status", render: (c) => <StatusBadge status={c.status} /> },
];

function TrainingPage() {
  return (
    <AdminShell title="Training Center" breadcrumbs={[{ label: "Training" }]}>
      <EntityManager<Course> columns={columns} data={rows} searchKeys={["title", "category"]} primaryAction="New course" />
    </AdminShell>
  );
}
