import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
  align = "left",
  children,
}: PageHeroProps) {
  const hasImage = Boolean(image);
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        hasImage ? "bg-charcoal text-primary-foreground" : "bg-sand-deep text-foreground",
      )}
    >
      {hasImage && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        </>
      )}
      <div
        className={cn(
          "relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
          align === "center" && "items-center text-center",
        )}
      >
        {crumbs && (
          <nav
            className={cn(
              "flex flex-wrap items-center gap-1 text-xs",
              hasImage ? "text-primary-foreground/75" : "text-muted-foreground",
            )}
            aria-label="Breadcrumb"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.to ? (
                  <Link to={c.to} className="hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-60" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p
            className={cn(
              "text-overline",
              hasImage ? "text-accent" : "text-primary",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="text-hero max-w-3xl">{title}</h1>
        {description && (
          <p
            className={cn(
              "text-body-lg max-w-2xl",
              hasImage ? "text-primary-foreground/85" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-4 w-full max-w-3xl">{children}</div>}
      </div>
    </section>
  );
}
