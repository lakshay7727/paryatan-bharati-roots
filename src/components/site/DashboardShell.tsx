import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Award,
  Bell,
  BookOpen,
  CalendarCheck2,
  Compass,
  Cog,
  GraduationCap,
  Heart,
  LayoutDashboard,
  LogOut,
  Search,
  Sparkles,
  Star,
  User as UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "My Trips", to: "/bookings", icon: CalendarCheck2 },
  { label: "Wishlist", to: "/wishlist", icon: Heart },
  { label: "Reviews", to: "/reviews/new", icon: Star },
  { label: "Certificates", to: "/certificates", icon: Award },
  { label: "Rewards", to: "/rewards", icon: Sparkles },
  { label: "Training", to: "/training", icon: GraduationCap },
  { label: "Notifications", to: "/notifications", icon: Bell },
  { label: "Profile", to: "/profile", icon: UserIcon },
  { label: "Settings", to: "/settings", icon: Cog },
];

export function DashboardShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-dvh bg-sand-warm/30">
      <div className="grid lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-border bg-background lg:sticky lg:top-0 lg:block lg:h-dvh">
          <div className="flex h-full flex-col p-4">
            <Link to="/" className="mb-6 flex items-center gap-2.5 px-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-royal text-primary-foreground shadow-sm">
                <Compass className="h-4.5 w-4.5" />
              </span>
              <span>
                <span className="block font-display text-sm font-semibold leading-tight">Paryatan Bharati</span>
                <span className="text-overline block text-[10px] text-muted-foreground">My workspace</span>
              </span>
            </Link>
            <nav className="flex-1 space-y-0.5" aria-label="Dashboard">
              {nav.map((n) => {
                const active = pathname === n.to || (n.to !== "/dashboard" && pathname.startsWith(n.to));
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      active ? "bg-royal-50 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <n.icon className="h-4 w-4" /> {n.label}
                  </Link>
                );
              })}
            </nav>
            <div className="surface-card mt-4 space-y-3 p-4">
              <p className="text-overline text-primary">Upgrade</p>
              <p className="text-sm">Unlock premium AI itineraries and free cancellations.</p>
              <Button variant="hero" size="sm" className="w-full">Go Premium</Button>
            </div>
            <Link to="/auth/login" className="mt-4 flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-destructive">
              <LogOut className="h-4 w-4" /> Sign out
            </Link>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:px-8">
            <div className="relative hidden max-w-sm flex-1 md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search destinations, bookings, guides…" className="pl-9" />
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex"><Link to="/ai-planner"><Sparkles className="h-4 w-4" /> Plan with AI</Link></Button>
              <Button asChild variant="ghost" size="icon" aria-label="Notifications"><Link to="/notifications"><Bell className="h-5 w-5" /></Link></Button>
              <Button asChild variant="ghost" size="icon" aria-label="Wishlist"><Link to="/wishlist"><Heart className="h-5 w-5" /></Link></Button>
              <Button asChild variant="ghost" size="icon" aria-label="Docs"><Link to="/faq"><BookOpen className="h-5 w-5" /></Link></Button>
              <Link to="/profile" className="ml-1 flex items-center gap-2 rounded-full border border-border bg-background px-1 py-1 pr-3 hover:border-primary">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-sunset text-xs font-semibold text-accent-foreground">PS</span>
                <span className="hidden text-sm font-medium sm:inline">Priya</span>
              </Link>
            </div>
          </header>

          <main className="px-4 py-8 sm:px-8 lg:py-10">
            <div className="mb-8">
              <h1 className="text-hero font-display">{title}</h1>
              {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
