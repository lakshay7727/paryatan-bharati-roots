import { Link } from "@tanstack/react-router";
import { Compass } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-sunset shadow-sm">
                <Compass className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold">Paryatan Bharati</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              India's digital tourism ecosystem — uniting culture, heritage, education, adventure
              and travel in one trusted platform.
            </p>
          </div>
          <div>
            <h4 className="text-overline text-primary-foreground/60">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/design-system"
                  className="text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  Design System
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-overline text-primary-foreground/60">Pillars</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              <li>Heritage &amp; Culture</li>
              <li>Religious Tourism</li>
              <li>Adventure &amp; Sports</li>
              <li>Student &amp; Government Tourism</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Paryatan Bharati. Celebrating Incredible India.
        </div>
      </div>
    </footer>
  );
}
