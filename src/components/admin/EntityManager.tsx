import { useMemo, useState } from "react";
import {
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type Column<T> = {
  key: keyof T | string;
  header: string;
  className?: string;
  render?: (row: T) => React.ReactNode;
};

export type EntityTab = { label: string; value: string; count?: number };

export function EntityManager<T extends { id: string | number }>({
  columns,
  data,
  tabs,
  searchKeys = [],
  primaryAction = "New",
  onAction,
}: {
  columns: Column<T>[];
  data: T[];
  tabs?: EntityTab[];
  searchKeys?: (keyof T)[];
  primaryAction?: string;
  onAction?: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<T["id"]>>(new Set());
  const [tab, setTab] = useState(tabs?.[0]?.value ?? "all");

  const filtered = useMemo(() => {
    if (!query) return data;
    const q = query.toLowerCase();
    return data.filter((row) =>
      searchKeys.some((k) => String(row[k] ?? "").toLowerCase().includes(q)),
    );
  }, [data, query, searchKeys]);

  const allChecked = filtered.length > 0 && filtered.every((r) => selected.has(r.id));

  return (
    <div className="surface-card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
        {tabs ? (
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="bg-muted/60">
              {tabs.map((t) => (
                <TabsTrigger key={t.value} value={t.value} className="text-xs">
                  {t.label}
                  {typeof t.count === "number" && (
                    <span className="ml-1.5 rounded-full bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
                      {t.count}
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        ) : (
          <div />
        )}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search…"
              className="h-9 w-64 pl-9"
            />
          </div>
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-1.5 h-4 w-4" /> Filters
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <SlidersHorizontal className="mr-1.5 h-4 w-4" /> Columns
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-1.5 h-4 w-4" /> Export
          </Button>
          <Button variant="hero" size="sm" className="h-9" onClick={onAction}>
            <Plus className="mr-1.5 h-4 w-4" /> {primaryAction}
          </Button>
        </div>
      </div>

      {selected.size > 0 && (
        <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-4 py-2 text-sm">
          <span className="font-medium text-primary">{selected.size} selected</span>
          <Button size="sm" variant="ghost">Publish</Button>
          <Button size="sm" variant="ghost">Archive</Button>
          <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
            Delete
          </Button>
        </div>
      )}

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40">
              <TableHead className="w-10">
                <Checkbox
                  checked={allChecked}
                  onCheckedChange={(v) => {
                    if (v) setSelected(new Set(filtered.map((r) => r.id)));
                    else setSelected(new Set());
                  }}
                />
              </TableHead>
              {columns.map((c) => (
                <TableHead key={String(c.key)} className={cn("text-[11px] uppercase tracking-wider text-muted-foreground", c.className)}>
                  {c.header}
                </TableHead>
              ))}
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row) => {
              const checked = selected.has(row.id);
              return (
                <TableRow key={String(row.id)} className="group transition-colors hover:bg-muted/40">
                  <TableCell>
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(v) => {
                        const next = new Set(selected);
                        if (v) next.add(row.id);
                        else next.delete(row.id);
                        setSelected(next);
                      }}
                    />
                  </TableCell>
                  {columns.map((c) => (
                    <TableCell key={String(c.key)} className={cn("py-3 text-sm", c.className)}>
                      {c.render ? c.render(row) : String((row as Record<string, unknown>)[c.key as string] ?? "")}
                    </TableCell>
                  ))}
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-60 group-hover:opacity-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3 text-xs text-muted-foreground">
        <span>Showing {filtered.length} of {data.length}</span>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" className="h-8">Previous</Button>
          <Button variant="outline" size="sm" className="h-8 bg-primary/10 text-primary">1</Button>
          <Button variant="ghost" size="sm" className="h-8">2</Button>
          <Button variant="ghost" size="sm" className="h-8">3</Button>
          <Button variant="outline" size="sm" className="h-8">Next</Button>
        </div>
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "bg-secondary/10 text-secondary border-secondary/20",
    Published: "bg-secondary/10 text-secondary border-secondary/20",
    Confirmed: "bg-secondary/10 text-secondary border-secondary/20",
    Paid: "bg-secondary/10 text-secondary border-secondary/20",
    Approved: "bg-secondary/10 text-secondary border-secondary/20",
    Pending: "bg-accent/10 text-accent border-accent/20",
    Draft: "bg-muted text-muted-foreground border-border",
    Scheduled: "bg-royal-100 text-royal-700 border-royal-200",
    Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
    Failed: "bg-destructive/10 text-destructive border-destructive/20",
    Refunded: "bg-destructive/10 text-destructive border-destructive/20",
    Archived: "bg-muted text-muted-foreground border-border",
    Suspended: "bg-destructive/10 text-destructive border-destructive/20",
    Featured: "bg-primary/10 text-primary border-primary/20",
    Verified: "bg-primary/10 text-primary border-primary/20",
  };
  return (
    <Badge variant="outline" className={cn("rounded-full border px-2 py-0.5 text-[11px] font-semibold", map[status] ?? "bg-muted")}>
      <span className={cn("mr-1.5 h-1.5 w-1.5 rounded-full", (map[status] ?? "").includes("secondary") ? "bg-secondary" : (map[status] ?? "").includes("accent") ? "bg-accent" : (map[status] ?? "").includes("destructive") ? "bg-destructive" : "bg-muted-foreground")} />
      {status}
    </Badge>
  );
}
