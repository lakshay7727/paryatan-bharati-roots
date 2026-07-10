import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ · Paryatan Bharati" },
      { name: "description", content: "Answers about bookings, payments, government schemes, student tourism and travel support." },
    ],
  }),
  component: FaqPage,
});

const CATS = [
  {
    id: "booking",
    label: "Booking",
    faqs: [
      { q: "How do I book a package?", a: "Pick a package, choose dates and travellers, then complete secure payment. You get an e-ticket within minutes." },
      { q: "Can I modify a booking?", a: "Yes, up to 48 hours before travel from your Bookings page." },
      { q: "Are group discounts available?", a: "Groups of 6+ get automatic pricing benefits at checkout." },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    faqs: [
      { q: "Do you provide guides?", a: "Certified, Ministry-approved guides are available for every heritage circuit." },
      { q: "Is airport pickup included?", a: "It is an add-on you can select during booking." },
    ],
  },
  {
    id: "government",
    label: "Government schemes",
    faqs: [
      { q: "What is the PRASHAD scheme?", a: "Pilgrimage Rejuvenation And Spiritual, Heritage Augmentation Drive by the Ministry of Tourism." },
      { q: "How do I apply for a subsidy?", a: "Verified schemes appear at checkout for eligible destinations." },
    ],
  },
  {
    id: "student",
    label: "Student tourism",
    faqs: [
      { q: "Are student trips supervised?", a: "All student tours have qualified educators and 24×7 medical support." },
      { q: "Do you offer certificates?", a: "Yes — after completion of an educational trip." },
    ],
  },
  {
    id: "payments",
    label: "Payments & refunds",
    faqs: [
      { q: "Which payment methods are supported?", a: "UPI, credit/debit cards, netbanking and EMI." },
      { q: "How long do refunds take?", a: "3–7 working days to the original payment method." },
    ],
  },
  {
    id: "account",
    label: "Account",
    faqs: [
      { q: "How do I delete my account?", a: "Settings → Privacy → Delete account. This is permanent." },
    ],
  },
  {
    id: "training",
    label: "Training",
    faqs: [
      { q: "Who can enrol in guide programs?", a: "Any Indian citizen 18+ with basic English or a regional language." },
    ],
  },
];

function FaqPage() {
  const [q, setQ] = useState("");
  const filtered = CATS.map((c) => ({
    ...c,
    faqs: c.faqs.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase())),
  })).filter((c) => c.faqs.length);

  return (
    <PageShell>
      <PageHero
        eyebrow="Help center"
        title="Frequently asked questions"
        description="Search below or browse by category — real answers, no runaround."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      >
        <div className="surface-card flex items-center gap-2 rounded-xl p-2">
          <Search className="ml-2 h-5 w-5 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search 'refund', 'guide', 'PRASHAD'…"
            className="h-11 border-0 shadow-none focus-visible:ring-0"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {filtered.map((c) => (
          <div key={c.id} className="mb-10">
            <h2 className="text-h2 mb-4">{c.label}</h2>
            <Accordion type="single" collapsible className="surface-card divide-y divide-border px-4">
              {c.faqs.map((f, i) => (
                <AccordionItem key={i} value={`${c.id}-${i}`} className="border-0">
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
