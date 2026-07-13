import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/admin/sports")({
  component: SportsPage,
});

type Event = { id: number; name: string; sport: string; state: string; venue: string; date: string; status: "Published" | "Scheduled" | "Draft" };

const rows: Event[] = [
  { id: 1, name: "Khelo India Youth Games", sport: "Multi-sport", state: "Tamil Nadu", venue: "JLN Stadium, Chennai", date: "12–20 Aug 2026", status: "Published" },
  { id: 2, name: "Ladakh Ice Hockey Championship", sport: "Ice Hockey", state: "Ladakh", venue: "Karzoo Ice Rink, Leh", date: "05–10 Jan 2027", status: "Scheduled" },
  { id: 3, name: "Kerala Snake Boat Race", sport: "Rowing", state: "Kerala", venue: "Punnamada Lake", date: "10 Aug 2026", status: "Published" },
  { id: 4, name: "Rann Utsav Marathon", sport: "Marathon", state: "Gujarat", venue: "White Rann, Kutch", date: "18 Dec 2026", status: "Published" },
  { id: 5, name: "Himalayan MTB Rally", sport: "Cycling", state: "Uttarakhand", venue: "Manali → Leh", date: "01–14 Sep 2026", status: "Draft" },
];

const columns: Column<Event>[] = [
  {
    key: "name", header: "Event",
    render: (e) => (
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-accent/10 text-accent"><Trophy className="h-5 w-5" /></div>
        <div><div className="text-sm font-semibold">{e.name}</div><div className="text-[11px] text-muted-foreground">{e.sport}</div></div>
      </div>
    ),
  },
  { key: "state", header: "State" },
  { key: "venue", header: "Venue" },
  { key: "date", header: "Schedule", className: "text-muted-foreground" },
  { key: "status", header: "Status", render: (e) => <StatusBadge status={e.status} /> },
];

function SportsPage() {
  return (
    <AdminShell title="Sports Tourism" breadcrumbs={[{ label: "Sports Tourism" }]}>
      <EntityManager<Event> columns={columns} data={rows} searchKeys={["name", "state", "venue", "sport"]} primaryAction="New event" />
    </AdminShell>
  );
}
