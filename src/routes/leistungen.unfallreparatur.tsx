import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, makeServiceHead } from "@/components/service-page";

export const Route = createFileRoute("/leistungen/unfallreparatur")({
  head: makeServiceHead({
    slug: "unfallreparatur",
    title: "Unfallreparatur Berlin Tempelhof | Meisterwerkstatt Stern",
    description:
      "Unfallreparatur und Karosseriearbeiten in Berlin-Tempelhof. Wir übernehmen die Abwicklung mit Ihrer Versicherung – schnell und unkompliziert.",
  }),
  component: () => (
    <ServicePage
      h1="Unfallreparatur & Karosserie in Berlin – Meisterwerkstatt Stern"
      serviceName="Unfallreparatur & Karosserie"
      paragraphs={[
        "Nach einem Unfall sind wir Ihr verlässlicher Partner. Unsere Meisterwerkstatt in Berlin Tempelhof übernimmt Karosseriearbeiten, Lackierung und Instandsetzung – fachgerecht und in Originalqualität.",
        "Auf Wunsch übernehmen wir auch die komplette Abwicklung mit Ihrer Versicherung. So sparen Sie Zeit und Nerven nach dem Schadenfall in Berlin Tempelhof.",
        "Unsere Kunden kommen aus Tempelhof, Neukölln, Kreuzberg, Mariendorf und Schöneberg.",
      ]}
      included={[
        "Schadensaufnahme und Kostenvoranschlag",
        "Karosserie- und Rahmenrichten",
        "Lackierung in Originalfarbton",
        "Glasarbeiten und Scheibentausch",
        "Komplette Versicherungsabwicklung auf Wunsch",
      ]}
      prices={[
        // TODO: Add real prices
        { label: "Schadensaufnahme & Kostenvoranschlag", price: "kostenlos" },
        { label: "Lackierung Einzelteil", price: "auf Anfrage" },
        { label: "Karosseriearbeiten", price: "auf Anfrage" },
        { label: "Versicherungsabwicklung", price: "inklusive" },
      ]}
    />
  ),
});
