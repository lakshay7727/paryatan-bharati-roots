import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DestinationCardProps {
  image: string;
  title: string;
  region: string;
  category: string;
  rating: number;
}

export function DestinationCard({ image, title, region, category, rating }: DestinationCardProps) {
  return (
    <article className="surface-card hover-lift group overflow-hidden">
      <div className="img-zoom aspect-[4/5]">
        <img
          src={image}
          alt={`${title}, ${region}`}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
            {category}
          </Badge>
          <span className="flex items-center gap-1 text-sm font-medium text-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
            {rating.toFixed(1)}
          </span>
        </div>
        <h3 className="text-h4 mt-3 text-foreground">{title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {region}
        </p>
      </div>
    </article>
  );
}
