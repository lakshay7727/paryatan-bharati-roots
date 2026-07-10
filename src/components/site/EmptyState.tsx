import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="surface-card mx-auto flex max-w-lg flex-col items-center gap-4 px-8 py-14 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-royal-50 text-primary">
        <Icon className="h-7 w-7" />
      </span>
      <div className="space-y-1.5">
        <h2 className="text-h3">{title}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {actionLabel && (
        <Button variant="hero" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
