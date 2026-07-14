import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTaj from "@/assets/hero-taj.jpg";

export const Route = createFileRoute("/welcome")({
  head: () => ({
    meta: [
      { title: "Welcome · Paryatan Bharati" },
      { name: "description", content: "Sign in or create your Paryatan Bharati account to plan authentic Indian journeys." },
    ],
  }),
  component: Welcome,
});

function Welcome() {
  return (
    <div className="relative isolate min-h-dvh overflow-hidden bg-charcoal text-primary-foreground">
      <img src={heroTaj} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="hero-scrim absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs backdrop-blur animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-accent" /> India's premium tourism ecosystem
        </span>
        <div className="mt-6 grid h-16 w-16 place-items-center rounded-lg bg-gradient-sunset text-accent-foreground shadow-lg animate-fade-up">
          <Compass className="h-8 w-8" />
        </div>
        <h1 className="text-display mt-6 animate-fade-up">Paryatan Bharati</h1>
        <p className="text-body-lg mt-4 max-w-xl text-primary-foreground/85 animate-fade-up">
          Discover heritage, plan with AI, and travel with trusted partners across all 28 states of India.
        </p>
        <div className="mt-10 flex w-full max-w-md flex-col gap-3 animate-fade-up sm:flex-row">
          <Button asChild variant="hero" size="xl" className="flex-1">
            <Link to="/auth/login">Sign in</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="flex-1 border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
          >
            <Link to="/auth/signup">Create account</Link>
          </Button>
        </div>
        <Link to="/" className="mt-6 inline-flex items-center gap-1 text-sm text-primary-foreground/80 underline-offset-4 hover:text-accent hover:underline">
          Continue as guest <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-primary-foreground/80 animate-fade-up">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> Ministry of Tourism partner</span>
          <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 fill-accent text-accent" /> 4.9 · 12k reviews</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> PCI-DSS secure payments</span>
        </div>
      </div>
    </div>
  );
}
