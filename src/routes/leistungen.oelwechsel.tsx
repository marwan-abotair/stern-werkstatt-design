import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, makeServiceHead } from "@/components/service-page";

export const Route = createFileRoute("/leistungen/oelwechsel")({
  head: makeServiceHead({
    slug: "oelwechsel",
    title: "Ölwechsel Berlin Tempelhof | Meisterwerkstatt Stern",
    description:
      "Professioneller Ölwechsel in Berlin-Tempelhof. Markenöle, Filterwechsel inklusive. Schnelltermin in Ihrer KFZ-Meisterwerkstatt – faire Preise.",
  }),
  component: () => (
    <ServicePage
      h1="Ölwechsel in Berlin – Meisterwerkstatt Stern"
      serviceName="Ölwechsel"
      paragraphs={[
        "Regelmäßiger Ölwechsel verlängert die Lebensdauer Ihres Motors. In unserer Werkstatt in Berlin Tempelhof verwenden wir ausschließlich hochwertige Markenöle, die exakt zur Spezifikation Ihres Fahrzeugs passen.",
        "Der Wechsel erfolgt in der Regel innerhalb einer Stunde. Wir entsorgen Altöl und alte Filter umweltgerecht und prüfen auf Wunsch weitere Verschleißteile.",
        "Ölwechsel in Berlin Tempelhof – schnell, sauber, fair. Auch für Kunden aus Neukölln, Kreuzberg und Schöneberg.",
      ]}
      included={[
        "Hochwertiges Marken-Motoröl nach Herstellerfreigabe",
        "Wechsel des Ölfilters",
        "Umweltgerechte Entsorgung des Altöls",
        "Prüfung weiterer Flüssigkeitsstände",
        "Reset der Wartungsanzeige",
      ]}
      prices={[
        // TODO: Add real prices
        { label: "Ölwechsel Kleinwagen inkl. Öl & Filter", price: "ab XX €" },
        { label: "Ölwechsel Mittelklasse inkl. Öl & Filter", price: "ab XX €" },
        { label: "Ölwechsel SUV / Oberklasse", price: "ab XX €" },
        { label: "Zusatz: Innenraumfilter wechseln", price: "ab XX €" },
      ]}
    />
  ),
});
