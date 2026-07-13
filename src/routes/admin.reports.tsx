import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet, FileDown, Calendar, MapPin, Package } from "lucide-react";

export const Route = createFileRoute("/admin/reports")({
  component: ReportsPage,
});

const reports = [
  { icon: Calendar, title: "Monthly revenue report", desc: "Package-wise breakdown of ₹1.28 Cr in July 2026.", tags: ["Monthly", "Revenue"] },
  { icon: Calendar, title: "Yearly performance", desc: "FY 2025-26 tourism performance across 28 states.", tags: ["Yearly", "Executive"] },
  { icon: MapPin, title: "State-wise tourism report", desc: "Visitor spread, revenue and top destinations by state.", tags: ["State", "Geography"] },
  { icon: Package, title: "Package sales report", desc: "Occupancy, ADR and cancellations across 182 live packages.", tags: ["Package", "Commercial"] },
  { icon: Calendar, title: "Booking pipeline", desc: "Confirmed, pending, cancelled and refunded bookings.", tags: ["Booking", "Operations"] },
  { icon: MapPin, title: "Government scheme uptake", desc: "Application funnel across 24 active schemes.", tags: ["Schemes", "Compliance"] },
];

function ReportsPage() {
  return (
    <AdminShell
      title="Reports"
      breadcrumbs={[{ label: "Reports" }]}
      actions={<Button variant="hero" size="sm">Schedule report</Button>}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((r) => (
          <div key={r.title} className="surface-card hover-lift flex flex-col p-5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><r.icon className="h-5 w-5" /></span>
            <div className="mt-3 font-display text-h4">{r.title}</div>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{r.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {r.tags.map((t) => (
                <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm"><FileText className="mr-1 h-3.5 w-3.5" /> PDF</Button>
              <Button variant="outline" size="sm"><FileSpreadsheet className="mr-1 h-3.5 w-3.5" /> Excel</Button>
              <Button variant="outline" size="sm"><FileDown className="mr-1 h-3.5 w-3.5" /> CSV</Button>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
