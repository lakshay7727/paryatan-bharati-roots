import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Compass, ShieldCheck } from "lucide-react";
import heroTaj from "@/assets/hero-taj.jpg";

interface AuthShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="grid min-h-dvh lg:grid-cols-[1.05fr_1fr]">
      <aside className="relative isolate hidden overflow-hidden bg-charcoal text-primary-foreground lg:block">
        <img src={heroTaj} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-sunset text-accent-foreground shadow-sm">
              <Compass className="h-5 w-5" />
            </span>
            <span className="font-display text-base font-semibold">Paryatan Bharati</span>
          </Link>
          <div>
            <p className="text-overline text-sunset-200">Incredible India, Digitally</p>
            <h2 className="text-hero mt-3 max-w-md">Your passport to India's stories.</h2>
            <p className="mt-3 max-w-md text-primary-foreground/80">
              Verified heritage, government partnerships, AI-guided itineraries — one trusted account across every journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-primary-foreground/80">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Ministry of Tourism partner
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" /> 256-bit secure
              </span>
            </div>
          </div>
        </div>
      </aside>
      <section className="flex flex-col justify-center bg-background px-4 py-10 sm:px-10">
        <div className="mx-auto w-full max-w-md">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary lg:hidden">
            <Compass className="h-4 w-4" /> Paryatan Bharati
          </Link>
          <h1 className="text-h1 font-display">{title}</h1>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-8 text-sm text-muted-foreground">{footer}</div>}
        </div>
      </section>
    </div>
  );
}
