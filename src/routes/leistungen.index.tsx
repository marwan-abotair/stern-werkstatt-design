import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PriceTable } from "@/components/price-table";
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
  { to: "/leistungen/hu-au", title: "Hauptuntersuchung (HU/AU)", desc: "Termine kurzfristig verfügbar – wir bereiten Ihr Fahrzeug optimal vor." },
  { to: "/leistungen/oelwechsel", title: "Ölwechsel", desc: "Mit Markenölen passend zu Ihrem Fahrzeug, inkl. Filterwechsel." },
  { to: "/leistungen/reifenwechsel", title: "Reifenwechsel & Einlagerung", desc: "Saisonwechsel, Wuchten und fachgerechte Einlagerung." },
  { to: "/leistungen/bremsenservice", title: "Bremsenservice", desc: "Bremsbeläge, Scheiben, Bremsflüssigkeit – für maximale Sicherheit." },
  { to: "/leistungen/klimaanlage", title: "Klimaanlagenwartung", desc: "Desinfektion, Befüllung und Funktionsprüfung Ihrer Klimaanlage." },
  { to: "/leistungen/achsvermessung", title: "Achsvermessung", desc: "Präzise Achsvermessung für gleichmäßigen Reifenverschleiß." },
  { to: "/leistungen/unfallreparatur", title: "Unfallreparatur & Karosserie", desc: "Karosseriearbeiten, Lackierung und Abwicklung mit der Versicherung." },
] as const;

// TODO: Add real prices
const overviewPrices = [
  { label: "Ölwechsel inkl. Motoröl", price: "ab XX €" },
  { label: "Reifenwechsel (4 Räder)", price: "ab XX €" },
  { label: "Klimaanlage Service", price: "ab XX €" },
  { label: "Bremsbeläge vorne", price: "ab XX €" },
  { label: "HU/AU Durchführung", price: "auf Anfrage" },
  { label: "Achsvermessung", price: "ab XX €" },
  { label: "Inspektion nach Herstellervorgabe", price: "auf Anfrage" },
];

function LeistungenPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 border-b-2 border-red-accent pb-2">
        Unsere Leistungen – KFZ-Werkstatt Berlin Tempelhof
      </h1>
      <p className="text-muted-foreground max-w-3xl mb-8">
        Als Meisterwerkstatt in Berlin-Tempelhof bieten wir alle Kfz-Leistungen für Kunden aus
        Tempelhof, Neukölln, Kreuzberg und Umgebung – an allen Marken und Modellen.
      </p>

      <PriceTable rows={overviewPrices} caption="Preisübersicht (Auszug)" />

      <h2 className="text-xl font-bold mt-10 mb-4">Leistungen im Detail</h2>
      <ul className="border border-border divide-y divide-border bg-card">
        {services.map((s) => (
          <li key={s.to}>
            <Link
              to={s.to}
              className="flex items-start justify-between gap-4 px-4 py-3 hover:bg-grey-light transition"
            >
              <div>
                <span className="font-semibold">{s.title}</span>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-red-accent shrink-0 mt-1" />
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm">
        Weitere Leistungen wie allgemeine Kfz-Reparaturen und Inspektionen aller Marken auf
        Anfrage. Sprechen Sie uns einfach an.
      </p>

      <div className="mt-8">
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 rounded-sm bg-red-accent px-5 py-2.5 font-semibold text-red-accent-foreground hover:opacity-90"
        >
          Termin anfragen <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
