import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/admin/schemes")({
  component: SchemesPage,
});

type Scheme = {
  id: number;
  code: string;
  name: string;
  ministry: string;
  eligibility: string;
  lastDate: string;
  status: "Published" | "Draft" | "Scheduled";
};

const rows: Scheme[] = [
  { id: 1, code: "MOT-2026-01", name: "Swadesh Darshan 2.0 — Heritage Circuit", ministry: "Ministry of Tourism", eligibility: "State PSUs, DMOs", lastDate: "30 Sep 2026", status: "Published" },
  { id: 2, code: "PRSD-26-03", name: "PRASHAD — Pilgrimage Rejuvenation", ministry: "Ministry of Tourism", eligibility: "Temple trusts, PSUs", lastDate: "15 Oct 2026", status: "Published" },
  { id: 3, code: "DEK-26-11", name: "Dekho Apna Desh — Student Grant", ministry: "MoT + MoE", eligibility: "Universities, Schools", lastDate: "05 Aug 2026", status: "Scheduled" },
  { id: 4, code: "NEC-2026", name: "North East Circuit Scheme", ministry: "MDoNER", eligibility: "NE state tourism boards", lastDate: "12 Sep 2026", status: "Published" },
  { id: 5, code: "GS-CULT-26", name: "Cultural Heritage Preservation Grant", ministry: "Ministry of Culture", eligibility: "NGOs, Cultural Trusts", lastDate: "—", status: "Draft" },
];

const columns: Column<Scheme>[] = [
  {
    key: "name",
    header: "Scheme",
    render: (s) => (
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><FileText className="h-5 w-5" /></div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.code}</div>
          <div className="text-sm font-semibold">{s.name}</div>
          <div className="text-[11px] text-muted-foreground">{s.ministry}</div>
        </div>
      </div>
    ),
  },
  { key: "eligibility", header: "Eligibility" },
  { key: "lastDate", header: "Last date", className: "text-muted-foreground" },
  { key: "status", header: "Status", render: (s) => <StatusBadge status={s.status} /> },
];

function SchemesPage() {
  return (
    <AdminShell title="Government Schemes" breadcrumbs={[{ label: "Government Schemes" }]}>
      <EntityManager<Scheme>
        columns={columns}
        data={rows}
        searchKeys={["name", "code", "ministry"]}
        tabs={[
          { label: "All", value: "all", count: rows.length },
          { label: "Live", value: "l", count: 3 },
          { label: "Scheduled", value: "s", count: 1 },
          { label: "Drafts", value: "d", count: 1 },
        ]}
        primaryAction="New scheme"
      />
    </AdminShell>
  );
}
