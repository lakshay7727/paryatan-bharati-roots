import type { ElementType } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

interface HubCardProps {
  to: string;
  params?: Record<string, string>;
  icon?: ElementType;
  image?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: string;
  tone?: "royal" | "emerald" | "sunset";
}

const toneMap = {
  royal: "bg-royal-100 text-primary",
  emerald: "bg-emerald-100 text-emerald-700",
  sunset: "bg-sunset-100 text-accent",
};

export function HubCard({ to, params, icon: Icon, image, eyebrow, title, description, meta, tone = "royal" }: HubCardProps) {
  const Inner = (
    <article className="surface-card hover-lift group flex h-full flex-col overflow-hidden">
      {image && (
        <div className="img-zoom aspect-[16/10]">
          <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          {Icon && !image && (
            <span className={"grid h-11 w-11 place-items-center rounded-md " + toneMap[tone]}>
              <Icon className="h-5 w-5" />
            </span>
          )}
          {eyebrow && <span className="text-overline text-primary">{eyebrow}</span>}
          <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <h3 className="text-h4 text-foreground">{title}</h3>
        {description && <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>}
        {meta && <p className="text-overline mt-auto text-muted-foreground">{meta}</p>}
      </div>
    </article>
  );
  // biome-ignore lint: link
  return params ? (
    <Link to={to as any} params={params as any}>{Inner}</Link>
  ) : (
    <Link to={to as any}>{Inner}</Link>
  );
}
