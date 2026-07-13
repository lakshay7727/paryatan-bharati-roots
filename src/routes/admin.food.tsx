import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { UtensilsCrossed, Star } from "lucide-react";

export const Route = createFileRoute("/admin/food")({
  component: FoodPage,
});

type Dish = { id: number; name: string; cuisine: string; city: string; restaurant: string; rating: number; status: "Published" | "Draft" | "Featured" };

const rows: Dish[] = [
  { id: 1, name: "Rogan Josh Thali", cuisine: "Kashmiri", city: "Srinagar", restaurant: "Ahdoos", rating: 4.8, status: "Featured" },
  { id: 2, name: "Sadhya", cuisine: "Kerala", city: "Thrissur", restaurant: "Pathayam", rating: 4.9, status: "Published" },
  { id: 3, name: "Litti Chokha", cuisine: "Bihari", city: "Patna", restaurant: "Bihar Da Dhaba", rating: 4.6, status: "Published" },
  { id: 4, name: "Dal Baati Churma", cuisine: "Rajasthani", city: "Jodhpur", restaurant: "Chokhi Dhani", rating: 4.7, status: "Featured" },
  { id: 5, name: "Momos & Thukpa", cuisine: "Tibetan", city: "Leh", restaurant: "Bon Appétit", rating: 4.5, status: "Published" },
  { id: 6, name: "Puchka", cuisine: "Bengali", city: "Kolkata", restaurant: "Vivekananda Park", rating: 4.8, status: "Draft" },
];

const columns: Column<Dish>[] = [
  { key: "name", header: "Dish", render: (d) => (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-accent/10 text-accent"><UtensilsCrossed className="h-5 w-5" /></div>
      <div><div className="text-sm font-semibold">{d.name}</div><div className="text-[11px] text-muted-foreground">{d.cuisine} · {d.city}</div></div>
    </div>
  ) },
  { key: "restaurant", header: "Restaurant" },
  { key: "rating", header: "Rating", render: (d) => <span className="inline-flex items-center gap-1 text-sm font-semibold"><Star className="h-3.5 w-3.5 fill-accent text-accent" />{d.rating}</span> },
  { key: "status", header: "Status", render: (d) => <StatusBadge status={d.status} /> },
];

function FoodPage() {
  return (
    <AdminShell title="Local Food Guide" breadcrumbs={[{ label: "Food Guide" }]}>
      <EntityManager<Dish> columns={columns} data={rows} searchKeys={["name", "city", "cuisine", "restaurant"]} primaryAction="New entry" />
    </AdminShell>
  );
}
