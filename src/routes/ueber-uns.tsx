import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Search, Wrench } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const title = "Über uns | Meisterwerkstatt Stern Berlin-Tempelhof";
const description =
  "KFZ-Meisterbetrieb in Berlin-Tempelhof. Wir stehen für faire Preise, höchste Transparenz und professionelle Arbeit an allen Marken und Modellen.";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/ueber-uns` }],
  }),
  component: UeberUnsPage,
});

const pillars = [
  { icon: Award, title: "Meisterbetrieb", desc: "Geprüfte Qualität nach Meisterstandard." },
  { icon: Search, title: "Transparenz", desc: "Klare Kommunikation und faire Kostenvoranschläge." },
  { icon: Wrench, title: "Erfahrung & Qualität", desc: "Langjährige Erfahrung an allen Marken." },
];

function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Über uns – Meisterwerkstatt Stern Berlin
      </h1>
      <p className="text-lg leading-relaxed text-muted-foreground mb-10">
        Als KFZ-Meisterbetrieb in Berlin-Tempelhof stehen wir für faire Preise, höchste Transparenz
        und professionelle Arbeit an allen Marken und Modellen. Kunden aus Tempelhof, Neukölln,
        Kreuzberg, Mariendorf und Schöneberg vertrauen auf unsere Erfahrung.
      </p>

      <div className="grid gap-6 sm:grid-cols-3 mb-12">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-xl border bg-card p-6 text-center">
            <p.icon className="h-10 w-10 text-red-accent mx-auto mb-3" />
            <h2 className="font-bold text-lg mb-2">{p.title}</h2>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-semibold text-red-accent-foreground hover:opacity-90"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  );
}
