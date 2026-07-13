import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/admin/banking")({
  component: BankingPage,
});

type Partner = { id: number; bank: string; offer: string; discount: string; cards: string; emi: string; status: "Published" | "Scheduled" | "Draft" };

const rows: Partner[] = [
  { id: 1, bank: "HDFC Bank", offer: "10% off on international packages", discount: "Up to ₹8,000", cards: "Credit + Debit", emi: "3/6/12 months", status: "Published" },
  { id: 2, bank: "SBI", offer: "₹1,500 cashback on domestic trips", discount: "Flat ₹1,500", cards: "Credit", emi: "3/6 months", status: "Published" },
  { id: 3, bank: "ICICI Bank", offer: "Coral EMI on all packages", discount: "12% instant", cards: "Coral / Sapphiro", emi: "6/9/12 months", status: "Published" },
  { id: 4, bank: "Axis Bank", offer: "Weekend flash sale for Vistara cards", discount: "8%", cards: "Vistara Signature", emi: "3 months", status: "Scheduled" },
  { id: 5, bank: "Kotak", offer: "Student trip financing", discount: "0% interest", cards: "Kotak 811", emi: "12 months", status: "Draft" },
];

const columns: Column<Partner>[] = [
  { key: "bank", header: "Partner", render: (p) => (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><Building2 className="h-5 w-5" /></div>
      <div><div className="text-sm font-semibold">{p.bank}</div><div className="text-[11px] text-muted-foreground">{p.offer}</div></div>
    </div>
  ) },
  { key: "discount", header: "Discount", render: (p) => <span className="text-sm font-semibold text-secondary">{p.discount}</span> },
  { key: "cards", header: "Eligible cards" },
  { key: "emi", header: "EMI" },
  { key: "status", header: "Status", render: (p) => <StatusBadge status={p.status} /> },
];

function BankingPage() {
  return (
    <AdminShell title="Banking Partners" breadcrumbs={[{ label: "Banking" }]}>
      <EntityManager<Partner> columns={columns} data={rows} searchKeys={["bank", "offer"]} primaryAction="New partner" />
    </AdminShell>
  );
}
