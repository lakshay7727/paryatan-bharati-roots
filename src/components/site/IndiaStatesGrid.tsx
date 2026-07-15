import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

export const INDIAN_STATES = [
  { slug: "rajasthan", name: "Rajasthan", region: "West", tag: "Palaces & desert" },
  { slug: "kerala", name: "Kerala", region: "South", tag: "Backwaters" },
  { slug: "goa", name: "Goa", region: "West", tag: "Beaches" },
  { slug: "tamil-nadu", name: "Tamil Nadu", region: "South", tag: "Dravidian temples" },
  { slug: "karnataka", name: "Karnataka", region: "South", tag: "Hampi & coffee hills" },
  { slug: "maharashtra", name: "Maharashtra", region: "West", tag: "Caves & coast" },
  { slug: "gujarat", name: "Gujarat", region: "West", tag: "Rann of Kutch" },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", region: "North", tag: "Taj & Ganga" },
  { slug: "uttarakhand", name: "Uttarakhand", region: "North", tag: "Char Dham" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh", region: "North", tag: "Himalayan hills" },
  { slug: "ladakh", name: "Ladakh", region: "North", tag: "High altitude" },
  { slug: "jammu-kashmir", name: "Jammu & Kashmir", region: "North", tag: "Alpine lakes" },
  { slug: "punjab", name: "Punjab", region: "North", tag: "Golden Temple" },
  { slug: "delhi", name: "Delhi", region: "North", tag: "Capital heritage" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", region: "Central", tag: "Wildlife & Khajuraho" },
  { slug: "chhattisgarh", name: "Chhattisgarh", region: "Central", tag: "Tribal culture" },
  { slug: "odisha", name: "Odisha", region: "East", tag: "Sun Temple" },
  { slug: "west-bengal", name: "West Bengal", region: "East", tag: "Sundarbans" },
  { slug: "bihar", name: "Bihar", region: "East", tag: "Bodh Gaya" },
  { slug: "jharkhand", name: "Jharkhand", region: "East", tag: "Waterfalls" },
  { slug: "sikkim", name: "Sikkim", region: "North-East", tag: "Kanchenjunga" },
  { slug: "assam", name: "Assam", region: "North-East", tag: "Kaziranga" },
  { slug: "meghalaya", name: "Meghalaya", region: "North-East", tag: "Living root bridges" },
  { slug: "arunachal-pradesh", name: "Arunachal Pradesh", region: "North-East", tag: "Monasteries" },
  { slug: "nagaland", name: "Nagaland", region: "North-East", tag: "Hornbill Festival" },
  { slug: "manipur", name: "Manipur", region: "North-East", tag: "Loktak Lake" },
  { slug: "mizoram", name: "Mizoram", region: "North-East", tag: "Blue mountains" },
  { slug: "tripura", name: "Tripura", region: "North-East", tag: "Ujjayanta Palace" },
  { slug: "andhra-pradesh", name: "Andhra Pradesh", region: "South", tag: "Tirupati" },
  { slug: "telangana", name: "Telangana", region: "South", tag: "Charminar" },
  { slug: "haryana", name: "Haryana", region: "North", tag: "Kurukshetra" },
  { slug: "andaman-nicobar", name: "Andaman & Nicobar", region: "South", tag: "Coral islands" },
];

export function IndiaStatesGrid({ limit }: { limit?: number }) {
  const list = limit ? INDIAN_STATES.slice(0, limit) : INDIAN_STATES;
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list.map((s) => (
        <Link
          key={s.slug}
          to="/states/$slug"
          params={{ slug: s.slug }}
          className="surface-card hover-lift group flex items-center gap-3 p-4"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-royal-100 text-primary">
            <MapPin className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-semibold text-foreground">{s.name}</p>
            <p className="truncate text-xs text-muted-foreground">{s.region} · {s.tag}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
