import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, makeServiceHead } from "@/components/service-page";

export const Route = createFileRoute("/leistungen/hu-au")({
  head: makeServiceHead({
    slug: "hu-au",
    title: "Hauptuntersuchung (HU/AU) Berlin Tempelhof | Meisterwerkstatt Stern",
    description:
      "HU & AU in Berlin-Tempelhof: schnelle Termine, faire Preise. Ihre Meisterwerkstatt bereitet Ihr Fahrzeug zuverlässig auf die Hauptuntersuchung vor.",
  }),
  component: () => (
    <ServicePage
      h1="Hauptuntersuchung (HU/AU) in Berlin – Meisterwerkstatt Stern"
      serviceName="Hauptuntersuchung (HU/AU)"
      paragraphs={[
        "Die Hauptuntersuchung ist Pflicht – wir machen sie für Sie unkompliziert. In unserer Meisterwerkstatt in Berlin-Tempelhof prüfen wir Ihr Fahrzeug vorab gründlich, sodass die HU beim ersten Anlauf besteht.",
        "Bei Bedarf beheben wir kleinere Mängel direkt vor Ort. Termine für HU/AU in Berlin Tempelhof sind kurzfristig verfügbar – sprechen Sie uns einfach an.",
        "Wir betreuen Kunden aus Tempelhof, Neukölln, Kreuzberg, Mariendorf und Schöneberg. Alle Marken und Modelle.",
      ]}
      included={[
        "Vorabprüfung Ihres Fahrzeugs",
        "Durchführung der Haupt- und Abgasuntersuchung",
        "Plakette nach bestandener HU",
        "Beratung bei Mängeln und schnelle Reparatur",
      ]}
    />
  ),
});
