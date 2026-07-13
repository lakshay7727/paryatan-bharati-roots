import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { IndianRupee } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/admin/bookings")({
  component: BookingsPage,
});

type Booking = {
  id: string;
  tourist: string;
  initials: string;
  packageName: string;
  amount: number;
  status: "Confirmed" | "Pending" | "Cancelled" | "Refunded";
  payment: "Paid" | "Pending" | "Failed";
  travelDate: string;
  guide: string;
};

const rows: Booking[] = [
  { id: "PBK-24019", tourist: "Priya Ranganathan", initials: "PR", packageName: "Golden Triangle Deluxe", amount: 64800, status: "Confirmed", payment: "Paid", travelDate: "22 Jul 2026", guide: "Meera I." },
  { id: "PBK-24020", tourist: "Arjun Kapoor", initials: "AK", packageName: "Kerala Backwaters — 6D", amount: 42200, status: "Confirmed", payment: "Paid", travelDate: "01 Aug 2026", guide: "Meera I." },
  { id: "PBK-24021", tourist: "Sana Desai", initials: "SD", packageName: "Ladakh Adventure — 8D", amount: 92500, status: "Pending", payment: "Pending", travelDate: "12 Aug 2026", guide: "Vikram S." },
  { id: "PBK-24022", tourist: "Rohan Mehta", initials: "RM", packageName: "Varanasi Spiritual Trail", amount: 28900, status: "Confirmed", payment: "Paid", travelDate: "18 Jul 2026", guide: "Ravi K." },
  { id: "PBK-24023", tourist: "Ishaan Khanna", initials: "IK", packageName: "Rajasthan Royal — 10D", amount: 118000, status: "Refunded", payment: "Failed", travelDate: "29 Jul 2026", guide: "—" },
  { id: "PBK-24024", tourist: "Neha Bhatia", initials: "NB", packageName: "Goa Coastal Escape", amount: 21500, status: "Confirmed", payment: "Paid", travelDate: "05 Aug 2026", guide: "Alex D." },
  { id: "PBK-24025", tourist: "Aditya Rao", initials: "AR", packageName: "Hampi Heritage Walk", amount: 15600, status: "Cancelled", payment: "Refunded" as never, travelDate: "10 Aug 2026", guide: "—" },
];

const columns: Column<Booking>[] = [
  { key: "id", header: "Booking ID", render: (b) => <span className="font-mono text-[12px] font-semibold text-primary">{b.id}</span> },
  {
    key: "tourist",
    header: "Tourist",
    render: (b) => (
      <div className="flex items-center gap-2.5">
        <Avatar className="h-8 w-8"><AvatarFallback className="bg-gradient-royal text-[11px] font-semibold text-primary-foreground">{b.initials}</AvatarFallback></Avatar>
        <div><div className="text-sm font-semibold">{b.tourist}</div></div>
      </div>
    ),
  },
  { key: "packageName", header: "Package" },
  { key: "amount", header: "Amount", render: (b) => <span className="inline-flex items-center font-semibold"><IndianRupee className="h-3.5 w-3.5" />{b.amount.toLocaleString("en-IN")}</span> },
  { key: "status", header: "Status", render: (b) => <StatusBadge status={b.status} /> },
  { key: "payment", header: "Payment", render: (b) => <StatusBadge status={b.payment} /> },
  { key: "travelDate", header: "Travel Date", className: "text-muted-foreground" },
  { key: "guide", header: "Guide", className: "text-muted-foreground" },
];

function BookingsPage() {
  return (
    <AdminShell title="Bookings" breadcrumbs={[{ label: "Bookings" }]}>
      <EntityManager<Booking>
        columns={columns}
        data={rows}
        searchKeys={["id", "tourist", "packageName"]}
        tabs={[
          { label: "All", value: "all", count: rows.length },
          { label: "Confirmed", value: "c", count: 4 },
          { label: "Pending", value: "p", count: 1 },
          { label: "Cancelled", value: "x", count: 1 },
          { label: "Refunded", value: "r", count: 1 },
        ]}
        primaryAction="New booking"
      />
    </AdminShell>
  );
}
