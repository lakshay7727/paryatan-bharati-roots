import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { EntityManager, StatusBadge, type Column } from "@/components/admin/EntityManager";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BadgeCheck, Shield } from "lucide-react";

export const Route = createFileRoute("/admin/users")({
  component: UsersPage,
});

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "Tourist" | "Guide" | "Vendor" | "Editor" | "Admin";
  status: "Active" | "Pending" | "Suspended";
  verified: boolean;
  joined: string;
  initials: string;
};

const users: User[] = [
  { id: 1, name: "Priya Ranganathan", email: "priya.r@paryatan.in", phone: "+91 98450 12345", role: "Tourist", status: "Active", verified: true, joined: "12 Mar 2025", initials: "PR" },
  { id: 2, name: "Arjun Kapoor", email: "arjun.k@gmail.com", phone: "+91 99000 87654", role: "Tourist", status: "Active", verified: true, joined: "04 Apr 2025", initials: "AK" },
  { id: 3, name: "Meera Iyer", email: "meera@keralatours.in", phone: "+91 94470 22110", role: "Guide", status: "Active", verified: true, joined: "18 Jan 2025", initials: "MI" },
  { id: 4, name: "Rohit Sharma", email: "rohit@rajasthanheritage.co", phone: "+91 98200 33445", role: "Vendor", status: "Pending", verified: false, joined: "22 Jun 2025", initials: "RS" },
  { id: 5, name: "Ananya Verma", email: "ananya@paryatan.in", phone: "+91 90000 11223", role: "Editor", status: "Active", verified: true, joined: "09 Feb 2025", initials: "AV" },
  { id: 6, name: "Karan Malhotra", email: "karan.m@yahoo.com", phone: "+91 88800 44556", role: "Tourist", status: "Suspended", verified: false, joined: "30 May 2025", initials: "KM" },
  { id: 7, name: "Sana Desai", email: "sana.d@outlook.com", phone: "+91 98988 55667", role: "Tourist", status: "Active", verified: true, joined: "01 Jul 2025", initials: "SD" },
  { id: 8, name: "Vikram Singh", email: "vikram@ladakhtrails.in", phone: "+91 95550 77889", role: "Guide", status: "Active", verified: true, joined: "14 Dec 2024", initials: "VS" },
];

const columns: Column<User>[] = [
  {
    key: "name",
    header: "User",
    render: (u) => (
      <div className="flex items-center gap-2.5">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-gradient-royal text-[11px] font-semibold text-primary-foreground">{u.initials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <div className="flex items-center gap-1 text-sm font-semibold">
            {u.name}
            {u.verified && <BadgeCheck className="h-3.5 w-3.5 text-primary" />}
          </div>
          <div className="text-[11px] text-muted-foreground">{u.email}</div>
        </div>
      </div>
    ),
  },
  { key: "phone", header: "Phone" },
  {
    key: "role",
    header: "Role",
    render: (u) => (
      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium">
        {u.role === "Admin" && <Shield className="h-3 w-3 text-primary" />} {u.role}
      </span>
    ),
  },
  { key: "status", header: "Status", render: (u) => <StatusBadge status={u.status} /> },
  { key: "verified", header: "Verification", render: (u) => <StatusBadge status={u.verified ? "Verified" : "Pending"} /> },
  { key: "joined", header: "Joined", className: "text-muted-foreground" },
];

function UsersPage() {
  return (
    <AdminShell
      title="Users"
      breadcrumbs={[{ label: "Users" }]}
    >
      <EntityManager<User>
        columns={columns}
        data={users}
        searchKeys={["name", "email", "phone"]}
        tabs={[
          { label: "All", value: "all", count: users.length },
          { label: "Tourists", value: "t", count: 4 },
          { label: "Guides", value: "g", count: 2 },
          { label: "Vendors", value: "v", count: 1 },
          { label: "Suspended", value: "s", count: 1 },
        ]}
        primaryAction="Invite user"
      />
    </AdminShell>
  );
}
