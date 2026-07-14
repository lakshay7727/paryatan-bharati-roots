import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/auth/signup")({
  head: () => ({ meta: [{ title: "Create account · Paryatan Bharati" }] }),
  component: SignupPage,
});

function scorePassword(p: string) {
  let s = 0;
  if (p.length >= 8) s++;
  if (/[A-Z]/.test(p)) s++;
  if (/[0-9]/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p)) s++;
  return s;
}

function SignupPage() {
  const [pw, setPw] = useState("");
  const score = scorePassword(pw);
  const strengthLabel = ["Too short", "Weak", "Okay", "Strong", "Excellent"][score];
  return (
    <AuthShell
      title="Create your account"
      subtitle="Save trips, unlock rewards, and access government tourism benefits."
      footer={<>Already registered? <Link to="/auth/login" className="font-medium text-primary hover:underline">Sign in</Link></>}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full name" placeholder="Priya Sharma" full />
        <Field id="email" label="Email" type="email" placeholder="you@example.com" />
        <Field id="mobile" label="Mobile" placeholder="+91 98765 43210" />
        <div className="sm:col-span-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" className="mt-1.5" value={pw} onChange={(e) => setPw(e.target.value)} />
          <div className="mt-2 flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={cn("h-1.5 flex-1 rounded-full transition-colors", i < score ? ["bg-destructive", "bg-accent", "bg-emerald-500", "bg-emerald-600"][score - 1] : "bg-muted")} />
            ))}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">{pw ? strengthLabel : "Use 8+ chars with a number & symbol."}</p>
        </div>
        <Field id="confirm" label="Confirm password" type="password" placeholder="••••••••" />
        <div>
          <Label>Country</Label>
          <Select defaultValue="in"><SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="in">India</SelectItem><SelectItem value="np">Nepal</SelectItem><SelectItem value="lk">Sri Lanka</SelectItem></SelectContent>
          </Select>
        </div>
        <div>
          <Label>State</Label>
          <Select><SelectTrigger className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent><SelectItem value="mh">Maharashtra</SelectItem><SelectItem value="dl">Delhi</SelectItem><SelectItem value="kl">Kerala</SelectItem><SelectItem value="rj">Rajasthan</SelectItem></SelectContent>
          </Select>
        </div>
        <Field id="city" label="City" placeholder="Mumbai" />
      </div>
      <label className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
        <Checkbox defaultChecked className="mt-0.5" />
        <span>I agree to the <Link to="/about" className="text-primary underline">Terms</Link> and <Link to="/about" className="text-primary underline">Privacy Policy</Link>.</span>
      </label>
      <Button asChild variant="hero" size="lg" className="mt-6 w-full"><Link to="/auth/otp"><Check className="h-4 w-4" /> Create account</Link></Button>
    </AuthShell>
  );
}

function Field({ id, label, placeholder, type = "text", full }: { id: string; label: string; placeholder?: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} className="mt-1.5" />
    </div>
  );
}
