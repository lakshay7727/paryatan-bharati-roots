import { Link } from "@tanstack/react-router";
import { Compass, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Design System", to: "/design-system" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gradient-royal text-primary-foreground shadow-sm">
            <Compass className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold leading-tight text-foreground">
              Paryatan Bharati
            </span>
            <span className="text-overline block text-[10px] text-muted-foreground">
              Incredible India, Digitally
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
                activeProps={{ className: "active" }}
              >
                {l.label}
              </Link>
            ))}
            <Button variant="hero" size="default" className="ml-2">
              Plan a Trip
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="min-h-11 min-w-11 md:hidden"
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
                    key={l.to}
                    to={l.to}
                    className="rounded-sm px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}
                <Button variant="hero" className="mt-4">
                  Plan a Trip
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
