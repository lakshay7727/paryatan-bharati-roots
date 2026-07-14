import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth/reset")({
  head: () => ({ meta: [{ title: "Reset password · Paryatan Bharati" }] }),
  component: ResetPage,
});

function ResetPage() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <AuthShell title="Password updated" subtitle="Your account is secure. Sign in with your new password.">
        <div className="surface-card grid place-items-center gap-4 p-8 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 className="h-8 w-8" /></div>
          <Button asChild variant="hero" size="lg"><Link to="/auth/login">Sign in</Link></Button>
        </div>
      </AuthShell>
    );
  }
  return (
    <AuthShell title="Set a new password" subtitle="Choose something strong you haven't used before.">
      <div className="space-y-4">
        <div><Label htmlFor="p1">New password</Label><Input id="p1" type="password" placeholder="••••••••" className="mt-1.5" /></div>
        <div><Label htmlFor="p2">Confirm new password</Label><Input id="p2" type="password" placeholder="••••••••" className="mt-1.5" /></div>
        <Button variant="hero" size="lg" className="w-full" onClick={() => setDone(true)}>Update password</Button>
      </div>
    </AuthShell>
  );
}
