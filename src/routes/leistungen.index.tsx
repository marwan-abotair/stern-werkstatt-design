import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench, Gauge, Disc, Snowflake, Ruler, Car, Settings, Droplet, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const title = "Leistungen | KFZ-Werkstatt Berlin Tempelhof – Meisterwerkstatt Stern";
const description =
  "Alle Kfz-Leistungen unserer Meisterwerkstatt in Berlin-Tempelhof: HU/AU, Ölwechsel, Reifen, Bremsen, Klima, Achsvermessung und Unfallreparatur.";

export const Route = createFileRoute("/leistungen/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${CONTACT.siteUrl}/leistungen` }],
  }),
  component: LeistungenPage,
});

const services = [
  { to: "/leistungen/hu-au", icon: ShieldCheck, title: "Hauptuntersuchung (HU/AU)", desc: "Termine kurzfristig verfügbar – wir bereiten Ihr Fahrzeug optimal vor." },
  { to: "/leistungen/oelwechsel", icon: Droplet, title: "Ölwechsel", desc: "Mit Markenölen passend zu Ihrem Fahrzeug, inkl. Filterwechsel." },
  { to: "/leistungen/reifenwechsel", icon: Disc, title: "Reifenwechsel & Einlagerung", desc: "Saisonwechsel, Wuchten und fachgerechte Einlagerung." },
  { to: "/leistungen/bremsenservice", icon: Gauge, title: "Bremsenservice", desc: "Bremsbeläge, Scheiben, Bremsflüssigkeit – für maximale Sicherheit." },
  { to: "/leistungen/klimaanlage", icon: Snowflake, title: "Klimaanlagenwartung", desc: "Desinfektion, Befüllung und Funktionsprüfung Ihrer Klimaanlage." },
  { to: "/leistungen/achsvermessung", icon: Ruler, title: "Achsvermessung", desc: "Präzise 3D-Achsvermessung für gleichmäßigen Reifenverschleiß." },
  { to: "/leistungen/unfallreparatur", icon: Car, title: "Unfallreparatur & Karosserie", desc: "Karosseriearbeiten, Lackierung und Abwicklung mit der Versicherung." },
] as const;

const extras = [
  { icon: Settings, title: "Allgemeine Kfz-Reparaturen", desc: "Vom kleinen Defekt bis zur großen Reparatur – wir kümmern uns." },
  { icon: Wrench, title: "Alle Marken & Modelle", desc: "Wir arbeiten an Fahrzeugen aller Hersteller." },
];

function LeistungenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Unsere Leistungen – KFZ-Werkstatt Berlin Tempelhof
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-10">
        Als Meisterwerkstatt in Berlin-Tempelhof bieten wir alle Kfz-Leistungen für Kunden aus
        Tempelhof, Neukölln, Kreuzberg und Umgebung.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="group rounded-xl border bg-card p-6 hover:border-red-accent hover:shadow-md transition"
          >
            <s.icon className="h-8 w-8 text-red-accent mb-3" />
            <h2 className="font-bold text-lg mb-2">{s.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-accent">
              Mehr erfahren <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </span>
          </Link>
        ))}
        {extras.map((s) => (
          <div key={s.title} className="rounded-xl border bg-card p-6">
            <s.icon className="h-8 w-8 text-red-accent mb-3" />
            <h2 className="font-bold text-lg mb-2">{s.title}</h2>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-md bg-red-accent px-6 py-3 font-semibold text-red-accent-foreground hover:opacity-90"
        >
          Termin anfragen <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
