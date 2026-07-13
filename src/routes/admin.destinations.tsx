import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { MapPin, Star } from "lucide-react";

export const Route = createFileRoute("/admin/destinations")({
  component: DestinationsPage,
});

type Destination = {
  id: number;
  name: string;
  state: string;
  category: string;
  rating: number;
  packages: number;
  status: "Published" | "Draft" | "Featured";
};

const rows: Destination[] = [
  { id: 1, name: "Jaipur", state: "Rajasthan", category: "Heritage", rating: 4.8, packages: 32, status: "Featured" },
  { id: 2, name: "Alleppey Backwaters", state: "Kerala", category: "Nature", rating: 4.9, packages: 18, status: "Published" },
  { id: 3, name: "Leh–Ladakh", state: "Ladakh", category: "Adventure", rating: 4.9, packages: 24, status: "Featured" },
  { id: 4, name: "Varanasi Ghats", state: "Uttar Pradesh", category: "Spiritual", rating: 4.7, packages: 14, status: "Published" },
  { id: 5, name: "Hampi", state: "Karnataka", category: "Heritage", rating: 4.6, packages: 9, status: "Published" },
  { id: 6, name: "Ziro Valley", state: "Arunachal Pradesh", category: "Culture", rating: 4.7, packages: 4, status: "Draft" },
  { id: 7, name: "Rann of Kutch", state: "Gujarat", category: "Nature", rating: 4.8, packages: 11, status: "Published" },
  { id: 8, name: "Andaman Islands", state: "Andaman", category: "Beach", rating: 4.8, packages: 21, status: "Featured" },
];

const columns: Column<Destination>[] = [
  {
    key: "name",
    header: "Destination",
    render: (d) => (
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
        <div>
          <div className="text-sm font-semibold">{d.name}</div>
          <div className="text-[11px] text-muted-foreground">{d.state}</div>
        </div>
      </div>
    ),
  },
  { key: "category", header: "Category" },
  {
    key: "rating",
    header: "Rating",
    render: (d) => (
      <div className="inline-flex items-center gap-1 text-sm font-semibold"><Star className="h-3.5 w-3.5 fill-accent text-accent" /> {d.rating}</div>
    ),
  },
  { key: "packages", header: "Packages", render: (d) => <span className="text-sm font-semibold">{d.packages}</span> },
  { key: "status", header: "Status", render: (d) => <StatusBadge status={d.status} /> },
];

function DestinationsPage() {
  return (
    <AdminShell title="Destinations" breadcrumbs={[{ label: "Destinations" }]}>
      <EntityManager<Destination>
        columns={columns}
        data={rows}
        searchKeys={["name", "state", "category"]}
        tabs={[
          { label: "All", value: "all", count: rows.length },
          { label: "Featured", value: "f", count: 3 },
          { label: "Heritage", value: "h", count: 2 },
          { label: "Nature", value: "n", count: 2 },
          { label: "Drafts", value: "d", count: 1 },
        ]}
        primaryAction="New destination"
      />
    </AdminShell>
  );
}
