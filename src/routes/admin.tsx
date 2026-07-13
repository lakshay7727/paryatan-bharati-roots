import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Console — Paryatan Bharati" },
      { name: "description", content: "Manage the entire Paryatan Bharati tourism ecosystem: bookings, packages, destinations, content, users and analytics." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: () => <Outlet />,
});
