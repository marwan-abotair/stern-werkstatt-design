import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, makeServiceHead } from "@/components/service-page";

export const Route = createFileRoute("/leistungen/bremsenservice")({
  head: makeServiceHead({
    slug: "bremsenservice",
    title: "Bremsenservice Berlin Tempelhof | Meisterwerkstatt Stern",
    description:
      "Bremsenservice in Berlin-Tempelhof: Bremsbeläge, Bremsscheiben und Bremsflüssigkeit. Sicherheit zuerst – Termin in Ihrer KFZ-Meisterwerkstatt.",
  }),
  component: () => (
    <ServicePage
      h1="Bremsenservice in Berlin – Meisterwerkstatt Stern"
      serviceName="Bremsenservice"
      paragraphs={[
        "Funktionierende Bremsen sind die Grundlage für Ihre Sicherheit im Straßenverkehr. In unserer Werkstatt in Berlin Tempelhof prüfen wir Ihr Bremssystem gründlich und tauschen verschlissene Teile gegen Markenqualität.",
        "Wir arbeiten an allen Marken und Modellen. Auf Wunsch erhalten Sie vorab einen transparenten Kostenvoranschlag für den Bremsenservice in Berlin Tempelhof.",
        "Termine kurzfristig verfügbar – auch für Kunden aus Neukölln und Kreuzberg.",
      ]}
      included={[
        "Sichtprüfung des kompletten Bremssystems",
        "Wechsel von Bremsbelägen und Bremsscheiben",
        "Wechsel der Bremsflüssigkeit",
        "Funktionsprüfung nach Reparatur",
        "Probefahrt zur Endkontrolle",
      ]}
    />
  ),
});
