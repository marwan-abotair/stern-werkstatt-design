import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, makeServiceHead } from "@/components/service-page";

export const Route = createFileRoute("/leistungen/achsvermessung")({
  head: makeServiceHead({
    slug: "achsvermessung",
    title: "Achsvermessung Berlin Tempelhof | Meisterwerkstatt Stern",
    description:
      "Präzise Achsvermessung in Berlin-Tempelhof. Längere Reifenlebensdauer und besseres Fahrverhalten. Termin in Ihrer KFZ-Meisterwerkstatt.",
  }),
  component: () => (
    <ServicePage
      h1="Achsvermessung in Berlin – Meisterwerkstatt Stern"
      serviceName="Achsvermessung"
      paragraphs={[
        "Eine korrekt eingestellte Achse spart Sprit, schont die Reifen und sorgt für sicheres Fahrverhalten. In unserer Werkstatt in Berlin Tempelhof führen wir die Achsvermessung mit moderner Messtechnik durch.",
        "Empfehlenswert nach Unfällen, Bordsteinrempler, neuen Reifen oder bei einseitigem Reifenverschleiß. Für alle Marken und Modelle in Berlin Tempelhof.",
      ]}
      included={[
        "Vermessung von Spur und Sturz an allen Rädern",
        "Vergleich mit den Herstellerwerten",
        "Justierung der Einstellungen",
        "Detailliertes Messprotokoll",
      ]}
      prices={[
        // TODO: Add real prices
        { label: "Achsvermessung (4 Räder)", price: "ab XX €" },
        { label: "Achsvermessung inkl. Justierung", price: "ab XX €" },
      ]}
    />
  ),
});
