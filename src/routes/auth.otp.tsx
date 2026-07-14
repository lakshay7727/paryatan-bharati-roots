import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/auth/otp")({
  head: () => ({ meta: [{ title: "Verify OTP · Paryatan Bharati" }] }),
  component: OtpPage,
});

function OtpPage() {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(45);
  const [verified, setVerified] = useState(false);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const handle = (i: number, v: string) => {
    const val = v.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    if (val && i < 5) refs.current[i + 1]?.focus();
  };

  const complete = digits.every((d) => d);

  if (verified) {
    return (
      <AuthShell title="You're verified!" subtitle="Redirecting you to your dashboard…">
        <div className="grid place-items-center py-8">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-emerald-100 text-emerald-700 animate-fade-in">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <Button asChild variant="hero" size="lg" className="mt-8"><Link to="/dashboard">Go to dashboard</Link></Button>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="Verify your number" subtitle="We sent a 6-digit code to +91 •••• •• 3210. Enter it below.">
      <div className="flex justify-between gap-2">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            inputMode="numeric"
            maxLength={1}
            value={d}
            onChange={(e) => handle(i, e.target.value)}
            onKeyDown={(e) => { if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus(); }}
            className={cn(
              "h-14 w-full flex-1 rounded-md border border-input bg-background text-center font-display text-2xl font-semibold shadow-xs focus:border-primary focus:outline-none",
              d && "border-primary bg-royal-50/40",
            )}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {seconds > 0 ? <>Resend code in <span className="font-medium text-foreground">0:{seconds.toString().padStart(2, "0")}</span></> : (
          <button className="text-primary hover:underline" onClick={() => setSeconds(45)}>Resend code</button>
        )}
      </p>
      <Button variant="hero" size="lg" className="mt-6 w-full" disabled={!complete} onClick={() => setVerified(true)}>Verify & continue</Button>
      <Button asChild variant="ghost" size="lg" className="mt-2 w-full"><Link to="/auth/login">Use a different number</Link></Button>
    </AuthShell>
  );
}
