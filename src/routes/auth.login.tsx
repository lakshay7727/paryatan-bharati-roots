import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2, Mail, Phone } from "lucide-react";
import { AuthShell } from "@/components/site/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/auth/login")({
  head: () => ({ meta: [{ title: "Sign in · Paryatan Bharati" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue planning your next Indian journey."
      footer={
        <>
          New to Paryatan Bharati?{" "}
          <Link to="/auth/signup" className="font-medium text-primary hover:underline">Create an account</Link>
        </>
      }
    >
      <Tabs defaultValue="email">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email"><Mail className="h-4 w-4" /> Email</TabsTrigger>
          <TabsTrigger value="otp"><Phone className="h-4 w-4" /> Mobile OTP</TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="mt-6 space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/auth/forgot" className="text-xs text-primary hover:underline">Forgot?</Link>
            </div>
            <div className="relative mt-1.5">
              <Input id="password" type={show ? "text" : "password"} placeholder="••••••••" />
              <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox defaultChecked /> Remember me for 30 days
          </label>
          <Button variant="hero" size="lg" className="w-full" disabled={loading} onClick={() => { setLoading(true); setTimeout(() => (window.location.href = "/dashboard"), 900); }}>
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Signing in…</> : "Sign in"}
          </Button>
        </TabsContent>

        <TabsContent value="otp" className="mt-6 space-y-4">
          <div>
            <Label htmlFor="mobile">Mobile number</Label>
            <div className="mt-1.5 flex gap-2">
              <span className="grid w-16 place-items-center rounded-md border border-input bg-muted text-sm font-medium">+91</span>
              <Input id="mobile" placeholder="98765 43210" />
            </div>
          </div>
          <Button asChild variant="hero" size="lg" className="w-full"><Link to="/auth/otp">Send OTP</Link></Button>
        </TabsContent>
      </Tabs>

      <div className="my-6 flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">or continue with</span>
        <Separator className="flex-1" />
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <Button variant="outline" size="lg">
          <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0012 23z"/><path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 015.5 12c0-.73.13-1.43.34-2.1V7.07H2.18A11 11 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"/></svg>
          Google
        </Button>
        <Button variant="outline" size="lg">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.417 2.243-1.245 3.083-.822.837-2.033 1.485-3.222 1.386-.14-1.083.417-2.223 1.24-3.087.83-.868 2.146-1.53 3.227-1.382zM20.5 17.28c-.554 1.275-.822 1.847-1.537 2.976-.998 1.575-2.406 3.536-4.15 3.552-1.55.014-1.948-.997-4.05-.986-2.102.012-2.54 1.004-4.09.99-1.745-.016-3.078-1.79-4.076-3.363C.09 16.51-.176 11.35 2.13 8.612c1.638-1.948 4.221-3.088 6.65-3.13 2.06-.037 4.006 1.383 5.267 1.383 1.26 0 3.628-1.708 6.113-1.457.913.038 3.475.368 5.122 2.775-.132.083-3.056 1.783-3.023 5.323.04 4.223 3.7 5.627 3.74 5.644z"/></svg>
          Apple
        </Button>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        By continuing you agree to our <Link to="/about" className="underline">Terms</Link> and <Link to="/about" className="underline">Privacy Policy</Link>.
      </p>
    </AuthShell>
  );
}
