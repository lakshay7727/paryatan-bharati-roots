import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import { Bell, CreditCard, MessageSquare, ShieldCheck, Star, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/notifications")({
  component: NotificationsPage,
});

const items = [
  { icon: CreditCard, tone: "primary", title: "Payment received", detail: "₹64,800 · Booking PBK-24019 · Priya Ranganathan", time: "2m ago", unread: true },
  { icon: UserPlus, tone: "secondary", title: "New vendor application", detail: "Rohit Sharma — Rajasthan Heritage Co.", time: "18m ago", unread: true },
  { icon: Star, tone: "accent", title: "New review pending", detail: "5-star review on Kerala Backwaters — 6D", time: "1h ago", unread: true },
  { icon: MessageSquare, tone: "info", title: "Guide message", detail: "Meera Iyer sent an update for PBK-24019", time: "3h ago", unread: false },
  { icon: ShieldCheck, tone: "secondary", title: "KYC verified", detail: "8 tourists verified via DigiLocker", time: "5h ago", unread: false },
  { icon: Bell, tone: "accent", title: "Scheme deadline reminder", detail: "PRASHAD applications close in 3 days", time: "1d ago", unread: false },
];

const toneMap = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
  info: "bg-royal-100 text-royal-600",
} as const;

function NotificationsPage() {
  return (
    <AdminShell
      title="Notifications"
      breadcrumbs={[{ label: "Notifications" }]}
      actions={<Button variant="outline" size="sm">Mark all as read</Button>}
    >
      <div className="surface-card divide-y divide-border">
        {items.map((n, i) => (
          <div key={i} className={cn("flex items-start gap-3 p-4 transition-colors hover:bg-muted/40", n.unread && "bg-primary/5")}>
            <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-md", toneMap[n.tone as keyof typeof toneMap])}>
              <n.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold">{n.title}</div>
                {n.unread && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
              </div>
              <div className="text-sm text-muted-foreground">{n.detail}</div>
            </div>
            <div className="text-[11px] text-muted-foreground whitespace-nowrap">{n.time}</div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
