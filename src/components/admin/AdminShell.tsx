import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users,
  Package,
  MapPin,
  CalendarCheck,
  Landmark,
  GraduationCap,
  Trophy,
  Church,
  Castle,
  UtensilsCrossed,
  BookOpen,
  Newspaper,
  Building2,
  Images,
  Star,
  Bell,
  FileBarChart,
  BarChart3,
  Settings,
  LogOut,
  Search,
  MessageSquare,
  Sun,
  Moon,
  Globe,
  ChevronsLeft,
  ChevronsRight,
  Compass,
  Plus,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
};

const navGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
      { label: "Analytics", to: "/admin/analytics", icon: BarChart3 },
      { label: "Reports", to: "/admin/reports", icon: FileBarChart },
    ],
  },
  {
    title: "Commerce",
    items: [
      { label: "Bookings", to: "/admin/bookings", icon: CalendarCheck, badge: "24" },
      { label: "Tour Packages", to: "/admin/packages", icon: Package },
      { label: "Users", to: "/admin/users", icon: Users },
      { label: "Reviews", to: "/admin/reviews", icon: Star, badge: "8" },
    ],
  },
  {
    title: "Content",
    items: [
      { label: "Destinations", to: "/admin/destinations", icon: MapPin },
      { label: "Temples", to: "/admin/temples", icon: Church },
      { label: "Heritage", to: "/admin/heritage", icon: Castle },
      { label: "Food Guide", to: "/admin/food", icon: UtensilsCrossed },
      { label: "Blogs", to: "/admin/blogs", icon: Newspaper },
      { label: "Gallery", to: "/admin/gallery", icon: Images },
    ],
  },
  {
    title: "Programs",
    items: [
      { label: "Government Schemes", to: "/admin/schemes", icon: Landmark },
      { label: "Student Tourism", to: "/admin/students", icon: GraduationCap },
      { label: "Sports Tourism", to: "/admin/sports", icon: Trophy },
      { label: "Training Center", to: "/admin/training", icon: BookOpen },
      { label: "Banking Partners", to: "/admin/banking", icon: Building2 },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Notifications", to: "/admin/notifications", icon: Bell, badge: "3" },
      { label: "Settings", to: "/admin/settings", icon: Settings },
    ],
  },
];

export function AdminShell({
  title,
  breadcrumbs = [],
  actions,
  children,
}: {
  title: string;
  breadcrumbs?: { label: string; to?: string }[];
  actions?: ReactNode;
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/admin" ? pathname === "/admin" : pathname.startsWith(to);

  return (
    <div className={cn("min-h-screen bg-[color:var(--sand-soft,theme(colors.muted.DEFAULT))]", dark && "dark")}>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={cn(
            "sticky top-0 z-40 hidden h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-300 lg:flex",
            collapsed ? "w-[76px]" : "w-[264px]",
          )}
        >
          <div className={cn("flex items-center gap-2.5 px-4 py-5", collapsed && "justify-center px-2")}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gradient-royal text-primary-foreground shadow-sm">
              <Compass className="h-5 w-5" />
            </span>
            {!collapsed && (
              <div className="min-w-0">
                <div className="truncate font-display text-sm font-semibold leading-tight">Paryatan Bharati</div>
                <div className="text-overline text-[10px] text-muted-foreground">Admin Console</div>
              </div>
            )}
          </div>

          <nav className="flex-1 overflow-y-auto px-3 pb-4" aria-label="Admin">
            {navGroups.map((group) => (
              <div key={group.title} className="mb-4">
                {!collapsed && (
                  <div className="text-overline px-3 py-2 text-[10px] text-muted-foreground">{group.title}</div>
                )}
                <ul className="space-y-0.5">
                  {group.items.map((item) => {
                    const active = isActive(item.to);
                    const Icon = item.icon;
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          title={collapsed ? item.label : undefined}
                          className={cn(
                            "group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all",
                            active
                              ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-xs"
                              : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                            collapsed && "justify-center px-0",
                          )}
                        >
                          <Icon className={cn("h-[18px] w-[18px] shrink-0", active && "text-primary")} />
                          {!collapsed && (
                            <>
                              <span className="flex-1 truncate">{item.label}</span>
                              {item.badge && (
                                <Badge variant="secondary" className="h-5 rounded-full bg-primary/10 px-2 text-[10px] font-semibold text-primary">
                                  {item.badge}
                                </Badge>
                              )}
                            </>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="border-t border-sidebar-border p-3">
            <button
              onClick={() => setCollapsed((c) => !c)}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              {collapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
              {!collapsed && <span>Collapse</span>}
            </button>
            <Link
              to="/"
              className={cn(
                "mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-destructive",
                collapsed && "justify-center",
              )}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span>Exit to site</span>}
            </Link>
          </div>
        </aside>

        {/* Main column */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Topbar */}
          <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
            <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
              <div className="relative hidden max-w-md flex-1 md:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search bookings, users, destinations…"
                  className="h-10 pl-9"
                />
              </div>
              <div className="flex-1 md:hidden" />
              <div className="flex items-center gap-1">
                <TopIcon label="Language">
                  <Globe className="h-[18px] w-[18px]" />
                </TopIcon>
                <TopIcon label="Theme" onClick={() => setDark((d) => !d)}>
                  {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
                </TopIcon>
                <TopIcon label="Messages">
                  <MessageSquare className="h-[18px] w-[18px]" />
                </TopIcon>
                <TopIcon label="Notifications">
                  <span className="relative">
                    <Bell className="h-[18px] w-[18px]" />
                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent ring-2 ring-background" />
                  </span>
                </TopIcon>
                <Button variant="hero" size="sm" className="ml-2 hidden md:inline-flex">
                  <Plus className="mr-1 h-4 w-4" /> Quick Create
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="ml-2 flex items-center gap-2 rounded-full border border-border bg-card px-1.5 py-1 pr-3 shadow-xs transition-shadow hover:shadow-sm">
                      <Avatar className="h-7 w-7">
                        <AvatarFallback className="bg-gradient-royal text-[11px] font-semibold text-primary-foreground">
                          AR
                        </AvatarFallback>
                      </Avatar>
                      <span className="hidden text-left sm:block">
                        <span className="block text-xs font-semibold leading-tight">Aarav Sharma</span>
                        <span className="block text-[10px] text-muted-foreground">Super Admin</span>
                      </span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Preferences</DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/settings">Workspace settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/">Back to site</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {/* Sub-header: title + breadcrumbs + actions */}
            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border/60 px-4 py-4 sm:px-6 lg:px-8">
              <div className="min-w-0">
                <nav className="mb-1 flex items-center gap-1 text-[12px] text-muted-foreground" aria-label="Breadcrumb">
                  <Link to="/admin" className="hover:text-primary">Admin</Link>
                  {breadcrumbs.map((b, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <ChevronRight className="h-3 w-3" />
                      {b.to ? (
                        <Link to={b.to} className="hover:text-primary">{b.label}</Link>
                      ) : (
                        <span className="text-foreground">{b.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
                <h1 className="text-h2 font-display truncate text-foreground">{title}</h1>
              </div>
              {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
            </div>
          </header>

          <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

function TopIcon({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Button variant="ghost" size="icon" aria-label={label} onClick={onClick} className="h-10 w-10 text-muted-foreground hover:text-primary">
      {children}
    </Button>
  );
}
