import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { IndianRupee, Users2 } from "lucide-react";

export const Route = createFileRoute("/admin/packages")({
  component: PackagesPage,
});

type Package = {
  id: number;
  code: string;
  title: string;
  region: string;
  duration: string;
  price: number;
  discount: number;
  seats: number;
  sold: number;
  status: "Published" | "Draft" | "Scheduled" | "Archived";
};

const rows: Package[] = [
  { id: 1, code: "GT-DLX-05", title: "Golden Triangle Deluxe", region: "Delhi · Agra · Jaipur", duration: "5N/6D", price: 24800, discount: 12, seats: 60, sold: 48, status: "Published" },
  { id: 2, code: "KL-BCK-06", title: "Kerala Backwaters Escape", region: "Kochi · Alleppey · Munnar", duration: "6N/7D", price: 32500, discount: 8, seats: 40, sold: 32, status: "Published" },
  { id: 3, code: "LD-ADV-08", title: "Ladakh High Altitude Adventure", region: "Leh · Nubra · Pangong", duration: "8N/9D", price: 48500, discount: 15, seats: 24, sold: 21, status: "Published" },
  { id: 4, code: "RJ-ROY-10", title: "Rajasthan Royal Circuit", region: "Jaipur · Jodhpur · Udaipur", duration: "10N/11D", price: 62000, discount: 10, seats: 30, sold: 12, status: "Scheduled" },
  { id: 5, code: "VN-SPR-03", title: "Varanasi Spiritual Trail", region: "Varanasi · Sarnath", duration: "3N/4D", price: 14200, discount: 5, seats: 50, sold: 44, status: "Published" },
  { id: 6, code: "NE-7SIS-12", title: "Seven Sisters — Northeast", region: "Assam · Meghalaya · Nagaland", duration: "12N/13D", price: 78500, discount: 18, seats: 20, sold: 4, status: "Draft" },
  { id: 7, code: "GA-BCH-04", title: "Goa Coastal Escape", region: "North & South Goa", duration: "4N/5D", price: 18900, discount: 20, seats: 80, sold: 71, status: "Published" },
  { id: 8, code: "HM-TRK-07", title: "Himalayan Trekking Trail", region: "Uttarakhand", duration: "7N/8D", price: 34500, discount: 0, seats: 25, sold: 18, status: "Archived" },
];

const columns: Column<Package>[] = [
  {
    key: "title",
    header: "Package",
    render: (p) => (
      <div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.code}</div>
        <div className="text-sm font-semibold">{p.title}</div>
        <div className="text-[11px] text-muted-foreground">{p.region}</div>
      </div>
    ),
  },
  { key: "duration", header: "Duration" },
  {
    key: "price",
    header: "Price",
    render: (p) => (
      <div>
        <div className="inline-flex items-center text-sm font-semibold"><IndianRupee className="h-3.5 w-3.5" />{p.price.toLocaleString("en-IN")}</div>
        {p.discount > 0 && <div className="text-[11px] text-accent">-{p.discount}% offer</div>}
      </div>
    ),
  },
  {
    key: "sold",
    header: "Occupancy",
    render: (p) => {
      const pct = Math.round((p.sold / p.seats) * 100);
      return (
        <div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground"><Users2 className="h-3 w-3" /> {p.sold}/{p.seats}</div>
          <div className="mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-gradient-royal" style={{ width: `${pct}%` }} />
          </div>
        </div>
      );
    },
  },
  { key: "status", header: "Status", render: (p) => <StatusBadge status={p.status} /> },
];

function PackagesPage() {
  return (
    <AdminShell title="Tour Packages" breadcrumbs={[{ label: "Packages" }]}>
      <EntityManager<Package>
        columns={columns}
        data={rows}
        searchKeys={["title", "code", "region"]}
        tabs={[
          { label: "All", value: "all", count: rows.length },
          { label: "Published", value: "p", count: 5 },
          { label: "Drafts", value: "d", count: 1 },
          { label: "Scheduled", value: "s", count: 1 },
          { label: "Archived", value: "a", count: 1 },
        ]}
        primaryAction="New package"
      />
    </AdminShell>
  );
}
