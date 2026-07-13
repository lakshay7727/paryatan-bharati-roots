import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { Castle } from "lucide-react";

export const Route = createFileRoute("/admin/heritage")({
  component: HeritagePage,
});

type Site = { id: number; name: string; state: string; era: string; type: string; unesco: boolean; status: "Published" | "Draft" | "Featured" };

const rows: Site[] = [
  { id: 1, name: "Taj Mahal", state: "Uttar Pradesh", era: "1653 CE · Mughal", type: "Monument", unesco: true, status: "Featured" },
  { id: 2, name: "Hampi Ruins", state: "Karnataka", era: "14th c. · Vijayanagara", type: "Ruins", unesco: true, status: "Published" },
  { id: 3, name: "Ajanta Caves", state: "Maharashtra", era: "2nd c. BCE", type: "Cave art", unesco: true, status: "Published" },
  { id: 4, name: "Konark Sun Temple", state: "Odisha", era: "1250 CE", type: "Temple", unesco: true, status: "Published" },
  { id: 5, name: "Qutub Minar", state: "Delhi", era: "1193 CE", type: "Monument", unesco: true, status: "Featured" },
  { id: 6, name: "Champaner-Pavagadh", state: "Gujarat", era: "8th c.", type: "Archaeological", unesco: true, status: "Draft" },
];

const columns: Column<Site>[] = [
  { key: "name", header: "Site", render: (s) => (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><Castle className="h-5 w-5" /></div>
      <div><div className="text-sm font-semibold">{s.name}</div><div className="text-[11px] text-muted-foreground">{s.state} · {s.era}</div></div>
    </div>
  ) },
  { key: "type", header: "Type" },
  { key: "unesco", header: "UNESCO", render: (s) => s.unesco ? <StatusBadge status="Verified" /> : <span className="text-xs text-muted-foreground">—</span> },
  { key: "status", header: "Status", render: (s) => <StatusBadge status={s.status} /> },
];

function HeritagePage() {
  return (
    <AdminShell title="Culture & Heritage" breadcrumbs={[{ label: "Heritage" }]}>
      <EntityManager<Site> columns={columns} data={rows} searchKeys={["name", "state", "type"]} primaryAction="New heritage site" />
    </AdminShell>
  );
}
