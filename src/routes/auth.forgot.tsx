import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MailCheck } from "lucide-react";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth/forgot")({
  head: () => ({ meta: [{ title: "Forgot password · Paryatan Bharati" }] }),
  component: ForgotPage,
});

function ForgotPage() {
  const [sent, setSent] = useState(false);
  return (
    <AuthShell
      title={sent ? "Check your inbox" : "Forgot password?"}
      subtitle={sent ? "We've sent a secure reset link. It expires in 30 minutes." : "Enter the email tied to your account and we'll send a reset link."}
      footer={<><Link to="/auth/login" className="text-primary hover:underline">Back to sign in</Link></>}
    >
      {sent ? (
        <div className="surface-card grid place-items-center gap-3 p-8 text-center">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700"><MailCheck className="h-7 w-7" /></div>
          <p className="text-sm text-muted-foreground">Didn't get it? Check spam or <button onClick={() => setSent(false)} className="text-primary hover:underline">try again</button>.</p>
          <Button asChild variant="hero" className="mt-2"><Link to="/auth/reset">I have a code</Link></Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <div className="relative mt-1.5">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" placeholder="you@example.com" className="pl-9" />
            </div>
          </div>
          <Button variant="hero" size="lg" className="w-full" onClick={() => setSent(true)}>Send reset link</Button>
        </div>
      )}
    </AuthShell>
  );
}
