import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { Church } from "lucide-react";

export const Route = createFileRoute("/admin/temples")({
  component: TemplesPage,
});

type Temple = { id: number; name: string; state: string; deity: string; timings: string; visitors: string; status: "Published" | "Draft" | "Featured" };

const rows: Temple[] = [
  { id: 1, name: "Kashi Vishwanath", state: "Uttar Pradesh", deity: "Lord Shiva", timings: "03:00 – 23:00", visitors: "38K/day", status: "Featured" },
  { id: 2, name: "Somnath Jyotirlinga", state: "Gujarat", deity: "Lord Shiva", timings: "06:00 – 21:30", visitors: "22K/day", status: "Published" },
  { id: 3, name: "Meenakshi Amman", state: "Tamil Nadu", deity: "Devi Meenakshi", timings: "05:00 – 22:00", visitors: "26K/day", status: "Featured" },
  { id: 4, name: "Jagannath Puri", state: "Odisha", deity: "Lord Jagannath", timings: "05:00 – 22:00", visitors: "45K/day", status: "Published" },
  { id: 5, name: "Kedarnath", state: "Uttarakhand", deity: "Lord Shiva", timings: "04:00 – 21:00", visitors: "12K/day", status: "Published" },
  { id: 6, name: "Padmanabhaswamy", state: "Kerala", deity: "Lord Vishnu", timings: "03:30 – 19:20", visitors: "10K/day", status: "Draft" },
];

const columns: Column<Temple>[] = [
  { key: "name", header: "Temple", render: (t) => (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-accent/10 text-accent"><Church className="h-5 w-5" /></div>
      <div><div className="text-sm font-semibold">{t.name}</div><div className="text-[11px] text-muted-foreground">{t.state} · {t.deity}</div></div>
    </div>
  ) },
  { key: "timings", header: "Timings" },
  { key: "visitors", header: "Footfall", render: (t) => <span className="text-sm font-semibold">{t.visitors}</span> },
  { key: "status", header: "Status", render: (t) => <StatusBadge status={t.status} /> },
];

function TemplesPage() {
  return (
    <AdminShell title="Temple Management" breadcrumbs={[{ label: "Temples" }]}>
      <EntityManager<Temple> columns={columns} data={rows} searchKeys={["name", "state", "deity"]} primaryAction="New temple" />
    </AdminShell>
  );
}
