import { Link } from "@tanstack/react-router";
import { Apple, Compass, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Play, Youtube } from "lucide-react";

const columns = [
  {
    heading: "Explore",
    links: ["Destinations", "Packages", "AI Trip Planner", "Wishlist", "Blogs"],
  },
  {
    heading: "Tourism Categories",
    links: ["Heritage & Culture", "Religious", "Adventure & Sports", "Student Tours", "Local Food"],
  },
  {
    heading: "Government",
    links: ["Ministry of Tourism", "Incredible India", "Dekho Apna Desh", "PRASHAD Scheme", "Swadesh Darshan"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
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
            <ul className="mt-6 space-y-2.5 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Transport Bhawan, New Delhi 110001
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                1800-11-1363 (Toll Free)
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                hello@paryatanbharati.in
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-overline text-primary-foreground/60">{col.heading}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      to="/"
                      className="text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-overline text-primary-foreground/60">Get the app</h4>
            <div className="mt-4 flex flex-col gap-3">
              <AppBadge icon={Apple} store="App Store" />
              <AppBadge icon={Play} store="Google Play" />
            </div>
            <h4 className="text-overline mt-8 text-primary-foreground/60">Follow</h4>
            <div className="mt-4 flex items-center gap-3">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-sm border border-primary-foreground/15 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Paryatan Bharati. Celebrating Incredible India.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
            <a href="#" className="hover:text-accent">Accessibility</a>
            <a href="#" className="hover:text-accent">RTI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AppBadge({ icon: Icon, store }: { icon: React.ElementType; store: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 rounded-md border border-primary-foreground/15 px-3 py-2 transition-colors hover:border-accent"
    >
      <Icon className="h-5 w-5 text-primary-foreground" />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-primary-foreground/60">
          Download on
        </span>
        <span className="text-sm font-semibold text-primary-foreground">{store}</span>
      </span>
    </a>
  );
}
