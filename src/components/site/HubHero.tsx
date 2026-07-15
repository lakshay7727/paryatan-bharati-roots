import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Crumb { label: string; to?: string }
interface HubHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  crumbs?: Crumb[];
  actions?: ReactNode;
}

export function HubHero({ eyebrow, title, description, image, crumbs, actions }: HubHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-primary-foreground">
      <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-scrim absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {crumbs && (
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-primary-foreground/75" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.to ? <Link to={c.to} className="hover:text-accent">{c.label}</Link> : <span>{c.label}</span>}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-60" />}
              </span>
            ))}
          </nav>
        )}
        <p className="text-overline text-accent">{eyebrow}</p>
        <h1 className={cn("text-hero mt-2 max-w-3xl")}>{title}</h1>
        {description && <p className="text-body-lg mt-4 max-w-2xl text-primary-foreground/85">{description}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
