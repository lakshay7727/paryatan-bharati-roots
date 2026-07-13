import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type StatCardProps = {
  label: string;
  value: string;
  delta: number; // % change
  compare?: string;
  icon: LucideIcon;
  accent?: "primary" | "secondary" | "accent" | "info";
  spark?: number[];
};

const accentMap = {
  primary: "text-primary bg-primary/10",
  secondary: "text-secondary bg-secondary/10",
  accent: "text-accent bg-accent/10",
  info: "text-royal-500 bg-royal-100",
} as const;

export function StatCard({
  label,
  value,
  delta,
  compare = "vs last month",
  icon: Icon,
  accent = "primary",
  spark = [3, 5, 4, 7, 6, 8, 7, 9, 8, 10, 9, 12],
}: StatCardProps) {
  const positive = delta >= 0;
  const max = Math.max(...spark);
  const min = Math.min(...spark);
  const points = spark
    .map((v, i) => {
      const x = (i / (spark.length - 1)) * 100;
      const y = 32 - ((v - min) / Math.max(1, max - min)) * 28;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="surface-card hover-lift group flex flex-col gap-4 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-overline text-[10px] text-muted-foreground">{label}</div>
          <div className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground">{value}</div>
        </div>
        <span className={cn("grid h-10 w-10 place-items-center rounded-md", accentMap[accent])}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex items-end justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-semibold",
              positive ? "bg-secondary/10 text-secondary" : "bg-destructive/10 text-destructive",
            )}
          >
            {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {Math.abs(delta)}%
          </span>
          <span className="text-muted-foreground">{compare}</span>
        </div>
        <svg viewBox="0 0 100 32" className="h-8 w-24 text-primary/70">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />
        </svg>
      </div>
    </div>
  );
}
