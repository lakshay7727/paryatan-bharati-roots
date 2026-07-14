import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bell, Compass, Heart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "AI Planner", to: "/ai-planner" as const },
  { label: "Destinations", to: "/destinations" as const },
  { label: "Packages", to: "/packages" as const },
  { label: "Training", to: "/training" as const },
  { label: "Rewards", to: "/rewards" as const },
  { label: "Blogs", to: "/blogs" as const },
  { label: "About", to: "/about" as const },
  { label: "FAQ", to: "/faq" as const },
  { label: "Contact", to: "/contact" as const },
  { label: "Dashboard", to: "/dashboard" as const },
  { label: "Admin", to: "/admin" as const },
];

interface SiteHeaderProps {
  transparentOnTop?: boolean;
}

export function SiteHeader({ transparentOnTop = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const transparent = transparentOnTop && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/90 backdrop-blur-md shadow-xs",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8",
          transparent && "text-primary-foreground",
        )}
      >
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-md shadow-sm",
              transparent ? "bg-gradient-sunset text-accent-foreground" : "bg-gradient-royal text-primary-foreground",
            )}
          >
            <Compass className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-base font-semibold leading-tight",
                transparent ? "text-primary-foreground" : "text-foreground",
              )}
            >
              Paryatan Bharati
            </span>
            <span
              className={cn(
                "text-overline block text-[10px]",
                transparent ? "text-primary-foreground/70" : "text-muted-foreground",
              )}
            >
              Incredible India, Digitally
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                  transparent
                    ? "text-primary-foreground/85 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            <IconAction transparent={transparent} label="Search">
              <Search className="h-5 w-5" />
            </IconAction>
            <IconAction transparent={transparent} label="Wishlist">
              <Heart className="h-5 w-5" />
            </IconAction>
            <IconAction transparent={transparent} label="Notifications">
              <Bell className="h-5 w-5" />
            </IconAction>
            <IconAction transparent={transparent} label="Profile">
              <User className="h-5 w-5" />
            </IconAction>
          </div>

          <Button asChild variant="hero" size="default" className="ml-2 hidden md:inline-flex">
            <Link to="/ai-planner">Plan My Trip</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "min-h-11 min-w-11 xl:hidden",
                  transparent && "text-primary-foreground hover:bg-white/10 hover:text-primary-foreground",
                )}
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="font-display">Paryatan Bharati</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 px-4" aria-label="Mobile">
                {navLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="rounded-sm px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}
                <Button asChild variant="hero" className="mt-4">
                  <Link to="/ai-planner">Plan My Trip</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function IconAction({
  children,
  label,
  transparent,
}: {
  children: React.ReactNode;
  label: string;
  transparent: boolean;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      className={cn(
        "h-10 w-10",
        transparent
          ? "text-primary-foreground/90 hover:bg-white/10 hover:text-primary-foreground"
          : "text-muted-foreground hover:text-primary",
      )}
    >
      {children}
    </Button>
  );
}
