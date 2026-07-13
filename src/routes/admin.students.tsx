import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/admin/students")({
  component: StudentsPage,
});

type Program = {
  id: number;
  title: string;
  institute: string;
  ageGroup: string;
  capacity: number;
  enrolled: number;
  discount: number;
  status: "Published" | "Draft" | "Scheduled";
};

const rows: Program[] = [
  { id: 1, title: "IIT Delhi — Heritage Exchange", institute: "IIT Delhi", ageGroup: "18–22", capacity: 120, enrolled: 96, discount: 35, status: "Published" },
  { id: 2, title: "DPS Bangalore — Kerala Nature Trip", institute: "DPS Bangalore", ageGroup: "14–17", capacity: 80, enrolled: 72, discount: 40, status: "Published" },
  { id: 3, title: "JNU — Northeast Cultural Immersion", institute: "JNU", ageGroup: "18–24", capacity: 60, enrolled: 41, discount: 30, status: "Published" },
  { id: 4, title: "Kendriya Vidyalaya — Rajasthan Heritage", institute: "KV Region 3", ageGroup: "12–16", capacity: 200, enrolled: 122, discount: 45, status: "Scheduled" },
  { id: 5, title: "IIM Ahmedabad — Adventure Ladakh", institute: "IIM Ahmedabad", ageGroup: "22–28", capacity: 30, enrolled: 4, discount: 20, status: "Draft" },
];

const columns: Column<Program>[] = [
  {
    key: "title",
    header: "Program",
    render: (p) => (
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary/10 text-secondary"><GraduationCap className="h-5 w-5" /></div>
        <div>
          <div className="text-sm font-semibold">{p.title}</div>
          <div className="text-[11px] text-muted-foreground">{p.institute} · Ages {p.ageGroup}</div>
        </div>
      </div>
    ),
  },
  {
    key: "enrolled",
    header: "Enrollment",
    render: (p) => {
      const pct = Math.round((p.enrolled / p.capacity) * 100);
      return (
        <div>
          <div className="text-xs">{p.enrolled}/{p.capacity}</div>
          <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-muted"><div className="h-full bg-secondary" style={{ width: `${pct}%` }} /></div>
        </div>
      );
    },
  },
  { key: "discount", header: "Discount", render: (p) => <span className="text-sm font-semibold text-accent">-{p.discount}%</span> },
  { key: "status", header: "Status", render: (p) => <StatusBadge status={p.status} /> },
];

function StudentsPage() {
  return (
    <AdminShell title="Student Tourism" breadcrumbs={[{ label: "Student Tourism" }]}>
      <EntityManager<Program>
        columns={columns}
        data={rows}
        searchKeys={["title", "institute"]}
        tabs={[{ label: "All", value: "all", count: rows.length }, { label: "Live", value: "l", count: 3 }, { label: "Scheduled", value: "s", count: 1 }, { label: "Drafts", value: "d", count: 1 }]}
        primaryAction="New program"
      />
    </AdminShell>
  );
}
